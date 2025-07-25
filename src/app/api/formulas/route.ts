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

// Get formulas from database with optional filtering
// UPDATED: Removed year-specific logic since formulas are now generic
async function getFormulas(fmls_desc?: string): Promise<any[]> {
    const connection = await connectToDatabase();

    try {
        let query = `
            SELECT 
                fmls_codigo,
                fmls_desc,
                fmls_body
            FROM formulas
        `;

        const queryParams: string[] = [];

        if (fmls_desc) {
            query += ` WHERE fmls_desc = ?`;
            queryParams.push(fmls_desc);
        } else {
            query += ` WHERE fmls_codigo > 90000`;
        }

        query += ` ORDER BY fmls_codigo`;

        console.log('Formulas SQL Query:', query);
        console.log('Query params:', queryParams);

        const [rows] = await connection.execute(query, queryParams);
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
        const { searchParams } = new URL(request.url);
        const fmls_desc = searchParams.get('fmls_desc');

        // Get formulas from database (optionally filtered)
        const formulas = await getFormulas(fmls_desc || undefined);

        console.log('Retrieved formulas:', formulas);

        // NEW: Return generic formulas without year association
        // The frontend will apply these formulas to specific years as needed
        return NextResponse.json({
            success: true,
            data: {
                formulas: formulas,
                count: formulas.length,
                note: 'Formulas are now generic and applied per year by frontend'
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