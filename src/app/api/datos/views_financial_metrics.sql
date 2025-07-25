-- =============================================================================
-- FINANCIAL METRICS VIEWS FOR MYSQL
-- Creates centralized presupuestos table and views that query from it
-- Years: 2024-2029 with hardcoded financial projections
-- =============================================================================

-- =============================================================================
-- CREATE PRESUPUESTOS TABLE
-- =============================================================================

CREATE TABLE IF NOT EXISTS presupuestos (
    periodo INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    valor DECIMAL(15,2) NOT NULL,
    PRIMARY KEY (periodo, nombre),
    INDEX idx_nombre (nombre),
    INDEX idx_periodo (periodo)
);

-- =============================================================================
-- INSERT DATA INTO PRESUPUESTOS TABLE
-- =============================================================================

-- Clear existing data
DELETE FROM presupuestos;

-- Insert Ventas (Sales)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2022, 'ventas', 63163.00),
(2023, 'ventas', 80535.00),
(2024, 'ventas', 134500.00),
(2025, 'ventas', 154675.00),
(2026, 'ventas', 185610.00),
(2027, 'ventas', 194890.00),
(2028, 'ventas', 204000.00),
(2029, 'ventas', 214000.00);

-- Insert Utilidad (Profit)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2022, 'utilidad', 2962.00),
(2023, 'utilidad', 9756.00),
(2024, 'utilidad', 15376.00),
(2025, 'utilidad', 17054.00),
(2026, 'utilidad', 21705.00),
(2027, 'utilidad', 22644.00),
(2028, 'utilidad', 24000.00),
(2029, 'utilidad', 25500.00);

-- Insert EBITDA
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2022, 'EBITDA', 4642.00),
(2023, 'EBITDA', 14081.00),
(2024, 'EBITDA', 22581.00),
(2025, 'EBITDA', 25456.00),
(2026, 'EBITDA', 32227.00),
(2027, 'EBITDA', 33878.00),
(2028, 'EBITDA', 36000.00),
(2029, 'EBITDA', 38500.00);

-- Insert Valor Patrimonio (Equity Value)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'valor_patrimonio', 53469103.00),
(2025, 'valor_patrimonio', 58200000.00),
(2026, 'valor_patrimonio', 63500000.00),
(2027, 'valor_patrimonio', 69300000.00),
(2028, 'valor_patrimonio', 75600000.00),
(2029, 'valor_patrimonio', 82500000.00);

-- Insert Intereses Operacionales (Operating Interest)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'intereses_operacionales', 826804.00),
(2025, 'intereses_operacionales', 850000.00),
(2026, 'intereses_operacionales', 875000.00),
(2027, 'intereses_operacionales', 900000.00),
(2028, 'intereses_operacionales', 925000.00),
(2029, 'intereses_operacionales', 950000.00);

-- Insert Valor Deuda (Debt Value)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'valor_deuda', 8680543.00),
(2025, 'valor_deuda', 8200000.00),
(2026, 'valor_deuda', 7700000.00),
(2027, 'valor_deuda', 7200000.00),
(2028, 'valor_deuda', 6700000.00),
(2029, 'valor_deuda', 6200000.00);

-- Insert Crecimiento Patrimonio (Equity Growth)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'crecimiento_patrimonio', 0.1578),
(2025, 'crecimiento_patrimonio', 0.0886),
(2026, 'crecimiento_patrimonio', 0.0910),
(2027, 'crecimiento_patrimonio', 0.0913),
(2028, 'crecimiento_patrimonio', 0.0911),
(2029, 'crecimiento_patrimonio', 0.0913);

-- Insert Creación de Valor (Value Creation)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'creacion_de_valor', 8500000.00),
(2025, 'creacion_de_valor', 9200000.00),
(2026, 'creacion_de_valor', 9900000.00),
(2027, 'creacion_de_valor', 10700000.00),
(2028, 'creacion_de_valor', 11600000.00),
(2029, 'creacion_de_valor', 12500000.00);

