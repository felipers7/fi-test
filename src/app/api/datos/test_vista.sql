-- Test the new dynamic vista.sql with sample data
-- This shows how the cumulative depreciation logic works

-- First, let's see what depreciation data we have:
SELECT 
    'Current Depreciation Data' as test_section,
    blnc_ano as year,
    macu_codigo as account,
    blnc_monto as amount
FROM fi.balances 
WHERE macu_codigo IN ('700001', '600003')
ORDER BY blnc_ano, macu_codigo;

-- Now let's see the year range detection:
SELECT 
    'Year Range Detection' as test_section,
    MIN(blnc_ano) as min_year,
    MAX(blnc_ano) as max_year,
    MIN(blnc_ano) - 1 as base_year
FROM fi.balances 
WHERE macu_codigo IN ('700001', '600003');

-- Show yearly totals:
SELECT 
    'Yearly Depreciation Totals' as test_section,
    blnc_ano as year,
    -SUM(COALESCE(blnc_monto, 0)) AS yearly_depreciation
FROM fi.balances
WHERE macu_codigo IN ('700001', '600003')
GROUP BY blnc_ano
ORDER BY blnc_ano;

-- Finally, show the cumulative result (same as vista.sql):
SELECT 
    'Cumulative Depreciation Result' as test_section,
    periodo as year,
    dep_final as cumulative_depreciation
FROM (
    WITH year_range AS (
        SELECT 
            MIN(blnc_ano) as min_year,
            MAX(blnc_ano) as max_year
        FROM fi.balances 
        WHERE macu_codigo IN ('700001', '600003')
    ),
    yearly_depreciation AS (
        SELECT 
            blnc_ano as periodo,
            -SUM(COALESCE(blnc_monto, 0)) AS depreciation_amount
        FROM fi.balances
        WHERE macu_codigo IN ('700001', '600003')
        GROUP BY blnc_ano
    ),
    base_depreciation AS (
        SELECT 
            yr.min_year - 1 as base_year,
            COALESCE(yd.depreciation_amount, 0) as dep_ini
        FROM year_range yr
        LEFT JOIN yearly_depreciation yd ON yd.periodo = yr.min_year - 1
    ),
    cumulative_depreciation AS (
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
    SELECT periodo, dep_final FROM cumulative_depreciation
) t
ORDER BY year; 