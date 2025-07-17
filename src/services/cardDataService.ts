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

// Service to fetch card data from API
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

// Function to process raw API data into FinancialCard format
export const processCardData = (apiData: CardDataInterface, cardId: string, title: string): FinancialCardData => {
    return {
        id: cardId,
        title: title,
        data: {
            dates: apiData.dates || ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
            presupuestadoValues: Array(8).fill(0), // Row 1 - always zeros
            realValues: apiData.values || Array(8).fill(-1), // Row 2 - API data
            proyectadoValues: apiData.values ? apiData.values.map((v: any) =>
                typeof v === 'string' || v === -1 ? v : Math.round(v * 1.1)
            ) : Array(8).fill(-1), // Row 3 - projected values
            result: apiData.result || -1
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
    rentabilidad: ["ROE PROMEDIO", "ROE OPERACIONAL", "ROE AJUSTADO"]
}; 