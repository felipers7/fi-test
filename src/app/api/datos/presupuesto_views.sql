-- =============================================================================
-- BUDGET FINANCIAL METRICS VIEWS FOR MYSQL
-- Creates budget views with periodo (year) and valor (value) columns
-- Years: 2024-2029 with hardcoded budget projections
-- =============================================================================

-- =============================================================================
-- CRECIMIENTO SOSTENIBLE - PRESUPUESTO (Sustainable Growth - Budget)
-- =============================================================================

-- Ventas Presupuesto (Sales Budget)
CREATE OR REPLACE VIEW vw_ventas_presupuesto AS
SELECT 2024 AS periodo, 130000.00 AS valor UNION ALL
SELECT 2025, 150000.00 UNION ALL
SELECT 2026, 180000.00 UNION ALL
SELECT 2027, 190000.00 UNION ALL
SELECT 2028, 200000.00 UNION ALL
SELECT 2029, 210000.00;

-- Utilidad Presupuesto (Profit Budget)
CREATE OR REPLACE VIEW vw_utilidad_presupuesto AS
SELECT 2024 AS periodo, 14800.00 AS valor UNION ALL
SELECT 2025, 16500.00 UNION ALL
SELECT 2026, 21000.00 UNION ALL
SELECT 2027, 22000.00 UNION ALL
SELECT 2028, 23500.00 UNION ALL
SELECT 2029, 25000.00;

-- EBITDA Presupuesto
CREATE OR REPLACE VIEW vw_EBITDA_presupuesto AS
SELECT 2024 AS periodo, 21800.00 AS valor UNION ALL
SELECT 2025, 24700.00 UNION ALL
SELECT 2026, 31500.00 UNION ALL
SELECT 2027, 33000.00 UNION ALL
SELECT 2028, 35500.00 UNION ALL
SELECT 2029, 37800.00;

-- Valor Patrimonio Presupuesto (Equity Value Budget)
CREATE OR REPLACE VIEW vw_valor_patrimonio_presupuesto AS
SELECT 2024 AS periodo, 52000000.00 AS valor UNION ALL
SELECT 2025, 57000000.00 UNION ALL
SELECT 2026, 62000000.00 UNION ALL
SELECT 2027, 68000000.00 UNION ALL
SELECT 2028, 74000000.00 UNION ALL
SELECT 2029, 81000000.00;

-- Intereses Operacionales Presupuesto (Operating Interest Budget)
CREATE OR REPLACE VIEW vw_intereses_operacionales_presupuesto AS
SELECT 2024 AS periodo, 820000.00 AS valor UNION ALL
SELECT 2025, 845000.00 UNION ALL
SELECT 2026, 870000.00 UNION ALL
SELECT 2027, 895000.00 UNION ALL
SELECT 2028, 920000.00 UNION ALL
SELECT 2029, 945000.00;

-- Valor Deuda Presupuesto (Debt Value Budget)
CREATE OR REPLACE VIEW vw_valor_deuda_presupuesto AS
SELECT 2024 AS periodo, 8500000.00 AS valor UNION ALL
SELECT 2025, 8000000.00 UNION ALL
SELECT 2026, 7500000.00 UNION ALL
SELECT 2027, 7000000.00 UNION ALL
SELECT 2028, 6500000.00 UNION ALL
SELECT 2029, 6000000.00;

-- Crecimiento Patrimonio Presupuesto (Equity Growth Budget)
CREATE OR REPLACE VIEW vw_crecimiento_patrimonio_presupuesto AS
SELECT 2024 AS periodo, 0.1550 AS valor UNION ALL
SELECT 2025, 0.0870 UNION ALL
SELECT 2026, 0.0900 UNION ALL
SELECT 2027, 0.0905 UNION ALL
SELECT 2028, 0.0900 UNION ALL
SELECT 2029, 0.0905;

