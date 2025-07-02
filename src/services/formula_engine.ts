const formulaUtilidad = {
    config: {
        name: "utilidad_neta",
        description: "Cálculo de utilidad neta",
        operations: [
            {
                id: "total_activos",
                operation: "SUM",
                filters: [
                    { field: "tipo", operator: "equals", value: "activos" },
                    { field: "nombre", operator: "not_equals", value: "total activos" }
                ]
            },
            {
                id: "total_pasivos",
                operation: "SUM",
                filters: [
                    { field: "tipo", operator: "equals", value: "pasivos" },
                    { field: "nombre", operator: "not_equals", value: "total pasivos" }
                ]
            },
            {
                id: "utilidad_result",
                operation: "SUBTRACT",
                operands: ["total_activos", "total_pasivos"]
            }
        ],
        result_field: "utilidad_result"
    }
};

class FormulaEngine {
    static executeForYearRange(formula: any, data: any[], startYear: number, endYear: number): { [year: number]: number } {
        const results: { [year: number]: number } = {};

        for (let year = startYear; year <= endYear; year++) {
            // Filter data for this specific year
            const yearData = data.filter(item => item.ano === year);
            results[year] = this.execute(formula, yearData);
        }

        return results;
    }

    static execute(formula: any, data: any[]): number {
        const results: { [key: string]: number } = {};

        for (const operation of formula.operations) {
            switch (operation.operation) {
                case 'SUM':
                    results[operation.id] = this.calculateSum(data, operation.filters || []);
                    break;
                case 'SUBTRACT':
                    results[operation.id] = this.calculateSubtract(results, operation.operands);
                    break;
                case 'MULTIPLY':
                    results[operation.id] = this.calculateMultiply(results, operation.operands);
                    break;
                case 'DIVIDE':
                    results[operation.id] = this.calculateDivide(results, operation.operands);
                    break;
            }
        }

        return results[formula.result_field] || 0;
    }

    private static calculateSum(data: any[], filters: any[]): number {
        return data
            .filter(item => this.applyFilters(item, filters))
            .reduce((sum, item) => sum + (item.valor || 0), 0);
    }

    private static calculateSubtract(results: { [key: string]: number }, operands: string[]): number {
        return operands.reduce((result, operand, index) =>
            index === 0 ? (results[operand] || 0) : result - (results[operand] || 0), 0
        );
    }

    private static calculateMultiply(results: { [key: string]: number }, operands: string[]): number {
        return operands.reduce((result, operand) => result * (results[operand] || 0), 1);
    }

    private static calculateDivide(results: { [key: string]: number }, operands: string[]): number {
        return operands.reduce((result: number, operand: string, index: number) =>
            index === 0 ? (results[operand] || 0) : result / (results[operand] || 1), 0
        );
    }

    private static applyFilters(item: any, filters: any[]): boolean {
        return filters.every(filter => {
            switch (filter.operator) {
                case 'equals': return item[filter.field] === filter.value;
                case 'not_equals': return item[filter.field] !== filter.value;
                case 'contains': return item[filter.field]?.includes?.(filter.value) || false;
                case 'greater_than': return Number(item[filter.field]) > Number(filter.value);
                default: return true;
            }
        });
    }
}