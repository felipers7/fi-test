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

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const year = parseInt(searchParams.get('year') || '2024');

        console.log(`🔍 TEST: Testing INTERESES A OPERACIONAL for year ${year}`);

        const connection = await connectToDatabase();

        // Test 1: Check if vw_modelo has intereses data
        console.log(`🔍 TEST: Checking vw_modelo intereses data...`);
        const [viewRows] = await connection.execute(`
            SELECT periodo, intereses_modelo 
            FROM vw_modelo 
            WHERE periodo = ?
        `, [year]);

        console.log(`🔍 TEST: Direct intereses view query results:`, viewRows);

        // Test 2: Check if intereses_a_operacional formula exists in database
        console.log(`🔍 TEST: Checking intereses_a_operacional formula in database...`);
        const [formulaRows] = await connection.execute(`
            SELECT fmls_id, fmls_desc, fmls_body 
            FROM fi.formulas 
            WHERE fmls_desc = 'intereses_a_operacional'
        `);

        console.log(`🔍 TEST: intereses_a_operacional formula query results:`, formulaRows);

        // Test 3: Check if there are any formulas with 'intereses' in the name
        const [allInteresesRows] = await connection.execute(`
            SELECT fmls_id, fmls_desc, fmls_body 
            FROM fi.formulas 
            WHERE fmls_desc LIKE '%intereses%'
        `);

        console.log(`🔍 TEST: All intereses-related formulas:`, allInteresesRows);

        // Test 4: Test the title to formula conversion
        const titleToFormulaName = (title: string): string => {
            return title
                .toLowerCase()
                .replace(/\s+/g, '_')
                .replace(/[^a-z0-9_]/g, '');
        };

        const convertedName = titleToFormulaName('INTERESES A OPERACIONAL');
        console.log(`🔍 TEST: 'INTERESES A OPERACIONAL' converts to formula name: '${convertedName}'`);

        await connection.end();

        return NextResponse.json({
            success: true,
            year: year,
            tests: {
                cardTitle: 'INTERESES A OPERACIONAL',
                convertedFormulaName: convertedName,
                viewData: viewRows,
                formula: formulaRows,
                allInteresesFormulas: allInteresesRows
            }
        });

    } catch (error) {
        console.error('🔍 TEST ERROR:', error);
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : 'Test failed',
            details: error instanceof Error ? error.stack : undefined
        }, { status: 500 });
    }
} 