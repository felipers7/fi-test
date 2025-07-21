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

// Service to fetch card data from API (for REAL row)
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

// NEW: Service to fetch projected data using the same datos endpoint with projection formulas
export const fetchProyeccionesData = async (title: string, startYear: number = 2022, endYear: number = 2029): Promise<CardDataInterface> => {
    try {
        // Convert title to projection formula name
        const projectionFormulaName = titleToFormulaName(title) + '_proyeccion';
        console.log(`Fetching proyecciones for card "${title}" using formula "${projectionFormulaName}"`);

        const response = await fetch(`/api/datos?startYear=${startYear}&endYear=${endYear}&formula=${projectionFormulaName}`, {
            method: 'GET',
            cache: 'no-store'
        });

        if (response.ok) {
            const result = await response.json();
            if (result.success && result.data) {
                return {
                    dates: result.data.dates || [],
                    values: result.data.values || [],
                    result: 0, // Proyecciones don't have a single result value
                    warning: null
                };
            }
        }

        // Return fallback data with '-' for all years on error
        const years = [];
        const fallbackValues = [];
        for (let year = startYear; year <= endYear; year++) {
            years.push(year.toString());
            fallbackValues.push('-');
        }

        return {
            dates: years,
            values: fallbackValues,
            result: 0,
            warning: `Failed to fetch proyecciones for ${title}`
        };
    } catch (error) {
        console.error(`Error fetching proyecciones for ${title}:`, error);

        // Return fallback data with '-' for all years on error
        const years = [];
        const fallbackValues = [];
        for (let year = startYear; year <= endYear; year++) {
            years.push(year.toString());
            fallbackValues.push('-');
        }

        return {
            dates: years,
            values: fallbackValues,
            result: 0,
            warning: `Error fetching proyecciones for ${title}`
        };
    }
};

// UPDATED: Function to process raw API data into FinancialCard format with proyecciones
export const processCardData = (
    realApiData: CardDataInterface,
    proyeccionesApiData: CardDataInterface | null,
    cardId: string,
    title: string
): FinancialCardData => {
    const dates = realApiData.dates || ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'];

    return {
        id: cardId,
        title: title,
        data: {
            dates: dates,
            presupuestadoValues: Array(dates.length).fill(0), // Row 1 - always zeros
            realValues: realApiData.values || Array(dates.length).fill(-1), // Row 2 - real API data
            proyectadoValues: proyeccionesApiData?.values || Array(dates.length).fill('-'), // Row 3 - backend calculated proyecciones
            result: realApiData.result || -1
        }
    };
};

// Card titles organized by section
export const SECTION_CARD_TITLES = {
    crecimiento: [
        "VALOR PATRIMONIO", "UTILIDAD", "EBITDA", "INTERESES A OPERACIONAL",
        "VALOR DEUDA", "CRECIMIENTO PATRIMONIO", "CREACIÓN DE VALOR",
        "RENTABILIDAD PATRIMONIO", "RENTABILIDAD CAPITAL"
    ],
    riesgo: [
        "LIQUIDEZ CORRIENTE", "PRUEBA ÁCIDA", "ROTACIÓN INVENTARIOS",
        "DÍAS COBRANZA", "ENDEUDAMIENTO TOTAL", "COBERTURA INTERESES",
        "APALANCAMIENTO", "MARGEN BRUTO", "MARGEN OPERACIONAL"
    ],
    flujo: ["FLUJO OPERACIONAL", "FLUJO INVERSIÓN", "FLUJO FINANCIAMIENTO"],
    rentabilidad: ["ROE PROMEDIO", "ROE OPERACIONAL", "ROE AJUSTADO"],
    inversiones: ["INVERSIONES"]
}; 