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

// No hard-coded mapping. Account types will be resolved directly from the database names (e.g. "ACTIVO", "PASIVO").

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

// Parse formula to extract PARENT account codes referenced (e.g., "100000", "200000")
function parseParentCodesFromFormula(formula: string): string[] {
    const codes = new Set<string>();

    const regex = /"(\d+)"/g; // capture numeric codes inside quotes
    let match;

    while ((match = regex.exec(formula)) !== null) {
        codes.add(match[1]);
    }

    console.log(`Formula: ${formula}`);
    console.log(`Extracted parent codes:`, Array.from(codes));

    return Array.from(codes);
}

// Get formula from database (case insensitive)
async function getFormulaFromDB(formulaName: string): Promise<string> {
    const connection = await connectToDatabase();

    try {
        const query = `
            SELECT fmls_body 
            FROM formulas 
            WHERE LOWER(fmls_desc) = LOWER(?)
        `;

        const [rows] = await connection.execute(query, [formulaName]) as any;
        await connection.end();

        if (rows.length === 0) {
            throw new Error(`Formula ${formulaName} not found in database`);
        }

        return rows[0].fmls_body;
    } catch (error) {
        await connection.end();
        console.error('Failed to get formula from database:', error);
        throw error;
    }
}

// Get financial data from database for specific account types only
async function getFinancialDataOptimized(startYear: number, endYear: number, parentCodes: string[]): Promise<any[]> {
    const connection = await connectToDatabase();

    try {
        // Build placeholders for parent codes
        const placeholders = parentCodes.map(() => '?').join(',');

        const query = `
            SELECT 
                b.blnc_ano as ano,
                CASE WHEN mc.macu_codigo_padre IS NULL THEN mc.macu_codigo ELSE mc.macu_codigo_padre END AS parent_code,
                b.blnc_monto AS valor
            FROM balances b
            JOIN maestro_cuentas mc ON b.macu_codigo = mc.macu_codigo
            WHERE b.blnc_ano BETWEEN ? AND ? 
            AND (mc.macu_codigo IN (${placeholders}) OR mc.macu_codigo_padre IN (${placeholders}))
            ORDER BY b.blnc_ano
        `;

        const queryParams = [startYear, endYear, ...parentCodes, ...parentCodes];
        console.log('Optimized SQL Query:', query);
        console.log('Query Parameters:', queryParams);

        const [rows] = await connection.execute(query, queryParams);
        await connection.end();

        return rows as any[];
    } catch (error) {
        await connection.end();
        console.error('Database query failed:', error);
        throw error;
    }
}

// ========== MATH.JS DATABASE FORMULA EVALUATOR ==========
// Perfect for storing formulas in database!

async function evaluateDatabaseFormula(allData: any[], year: number, formulaString: string): Promise<number> {
    const yearData = allData.filter(item => item.ano === year);

    // Create math.js instance
    const math = create(all, {});

    // Add custom functions to math.js scope
    math.import({
        SUM: (code: string) => {
            return yearData
                .filter(item => item.parent_code == code)
                .reduce((sum, item) => sum + parseFloat(item.valor), 0);
        },
        COUNT: (code: string) => {
            return yearData.filter(item => item.parent_code == code).length;
        },
        AVG: (code: string) => {
            const items = yearData.filter(item => item.parent_code == code);
            if (items.length === 0) return 0;
            const total = items.reduce((sum, item) => sum + parseFloat(item.valor), 0);
            return total / items.length;
        },
        MAX: (code: string) => {
            const items = yearData.filter(item => item.parent_code == code);
            if (items.length === 0) return 0;
            return Math.max(...items.map(item => parseFloat(item.valor)));
        },
        MIN: (code: string) => {
            const items = yearData.filter(item => item.parent_code == code);
            if (items.length === 0) return 0;
            return Math.min(...items.map(item => parseFloat(item.valor)));
        }
    });

    try {
        const result = math.evaluate(formulaString);
        console.log(`Year ${year}: "${formulaString}" = ${result}`);
        return result;
    } catch (error) {
        console.error(`Error evaluating: "${formulaString}"`, error);
        return 0;
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const startYear = parseInt(searchParams.get('startYear') || '2024');
        const endYear = parseInt(searchParams.get('endYear') || '2027');
        const formulaName = searchParams.get('formula') || 'utilidad_basica';

        // OPTIMIZED: Only 2 database calls total + smart filtering
        // 1. Get formula from database (case insensitive)
        const formula = await getFormulaFromDB(formulaName);

        // 2. Parse formula to determine which account types we need
        const neededCodes = parseParentCodesFromFormula(formula);

        // 3. Get only the financial data we actually need
        const allFinancialData = await getFinancialDataOptimized(startYear, endYear, neededCodes);

        // Evaluate formula for each year using the cached data
        const results: { [year: number]: number } = {};
        for (let year = startYear; year <= endYear; year++) {
            results[year] = await evaluateDatabaseFormula(allFinancialData, year, formula);
        }

        // Prepare response
        const years = Object.keys(results).map(year => year.toString());
        const values = Object.values(results);
        const total = values.reduce((sum, value) => sum + value, 0);

        console.log('Database formula:', formula);
        console.log('Results by year:', results);

        // Account types used are already the names
        const parentCodesUsed = neededCodes;

        return NextResponse.json({
            success: true,
            data: {
                dates: years,
                values: values,
                result: total,
                formula: formula,
                method: 'mathjs_database_formula_optimized',
                available_functions: ['SUM', 'COUNT', 'AVG', 'MAX', 'MIN'],
                formula_name: formulaName,
                parent_codes_used: parentCodesUsed
            }
        });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({
            success: false,
            error: 'Failed to evaluate Math.js formula with database data'
        }, { status: 500 });
    }
} 