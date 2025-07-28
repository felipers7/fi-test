// Card Data Service - Manages data fetching for all financial cards
export interface CardDataInterface {
    dates: string[];
    values: (number | string)[];
    result: number | string;
    warning?: string;
}

export interface FinancialCardData {
    id: string;
    title: string;
    data: {
        dates: string[];
        result: number | string;
        presupuestadoValues: (number | string)[];
        realValues: (number | string)[];
        proyectadoValues?: (number | string)[];
    };
}

// Helper function to convert card title to formula name (snake_case)
export const titleToFormulaName = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/[^a-z0-9_]/g, '');
};

// Service to fetch card data from API - UPDATED for view-based approach
export const fetchCardData = async (title: string, startYear: number = 2022, endYear: number = 2029): Promise<CardDataInterface> => {
    try {
        const formulaName = titleToFormulaName(title);
        console.log(`Fetching data for card "${title}" using formula "${formulaName}"`);

        const response = await fetch(`/api/datos?startYear=${startYear}&endYear=${endYear}&formula=${formulaName}`, {
            method: 'GET',
            cache: 'no-store'
        });

        if (response.ok) {
            const result = await response.json();
            if (result.success && result.data) {
                return {
                    dates: result.data.dates || [],
                    values: result.data.values || [],
                    result: result.data.result || 0,
                    warning: result.data.warning || null
                };
            }
        }

        // Return fallback data with -1 values on error
        const years = [];
        const failedValues = [];
        for (let year = startYear; year <= endYear; year++) {
            years.push(year.toString());
            failedValues.push(-1);
        }

        return {
            dates: years,
            values: failedValues,
            result: -1,
            warning: `Failed to fetch data for ${title}`
        };
    } catch (error) {
        console.error(`Error fetching data for ${title}:`, error);

        // Return fallback data with -1 values on error
        const years = [];
        const failedValues = [];
        for (let year = startYear; year <= endYear; year++) {
            years.push(year.toString());
            failedValues.push(-1);
        }

        return {
            dates: years,
            values: failedValues,
            result: -1,
            warning: `Error fetching data for ${title}`
        };
    }
};

// NEW: Service to fetch budget data from the presupuesto API
export const fetchBudgetData = async (title: string, startYear: number = 2024, endYear: number = 2029): Promise<CardDataInterface> => {
    try {
        const formulaName = titleToFormulaName(title);
        console.log(`Fetching budget data for card "${title}" using formula "${formulaName}"`);

        const response = await fetch(`/api/presupuesto?startYear=${startYear}&endYear=${endYear}&formula=${formulaName}`, {
            method: 'GET',
            cache: 'no-store'
        });

        if (response.ok) {
            const result = await response.json();
            if (result.success && result.data) {
                return {
                    dates: result.data.dates || [],
                    values: result.data.values || [],
                    result: result.data.result || 0,
                    warning: result.data.warning || null
                };
            }
        }

        // Return fallback data with 0 values on error (budget data should default to 0)
        const years = [];
        const fallbackValues = [];
        for (let year = startYear; year <= endYear; year++) {
            years.push(year.toString());
            fallbackValues.push(0);
        }

        return {
            dates: years,
            values: fallbackValues,
            result: 0,
            warning: `Failed to fetch budget data for ${title}`
        };
    } catch (error) {
        console.error(`Error fetching budget data for ${title}:`, error);

        // Return fallback data with 0 values on error
        const years = [];
        const fallbackValues = [];
        for (let year = startYear; year <= endYear; year++) {
            years.push(year.toString());
            fallbackValues.push(0);
        }

        return {
            dates: years,
            values: fallbackValues,
            result: 0,
            warning: `Error fetching budget data for ${title}`
        };
    }
};

