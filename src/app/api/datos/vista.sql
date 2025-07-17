WITH year_range AS (
    -- Get the range of years available in the data for depreciation accounts
    SELECT 
        MIN(blnc_ano) as min_year,
        MAX(blnc_ano) as max_year
    FROM fi.balances 
    WHERE macu_codigo IN ('700001', '600003')
),
yearly_depreciation AS (
    -- Get depreciation amounts for each year
    SELECT 
        blnc_ano as periodo,
        -SUM(COALESCE(blnc_monto, 0)) AS depreciation_amount
    FROM fi.balances
    WHERE macu_codigo IN ('700001', '600003')
    GROUP BY blnc_ano
),
base_depreciation AS (
    -- Get the base depreciation (year before min_year)
    SELECT 
        yr.min_year - 1 as base_year,
        COALESCE(yd.depreciation_amount, 0) as dep_ini
    FROM year_range yr
    LEFT JOIN yearly_depreciation yd ON yd.periodo = yr.min_year - 1
),
cumulative_depreciation AS (
    -- Calculate cumulative depreciation using window function
    SELECT 
        yd.periodo,
        yd.depreciation_amount,
        bd.dep_ini,
        bd.dep_ini + SUM(yd.depreciation_amount) OVER (
            ORDER BY yd.periodo 
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) AS dep_final
    FROM yearly_depreciation yd
    CROSS JOIN base_depreciation bd
    CROSS JOIN year_range yr
    WHERE yd.periodo >= yr.min_year AND yd.periodo <= yr.max_year
)
SELECT 
    periodo,
    dep_final
FROM cumulative_depreciation
ORDER BY periodo;