periodo valor

vw_ventas

CREATE OR REPLACE VIEW fi.vw_ventas AS
SELECT 
    periodo,
    ventas_modelo AS valor
FROM fi.vw_modelo
WHERE periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    proyf_monto AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'ventas_modelo';



== crecimiento sostenible 

vw_utilidad
CREATE OR REPLACE VIEW bd_fi.vw_utilidad AS
SELECT
    m.periodo AS periodo,
    m.resultado_despues_impuesto_modelo AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    proyf_monto AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'resultado_despues_impuesto_modelo';



vw_EBITDA

CREATE OR REPLACE VIEW bd_fi.vw_EBITDA_modelo AS
SELECT
    m.periodo AS periodo,
    m.EBITDA_modelo AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    proyf_monto AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'EBITDA_modelo';


vw_valor_patrimonio

CREATE OR REPLACE VIEW bd_fi.vw_valor_patrimonio AS
SELECT
    m.periodo AS periodo,
    (m.capital_pagado_modelo +
     m.otras_reservas_modelo +
     m.ganancias_acumuladas_modelo +
     m.cuentas_particulares_modelo) AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    (
        SUM(CASE WHEN proyf_nombre = 'capital_pagado_modelo' THEN proyf_monto ELSE 0 END) +
        SUM(CASE WHEN proyf_nombre = 'otras_reservas_modelo' THEN proyf_monto ELSE 0 END) +
        SUM(CASE WHEN proyf_nombre = 'ganancias_acumuladas_modelo' THEN proyf_monto ELSE 0 END) +
        SUM(CASE WHEN proyf_nombre = 'cuentas_particulares_modelo' THEN proyf_monto ELSE 0 END)
    ) AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('capital_pagado_modelo', 'otras_reservas_modelo', 'ganancias_acumuladas_modelo', 'cuentas_particulares_modelo')
GROUP BY proyf_periodo;


vw_intereses_operacionales

CREATE OR REPLACE VIEW bd_fi.vw_interes_operacional AS
SELECT
    m.periodo AS periodo,
    (m.intereses_modelo / 
     (m.ventas_modelo +
      m.costos_ventas_modelo +
      m.gvv_modelo +
      m.gastos_adm_modelo +
      m.depreciacion_modelo)
    ) AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    (
        SUM(CASE WHEN proyf_nombre = 'intereses_modelo' THEN proyf_monto ELSE 0 END) /
        NULLIF(
            (
                SUM(CASE WHEN proyf_nombre = 'ventas_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'costos_ventas_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'gvv_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'gastos_adm_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'depreciacion_modelo' THEN proyf_monto ELSE 0 END)
            ),
            0
        )
    ) AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('intereses_modelo', 'ventas_modelo', 'costos_ventas_modelo', 'gvv_modelo', 'gastos_adm_modelo', 'depreciacion_modelo')
GROUP BY proyf_periodo;


vw_valor_deuda
CREATE OR REPLACE VIEW bd_fi.vw_valor_deuda AS
SELECT
    m.periodo AS periodo,
    (m.deuda_corto_plazo_modelo +
     m.deuda_largo_plazo_modelo) AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    (
        SUM(CASE WHEN proyf_nombre = 'deuda_corto_plazo_modelo' THEN proyf_monto ELSE 0 END) +
        SUM(CASE WHEN proyf_nombre = 'deuda_largo_plazo_modelo' THEN proyf_monto ELSE 0 END)
    ) AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('deuda_corto_plazo_modelo', 'deuda_largo_plazo_modelo')
GROUP BY proyf_periodo;

vw_crecimiento_patrimonio

CREATE OR REPLACE VIEW bd_fi.vw_crecimiento_patrimonio AS
SELECT
    y.blnc_ano AS periodo,
    (
        (
            COALESCE(SUM(CASE WHEN m.macu_codigo IN ('300001', '300002', '300003', '300004') THEN b.blnc_monto ELSE 0 END), 0)
            -
            COALESCE((
                SELECT SUM(b2.blnc_monto)
                FROM balances b2
                JOIN maestro_cuentas m2 ON m2.macu_codigo = b2.macu_codigo
                WHERE b2.blnc_ano = y.blnc_ano - 1
                AND m2.macu_codigo IN ('300001', '300002', '300003', '300004')
            ), 0)
        )
        /
        NULLIF(
            COALESCE((
                SELECT SUM(b2.blnc_monto)
                FROM balances b2
                JOIN maestro_cuentas m2 ON m2.macu_codigo = b2.macu_codigo
                WHERE b2.blnc_ano = y.blnc_ano - 1
                AND m2.macu_codigo IN ('300001', '300002', '300003', '300004')
            ), 0),
            0
        )
    ) AS valor
