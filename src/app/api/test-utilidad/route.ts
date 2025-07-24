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

        console.log(`🔍 TEST: Testing utilidad for year ${year}`);

        const connection = await connectToDatabase();

        // Test 1: Check if vw_modelo exists and has data
        console.log(`🔍 TEST: Checking vw_modelo structure and data...`);
        const [viewRows] = await connection.execute(`
            SELECT periodo, resultado_despues_impuesto_modelo 
            FROM vw_modelo 
            WHERE periodo = ?
        `, [year]);

        console.log(`🔍 TEST: Direct view query results:`, viewRows);

        // Test 2: Check if utilidad formula exists in database
        console.log(`🔍 TEST: Checking utilidad formula in database...`);
        const [formulaRows] = await connection.execute(`
            SELECT fmls_id, fmls_desc, fmls_body 
            FROM fi.formulas 
            WHERE fmls_desc = 'utilidad'
        `);

        console.log(`🔍 TEST: Formula query results:`, formulaRows);

        // Test 3: Check if there are any formulas with 'utilidad' in the name
        const [allUtilidadRows] = await connection.execute(`
            SELECT fmls_id, fmls_desc, fmls_body 
            FROM fi.formulas 
            WHERE fmls_desc LIKE '%utilidad%'
        `);

        console.log(`🔍 TEST: All utilidad-related formulas:`, allUtilidadRows);

        await connection.end();

        return NextResponse.json({
            success: true,
            year: year,
            tests: {
                viewData: viewRows,
                formula: formulaRows,
                allUtilidadFormulas: allUtilidadRows
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