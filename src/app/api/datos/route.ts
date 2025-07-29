import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { dbConfig } from '../../../lib/db';

// Create MySQL connection
async function connectToDatabase() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        return connection;
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
}

// NEW: Card title to view name mapping
const CARD_TO_VIEW_MAPPING: { [key: string]: string } = {
    // Crecimiento sostenible
    'utilidad': 'vw_utilidad',
    'ebitda': 'vw_EBITDA',
    'valor_patrimonio': 'vw_valor_patrimonio',
    'intereses_operacionales_1': 'vw_interes_operacional1',
    'intereses_operacionales_2': 'vw_interes_operacional2',
    'valor_deuda': 'vw_valor_deuda',
    'crecimiento_patrimonio': 'vw_crecimiento_patrimonio',
    'creacion_de_valor': 'vw_creacion_de_valor',
    'ventas': 'vw_ventas',

    // Rentabilidad del patrimonio
    'rentabilidad_patrimonio': 'vw_rentabilidad_patrimonio',
    'rentabilidad_capital': 'vw_rentabilidad_capital',
    'utilidad_neta': 'vw_utilidad_neta',
    'rotacion_de_activos': 'vw_rotacion_de_activos',
    'palanca_financiera': 'vw_palanca_financiera',

    // Inversiones
    'inversiones': 'vw_inversiones',
    'crecimiento_ventas': 'vw_crecimiento_de_ventas',

    // Flujo de efectivo
    'fuentes_de_fondo': 'vw_fuentes_de_fondo',
    'caja_1': 'vw_caja1',
    'caja_2': 'vw_caja2',
    'usos_de_fondo': 'vw_usos_de_fondo',
    'flujo_operativo': 'vw_flujo_operativo',
    'pago_dividendos': 'vw_pago_dividendos',
    'flujo_inversiones': 'vw_flujo_inversiones',
    'credito': 'vw_credito',
    'capital_de_trabajo': 'vw_capital_de_trabajo',
    'caja_periodo': 'vw_caja_periodo',

    // Riesgo financiero
    'solvencia': 'vw_solvencia',
    'liquidez': 'vw_liquidez',
    'nivel_de_deuda': 'vw_nivel_de_deuda',
    'dividendos': 'vw_dividendos',
    'credito_neto': 'vw_credito_neto'
};

// NEW: Get data from database view for year range
async function getViewDataForYears(viewName: string, startYear: number, endYear: number): Promise<{ [year: number]: number }> {
    const connection = await connectToDatabase();

    try {
        const query = `SELECT periodo, valor FROM ${viewName} WHERE periodo BETWEEN ? AND ? ORDER BY periodo`;
        console.log(`Querying view ${viewName} for years ${startYear}-${endYear}`);
        console.log(`SQL Query: ${query} with params: [${startYear}, ${endYear}]`);

        const [rows] = await connection.execute(query, [startYear, endYear]);
        await connection.end();

        const results = rows as any[];
        console.log(`Query results for ${viewName}:`, results);

        const yearData: { [year: number]: number } = {};

        results.forEach((row: any) => {
            const year = parseInt(row.periodo);
            const value = parseFloat(row.valor || 0);
            yearData[year] = value;
            console.log(`View ${viewName} year ${year}: ${value}`);
        });

        // Fill in missing years with 0
        for (let year = startYear; year <= endYear; year++) {
            if (!(year in yearData)) {
                yearData[year] = 0;
                console.log(`View ${viewName} year ${year}: 0 (missing)`);
            }
        }

        return yearData;
    } catch (error) {
        await connection.end();
        console.error(`Failed to get data from view ${viewName}:`, error);

        // Return zeros for all years on error
        const errorData: { [year: number]: number } = {};
        for (let year = startYear; year <= endYear; year++) {
            errorData[year] = 0;
        }
        return errorData;
    }
}