-- Creación de Valor Presupuesto (Value Creation Budget)
CREATE OR REPLACE VIEW vw_creacion_de_valor_presupuesto AS
SELECT 2024 AS periodo, 8200000.00 AS valor UNION ALL
SELECT 2025, 9000000.00 UNION ALL
SELECT 2026, 9700000.00 UNION ALL
SELECT 2027, 10500000.00 UNION ALL
SELECT 2028, 11400000.00 UNION ALL
SELECT 2029, 12300000.00;

-- Rentabilidad de Patrimonio Presupuesto (Return on Equity Budget)
CREATE OR REPLACE VIEW vw_rentabilidad_de_patrimonio_presupuesto AS
SELECT 2024 AS periodo, 0.2150 AS valor UNION ALL
SELECT 2025, 0.2280 UNION ALL
SELECT 2026, 0.2350 UNION ALL
SELECT 2027, 0.2420 UNION ALL
SELECT 2028, 0.2500 UNION ALL
SELECT 2029, 0.2600;

-- Rentabilidad del Capital Presupuesto (Return on Capital Budget)
CREATE OR REPLACE VIEW vw_rentabilidad_del_capital_presupuesto AS
SELECT 2024 AS periodo, 0.1920 AS valor UNION ALL
SELECT 2025, 0.2050 UNION ALL
SELECT 2026, 0.2120 UNION ALL
SELECT 2027, 0.2190 UNION ALL
SELECT 2028, 0.2260 UNION ALL
SELECT 2029, 0.2330;

-- =============================================================================
-- RENTABILIDAD DEL PATRIMONIO - PRESUPUESTO (Return on Equity Components - Budget)
-- =============================================================================

-- Utilidad Neta Presupuesto (Net Profit Budget)
CREATE OR REPLACE VIEW vw_utilidad_neta_presupuesto AS
SELECT 2024 AS periodo, 11200000.00 AS valor UNION ALL
SELECT 2025, 13000000.00 UNION ALL
SELECT 2026, 14800000.00 UNION ALL
SELECT 2027, 16700000.00 UNION ALL
SELECT 2028, 18900000.00 UNION ALL
SELECT 2029, 21400000.00;

-- Rotación de Activos Presupuesto (Asset Turnover Budget)
CREATE OR REPLACE VIEW vw_rotacion_de_activos_presupuesto AS
SELECT 2024 AS periodo, 2.150 AS valor UNION ALL
SELECT 2025, 2.220 UNION ALL
SELECT 2026, 2.290 UNION ALL
SELECT 2027, 2.365 UNION ALL
SELECT 2028, 2.440 UNION ALL
SELECT 2029, 2.520;

-- Palanca Financiera Presupuesto (Financial Leverage Budget)
CREATE OR REPLACE VIEW vw_palanca_financiera_presupuesto AS
SELECT 2024 AS periodo, 1.160 AS valor UNION ALL
SELECT 2025, 1.138 UNION ALL
SELECT 2026, 1.118 UNION ALL
SELECT 2027, 1.100 UNION ALL
SELECT 2028, 1.085 UNION ALL
SELECT 2029, 1.070;

-- Crecimiento de Ventas Presupuesto (Sales Growth Budget)
CREATE OR REPLACE VIEW vw_crecimiento_de_ventas_presupuesto AS
SELECT 2024 AS periodo, 0.1850 AS valor UNION ALL
SELECT 2025, 0.1538 UNION ALL
SELECT 2026, 0.2000 UNION ALL
SELECT 2027, 0.0556 UNION ALL
SELECT 2028, 0.0526 UNION ALL
SELECT 2029, 0.0500;

-- =============================================================================
-- INVERSIONES - PRESUPUESTO (Investments - Budget)
-- =============================================================================

-- Inversiones Presupuesto
CREATE OR REPLACE VIEW vw_inversiones_presupuesto AS
SELECT 2024 AS periodo, 13000000.00 AS valor UNION ALL
SELECT 2025, 14200000.00 UNION ALL
SELECT 2026, 15500000.00 UNION ALL
SELECT 2027, 16900000.00 UNION ALL
SELECT 2028, 18400000.00 UNION ALL
SELECT 2029, 20000000.00;