FROM
    balances b
JOIN maestro_cuentas m ON m.macu_codigo = b.macu_codigo
JOIN (
    SELECT DISTINCT blnc_ano
    FROM balances
    WHERE blnc_ano <= 2024
) y ON y.blnc_ano = b.blnc_ano
WHERE
    m.macu_codigo IN ('300001', '300002', '300003', '300004')
GROUP BY
    y.blnc_ano

UNION ALL

SELECT
    proyf_periodo AS periodo,
    proyf_monto AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'crecimiento_patrimonio';



vw_creacion_de_valor

CREATE OR REPLACE VIEW fi.vw_creacion_valor AS
SELECT
    m.periodo AS periodo,
    (
        (rp.valor - cp.valor) / cp.valor * prmt.prmt_valor
    ) AS valor
FROM
    fi.vw_rentabilidad_patrimonio rp
JOIN
    fi.vw_crecimiento_patrimonio cp ON rp.periodo = cp.periodo
JOIN
    parametros prmt ON prmt.prmt_codigo = 'RE'
WHERE
    rp.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    proyf_monto AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'creacion_valor';


vw_rentabilidad_de_patrimonio

CREATE OR REPLACE VIEW bd_fi.vw_rentabilidad_patrimonio AS
SELECT
    u.periodo AS periodo,
    ((u.utilidad_neta * r.rotacion_activos) * p.palanca_financiera) AS valor
FROM
    bd_fi.vw_utilidad_neta u
JOIN
    bd_fi.vw_rotacion_activos r ON u.periodo = r.periodo
JOIN
    bd_fi.vw_palanca_financiera p ON u.periodo = p.periodo
WHERE
    u.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    proyf_monto AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'rentabilidad_patrimonio_modelo';


vw_rentabilidad_del_capital

CREATE OR REPLACE VIEW bd_fi.vw_rentabilidad_capital AS
SELECT
    m.periodo AS periodo,
    (
      (
        m.ventas_modelo +
        m.costos_ventas_modelo +
        m.gvv_modelo +
        m.gastos_adm_modelo +
        m.depreciacion_modelo
      )
      /
      NULLIF(
        (
          m.caja_modelo +
          m.cuentas_x_cobrar_modelo +
          m.existencias_modelo +
          m.otros_activos_liquidos_modelo +
          m.activos_imp_corrientes_modelo +
          m.activos_financieros_modelo +
          m.otros_act_fin_no_corrientes_modelo +
          m.activos_fijos_brutos_modelo +
          m.depreciacion_acumulada_modelo
        ), 0
      )
    ) AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    (
        (
            SUM(CASE WHEN proyf_nombre = 'ventas_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'costos_ventas_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'gvv_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'gastos_adm_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'depreciacion_modelo' THEN proyf_monto ELSE 0 END)
        )
        /
        NULLIF(
            (
                SUM(CASE WHEN proyf_nombre = 'caja_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'cuentas_x_cobrar_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'existencias_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'otros_activos_liquidos_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'activos_imp_corrientes_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'activos_financieros_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'otros_act_fin_no_corrientes_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'activos_fijos_brutos_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'depreciacion_acumulada_modelo' THEN proyf_monto ELSE 0 END)
            ), 0
        )
    ) AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('ventas_modelo', 'costos_ventas_modelo', 'gvv_modelo', 'gastos_adm_modelo', 'depreciacion_modelo', 'caja_modelo', 'cuentas_x_cobrar_modelo', 'existencias_modelo', 'otros_activos_liquidos_modelo', 'activos_imp_corrientes_modelo', 'activos_financieros_modelo', 'otros_act_fin_no_corrientes_modelo', 'activos_fijos_brutos_modelo', 'depreciacion_acumulada_modelo')
GROUP BY proyf_periodo;

