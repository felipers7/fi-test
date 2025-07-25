-- CREATE TABLE statement for fi.parametros
-- Based on data structure from parametrosv2.csv
-- Example row: 10000,'DIAS_DEL_PERIODO','días del periodo',365.000,NULL

CREATE TABLE fi.parametros (
    prmt_id INTEGER NOT NULL,
    prmt_codigo VARCHAR(50) NOT NULL,
    prmt_desc VARCHAR(255),
    prmt_valor DECIMAL(10,3) NOT NULL,
    prmt_ano INTEGER,
    
    CONSTRAINT pk_parametros PRIMARY KEY (prmt_id)
);

-- Optional: Add comments to document the table structure
COMMENT ON TABLE fi.parametros IS 'Tabla de parámetros financieros del sistema';
COMMENT ON COLUMN fi.parametros.prmt_id IS 'Identificador único del parámetro';
COMMENT ON COLUMN fi.parametros.prmt_codigo IS 'Código del parámetro';
COMMENT ON COLUMN fi.parametros.prmt_desc IS 'Descripción del parámetro';
COMMENT ON COLUMN fi.parametros.prmt_valor IS 'Valor numérico del parámetro';
COMMENT ON COLUMN fi.parametros.prmt_ano IS 'Año de aplicación del parámetro (NULL si aplica a todos los años)'; 