-- Insert Rentabilidad de Patrimonio (Return on Equity)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'rentabilidad_de_patrimonio', 0.2180),
(2025, 'rentabilidad_de_patrimonio', 0.2320),
(2026, 'rentabilidad_de_patrimonio', 0.2394),
(2027, 'rentabilidad_de_patrimonio', 0.2467),
(2028, 'rentabilidad_de_patrimonio', 0.2552),
(2029, 'rentabilidad_de_patrimonio', 0.2642);

-- Insert Rentabilidad del Capital (Return on Capital)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'rentabilidad_del_capital', 0.1950),
(2025, 'rentabilidad_del_capital', 0.2080),
(2026, 'rentabilidad_del_capital', 0.2150),
(2027, 'rentabilidad_del_capital', 0.2220),
(2028, 'rentabilidad_del_capital', 0.2290),
(2029, 'rentabilidad_del_capital', 0.2360);

-- Insert Utilidad Neta (Net Profit)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'utilidad_neta', 11666257.00),
(2025, 'utilidad_neta', 13500000.00),
(2026, 'utilidad_neta', 15200000.00),
(2027, 'utilidad_neta', 17100000.00),
(2028, 'utilidad_neta', 19300000.00),
(2029, 'utilidad_neta', 21800000.00);

-- Insert Rotación de Activos (Asset Turnover)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'rotacion_de_activos', 2.165),
(2025, 'rotacion_de_activos', 2.235),
(2026, 'rotacion_de_activos', 2.308),
(2027, 'rotacion_de_activos', 2.384),
(2028, 'rotacion_de_activos', 2.463),
(2029, 'rotacion_de_activos', 2.545);

-- Insert Palanca Financiera (Financial Leverage)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'palanca_financiera', 1.162),
(2025, 'palanca_financiera', 1.140),
(2026, 'palanca_financiera', 1.121),
(2027, 'palanca_financiera', 1.104),
(2028, 'palanca_financiera', 1.089),
(2029, 'palanca_financiera', 1.075);

-- Insert Inversiones
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'inversiones', 13338811.00),
(2025, 'inversiones', 14500000.00),
(2026, 'inversiones', 15800000.00),
(2027, 'inversiones', 17200000.00),
(2028, 'inversiones', 18700000.00),
(2029, 'inversiones', 20300000.00);

-- Insert Fuentes de Fondo (Sources of Funds)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'fuentes_de_fondo', 28450000.00),
(2025, 'fuentes_de_fondo', 31200000.00),
(2026, 'fuentes_de_fondo', 34100000.00),
(2027, 'fuentes_de_fondo', 37200000.00),
(2028, 'fuentes_de_fondo', 40500000.00),
(2029, 'fuentes_de_fondo', 44000000.00);

-- Insert Caja (Cash)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'caja', 2720365.00),
(2025, 'caja', 3100000.00),
(2026, 'caja', 3500000.00),
(2027, 'caja', 3950000.00),
(2028, 'caja', 4450000.00),
(2029, 'caja', 5000000.00);

-- Insert Usos de Fondo (Uses of Funds)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'usos_de_fondo', 25730000.00),
(2025, 'usos_de_fondo', 28000000.00),
(2026, 'usos_de_fondo', 30500000.00),
(2027, 'usos_de_fondo', 33200000.00),
(2028, 'usos_de_fondo', 36100000.00),
(2029, 'usos_de_fondo', 39200000.00);

-- Insert Flujo Operativo (Operating Cash Flow)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'flujo_operativo', 18750000.00),
(2025, 'flujo_operativo', 20500000.00),
(2026, 'flujo_operativo', 22400000.00),
(2027, 'flujo_operativo', 24500000.00),
(2028, 'flujo_operativo', 26800000.00),
(2029, 'flujo_operativo', 29300000.00);

-- Insert Pago Dividendos (Dividend Payments)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'pago_dividendos', 3200000.00),
(2025, 'pago_dividendos', 3600000.00),
(2026, 'pago_dividendos', 4100000.00),
(2027, 'pago_dividendos', 4600000.00),
(2028, 'pago_dividendos', 5200000.00),
(2029, 'pago_dividendos', 5900000.00);

