import { useState, useCallback, useMemo, useEffect } from 'react';
import svgPaths from "../imports/svg-tlrzm2wqv9";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onParameterChange: (section: string, parameter: string, value: string | number) => void;
  onDataReload?: () => void; // NEW: Callback to trigger data reload
  selectedYears: string[];
  isDarkMode?: boolean;
  globalParameters?: any;
  projectionFormulas?: { [formulaType: string]: string };
  isLoadingGlobalParametros?: boolean;
  isLoadingFormulas?: boolean;
}

interface EditableFieldProps {
  value: string | number;
  onChange: (value: string) => void;
  type?: 'text' | 'number' | 'percentage';
  placeholder?: string;
  isDarkMode?: boolean;
}

const EditableField: React.FC<EditableFieldProps> = ({
  value,
  onChange,
  type = 'text',
  placeholder = '',
  isDarkMode = false
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(() => {
    // For percentage type, convert decimal to percentage for display
    if (type === 'percentage') {
      const numValue = typeof value === 'number' ? value : parseFloat(value.toString()) || 0;
      return (numValue * 100).toString();
    }
    return value.toString();
  });

  // Sync tempValue with value prop when it changes from parent
  useEffect(() => {
    if (!isEditing) {
      if (type === 'percentage') {
        const numValue = typeof value === 'number' ? value : parseFloat(value.toString()) || 0;
        setTempValue((numValue * 100).toString());
      } else {
        setTempValue(value.toString());
      }
    }
  }, [value, isEditing, type]);

  const handleSubmit = () => {
    let finalValue = tempValue;

    // For percentage type, convert percentage back to decimal
    if (type === 'percentage') {
      const percentValue = parseFloat(tempValue) || 0;
      finalValue = (percentValue / 100).toString();
    }

    onChange(finalValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    } else if (e.key === 'Escape') {
      // Reset to original value with proper conversion for percentage
      if (type === 'percentage') {
        const numValue = typeof value === 'number' ? value : parseFloat(value.toString()) || 0;
        setTempValue((numValue * 100).toString());
      } else {
        setTempValue(value.toString());
      }
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <input
        type={type === 'number' || type === 'percentage' ? 'number' : 'text'}
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        onBlur={handleSubmit}
        onKeyDown={handleKeyDown}
        className={`border rounded-lg h-10 px-3 py-2 text-sm w-20 focus:outline-none focus:ring-2 focus:ring-opacity-50 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:m-0 [&[type=number]]:[-moz-appearance:textfield] ${isDarkMode
          ? 'bg-neutral-800 border-[#3ABE76] text-[#3ABE76] focus:ring-[#3ABE76]'
          : 'bg-neutral-50 border-[#1a6e31] text-[#1a6e31] focus:ring-[#1a6e31]'
          }`}
        placeholder={placeholder}
        autoFocus
      />
    );
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className={`border rounded-lg h-10 px-3 py-2 cursor-pointer hover:opacity-80 flex items-center justify-center transition-all min-w-[80px] ${isDarkMode
        ? 'bg-neutral-800 border-[#3ABE76]'
        : 'bg-neutral-50 border-[#1a6e31] hover:bg-gray-50'
        }`}
    >
      <span className={`text-sm font-medium ${isDarkMode ? 'text-[#3ABE76]' : 'text-[#1a6e31]'}`}>
        {type === 'percentage'
          ? `${(typeof value === 'number' ? value : parseFloat(value.toString()) || 0) * 100}%`
          : Math.round(typeof value === 'number' ? value : parseFloat(value.toString()) || 0)
        }
      </span>
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onToggle,
  onParameterChange,
  onDataReload, // NEW: Data reload callback
  selectedYears,
  isDarkMode = false,
  globalParameters,
  projectionFormulas = {},
  isLoadingGlobalParametros = false,
  isLoadingFormulas = false
}) => {
  // Estados para las secciones colapsables
  const [sectionStates, setSectionStates] = useState({
    crecimientosVenta: false,
    creditoNeto: false,
    dividendos: false,
    utilidad: false,
    inversiones: false,
    vidaUtilActivos: false,
    factoresFinancieros: false,
    operacionales: false,
    tasasFinancieras: false,
    margenesFinancieros: false,
    balanceGeneral: false,
    categoriaGastos: false,
    estacionalidadMensual: false,
    valorizacion: false,
    costosDeVenta: false,
    gastosDeVenta: false,
    otros: false
  });

  // NEW: State for 2024 established values from database views
  const [establishedValues2024, setEstablishedValues2024] = useState({
    crecimientoDeVentas: 0,
    inversiones: 0,
    dividendos: 0,
    creditoNeto: 0,
    utilidad: 0
  });

  const [isLoadingEstablishedValues, setIsLoadingEstablishedValues] = useState(true);

  // NEW: Function to fetch 2024 established values from parametros endpoint
  const fetchEstablishedValues2024 = useCallback(async () => {
    try {
      setIsLoadingEstablishedValues(true);

      // Fetch parametros data (same endpoint as globalParameters)
      const response = await fetch('/api/parametros');

      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data && result.data.parametros) {
          const allParams = result.data.parametros;

          // Initialize 2024 values
          const newEstablishedValues = {
            crecimientoDeVentas: 0,
            inversiones: 0,
            dividendos: 0,
            creditoNeto: 0,
            utilidad: 0
          };

          // Look for 2024 established values in parametros
          allParams.forEach((param: any) => {
            const { prmt_codigo, prmt_valor, prmt_ano } = param;

            // Look for 2024 values for each projection type
            if (prmt_ano === 2024) {
              if (prmt_codigo === 'PROY_CRECIMIENTO') {
                newEstablishedValues.crecimientoDeVentas = prmt_valor;
              } else if (prmt_codigo === 'PROY_INVERSION') {
                newEstablishedValues.inversiones = prmt_valor;
              } else if (prmt_codigo === 'PROY_DIVIDENDOS') {
                newEstablishedValues.dividendos = prmt_valor;
              } else if (prmt_codigo === 'PROY_CREDITO_NETO') {
                newEstablishedValues.creditoNeto = prmt_valor;
              } else if (prmt_codigo === 'PROY_UTIL') {
                newEstablishedValues.utilidad = prmt_valor;
              }
            }
          });

          setEstablishedValues2024(newEstablishedValues);
          console.log('Loaded 2024 established values from parametros:', newEstablishedValues);
        } else {
          console.warn('Parametros API returned unsuccessful response for 2024 values:', result);
        }
      } else {
        console.warn(`Parametros API request failed with status ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Failed to fetch 2024 established values from parametros:', error);
    } finally {
      setIsLoadingEstablishedValues(false);
    }
  }, []);

  // Load 2024 established values on component mount
  useEffect(() => {
    if (isOpen) {
      fetchEstablishedValues2024();
    }
  }, [isOpen, fetchEstablishedValues2024]);

  // Note: All parameters are now loaded from globalParameters prop (from database)
  // Local parameter state is no longer needed as everything comes from the API

  // COMPUTED: Get projection fields based on selected years
  const getProjectionFields = useMemo(() => {
    const futureYears = selectedYears.filter(year => parseInt(year) >= 2025).sort();
    return futureYears.slice(0, 3); // Maximum 3 projection fields
  }, [selectedYears]);

  // COMPUTED: Get projection fields for COSTOS DE VENTA (includes 2024)
  const getCostosDeVentaProjectionFields = useMemo(() => {
    const futureYears = selectedYears.filter(year => parseInt(year) >= 2024).sort();
    return futureYears.slice(0, 4); // Maximum 4 projection fields (2024-2027)
  }, [selectedYears]);

  const toggleSection = (section: keyof typeof sectionStates) => {
    setSectionStates(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Function to update parameter in database
  const updateParameterInDB = useCallback(async (prmt_codigo: string, prmt_ano: number | null, prmt_valor: number) => {
    try {
      const body: any = {
        prmt_codigo,
        prmt_valor
      };

      // Only include prmt_ano if it's not null
      if (prmt_ano !== null) {
        body.prmt_ano = prmt_ano;
      }

      const response = await fetch('/api/parametros', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        throw new Error(`Failed to update parameter: ${response.statusText}`);
      }

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || 'Failed to update parameter');
      }

      console.log('Parameter updated in database:', { prmt_codigo, prmt_ano, prmt_valor });
      return true;
    } catch (error) {
      console.error('Failed to update parameter in database:', error);
      return false;
    }
  }, []);

  const handleParameterChange = useCallback(async (section: string, parameter: string, value: string) => {
    console.log(`Sidebar parameter change: ${section}.${parameter} = ${value}`);

    // Parse the value - percentage conversions are handled in EditableField component
    const numValue = parseFloat(value) || 0;



    // NEW: Update parameter in database for inversiones
    if (section === 'inversiones' && parameter.includes('proy')) {
      const year = parameter.replace('proy', '');

      // Update database for persistence
      const success = await updateParameterInDB('PROY_INVERSION', parseInt(year), numValue);
      if (success) {
        console.log('PROY_INVERSION parameter updated successfully, triggering data reload...');

        // Trigger data reload in parent component
        if (onDataReload) {
          onDataReload();
        }
      } else {
        console.error('Failed to persist PROY_INVERSION parameter change to database');
        // Could show user notification here
      }
    }

    // NEW: Update parameter in database for crecimiento de ventas
    if (section === 'crecimientosVenta' && parameter.includes('proy')) {
      const year = parameter.replace('proy', '');

      // Update database for persistence
      const success = await updateParameterInDB('PROY_CRECIMIENTO', parseInt(year), numValue);
      if (success) {
        console.log('PROY_CRECIMIENTO parameter updated successfully, triggering data reload...');

        // Trigger data reload in parent component
        if (onDataReload) {
          onDataReload();
        }
      } else {
        console.error('Failed to persist PROY_CRECIMIENTO parameter change to database');
        // Could show user notification here
      }
    }

    // NEW: Update parameter in database for credito neto
    if (section === 'creditoNeto' && parameter.includes('proy')) {
      const year = parameter.replace('proy', '');

      // Update database for persistence
      const success = await updateParameterInDB('PROY_CREDITO_NETO', parseInt(year), numValue);
      if (success) {
        console.log('PROY_CREDITO_NETO parameter updated successfully, triggering data reload...');

        // Trigger data reload in parent component
        if (onDataReload) {
          onDataReload();
        }
      } else {
        console.error('Failed to persist PROY_CREDITO_NETO parameter change to database');
        // Could show user notification here
      }
    }

    // NEW: Update parameter in database for dividendos
    if (section === 'dividendos' && parameter.includes('proy')) {
      const year = parameter.replace('proy', '');

      // Update database for persistence
      const success = await updateParameterInDB('PROY_DIVIDENDOS', parseInt(year), numValue);
      if (success) {
        console.log('PROY_DIVIDENDOS parameter updated successfully, triggering data reload...');

        // Trigger data reload in parent component
        if (onDataReload) {
          onDataReload();
        }
      } else {
        console.error('Failed to persist PROY_DIVIDENDOS parameter change to database');
        // Could show user notification here
      }
    }

    // NEW: Update parameter in database for utilidad
    if (section === 'utilidad' && parameter.includes('proy')) {
      const year = parameter.replace('proy', '');

      // Update database for persistence
      const success = await updateParameterInDB('PROY_UTIL', parseInt(year), numValue);
      if (success) {
        console.log('PROY_UTIL parameter updated successfully, triggering data reload...');

        // Trigger data reload in parent component
        if (onDataReload) {
          onDataReload();
        }
      } else {
        console.error('Failed to persist PROY_UTIL parameter change to database');
        // Could show user notification here
      }
    }

    // NEW: Handle yearly financial parameters (format: "paramCode_proy2025")
    if (parameter.includes('_proy')) {
      const [paramCode, yearPart] = parameter.split('_proy');
      const year = parseInt(yearPart);
      console.log(`[${section}] Updating yearly parameter: ${paramCode} (${year}) = ${numValue}`);

      const success = await updateParameterInDB(paramCode, year, numValue);
      if (success) {
        console.log(`✅ [${section}] ${paramCode} parameter updated successfully for year ${year}, triggering data reload...`);
        if (onDataReload) {
          onDataReload();
        }
      } else {
        console.error(`❌ [${section}] Failed to persist ${paramCode} parameter change to database`);
      }
    }

    // NEW: Handle non-yearly parameters (format: "paramCode")
    if (section === 'tasasFinancieras' || section === 'estacionalidadMensual' || section === 'otros' || section === 'vidaUtilActivos') {
      const paramCode = parameter;
      console.log(`[${section}] Updating parameter: ${paramCode} = ${numValue}`);

      const success = await updateParameterInDB(paramCode, null, numValue);
      if (success) {
        console.log(`✅ [${section}] ${paramCode} parameter updated successfully, triggering data reload...`);

        // Note: Local state update is no longer needed as globalParameters will be refreshed via onDataReload

        if (onDataReload) {
          onDataReload();
        }
      } else {
        console.error(`❌ [${section}] Failed to persist ${paramCode} parameter change to database`);
      }
    }

    // Note: crecimientosVenta and vidaUtilActivos parameter handling could be added here if needed
    // Currently these sections don't persist to database but could be extended

    // Also notify parent component for main page updates
    onParameterChange(section, parameter, value);
  }, [onParameterChange, updateParameterInDB, onDataReload]);

  if (!isOpen) return null;

  return (
    <div className={`relative rounded-2xl border shadow-[0px_16px_44px_0px_rgba(0,0,0,0.07)] w-[420px] h-full max-h-[calc(100vh-80px)] z-40 ${isDarkMode
      ? 'bg-neutral-900 border-[#9e9e9e]'
      : 'bg-white border-[#d0d5dd]'
      }`} style={{ overflow: 'visible', position: 'relative' }}>
      <div className="flex flex-col h-full">

        {/* Header con botón de colapso */}
        <div className={`relative p-6 border-b ${isDarkMode ? 'border-[#9e9e9e]' : 'border-[#d0d5dd]'}`} style={{ overflow: 'visible' }}>
          <button
            onClick={onToggle}
            className="sidebar-collapse-button"
            aria-label="Cerrar panel de parámetros"
          >
            <div className="size-4 flex items-center justify-center">
              <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                <path
                  clipRule="evenodd"
                  d={svgPaths.pf08ef40}
                  fill={isDarkMode ? "#9e9e9e" : "#6b7280"}
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </button>

          {/* Título principal */}
          <div className="flex items-center gap-4">
            <div className="relative shrink-0 size-8">
              <svg className="block size-full" fill="none" viewBox="0 0 32 32">
                <path
                  d={svgPaths.p1a193480}
                  fill={isDarkMode ? "#ffffff" : "#404040"}
                />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className={`font-medium text-base ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'
                }`}>
                PARÁMETROS FINANCIEROS
              </span>
              <div className="relative shrink-0 size-4">
                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="5.89762" stroke="#ADADAD" strokeWidth="1.5" />
                  <path d="M8 4.81787V9.08756" stroke="#ADADAD" strokeLinecap="round" strokeWidth="1.5" />
                  <path d="M8 10.6713L8 10.9089" stroke="#ADADAD" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Indicador de años seleccionados */}
          <div className="mt-4 flex items-center gap-3">
            <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Análisis para:
            </span>
            <div className="flex gap-2 flex-wrap">
              {selectedYears.map(year => (
                <span
                  key={year}
                  className={`px-3 py-1 rounded-md text-sm font-semibold ${isDarkMode
                    ? 'bg-neutral-800 text-[#3ABE76] border border-[#3ABE76]'
                    : 'bg-green-50 text-[#1a6e31] border border-green-200'
                    }`}
                >
                  {year}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contenido scrolleable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-4">



            {/* Sección CRECIMIENTOS DE VENTA */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('crecimientosVenta')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">CRECIMIENTOS DE VENTA</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.crecimientosVenta ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.crecimientosVenta && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  {/* Header description */}
                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Parámetros de proyección para crecimiento de ventas
                    </span>
                  </div>

                  {/* Table/Grid format for growth projections */}
                  <div className="overflow-x-auto">
                    <div className="min-w-max">
                      {/* Header row with years */}
                      <div className="grid gap-2 mb-3" style={{ gridTemplateColumns: `200px 80px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          Proyección
                        </div>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          2024
                        </div>
                        {getProjectionFields.map(year => (
                          <div key={year} className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                            {year}
                          </div>
                        ))}
                      </div>

                      {/* Growth projection row */}
                      <div className="grid gap-2 mb-2" style={{ gridTemplateColumns: `200px 80px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-medium py-2 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          Crecimiento de Ventas
                        </div>
                        {/* 2024 Established Value (Non-editable) */}
                        <div className="flex justify-center">
                          {isLoadingEstablishedValues ? (
                            <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                          ) : (
                            <div className={`border rounded-lg h-10 px-3 py-2 flex items-center justify-center min-w-[80px] ${isDarkMode
                              ? 'bg-neutral-700 border-neutral-600'
                              : 'bg-gray-100 border-gray-300'
                              }`}>
                              <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                {Math.round((establishedValues2024.crecimientoDeVentas * 100))}%
                              </span>
                            </div>
                          )}
                        </div>
                        {getProjectionFields.map(year => (
                          <div key={`crecimiento-param-${year}`} className="flex justify-center">
                            {isLoadingGlobalParametros ? (
                              <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                            ) : (
                              <EditableField
                                value={globalParameters?.crecimientosVenta?.proyecciones?.[year] || 0.10}
                                onChange={(value) => handleParameterChange('crecimientosVenta', `proy${year}`, value)}
                                type="percentage"
                                isDarkMode={isDarkMode}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Loading indicator */}
                  {isLoadingGlobalParametros && (
                    <div className="text-center">
                      <span className={`text-xs ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        Cargando parámetros...
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sección CREDITO NETO */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('creditoNeto')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">CREDITO NETO</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.creditoNeto ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.creditoNeto && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  {/* Header description */}
                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Parámetros de proyección para crédito neto
                    </span>
                  </div>

                  {/* Table/Grid format for credit projections */}
                  <div className="overflow-x-auto">
                    <div className="min-w-max">
                      {/* Header row with years */}
                      <div className="grid gap-2 mb-3" style={{ gridTemplateColumns: `200px 80px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          Proyección
                        </div>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          2024
                        </div>
                        {getProjectionFields.map(year => (
                          <div key={year} className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                            {year}
                          </div>
                        ))}
                      </div>

                      {/* Credit projection row */}
                      <div className="grid gap-2 mb-2" style={{ gridTemplateColumns: `200px 80px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-medium py-2 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          Crédito Neto
                        </div>
                        {/* 2024 Established Value (Non-editable) */}
                        <div className="flex justify-center">
                          {isLoadingEstablishedValues ? (
                            <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                          ) : (
                            <div className={`border rounded-lg h-10 px-3 py-2 flex items-center justify-center min-w-[80px] ${isDarkMode
                              ? 'bg-neutral-700 border-neutral-600'
                              : 'bg-gray-100 border-gray-300'
                              }`}>
                              <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                {Math.round(establishedValues2024.creditoNeto)}
                              </span>
                            </div>
                          )}
                        </div>
                        {getProjectionFields.map(year => (
                          <div key={`creditoNeto-param-${year}`} className="flex justify-center">
                            {isLoadingGlobalParametros ? (
                              <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                            ) : (
                              <EditableField
                                value={globalParameters?.creditoNeto?.proyecciones?.[year] || 0}
                                onChange={(value) => handleParameterChange('creditoNeto', `proy${year}`, value)}
                                type="number"
                                isDarkMode={isDarkMode}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Loading indicator */}
                  {isLoadingGlobalParametros && (
                    <div className="text-center">
                      <span className={`text-xs ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        Cargando parámetros...
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sección DIVIDENDOS */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('dividendos')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">DIVIDENDOS</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.dividendos ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.dividendos && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  {/* Header description */}
                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Parámetros de proyección para dividendos
                    </span>
                  </div>

                  {/* Table/Grid format for dividend projections */}
                  <div className="overflow-x-auto">
                    <div className="min-w-max">
                      {/* Header row with years */}
                      <div className="grid gap-2 mb-3" style={{ gridTemplateColumns: `200px 80px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          Proyección
                        </div>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          2024
                        </div>
                        {getProjectionFields.map(year => (
                          <div key={year} className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                            {year}
                          </div>
                        ))}
                      </div>

                      {/* Dividend projection row */}
                      <div className="grid gap-2 mb-2" style={{ gridTemplateColumns: `200px 80px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-medium py-2 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          Dividendos
                        </div>
                        {/* 2024 Established Value (Non-editable) */}
                        <div className="flex justify-center">
                          {isLoadingEstablishedValues ? (
                            <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                          ) : (
                            <div className={`border rounded-lg h-10 px-3 py-2 flex items-center justify-center min-w-[80px] ${isDarkMode
                              ? 'bg-neutral-700 border-neutral-600'
                              : 'bg-gray-100 border-gray-300'
                              }`}>
                              <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                {Math.round(establishedValues2024.dividendos)}
                              </span>
                            </div>
                          )}
                        </div>
                        {getProjectionFields.map(year => (
                          <div key={`dividendos-param-${year}`} className="flex justify-center">
                            {isLoadingGlobalParametros ? (
                              <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                            ) : (
                              <EditableField
                                value={globalParameters?.dividendos?.proyecciones?.[year] || 0}
                                onChange={(value) => handleParameterChange('dividendos', `proy${year}`, value)}
                                type="number"
                                isDarkMode={isDarkMode}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Loading indicator */}
                  {isLoadingGlobalParametros && (
                    <div className="text-center">
                      <span className={`text-xs ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        Cargando parámetros...
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sección UTILIDAD */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('utilidad')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">UTILIDAD</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.utilidad ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.utilidad && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  {/* Header description */}
                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Parámetros de proyección para utilidad
                    </span>
                  </div>

                  {/* Table/Grid format for utility projections */}
                  <div className="overflow-x-auto">
                    <div className="min-w-max">
                      {/* Header row with years */}
                      <div className="grid gap-2 mb-3" style={{ gridTemplateColumns: `200px 80px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          Proyección
                        </div>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          2024
                        </div>
                        {getProjectionFields.map(year => (
                          <div key={year} className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                            {year}
                          </div>
                        ))}
                      </div>

                      {/* Utility projection row */}
                      <div className="grid gap-2 mb-2" style={{ gridTemplateColumns: `200px 80px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-medium py-2 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          Utilidad
                        </div>
                        {/* 2024 Established Value (Non-editable) - Note: Utilidad uses the same view as "UTILIDAD" card */}
                        <div className="flex justify-center">
                          {isLoadingEstablishedValues ? (
                            <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                          ) : (
                            <div className={`border rounded-lg h-10 px-3 py-2 flex items-center justify-center min-w-[80px] ${isDarkMode
                              ? 'bg-neutral-700 border-neutral-600'
                              : 'bg-gray-100 border-gray-300'
                              }`}>
                              <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                {Math.round((establishedValues2024.utilidad || 0) * 100)}%
                              </span>
                            </div>
                          )}
                        </div>
                        {getProjectionFields.map(year => (
                          <div key={`utilidad-param-${year}`} className="flex justify-center">
                            {isLoadingGlobalParametros ? (
                              <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                            ) : (
                              <EditableField
                                value={globalParameters?.utilidad?.proyecciones?.[year] || 0}
                                onChange={(value) => handleParameterChange('utilidad', `proy${year}`, value)}
                                type="percentage"
                                isDarkMode={isDarkMode}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Loading indicator */}
                  {isLoadingGlobalParametros && (
                    <div className="text-center">
                      <span className={`text-xs ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        Cargando parámetros...
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sección INVERSIONES */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('inversiones')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">INVERSIONES</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.inversiones ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.inversiones && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  {/* Header description */}
                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Parámetros de proyección para inversiones
                    </span>
                  </div>

                  {/* Table/Grid format for investment projections */}
                  <div className="overflow-x-auto">
                    <div className="min-w-max">
                      {/* Header row with years */}
                      <div className="grid gap-2 mb-3" style={{ gridTemplateColumns: `200px 80px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          Proyección
                        </div>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          2024
                        </div>
                        {getProjectionFields.map(year => (
                          <div key={year} className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                            {year}
                          </div>
                        ))}
                      </div>

                      {/* Investment projection row */}
                      <div className="grid gap-2 mb-2" style={{ gridTemplateColumns: `200px 80px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-medium py-2 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          Inversiones
                        </div>
                        {/* 2024 Established Value (Non-editable) */}
                        <div className="flex justify-center">
                          {isLoadingEstablishedValues ? (
                            <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                          ) : (
                            <div className={`border rounded-lg h-10 px-3 py-2 flex items-center justify-center min-w-[80px] ${isDarkMode
                              ? 'bg-neutral-700 border-neutral-600'
                              : 'bg-gray-100 border-gray-300'
                              }`}>
                              <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                {Math.round(establishedValues2024.inversiones)}
                              </span>
                            </div>
                          )}
                        </div>
                        {getProjectionFields.map(year => (
                          <div key={`inversiones-param-${year}`} className="flex justify-center">
                            {isLoadingGlobalParametros ? (
                              <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                            ) : (
                              <EditableField
                                value={globalParameters?.inversiones?.proyecciones?.[year] || 5}
                                onChange={(value) => handleParameterChange('inversiones', `proy${year}`, value)}
                                type="number"
                                isDarkMode={isDarkMode}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Loading indicator */}
                  {isLoadingGlobalParametros && (
                    <div className="text-center">
                      <span className={`text-xs ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        Cargando parámetros...
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sección VIDA ÚTIL ACTIVOS */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('vidaUtilActivos')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">VIDA ÚTIL ACTIVOS</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.vidaUtilActivos ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.vidaUtilActivos && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Vida útil de activos (años)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Vida Útil de Capital (VUC):
                    </span>
                    {isLoadingGlobalParametros ? (
                      <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                    ) : (
                      <EditableField
                        value={globalParameters?.otros?.VUC || 10}
                        onChange={(value) => handleParameterChange('vidaUtilActivos', 'VUC', value)}
                        type="number"
                        isDarkMode={isDarkMode}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sección TASAS FINANCIERAS (30000s) */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('tasasFinancieras')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">TASAS FINANCIERAS</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.tasasFinancieras ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.tasasFinancieras && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Tasas y factores financieros
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { code: 'TASA_CP', label: 'Tasa Corto Plazo' },
                      { code: 'TASA_LP', label: 'Tasa Largo Plazo' },
                      { code: 'SPREAD', label: 'Spread' },
                      { code: 'BETA', label: 'Beta' },
                      { code: 'CREC_RESIDUAL', label: 'Crecimiento Residual' },
                      { code: 'RIESGO_PAIS', label: 'Riesgo País' },
                      { code: 'RF', label: 'Tasa Libre Riesgo' }
                    ].map(({ code, label }) => (
                      <div key={code} className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          {label}:
                        </span>
                        {isLoadingGlobalParametros ? (
                          <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                        ) : (
                          <EditableField
                            value={globalParameters?.tasasFinancieras?.[code] || 0}
                            onChange={(value) => handleParameterChange('tasasFinancieras', code, value)}
                            type="percentage"
                            isDarkMode={isDarkMode}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sección MÁRGENES FINANCIEROS (40000s) */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('margenesFinancieros')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">MÁRGENES FINANCIEROS</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.margenesFinancieros ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.margenesFinancieros && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Márgenes y ratios financieros por año
                    </span>
                  </div>

                  {/* Table/Grid format for parameters by year */}
                  <div className="overflow-x-auto">
                    <div className="min-w-max">
                      {/* Header row with years */}
                      <div className="grid gap-2 mb-3" style={{ gridTemplateColumns: `200px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          Parámetro
                        </div>
                        {getProjectionFields.map(year => (
                          <div key={year} className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                            {year}
                          </div>
                        ))}
                      </div>

                      {/* Parameter rows */}
                      {[
                        { code: 'MG_BR', label: 'Margen Bruto' },
                        { code: 'G_V_V', label: 'Gastos Venta Variables' },
                        { code: 'G_A_V', label: 'Gastos Admin y Ventas' },
                        { code: 'IMPTO', label: 'Impuesto' }
                      ].map(({ code, label }) => (
                        <div key={code} className="grid gap-2 mb-2" style={{ gridTemplateColumns: `200px repeat(${getProjectionFields.length}, 80px)` }}>
                          <div className={`text-sm font-medium py-2 truncate ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`} title={label}>
                            {label}
                          </div>
                          {getProjectionFields.map(year => (
                            <div key={`${code}-${year}`} className="flex justify-center">
                              {isLoadingGlobalParametros ? (
                                <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                              ) : (
                                <div className={`border rounded-lg h-10 px-3 py-2 flex items-center justify-center min-w-[80px] ${isDarkMode
                                  ? 'bg-neutral-700 border-neutral-600'
                                  : 'bg-gray-100 border-gray-300'
                                  }`}>
                                  <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                    {Math.round((globalParameters?.margenesFinancieros?.[code]?.[year] || 0) * 100)}%
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sección BALANCE GENERAL (50000s) */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('balanceGeneral')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">BALANCE GENERAL</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.balanceGeneral ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.balanceGeneral && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Parámetros de balance general por año
                    </span>
                  </div>

                  {/* Table/Grid format for parameters by year */}
                  <div className="overflow-x-auto">
                    <div className="min-w-max">
                      {/* Header row with years */}
                      <div className="grid gap-2 mb-3" style={{ gridTemplateColumns: `200px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          Parámetro
                        </div>
                        {getProjectionFields.map(year => (
                          <div key={year} className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                            {year}
                          </div>
                        ))}
                      </div>

                      {/* Parameter rows */}
                      {[
                        { code: 'CAJA', label: 'Caja' },
                        { code: 'CXC', label: 'Cuentas por Cobrar' },
                        { code: 'EXIST', label: 'Existencias' },
                        { code: 'CXP', label: 'Cuentas por Pagar' }
                      ].map(({ code, label }) => (
                        <div key={code} className="grid gap-2 mb-2" style={{ gridTemplateColumns: `200px repeat(${getProjectionFields.length}, 80px)` }}>
                          <div className={`text-sm font-medium py-2 truncate ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`} title={label}>
                            {label}
                          </div>
                          {getProjectionFields.map(year => (
                            <div key={`${code}-${year}`} className="flex justify-center">
                              {isLoadingGlobalParametros ? (
                                <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                              ) : (
                                <div className={`border rounded-lg h-10 px-3 py-2 flex items-center justify-center min-w-[80px] ${isDarkMode
                                  ? 'bg-neutral-700 border-neutral-600'
                                  : 'bg-gray-100 border-gray-300'
                                  }`}>
                                  <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                    {Math.round(globalParameters?.balanceGeneral?.[code as keyof typeof globalParameters.balanceGeneral]?.[year] || 0)}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sección ESTACIONALIDAD MENSUAL (70000s) */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('estacionalidadMensual')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">ESTACIONALIDAD MENSUAL</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.estacionalidadMensual ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.estacionalidadMensual && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Factores de estacionalidad mensual
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { code: 'ENE', label: 'Enero' },
                      { code: 'FEB', label: 'Febrero' },
                      { code: 'MAR', label: 'Marzo' },
                      { code: 'ABR', label: 'Abril' },
                      { code: 'MAY', label: 'Mayo' },
                      { code: 'JUN', label: 'Junio' },
                      { code: 'JUL', label: 'Julio' },
                      { code: 'AGO', label: 'Agosto' },
                      { code: 'SEPT', label: 'Septiembre' },
                      { code: 'OCT', label: 'Octubre' },
                      { code: 'NOV', label: 'Noviembre' },
                      { code: 'DIC', label: 'Diciembre' }
                    ].map(({ code, label }) => (
                      <div key={code} className="flex items-center justify-between">
                        <span className={`text-xs font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          {label}:
                        </span>
                        {isLoadingGlobalParametros ? (
                          <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                        ) : (
                          <EditableField
                            value={globalParameters?.estacionalidadMensual?.[code] || 0}
                            onChange={(value) => handleParameterChange('estacionalidadMensual', code, value)}
                            type="percentage"
                            isDarkMode={isDarkMode}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sección VALORIZACIÓN */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('valorizacion')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">VALORIZACIÓN</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.valorizacion ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.valorizacion && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Parámetros de valorización
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { code: 'RD', label: 'Costo de la Deuda (RD)' },
                      { code: 'RE', label: 'Costo del Patrimonio (RE)' },
                      { code: 'WACC', label: 'Costo Promedio Ponderado de Capital (WACC)' }
                    ].map(({ code, label }) => (
                      <div key={code} className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          {label}:
                        </span>
                        {isLoadingGlobalParametros ? (
                          <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                        ) : (
                          <EditableField
                            value={globalParameters?.valorizacion?.[code as keyof typeof globalParameters.valorizacion] || 0}
                            onChange={(value) => handleParameterChange('valorizacion', code, value)}
                            type="percentage"
                            isDarkMode={isDarkMode}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sección COSTOS DE VENTA */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('costosDeVenta')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">COSTOS DE VENTA</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.costosDeVenta ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.costosDeVenta && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Costos de venta por año
                    </span>
                  </div>

                  {/* Table/Grid format for parameters by year */}
                  <div className="overflow-x-auto">
                    <div className="min-w-max">
                      {/* Header row with years */}
                      <div className="grid gap-2 mb-3" style={{ gridTemplateColumns: `200px repeat(${getCostosDeVentaProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          Parámetro
                        </div>
                        {getCostosDeVentaProjectionFields.map(year => (
                          <div key={year} className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                            {year}
                          </div>
                        ))}
                      </div>

                      {/* Parameter rows */}
                      {[
                        { code: 'REM', label: 'Remuneraciones' },
                        { code: 'GPER', label: 'Gastos Personal' },
                        { code: 'SERV', label: 'Servicios' },
                        { code: 'MAT', label: 'Materiales' },
                        { code: 'ARR', label: 'Arriendos' },
                        { code: 'DEP', label: 'Depreciación' },
                        { code: 'HERR', label: 'Herramientas' },
                        { code: 'OTR', label: 'Otros' }
                      ].map(({ code, label }) => (
                        <div key={code} className="grid gap-2 mb-2" style={{ gridTemplateColumns: `200px repeat(${getCostosDeVentaProjectionFields.length}, 80px)` }}>
                          <div className={`text-sm font-medium py-2 truncate ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`} title={label}>
                            {label}
                          </div>
                          {getCostosDeVentaProjectionFields.map(year => (
                            <div key={`${code}-${year}`} className="flex justify-center">
                              {isLoadingGlobalParametros ? (
                                <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                              ) : (
                                <div className={`border rounded-lg h-10 px-3 py-2 flex items-center justify-center min-w-[80px] ${isDarkMode
                                  ? 'bg-neutral-700 border-neutral-600'
                                  : 'bg-gray-100 border-gray-300'
                                  }`}>
                                  <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                    {Math.round((globalParameters?.costosDeVenta?.[code]?.[year] || 0) * 100)}%
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sección GASTOS DE VENTA */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('gastosDeVenta')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">GASTOS DE VENTA</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.gastosDeVenta ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.gastosDeVenta && (
                <div className={`rounded-lg p-4 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-neutral-700'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Gastos de venta por año
                    </span>
                  </div>

                  {/* Table/Grid format for parameters by year */}
                  <div className="overflow-x-auto">
                    <div className="min-w-max">
                      {/* Header row with years */}
                      <div className="grid gap-2 mb-3" style={{ gridTemplateColumns: `200px repeat(${getCostosDeVentaProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          Parámetro
                        </div>
                        {getCostosDeVentaProjectionFields.map(year => (
                          <div key={year} className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                            {year}
                          </div>
                        ))}
                      </div>

                      {/* Parameter rows */}
                      {[
                        { code: 'REM', label: 'Remuneraciones' },
                        { code: 'GRL', label: 'Gastos Generales' },
                        { code: 'DEP', label: 'Depreciación' },
                        { code: 'MANT', label: 'Mantenimiento' },
                        { code: 'HON', label: 'Honorarios' },
                        { code: 'OTR', label: 'Otros' }
                      ].map(({ code, label }) => (
                        <div key={code} className="grid gap-2 mb-2" style={{ gridTemplateColumns: `200px repeat(${getCostosDeVentaProjectionFields.length}, 80px)` }}>
                          <div className={`text-sm font-medium py-2 truncate ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`} title={label}>
                            {label}:
                          </div>
                          {getCostosDeVentaProjectionFields.map(year => (
                            <div key={year} className="flex items-center justify-center">
                              {isLoadingGlobalParametros ? (
                                <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
                              ) : (
                                <div className={`border rounded-lg h-10 px-3 py-2 flex items-center justify-center min-w-[80px] ${isDarkMode
                                  ? 'bg-neutral-700 border-neutral-600'
                                  : 'bg-gray-100 border-gray-300'
                                  }`}>
                                  <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                    {Math.round((globalParameters?.gastosDeVenta?.[code]?.[year] || 0) * 100)}%
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sección OTROS */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('otros')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">OTROS</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.otros ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.otros && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>

                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Otros parámetros del sistema
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { code: 'DIAS_DEL_PERIODO', label: 'Días del Período' },
                      { code: 'UNID_MED', label: 'Unidad de Medida' },
                      { code: 'EV_ABR', label: 'Estacionalidad Ventas' }
                    ].map(({ code, label }) => (
                      <div key={code} className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          {label}:
                        </span>
                        {isLoadingGlobalParametros ? (
                          <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                        ) : (
                          <EditableField
                            value={globalParameters?.otros?.[code] || 0}
                            onChange={(value) => handleParameterChange('otros', code, value)}
                            type={code === 'EV_ABR' ? 'percentage' : 'number'}
                            isDarkMode={isDarkMode}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};