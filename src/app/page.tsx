"use client"
import { useState, useCallback, useEffect, useMemo } from 'react';
import { BarChart, TrendingUp, DollarSign, PieChart } from 'lucide-react';
import { CarouselSection } from '../components/CarouselSection';
import { FinancialCard } from '../components/FinancialCard';
import { GlobalYearSelector } from '../components/GlobalYearSelector';
import { ModeChanger } from '../components/ModeChanger';
import { NotificationIcon } from '../components/NotificationIcon';
import { UserDropdown } from '../components/UserDropdown';
import { SectionFilter } from '../components/SectionFilter';
import { Sidebar } from '../components/Sidebar';
import { DnDProviderWrapper } from '../components/DnDProvider';
import ExpandIcon from '../imports/ExpandIcon';
import svgPaths from "../imports/svg-kyrm2ff689";
import svgPathsDark from "../imports/svg-ec6iy79qbc";


// Sample data for the financial cards
const mockFinancialData = {
  dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
  values: [147950, 147950, 177540, 177540, 230802, 235000, 245000, 255000],
  result: 15376
};

// Additional sample data for variety - DEFAULT FALLBACK
const mockData2Default = {
  dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
  values: ["cargando", "cargando", "cargando", "cargando", "cargando", "cargando", "cargando", "cargando"],
  result: "cargando"
};

const mockData3 = {
  dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
  values: [95000, 105000, 115000, 125000, 135000, 145000, 155000, 165000],
  result: 12500
};

const mockData4 = {
  dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
  values: [110000, 125000, 140000, 155000, 170000, 185000, 200000, 215000],
  result: 16750
};

const mockData5 = {
  dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
  values: [85000, 95000, 105000, 115000, 125000, 135000, 145000, 155000],
  result: 11200
};

const mockData6 = {
  dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
  values: [75000, 85000, 95000, 105000, 115000, 125000, 135000, 145000],
  result: 10300
};

const mockData7 = {
  dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
  values: [130000, 145000, 160000, 175000, 190000, 205000, 220000, 235000],
  result: 19500
};

const mockData8 = {
  dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
  values: [100000, 115000, 130000, 145000, 160000, 175000, 190000, 205000],
  result: 14800
};

const mockData9 = {
  dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
  values: [90000, 100000, 110000, 120000, 130000, 140000, 150000, 160000],
  result: 13200
};

// Define section filter states
interface SectionFilters {
  selectedYears: string[];
  selectedCategories: string[];
}

type SectionKey = 'crecimiento' | 'riesgo' | 'flujo' | 'rentabilidad';



// Updated year ranges - 1 año now starts from 2025, matching GlobalYearSelector
const YEAR_RANGES = [
  {
    id: 'short',
    label: '1 año',
    years: ['2025']
  },
  {
    id: 'two-year',
    label: '2 años',
    years: ['2024', '2025']
  },
  {
    id: 'medium',
    label: '3 años',
    years: ['2024', '2025', '2026']
  },
  {
    id: 'standard',
    label: '4 años',
    years: ['2024', '2025', '2026', '2027']
  },
  {
    id: 'extended',
    label: '5 años',
    years: ['2024', '2025', '2026', '2027', '2028']
  },
  {
    id: 'comprehensive',
    label: '6 años',
    years: ['2024', '2025', '2026', '2027', '2028', '2029']
  }
];