-- =============================================================================
-- FLUJO DE EFECTIVO - PRESUPUESTO (Cash Flow - Budget)
-- =============================================================================

-- Fuentes de Fondo Presupuesto (Sources of Funds Budget)
CREATE OR REPLACE VIEW vw_fuentes_de_fondo_presupuesto AS
SELECT 2024 AS periodo, 28000000.00 AS valor UNION ALL
SELECT 2025, 30800000.00 UNION ALL
SELECT 2026, 33700000.00 UNION ALL
SELECT 2027, 36800000.00 UNION ALL
SELECT 2028, 40100000.00 UNION ALL
SELECT 2029, 43600000.00;

-- Caja 1 Presupuesto (Cash 1 Budget)
CREATE OR REPLACE VIEW vw_caja_1_presupuesto AS
SELECT 2024 AS periodo, 2650000.00 AS valor UNION ALL
SELECT 2025, 3000000.00 UNION ALL
SELECT 2026, 3400000.00 UNION ALL
SELECT 2027, 3850000.00 UNION ALL
SELECT 2028, 4350000.00 UNION ALL
SELECT 2029, 4900000.00;

-- Caja 2 Presupuesto (Cash 2 Budget)
CREATE OR REPLACE VIEW vw_caja_2_presupuesto AS
SELECT 2024 AS periodo, 2650000.00 AS valor UNION ALL
SELECT 2025, 3000000.00 UNION ALL
SELECT 2026, 3400000.00 UNION ALL
SELECT 2027, 3850000.00 UNION ALL
SELECT 2028, 4350000.00 UNION ALL
SELECT 2029, 4900000.00;

-- Usos de Fondo Presupuesto (Uses of Funds Budget)
CREATE OR REPLACE VIEW vw_usos_de_fondo_presupuesto AS
SELECT 2024 AS periodo, 25350000.00 AS valor UNION ALL
SELECT 2025, 27800000.00 UNION ALL
SELECT 2026, 30300000.00 UNION ALL
SELECT 2027, 32950000.00 UNION ALL
SELECT 2028, 35750000.00 UNION ALL
SELECT 2029, 38700000.00;

-- Flujo Operativo Presupuesto (Operating Cash Flow Budget)
CREATE OR REPLACE VIEW vw_flujo_operativo_presupuesto AS
SELECT 2024 AS periodo, 18400000.00 AS valor UNION ALL
SELECT 2025, 20200000.00 UNION ALL
SELECT 2026, 22100000.00 UNION ALL
SELECT 2027, 24200000.00 UNION ALL
SELECT 2028, 26500000.00 UNION ALL
SELECT 2029, 29000000.00;

-- Pago Dividendos Presupuesto (Dividend Payments Budget)
CREATE OR REPLACE VIEW vw_pago_dividendos_presupuesto AS
SELECT 2024 AS periodo, 3100000.00 AS valor UNION ALL
SELECT 2025, 3500000.00 UNION ALL
SELECT 2026, 4000000.00 UNION ALL
SELECT 2027, 4500000.00 UNION ALL
SELECT 2028, 5100000.00 UNION ALL
SELECT 2029, 5800000.00;

-- Flujo Inversiones Presupuesto (Investment Cash Flow Budget)
CREATE OR REPLACE VIEW vw_flujo_inversiones_presupuesto AS
SELECT 2024 AS periodo, -8000000.00 AS valor UNION ALL
SELECT 2025, -8700000.00 UNION ALL
SELECT 2026, -9500000.00 UNION ALL
SELECT 2027, -10400000.00 UNION ALL
SELECT 2028, -11300000.00 UNION ALL
SELECT 2029, -12300000.00;