==rentabilidad del patrimonio

vw_utilidad_neta

CREATE OR REPLACE VIEW bd_fi.vw_utilidad_neta AS
SELECT
    m.periodo AS periodo,
    (m.resultado_despues_impuesto_modelo / NULLIF(m.ventas_modelo, 0)) AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    (
        SUM(CASE WHEN proyf_nombre = 'resultado_despues_impuesto_modelo' THEN proyf_monto ELSE 0 END) /
        NULLIF(SUM(CASE WHEN proyf_nombre = 'ventas_modelo' THEN proyf_monto ELSE 0 END), 0)
    ) AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('resultado_despues_impuesto_modelo', 'ventas_modelo')
GROUP BY proyf_periodo;


vw_rotacion_de_activos

CREATE OR REPLACE VIEW bd_fi.vw_rotacion_activos AS
SELECT
    m.periodo AS periodo,
    (
      (
        m.ventas_modelo
      )
      /
      NULLIF(
        (
          m.caja_modelo +
          m.cuentas_x_cobrar_modelo +
          m.existencias_modelo +
          m.otros_activos_liquidos_modelo +
          m.activos_imp_corrientes_modelo +
          m.activos_financieros_modelo +
          m.otros_act_fin_no_corrientes_modelo +
          m.activos_fijos_brutos_modelo +
          m.depreciacion_acumulada_modelo
        ), 0
      )
    ) AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    (
        SUM(CASE WHEN proyf_nombre = 'ventas_modelo' THEN proyf_monto ELSE 0 END)
        /
        NULLIF(
            (
                SUM(CASE WHEN proyf_nombre = 'caja_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'cuentas_x_cobrar_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'existencias_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'otros_activos_liquidos_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'activos_imp_corrientes_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'activos_financieros_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'otros_act_fin_no_corrientes_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'activos_fijos_brutos_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'depreciacion_acumulada_modelo' THEN proyf_monto ELSE 0 END)
            ), 0
        )
    ) AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('ventas_modelo', 'caja_modelo', 'cuentas_x_cobrar_modelo', 'existencias_modelo', 'otros_activos_liquidos_modelo', 'activos_imp_corrientes_modelo', 'activos_financieros_modelo', 'otros_act_fin_no_corrientes_modelo', 'activos_fijos_brutos_modelo', 'depreciacion_acumulada_modelo')
GROUP BY proyf_periodo;
    
    select * from bd_fi.vw_rotacion_activos;


vw_palanca_financiera

CREATE OR REPLACE VIEW bd_fi.vw_palanca_financiera AS
SELECT
    m.periodo AS periodo,
    (
      (
        m.caja_modelo +
        m.cuentas_x_cobrar_modelo +
        m.existencias_modelo +
        m.otros_activos_liquidos_modelo +
        m.activos_imp_corrientes_modelo +
        m.activos_financieros_modelo +
        m.otros_act_fin_no_corrientes_modelo +
        m.activos_fijos_brutos_modelo +
        m.depreciacion_acumulada_modelo
      )
      /
      NULLIF(
        (
          m.capital_pagado_modelo +
          m.otras_reservas_modelo +
          m.ganancias_acumuladas_modelo +
          m.cuentas_particulares_modelo
        ), 0
      )
    ) AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    (
        (
            SUM(CASE WHEN proyf_nombre = 'caja_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'cuentas_x_cobrar_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'existencias_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'otros_activos_liquidos_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'activos_imp_corrientes_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'activos_financieros_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'otros_act_fin_no_corrientes_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'activos_fijos_brutos_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'depreciacion_acumulada_modelo' THEN proyf_monto ELSE 0 END)
        )
        /
        NULLIF(
            (
                SUM(CASE WHEN proyf_nombre = 'capital_pagado_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'otras_reservas_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'ganancias_acumuladas_modelo' THEN proyf_monto ELSE 0 END) +
                SUM(CASE WHEN proyf_nombre = 'cuentas_particulares_modelo' THEN proyf_monto ELSE 0 END)
            ), 0
        )
    ) AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('caja_modelo', 'cuentas_x_cobrar_modelo', 'existencias_modelo', 'otros_activos_liquidos_modelo', 'activos_imp_corrientes_modelo', 'activos_financieros_modelo', 'otros_act_fin_no_corrientes_modelo', 'activos_fijos_brutos_modelo', 'depreciacion_acumulada_modelo', 'capital_pagado_modelo', 'otras_reservas_modelo', 'ganancias_acumuladas_modelo', 'cuentas_particulares_modelo')
