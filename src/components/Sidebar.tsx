import { useState, useCallback, useMemo, useEffect } from 'react';
import svgPaths from "../imports/svg-tlrzm2wqv9";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onParameterChange: (section: string, parameter: string, value: string | number) => void;
  selectedYears: string[];
  isDarkMode?: boolean;
  globalParameters?: any;
  projectionFormulas?: { [year: string]: string };
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
  const [tempValue, setTempValue] = useState(value.toString());

  const handleSubmit = () => {
    onChange(tempValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    } else if (e.key === 'Escape') {
      setTempValue(value.toString());
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
        className={`border rounded-lg h-8 px-3 py-2 text-sm w-16 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${isDarkMode
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
      className={`border rounded-lg h-8 px-3 py-2 cursor-pointer hover:opacity-80 flex items-center justify-center transition-all min-w-[64px] ${isDarkMode
        ? 'bg-neutral-800 border-[#3ABE76]'
        : 'bg-neutral-50 border-[#1a6e31] hover:bg-gray-50'
        }`}
    >
      <span className={`text-sm font-medium ${isDarkMode ? 'text-[#3ABE76]' : 'text-[#1a6e31]'}`}>
        {type === 'percentage' ? `${value}%` : value}
      </span>
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onToggle,
  onParameterChange,
  selectedYears,
  isDarkMode = false,
  globalParameters,
  projectionFormulas = {},
  isLoadingGlobalParametros = false,
  isLoadingFormulas = false
}) => {
  // Estados para las secciones colapsables
  const [sectionStates, setSectionStates] = useState({
    utilidad: true,
    crecimientosVenta: false,
    inversiones: false,
    vidaUtilActivos: false,
    estacionalidad: false,
    factoresFinancieros: false
  });

  // Local states for Sidebar - keep this simple and working
  const [parameters, setParameters] = useState({
    utilidad: {
      values: {} as { [year: string]: number },
      result: 0,
      proyecciones: {} as { [year: string]: number }
    },
    crecimientosVenta: {
      values: {} as { [year: string]: number },
      proyeccion: 10
    },
    inversiones: {
      values: {} as { [year: string]: number },
      proyeccion: 10
    },
    vidaUtilActivos: {
      valor: "10 años"
    }
  });

  // Local loading states  
  const [isLoadingUtilidad, setIsLoadingUtilidad] = useState(true);

  // Local API fetching to populate Sidebar values independently
  const fetchUtilidadData = async () => {
    try {
      setIsLoadingUtilidad(true);
      const response = await fetch('/api/utilidad?startYear=2022&endYear=2029&formula=utilidad_basica');
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data) {
          const { dates, values, result: totalResult } = result.data;
          const valuesByYear: { [year: string]: number } = {};
          dates.forEach((year: string, index: number) => {
            valuesByYear[year] = values[index];
          });

          setParameters(prev => ({
            ...prev,
            utilidad: {
              ...prev.utilidad,
              values: valuesByYear,
              result: totalResult
            }
          }));
        }
      }
    } catch (error) {
      console.error('Sidebar: Failed to fetch utilidad data:', error);
    } finally {
      setIsLoadingUtilidad(false);
    }
  };

  const fetchParametros = async () => {
    try {
      const response = await fetch('/api/parametros?prmt_codigo=PROY_UTIL');
      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data && result.data.parametros) {
          const proyecciones: { [year: string]: number } = {};
          result.data.parametros.forEach((param: any) => {
            if (param.prmt_ano) {
              proyecciones[param.prmt_ano.toString()] = param.prmt_valor;
            }
          });

          setParameters(prev => ({
            ...prev,
            utilidad: {
              ...prev.utilidad,
              proyecciones: proyecciones
            }
          }));
        }
      }
    } catch (error) {
      console.error('Sidebar: Failed to fetch parametros:', error);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    fetchUtilidadData();
    fetchParametros();
  }, []);

  // Helper function to get latest available value when year not found
  const getLatestAvailable = useCallback((obj: { [key: string]: any }, targetYear: string): any => {
    if (obj[targetYear]) return obj[targetYear];

    // Get all available years, sort them, and find the latest one that's <= targetYear
    const availableYears = Object.keys(obj).sort((a, b) => parseInt(b) - parseInt(a));
    return obj[availableYears[0]] || null;
  }, []);

  // Function to get base value (just utilidad_basica, no additional formula)
  const getBaseValue = useCallback((year: string): number => {
    return parameters.utilidad.values[year] || 0;
  }, [parameters.utilidad.values]);

  // Function to evaluate projection formula (utilidad_basica * param)
  const evaluateProjection = useCallback((year: string): number => {
    const baseValue = getBaseValue(year);

    // Each year uses only its specific parameter, but formula can use fallback
    const paramValue = parameters.utilidad.proyecciones[year];
    const formula = projectionFormulas[year] ||
      getLatestAvailable(projectionFormulas, year) ||
      "utilidad_basica * param"; // default formula if none found

    // If no specific parameter for this year, return base value (no projection)
    if (!paramValue || baseValue === 0) {
      return baseValue;
    }

    try {
      // Simple evaluation by replacing keywords
      let evaluatedFormula = formula
        .replace(/utilidad_basica/g, baseValue.toString())
        .replace(/param/g, (paramValue / 100).toString());

      // Use eval for simple mathematical expressions (be careful with this in production)
      const result = eval(evaluatedFormula);
      console.log(`Sidebar Projection Year ${year}: ${formula} -> ${evaluatedFormula} = ${result}`);
      return Math.round(result);
    } catch (error) {
      console.error('Sidebar formula evaluation error:', error);
      return baseValue;
    }
  }, [getBaseValue, parameters.utilidad.proyecciones, projectionFormulas, getLatestAvailable]);

  // No need to fetch data - using global parameters from props

  // Force re-render when projection parameters change (for real-time updates)
  const [updateTrigger, setUpdateTrigger] = useState(0);

  useEffect(() => {
    // Force re-computation when projection parameters change
    setUpdateTrigger(prev => prev + 1);
    console.log('Local projection parameters changed, triggering sidebar update');
  }, [parameters.utilidad.proyecciones]);

  // COMPUTED: Filtrar años y datos basados en selectedYears
  const filteredYearData = useMemo(() => {
    const sortedYears = [...selectedYears].sort();
    console.log('Recomputing filteredYearData, updateTrigger:', updateTrigger);
    return {
      years: sortedYears,
      utilidadValues: sortedYears.map(year => ({
        year,
        baseValue: getBaseValue(year), // BASE: Just the base value from utilidad API
        projectedValue: evaluateProjection(year) // PROJECTED: Base value * param formula
      })),
      crecimientosValues: sortedYears.map(year => ({
        year,
        value: parameters.crecimientosVenta.values[year] || 0
      })),
      inversionesValues: sortedYears.map(year => ({
        year,
        value: parameters.inversiones.values[year] || 0
      }))
    };
  }, [selectedYears, parameters, getBaseValue, evaluateProjection, updateTrigger]);

  // COMPUTED: Obtener campos de proyección basados en años seleccionados
  const getProjectionFields = useMemo(() => {
    const futureYears = selectedYears.filter(year => parseInt(year) >= 2025).sort();
    return futureYears.slice(0, 3); // Máximo 3 campos de proyección
  }, [selectedYears]);

  const toggleSection = (section: keyof typeof sectionStates) => {
    setSectionStates(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleParameterChange = useCallback((section: string, parameter: string, value: string) => {
    console.log(`Sidebar parameter change: ${section}.${parameter} = ${value}`);

    // Update local state for real-time Sidebar updates
    if (section === 'utilidad' && parameter.includes('proy')) {
      const year = parameter.replace('proy', '');
      const numValue = parseFloat(value) || 10;

      setParameters(prev => ({
        ...prev,
        utilidad: {
          ...prev.utilidad,
          proyecciones: {
            ...prev.utilidad.proyecciones,
            [year]: numValue
          }
        }
      }));

    }

    // Also notify parent component for main page updates
    onParameterChange(section, parameter, value);
  }, [onParameterChange]);

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
                  {/* Headers de años */}
                  <div className={`py-3 border-b-2 border-dashed ${isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                    }`}>
                    <div className="flex justify-between items-center">
                      {filteredYearData.years.map(year => (
                        <div key={year} className="flex-1 text-center">
                          <span className={`text-base font-semibold ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'
                            }`}>
                            {year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resultado principal */}
                  <div className={`py-3 border-b-2 border-dashed ${isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                    }`}>
                    <div className="flex justify-center flex-col">
                      <div className="text-center">
                        <span className={`text-2xl font-bold ${isDarkMode ? 'text-[#ff2e2e]' : 'text-[#b00020]'
                          }`}>
                          BASE: {isLoadingUtilidad ? 'Cargando...' : (parameters.utilidad.result || 0).toLocaleString()}
                        </span>
                      </div>
                      <div className="text-center mt-2">
                        <span className={`text-2xl font-bold ${isDarkMode ? 'text-[#3ABE76]' : 'text-[#1a6e31]'
                          }`}>
                          PROY: {isLoadingUtilidad || isLoadingFormulas ? 'Cargando...' :
                            filteredYearData.utilidadValues.reduce((sum, item) => sum + item.projectedValue, 0).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Valores base por año */}
                  <div className={`py-3 border-b border-dashed ${isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                    }`}>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        BASE
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      {filteredYearData.utilidadValues.map(({ year, baseValue }) => (
                        <div key={year} className="flex-1 text-center">
                          <span className={`text-base font-semibold ${isDarkMode ? 'text-[#3acfff]' : 'text-[#2e649d]'
                            }`}>
                            {isLoadingUtilidad ? '...' : baseValue.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Valores proyectados por año */}
                  <div className={`py-3 border-b-2 border-dashed ${isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                    }`}>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-[#3ABE76]' : 'text-[#1a6e31]'}`}>
                        PROYECTADO
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      {filteredYearData.utilidadValues.map(({ year, projectedValue }) => (
                        <div key={year} className="flex-1 text-center">
                          <span className={`text-base font-bold ${isDarkMode ? 'text-[#3ABE76]' : 'text-[#1a6e31]'
                            }`}>
                            {isLoadingUtilidad || isLoadingFormulas ? '...' : projectedValue.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fila PROY con campos editables */}
                  <div className="py-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
                        }`}>
                        PROY
                      </span>
                      <div className="flex gap-3 items-center">
                        {/* Espaciado para años históricos */}
                        {selectedYears.some(year => parseInt(year) < 2025) && (
                          <div className="flex">
                            {selectedYears.filter(year => parseInt(year) < 2025).map(year => (
                              <div key={year} className="w-16"></div>
                            ))}
                          </div>
                        )}

                        {/* Campos editables para años futuros */}
                        {isLoadingGlobalParametros ? (
                          <div className="flex gap-3">
                            {getProjectionFields.map(year => (
                              <div key={`loading-${year}`} className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                            ))}
                          </div>
                        ) : (
                          getProjectionFields.map(year => (
                            <EditableField
                              key={`proy-${year}`}
                              value={globalParameters?.utilidad.proyecciones[year] || 10}
                              onChange={(value) => handleParameterChange('utilidad', `proy${year}`, value)}
                              type="percentage"
                              isDarkMode={isDarkMode}
                            />
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

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
                  {/* Headers de años */}
                  <div className={`py-3 border-b-2 border-dashed ${isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                    }`}>
                    <div className="flex justify-between items-center">
                      {filteredYearData.years.map(year => (
                        <div key={year} className="flex-1 text-center">
                          <span className={`text-base font-semibold ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'
                            }`}>
                            {year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Valores por año */}
                  <div className={`py-3 border-b-2 border-dashed ${isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                    }`}>
                    <div className="flex justify-between items-center">
                      {filteredYearData.crecimientosValues.map(({ year, value }) => (
                        <div key={year} className="flex-1 text-center">
                          <span className={`text-base font-semibold ${isDarkMode ? 'text-[#3acfff]' : 'text-[#2e649d]'
                            }`}>
                            {value.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fila PROY */}
                  <div className="py-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
                        }`}>
                        PROY
                      </span>
                      <div className="flex gap-3 items-center">
                        {/* Espaciado para años históricos */}
                        {selectedYears.some(year => parseInt(year) < 2025) && (
                          <div className="flex">
                            {selectedYears.filter(year => parseInt(year) < 2025).map(year => (
                              <div key={year} className="w-16"></div>
                            ))}
                          </div>
                        )}

                        {/* Campos editables limitados a 2 para esta sección */}
                        {getProjectionFields.slice(0, 2).map((year, index) => (
                          <EditableField
                            key={`crecimiento-proy-${year}-${index}`}
                            value={parameters.crecimientosVenta.proyeccion}
                            onChange={(value) => handleParameterChange('crecimientosVenta', `proyeccion${index + 1}`, value)}
                            type="percentage"
                            isDarkMode={isDarkMode}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
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
                  {/* Headers de años */}
                  <div className={`py-3 border-b-2 border-dashed ${isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                    }`}>
                    <div className="flex justify-between items-center">
                      {filteredYearData.years.map(year => (
                        <div key={year} className="flex-1 text-center">
                          <span className={`text-base font-semibold ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'
                            }`}>
                            {year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Valores por año */}
                  <div className={`py-3 border-b-2 border-dashed ${isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                    }`}>
                    <div className="flex justify-between items-center">
                      {filteredYearData.inversionesValues.map(({ year, value }) => (
                        <div key={year} className="flex-1 text-center">
                          <span className={`text-base font-semibold ${isDarkMode ? 'text-[#3acfff]' : 'text-[#2e649d]'
                            }`}>
                            {value.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fila PROY */}
                  <div className="py-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
                        }`}>
                        PROY
                      </span>
                      <div className="flex gap-3 items-center">
                        {/* Espaciado para años históricos */}
                        {selectedYears.some(year => parseInt(year) < 2025) && (
                          <div className="flex">
                            {selectedYears.filter(year => parseInt(year) < 2025).map(year => (
                              <div key={year} className="w-16"></div>
                            ))}
                          </div>
                        )}

                        {/* Campos editables limitados a 2 para esta sección */}
                        {getProjectionFields.slice(0, 2).map((year, index) => (
                          <EditableField
                            key={`inversiones-proy-${year}-${index}`}
                            value={parameters.inversiones.proyeccion}
                            onChange={(value) => handleParameterChange('inversiones', `proyeccion${index + 1}`, value)}
                            type="percentage"
                            isDarkMode={isDarkMode}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
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
                <div className={`rounded-xl border shadow-sm p-5 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      VIDA ÚTIL ACTIVOS
                    </span>
                    <EditableField
                      value={parameters.vidaUtilActivos.valor}
                      onChange={(value) => handleParameterChange('vidaUtilActivos', 'valor', value)}
                      type="text"
                      placeholder="Ej: 10 años"
                      isDarkMode={isDarkMode}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sección ESTACIONALIDAD DE VENTAS */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('estacionalidad')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${isDarkMode
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-green-900 hover:bg-green-800'
                  }`}
              >
                <span className="font-semibold text-base">ESTACIONALIDAD DE VENTAS</span>
                <div className={`transform transition-transform duration-200 ${sectionStates.estacionalidad ? 'rotate-90' : ''}`}>
                  <svg className="size-5" fill="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p3fb14600} fill="#FAFAFA" />
                  </svg>
                </div>
              </button>

              {sectionStates.estacionalidad && (
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>
                  <div className={`text-center text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                    Configuración de estacionalidad para {selectedYears.length} año{selectedYears.length !== 1 ? 's' : ''}
                  </div>

                  {/* Botón de configuración */}
                  <div className="flex justify-center">
                    <button className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${isDarkMode
                      ? 'bg-neutral-700 text-[#3ABE76] border border-[#3ABE76] hover:bg-neutral-600'
                      : 'bg-green-50 text-[#1a6e31] border border-green-200 hover:bg-green-100'
                      }`}>
                      Configurar estacionalidad
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sección FACTORES FINANCIEROS */}
            <div className={`mt-8 pt-6 border-t ${isDarkMode ? 'border-[#9e9e9e]' : 'border-[#d0d5dd]'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative shrink-0 size-8">
                  <svg className="block size-full" fill="none" viewBox="0 0 32 32">
                    <path d={svgPaths.p366d9c00} fill={isDarkMode ? "#ffffff" : "#404040"} />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-medium text-base ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'
                    }`}>
                    FACTORES FINANCIEROS
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

              <div className={`text-center text-sm py-8 ${isDarkMode ? 'text-neutral-500' : 'text-neutral-600'
                }`}>
                Sección disponible próximamente
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};