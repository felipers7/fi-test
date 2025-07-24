CREATE OR REPLACE VIEW bd_fi.vw_modelo as
select drvd.periodo                                                       				       as periodo
-- totales
 
      ,((ventas_modelo + costos_ventas_modelo
		+ gvv_modelo + gastos_adm_modelo + depreciacion_modelo)
        - depreciacion_modelo)/UNIMED.prmt_valor												as EBITDA_modelo
		
        ,(ventas_modelo + costos_ventas_modelo + gvv_modelo
		+ gastos_adm_modelo + depreciacion_modelo
        + ingreso_egreso_no_op_modelo 
        + intereses_modelo + impuestos_modelo)/UNIMED.prmt_valor								as resultado_despues_impuesto_modelo

-- datos modelo estado de resultados
      ,ventas_modelo/UNIMED.prmt_valor															as ventas_modelo
      ,costos_ventas_modelo/UNIMED.prmt_valor													as costos_ventas_modelo
      ,gvv_modelo/UNIMED.prmt_valor														     	as gvv_modelo
      ,gastos_adm_modelo/UNIMED.prmt_valor														as gastos_adm_modelo
	  ,depreciacion_modelo/UNIMED.prmt_valor													as depreciacion_modelo
      ,ingreso_egreso_no_op_modelo/UNIMED.prmt_valor											as ingreso_egreso_no_op_modelo	
      ,intereses_modelo/UNIMED.prmt_valor														as intereses_modelo
      ,impuestos_modelo/UNIMED.prmt_valor														as impuestos_modelo
-- datos modelo balance activos corrientes
	  ,caja_modelo/UNIMED.prmt_valor															as caja_modelo
      ,cuentas_x_cobrar_modelo/UNIMED.prmt_valor												as cuentas_x_cobrar_modelo
      ,existencias_modelo/UNIMED.prmt_valor														as existencias_modelo
      ,otros_activos_liquidos_modelo/UNIMED.prmt_valor											as otros_activos_liquidos_modelo
      ,activos_imp_corrientes_modelo/UNIMED.prmt_valor											as activos_imp_corrientes_modelo
-- datos modelo balance activos no corrientes	
	  ,activos_financieros_modelo/UNIMED.prmt_valor												as activos_financieros_modelo
      ,otros_act_fin_no_corrientes_modelo/UNIMED.prmt_valor										as otros_act_fin_no_corrientes_modelo
      ,(propiedades_y_equipos_balance -
       ((case 
				when drvd.periodo -1 THEN DEPFINAL.dep_final 
				end) + depreciacion_modelo 
		- (case 
				when drvd.periodo -1 THEN depreciacion_modelo 
				end)))/UNIMED.prmt_valor														as activos_fijos_brutos_modelo
      ,((case 
				when drvd.periodo -1 THEN DEPFINAL.dep_final 
				end) + depreciacion_modelo 
		- (case 
				when drvd.periodo -1 THEN depreciacion_modelo 
				end))/UNIMED.prmt_valor															as depreciacion_acumulada_modelo									-- Depreciacion acumulada
	,case 
				when drvd.periodo -1 THEN depreciacion_modelo 
				end																				as depmodelo2023

-- datos modelo balance pasivos corrientes
      ,deuda_corto_plazo_modelo/UNIMED.prmt_valor												as deuda_corto_plazo_modelo
      ,cuentas_x_pagar_modelo/UNIMED.prmt_valor													as cuentas_x_pagar_modelo
      ,imptos_x_pagar_modelo/UNIMED.prmt_valor													as imptos_x_pagar_modelo
      ,otros_pasivos_corrientes_modelo/UNIMED.prmt_valor										as otros_pasivos_corrientes_modelo

-- datos modelo balance pasivos no corrientes
	  ,deuda_largo_plazo_modelo/UNIMED.prmt_valor												as deuda_largo_plazo_modelo
      ,otros_pasivos_largo_plazo_modelo/UNIMED.prmt_valor 										as otros_pasivos_largo_plazo_modelo
      ,pasivos_imp_diferidos_modelo/UNIMED.prmt_valor 											as pasivos_imp_diferidos_modelo
      
