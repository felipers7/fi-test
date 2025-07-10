SELECT DISTINCT ortr_id,
    ortr_fecha_ejec
   FROM ( SELECT ot.ortr_id,
            ot.ortr_fecha_ejec,
            cl.clnt_id,
            cd.svcs_id,
            cd.drcc_id,
            em.empl_id,
            ct.ctts_id,
            cdp.cdpr_correlativo,
            cdp.prod_id,
            rank() OVER (PARTITION BY cl.clnt_id, cd.drcc_id, cd.svcs_id, cdp.prod_id ORDER BY ot.ortr_fecha_ejec DESC, ot.ortr_id DESC) AS orden
           FROM dev.ordenes_trabajos ot
             JOIN dev.contratos_detalles cd ON ot.ctdt_id = cd.ctdt_id
             JOIN dev.contratos ct ON cd.ctts_id = ct.ctts_id
             JOIN dev.clientes cl ON ct.clnt_id = cl.clnt_id
             LEFT JOIN dev.empleados em ON ot.empl_id = em.empl_id
             JOIN dev.estados es ON ot.estd_id = es.estd_id
             JOIN dev.contratos_detalles_productos cdp ON cd.ctdt_id = cdp.ctdt_id
          WHERE ot.ortr_fecha_ejec >= (CURRENT_DATE - '3 mons'::interval) AND ot.ortr_fecha_ejec <= CURRENT_DATE  + INTERVAL '1 day' AND (ot.estd_id = ANY (ARRAY[0::bigint, 1::bigint, 3::bigint])) AND ot.ortr_id > 1) lp
  WHERE orden > 1;