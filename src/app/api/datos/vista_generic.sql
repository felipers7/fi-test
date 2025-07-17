-- Generic cumulative balance calculator
-- Replace @account_codes with your desired account codes (e.g., '700001','600003')
-- Replace @multiplier with 1 for positive accumulation, -1 for negative (like depreciation)

WITH year_range AS (
    -- Get the range of years available in the data for specified accounts
    SELECT 
        MIN(blnc_ano) as min_year,
        MAX(blnc_ano) as max_year
    FROM fi.balances 
    WHERE macu_codigo IN (@account_codes) -- Parameter: e.g., ('700001', '600003')
),
yearly_totals AS (
    -- Get total amounts for each year
    SELECT 
        blnc_ano as periodo,
        @multiplier * SUM(COALESCE(blnc_monto, 0)) AS yearly_amount -- Parameter: 1 or -1
    FROM fi.balances
    WHERE macu_codigo IN (@account_codes) -- Parameter: same as above
    GROUP BY blnc_ano
),
base_amount AS (
    -- Get the base amount (year before min_year)
    SELECT 
        yr.min_year - 1 as base_year,
        COALESCE(yt.yearly_amount, 0) as base_value
    FROM year_range yr
    LEFT JOIN yearly_totals yt ON yt.periodo = yr.min_year - 1
),
cumulative_totals AS (
    -- Calculate cumulative totals using window function
    SELECT 
        yt.periodo,
        yt.yearly_amount,
        ba.base_value,
        ba.base_value + SUM(yt.yearly_amount) OVER (
            ORDER BY yt.periodo 
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) AS cumulative_total
    FROM yearly_totals yt
    CROSS JOIN base_amount ba
    CROSS JOIN year_range yr
    WHERE yt.periodo >= yr.min_year AND yt.periodo <= yr.max_year
)
SELECT 
    periodo,
    yearly_amount,
    cumulative_total
FROM cumulative_totals
ORDER BY periodo;

-- USAGE EXAMPLES:
-- 
-- For depreciation (negative accumulation):
-- Replace @account_codes with ('700001', '600003')
-- Replace @multiplier with -1
--
-- For revenue accumulation (positive):
-- Replace @account_codes with ('800001')  
-- Replace @multiplier with 1
--
-- For multiple expense accounts:
-- Replace @account_codes with ('600001', '600002', '700002')
-- Replace @multiplier with 1 (if you want positive accumulation) or -1 (if expenses should be negative) 