-- datos modelo balance patrimonio
	  ,capital_pagado_modelo/UNIMED.prmt_valor 													as capital_pagado_modelo
      ,otras_reservas_modelo/UNIMED.prmt_valor 													as otras_reservas_modelo
      ,ganancias_acumuladas_modelo/UNIMED.prmt_valor 											as ganancias_acumuladas_modelo
      ,cuentas_particulares_modelo/UNIMED.prmt_valor 											as cuentas_particulares_modelo

--  datos modelo estado de flujo de efectivo
	  ,ventas_modelo/UNIMED.prmt_valor			                                                as ventas_flujo_caja_modelo
      ,costos_ventas_modelo/UNIMED.prmt_valor	                                                as costos_ventas_flujo_caja_modelo
--    ,capital_trabajo_modelo/UNIMED.prmt_valor 												as capital_trabajo_flujo_caja_modelo
      ,pago_gastos_variables_venta_modelo/UNIMED.prmt_valor 									as pago_gastos_variables_venta_flujo_caja_modelo
	  ,gastos_adm_modelo/UNIMED.prmt_valor														as pago_gastos_administracion_flujo_caja_modelo
      ,pago_intereses_modelo/UNIMED.prmt_valor 													as pago_intereses_flujo_caja_modelo
      ,-(LAG(drvd.imptos_x_pagar_modelo, 1) OVER (ORDER BY drvd.periodo) 
      - impuestos_modelo - imptos_x_pagar_modelo)/UNIMED.prmt_valor								as pago_impuestos_flujo_caja_modelo 													
      ,depreciacion_flujo_modelo/UNIMED.prmt_valor 												as depreciacion_flujo_caja_modelo

-- datos modelo flujo de caja inversiones , estado de flujo de efectivo
	  ,ingreso_egreso_no_op_modelo/UNIMED.prmt_valor											as ingreso_egreso_no_op_flujo_caja_modelo
	 ,- (activos_financieros_modelo - 
		LAG(drvd.activos_financieros_modelo, 1) OVER (ORDER BY drvd.periodo)
		) / UNIMED.prmt_valor																	AS activos_financieros_flujo_caja_modelo
	 ,-(otros_act_fin_no_corrientes_modelo - 
        LAG(drvd.otros_act_fin_no_corrientes_modelo, 1) OVER (ORDER BY drvd.periodo)
        )/UNIMED.prmt_valor                                                                     as otros_activos_no_corrientes_flujo_caja_modelo
	/* ,(propiedades_y_equipos_balance -
       ((case 
				when drvd.periodo -1 THEN DEPFINAL.dep_final 
				end) + depreciacion_modelo 
		- (case 
				when drvd.periodo -1 THEN depreciacion_modelo 
				end))) + 
		((case 
				when drvd.periodo -1 THEN DEPFINAL.dep_final 
				end) + depreciacion_modelo 
		- (case 
				when drvd.periodo -1 THEN depreciacion_modelo 
				end))   */  --  ACTIVOS FIJOS FLUJO CAJA
                
