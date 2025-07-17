import { NextResponse } from 'next/server';
import { create, all } from 'mathjs';
import mysql from 'mysql2/promise';

// Database configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'fi',
    port: 3306
};

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


//parametros para formulas de anterior / 2024 / reales
//parametros para formulas proyección

// Parse formula to extract both account codes and parameter codes
function parseCodesFromFormula(formula: string): { accountCodes: string[], parameterCodes: string[] } {
    const accountCodes = new Set<string>();
    const parameterCodes = new Set<string>();

    // Match anything inside quotes - handle both single and double quotes
    const regex = /["']([^"']+)["']/g;
    let match;

    while ((match = regex.exec(formula)) !== null) {
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

    console.log(`Formula: ${formula}`);
    console.log(`Extracted account codes:`, Array.from(accountCodes));
    console.log(`Extracted parameter codes:`, Array.from(parameterCodes));

    return {
        accountCodes: Array.from(accountCodes),
        parameterCodes: Array.from(parameterCodes)
    };
}

// Fix malformed formulas (specifically for utilidad_basica)
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
        const formulaName = searchParams.get('formula') || 'utilidad_basica';
        const debug = searchParams.get('debug') === 'true'; // Add debug mode

        console.log(`=== Starting API request ===`);
        console.log(`Parameters: startYear=${startYear}, endYear=${endYear}, formula=${formulaName}, debug=${debug}`);

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
                    warning: `Formula '${formulaName}' not found in database`
                }
            });
        }

        //eval 

        // 2. Preprocess formula to fix syntax and convert account codes to SUM() functions
        const formula = preprocessFormula(rawFormula);

        // 3. Parse formula to determine which account codes and parameters we need
        const { accountCodes, parameterCodes } = parseCodesFromFormula(formula);

        if (accountCodes.length === 0 && parameterCodes.length === 0) {
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

        // 5. Evaluate formula for each year using the cached data and parameters
        const results: { [year: number]: number } = {};
        for (let year = startYear; year <= endYear; year++) {
            results[year] = await evaluateDatabaseFormula(allFinancialData, year, formula, parameterCodes);
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