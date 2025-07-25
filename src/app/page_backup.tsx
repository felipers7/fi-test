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

// Tipo unificado para los datos de las tarjetas financieras
interface FinancialCardData {
  id: string;
  title: string;
  data: {
    dates: string[];
    result: number | string;
    // Tres filas de datos conceptualmente claras (8 valores cada una = 24 valores total)
    presupuestadoValues: (number | string)[]; // Fila 1 - Valores presupuestados
    realValues: (number | string)[]; // Fila 2 - Valores reales/base
    proyectadoValues?: (number | string)[]; // Fila 3 - Valores proyectados (opcional)
  };
}

// Helper function to convert card title to formula name (snake_case)
const titleToFormulaName = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
};

// Service to fetch card data from API
const fetchCardData = async (title: string, startYear: number = 2022, endYear: number = 2029): Promise<any> => {
  try {
    const formulaName = titleToFormulaName(title);
    console.log(`Fetching data for card "${title}" using formula "${formulaName}"`);

    const response = await fetch(`/api/datos?startYear=${startYear}&endYear=${endYear}&formula=${formulaName}`, {
      method: 'GET',
      cache: 'no-store'
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success && result.data) {
        return {
          dates: result.data.dates || [],
          values: result.data.values || [],
          result: result.data.result || 0,
          warning: result.data.warning || null
        };
      }
    }

    // Return fallback data with -1 values on error
    const years = [];
    const failedValues = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year.toString());
      failedValues.push(-1);
    }

    return {
      dates: years,
      values: failedValues,
      result: -1,
      warning: `Failed to fetch data for ${title}`
    };
  } catch (error) {
    console.error(`Error fetching data for ${title}:`, error);

    // Return fallback data with -1 values on error
    const years = [];
    const failedValues = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year.toString());
      failedValues.push(-1);
    }

    return {
      dates: years,
      values: failedValues,
      result: -1,
      warning: `Error fetching data for ${title}`
    };
  }
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
  // Estado para datos de todas las tarjetas
  const [cardsData, setCardsData] = useState<{ [cardId: string]: any }>({});
  const [loadingCards, setLoadingCards] = useState<{ [cardId: string]: boolean }>({});

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

  // Projection formulas state - UPDATED: Now stores generic formulas, not year-specific
  const [projectionFormulas, setProjectionFormulas] = useState<{ [formulaType: string]: string }>({});

  // Function to get card data with loading state
  const getCardData = useCallback((cardId: string, title: string) => {
    if (loadingCards[cardId]) {
      return {
        dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
        presupuestadoValues: Array(8).fill(0),
        realValues: Array(8).fill("cargando"),
        proyectadoValues: Array(8).fill("cargando"),
        result: "cargando"
      };
    }

    const apiData = cardsData[cardId];
    if (!apiData) {
      return {
        dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
        presupuestadoValues: Array(8).fill(0),
        realValues: Array(8).fill(-1),
        proyectadoValues: Array(8).fill(-1),
        result: -1
      };
    }

    return {
      dates: apiData.dates || ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
      presupuestadoValues: Array(8).fill(0),
      realValues: apiData.values || Array(8).fill(-1),
      proyectadoValues: apiData.values ? apiData.values.map((v: any) =>
        typeof v === 'string' || v === -1 ? v : Math.round(v * 1.1)
      ) : Array(8).fill(-1),
      result: apiData.result || -1
    };
  }, [cardsData, loadingCards]);

  // Function to fetch data for a specific card
  const loadCardData = useCallback(async (cardId: string, title: string) => {
    setLoadingCards(prev => ({ ...prev, [cardId]: true }));

    try {
      const data = await fetchCardData(title, 2022, 2029);
      setCardsData(prev => ({ ...prev, [cardId]: data }));
    } catch (error) {
      console.error(`Failed to fetch data for card ${cardId}:`, error);
      setCardsData(prev => ({
        ...prev,
        [cardId]: {
          dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
          values: Array(8).fill(-1),
          result: -1,
          warning: 'Failed to load'
        }
      }));
    } finally {
      setLoadingCards(prev => ({ ...prev, [cardId]: false }));
    }
  }, []);

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
        } else {
          console.warn('Parametros API returned unsuccessful response:', result);
        }
      } else {
        console.warn(`Parametros API request failed with status ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.warn('Failed to fetch global parametros data (DB may be offline):', error);
    } finally {
      setIsLoadingGlobalParametros(false);
    }
  }, []);

  // Fetch projection formulas from API - UPDATED: Get generic formulas
  const fetchProjectionFormulas = useCallback(async () => {
    try {
      setIsLoadingFormulas(true);
      const response = await fetch('/api/formulas?fmls_desc=utilidad_basica_proyeccion');

      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data && result.data.formulas) {
          const formulas: { [formulaType: string]: string } = {};

          result.data.formulas.forEach((formula: any) => {
            // Store formulas by description/type, not by year
            if (formula.fmls_desc) {
              formulas[formula.fmls_desc] = formula.fmls_body;
            }
          });

          setProjectionFormulas(formulas);
          console.log('Loaded generic projection formulas:', formulas);
        } else {
          console.warn('Formulas API returned unsuccessful response:', result);
        }
      } else {
        console.warn(`Formulas API request failed with status ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.warn('Failed to fetch projection formulas (DB may be offline):', error);
    } finally {
      setIsLoadingFormulas(false);
    }
  }, []);


  // Initialize card data on mount
  useEffect(() => {
    fetchGlobalParametros();
    fetchProjectionFormulas();

    // Load all cards data
    const allCardTitles = [
      ...["VALOR PATRIMONIO", "UTILIDAD", "EBITDA", "INTERESES A OPERACIONAL", "VALOR DEUDA", "CRECIMIENTO PATRIMONIO", "CREACIÓN DE VALOR", "RENTABILIDAD PATRIMONIO", "RENTABILIDAD CAPITAL"],
      ...["LIQUIDEZ CORRIENTE", "PRUEBA ÁCIDA", "ROTACIÓN INVENTARIOS", "DÍAS COBRANZA", "ENDEUDAMIENTO TOTAL", "COBERTURA INTERESES", "APALANCAMIENTO", "MARGEN BRUTO", "MARGEN OPERACIONAL"],
      ...["FLUJO OPERACIONAL", "FLUJO INVERSIÓN", "FLUJO FINANCIAMIENTO"],
      ...["ROE PROMEDIO", "ROE OPERACIONAL", "ROE AJUSTADO"]
    ];

    allCardTitles.forEach((title, index) => {
      const cardId = `card-${index}`;
      loadCardData(cardId, title);
    });
  }, [fetchGlobalParametros, fetchProjectionFormulas, loadCardData]);

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

  // UPDATED: New projection evaluation using previous year's REAL value as base
  const evaluateProjection = useCallback((currentYear: string): number | string => {
    const currentYearNum = parseInt(currentYear);

    // NEW RULE: Projection only works for 2025 onward
    if (currentYearNum < 2025) {
      return '-'; // Show dash for historical years where projection is impossible
    }

    const previousYear = (currentYearNum - 1).toString();

    // Get the REAL value from previous year as base (not the current year)
    const baseValue = globalParameters.utilidad.values[previousYear] || 0;

    // Get the projection parameter for the current year
    const paramValue = globalParameters.utilidad.proyecciones[currentYear];

    // Get the generic formula (not year-specific anymore)
    const formula = projectionFormulas['utilidad_basica_proyeccion'] || "base * (param / 100) + 250000";

    // If no parameter for this year or no base value, return dash
    if (!paramValue || baseValue === 0) {
      return '-';
    }

    try {
      // NEW: Evaluate formula using previous year's REAL value as base
      let evaluatedFormula = formula
        .replace(/base/g, baseValue.toString()) // Use previous year's REAL value
        .replace(/param/g, paramValue.toString()); // Use current year's parameter

      console.log(`Projection for ${currentYear}: base=${baseValue} (from ${previousYear}), param=${paramValue}, formula="${formula}" -> "${evaluatedFormula}"`);

      // Use eval for simple mathematical expressions
      const result = eval(evaluatedFormula);
      return Math.round(result);
    } catch (error) {
      console.error('Main page formula evaluation error:', error);
      return baseValue; // Fallback to base value if formula fails
    }
  }, [globalParameters.utilidad.values, globalParameters.utilidad.proyecciones, projectionFormulas]);

  // Get card titles by section
  const getSectionCardTitles = useCallback((sectionKey: string) => {
    const titles = {
      crecimiento: ["VALOR PATRIMONIO", "UTILIDAD", "EBITDA", "INTERESES A OPERACIONAL", "VALOR DEUDA", "CRECIMIENTO PATRIMONIO", "CREACIÓN DE VALOR", "RENTABILIDAD PATRIMONIO", "RENTABILIDAD CAPITAL"],
      riesgo: ["LIQUIDEZ CORRIENTE", "PRUEBA ÁCIDA", "ROTACIÓN INVENTARIOS", "DÍAS COBRANZA", "ENDEUDAMIENTO TOTAL", "COBERTURA INTERESES", "APALANCAMIENTO", "MARGEN BRUTO", "MARGEN OPERACIONAL"],
      flujo: ["FLUJO OPERACIONAL", "FLUJO INVERSIÓN", "FLUJO FINANCIAMIENTO"],
      rentabilidad: ["ROE PROMEDIO", "ROE OPERACIONAL", "ROE AJUSTADO"]
    };
    return titles[sectionKey as keyof typeof titles] || [];
  }, []);

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

  // Definición de las secciones y sus datos
  const sections = useMemo(() => ({
    crecimiento: {
      title: "CRECIMIENTO SOSTENIBLE",
      data: [
        { id: 'crecimiento-0', title: getTitleForCard('crecimiento', 0), data: { ...mockData2, id: 'crecimiento-0' } },
        { id: 'crecimiento-1', title: getTitleForCard('crecimiento', 1), data: { ...mockData2, id: 'crecimiento-1' } },
        { id: 'crecimiento-2', title: getTitleForCard('crecimiento', 2), data: { ...mockData2, id: 'crecimiento-2' } },
        { id: 'crecimiento-3', title: getTitleForCard('crecimiento', 3), data: { ...mockData2, id: 'crecimiento-3' } },
        { id: 'crecimiento-4', title: getTitleForCard('crecimiento', 4), data: { ...mockData2, id: 'crecimiento-4' } },
        { id: 'crecimiento-5', title: getTitleForCard('crecimiento', 5), data: { ...mockData2, id: 'crecimiento-5' } },
        { id: 'crecimiento-6', title: getTitleForCard('crecimiento', 6), data: { ...mockData2, id: 'crecimiento-6' } },
        { id: 'crecimiento-7', title: getTitleForCard('crecimiento', 7), data: { ...mockData2, id: 'crecimiento-7' } },
        { id: 'crecimiento-8', title: getTitleForCard('crecimiento', 8), data: { ...mockData2, id: 'crecimiento-8' } },
        { id: 'crecimiento-9', title: getTitleForCard('crecimiento', 9), data: { ...mockData2, id: 'crecimiento-9' } },
      ],
      icon: <svg className="block size-full" fill="none" viewBox="0 0 32 32"><path d={svgPathsDark.p20c62f00} fill={isDarkMode ? "white" : "#404040"} /></svg>
    },
    riesgo: {
      title: "RIESGO FINANCIERO",
      data: [
        { id: 'riesgo-0', title: getTitleForCard('riesgo', 0), data: { ...mockData2, id: 'riesgo-0' } },
        { id: 'riesgo-1', title: getTitleForCard('riesgo', 1), data: { ...mockData2, id: 'riesgo-1' } },
        { id: 'riesgo-2', title: getTitleForCard('riesgo', 2), data: { ...mockData2, id: 'riesgo-2' } },
        { id: 'riesgo-3', title: getTitleForCard('riesgo', 3), data: { ...mockData2, id: 'riesgo-3' } },
        { id: 'riesgo-4', title: getTitleForCard('riesgo', 4), data: { ...mockData2, id: 'riesgo-4' } },
        { id: 'riesgo-5', title: getTitleForCard('riesgo', 5), data: { ...mockData2, id: 'riesgo-5' } },
        { id: 'riesgo-6', title: getTitleForCard('riesgo', 6), data: { ...mockData2, id: 'riesgo-6' } },
        { id: 'riesgo-7', title: getTitleForCard('riesgo', 7), data: { ...mockData2, id: 'riesgo-7' } },
        { id: 'riesgo-8', title: getTitleForCard('riesgo', 8), data: { ...mockData2, id: 'riesgo-8' } },
        { id: 'riesgo-9', title: getTitleForCard('riesgo', 9), data: { ...mockData2, id: 'riesgo-9' } },
      ],
      icon: <svg className="block size-full" fill="none" viewBox="0 0 32 32"><path d={svgPathsDark.p5d83c80} fill={isDarkMode ? "white" : "#404040"} /></svg>
    },
    flujo: {
      title: "FLUJO DE EFECTIVO",
      data: [
        { id: 'flujo-0', title: getTitleForCard('flujo', 0), data: { ...mockData2, id: 'flujo-0' } },
        { id: 'flujo-1', title: getTitleForCard('flujo', 1), data: { ...mockData2, id: 'flujo-1' } },
        { id: 'flujo-2', title: getTitleForCard('flujo', 2), data: { ...mockData2, id: 'flujo-2' } },
      ],
      icon: <svg className="block size-full" fill="none" viewBox="0 0 32 32"><path d={svgPathsDark.p266f0a80} fill={isDarkMode ? "white" : "#404040"} /></svg>
    },
    rentabilidad: {
      title: "RENTABILIDAD DEL PATRIMONIO",
      data: [
        { id: 'rentabilidad-0', title: getTitleForCard('rentabilidad', 0), data: { ...mockData2, id: 'rentabilidad-0' } },
        { id: 'rentabilidad-1', title: getTitleForCard('rentabilidad', 1), data: { ...mockData2, id: 'rentabilidad-1' } },
        { id: 'rentabilidad-2', title: getTitleForCard('rentabilidad', 2), data: { ...mockData2, id: 'rentabilidad-2' } },
      ],
      icon: <svg className="block size-full" fill="none" viewBox="0 0 32 32"><path d={svgPathsDark.p9a70c80} fill={isDarkMode ? "white" : "#404040"} /></svg>
    }
  }), [mockData2, isDarkMode]);

  // Generación de datos de tarjetas de forma centralizada
  const allCardData = useMemo(() => {
    const newAllCardData: { [key in SectionKey]: FinancialCardData[] } = {
      crecimiento: [],
      riesgo: [],
      flujo: [],
      rentabilidad: []
    };

    (Object.keys(sections) as SectionKey[]).forEach(sectionKey => {
      const sectionInfo = sections[sectionKey];
      const filters = sectionFilters[sectionKey];
      const availableCategories = getAvailableCategories(sectionKey);

      const categoriesToShow = filters.selectedCategories.length === 0
        ? availableCategories
        : filters.selectedCategories;

      newAllCardData[sectionKey] = sectionInfo.data
        .map((data, index) => ({
          id: data.id,
          title: data.title,
          data: applyParametersToData(data.data),
        }))
        .filter(card => categoriesToShow.includes(card.title));
    });

    return newAllCardData;
  }, [sections, sectionFilters, getAvailableCategories, getTitleForCard, applyParametersToData]);


  // Función para crear elementos React a partir de los datos de las tarjetas
  const createCardElements = useCallback((cardData: FinancialCardData[], sectionKey: SectionKey) => {
    const currentOrder = cardOrders[sectionKey] || [];
    const orderedData = currentOrder.length > 0
      ? currentOrder.map(id => cardData.find(item => item.id === id)).filter(Boolean) as FinancialCardData[]
      : cardData;

    return orderedData.map(({ id, data, title }) => {
      const yearsToUse = sectionFilters[sectionKey]?.selectedYears.length > 0
        ? sectionFilters[sectionKey].selectedYears
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
  }, [sectionFilters, globalSelectedYears, cardOrders]);

  // Creación de elementos de tarjeta para cada sección
  const sectionCards = useMemo(() => {
    const newSectionCards: { [key in SectionKey]: React.ReactNode[] } = {
      crecimiento: [],
      riesgo: [],
      flujo: [],
      rentabilidad: []
    };

    (Object.keys(allCardData) as SectionKey[]).forEach(sectionKey => {
      newSectionCards[sectionKey] = createCardElements(allCardData[sectionKey], sectionKey);
    });

    return newSectionCards;
  }, [allCardData, createCardElements]);


  // Initialize card orders when card data changes (only once)
  useEffect(() => {
    const newOrders: Record<SectionKey, string[]> = {
      crecimiento: allCardData.crecimiento.map(item => item.id),
      riesgo: allCardData.riesgo.map(item => item.id),
      flujo: allCardData.flujo.map(item => item.id),
      rentabilidad: allCardData.rentabilidad.map(item => item.id)
    };

    // Solo actualizar si las órdenes están vacías (carga inicial)
    setCardOrders(prev => ({
      crecimiento: prev.crecimiento.length === 0 ? newOrders.crecimiento : prev.crecimiento,
      riesgo: prev.riesgo.length === 0 ? newOrders.riesgo : prev.riesgo,
      flujo: prev.flujo.length === 0 ? newOrders.flujo : prev.flujo,
      rentabilidad: prev.rentabilidad.length === 0 ? newOrders.rentabilidad : prev.rentabilidad,
    }));
  }, [allCardData]);

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
  const handleReorder = useCallback((section: SectionKey, newOrder: React.ReactNode[]) => {
    const newOrderIds = newOrder.map((element: any) => element.key);
    setCardOrders(prev => ({
      ...prev,
      [section]: newOrderIds
    }));
    console.log(`Cards reordered in ${section} section`);
  }, []);

  const onReorderHandlers: Record<SectionKey, (newOrder: React.ReactNode[]) => void> = {
    crecimiento: (newOrder) => handleReorder('crecimiento', newOrder),
    riesgo: (newOrder) => handleReorder('riesgo', newOrder),
    flujo: (newOrder) => handleReorder('flujo', newOrder),
    rentabilidad: (newOrder) => handleReorder('rentabilidad', newOrder)
  };


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
                            {sections.crecimiento.icon}
                          </div>
                        }
                        isExpanded={sectionStates.crecimiento}
                        onToggleExpansion={() => toggleSection('crecimiento')}
                        onReorderCards={onReorderHandlers.crecimiento}
                        onFilterClick={() => handleFilterClick('crecimiento')}
                        isDarkMode={isDarkMode}
                      >
                        {sectionCards.crecimiento}
                      </CarouselSection>

                      <CarouselSection
                        title="RIESGO FINANCIERO"
                        icon={
                          <div className="relative shrink-0 size-8">
                            {sections.riesgo.icon}
                          </div>
                        }
                        isExpanded={sectionStates.riesgo}
                        onToggleExpansion={() => toggleSection('riesgo')}
                        onReorderCards={onReorderHandlers.riesgo}
                        onFilterClick={() => handleFilterClick('riesgo')}
                        isDarkMode={isDarkMode}
                      >
                        {sectionCards.riesgo}
                      </CarouselSection>

                      <CarouselSection
                        title="FLUJO DE EFECTIVO"
                        icon={
                          <div className="relative shrink-0 size-8">
                            {sections.flujo.icon}
                          </div>
                        }
                        isExpanded={sectionStates.flujo}
                        onToggleExpansion={() => toggleSection('flujo')}
                        onReorderCards={onReorderHandlers.flujo}
                        onFilterClick={() => handleFilterClick('flujo')}
                        isDarkMode={isDarkMode}
                      >
                        {sectionCards.flujo}
                      </CarouselSection>

                      <CarouselSection
                        title="RENTABILIDAD DEL PATRIMONIO"
                        icon={
                          <div className="relative shrink-0 size-8">
                            {sections.rentabilidad.icon}
                          </div>
                        }
                        isExpanded={sectionStates.rentabilidad}
                        onToggleExpansion={() => toggleSection('rentabilidad')}
                        onReorderCards={onReorderHandlers.rentabilidad}
                        onFilterClick={() => handleFilterClick('rentabilidad')}
                        isDarkMode={isDarkMode}
                      >
                        {sectionCards.rentabilidad}
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