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
    otros: false
  });

  // Note: All parameters are now loaded from globalParameters prop (from database)
  // Local parameter state is no longer needed as everything comes from the API

  // COMPUTED: Get projection fields based on selected years
  const getProjectionFields = useMemo(() => {
    const futureYears = selectedYears.filter(year => parseInt(year) >= 2025).sort();
    return futureYears.slice(0, 3); // Maximum 3 projection fields
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

    const numValue = parseFloat(value) || 10;



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

    // NEW: Handle yearly financial parameters (format: "paramCode_proy2025")
    if (parameter.includes('_proy')) {
      const [paramCode, yearPart] = parameter.split('_proy');
      const year = parseInt(yearPart);

      const success = await updateParameterInDB(paramCode, year, numValue);
      if (success) {
        console.log(`${paramCode} parameter updated successfully for year ${year}, triggering data reload...`);
        if (onDataReload) {
          onDataReload();
        }
      } else {
        console.error(`Failed to persist ${paramCode} parameter change to database`);
      }
    }

    // NEW: Handle non-yearly parameters (format: "paramCode")
    if (section === 'tasasFinancieras' || section === 'estacionalidadMensual' || section === 'otros') {
      const paramCode = parameter;

      const success = await updateParameterInDB(paramCode, null, numValue);
      if (success) {
        console.log(`${paramCode} parameter updated successfully, triggering data reload...`);

        // Note: Local state update is no longer needed as globalParameters will be refreshed via onDataReload

        if (onDataReload) {
          onDataReload();
        }
      } else {
        console.error(`Failed to persist ${paramCode} parameter change to database`);
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

                  <div className="text-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      Parámetros de crecimiento de ventas
                    </span>
                  </div>

                  {/* Parameter fields limited to 2 for this section */}
                  <div className="space-y-4">
                    {getProjectionFields.slice(0, 2).map((year, index) => (
                      <div key={`crecimiento-param-${year}-${index}`} className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          Proyección {index + 1}:
                        </span>
                        <EditableField
                          value={globalParameters?.crecimientosVenta?.proyeccion || 10}
                          onChange={(value) => handleParameterChange('crecimientosVenta', `proyeccion${index + 1}`, value)}
                          type="percentage"
                          isDarkMode={isDarkMode}
                        />
                      </div>
                    ))}
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
                      <div className="grid gap-2 mb-3" style={{ gridTemplateColumns: `200px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                          Proyección
                        </div>
                        {getProjectionFields.map(year => (
                          <div key={year} className={`text-sm font-semibold text-center py-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                            {year}
                          </div>
                        ))}
                      </div>

                      {/* Investment projection row */}
                      <div className="grid gap-2 mb-2" style={{ gridTemplateColumns: `200px repeat(${getProjectionFields.length}, 80px)` }}>
                        <div className={`text-sm font-medium py-2 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          Inversiones
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
                <div className={`rounded-xl border shadow-sm p-5 ${isDarkMode
                  ? 'bg-neutral-800 border-[#9e9e9e]'
                  : 'bg-white border-[#e0e0e0]'
                  }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      VIDA ÚTIL ACTIVOS
                    </span>
                    <EditableField
                      value={globalParameters?.vidaUtilActivos?.valor || "10 años"}
                      onChange={(value) => handleParameterChange('vidaUtilActivos', 'valor', value)}
                      type="text"
                      placeholder="Ej: 10 años"
                      isDarkMode={isDarkMode}
                    />
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
                            value={globalParameters?.tasasFinancieras?.[code as keyof typeof globalParameters.tasasFinancieras] || 0}
                            onChange={(value) => handleParameterChange('tasasFinancieras', code, value)}
                            type="number"
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
                                <EditableField
                                  value={globalParameters?.margenesFinancieros?.[code as keyof typeof globalParameters.margenesFinancieros]?.[year] || 0}
                                  onChange={(value) => handleParameterChange('margenesFinancieros', `${code}_proy${year}`, value)}
                                  type="number"
                                  isDarkMode={isDarkMode}
                                />
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
                                <EditableField
                                  value={globalParameters?.balanceGeneral?.[code as keyof typeof globalParameters.balanceGeneral]?.[year] || 0}
                                  onChange={(value) => handleParameterChange('balanceGeneral', `${code}_proy${year}`, value)}
                                  type="number"
                                  isDarkMode={isDarkMode}
                                />
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
                            value={globalParameters?.estacionalidadMensual?.[code as keyof typeof globalParameters.estacionalidadMensual] || 0}
                            onChange={(value) => handleParameterChange('estacionalidadMensual', code, value)}
                            type="number"
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
                      { code: 'UNID_MED', label: 'Unidad de Medida' }
                    ].map(({ code, label }) => (
                      <div key={code} className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          {label}:
                        </span>
                        {isLoadingGlobalParametros ? (
                          <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                        ) : (
                          <EditableField
                            value={globalParameters?.otros?.[code as keyof typeof globalParameters.otros] || 0}
                            onChange={(value) => handleParameterChange('otros', code, value)}
                            type="number"
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