// LEGACY: Keep old formula-based system as backup
// NEW: Get parameter value for a specific parameter code and year
async function getParameterValue(prmt_codigo: string, year?: number): Promise<number> {
    const connection = await connectToDatabase();

    try {
        let query: string;
        let queryParams: any[];

        if (year) {
            // Try to get year-specific parameter first
            query = `
                SELECT prmt_valor 
                FROM parametros 
                WHERE prmt_codigo = ? AND prmt_ano = ?
                LIMIT 1
            `;
            queryParams = [prmt_codigo, year];
            console.log(`Getting year-specific parameter: ${prmt_codigo} for year ${year}`);
        } else {
            // Fallback to non-year parameter
            query = `
                SELECT prmt_valor 
                FROM parametros 
                WHERE prmt_codigo = ? AND prmt_ano IS NULL
                LIMIT 1
            `;
            queryParams = [prmt_codigo];
            console.log(`Getting general parameter: ${prmt_codigo}`);
        }

        const [rows] = await connection.execute(query, queryParams);
        const results = rows as any[];

        if (results.length > 0) {
            const value = parseFloat(results[0].prmt_valor);
            console.log(`Parameter ${prmt_codigo} (year: ${year || 'null'}): ${value}`);
            await connection.end();
            return value;
        } else if (year) {
            // If year-specific parameter not found, try the general one
            console.log(`Year-specific parameter not found, trying general parameter...`);
            await connection.end();
            return await getParameterValue(prmt_codigo); // Recursive call without year
        } else {
            console.warn(`Parameter ${prmt_codigo} not found`);
            await connection.end();
            return 0;
        }
    } catch (error) {
        await connection.end();
        console.error(`Failed to get parameter ${prmt_codigo}:`, error);
        return 0;
    }
}

// Parse formula to extract both account codes and parameter codes
function parseCodesFromFormula(formula: string): { accountCodes: string[], parameterCodes: string[] } {
    const accountCodes = new Set<string>();
    const parameterCodes = new Set<string>();

    // 1. Match anything inside quotes - handle both single and double quotes
    const quotedRegex = /["']([^"']+)["']/g;
    let match;

    while ((match = quotedRegex.exec(formula)) !== null) {
        const content = match[1];

        if (/^\d+$/.test(content)) {
            // Pure numeric content = account code
            accountCodes.add(content);
        } else if (content.startsWith('p_')) {
            // Content starting with p_ = parameter code
            const paramCode = content.substring(2); // Remove 'p_' prefix
            parameterCodes.add(paramCode);
        }
    }

    // 2. Also match unquoted parameter patterns (p_PARAM_NAME)
    const unquotedParamRegex = /p_([A-Z_][A-Z0-9_]*)/g;
    let paramMatch;

    while ((paramMatch = unquotedParamRegex.exec(formula)) !== null) {
        const paramCode = paramMatch[1]; // Extract the part after 'p_'
        parameterCodes.add(paramCode);
        console.log(`Found unquoted parameter: p_${paramCode} -> ${paramCode}`);
    }

    console.log(`Formula: ${formula}`);
    console.log(`Extracted account codes:`, Array.from(accountCodes));
    console.log(`Extracted parameter codes:`, Array.from(parameterCodes));

    return {
        accountCodes: Array.from(accountCodes),
        parameterCodes: Array.from(parameterCodes)
    };
}

