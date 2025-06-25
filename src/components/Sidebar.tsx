import { useState, useCallback, useMemo } from 'react';
import svgPaths from "../imports/svg-tlrzm2wqv9";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onParameterChange: (section: string, parameter: string, value: string | number) => void;
  selectedYears: string[];
  isDarkMode?: boolean;
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
        className={`border rounded-lg h-8 px-3 py-2 text-sm w-16 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
          isDarkMode 
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
      className={`border rounded-lg h-8 px-3 py-2 cursor-pointer hover:opacity-80 flex items-center justify-center transition-all min-w-[64px] ${
        isDarkMode
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
  isDarkMode = false 
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

  // Estados para los valores editables - EXTENDIDOS para incluir años 2028-2029
  const [parameters, setParameters] = useState({
    utilidad: {
      2022: 147950,
      2023: 147950,
      2024: 177540,
      2025: 177540,
      2026: 230802,
      2027: 235000,
      2028: 245000,
      2029: 255000,
      proyecciones: {
        2025: 10,
        2026: 10,
        2027: 10,
        2028: 10,
        2029: 10
      }
    },
    crecimientosVenta: {
      2022: 147950,
      2023: 147950,
      2024: 177540,
      2025: 177540,
      2026: 230802,
      2027: 235000,
      2028: 245000,
      2029: 255000,
      proyeccion: 10
    },
    inversiones: {
      2022: 147950,
      2023: 147950,
      2024: 177540,
      2025: 177540,
      2026: 230802,
      2027: 235000,
      2028: 245000,
      2029: 255000,
      proyeccion: 10
    },
    vidaUtilActivos: {
      valor: "10 años"
    },
    estacionalidad: {
      2023: { q1: 63163, q2: 80535, q3: 134500, proj1: 10, proj2: 30 },
      2024: { q1: 63163, q2: 80535, q3: 134500, proj1: 20, proj2: 10, proj3: 30 },
      2025: { q1: 63163, q2: 80535, q3: 134500, proj1: 20, proj2: 10, proj3: 30 },
      2026: { q1: 63163, q2: 80535, q3: 134500, proj1: 20, proj2: 10, proj3: 30 },
      2027: { q1: 63163, q2: 80535, q3: 134500, proj1: 20, proj2: 10, proj3: 30 },
      2028: { q1: 63163, q2: 80535, q3: 134500, proj1: 20, proj2: 10, proj3: 30 },
      2029: { q1: 63163, q2: 80535, q3: 134500, proj1: 20, proj2: 10, proj3: 30 }
    }
  });

  // COMPUTED: Filtrar años y datos basados en selectedYears
  const filteredYearData = useMemo(() => {
    const sortedYears = [...selectedYears].sort();
    return {
      years: sortedYears,
      utilidadValues: sortedYears.map(year => ({
        year,
        value: parameters.utilidad[year as keyof typeof parameters.utilidad] || 0
      })),
      crecimientosValues: sortedYears.map(year => ({
        year,
        value: parameters.crecimientosVenta[year as keyof typeof parameters.crecimientosVenta] || 0
      })),
      inversionesValues: sortedYears.map(year => ({
        year,
        value: parameters.inversiones[year as keyof typeof parameters.inversiones] || 0
      }))
    };
  }, [selectedYears, parameters]);

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
    setParameters(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [parameter]: parseFloat(value) || value
      }
    }));
    onParameterChange(section, parameter, value);
  }, [onParameterChange]);

  if (!isOpen) return null;

  return (
    <div className={`relative rounded-2xl border shadow-[0px_16px_44px_0px_rgba(0,0,0,0.07)] w-[420px] h-full max-h-[calc(100vh-80px)] z-40 ${
      isDarkMode 
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
              <span className={`font-medium text-base ${
                isDarkMode ? 'text-neutral-200' : 'text-neutral-700'
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
                  className={`px-3 py-1 rounded-md text-sm font-semibold ${
                    isDarkMode
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
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${
                  isDarkMode
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
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${
                  isDarkMode
                    ? 'bg-neutral-800 border-[#9e9e9e]'
                    : 'bg-white border-[#e0e0e0]'
                }`}>
                  {/* Headers de años */}
                  <div className={`py-3 border-b-2 border-dashed ${
                    isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                  }`}>
                    <div className="flex justify-between items-center">
                      {filteredYearData.years.map(year => (
                        <div key={year} className="flex-1 text-center">
                          <span className={`text-base font-semibold ${
                            isDarkMode ? 'text-neutral-200' : 'text-neutral-700'
                          }`}>
                            {year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resultado principal */}
                  <div className={`py-3 border-b-2 border-dashed ${
                    isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                  }`}>
                    <div className="flex justify-center">
                      <span className={`text-3xl font-bold ${
                        isDarkMode ? 'text-[#ff2e2e]' : 'text-[#b00020]'
                      }`}>
                        15.376
                      </span>
                    </div>
                  </div>

                  {/* Valores por año */}
                  <div className={`py-3 border-b-2 border-dashed ${
                    isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                  }`}>
                    <div className="flex justify-between items-center">
                      {filteredYearData.utilidadValues.map(({ year, value }) => (
                        <div key={year} className="flex-1 text-center">
                          <span className={`text-base font-semibold ${
                            isDarkMode ? 'text-[#3acfff]' : 'text-[#2e649d]'
                          }`}>
                            {value.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fila PROY con campos editables */}
                  <div className="py-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${
                        isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
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
                        {getProjectionFields.map(year => (
                          <EditableField
                            key={`proy-${year}`}
                            value={parameters.utilidad.proyecciones[year as keyof typeof parameters.utilidad.proyecciones] || 10}
                            onChange={(value) => handleParameterChange('utilidad', `proy${year}`, value)}
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

            {/* Sección CRECIMIENTOS DE VENTA */}
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('crecimientosVenta')}
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${
                  isDarkMode
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
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${
                  isDarkMode
                    ? 'bg-neutral-800 border-[#9e9e9e]'
                    : 'bg-white border-[#e0e0e0]'
                }`}>
                  {/* Headers de años */}
                  <div className={`py-3 border-b-2 border-dashed ${
                    isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                  }`}>
                    <div className="flex justify-between items-center">
                      {filteredYearData.years.map(year => (
                        <div key={year} className="flex-1 text-center">
                          <span className={`text-base font-semibold ${
                            isDarkMode ? 'text-neutral-200' : 'text-neutral-700'
                          }`}>
                            {year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Valores por año */}
                  <div className={`py-3 border-b-2 border-dashed ${
                    isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                  }`}>
                    <div className="flex justify-between items-center">
                      {filteredYearData.crecimientosValues.map(({ year, value }) => (
                        <div key={year} className="flex-1 text-center">
                          <span className={`text-base font-semibold ${
                            isDarkMode ? 'text-[#3acfff]' : 'text-[#2e649d]'
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
                      <span className={`text-sm font-medium ${
                        isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
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
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${
                  isDarkMode
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
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${
                  isDarkMode
                    ? 'bg-neutral-800 border-[#9e9e9e]'
                    : 'bg-white border-[#e0e0e0]'
                }`}>
                  {/* Headers de años */}
                  <div className={`py-3 border-b-2 border-dashed ${
                    isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                  }`}>
                    <div className="flex justify-between items-center">
                      {filteredYearData.years.map(year => (
                        <div key={year} className="flex-1 text-center">
                          <span className={`text-base font-semibold ${
                            isDarkMode ? 'text-neutral-200' : 'text-neutral-700'
                          }`}>
                            {year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Valores por año */}
                  <div className={`py-3 border-b-2 border-dashed ${
                    isDarkMode ? 'border-neutral-600' : 'border-neutral-300'
                  }`}>
                    <div className="flex justify-between items-center">
                      {filteredYearData.inversionesValues.map(({ year, value }) => (
                        <div key={year} className="flex-1 text-center">
                          <span className={`text-base font-semibold ${
                            isDarkMode ? 'text-[#3acfff]' : 'text-[#2e649d]'
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
                      <span className={`text-sm font-medium ${
                        isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
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
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${
                  isDarkMode
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
                <div className={`rounded-xl border shadow-sm p-5 ${
                  isDarkMode
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
                className={`w-full text-white rounded-lg p-4 flex items-center justify-between transition-colors ${
                  isDarkMode
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
                <div className={`rounded-xl border shadow-sm p-5 space-y-4 ${
                  isDarkMode
                    ? 'bg-neutral-800 border-[#9e9e9e]'
                    : 'bg-white border-[#e0e0e0]'
                }`}>
                  <div className={`text-center text-sm ${
                    isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    Configuración de estacionalidad para {selectedYears.length} año{selectedYears.length !== 1 ? 's' : ''}
                  </div>
                  
                  {/* Botón de configuración */}
                  <div className="flex justify-center">
                    <button className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isDarkMode
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
                  <span className={`font-medium text-base ${
                    isDarkMode ? 'text-neutral-200' : 'text-neutral-700'
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
              
              <div className={`text-center text-sm py-8 ${
                isDarkMode ? 'text-neutral-500' : 'text-neutral-600'
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