GROUP BY proyf_periodo;

==inversiones

vw_crecimiento_de_ventas

CREATE OR REPLACE VIEW fi.vw_crecimiento_de_ventas AS
SELECT
    y.blnc_ano AS periodo,
    (
        (
            COALESCE(SUM(CASE WHEN m.macu_codigo = '800001' THEN b.blnc_monto ELSE 0 END), 0)
            -
            COALESCE((
                SELECT SUM(b2.blnc_monto)
                FROM balances b2
                JOIN maestro_cuentas m2 ON m2.macu_codigo = b2.macu_codigo
                WHERE b2.blnc_ano = y.blnc_ano - 1
                AND m2.macu_codigo = '800001'
            ), 0)
        )
        /
        NULLIF(
            COALESCE((
                SELECT SUM(b2.blnc_monto)
                FROM balances b2
                JOIN maestro_cuentas m2 ON m2.macu_codigo = b2.macu_codigo
                WHERE b2.blnc_ano = y.blnc_ano - 1
                AND m2.macu_codigo = '800001'
            ), 0),
            0
        )
    ) AS valor
FROM
    balances b
JOIN maestro_cuentas m ON m.macu_codigo = b.macu_codigo
JOIN (
    SELECT DISTINCT blnc_ano
    FROM balances
    WHERE blnc_ano <= 2024
) y ON y.blnc_ano = b.blnc_ano
WHERE
    m.macu_codigo = '800001'
GROUP BY
    y.blnc_ano

UNION ALL

SELECT
    proyf_periodo AS periodo,
    proyf_monto AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'crecimiento_ventas';

vw_inversiones
CREATE OR REPLACE VIEW bd_fi.vw_inversiones AS
SELECT 
    periodo,
    - flujo_caja_inversiones_modelo AS valor
FROM bd_fi.vw_modelo
WHERE periodo <= 2024

UNION ALL

SELECT 
    proyf_periodo AS periodo,
    - proyf_monto AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'flujo_caja_inversiones_modelo';


==flujo de efectivo


vw_fuentes_de_fondo

CREATE OR REPLACE VIEW bd_fi.vw_fuentes_de_fondo AS 
SELECT 
    periodo,
    SUM(valor) AS valor
FROM (
    SELECT 
        periodo,
        valor
    FROM bd_fi.vw_credito
    WHERE periodo <= 2024

    UNION ALL

    SELECT 
        periodo,
        valor
    FROM bd_fi.vw_flujo_operativo
    WHERE periodo <= 2024
) AS combined
GROUP BY periodo

UNION ALL

SELECT 
    proyf_periodo AS periodo,
    proyf_monto AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'fuentes_de_fondo';



vw_caja
CAJA1
CREATE OR REPLACE VIEW bd_fi.vw_caja_1 AS
SELECT
    y.blnc_ano AS periodo,
    COALESCE((
        SELECT SUM(b2.blnc_monto)
        FROM balances b2
        JOIN maestro_cuentas m2 ON m2.macu_codigo = b2.macu_codigo
        WHERE b2.blnc_ano = y.blnc_ano - 1
        AND m2.macu_codigo = '100001'
    ), 0)
    /
    NULLIF((
        SELECT p.prmt_valor
        FROM parametros p
        WHERE p.prmt_codigo = 'UNID_MED'
        LIMIT 1
    ), 0) AS valor
FROM (
    SELECT DISTINCT blnc_ano
    FROM balances
    WHERE blnc_ano <= 2024
) y

UNION ALL

SELECT
    proyf_periodo AS periodo,
    proyf_monto AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'caja_1';

CAJA2
CREATE OR REPLACE VIEW bd_fi.vw_caja2 AS
SELECT 
    periodo,
     caja_modelo AS valor
FROM bd_fi.vw_modelo
WHERE periodo <= 2024

UNION ALL

SELECT 
    proyf_periodo AS periodo,
    proyf_monto AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'caja_modelo';