-- Crédito Presupuesto (Credit Budget)
CREATE OR REPLACE VIEW vw_credito_presupuesto AS
SELECT 2024 AS periodo, 8500000.00 AS valor UNION ALL
SELECT 2025, 8000000.00 UNION ALL
SELECT 2026, 7500000.00 UNION ALL
SELECT 2027, 7000000.00 UNION ALL
SELECT 2028, 6500000.00 UNION ALL
SELECT 2029, 6000000.00;

-- Capital de Trabajo Presupuesto (Working Capital Budget)
CREATE OR REPLACE VIEW vw_capital_de_trabajo_presupuesto AS
SELECT 2024 AS periodo, 22200000.00 AS valor UNION ALL
SELECT 2025, 24100000.00 UNION ALL
SELECT 2026, 26200000.00 UNION ALL
SELECT 2027, 28500000.00 UNION ALL
SELECT 2028, 31000000.00 UNION ALL
SELECT 2029, 33700000.00;

-- Caja Periodo Presupuesto (Period Cash Budget)
CREATE OR REPLACE VIEW vw_caja_periodo_presupuesto AS
SELECT 2024 AS periodo, 2650000.00 AS valor UNION ALL
SELECT 2025, 3000000.00 UNION ALL
SELECT 2026, 3400000.00 UNION ALL
SELECT 2027, 3850000.00 UNION ALL
SELECT 2028, 4350000.00 UNION ALL
SELECT 2029, 4900000.00;

-- =============================================================================
-- RIESGO FINANCIERO - PRESUPUESTO (Financial Risk - Budget)
-- =============================================================================

-- Solvencia Presupuesto (Solvency Budget)
CREATE OR REPLACE VIEW vw_solvencia_presupuesto AS
SELECT 2024 AS periodo, 7.000 AS valor UNION ALL
SELECT 2025, 7.750 UNION ALL
SELECT 2026, 8.600 UNION ALL
SELECT 2027, 9.550 UNION ALL
SELECT 2028, 10.650 UNION ALL
SELECT 2029, 11.900;

-- Liquidez Presupuesto (Liquidity Budget)
CREATE OR REPLACE VIEW vw_liquidez_presupuesto AS
SELECT 2024 AS periodo, 2.800 AS valor UNION ALL
SELECT 2025, 3.070 UNION ALL
SELECT 2026, 3.370 UNION ALL
SELECT 2027, 3.700 UNION ALL
SELECT 2028, 4.050 UNION ALL
SELECT 2029, 4.430;

-- Nivel de Deuda Presupuesto (Debt Level Budget)
CREATE OR REPLACE VIEW vw_nivel_de_deuda_presupuesto AS
SELECT 2024 AS periodo, 0.145 AS valor UNION ALL
SELECT 2025, 0.128 UNION ALL
SELECT 2026, 0.113 UNION ALL
SELECT 2027, 0.098 UNION ALL
SELECT 2028, 0.086 UNION ALL
SELECT 2029, 0.075;

-- =============================================================================
-- OTROS INDICADORES - PRESUPUESTO (Other Indicators - Budget)
-- =============================================================================

-- Dividendos Presupuesto
CREATE OR REPLACE VIEW vw_dividendos_presupuesto AS
SELECT 2024 AS periodo, 3100000.00 AS valor UNION ALL
SELECT 2025, 3500000.00 UNION ALL
SELECT 2026, 4000000.00 UNION ALL
SELECT 2027, 4500000.00 UNION ALL
SELECT 2028, 5100000.00 UNION ALL
SELECT 2029, 5800000.00;

-- Crédito Neto Presupuesto (Net Credit Budget)
CREATE OR REPLACE VIEW vw_credito_neto_presupuesto AS
SELECT 2024 AS periodo, 5850000.00 AS valor UNION ALL
SELECT 2025, 5000000.00 UNION ALL
SELECT 2026, 4100000.00 UNION ALL
SELECT 2027, 3150000.00 UNION ALL
SELECT 2028, 2150000.00 UNION ALL
SELECT 2029, 1100000.00;

-- =============================================================================
-- END OF BUDGET VIEWS FILE
-- ============================================================================= 