-- Insert Flujo Inversiones (Investment Cash Flow)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'flujo_inversiones', -8200000.00),
(2025, 'flujo_inversiones', -8900000.00),
(2026, 'flujo_inversiones', -9700000.00),
(2027, 'flujo_inversiones', -10600000.00),
(2028, 'flujo_inversiones', -11500000.00),
(2029, 'flujo_inversiones', -12500000.00);

-- Insert Crédito (Credit)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'credito', 8680543.00),
(2025, 'credito', 8200000.00),
(2026, 'credito', 7700000.00),
(2027, 'credito', 7200000.00),
(2028, 'credito', 6700000.00),
(2029, 'credito', 6200000.00);

-- Insert Capital de Trabajo (Working Capital)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'capital_de_trabajo', 22582153.00),
(2025, 'capital_de_trabajo', 24500000.00),
(2026, 'capital_de_trabajo', 26600000.00),
(2027, 'capital_de_trabajo', 28900000.00),
(2028, 'capital_de_trabajo', 31400000.00),
(2029, 'capital_de_trabajo', 34100000.00);

-- Insert Caja Periodo (Period Cash)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'caja_periodo', 2720365.00),
(2025, 'caja_periodo', 3100000.00),
(2026, 'caja_periodo', 3500000.00),
(2027, 'caja_periodo', 3950000.00),
(2028, 'caja_periodo', 4450000.00),
(2029, 'caja_periodo', 5000000.00);

-- Insert Solvencia (Solvency)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'solvencia', 7.156),
(2025, 'solvencia', 7.895),
(2026, 'solvencia', 8.740),
(2027, 'solvencia', 9.708),
(2028, 'solvencia', 10.818),
(2029, 'solvencia', 12.090);

-- Insert Liquidez (Liquidity)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'liquidez', 2.845),
(2025, 'liquidez', 3.120),
(2026, 'liquidez', 3.420),
(2027, 'liquidez', 3.750),
(2028, 'liquidez', 4.110),
(2029, 'liquidez', 4.500);

-- Insert Nivel de Deuda (Debt Level)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'nivel_de_deuda', 0.140),
(2025, 'nivel_de_deuda', 0.123),
(2026, 'nivel_de_deuda', 0.108),
(2027, 'nivel_de_deuda', 0.094),
(2028, 'nivel_de_deuda', 0.082),
(2029, 'nivel_de_deuda', 0.071);

-- Insert Dividendos
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'dividendos', 3200000.00),
(2025, 'dividendos', 3600000.00),
(2026, 'dividendos', 4100000.00),
(2027, 'dividendos', 4600000.00),
(2028, 'dividendos', 5200000.00),
(2029, 'dividendos', 5900000.00);

-- Insert Crédito Neto (Net Credit)
INSERT INTO presupuestos (periodo, nombre, valor) VALUES
(2024, 'credito_neto', 5960178.00),
(2025, 'credito_neto', 5100000.00),
(2026, 'credito_neto', 4200000.00),
(2027, 'credito_neto', 3250000.00),
(2028, 'credito_neto', 2250000.00),
(2029, 'credito_neto', 1200000.00);

-- =============================================================================
-- CREATE VIEWS THAT QUERY FROM PRESUPUESTOS TABLE
-- =============================================================================

-- =============================================================================
-- CRECIMIENTO SOSTENIBLE (Sustainable Growth)
-- =============================================================================

-- Ventas (Sales)
CREATE OR REPLACE VIEW vw_ventas AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'ventas';

-- Utilidad (Profit)
CREATE OR REPLACE VIEW vw_utilidad AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'utilidad';

-- EBITDA
CREATE OR REPLACE VIEW vw_EBITDA AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'EBITDA';

-- Valor Patrimonio (Equity Value)
CREATE OR REPLACE VIEW vw_valor_patrimonio AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'valor_patrimonio';