vw_usos_de_fondo
CREATE OR REPLACE VIEW bd_fi.vw_usos_de_fondo AS 
SELECT 
    periodo,
    SUM(valor) AS valor
FROM (
    SELECT 
        periodo,
        valor
    FROM bd_fi.vw_credito
    WHERE periodo <= 2024

    UNION ALL

    SELECT 
        periodo,
        valor
    FROM bd_fi.vw_flujo_operativo
    WHERE periodo <= 2024

    UNION ALL

    SELECT 
        periodo,
        valor
    FROM bd_fi.vw_caja_periodo
    WHERE periodo <= 2024

    UNION ALL

    SELECT 
        periodo,
        valor
    FROM bd_fi.vw_flujo_inversiones
    WHERE periodo <= 2024
) AS combined
GROUP BY periodo

UNION ALL

SELECT 
    proyf_periodo AS periodo,
    proyf_monto AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'usos_de_fondo';




vw_flujo_operativo

CREATE OR REPLACE VIEW bd_fi.vw_flujo_operativo AS
SELECT 
    periodo,
    (flujo_caja_operativo_modelo - cambio_capital_trabajo_flujo_caja_modelo) / resultado_despues_impuesto_modelo AS valor
FROM bd_fi.vw_modelo
WHERE periodo <= 2024

UNION ALL

SELECT 
    proyf_periodo AS periodo,
    (
        SUM(CASE WHEN proyf_nombre = 'flujo_caja_operativo_modelo' THEN proyf_monto ELSE 0 END) -
        SUM(CASE WHEN proyf_nombre = 'cambio_capital_trabajo_flujo_caja_modelo' THEN proyf_monto ELSE 0 END)
    ) / 
    NULLIF(SUM(CASE WHEN proyf_nombre = 'resultado_despues_impuesto_modelo' THEN proyf_monto ELSE 0 END), 0) AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('flujo_caja_operativo_modelo', 'cambio_capital_trabajo_flujo_caja_modelo', 'resultado_despues_impuesto_modelo')
GROUP BY proyf_periodo;





vw_pago_dividendos
CREATE OR REPLACE VIEW bd_fi.vw_pago_dividendos AS
SELECT
    m.periodo AS periodo,
    (m.pago_dividendos_flujo_caja_modelo / m.resultado_despues_impuesto_modelo) * -1 AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    (
        SUM(CASE WHEN proyf_nombre = 'pago_dividendos_flujo_caja_modelo' THEN proyf_monto ELSE 0 END) /
        NULLIF(SUM(CASE WHEN proyf_nombre = 'resultado_despues_impuesto_modelo' THEN proyf_monto ELSE 0 END), 0)
    ) * -1 AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('pago_dividendos_flujo_caja_modelo', 'resultado_despues_impuesto_modelo')
GROUP BY proyf_periodo;



vw_flujo_inversiones

CREATE OR REPLACE VIEW bd_fi.vw_flujo_inversiones AS
SELECT
    m.periodo AS periodo,
    (m.flujo_caja_inversiones_modelo / m.resultado_despues_impuesto_modelo) * -1 AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    (
        SUM(CASE WHEN proyf_nombre = 'flujo_caja_inversiones_modelo' THEN proyf_monto ELSE 0 END) /
        NULLIF(SUM(CASE WHEN proyf_nombre = 'resultado_despues_impuesto_modelo' THEN proyf_monto ELSE 0 END), 0)
    ) * -1 AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('flujo_caja_inversiones_modelo', 'resultado_despues_impuesto_modelo')
GROUP BY proyf_periodo;
vw_credito



CREATE OR REPLACE VIEW bd_fi.vw_credito AS
SELECT
periodo,
(deuda_corto_plazo_modelo + imptos_x_pagar_modelo + otros_pasivos_corrientes_modelo
+ deuda_largo_plazo_modelo + capital_pagado_modelo + otras_reservas_modelo + pasivos_imp_diferidos_flujo_caja_modelo
+ cuentas_particulares_flujo_caja_modelo) / resultado_despues_impuesto_modelo AS valor
FROM bd_fi.vw_modelo
WHERE periodo <= 2024

UNION ALL

