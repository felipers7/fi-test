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

        console.log(`🔍 TEST: Testing VALOR PATRIMONIO for year ${year}`);

        const connection = await connectToDatabase();

        // Test 1: Check if vw_modelo has patrimonio data
        console.log(`🔍 TEST: Checking vw_modelo patrimonio data...`);
        const [viewRows] = await connection.execute(`
            SELECT periodo, 
                   capital_pagado_modelo,
                   otras_reservas_modelo, 
                   ganancias_acumuladas_modelo,
                   cuentas_particulares_modelo,
                   (capital_pagado_modelo + otras_reservas_modelo + ganancias_acumuladas_modelo + cuentas_particulares_modelo) as total_patrimonio
            FROM vw_modelo 
            WHERE periodo = ?
        `, [year]);

        console.log(`🔍 TEST: Direct patrimonio view query results:`, viewRows);

        // Test 2: Check if valor_patrimonio formula exists in database
        console.log(`🔍 TEST: Checking valor_patrimonio formula in database...`);
        const [formulaRows] = await connection.execute(`
            SELECT fmls_id, fmls_desc, fmls_body 
            FROM fi.formulas 
            WHERE fmls_desc = 'valor_patrimonio'
        `);

        console.log(`🔍 TEST: valor_patrimonio formula query results:`, formulaRows);

        // Test 3: Check if there are any formulas with 'patrimonio' in the name
        const [allPatrimonioRows] = await connection.execute(`
            SELECT fmls_id, fmls_desc, fmls_body 
            FROM fi.formulas 
            WHERE fmls_desc LIKE '%patrimonio%'
        `);

        console.log(`🔍 TEST: All patrimonio-related formulas:`, allPatrimonioRows);

        // Test 4: Test the title to formula conversion
        const titleToFormulaName = (title: string): string => {
            return title
                .toLowerCase()
                .replace(/\s+/g, '_')
                .replace(/[^a-z0-9_]/g, '');
        };

        const convertedName = titleToFormulaName('VALOR PATRIMONIO');
        console.log(`🔍 TEST: 'VALOR PATRIMONIO' converts to formula name: '${convertedName}'`);

        await connection.end();

        return NextResponse.json({
            success: true,
            year: year,
            tests: {
                cardTitle: 'VALOR PATRIMONIO',
                convertedFormulaName: convertedName,
                viewData: viewRows,
                formula: formulaRows,
                allPatrimonioFormulas: allPatrimonioRows
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