-- datos modelo flujo de caja financiamiento  , estado de flujo de efectivo
      ,(deuda_corto_plazo_modelo - 
        LAG(drvd.deuda_corto_plazo_modelo, 1) OVER (ORDER BY drvd.periodo)
        )/UNIMED.prmt_valor                                                                        as deuda_corto_plazo_flujo_caja_modelo
    --  ,impuestos_pagar_financ_modelo/UNIMED.prmt_valor                                             as impuestos_pagar_flujo_caja_modelo
      ,(otros_pasivos_largo_plazo_modelo - 
        LAG(drvd.otros_pasivos_largo_plazo_modelo, 1) OVER (ORDER BY drvd.periodo)
        )/UNIMED.prmt_valor                                                                        as otros_pasivos_largo_plazo_flujo_caja_modelo
      ,(deuda_largo_plazo_modelo - 
        LAG(drvd.deuda_largo_plazo_modelo, 1) OVER (ORDER BY drvd.periodo)
        )/UNIMED.prmt_valor                                                                        as deuda_largo_plazo_flujo_caja_modelo
      ,(capital_pagado_modelo - 
        LAG(drvd.capital_pagado_modelo, 1) OVER (ORDER BY drvd.periodo)
        )/UNIMED.prmt_valor                                                                        as capital_pagado_flujo_caja_modelo
      ,(otras_reservas_modelo - 
        LAG(drvd.otras_reservas_modelo, 1) OVER (ORDER BY drvd.periodo)
        )/UNIMED.prmt_valor                                                                        as otras_reservas_flujo_caja_modelo
      ,(pasivos_imp_diferidos_modelo - 
        LAG(drvd.pasivos_imp_diferidos_modelo, 1) OVER (ORDER BY drvd.periodo)
        )/UNIMED.prmt_valor                                                                        as pasivos_imp_diferidos_flujo_caja_modelo
      ,(cuentas_particulares_modelo - 
        LAG(drvd.cuentas_particulares_modelo, 1) OVER (ORDER BY drvd.periodo)
        )/UNIMED.prmt_valor                                                                        as cuentas_particulares_flujo_caja_modelo
	-- 
      ,(ganancias_acumuladas_modelo - 
       (LAG(drvd.ganancias_acumuladas_modelo, 1) OVER (ORDER BY drvd.periodo))
        -
	   (ventas_modelo + costos_ventas_modelo + gvv_modelo
		+ gastos_adm_modelo + depreciacion_modelo
        + ingreso_egreso_no_op_modelo 
        + intereses_modelo + impuestos_modelo))/UNIMED.prmt_valor 								as pago_dividendos_flujo_caja_modelo -- 
	
	  , ((ventas_modelo + costos_ventas_modelo + capital_trabajo_modelo + pago_gastos_variables_venta_modelo 
      + gastos_adm_modelo + pago_intereses_modelo + (-(LAG(drvd.imptos_x_pagar_modelo, 1) OVER (ORDER BY drvd.periodo) 
      - impuestos_modelo - imptos_x_pagar_modelo)) + depreciacion_flujo_modelo)
      /UNIMED.prmt_valor)
																								as flujo_caja_operativo_modelo


      , ((ingreso_egreso_no_op_modelo + (- (activos_financieros_modelo - 
		LAG(drvd.activos_financieros_modelo, 1) OVER (ORDER BY drvd.periodo)
		)) + otros_activos_no_corrientes_inv_modelo 
      + activos_fijos_inv_modelo)
      /UNIMED.prmt_valor)
																								as flujo_caja_inversiones_modelo

      , ((deuda_corto_plazo_financ_modelo + impuestos_pagar_financ_modelo + otros_pasivos_largo_plazo_financ_modelo 
      + deuda_largo_plazo_financ_modelo + capital_pagado_financ_modelo + otras_reservas_financ_modelo 
      + pasivos_imp_diferidos_financ_modelo + cuentas_particulares_financ_modelo + pago_dividendos_financ_modelo)
      /UNIMED.prmt_valor)
																								as flujo_caja_financiamiento_modelo


    , (((ventas_modelo + costos_ventas_modelo + capital_trabajo_modelo + pago_gastos_variables_venta_modelo 
        + gastos_adm_modelo + pago_intereses_modelo + pago_impuestos_modelo + depreciacion_flujo_modelo)
        /UNIMED.prmt_valor) + ((ingresos_no_operacional_inv_modelo + activos_financieros_inv_modelo + otros_activos_no_corrientes_inv_modelo 
        + activos_fijos_inv_modelo)
        /UNIMED.prmt_valor) + ((deuda_corto_plazo_financ_modelo + impuestos_pagar_financ_modelo + otros_pasivos_largo_plazo_financ_modelo 
        + deuda_largo_plazo_financ_modelo + capital_pagado_financ_modelo + otras_reservas_financ_modelo 
        + pasivos_imp_diferidos_financ_modelo + cuentas_particulares_financ_modelo + pago_dividendos_financ_modelo)
        /UNIMED.prmt_valor))
																								as flujo_caja_periodo_modelo	
  
  -- datos modelo capital de trabajo
	--
      ,cuentas_x_cobrar_modelo/UNIMED.prmt_valor 												as cuentas_x_cobrar_capital_trabajo
      ,existencias_modelo/UNIMED.prmt_valor 													as existencias_capital_trabajo
      ,otros_activos_liquidos_modelo/UNIMED.prmt_valor											as otros_activos_liquidos_capital_trabajo
      ,activos_imp_corrientes_modelo/UNIMED.prmt_valor											as activos_imp_corrientes_capital_trabajo
	-- 
      ,cuentas_x_pagar_modelo/UNIMED.prmt_valor													as cuentas_x_pagar_capital_trabajo
      ,otros_pasivos_corrientes_modelo/UNIMED.prmt_valor										as otros_pasivos_corrientes_capital_trabajo
	 --
      ,((cuentas_x_cobrar_modelo + existencias_modelo
		+ otros_activos_liquidos_modelo + 
        activos_imp_corrientes_modelo)
       - (cuentas_x_pagar_modelo +
          otros_pasivos_corrientes_modelo))/UNIMED.prmt_valor							as capital_de_trabajo
		,(
		 (	(LAG(drvd.cuentas_x_cobrar_modelo, 1) OVER (ORDER BY drvd.periodo) )
			+ (LAG(drvd.existencias_modelo, 1) OVER (ORDER BY drvd.periodo) )
			+ (LAG(drvd.otros_activos_liquidos_modelo, 1) OVER (ORDER BY drvd.periodo) )
			+ (LAG(drvd.activos_imp_corrientes_modelo, 1) OVER (ORDER BY drvd.periodo) ) )
			- (
				(LAG(drvd.cuentas_x_pagar_modelo, 1) OVER (ORDER BY drvd.periodo)) 
				+ (LAG(drvd.otros_pasivos_corrientes_modelo, 1) OVER (ORDER BY drvd.periodo)  ))
				 -
          ((cuentas_x_cobrar_modelo + existencias_modelo
				+ otros_activos_liquidos_modelo 
                + activos_imp_corrientes_modelo)
				- (cuentas_x_pagar_modelo 
				   +  otros_pasivos_corrientes_modelo)))/UNIMED.prmt_valor				as capital_trabajo_flujo_caja_modelo									-- cambios en el capital de trabajo
	   

