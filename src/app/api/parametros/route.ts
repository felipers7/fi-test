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

// Get all parametros from database
async function getAllParametros(): Promise<any[]> {
    const connection = await connectToDatabase();

    try {
        const query = `
            SELECT 
                prmt_codigo,
                prmt_desc,
                prmt_valor
            FROM parametros
            ORDER BY prmt_codigo
        `;

        console.log('Parametros SQL Query:', query);

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
        // Get all parametros from database
        const parametros = await getAllParametros();

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