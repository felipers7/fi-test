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

// Card title to budget view name mapping
const CARD_TO_BUDGET_VIEW_MAPPING: { [key: string]: string } = {
    // Crecimiento sostenible
    'utilidad': 'vw_utilidad_presupuesto',
    'ebitda': 'vw_EBITDA_presupuesto',
    'valor_patrimonio': 'vw_valor_patrimonio_presupuesto',
    'intereses_operacionales_1': 'vw_interes_operacional1_presupuesto',
    'intereses_operacionales_2': 'vw_interes_operacional2_presupuesto',
    'valor_deuda': 'vw_valor_deuda_presupuesto',
    'crecimiento_patrimonio': 'vw_crecimiento_patrimonio_presupuesto',
    'creacion_de_valor': 'vw_creacion_de_valor_presupuesto',

    // Rentabilidad del patrimonio
    'rentabilidad_patrimonio': 'vw_rentabilidad_de_patrimonio_presupuesto',
    'rentabilidad_capital': 'vw_rentabilidad_del_capital_presupuesto',
    'utilidad_neta': 'vw_utilidad_neta_presupuesto',
    'rotacion_de_activos': 'vw_rotacion_de_activos_presupuesto',
    'palanca_financiera': 'vw_palanca_financiera_presupuesto',
    'crecimiento_de_ventas': 'vw_crecimiento_de_ventas_presupuesto',

    // Inversiones
    'inversiones': 'vw_inversiones_presupuesto',
    'crecimiento_ventas': 'vw_crecimiento_de_ventas_presupuesto',

    // Flujo de efectivo
    'fuentes_de_fondo': 'vw_fuentes_de_fondo_presupuesto',
    'caja_1': 'vw_caja1_presupuesto',
    'caja_2': 'vw_caja2_presupuesto',
    'usos_de_fondo': 'vw_usos_de_fondo_presupuesto',
    'flujo_operativo': 'vw_flujo_operativo_presupuesto',
    'pago_dividendos': 'vw_pago_dividendos_presupuesto',
    'flujo_inversiones': 'vw_flujo_inversiones_presupuesto',
    'credito': 'vw_credito_presupuesto',
    'capital_de_trabajo': 'vw_capital_de_trabajo_presupuesto',
    'caja_periodo': 'vw_caja_periodo_presupuesto',

    // Riesgo financiero
    'solvencia': 'vw_solvencia_presupuesto',
    'liquidez': 'vw_liquidez_presupuesto',
    'nivel_de_deuda': 'vw_nivel_de_deuda_presupuesto',
    'dividendos': 'vw_dividendos_presupuesto',
    'credito_neto': 'vw_credito_neto_presupuesto'
};

// Get budget data from database view for year range
async function getBudgetViewDataForYears(viewName: string, startYear: number, endYear: number): Promise<{ [year: number]: number }> {
    const connection = await connectToDatabase();

    try {
        const query = `SELECT periodo, valor FROM ${viewName} WHERE periodo BETWEEN ? AND ? ORDER BY periodo`;
        console.log(`Querying budget view ${viewName} for years ${startYear}-${endYear}`);
        console.log(`SQL Query: ${query} with params: [${startYear}, ${endYear}]`);

        const [rows] = await connection.execute(query, [startYear, endYear]);
        await connection.end();

        const results = rows as any[];
        console.log(`Query results for budget view ${viewName}:`, results);

        const yearData: { [year: number]: number } = {};

        results.forEach((row: any) => {
            const year = parseInt(row.periodo);
            const value = parseFloat(row.valor || 0);
            yearData[year] = value;
            console.log(`Budget view ${viewName} year ${year}: ${value}`);
        });

        // Fill in missing years with 0
        for (let year = startYear; year <= endYear; year++) {
            if (!(year in yearData)) {
                yearData[year] = 0;
                console.log(`Budget view ${viewName} year ${year}: 0 (missing)`);
            }
        }

        return yearData;
    } catch (error) {
        await connection.end();
        console.error(`Failed to get data from budget view ${viewName}:`, error);

        // Return zeros for all years on error
        const errorData: { [year: number]: number } = {};
        for (let year = startYear; year <= endYear; year++) {
            errorData[year] = 0;
        }
        return errorData;
    }
}

// Helper function to convert card title to formula name (snake_case)
const titleToFormulaName = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/[^a-z0-9_]/g, '');
};

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const startYear = parseInt(searchParams.get('startYear') || '2024');
        const endYear = parseInt(searchParams.get('endYear') || '2029');
        const formulaName = searchParams.get('formula') || '';

        console.log(`=== PRESUPUESTO API Request ===`);
        console.log(`Formula name: ${formulaName}`);
        console.log(`Year range: ${startYear}-${endYear}`);

        if (!formulaName) {
            return NextResponse.json({
                success: false,
                error: 'Formula name is required'
            }, { status: 400 });
        }

        // Convert formula name to view mapping key (should match the existing logic)
        const mappingKey = formulaName;
        const budgetViewName = CARD_TO_BUDGET_VIEW_MAPPING[mappingKey];

        if (!budgetViewName) {
            console.warn(`No budget view mapping found for formula: ${formulaName}`);

            // Return zeros for unmapped formulas
            const years = [];
            const values = [];
            for (let year = startYear; year <= endYear; year++) {
                years.push(year.toString());
                values.push(0);
            }

            return NextResponse.json({
                success: true,
                data: {
                    dates: years,
                    values: values,
                    result: 0,
                    source: 'budget_views',
                    view_name: 'not_mapped',
                    warning: `No budget view mapping found for ${formulaName}`
                }
            });
        }

        console.log(`Using budget view: ${budgetViewName}`);

        // Get data from the budget view
        const budgetData = await getBudgetViewDataForYears(budgetViewName, startYear, endYear);

        // Prepare response in the same format as the datos API
        const years = Object.keys(budgetData).map(year => year.toString());
        const values = Object.values(budgetData);
        const total = values.reduce((sum, value) => sum + value, 0);

        console.log('Budget results by year:', budgetData);
        console.log(`=== PRESUPUESTO API request completed successfully ===`);

        return NextResponse.json({
            success: true,
            data: {
                dates: years,
                values: values,
                result: total,
                source: 'budget_views',
                view_name: budgetViewName,
                method: 'direct_budget_view_query'
            }
        });

    } catch (error) {
        console.error('Presupuesto API Error:', error);
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : 'Failed to fetch budget data from views',
            details: error instanceof Error ? error.stack : undefined
        }, { status: 500 });
    }
} 