# Formula API Examples with Parameters

The `/api/utilidad` endpoint now supports both account codes and parameters in formulas.

## Formula Syntax

### Account Codes (existing functionality)
- Use quotes around numeric codes: `"100000"`, `"200000"`
- These refer to account codes in the `maestro_cuentas` table

### Parameter Codes (new functionality)  
- Use quotes around parameter names with `p_` prefix: `"p_PROY_UTIL"`, `"p_EV_ABR"`
- These refer to parameters in the `parametros` table
- The system removes the `p_` prefix and looks up the parameter by `prmt_codigo`

## Example Formulas

### 1. Account codes only (traditional)
```
utilidad_basica: SUM("100000") - SUM("200000")
```

### 2. Parameters only
```
solo_parametros: "p_PROY_UTIL" * "p_EV_ABR" * 1000
```

### 3. Mixed (accounts + parameters)
```
utilidad_con_parametro: (SUM("100000") - SUM("200000")) * "p_PROY_UTIL"
formula_mixta: SUM("100000") * "p_PROY_UTIL" + SUM("200000") * "p_EV_ABR"
```

## Test URLs

### Test basic formula with accounts
```
GET /api/utilidad?formula=utilidad_basica&startYear=2022&endYear=2029
```

### Test formula with parameters
```
GET /api/utilidad?formula=utilidad_con_parametro&startYear=2022&endYear=2029
```

### Test mixed formula
```
GET /api/utilidad?formula=formula_mixta&startYear=2022&endYear=2029
```

### Test parameters only
```
GET /api/utilidad?formula=solo_parametros&startYear=2022&endYear=2029
```

## Parameter Handling

- Parameters can be year-specific (with `prmt_ano`) or generic (`prmt_ano = NULL`)
- Year-specific parameters take priority over generic ones
- If a parameter is not found, the system uses a default value of 1
- Parameters are replaced in the formula before mathematical evaluation

## Database Tables

### `parametros` table structure:
```sql
prmt_codigo VARCHAR(255) -- Parameter code (e.g., "PROY_UTIL", "EV_ABR")
prmt_desc TEXT          -- Description
prmt_valor DECIMAL      -- Parameter value
prmt_ano INT            -- Year (optional, NULL for generic)
```

### Example parameter data:
```sql
('PROY_UTIL', 'proyeccion utilidad 2025', 0.8, 2025)
('PROY_UTIL', 'proyeccion utilidad 2026', 0.85, 2026)
('EV_ABR', 'estacionalidad ventas', 0.1, NULL)
``` 