export default function App() {
  // Estado para datos de utilidad - start with null to avoid showing stale data
  const [utilidadData, setUtilidadData] = useState<any>(null);
  const [isLoadingUtilidad, setIsLoadingUtilidad] = useState(true);

  // Global parameter states (shared between Sidebar and main page)
  const [globalParameters, setGlobalParameters] = useState({
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

  // Loading states for global parameters
  const [isLoadingGlobalParametros, setIsLoadingGlobalParametros] = useState(true);
  const [isLoadingFormulas, setIsLoadingFormulas] = useState(true);

  // Projection formulas state
  const [projectionFormulas, setProjectionFormulas] = useState<{ [year: string]: string }>({});

  // Dynamic mockData2 that gets replaced by API data
  const mockData2 = useMemo(() => {
    return utilidadData || mockData2Default;
  }, [utilidadData]);

  // Debug effect to track utilidadData changes
  useEffect(() => {
    console.log('utilidadData state changed:', utilidadData);
    console.log('mockData2 (dynamic) state changed:', mockData2);
    console.log('isLoadingUtilidad:', isLoadingUtilidad);
  }, [utilidadData, mockData2, isLoadingUtilidad]);

  const fetchUtilidadData = async () => {
    try {
      console.log('Fetching utilidad data...');
      setIsLoadingUtilidad(true);

      // Add cache busting and no-cache headers
      const response = await fetch('/api/utilidad?startYear=2022&endYear=2029&formula=utilidad_basica', {
        method: 'GET',
        cache: 'no-store'
      });
      console.log('Response status:', response.status);

      if (response.ok) {
        const result = await response.json();
        console.log('API response:', result);

        if (result.success && result.data) {
          console.log("Setting utilidad data:", result.data);
          // Set the display data
          setUtilidadData({ ...result.data });

          // Also populate global parameters
          const { dates, values, result: totalResult } = result.data;
          const valuesByYear: { [year: string]: number } = {};
          dates.forEach((year: string, index: number) => {
            valuesByYear[year] = values[index];
          });

          setGlobalParameters(prev => ({
            ...prev,
            utilidad: {
              ...prev.utilidad,
              values: valuesByYear,
              result: totalResult
            }
          }));
        } else {
          console.error('API returned unsuccessful response:', result);
          setUtilidadData(mockData2Default);
        }
      } else {
        console.error('Response not ok:', response.status, response.statusText);
        const errorText = await response.text();
        console.error('Error response body:', errorText);
        setUtilidadData(mockData2Default);
      }
    } catch (error) {
      console.error('Failed to fetch utilidad data:', error);
      setUtilidadData(mockData2Default);
    } finally {
      setIsLoadingUtilidad(false);
      console.log('Finished fetching utilidad data');
    }
  };

  // Fetch projection parameters from API
  const fetchGlobalParametros = useCallback(async () => {
    try {
      setIsLoadingGlobalParametros(true);
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

          setGlobalParameters(prev => ({
            ...prev,
            utilidad: {
              ...prev.utilidad,
              proyecciones: proyecciones
            }
          }));
        }
      }
    } catch (error) {
      console.error('Failed to fetch global parametros data:', error);
    } finally {
      setIsLoadingGlobalParametros(false);
    }
  }, []);

  // Fetch projection formulas from API
  const fetchProjectionFormulas = useCallback(async () => {
    try {
      setIsLoadingFormulas(true);
      const response = await fetch('/api/formulas?fmls_desc=utilidad_basica_proyeccion');

      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data && result.data.formulas) {
          const formulas: { [year: string]: string } = {};

          result.data.formulas.forEach((formula: any) => {
            if (formula.fmls_ano) {
              formulas[formula.fmls_ano.toString()] = formula.fmls_body;
            }
          });

          setProjectionFormulas(formulas);
        }
      }
    } catch (error) {
      console.error('Failed to fetch projection formulas:', error);
    } finally {
      setIsLoadingFormulas(false);
    }
  }, []);


  // Fetch utilidad data on mount
  useEffect(() => {
    fetchUtilidadData();
    fetchGlobalParametros();
    fetchProjectionFormulas();
  }, [fetchGlobalParametros, fetchProjectionFormulas]);

  // Estados principales
  const [sectionStates, setSectionStates] = useState({
    crecimiento: false,
    riesgo: false,
    flujo: false,
    rentabilidad: false
  });

  // Updated default to 4 years (2024-2027) - keeping the standard recommendation
  const [globalSelectedYears, setGlobalSelectedYears] = useState<string[]>(['2024', '2025', '2026', '2027']);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);
  const [notificationCount, setNotificationCount] = useState(3);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // Estado del sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Estados para los parámetros que afectan las cards
  const [financialParameters, setFinancialParameters] = useState({
    utilidad: {
      multiplicador: 1,
      crecimiento: 0
    },
    crecimientosVenta: {
      porcentaje: 10
    },
    inversiones: {
      porcentaje: 10
    }
  });

  // Updated section filters to match new year range
  const [sectionFilters, setSectionFilters] = useState<Record<SectionKey, SectionFilters>>({
    crecimiento: {
      selectedYears: ['2024', '2025', '2026', '2027'],
      selectedCategories: []
    },
    riesgo: {
      selectedYears: ['2024', '2025', '2026', '2027'],
      selectedCategories: []
    },
    flujo: {
      selectedYears: ['2024', '2025', '2026', '2027'],
      selectedCategories: []
    },
    rentabilidad: {
      selectedYears: ['2024', '2025', '2026', '2027'],
      selectedCategories: []
    }
  });

  const [filterModal, setFilterModal] = useState<{
    isOpen: boolean;
    section: SectionKey | null;
  }>({
    isOpen: false,
    section: null
  });

  // Estados para el orden de las cards en cada sección - usando IDs en lugar de React elements
  const [cardOrders, setCardOrders] = useState<Record<SectionKey, string[]>>({
    crecimiento: [],
    riesgo: [],
    flujo: [],
    rentabilidad: []
  });

  // Función para calcular el valor de la empresa basado en los años seleccionados
  const calculateCompanyValue = useCallback((selectedYears: string[]): number => {
    const baseValue = 7506;
    const yearMultiplier = selectedYears.length * 0.15; // 15% adicional por cada año
    const futureYearsBonus = selectedYears.filter(year => parseInt(year) > 2025).length * 0.25; // 25% adicional por años futuros

    return Math.round(baseValue * (1 + yearMultiplier + futureYearsBonus));
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
    return globalParameters.utilidad.values[year] || 0;
  }, [globalParameters.utilidad.values]);

  // Function to evaluate projection formula (utilidad_basica * param)
  const evaluateProjection = useCallback((year: string): number => {
    const baseValue = getBaseValue(year);

    // Each year uses only its specific parameter, but formula can use fallback
    const paramValue = globalParameters.utilidad.proyecciones[year];
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

      // Use eval for simple mathematical expressions
      const result = eval(evaluatedFormula);
      return Math.round(result);
    } catch (error) {
      console.error('Main page formula evaluation error:', error);
      return baseValue;
    }
  }, [getBaseValue, globalParameters.utilidad.proyecciones, projectionFormulas, getLatestAvailable]);

  // Función para aplicar parámetros a los datos
  const applyParametersToData = useCallback((originalData: any) => {
    const multiplier = 1 + (financialParameters.utilidad.crecimiento / 100);
    const growthFactor = financialParameters.crecimientosVenta.porcentaje / 100;

    // For utilidad data (mockData2), apply projections only to years with specific parameters
    if (originalData === mockData2 && globalParameters.utilidad.values && Object.keys(globalParameters.utilidad.values).length > 0) {
      return {
        ...originalData,
        values: originalData.values.map((value: any, index: number) => {
          const year = originalData.dates[index];
          // Show loading state
          if (typeof value === 'string' && value === 'cargando') {
            return 'cargando';
          }

          // Only apply projection if this year has a specific parameter
          // Otherwise, use BASE value (no projection)
          const hasParameter = globalParameters.utilidad.proyecciones[year];
          if (hasParameter) {
            // This year has a parameter, so use projection
            return evaluateProjection(year) || globalParameters.utilidad.values[year] || value;
          } else {
            // This year has NO parameter, so use BASE value only
            return globalParameters.utilidad.values[year] || value;
          }
        }),
        result: Object.keys(globalParameters.utilidad.values).reduce((sum, year) => {
          const hasParameter = globalParameters.utilidad.proyecciones[year];
          if (hasParameter) {
            return sum + evaluateProjection(year);
          } else {
            return sum + (globalParameters.utilidad.values[year] || 0);
          }
        }, 0)
      };
    }

    // Apply parameters to other financial data (not utilidad)
    return {
      ...originalData,
      values: originalData.values.map((value: number, index: number) => {
        if (typeof value === 'string') return value;
        // Aplicar crecimiento progresivo según los parámetros
        const year = parseInt(originalData.dates[index]);
        const yearGrowth = year > 2025 ? growthFactor : 0; // Solo aplicar a años futuros
        return Math.round(value * multiplier * (1 + yearGrowth));
      }),
      result: Math.round(originalData.result * multiplier)
    };
  }, [financialParameters, globalParameters.utilidad.values, evaluateProjection]);

  // Function to get titles for cards
  const getTitleForCard = useCallback((keyPrefix: string, index: number): string => {
    const titles = {
      crecimiento: [
        "VALOR PATRIMONIO", "UTILIDAD", "EBITDA", "INTERESES A OPERACIONAL",
        "VALOR DEUDA", "CRECIMIENTO PATRIMONIO", "CREACIÓN DE VALOR",
        "RENTABILIDAD PATRIMONIO", "RENTABILIDAD CAPITAL"
      ],
      riesgo: [
        "LIQUIDEZ CORRIENTE", "PRUEBA ÁCIDA", "ROTACIÓN INVENTARIOS",
        "DÍAS COBRANZA", "ENDEUDAMIENTO TOTAL", "COBERTURA INTERESES",
        "APALANCAMIENTO", "MARGEN BRUTO", "MARGEN OPERACIONAL"
      ],
      flujo: ["FLUJO OPERACIONAL", "FLUJO INVERSIÓN", "FLUJO FINANCIAMIENTO"],
      rentabilidad: ["ROE PROMEDIO", "ROE OPERACIONAL", "ROE AJUSTADO"]
    };
    return titles[keyPrefix as keyof typeof titles]?.[index] || `${keyPrefix.toUpperCase()} ${index + 1}`;
  }, []);

  const getAvailableCategories = useCallback((section: SectionKey): string[] => {
    const titles = {
      crecimiento: [
        "VALOR PATRIMONIO", "UTILIDAD", "EBITDA", "INTERESES A OPERACIONAL",
        "VALOR DEUDA", "CRECIMIENTO PATRIMONIO", "CREACIÓN DE VALOR",
        "RENTABILIDAD PATRIMONIO", "RENTABILIDAD CAPITAL"
      ],
      riesgo: [
        "LIQUIDEZ CORRIENTE", "PRUEBA ÁCIDA", "ROTACIÓN INVENTARIOS",
        "DÍAS COBRANZA", "ENDEUDAMIENTO TOTAL", "COBERTURA INTERESES",
        "APALANCAMIENTO", "MARGEN BRUTO", "MARGEN OPERACIONAL"
      ],
      flujo: ["FLUJO OPERACIONAL", "FLUJO INVERSIÓN", "FLUJO FINANCIAMIENTO"],
      rentabilidad: ["ROE PROMEDIO", "ROE OPERACIONAL", "ROE AJUSTADO"]
    };
    return titles[section] || [];
  }, []);

  // Function to compare arrays
  const arraysEqual = useCallback((a: string[], b: string[]) => {
    return a.length === b.length && a.every((val, i) => val === b[i]);
  }, []);

  // Function to get the analysis type title based on selected years - UPDATED for simple year count
  const getAnalysisTypeTitle = useCallback((selectedYears: string[]): string => {
    const matchingRange = YEAR_RANGES.find(range =>
      arraysEqual(range.years, selectedYears)
    );

    if (matchingRange) {
      return matchingRange.label;
    } else {
      // For custom selections, use simple year count format
      return `${selectedYears.length} año${selectedYears.length !== 1 ? 's' : ''} (personalizado)`;
    }
  }, [arraysEqual]);

  // Dynamic SECTION_DATA with utilidadData
  const SECTION_DATA = useMemo(() => ({
    crecimiento: [
      mockFinancialData, mockData2, mockData3, mockFinancialData, mockData2,
      mockData3, mockFinancialData, mockData4, mockData5
    ],
    riesgo: [
      mockFinancialData, mockData2, mockData3, mockData4, mockData5,
      mockData6, mockData7, mockData8, mockData9
    ],
    flujo: [mockFinancialData, mockData2, mockData3],
    rentabilidad: [mockData3, mockData4, mockData5]
  }), [mockData2]);

  // Memoized filtered cards to prevent recreation on every render
  const createCardData = useCallback((dataArray: any[], keyPrefix: string, sectionKey: SectionKey) => {
    const filters = sectionFilters[sectionKey];
    const availableCategories = getAvailableCategories(sectionKey);

    const categoriesToShow = filters.selectedCategories.length === 0
      ? availableCategories
      : filters.selectedCategories;

    // Usar años de la sección si están definidos, sino usar los globales
    const yearsToUse = filters.selectedYears.length > 0 ? filters.selectedYears : globalSelectedYears;

    return dataArray
      .map((data, index) => ({
        id: `${keyPrefix}-${index}`,
        data: applyParametersToData(data),
        index,
        title: getTitleForCard(keyPrefix, index)
      }))
      .filter(({ title }) => categoriesToShow.includes(title));
  }, [sectionFilters, globalSelectedYears, applyParametersToData, getTitleForCard, getAvailableCategories]);

  // Memoized card data for each section
  const crecimientoCardData = useMemo(() =>
    createCardData(SECTION_DATA.crecimiento, 'crecimiento', 'crecimiento'),
    [createCardData, SECTION_DATA.crecimiento]
  );

  const riesgoCardData = useMemo(() =>
    createCardData(SECTION_DATA.riesgo, 'riesgo', 'riesgo'),
    [createCardData, SECTION_DATA.riesgo]
  );

  const flujoCardData = useMemo(() =>
    createCardData(SECTION_DATA.flujo, 'flujo', 'flujo'),
    [createCardData, SECTION_DATA.flujo]
  );

  const rentabilidadCardData = useMemo(() =>
    createCardData(SECTION_DATA.rentabilidad, 'rentabilidad', 'rentabilidad'),
    [createCardData, SECTION_DATA.rentabilidad]
  );

  // Function to create React elements from card data
  const createCardElements = useCallback((cardData: any[], currentOrder: string[]) => {
    // If we have a custom order, use it; otherwise use default order
    const orderedData = currentOrder.length > 0
      ? currentOrder.map(id => cardData.find(item => item.id === id)).filter(Boolean)
      : cardData;

    return orderedData.map(({ id, data, title, index }) => {
      const yearsToUse = sectionFilters[id.split('-')[0] as SectionKey]?.selectedYears.length > 0
        ? sectionFilters[id.split('-')[0] as SectionKey].selectedYears
        : globalSelectedYears;

      return (
        <FinancialCard
          key={id}
          title={title}
          data={data}
          globalSelectedYears={yearsToUse}
        />
      );
    });
  }, [sectionFilters, globalSelectedYears]);

  // Create card elements for each section
  const crecimientoCards = useMemo(() =>
    createCardElements(crecimientoCardData, cardOrders.crecimiento),
    [createCardElements, crecimientoCardData, cardOrders.crecimiento]
  );

  const riesgoCards = useMemo(() =>
    createCardElements(riesgoCardData, cardOrders.riesgo),
    [createCardElements, riesgoCardData, cardOrders.riesgo]
  );

  const flujoCards = useMemo(() =>
    createCardElements(flujoCardData, cardOrders.flujo),
    [createCardElements, flujoCardData, cardOrders.flujo]
  );

  const rentabilidadCards = useMemo(() =>
    createCardElements(rentabilidadCardData, cardOrders.rentabilidad),
    [createCardElements, rentabilidadCardData, cardOrders.rentabilidad]
  );

  // Initialize card orders when card data changes (only once)
  useEffect(() => {
    const newOrders: Record<SectionKey, string[]> = {
      crecimiento: crecimientoCardData.map(item => item.id),
      riesgo: riesgoCardData.map(item => item.id),
      flujo: flujoCardData.map(item => item.id),
      rentabilidad: rentabilidadCardData.map(item => item.id)
    };

    // Only update if orders are empty (initial load)
    setCardOrders(prev => ({
      crecimiento: prev.crecimiento.length === 0 ? newOrders.crecimiento : prev.crecimiento,
      riesgo: prev.riesgo.length === 0 ? newOrders.riesgo : prev.riesgo,
      flujo: prev.flujo.length === 0 ? newOrders.flujo : prev.flujo,
      rentabilidad: prev.rentabilidad.length === 0 ? newOrders.rentabilidad : prev.rentabilidad,
    }));
  }, []); // Empty dependency array - only run once

  // Event handlers
  const toggleSection = useCallback((section: keyof typeof sectionStates) => {
    setSectionStates(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const handleParameterChange = useCallback((section: string, parameter: string, value: string | number) => {
    console.log(`Global parameter changed: ${section}.${parameter} = ${value}`);

    // Handle utilidad projection parameters
    if (section === 'utilidad' && parameter.includes('proy')) {
      // Extract year from parameter like 'proy2025'
      const year = parameter.replace('proy', '');
      const newProjections = {
        ...globalParameters.utilidad.proyecciones,
        [year]: typeof value === 'string' ? parseFloat(value) || 10 : value
      };

      console.log('Updated global proyecciones:', newProjections);

      setGlobalParameters(prev => ({
        ...prev,
        utilidad: {
          ...prev.utilidad,
          proyecciones: newProjections
        }
      }));
    }
    // Handle other financial parameters (keep existing functionality)
    else if (section === 'crecimientosVenta') {
      setFinancialParameters(prev => ({
        ...prev,
        crecimientosVenta: {
          porcentaje: Number(value)
        }
      }));
    } else if (section === 'inversiones') {
      setFinancialParameters(prev => ({
        ...prev,
        inversiones: {
          porcentaje: Number(value)
        }
      }));
    }
  }, [globalParameters.utilidad.proyecciones]);

  // HANDLER ACTUALIZADO para manejar el cambio de años globales
  const handleGlobalYearsChange = useCallback((years: string[]) => {
    setGlobalSelectedYears(years);

    // Actualizar también los filtros de todas las secciones para sincronizar
    setSectionFilters(prev => ({
      crecimiento: { ...prev.crecimiento, selectedYears: years },
      riesgo: { ...prev.riesgo, selectedYears: years },
      flujo: { ...prev.flujo, selectedYears: years },
      rentabilidad: { ...prev.rentabilidad, selectedYears: years }
    }));

    console.log('Global years changed to:', years);
  }, []);

  const handleModeChange = useCallback((isDark: boolean) => {
    setIsDarkMode(isDark);
    console.log('Mode changed to:', isDark ? 'dark' : 'light');

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleNotificationClick = useCallback(() => {
    console.log('Notifications clicked!');
    setHasNotifications(false);
    setNotificationCount(0);

    setTimeout(() => {
      setHasNotifications(true);
      setNotificationCount(Math.floor(Math.random() * 5) + 1);
    }, 10000);
  }, []);

  const handleProfileClick = useCallback(() => {
    setIsUserDropdownOpen(prev => !prev);
  }, []);

  const handleUserDropdownClose = useCallback(() => {
    setIsUserDropdownOpen(false);
  }, []);

  const handleFilterClick = useCallback((section: SectionKey) => {
    setFilterModal({
      isOpen: true,
      section: section
    });
  }, []);

  const handleFilterClose = useCallback(() => {
    setFilterModal({
      isOpen: false,
      section: null
    });
  }, []);

  const handleApplyFilters = useCallback((years: string[], categories: string[]) => {
    if (filterModal.section) {
      setSectionFilters(prev => ({
        ...prev,
        [filterModal.section!]: {
          selectedYears: years,
          selectedCategories: categories
        }
      }));
      console.log(`Applied filters for ${filterModal.section}:`, { years, categories });
    }
  }, [filterModal.section]);

  const getSectionTitle = useCallback((section: SectionKey | null): string => {
    const titles = {
      crecimiento: "CRECIMIENTO SOSTENIBLE",
      riesgo: "RIESGO FINANCIERO",
      flujo: "FLUJO DE EFECTIVO",
      rentabilidad: "RENTABILIDAD DEL PATRIMONIO"
    };
    return section ? titles[section] : "";
  }, []);

  // Updated reorder handlers to work with IDs
  const handleCrecimientoReorder = useCallback((newOrder: React.ReactNode[]) => {
    // Extract IDs from the React elements
    const newOrderIds = newOrder.map((element: any) => element.key);
    setCardOrders(prev => ({
      ...prev,
      crecimiento: newOrderIds
    }));
    console.log('Cards reordered in Crecimiento Sostenible section');
  }, []);

  const handleRiesgoReorder = useCallback((newOrder: React.ReactNode[]) => {
    const newOrderIds = newOrder.map((element: any) => element.key);
    setCardOrders(prev => ({
      ...prev,
      riesgo: newOrderIds
    }));
    console.log('Cards reordered in Riesgo Financiero section');
  }, []);

  const handleFlujoReorder = useCallback((newOrder: React.ReactNode[]) => {
    const newOrderIds = newOrder.map((element: any) => element.key);
    setCardOrders(prev => ({
      ...prev,
      flujo: newOrderIds
    }));
    console.log('Cards reordered in Flujo de Efectivo section');
  }, []);

  const handleRentabilidadReorder = useCallback((newOrder: React.ReactNode[]) => {
    const newOrderIds = newOrder.map((element: any) => element.key);
    setCardOrders(prev => ({
      ...prev,
      rentabilidad: newOrderIds
    }));
    console.log('Cards reordered in Rentabilidad del Patrimonio section');
  }, []);



  // Calcular valor de empresa dinámicamente
  const companyValue = useMemo(() => calculateCompanyValue(globalSelectedYears), [calculateCompanyValue, globalSelectedYears]);

  // Get the analysis type title for the current selection
  const analysisTypeTitle = useMemo(() => getAnalysisTypeTitle(globalSelectedYears), [getAnalysisTypeTitle, globalSelectedYears]);

  // Componente mejorado para el icono hamburguesa
  const HamburgerIcon = useCallback(() => (
    <div className="h-6 w-6 flex items-center justify-center">
      <svg className="block w-5 h-4" fill="none" viewBox="0 0 20 16">
        <g>
          <line
            stroke={isDarkMode ? "#3ABE76" : "#1A6E31"}
            strokeLinecap="round"
            strokeWidth="2"
            x1="1"
            x2="19"
            y1="2"
            y2="2"
          />
          <line
            stroke={isDarkMode ? "#3ABE76" : "#1A6E31"}
            strokeLinecap="round"
            strokeWidth="2"
            x1="1"
            x2="19"
            y1="8"
            y2="8"
          />
          <line
            stroke={isDarkMode ? "#3ABE76" : "#1A6E31"}
            strokeLinecap="round"
            strokeWidth="2"
            x1="1"
            x2="19"
            y1="14"
            y2="14"
          />
        </g>
      </svg>
    </div>
  ), [isDarkMode]);

  return (
    <DnDProviderWrapper>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}
        style={{ backgroundColor: isDarkMode ? '#0d0f0f' : '#f5f5f5', overflow: 'visible' }}>

        {/* Layout principal con flex */}
        <div className="flex min-h-screen relative" style={{ overflow: 'visible' }}>

          {/* Sidebar mejorado - COMPLETAMENTE sin cortes */}
          <div className={`sidebar-container transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-[420px]' : 'w-0'
            } flex-shrink-0 relative z-40`} style={{ overflow: 'visible' }}>
            <div className={`absolute inset-0 ${isSidebarOpen ? 'visible' : 'invisible'}`} style={{ overflow: 'visible' }}>
              <div className="h-full w-full p-4" style={{ overflow: 'visible', position: 'relative' }}>
                <Sidebar
                  isOpen={isSidebarOpen}
                  onToggle={toggleSidebar}
                  onParameterChange={handleParameterChange}
                  selectedYears={globalSelectedYears}
                  isDarkMode={isDarkMode}
                  globalParameters={globalParameters}
                  projectionFormulas={projectionFormulas}
                  isLoadingGlobalParametros={isLoadingGlobalParametros}
                  isLoadingFormulas={isLoadingFormulas}
                />
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="flex-1 min-h-screen relative">
            {/* Background decoration elements */}
            <div
              className="absolute flex h-[1307.894px] items-center justify-center top-[-484px] w-[1411.386px] z-0"
              style={{ left: "calc(50% - 705px)" }}
            >
              <div className="flex-none rotate-[27.694deg]">
                <div className="h-[884px] relative w-[1130px]">
                  <div className="absolute bottom-[-21.619%] left-[-16.913%] right-[-16.913%] top-[-21.619%]">
                    <svg className="block size-full" fill="none" viewBox="0 0 1514 1268">
                      <g filter="url(#filter0_f_1_79956)">
                        <ellipse
                          cx="757"
                          cy="634"
                          fill="#15803D"
                          fillOpacity="0.14"
                          rx="565"
                          ry="442"
                        />
                      </g>
                      <defs>
                        <filter
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                          height="1266.23"
                          id="filter0_f_1_79956"
                          width="1512.23"
                          x="0.884888"
                          y="0.884888"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            mode="normal"
                            result="shape"
                          />
                          <feGaussianBlur
                            result="effect1_foregroundBlur_1_79956"
                            stdDeviation="95.5576"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenedor principal con padding mejorado */}
            <div className="w-full h-full flex justify-center">
              <div className="w-full max-w-[1400px] min-h-screen relative px-4 sm:px-6 lg:px-8">

                {/* Layout interno mejorado */}
                <div className="flex gap-3 sm:gap-4 lg:gap-6 h-full relative z-10 py-4 sm:py-6 lg:py-8">

                  {/* BOTÓN TOGGLE - SOLO VISIBLE CUANDO SIDEBAR ESTÁ CERRADO */}
                  {!isSidebarOpen && (
                    <div className="flex-shrink-0 flex items-start pt-2">
                      <button
                        onClick={toggleSidebar}
                        className="sidebar-toggle-clean relative h-12 w-12 sm:h-14 sm:w-14 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center z-50 group"
                        style={{
                          backgroundColor: isDarkMode ? 'rgba(115,115,115,0.9)' : 'rgba(247,249,250,0.95)',
                          border: `2px solid ${isDarkMode ? '#3ABE76' : '#1A6E31'}20`
                        }}
                        aria-label="Abrir panel de parámetros"
                      >

                        {/* Contenedor del icono hamburguesa */}
                        <div className="sidebar-toggle-icon-enhanced relative">
                          <div className="transform transition-all duration-300 hover:scale-110">
                            <HamburgerIcon />
                          </div>
                        </div>

                        {/* Tooltip para abrir */}
                        <div className="absolute left-full ml-3 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-100"
                          style={{
                            backgroundColor: isDarkMode ? 'rgba(34,33,38,0.95)' : 'rgba(255,255,255,0.95)',
                            color: isDarkMode ? '#ffffff' : '#404040',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                          }}>
                          Abrir parámetros
                          {/* Flecha del tooltip */}
                          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent"
                            style={{
                              borderRightColor: isDarkMode ? 'rgba(34,33,38,0.95)' : 'rgba(255,255,255,0.95)'
                            }} />
                        </div>
                      </button>
                    </div>
                  )}

                  {/* Contenido principal - ajustar padding cuando sidebar está abierto */}
                  <div className={`flex-1 flex flex-col gap-6 sm:gap-8 lg:gap-10 min-w-0 transition-all duration-300 ${isSidebarOpen ? 'pl-0' : 'pl-0'
                    }`}>

                    {/* Header con título y controles */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                      {/* Título */}
                      <div className="min-w-0">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium truncate"
                          style={{ color: isDarkMode ? '#ffffff' : '#404040' }}>
                          Dashboard FI
                        </h1>
                        <p className="text-lg sm:text-xl text-[#adadad] mt-1">Cliente</p>
                      </div>

                      {/* CONTROLES DEL HEADER - TODOS VISIBLES */}
                      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">

                        {/* MODE CHANGER - VISIBLE Y FUNCIONAL */}
                        <ModeChanger onModeChange={handleModeChange} />

                        {/* NOTIFICATION ICON - VISIBLE CON BADGE */}
                        <NotificationIcon
                          hasNotifications={hasNotifications}
                          notificationCount={notificationCount}
                          onClick={handleNotificationClick}
                          isDarkMode={isDarkMode}
                        />

                        {/* PERFIL DE USUARIO - VISIBLE CON DROPDOWN */}
                        <div className="relative">
                          <div
                            className="profile-button w-12 h-12 rounded-lg bg-center bg-cover bg-no-repeat cursor-pointer border-2 border-transparent hover:border-gray-300"
                            style={{ backgroundImage: `url('/a1.png')` }}
                            onClick={handleProfileClick}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleProfileClick();
                              }
                            }}
                            aria-expanded={isUserDropdownOpen}
                            aria-haspopup="menu"
                            aria-label="Abrir menú de usuario"
                          />

                          <UserDropdown
                            isOpen={isUserDropdownOpen}
                            onClose={handleUserDropdownClose}
                            userName="José Rodríguez"
                            userRole="Administrador"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SELECTOR DE AÑOS DINÁMICO Y VALOR EMPRESA - RESPONSIVE */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6">

                      {/* NUEVO SELECTOR DE AÑOS DINÁMICO */}
                      <div className="flex-1 lg:min-w-[400px] lg:max-w-[600px]">
                        <GlobalYearSelector
                          selectedYears={globalSelectedYears}
                          onYearsChange={handleGlobalYearsChange}
                          isDarkMode={isDarkMode}
                        />
                      </div>

                      {/* VALOR EMPRESA - MISMO PADDING QUE EL SELECTOR (p-4) */}
                      <div className="rounded-2xl p-4 border-2 flex-shrink-0"
                        style={{
                          backgroundColor: isDarkMode ? 'rgba(115,115,115,0.4)' : '#f7f9fa',
                          borderColor: isDarkMode ? '#f2f2f2' : '#d0d5dd'
                        }}>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold whitespace-nowrap"
                            style={{ color: isDarkMode ? '#ffffff' : '#404040' }}>
                            Valor empresa
                          </h3>
                          <span className="text-base sm:text-lg lg:text-xl font-semibold"
                            style={{ color: isDarkMode ? '#3ABE76' : '#1A6E31' }}>
                            {companyValue.toLocaleString('es-ES')}
                          </span>
                        </div>
                        <div className="mt-1 space-y-1">
                          <span className="text-xs sm:text-sm"
                            style={{ color: isDarkMode ? '#adadad' : '#9d9292' }}>
                            {analysisTypeTitle}
                          </span>
                          {/* Data source indicator */}
                          <div className="text-xs" style={{ color: isDarkMode ? '#666' : '#999' }}>
                            {isLoadingUtilidad ? (
                              '⏳ Cargando datos...'
                            ) : utilidadData ? (
                              '✅ Datos API cargados - Todas las tarjetas actualizadas'
                            ) : (
                              '⚠️ Usando datos de prueba'
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Financial Sections */}
                    <div className="space-y-6 sm:space-y-8 lg:space-y-10">

                      <CarouselSection
                        title="CRECIMIENTO SOSTENIBLE"
                        icon={
                          <div className="relative shrink-0 size-8">
                            <svg className="block size-full" fill="none" viewBox="0 0 32 32">
                              <path
                                d={svgPathsDark.p20c62f00}
                                fill={isDarkMode ? "white" : "#404040"}
                              />
                            </svg>
                          </div>
                        }
                        isExpanded={sectionStates.crecimiento}
                        onToggleExpansion={() => toggleSection('crecimiento')}
                        onReorderCards={handleCrecimientoReorder}
                        onFilterClick={() => handleFilterClick('crecimiento')}
                        isDarkMode={isDarkMode}
                      >
                        {crecimientoCards}
                      </CarouselSection>

                      <CarouselSection
                        title="RIESGO FINANCIERO"
                        icon={
                          <div className="relative shrink-0 size-8">
                            <svg className="block size-full" fill="none" viewBox="0 0 32 32">
                              <path
                                d={svgPathsDark.p5d83c80}
                                fill={isDarkMode ? "white" : "#404040"}
                              />
                            </svg>
                          </div>
                        }
                        isExpanded={sectionStates.riesgo}
                        onToggleExpansion={() => toggleSection('riesgo')}
                        onReorderCards={handleRiesgoReorder}
                        onFilterClick={() => handleFilterClick('riesgo')}
                        isDarkMode={isDarkMode}
                      >
                        {riesgoCards}
                      </CarouselSection>

                      <CarouselSection
                        title="FLUJO DE EFECTIVO"
                        icon={
                          <div className="relative shrink-0 size-8">
                            <svg className="block size-full" fill="none" viewBox="0 0 32 32">
                              <path
                                d={svgPathsDark.p266f0a80}
                                fill={isDarkMode ? "white" : "#404040"}
                              />
                            </svg>
                          </div>
                        }
                        isExpanded={sectionStates.flujo}
                        onToggleExpansion={() => toggleSection('flujo')}
                        onReorderCards={handleFlujoReorder}
                        onFilterClick={() => handleFilterClick('flujo')}
                        isDarkMode={isDarkMode}
                      >
                        {flujoCards}
                      </CarouselSection>

                      <CarouselSection
                        title="RENTABILIDAD DEL PATRIMONIO"
                        icon={
                          <div className="relative shrink-0 size-8">
                            <svg className="block size-full" fill="none" viewBox="0 0 32 32">
                              <path
                                d={svgPathsDark.p9a70c80}
                                fill={isDarkMode ? "white" : "#404040"}
                              />
                            </svg>
                          </div>
                        }
                        isExpanded={sectionStates.rentabilidad}
                        onToggleExpansion={() => toggleSection('rentabilidad')}
                        onReorderCards={handleRentabilidadReorder}
                        onFilterClick={() => handleFilterClick('rentabilidad')}
                        isDarkMode={isDarkMode}
                      >
                        {rentabilidadCards}
                      </CarouselSection>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Modal - Updated with new year range */}
        <SectionFilter
          isOpen={filterModal.isOpen}
          onClose={handleFilterClose}
          sectionTitle={getSectionTitle(filterModal.section)}
          availableYears={['2024', '2025', '2026', '2027', '2028', '2029']}
          availableCategories={filterModal.section ? getAvailableCategories(filterModal.section) : []}
          selectedYears={filterModal.section ? sectionFilters[filterModal.section].selectedYears : []}
          selectedCategories={filterModal.section ? sectionFilters[filterModal.section].selectedCategories : []}
          onApplyFilters={handleApplyFilters}
        />
      </div>
    </DnDProviderWrapper>
  );
}