// UPDATED: Function to process raw API data into FinancialCard format with budget data
// Now includes budget data in the presupuesto row
export const processCardData = (
    apiData: CardDataInterface,
    budgetData: CardDataInterface | null, // Budget data for presupuesto row
    cardId: string,
    title: string
): FinancialCardData => {
    const dates = apiData.dates || ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'];
    const currentYear = 2024; // Data up to 2024 is "real", 2025+ is "projected"

    // Process budget values for presupuesto row
    const presupuestadoValues: (number | string)[] = [];
    dates.forEach((dateStr, index) => {
        const year = parseInt(dateStr);

        if (budgetData && budgetData.values && budgetData.values[index] !== undefined) {
            // Use budget data if available (only for years 2024+)
            if (year >= 2024) {
                presupuestadoValues.push(budgetData.values[index]);
            } else {
                presupuestadoValues.push('-'); // No budget for historical years
            }
        } else {
            // Fallback to 0 for budget years, '-' for historical years
            presupuestadoValues.push(year >= 2024 ? 0 : '-');
        }
    });

    // Process real and projected values based on year logic
    const realValues: (number | string)[] = [];
    const proyectadoValues: (number | string)[] = [];

    dates.forEach((dateStr, index) => {
        const year = parseInt(dateStr);
        const value = apiData.values?.[index];

        if (year <= currentYear) {
            // Past and current years: Use as real data in second row
            realValues.push(value ?? -1);
            proyectadoValues.push('-'); // No projection for past years
        } else {
            // Future years: Use as projected data in third row
            realValues.push('-'); // No real data for future years yet
            proyectadoValues.push(value ?? '-');
        }
    });

    // Calculate result only from real values (past/current years)
    const realNumericValues = realValues.filter(v => typeof v === 'number' && v !== -1) as number[];
    const calculatedResult = realNumericValues.length > 0
        ? realNumericValues.reduce((sum, val) => sum + val, 0)
        : (apiData.result !== -1 ? apiData.result : -1);

    return {
        id: cardId,
        title: title,
        data: {
            dates: dates,
            presupuestadoValues: presupuestadoValues, // Row 1 - budget data
            realValues: realValues, // Row 2 - real data for years <= 2024
            proyectadoValues: proyectadoValues, // Row 3 - projections for years >= 2025
            result: calculatedResult
        }
    };
};

// NEW: For backward compatibility, keep the old fetchProyeccionesData but make it return empty
export const fetchProyeccionesData = async (title: string, startYear: number = 2022, endYear: number = 2029): Promise<CardDataInterface> => {
    console.log(`fetchProyeccionesData called for ${title} but is no longer used - returning empty data`);

    // Return empty data since projections are now handled in the same view
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
        years.push(year.toString());
    }

    return {
        dates: years,
        values: Array(years.length).fill('-'),
        result: 0,
        warning: 'Proyecciones are now handled in the main view'
    };
};

// Card titles organized by section - UPDATED to match available database views
export const SECTION_CARD_TITLES = {
    crecimiento: [
        "UTILIDAD", "EBITDA", "VALOR PATRIMONIO", "INTERESES A OPERACIONAL",
        "VALOR DEUDA", "CRECIMIENTO PATRIMONIO", "CREACION DE VALOR", "VENTAS"
    ],
    riesgo: [
        "SOLVENCIA", "LIQUIDEZ", "NIVEL DE DEUDA", "DIVIDENDOS", "CREDITO NETO"
    ],
    flujo: [
        "FUENTES DE FONDO", "CAJA", "USOS DE FONDO", "FLUJO OPERATIVO",
        "PAGO DIVIDENDOS", "FLUJO INVERSIONES", "CREDITO", "CAPITAL DE TRABAJO", "CAJA PERIODO"
    ],
    rentabilidad: [
        "RENTABILIDAD PATRIMONIO", "RENTABILIDAD CAPITAL", "UTILIDAD NETA",
        "ROTACION DE ACTIVOS", "PALANCA FINANCIERA"
    ],
    inversiones: [
        "INVERSIONES", "CRECIMIENTO VENTAS"
    ]
}; 