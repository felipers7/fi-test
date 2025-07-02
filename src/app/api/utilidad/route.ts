import { NextResponse } from 'next/server';
import { create, all } from 'mathjs';

// Financial accounts data

const cuentas = [
    { "tipo": "activos", "valor": 150000, "nombre": "caja y bancos", "ano": 2022 },
    { "tipo": "activos", "valor": 100000, "nombre": "cuentas por cobrar", "ano": 2022 },
    { "tipo": "activos", "valor": 550000, "nombre": "propiedades, planta y equipo", "ano": 2022 },
    { "tipo": "activos", "valor": 160000, "nombre": "caja y bancos", "ano": 2022 },
    { "tipo": "activos", "valor": 180000, "nombre": "cuentas por cobrar", "ano": 2022 },
    { "tipo": "activos", "valor": 590000, "nombre": "propiedades, planta y equipo", "ano": 2022 },
    { "tipo": "activos", "valor": 150000, "nombre": "caja y bancos", "ano": 2023 },
    { "tipo": "activos", "valor": 100000, "nombre": "cuentas por cobrar", "ano": 2023 },
    { "tipo": "activos", "valor": 550000, "nombre": "propiedades, planta y equipo", "ano": 2023 },
    { "tipo": "activos", "valor": 160000, "nombre": "caja y bancos", "ano": 2023 },
    { "tipo": "activos", "valor": 180000, "nombre": "cuentas por cobrar", "ano": 2023 },
    { "tipo": "activos", "valor": 590000, "nombre": "propiedades, planta y equipo", "ano": 2023 },
    { "tipo": "activos", "valor": 150000, "nombre": "caja y bancos", "ano": 2024 },
    { "tipo": "activos", "valor": 100000, "nombre": "cuentas por cobrar", "ano": 2024 },
    { "tipo": "activos", "valor": 550000, "nombre": "propiedades, planta y equipo", "ano": 2024 },
    { "tipo": "activos", "valor": 160000, "nombre": "caja y bancos", "ano": 2024 },
    { "tipo": "activos", "valor": 180000, "nombre": "cuentas por cobrar", "ano": 2024 },
    { "tipo": "activos", "valor": 590000, "nombre": "propiedades, planta y equipo", "ano": 2024 },
    { "tipo": "activos", "valor": 150000, "nombre": "caja y bancos", "ano": 2025 },
    { "tipo": "activos", "valor": 100000, "nombre": "cuentas por cobrar", "ano": 2025 },
    { "tipo": "activos", "valor": 550000, "nombre": "propiedades, planta y equipo", "ano": 2025 },
    { "tipo": "activos", "valor": 160000, "nombre": "caja y bancos", "ano": 2025 },
    { "tipo": "activos", "valor": 180000, "nombre": "cuentas por cobrar", "ano": 2025 },
    { "tipo": "activos", "valor": 590000, "nombre": "propiedades, planta y equipo", "ano": 2025 },
    { "tipo": "activos", "valor": 150000, "nombre": "caja y bancos", "ano": 2026 },
    { "tipo": "activos", "valor": 100000, "nombre": "cuentas por cobrar", "ano": 2026 },
    { "tipo": "activos", "valor": 550000, "nombre": "propiedades, planta y equipo", "ano": 2026 },
    { "tipo": "activos", "valor": 160000, "nombre": "caja y bancos", "ano": 2026 },
    { "tipo": "activos", "valor": 180000, "nombre": "cuentas por cobrar", "ano": 2026 },
    { "tipo": "activos", "valor": 590000, "nombre": "propiedades, planta y equipo", "ano": 2026 },
    { "tipo": "activos", "valor": 150000, "nombre": "caja y bancos", "ano": 2027 },
    { "tipo": "activos", "valor": 100000, "nombre": "cuentas por cobrar", "ano": 2027 },
    { "tipo": "activos", "valor": 550000, "nombre": "propiedades, planta y equipo", "ano": 2027 },
    { "tipo": "activos", "valor": 160000, "nombre": "caja y bancos", "ano": 2027 },
    { "tipo": "activos", "valor": 180000, "nombre": "cuentas por cobrar", "ano": 2027 },
    { "tipo": "activos", "valor": 590000, "nombre": "propiedades, planta y equipo", "ano": 2027 },
    { "tipo": "activos", "valor": 150000, "nombre": "caja y bancos", "ano": 2028 },
    { "tipo": "activos", "valor": 100000, "nombre": "cuentas por cobrar", "ano": 2028 },
    { "tipo": "activos", "valor": 550000, "nombre": "propiedades, planta y equipo", "ano": 2028 },
    { "tipo": "activos", "valor": 160000, "nombre": "caja y bancos", "ano": 2028 },
    { "tipo": "activos", "valor": 180000, "nombre": "cuentas por cobrar", "ano": 2028 },
    { "tipo": "activos", "valor": 590000, "nombre": "propiedades, planta y equipo", "ano": 2028 },
    { "tipo": "activos", "valor": 150000, "nombre": "caja y bancos", "ano": 2029 },
    { "tipo": "activos", "valor": 100000, "nombre": "cuentas por cobrar", "ano": 2029 },
    { "tipo": "activos", "valor": 550000, "nombre": "propiedades, planta y equipo", "ano": 2029 },
    { "tipo": "activos", "valor": 160000, "nombre": "caja y bancos", "ano": 2029 },
    { "tipo": "activos", "valor": 180000, "nombre": "cuentas por cobrar", "ano": 2029 },
    { "tipo": "activos", "valor": 590000, "nombre": "propiedades, planta y equipo", "ano": 2029 },

    // Adding some pasivos data for testing eval functions
    { "tipo": "pasivos", "valor": 200000, "nombre": "cuentas por pagar", "ano": 2022 },
    { "tipo": "pasivos", "valor": 150000, "nombre": "préstamos bancarios", "ano": 2022 },
    { "tipo": "pasivos", "valor": 180000, "nombre": "cuentas por pagar", "ano": 2023 },
    { "tipo": "pasivos", "valor": 140000, "nombre": "préstamos bancarios", "ano": 2023 },
    { "tipo": "pasivos", "valor": 160000, "nombre": "cuentas por pagar", "ano": 2024 },
    { "tipo": "pasivos", "valor": 130000, "nombre": "préstamos bancarios", "ano": 2024 },

    // Optional: add some ingresos/gastos for more complex eval expressions
    { "tipo": "ingresos", "valor": 800000, "nombre": "ventas", "ano": 2022 },
    { "tipo": "gastos", "valor": 300000, "nombre": "costo de ventas", "ano": 2022 },
    { "tipo": "ingresos", "valor": 850000, "nombre": "ventas", "ano": 2023 },
    { "tipo": "gastos", "valor": 320000, "nombre": "costo de ventas", "ano": 2023 },
]

