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

// Update parametros in database
async function updateParametros(prmt_codigo: string, prmt_ano: number | null, prmt_valor: number): Promise<boolean> {
    const connection = await connectToDatabase();

    try {
        let checkQuery: string;
        let checkParams: any[];

        // Check if parameter exists for this year (handle null years)
        if (prmt_ano === null) {
            checkQuery = `
                SELECT prmt_id FROM parametros 
                WHERE prmt_codigo = ? AND prmt_ano IS NULL
            `;
            checkParams = [prmt_codigo];
        } else {
            checkQuery = `
                SELECT prmt_id FROM parametros 
                WHERE prmt_codigo = ? AND prmt_ano = ?
            `;
            checkParams = [prmt_codigo, prmt_ano];
        }

        const [existingRows] = await connection.execute(checkQuery, checkParams);
        const existing = existingRows as any[];

        let query: string;
        let queryParams: any[];

        if (existing.length > 0) {
            // Update existing parameter
            if (prmt_ano === null) {
                query = `
                    UPDATE parametros 
                    SET prmt_valor = ? 
                    WHERE prmt_codigo = ? AND prmt_ano IS NULL
                `;
                queryParams = [prmt_valor, prmt_codigo];
            } else {
                query = `
                    UPDATE parametros 
                    SET prmt_valor = ? 
                    WHERE prmt_codigo = ? AND prmt_ano = ?
                `;
                queryParams = [prmt_valor, prmt_codigo, prmt_ano];
            }
            console.log('Updating existing parameter:', { prmt_codigo, prmt_ano, prmt_valor });
        } else {
            // Insert new parameter
            query = `
                INSERT INTO parametros (prmt_codigo, prmt_desc, prmt_valor, prmt_ano)
                VALUES (?, ?, ?, ?)
            `;
            queryParams = [prmt_codigo, `proyeccion ${prmt_codigo.toLowerCase()}`, prmt_valor, prmt_ano];
            console.log('Inserting new parameter:', { prmt_codigo, prmt_ano, prmt_valor });
        }

        const [result] = await connection.execute(query, queryParams);
        await connection.end();

        console.log('Parameter update result:', result);
        return true;
    } catch (error) {
        await connection.end();
        console.error('Failed to update parameter:', error);
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

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { prmt_codigo, prmt_ano, prmt_valor } = body;

        // Validate required fields
        if (!prmt_codigo || prmt_valor === undefined) {
            return NextResponse.json({
                success: false,
                error: 'Missing required fields: prmt_codigo, prmt_valor'
            }, { status: 400 });
        }

        // Validate types
        if (typeof prmt_codigo !== 'string' ||
            (prmt_ano !== undefined && prmt_ano !== null && typeof prmt_ano !== 'number') ||
            typeof prmt_valor !== 'number') {
            return NextResponse.json({
                success: false,
                error: 'Invalid field types. Expected: prmt_codigo (string), prmt_ano (number or null), prmt_valor (number)'
            }, { status: 400 });
        }

        console.log('Updating parameter:', { prmt_codigo, prmt_ano, prmt_valor });

        // Update parameter in database
        await updateParametros(prmt_codigo, prmt_ano, prmt_valor);

        return NextResponse.json({
            success: true,
            message: 'Parameter updated successfully',
            data: {
                prmt_codigo,
                prmt_ano,
                prmt_valor
            }
        });
    } catch (error) {
        console.error('PUT API Error:', error);
        return NextResponse.json({
            success: false,
            error: 'Failed to update parameter in database'
        }, { status: 500 });
    }
} 