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

// Get parametros from database with optional filtering
async function getParametros(prmt_codigo?: string): Promise<any[]> {
    const connection = await connectToDatabase();

    try {
        let query = `
            SELECT 
                prmt_codigo,
                prmt_desc,
                prmt_valor,
                prmt_ano
            FROM parametros
        `;

        const queryParams: string[] = [];

        if (prmt_codigo) {
            query += ` WHERE prmt_codigo = ?`;
            queryParams.push(prmt_codigo);
        }

        query += ` ORDER BY prmt_codigo, prmt_ano`;

        console.log('Parametros SQL Query:', query);
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
        const prmt_codigo = searchParams.get('prmt_codigo');

        // Get parametros from database (optionally filtered)
        const parametros = await getParametros(prmt_codigo || undefined);

        console.log('Retrieved parametros:', parametros);

        return NextResponse.json({
            success: true,
            data: {
                parametros: parametros,
                count: parametros.length
            }
        });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({
            success: false,
            error: 'Failed to retrieve parametros from database'
        }, { status: 500 });
    }
} 