// Fix malformed formulas and normalize syntax
function preprocessFormula(formula: string): string {
    let processed = formula;

    // Fix the mismatched quote issue: 'p_UNID_MED" -> 'p_UNID_MED'
    processed = processed.replace(/'p_UNID_MED"/g, '"p_UNID_MED"');

    // Normalize all parameter quotes to double quotes: 'p_PARAM' -> "p_PARAM"
    processed = processed.replace(/'(p_[^']+)'/g, '"$1"');

    // Convert bare account codes to SUM() functions
    // This regex finds quoted numbers (account codes) that aren't already in SUM()
    processed = processed.replace(/(?<!SUM\()\s*["'](\d+)["']/g, 'SUM("$1")');

    console.log(`Original formula: ${formula}`);
    console.log(`Preprocessed formula: ${processed}`);

    return processed;
}

// Get formula from database (case insensitive)
async function getFormulaFromDB(formulaName: string): Promise<string | null> {
    const connection = await connectToDatabase();

    try {
        const query = `
            SELECT fmls_body 
            FROM fi.formulas 
            WHERE LOWER(fmls_desc) = LOWER(?)
        `;

        console.log(`Getting formula for: ${formulaName}`);
        const [rows] = await connection.execute(query, [formulaName]) as any;
        await connection.end();

        if (rows.length === 0) {
            console.warn(`Formula ${formulaName} not found in database`);
            return null; // Return null instead of throwing error
        }

        console.log(`Found formula: ${rows[0].fmls_body}`);
        return rows[0].fmls_body;
    } catch (error) {
        await connection.end();
        console.error('Failed to get formula from database:', error);
        return null; // Return null instead of throwing error
    }
}

// Get parameters from database
async function getParametersFromDB(parameterCodes: string[], year?: number): Promise<{ [key: string]: number }> {
    if (parameterCodes.length === 0) {
        return {};
    }

    const connection = await connectToDatabase();

    try {
        const placeholders = parameterCodes.map(() => '?').join(',');

        // Build query - if year provided, try to get year-specific parameter, otherwise get the generic one
        let query = `
            SELECT prmt_codigo, prmt_valor, prmt_ano
            FROM fi.parametros 
            WHERE prmt_codigo IN (${placeholders})
        `;

        if (year) {
            query += ` AND (prmt_ano = ? OR prmt_ano IS NULL)
                      ORDER BY prmt_ano DESC`; // Year-specific first, then generic
        }

        const queryParams = year ? [...parameterCodes, year] : parameterCodes;
        console.log('Parameters query:', query);
        console.log('Parameters query params:', queryParams);

        const [rows] = await connection.execute(query, queryParams) as any;
        await connection.end();

        const parameters: { [key: string]: number } = {};

        // Process results - prefer year-specific parameters
        for (const paramCode of parameterCodes) {
            const matches = rows.filter((row: any) => row.prmt_codigo === paramCode);

            if (matches.length > 0) {
                // If we have a year-specific match, use it; otherwise use generic
                const yearSpecific = matches.find((row: any) => row.prmt_ano === year);
                const generic = matches.find((row: any) => row.prmt_ano === null);
                const selected = yearSpecific || generic || matches[0];

                parameters[paramCode] = parseFloat(selected.prmt_valor);
                console.log(`Parameter ${paramCode} = ${parameters[paramCode]} (year: ${selected.prmt_ano || 'generic'})`);
            } else {
                console.warn(`Parameter ${paramCode} not found, using default value 1`);
                parameters[paramCode] = 1; // Default value
            }
        }

        return parameters;
    } catch (error) {
        await connection.end();
        console.error('Failed to get parameters from database:', error);
        throw error;
    }
}

// Get financial data from database for specific account types only
async function getFinancialDataOptimized(startYear: number, endYear: number, accountCodes: string[]): Promise<any[]> {
    if (!accountCodes || accountCodes.length === 0) {
        console.warn('No account codes provided, returning empty data');
        return [];
    }

    const connection = await connectToDatabase();

    try {
        // Build placeholders for account codes
        const placeholders = accountCodes.map(() => '?').join(',');

        // Validate placeholders
        if (!placeholders) {
            console.error('Failed to build placeholders from account codes:', accountCodes);
            await connection.end();
            return [];
        }

        const query = `
            SELECT 
                b.blnc_ano as ano,
                mc.macu_codigo as macu_codigo,
                CASE WHEN mc.macu_codigo_padre IS NULL THEN mc.macu_codigo ELSE mc.macu_codigo_padre END AS parent_code,
                b.blnc_monto AS valor
            FROM fi.balances b
            JOIN fi.maestro_cuentas mc ON b.macu_codigo = mc.macu_codigo
            WHERE b.blnc_ano BETWEEN ? AND ? 
            AND (mc.macu_codigo IN (${placeholders}) OR mc.macu_codigo_padre IN (${placeholders}))
            ORDER BY b.blnc_ano
        `;

        const queryParams = [startYear, endYear, ...accountCodes, ...accountCodes];
        console.log('Optimized SQL Query:', query);
        console.log('Query Parameters:', queryParams);
        console.log('Account codes to search for:', accountCodes);

        const [rows] = await connection.execute(query, queryParams);
        await connection.end();

        console.log(`Found ${(rows as any[]).length} financial records`);
        return rows as any[];
    } catch (error) {
        await connection.end();
        console.error('Database query failed:', error);
        throw error;
    }

}

// Replace parameter references in formula with actual values
function replaceParametersInFormula(formula: string, parameters: { [key: string]: number }): string {
    let processedFormula = formula;

    // Replace parameter references like "p_PROY_UTIL" or 'p_UNID_MED' with actual values
    const paramRegex = /["']p_([^"']+)["']/g;
    processedFormula = processedFormula.replace(paramRegex, (match, paramCode) => {
        const value = parameters[paramCode];
        if (value !== undefined) {
            console.log(`  Replacing "${match}" with ${value}`);
            return value.toString();
        } else {
            console.warn(`  Parameter ${paramCode} not found, keeping original: ${match}`);
            return match;
        }
    });

    console.log(`Formula after parameter replacement: ${processedFormula}`);
    return processedFormula;
}

// ========== ENHANCED FORMULA EVALUATOR ==========
// NEW: Simple projection formula evaluator for formulas with views and parameters
async function evaluateProjectionFormula(formula: string, year: number): Promise<number> {
    try {
        console.log(`\n=== PROJECTION FORMULA EVALUATION FOR YEAR ${year} ===`);
        console.log(`Original formula: "${formula}"`);

        let evaluatedFormula = formula;

        // Check for database views (vw_ pattern) with optional field names and replace with actual values
        const viewPattern = /vw_[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)?/g;
        const viewMatches = evaluatedFormula.match(viewPattern);

        if (viewMatches) {
            console.log(`Found ${viewMatches.length} view references:`, viewMatches);
            for (const viewRef of viewMatches) {
                let viewName: string;
                let fieldName: string | undefined;

                // Check if it has dot notation (view.field)
                if (viewRef.includes('.')) {
                    const [view, field] = viewRef.split('.');
                    viewName = view;
                    fieldName = field;
                    console.log(`Querying view: ${viewName}, field: ${fieldName} for year ${year}`);
                } else {
                    viewName = viewRef;
                    fieldName = undefined;
                    console.log(`Querying view: ${viewName} for year ${year}`);
                }

                const viewValue = await getViewValue(viewName, year, fieldName);
                console.log(`View ${viewRef} returned value: ${viewValue}`);
                evaluatedFormula = evaluatedFormula.replace(new RegExp(viewRef.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), viewValue.toString());
                console.log(`Formula after view substitution: "${evaluatedFormula}"`);
            }
        } else {
            console.log(`No view references found in formula`);
        }

        // Check for parameter references (p_ pattern) and replace with actual values
        const paramPattern = /p_[a-zA-Z_][a-zA-Z0-9_]*/g;
        const paramMatches = evaluatedFormula.match(paramPattern);

        if (paramMatches) {
            console.log(`Found ${paramMatches.length} parameter references:`, paramMatches);
            for (const paramRef of paramMatches) {
                const paramCode = paramRef.substring(2); // Remove 'p_' prefix
                console.log(`Querying parameter: ${paramRef} (code: ${paramCode}) for year ${year}`);
                const paramValue = await getParameterValue(paramCode, year);
                console.log(`Parameter ${paramRef} returned value: ${paramValue}`);
                evaluatedFormula = evaluatedFormula.replace(new RegExp(paramRef.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), paramValue.toString());
                console.log(`Formula after parameter substitution: "${evaluatedFormula}"`);
            }
        } else {
            console.log(`No parameter references found in formula`);
        }

        console.log(`Final formula for evaluation: "${evaluatedFormula}"`);

        // Use eval for mathematical expressions (be careful in production)
        const result = eval(evaluatedFormula);
        console.log(`Evaluation result: ${result}`);
        console.log(`Rounded result: ${Math.round(result)}`);
        console.log(`=== END PROJECTION FORMULA EVALUATION ===\n`);

        return Math.round(result);
    } catch (error) {
        console.error('Projection formula evaluation error:', error);
        console.error('Formula that failed:', formula);
        console.log(`=== END PROJECTION FORMULA EVALUATION (ERROR) ===\n`);
        return 0;
    }
}

// Get value from database view for specific year and field
async function getViewValue(viewName: string, year: number, fieldName?: string): Promise<number> {
    const connection = await connectToDatabase();

    try {
        let query: string;
        let columnName: string;
        let yearColumnName: string;

        // Determine year column name based on view
        if (viewName === 'vw_modelo') {
            yearColumnName = 'periodo';
        } else {
            yearColumnName = 'periodo'; // Updated to use 'periodo' for all views
        }

        // Determine field/column name
        if (fieldName) {
            // Specific field requested (from dot notation)
            columnName = fieldName;
            query = `SELECT ${fieldName} FROM ${viewName} WHERE ${yearColumnName} = ?`;
        } else {
            // Generic approach for all views - assumes 'valor' column
            query = `SELECT valor FROM ${viewName} WHERE ${yearColumnName} = ?`;
            columnName = 'valor';
        }

        console.log(`Querying view ${viewName} for year ${year} (${yearColumnName}), field: ${fieldName || columnName}`);
        console.log(`SQL Query: ${query} with params: [${year}]`);

        const [rows] = await connection.execute(query, [year]);
        await connection.end();

        const results = rows as any[];
        console.log(`Query results:`, results);

        if (results.length > 0) {
            const value = parseFloat(results[0][columnName] || 0);
            console.log(`View ${viewName}.${columnName} for year ${year}: ${value}`);
            return value;
        } else {
            console.warn(`No data found in view ${viewName} for year ${year}`);
            return 0;
        }
    } catch (error) {
        await connection.end();
        console.error(`Failed to get value from view ${viewName} for year ${year}, field ${fieldName}:`, error);
        return 0;
    }
}

// ========== MATH.JS DATABASE FORMULA EVALUATOR ==========
async function evaluateDatabaseFormula(allData: any[], year: number, formulaString: string, parameterCodes: string[]): Promise<number> {
    const yearData = allData.filter(item => item.ano === year);
    console.log(`\n=== EVALUATING FORMULA FOR YEAR ${year} ===`);
    console.log(`Found ${yearData.length} records for year ${year}`);
    console.log(`Year data sample:`, yearData.slice(0, 5));

    // Get parameters for this specific year
    const parameters = await getParametersFromDB(parameterCodes, year);
    console.log(`Parameters for year ${year}:`, parameters);

    // Replace parameter references in formula
    const processedFormula = replaceParametersInFormula(formulaString, parameters);
    console.log(`Final formula for evaluation: ${processedFormula}`);

    // Create math.js instance
    const { create, all } = await import('mathjs');
    const math = create(all, {});

    // Add custom functions to math.js scope
    math.import({
        SUM: (code: string) => {
            // Filter by either parent_code OR the specific account code
            const filtered = yearData.filter(item =>
                item.parent_code == code || // Match parent code (e.g., 800000)
                item.macu_codigo == code    // Match specific account code (e.g., 800001)
            );
            const sum = filtered.reduce((sum, item) => sum + parseFloat(item.valor), 0);
            console.log(`  SUM("${code}") = ${sum} (${filtered.length} records)`);
            if (filtered.length > 0) {
                console.log(`    Sample records:`, filtered.slice(0, 3));
            }
            return sum;
        },
        COUNT: (code: string) => {
            const count = yearData.filter(item =>
                item.parent_code == code || item.macu_codigo == code
            ).length;
            console.log(`  COUNT("${code}") = ${count}`);
            return count;
        },
        AVG: (code: string) => {
            const items = yearData.filter(item =>
                item.parent_code == code || item.macu_codigo == code
            );
            if (items.length === 0) return 0;
            const total = items.reduce((sum, item) => sum + parseFloat(item.valor), 0);
            const avg = total / items.length;
            console.log(`  AVG("${code}") = ${avg} (${items.length} records)`);
            return avg;
        },
        MAX: (code: string) => {
            const items = yearData.filter(item =>
                item.parent_code == code || item.macu_codigo == code
            );
            if (items.length === 0) return 0;
            const max = Math.max(...items.map(item => parseFloat(item.valor)));
            console.log(`  MAX("${code}") = ${max}`);
            return max;
        },
        MIN: (code: string) => {
            const items = yearData.filter(item =>
                item.parent_code == code || item.macu_codigo == code
            );
            if (items.length === 0) return 0;
            const min = Math.min(...items.map(item => parseFloat(item.valor)));
            console.log(`  MIN("${code}") = ${min}`);
            return min;
        }
    });

    try {
        console.log(`\nEvaluating: "${processedFormula}"`);
        const result = math.evaluate(processedFormula);
        console.log(`Year ${year} RESULT: ${result}`);
        console.log(`=== END EVALUATION FOR YEAR ${year} ===\n`);
        return result;
    } catch (error) {
        console.error(`Error evaluating: "${processedFormula}"`, error);
        return -1; // Return -1 instead of 0 for failed calculations
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const startYear = parseInt(searchParams.get('startYear') || '2024');
        const endYear = parseInt(searchParams.get('endYear') || '2027');
        const formulaName = searchParams.get('formula') || 'utilidad';
        const debug = searchParams.get('debug') === 'true'; // Add debug mode

        console.log(`=== Starting API request ===`);
        console.log(`Parameters: startYear=${startYear}, endYear=${endYear}, formula=${formulaName}, debug=${debug}`);

        // NEW: Check if this is a view-based formula (preferred method)
        const viewName = CARD_TO_VIEW_MAPPING[formulaName];

        if (viewName) {
            console.log(`Using VIEW-BASED approach for formula ${formulaName} -> view ${viewName}`);

            try {
                // Get data from the corresponding view
                const viewData = await getViewDataForYears(viewName, startYear, endYear);

                // Prepare response
                const years = Object.keys(viewData).map(year => year.toString()).sort();
                const values = years.map(year => viewData[parseInt(year)]);
                const total = values.reduce((sum, value) => sum + value, 0);

                console.log('View-based results by year:', viewData);
                console.log(`=== API request completed successfully using VIEW ${viewName} ===`);

                return NextResponse.json({
                    success: true,
                    data: {
                        dates: years,
                        values: values,
                        result: total,
                        formula: null,
                        originalFormula: null,
                        method: 'view_based',
                        view_name: viewName,
                        formula_name: formulaName
                    }
                });
            } catch (viewError) {
                console.warn(`View-based approach failed for ${formulaName}, falling back to formula-based approach:`, viewError);
                // Fall through to legacy formula-based approach
            }
        } else {
            console.log(`No view mapping found for formula ${formulaName}, using FORMULA-BASED approach`);
        }

        // LEGACY: Fall back to formula-based approach
        console.log(`Using LEGACY FORMULA-BASED approach for formula ${formulaName}`);

        // 1. Get formula from database
        const rawFormula = await getFormulaFromDB(formulaName);

        if (!rawFormula) {
            // Return -1 for all years when formula doesn't exist
            const years = [];
            const values = [];
            for (let year = startYear; year <= endYear; year++) {
                years.push(year.toString());
                values.push(-1);
            }

            return NextResponse.json({
                success: true,
                data: {
                    dates: years,
                    values: values,
                    result: -1,
                    formula: null,
                    originalFormula: null,
                    method: 'formula_not_found',
                    formula_name: formulaName,
                    warning: `Formula '${formulaName}' not found in database and no view mapping exists`
                }
            });
        }

        // 2. Preprocess formula to fix syntax and convert account codes to SUM() functions
        const formula = preprocessFormula(rawFormula);

        // 3. Parse formula to determine which account codes and parameters we need
        const { accountCodes, parameterCodes } = parseCodesFromFormula(formula);

        // Check if formula contains views (vw_) or standalone parameter references (p_)
        // This indicates a projection formula that should use simple evaluation
        const hasViews = /vw_[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)?/.test(formula);
        const hasStandaloneParams = /p_[a-zA-Z_][a-zA-Z0-9_]*/.test(formula);
        const isProjectionFormula = hasViews || (hasStandaloneParams && !formula.includes('SUM') && !formula.includes('COUNT'));

        if (accountCodes.length === 0 && parameterCodes.length === 0 && !isProjectionFormula) {
            console.warn(`No codes found in formula: ${formula}`);
            // Return default response when no codes found
            return NextResponse.json({
                success: true,
                data: {
                    dates: [],
                    values: [],
                    result: 0,
                    formula: formula,
                    method: 'mathjs_database_formula_with_parameters',
                    available_functions: ['SUM', 'COUNT', 'AVG', 'MAX', 'MIN'],
                    formula_name: formulaName,
                    account_codes_used: [],
                    parameter_codes_used: [],
                    warning: 'No codes found in formula'
                }
            });
        }

        // 4. Get financial data for account codes (if any)
        const allFinancialData = accountCodes.length > 0
            ? await getFinancialDataOptimized(startYear, endYear, accountCodes)
            : [];

        if (accountCodes.length > 0 && allFinancialData.length === 0) {
            console.warn(`No financial data found for codes: ${accountCodes.join(', ')}`);
        }

        // DEBUG MODE: Return raw data instead of evaluating formula
        if (debug) {
            return NextResponse.json({
                success: true,
                debug: true,
                data: {
                    rawFormula: rawFormula,
                    processedFormula: formula,
                    accountCodes: accountCodes,
                    parameterCodes: parameterCodes,
                    rawFinancialData: allFinancialData,
                    dataCount: allFinancialData.length,
                    yearBreakdown: allFinancialData.reduce((acc: any, item: any) => {
                        if (!acc[item.ano]) acc[item.ano] = [];
                        acc[item.ano].push(item);
                        return acc;
                    }, {})
                }
            });
        }

        // 5. Determine evaluation method and calculate results for each year
        const results: { [year: number]: number } = {};

        console.log(`=== FORMULA ANALYSIS FOR ${formulaName} ===`);
        console.log(`Raw formula from DB: "${rawFormula}"`);
        console.log(`Processed formula: "${formula}"`);
        console.log(`Has views: ${hasViews}`);
        console.log(`Has standalone params: ${hasStandaloneParams}`);
        console.log(`Is projection formula: ${isProjectionFormula}`);
        console.log(`Account codes found: ${accountCodes}`);
        console.log(`Parameter codes found: ${parameterCodes}`);
        console.log(`===============================`);

        for (let year = startYear; year <= endYear; year++) {
            if (isProjectionFormula) {
                console.log(`Using projection formula evaluator for year ${year}`);
                results[year] = await evaluateProjectionFormula(formula, year);
            } else {
                console.log(`Using mathjs database evaluator for year ${year}`);
                results[year] = await evaluateDatabaseFormula(allFinancialData, year, formula, parameterCodes);
            }
        }

        // Prepare response
        const years = Object.keys(results).map(year => year.toString());
        const values = Object.values(results);
        const total = values.reduce((sum, value) => sum + value, 0);

        console.log('Original formula:', rawFormula);
        console.log('Processed formula:', formula);
        console.log('Results by year:', results);
        console.log(`=== API request completed successfully ===`);

        return NextResponse.json({
            success: true,
            data: {
                dates: years,
                values: values,
                result: total,
                formula: formula,
                originalFormula: rawFormula,
                method: 'mathjs_database_formula_with_parameters',
                available_functions: ['SUM', 'COUNT', 'AVG', 'MAX', 'MIN'],
                formula_name: formulaName,
                account_codes_used: accountCodes,
                parameter_codes_used: parameterCodes
            }
        });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : 'Failed to evaluate Math.js formula with database data',
            details: error instanceof Error ? error.stack : undefined
        }, { status: 500 });
    }
} 