// ========== MATH.JS DATABASE FORMULA EVALUATOR ==========
// Perfect for storing formulas in database!

function evaluateDatabaseFormula(data: any[], year: number, formulaString: string): number {
    const yearData = data.filter(item => item.ano === year);

    // Create math.js instance
    const math = create(all, {});

    // Add custom functions to math.js scope
    math.import({
        SUM: (tipo: string) => {
            return yearData
                .filter(item => item.tipo === tipo)
                .reduce((sum, item) => sum + item.valor, 0);
        },
        COUNT: (tipo: string) => {
            return yearData.filter(item => item.tipo === tipo).length;
        },
        AVG: (tipo: string) => {
            const items = yearData.filter(item => item.tipo === tipo);
            if (items.length === 0) return 0;
            const total = items.reduce((sum, item) => sum + item.valor, 0);
            return total / items.length;
        },
        MAX: (tipo: string) => {
            const items = yearData.filter(item => item.tipo === tipo);
            if (items.length === 0) return 0;
            return Math.max(...items.map(item => item.valor));
        },
        MIN: (tipo: string) => {
            const items = yearData.filter(item => item.tipo === tipo);
            if (items.length === 0) return 0;
            return Math.min(...items.map(item => item.valor));
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

// ========== DATABASE FORMULA EXAMPLES ==========
// Store these strings directly in your database!
const databaseFormulas = {
    utilidad_basica: `SUM("activos") - SUM("pasivos")`,
    utilidad_operacional: `SUM("ingresos") - SUM("gastos")`,
    utilidad_neta: `(SUM("ingresos") - SUM("gastos")) * 0.8`,
    patrimonio: `SUM("activos") - SUM("pasivos")`,
    liquidez_ratio: `SUM("activos") / SUM("pasivos")`,
    rentabilidad: `(SUM("ingresos") - SUM("gastos")) / SUM("activos") * 100`,
    promedio_activos: `AVG("activos")`,
    total_cuentas: `COUNT("activos") + COUNT("pasivos")`,
    activo_maximo: `MAX("activos")`,
    roi: `(SUM("ingresos") - SUM("gastos")) / SUM("activos") * 100`,
    debt_ratio: `SUM("pasivos") / SUM("activos")`,
    profit_margin: `(SUM("ingresos") - SUM("gastos")) / SUM("ingresos") * 100`,
    complex_formula: `(SUM("activos") * 1.2) - (SUM("pasivos") * 0.8) + (SUM("ingresos") - SUM("gastos")) / 2`
};

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const startYear = parseInt(searchParams.get('startYear') || '2022');
        const endYear = parseInt(searchParams.get('endYear') || '2029');
        const formula = searchParams.get('formula') || `SUM("activos") - SUM("pasivos")`;

        // Evaluate formula for each year using Math.js
        const results: { [year: number]: number } = {};
        for (let year = startYear; year <= endYear; year++) {
            results[year] = evaluateDatabaseFormula(cuentas, year, formula);
        }

        // Prepare response
        const years = Object.keys(results).map(year => year.toString());
        const values = Object.values(results);
        const total = values.reduce((sum, value) => sum + value, 0);

        console.log('Math.js formula:', formula);
        console.log('Results by year:', results);

        return NextResponse.json({
            success: true,
            data: {
                dates: years,
                values: values,
                result: total,
                formula: formula,
                method: 'mathjs_database_formula',
                available_functions: ['SUM', 'COUNT', 'AVG', 'MAX', 'MIN'],
                example_formulas: databaseFormulas
            }
        });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({
            success: false,
            error: 'Failed to evaluate Math.js formula'
        }, { status: 500 });
    }
} 