-- Intereses Operacionales (Operating Interest)
CREATE OR REPLACE VIEW vw_intereses_operacionales AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'intereses_operacionales';

-- Valor Deuda (Debt Value)
CREATE OR REPLACE VIEW vw_valor_deuda AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'valor_deuda';

-- Crecimiento Patrimonio (Equity Growth)
CREATE OR REPLACE VIEW vw_crecimiento_patrimonio AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'crecimiento_patrimonio';

-- Creación de Valor (Value Creation)
CREATE OR REPLACE VIEW vw_creacion_de_valor AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'creacion_de_valor';

-- Rentabilidad de Patrimonio (Return on Equity)
CREATE OR REPLACE VIEW vw_rentabilidad_de_patrimonio AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'rentabilidad_de_patrimonio';

-- Rentabilidad del Capital (Return on Capital)
CREATE OR REPLACE VIEW vw_rentabilidad_del_capital AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'rentabilidad_del_capital';

-- =============================================================================
-- RENTABILIDAD DEL PATRIMONIO (Return on Equity Components)
-- =============================================================================

-- Utilidad Neta (Net Profit)
CREATE OR REPLACE VIEW vw_utilidad_neta AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'utilidad_neta';

-- Rotación de Activos (Asset Turnover)
CREATE OR REPLACE VIEW vw_rotacion_de_activos AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'rotacion_de_activos';

-- Palanca Financiera (Financial Leverage)
CREATE OR REPLACE VIEW vw_palanca_financiera AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'palanca_financiera';

-- =============================================================================
-- INVERSIONES (Investments)
-- =============================================================================

-- Inversiones
CREATE OR REPLACE VIEW vw_inversiones AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'inversiones';

-- =============================================================================
-- FLUJO DE EFECTIVO (Cash Flow)
-- =============================================================================

-- Fuentes de Fondo (Sources of Funds)
CREATE OR REPLACE VIEW vw_fuentes_de_fondo AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'fuentes_de_fondo';

-- Caja (Cash)
CREATE OR REPLACE VIEW vw_caja AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'caja';

-- Usos de Fondo (Uses of Funds)
CREATE OR REPLACE VIEW vw_usos_de_fondo AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'usos_de_fondo';

-- Flujo Operativo (Operating Cash Flow)
CREATE OR REPLACE VIEW vw_flujo_operativo AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'flujo_operativo';

-- Pago Dividendos (Dividend Payments)
CREATE OR REPLACE VIEW vw_pago_dividendos AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'pago_dividendos';

-- Flujo Inversiones (Investment Cash Flow)
CREATE OR REPLACE VIEW vw_flujo_inversiones AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'flujo_inversiones';

-- Crédito (Credit)
CREATE OR REPLACE VIEW vw_credito AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'credito';

-- Capital de Trabajo (Working Capital)
CREATE OR REPLACE VIEW vw_capital_de_trabajo AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'capital_de_trabajo';

-- Caja Periodo (Period Cash)
CREATE OR REPLACE VIEW vw_caja_periodo AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'caja_periodo';

-- =============================================================================
-- RIESGO FINANCIERO (Financial Risk)
-- =============================================================================

-- Solvencia (Solvency)
CREATE OR REPLACE VIEW vw_solvencia AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'solvencia';

-- Liquidez (Liquidity)
CREATE OR REPLACE VIEW vw_liquidez AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'liquidez';

-- Nivel de Deuda (Debt Level)
CREATE OR REPLACE VIEW vw_nivel_de_deuda AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'nivel_de_deuda';

-- =============================================================================
-- OTROS INDICADORES (Other Indicators)
-- =============================================================================

-- Dividendos
CREATE OR REPLACE VIEW vw_dividendos AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'dividendos';

-- Crédito Neto (Net Credit)
CREATE OR REPLACE VIEW vw_credito_neto AS
SELECT periodo, valor FROM presupuestos WHERE nombre = 'credito_neto';

-- =============================================================================
-- END OF FILE
-- ============================================================================= 