import { NextResponse } from 'next/server';
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

// Get formulas with fmls_codigo > 90000 from database
async function getFormulasAbove90000(): Promise<any[]> {
    const connection = await connectToDatabase();

    try {
        const query = `
            SELECT 
                fmls_codigo,
                fmls_desc,
                fmls_body,
                fmls_ano
            FROM formulas
            WHERE fmls_codigo > 90000
            ORDER BY fmls_codigo
        `;

        console.log('Formulas SQL Query:', query);

        const [rows] = await connection.execute(query);
        await connection.end();

        return rows as any[];
    } catch (error) {
        await connection.end();
        console.error('Database query failed:', error);
        throw error;
    }
}

export async function GET(request: Request) {
    try {
        // Get formulas with fmls_codigo > 90000 from database
        const formulas = await getFormulasAbove90000();

        console.log('Retrieved formulas:', formulas);

        return NextResponse.json({
            success: true,
            data: {
                formulas: formulas,
                count: formulas.length
            }
        });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({
            success: false,
            error: 'Failed to retrieve formulas from database'
        }, { status: 500 });
    }
} 