SELECT
proyf_periodo AS periodo,
(
    SUM(CASE WHEN proyf_nombre = 'deuda_corto_plazo_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'imptos_x_pagar_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'otros_pasivos_corrientes_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'deuda_largo_plazo_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'capital_pagado_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'otras_reservas_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'pasivos_imp_diferidos_flujo_caja_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'cuentas_particulares_flujo_caja_modelo' THEN proyf_monto ELSE 0 END)
) / 
NULLIF(SUM(CASE WHEN proyf_nombre = 'resultado_despues_impuesto_modelo' THEN proyf_monto ELSE 0 END), 0) AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('deuda_corto_plazo_modelo', 'imptos_x_pagar_modelo', 'otros_pasivos_corrientes_modelo', 'deuda_largo_plazo_modelo', 'capital_pagado_modelo', 'otras_reservas_modelo', 'pasivos_imp_diferidos_flujo_caja_modelo', 'cuentas_particulares_flujo_caja_modelo', 'resultado_despues_impuesto_modelo')
GROUP BY proyf_periodo;



vw_capital_de_trabajo

CREATE OR REPLACE VIEW bd_fi.vw_capital_de_trabajo AS
SELECT
    m.periodo AS periodo,
    (m.cambio_capital_trabajo_flujo_caja_modelo / m.resultado_despues_impuesto_modelo) * -1 AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    (
        SUM(CASE WHEN proyf_nombre = 'cambio_capital_trabajo_flujo_caja_modelo' THEN proyf_monto ELSE 0 END) /
        NULLIF(SUM(CASE WHEN proyf_nombre = 'resultado_despues_impuesto_modelo' THEN proyf_monto ELSE 0 END), 0)
    ) * -1 AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('cambio_capital_trabajo_flujo_caja_modelo', 'resultado_despues_impuesto_modelo')
GROUP BY proyf_periodo;


vw_caja_periodo

CREATE OR REPLACE VIEW bd_fi.vw_caja_periodo AS
SELECT
    m.periodo AS periodo,
    m.flujo_caja_periodo_modelo / m.resultado_despues_impuesto_modelo AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    SUM(CASE WHEN proyf_nombre = 'flujo_caja_periodo_modelo' THEN proyf_monto ELSE 0 END) /
    NULLIF(SUM(CASE WHEN proyf_nombre = 'resultado_despues_impuesto_modelo' THEN proyf_monto ELSE 0 END), 0) AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('flujo_caja_periodo_modelo', 'resultado_despues_impuesto_modelo')
GROUP BY proyf_periodo;


==riesgo financiero

vw_solvencia

CREATE OR REPLACE VIEW bd_fi.vw_solvencia AS 
SELECT 
    fop.periodo AS periodo,
    CASE 
        WHEN fdf.valor <> 0 THEN fop.valor / fdf.valor 
        ELSE NULL 
    END AS valor
FROM bd_fi.vw_flujo_operativo fop
JOIN bd_fi.vw_fuentes_de_fondo fdf 
    ON fop.periodo = fdf.periodo
WHERE fop.periodo <= 2024
  AND fdf.periodo <= 2024

UNION ALL

SELECT 
    proyf_periodo AS periodo,
    proyf_monto AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'solvencia';












vw_liquidez

CREATE OR REPLACE VIEW bd_fi.vw_liquidez AS
SELECT
    m.periodo AS periodo,
   (m.caja_modelo + m.cuentas_x_cobrar_modelo + m.existencias_modelo + m.otros_activos_liquidos_modelo
+ m.activos_imp_corrientes_modelo) / (m.deuda_corto_plazo_modelo + m.cuentas_x_pagar_modelo + m.imptos_x_pagar_modelo + m.otros_pasivos_corrientes_modelo) AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    (
        SUM(CASE WHEN proyf_nombre = 'caja_modelo' THEN proyf_monto ELSE 0 END) +
        SUM(CASE WHEN proyf_nombre = 'cuentas_x_cobrar_modelo' THEN proyf_monto ELSE 0 END) +
        SUM(CASE WHEN proyf_nombre = 'existencias_modelo' THEN proyf_monto ELSE 0 END) +
        SUM(CASE WHEN proyf_nombre = 'otros_activos_liquidos_modelo' THEN proyf_monto ELSE 0 END) +
        SUM(CASE WHEN proyf_nombre = 'activos_imp_corrientes_modelo' THEN proyf_monto ELSE 0 END)
    ) / 
    NULLIF(
        (
            SUM(CASE WHEN proyf_nombre = 'deuda_corto_plazo_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'cuentas_x_pagar_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'imptos_x_pagar_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'otros_pasivos_corrientes_modelo' THEN proyf_monto ELSE 0 END)
        ), 0
    ) AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('caja_modelo', 'cuentas_x_cobrar_modelo', 'existencias_modelo', 'otros_activos_liquidos_modelo', 'activos_imp_corrientes_modelo', 'deuda_corto_plazo_modelo', 'cuentas_x_pagar_modelo', 'imptos_x_pagar_modelo', 'otros_pasivos_corrientes_modelo')
GROUP BY proyf_periodo;

vw_nivel_de_deuda

CREATE OR REPLACE VIEW bd_fi.vw_nivel_de_deuda AS
SELECT
    m.periodo AS periodo,
   (m.deuda_corto_plazo_modelo + m.deuda_largo_plazo_modelo) /
(m.capital_pagado_modelo + m.otras_reservas_modelo + m.ganancias_acumuladas_modelo + m.cuentas_particulares_modelo)  AS valor

FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    (
        SUM(CASE WHEN proyf_nombre = 'deuda_corto_plazo_modelo' THEN proyf_monto ELSE 0 END) +
        SUM(CASE WHEN proyf_nombre = 'deuda_largo_plazo_modelo' THEN proyf_monto ELSE 0 END)
    ) /
    NULLIF(
        (
            SUM(CASE WHEN proyf_nombre = 'capital_pagado_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'otras_reservas_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'ganancias_acumuladas_modelo' THEN proyf_monto ELSE 0 END) +
            SUM(CASE WHEN proyf_nombre = 'cuentas_particulares_modelo' THEN proyf_monto ELSE 0 END)
        ), 0
    ) AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('deuda_corto_plazo_modelo', 'deuda_largo_plazo_modelo', 'capital_pagado_modelo', 'otras_reservas_modelo', 'ganancias_acumuladas_modelo', 'cuentas_particulares_modelo')
GROUP BY proyf_periodo;



vw_dividendos

CREATE OR REPLACE VIEW bd_fi.vw_dividendos AS
SELECT
    m.periodo AS periodo,
    m.pago_dividendos_flujo_caja_modelo * -1 AS valor
FROM
    bd_fi.vw_modelo m
WHERE
    m.periodo <= 2024

UNION ALL

SELECT
    proyf_periodo AS periodo,
    proyf_monto * -1 AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre = 'pago_dividendos_flujo_caja_modelo';


vw_credito_neto

CREATE OR REPLACE VIEW bd_fi.vw_credito_neto AS
SELECT
periodo,
(deuda_corto_plazo_modelo + imptos_x_pagar_modelo + otros_pasivos_corrientes_modelo
+ deuda_largo_plazo_modelo + capital_pagado_modelo + otras_reservas_modelo + pasivos_imp_diferidos_flujo_caja_modelo
+ cuentas_particulares_flujo_caja_modelo) AS valor
FROM bd_fi.vw_modelo
WHERE periodo <= 2024

UNION ALL

SELECT
proyf_periodo AS periodo,
(
    SUM(CASE WHEN proyf_nombre = 'deuda_corto_plazo_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'imptos_x_pagar_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'otros_pasivos_corrientes_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'deuda_largo_plazo_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'capital_pagado_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'otras_reservas_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'pasivos_imp_diferidos_flujo_caja_modelo' THEN proyf_monto ELSE 0 END) +
    SUM(CASE WHEN proyf_nombre = 'cuentas_particulares_flujo_caja_modelo' THEN proyf_monto ELSE 0 END)
) AS valor
FROM bd_fi.modelo_proyectado
WHERE proyf_periodo >= 2025
AND proyf_nombre IN ('deuda_corto_plazo_modelo', 'imptos_x_pagar_modelo', 'otros_pasivos_corrientes_modelo', 'deuda_largo_plazo_modelo', 'capital_pagado_modelo', 'otras_reservas_modelo', 'pasivos_imp_diferidos_flujo_caja_modelo', 'cuentas_particulares_flujo_caja_modelo')
GROUP BY proyf_periodo;