from   (select bal.blnc_ano                                                                                                    as periodo
		-- totales
    
		-- -- datos modelo estado de resultados
              ,sum(case when bal.macu_codigo = '800001'                  							  then bal.blnc_monto else 0 end)      as ventas_modelo							-- ventas modelo
              ,sum(case when bal.macu_codigo in ('800002','700001')               					  then bal.blnc_monto else 0 end)      as costos_ventas_modelo					-- costos de ventas (INC. DEP.)										     
			  ,sum(case when bal.macu_codigo = '600001'                  							  then bal.blnc_monto else 0 end)      as gvv_modelo							-- gvv
			  ,sum(case when bal.macu_codigo in ('600002','600003')               					  then bal.blnc_monto else 0 end)      as gastos_adm_modelo						-- GASTOS DE ADMINISTRACIÓN Y VENTAS (INC. DEP.) 
			  ,(sum(case when bal.macu_codigo in ('700001','600003')               					  then bal.blnc_monto else 0 end))* -1 as depreciacion_modelo				    -- depreciación   
			  ,sum(case when bal.macu_codigo in ('400001','500001','400002','500003',500004,400003)   then bal.blnc_monto else 0 end)      as ingreso_egreso_no_op_modelo			-- ingreso/egreso no operacional
              ,sum(case when bal.macu_codigo = '500002'                  							  then bal.blnc_monto else 0 end)      as intereses_modelo						-- intereses modelo
              ,sum(case when bal.macu_codigo = '500005'                  							  then bal.blnc_monto else 0 end)      as impuestos_modelo	
		
        -- datos modelo balance activos corrientes
			  ,sum(case when bal.macu_codigo = '100001'                  							  then bal.blnc_monto else 0 end)      as caja_modelo							-- caja modelo balance
			  ,sum(case when bal.macu_codigo in ('100003','100007',100005)                   		  then bal.blnc_monto else 0 end)      as cuentas_x_cobrar_modelo				-- cuentas x cobrar modelo balance
              ,sum(case when bal.macu_codigo = '100011'                  							  then bal.blnc_monto else 0 end)      as existencias_modelo					-- existencias modelo balance
              ,sum(case when bal.macu_codigo = '100009'                  							  then bal.blnc_monto else 0 end)      as otros_activos_liquidos_modelo			-- otros activos liquidos modelo balance
              ,sum(case when bal.macu_codigo = '100012'                  							  then bal.blnc_monto else 0 end)      as activos_imp_corrientes_modelo			-- activos por impuestos corrientes modelo balance
		
        -- datos modelo balance activos no corrientes
			  ,sum(case when bal.macu_codigo = '100013'                  							  then bal.blnc_monto else 0 end)      as activos_financieros_modelo			-- ACTIVOS FINANCIEROS (+/-) modelo
			  ,sum(case when bal.macu_codigo In (100016,100017,100018,100019,100014)                  then bal.blnc_monto else 0 end)      as otros_act_fin_no_corrientes_modelo    -- OTROS ACTIVOS NO CORRIENTES modelo
              ,sum(case when bal.macu_codigo = '100015'                  							  then bal.blnc_monto else 0 end)      as propiedades_y_equipos_balance         -- propiedades, plantas y equipos parate del calculo de ACTIVOS FIJOS BRUTO (+/-) modelo
           --   , -- depreciación acumulada modelo
        
        -- datos modelo balance pasivos corrientes
              ,sum(case when bal.macu_codigo = '200001'                                               then bal.blnc_monto else 0 end)      as deuda_corto_plazo_modelo              -- deuda de corto plazo modelo balance
              ,sum(case when bal.macu_codigo in ('200002','200003')                                   then bal.blnc_monto else 0 end)      as cuentas_x_pagar_modelo                    -- cuentas x pagar modelo balance
              ,sum(case when bal.macu_codigo = '200004'                                               then bal.blnc_monto else 0 end)      as imptos_x_pagar_modelo                 -- impuestos x pagar modelo balance
              ,sum(case when bal.macu_codigo in ('200005','200006')                                   then bal.blnc_monto else 0 end)      as otros_pasivos_corrientes_modelo       -- otros pasivos corrientes modelo balance
		
        -- datos modelo balance pasivos no corrientes
              ,sum(case when bal.macu_codigo = '200007'                                               then bal.blnc_monto else 0 end)      as deuda_largo_plazo_modelo              -- deuda de largo plazo modelo balance
              ,sum(case when bal.macu_codigo = '200008'                                               then bal.blnc_monto else 0 end)      as otros_pasivos_largo_plazo_modelo      -- otros pasivos largo plazo modelo balance
              ,sum(case when bal.macu_codigo = '200009'                                               then bal.blnc_monto else 0 end)      as pasivos_imp_diferidos_modelo          -- pasivos por impuestos diferidos modelo balance
		
        -- datos modelo balance patrimonio
              ,sum(case when bal.macu_codigo = '300001'                                               then bal.blnc_monto else 0 end)      as capital_pagado_modelo                 -- capital pagado modelo balance
              ,sum(case when bal.macu_codigo = '300002'                                               then bal.blnc_monto else 0 end)      as otras_reservas_modelo                 -- otras reservas modelo balance
              ,sum(case when bal.macu_codigo = '300003'                                               then bal.blnc_monto else 0 end)      as ganancias_acumuladas_modelo           -- ganancias acumuladas modelo balance
              ,sum(case when bal.macu_codigo = '300004'                                               then bal.blnc_monto else 0 end)      as cuentas_particulares_modelo           -- cuentas particulares modelo balance
        
         -- datos modelo flujo de caja operativo , estado de flujo de efectivo
              ,sum(case when bal.macu_codigo in ('100005','100011','100009','100012')              then bal.blnc_monto else 0 end) - 
               sum(case when bal.macu_codigo in ('200002','200003','200005','200006')              then bal.blnc_monto else 0 end)         as capital_trabajo_modelo                   -- capital de trabajo modelo (activos corrientes - pasivos corrientes sin caja ni deuda corto plazo)
              ,sum(case when bal.macu_codigo = '600001'                                               then bal.blnc_monto else 0 end)      as pago_gastos_variables_venta_modelo        -- pago gastos variables de venta modelo

              ,sum(case when bal.macu_codigo = '500002'                                               then bal.blnc_monto else 0 end)      as pago_intereses_modelo                 -- pago de intereses modelo
              ,(sum(case when bal.macu_codigo in ('700001','600003')                                  then bal.blnc_monto else 0 end))* -1 as depreciacion_flujo_modelo             -- depreciación flujo de caja modelo
            --  ,sum(case when bal.macu_codigo = '100016'                                               then bal.blnc_monto else 0 end)      as cuentas_particulares_modelo 
        
       
        
        
        
        from   bd_fi.balances bal

			
        group by bal.blnc_ano) drvd

left join (select prmt_valor,prmt_ano,anos as ano_tributario from bd_fi.vw_parametros where prmt_codigo='UNID_MED' ) UNIMED on drvd.periodo  =UNIMED.ano_tributario 
left join (select periodo,dep_final from bd_fi.vw_depreciacion_final) DEPFINAL on drvd.periodo  = DEPFINAL.periodo
;

