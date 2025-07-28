"use client"
import { useState, useCallback, useEffect, useMemo } from 'react';
import { CarouselSection } from '../components/CarouselSection';
import { FinancialCard } from '../components/FinancialCard';
import { GlobalYearSelector } from '../components/GlobalYearSelector';
import { ModeChanger } from '../components/ModeChanger';
import { NotificationIcon } from '../components/NotificationIcon';
import { UserDropdown } from '../components/UserDropdown';
import { SectionFilter } from '../components/SectionFilter';
import { Sidebar } from '../components/Sidebar';
import { DnDProviderWrapper } from '../components/DnDProvider';
import { fetchCardData, fetchBudgetData, processCardData, SECTION_CARD_TITLES, FinancialCardData, CardDataInterface } from '../services/cardDataService';
import svgPathsDark from "../imports/svg-ec6iy79qbc";



// Define section filter states
interface SectionFilters {
    selectedYears: string[];
    selectedCategories: string[];
}

type SectionKey = 'crecimiento' | 'riesgo' | 'flujo' | 'rentabilidad' | 'inversiones';







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
    // Estado para datos de todas las tarjetas - now includes budget data
    const [cardsData, setCardsData] = useState<{ [cardId: string]: CardDataInterface }>({});
    const [budgetData, setBudgetData] = useState<{ [cardId: string]: CardDataInterface }>({});
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
            proyecciones: {} as { [year: string]: number }
        },
        creditoNeto: {
            values: {} as { [year: string]: number },
            proyecciones: {} as { [year: string]: number }
        },
        dividendos: {
            values: {} as { [year: string]: number },
            proyecciones: {} as { [year: string]: number }
        },
        inversiones: {
            values: {} as { [year: string]: number },
            proyeccion: 10,
            proyecciones: {} as { [year: string]: number }
        },
        vidaUtilActivos: {
            valor: "10 años"
        },
        // Non-yearly parameters (single values from database)
        tasasFinancieras: {
            TASA_CP: 0,
            TASA_LP: 0,
            SPREAD: 0,
            BETA: 0,
            CREC_RESIDUAL: 0,
            RIESGO_PAIS: 0,
            SPREAD_2: 0,
            RF: 0
        },
        estacionalidadMensual: {
            ENE: 0,
            FEB: 0,
            MAR: 0,
            ABR: 0,
            MAY: 0,
            JUN: 0,
            JUL: 0,
            AGO: 0,
            SEPT: 0,
            OCT: 0,
            NOV: 0,
            DIC: 0
        },
        valorizacion: {
            RD: 0,
            RE: 0,
            WACC: 0
        },
        otros: {
            DIAS_DEL_PERIODO: 0,
            UNID_MED: 0,
            VUC: 10,
            EV_ABR: 0
        },
        // Yearly parameters
        margenesFinancieros: {
            MG_BR: {} as { [year: string]: number },
            G_V_V: {} as { [year: string]: number },
            G_A_V: {} as { [year: string]: number },
            IMPTO: {} as { [year: string]: number }
        },
        balanceGeneral: {
            CAJA: {} as { [year: string]: number },
            CXC: {} as { [year: string]: number },
            EXIST: {} as { [year: string]: number },
            CXP: {} as { [year: string]: number }
        },
        costosDeVenta: {
            REM: {} as { [year: string]: number },
            GPER: {} as { [year: string]: number },
            SERV: {} as { [year: string]: number },
            MAT: {} as { [year: string]: number },
            ARR: {} as { [year: string]: number },
            DEP: {} as { [year: string]: number },
            HERR: {} as { [year: string]: number },
            OTR: {} as { [year: string]: number }
        }
    });

    // Loading states for global parameters
    const [isLoadingGlobalParametros, setIsLoadingGlobalParametros] = useState(true);
    const [isLoadingFormulas, setIsLoadingFormulas] = useState(true);

    // Projection formulas state
    const [projectionFormulas, setProjectionFormulas] = useState<{ [formulaType: string]: string }>({});

    // Function to load data for a specific card - NOW WITH BUDGET DATA
    const loadCardData = useCallback(async (cardId: string, title: string) => {
        setLoadingCards(prev => ({ ...prev, [cardId]: true }));

        try {
            // Fetch both real data and budget data in parallel
            const [cardData, cardBudgetData] = await Promise.all([
                fetchCardData(title, 2022, 2029),
                fetchBudgetData(title, 2024, 2029) // Budget data only for 2024+
            ]);

            // Store raw data separately
            setCardsData(prev => ({ ...prev, [cardId]: cardData }));
            setBudgetData(prev => ({ ...prev, [cardId]: cardBudgetData }));
        } catch (error) {
            console.error(`Failed to fetch data for card ${cardId}:`, error);
            // Set fallback data
            const fallbackData = {
                dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
                values: Array(8).fill(-1),
                result: -1,
                warning: 'Failed to load'
            };

            setCardsData(prev => ({ ...prev, [cardId]: fallbackData }));
            setBudgetData(prev => ({ ...prev, [cardId]: fallbackData }));
        } finally {
            setLoadingCards(prev => ({ ...prev, [cardId]: false }));
        }
    }, []);

    // Fetch projection parameters from API
    const fetchGlobalParametros = useCallback(async () => {
        try {
            setIsLoadingGlobalParametros(true);

            // Fetch ALL parameters from database
            const response = await fetch('/api/parametros');

            if (response.ok) {
                const result = await response.json();
                if (result.success && result.data && result.data.parametros) {
                    const allParams = result.data.parametros;

                    // Initialize parameter collections
                    const proyeccionesUtilidad: { [year: string]: number } = {};
                    const proyeccionesInversiones: { [year: string]: number } = {};
                    const proyeccionesCrecimiento: { [year: string]: number } = {};
                    const proyeccionesCreditoNeto: { [year: string]: number } = {};
                    const proyeccionesDividendos: { [year: string]: number } = {};
                    const tasasFinancieras: any = {};
                    const estacionalidadMensual: any = {};
                    const valorizacion: any = {};
                    const otros: any = {};

                    // Initialize yearly parameter collections
                    const margenesFinancieros: any = {
                        MG_BR: {},
                        G_V_V: {},
                        G_A_V: {},
                        IMPTO: {}
                    };
                    const balanceGeneral: any = {
                        CAJA: {},
                        CXC: {},
                        EXIST: {},
                        CXP: {}
                    };
                    const costosDeVenta: any = {
                        REM: {},
                        GPER: {},
                        SERV: {},
                        MAT: {},
                        ARR: {},
                        DEP: {},
                        HERR: {},
                        OTR: {}
                    };

                    // Group parameters by type
                    allParams.forEach((param: any) => {
                        const { prmt_codigo, prmt_valor, prmt_ano } = param;

                        // Handle yearly projection parameters
                        if (prmt_codigo === 'PROY_UTIL' && prmt_ano) {
                            proyeccionesUtilidad[prmt_ano.toString()] = prmt_valor;
                        } else if (prmt_codigo === 'PROY_INVERSION' && prmt_ano) {
                            proyeccionesInversiones[prmt_ano.toString()] = prmt_valor;
                        } else if (prmt_codigo === 'PROY_CRECIMIENTO' && prmt_ano) {
                            proyeccionesCrecimiento[prmt_ano.toString()] = prmt_valor;
                        } else if (prmt_codigo === 'PROY_CREDITO_NETO' && prmt_ano) {
                            proyeccionesCreditoNeto[prmt_ano.toString()] = prmt_valor;
                        } else if (prmt_codigo === 'PROY_DIVIDENDOS' && prmt_ano) {
                            proyeccionesDividendos[prmt_ano.toString()] = prmt_valor;
                        }
                        // Handle yearly margin parameters (40000s)
                        else if (['MG_BR', 'G_V_V', 'G_A_V', 'IMPTO'].includes(prmt_codigo) && prmt_ano) {
                            margenesFinancieros[prmt_codigo][prmt_ano.toString()] = prmt_valor;
                        }
                        // Handle yearly balance parameters (50000s)
                        else if (['CAJA', 'CXC', 'EXIST', 'CXP'].includes(prmt_codigo) && prmt_ano) {
                            balanceGeneral[prmt_codigo][prmt_ano.toString()] = prmt_valor;
                        }
                        // Handle yearly costos de venta parameters (60000s)
                        else if (['REM', 'GPER', 'SERV', 'MAT', 'ARR', 'DEP', 'HERR', 'OTR'].includes(prmt_codigo) && prmt_ano) {
                            costosDeVenta[prmt_codigo][prmt_ano.toString()] = prmt_valor;
                            console.log(`Loading costo de venta: ${prmt_codigo} (${prmt_ano}) = ${prmt_valor}`);
                        }
                        // Handle non-yearly parameters (prmt_ano is NULL)
                        else if (!prmt_ano) {
                            // Financial rates (30000s)
                            if (['TASA_CP', 'TASA_LP', 'SPREAD', 'BETA', 'CREC_RESIDUAL', 'RIESGO_PAIS', 'SPREAD_2', 'RF'].includes(prmt_codigo)) {
                                tasasFinancieras[prmt_codigo] = prmt_valor;
                                console.log(`Loading tasa financiera: ${prmt_codigo} = ${prmt_valor}`);
                            }
                            // Monthly seasonality (70000s)
                            else if (['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEPT', 'OCT', 'NOV', 'DIC'].includes(prmt_codigo)) {
                                estacionalidadMensual[prmt_codigo] = prmt_valor;
                            }
                            // Valuation parameters
                            else if (['RD', 'RE', 'WACC'].includes(prmt_codigo)) {
                                valorizacion[prmt_codigo] = prmt_valor;
                            }
                            // Other parameters
                            else if (['DIAS_DEL_PERIODO', 'UNID_MED', 'VUC', 'EV_ABR'].includes(prmt_codigo)) {
                                otros[prmt_codigo] = prmt_valor;
                            }
                        }
                    });

                    // Update global parameters state
                    setGlobalParameters(prev => ({
                        ...prev,
                        utilidad: {
                            ...prev.utilidad,
                            proyecciones: proyeccionesUtilidad
                        },
                        inversiones: {
                            ...prev.inversiones,
                            proyecciones: proyeccionesInversiones
                        },
                        crecimientosVenta: {
                            ...prev.crecimientosVenta,
                            proyecciones: proyeccionesCrecimiento
                        },
                        creditoNeto: {
                            ...prev.creditoNeto,
                            proyecciones: proyeccionesCreditoNeto
                        },
                        dividendos: {
                            ...prev.dividendos,
                            proyecciones: proyeccionesDividendos
                        },
                        tasasFinancieras: {
                            ...prev.tasasFinancieras,
                            ...tasasFinancieras
                        },
                        estacionalidadMensual: {
                            ...prev.estacionalidadMensual,
                            ...estacionalidadMensual
                        },
                        valorizacion: {
                            ...prev.valorizacion,
                            ...valorizacion
                        },
                        otros: {
                            ...prev.otros,
                            ...otros
                        },
                        margenesFinancieros: {
                            ...prev.margenesFinancieros,
                            ...margenesFinancieros
                        },
                        balanceGeneral: {
                            ...prev.balanceGeneral,
                            ...balanceGeneral
                        },
                        costosDeVenta: {
                            ...prev.costosDeVenta,
                            ...costosDeVenta
                        }
                    }));

                    console.log('Loaded global parameters:', {
                        utilidad: proyeccionesUtilidad,
                        inversiones: proyeccionesInversiones,
                        tasasFinancieras,
                        estacionalidadMensual,
                        valorizacion,
                        otros,
                        margenesFinancieros,
                        balanceGeneral,
                        costosDeVenta
                    });
                } else {
                    console.warn('Parameters API returned unsuccessful response:', result);
                }
            } else {
                console.warn(`Parameters API request failed with status ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            console.warn('Failed to fetch global parametros data (DB may be offline):', error);
        } finally {
            setIsLoadingGlobalParametros(false);
        }
    }, []);

    // Fetch projection formulas from API
    const fetchProjectionFormulas = useCallback(async () => {
        try {
            setIsLoadingFormulas(true);
            const response = await fetch('/api/formulas?fmls_desc=utilidad_proy');

            if (response.ok) {
                const result = await response.json();
                if (result.success && result.data && result.data.formulas) {
                    const formulas: { [formulaType: string]: string } = {};

                    result.data.formulas.forEach((formula: any) => {
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

    // NEW: Function to reload all data when parameters change
    const handleDataReload = useCallback(async () => {
        console.log('Reloading all data due to parameter change...');

        // Reload global parameters
        await fetchGlobalParametros();

        // Reload all card data (including budget data)
        Object.entries(SECTION_CARD_TITLES).forEach(([sectionKey, titles]) => {
            titles.forEach((title, index) => {
                const cardId = `${sectionKey}-${index}`;
                loadCardData(cardId, title);
            });
        });

        console.log('Data reload completed');
    }, [fetchGlobalParametros, loadCardData]);

    // Initialize card data on mount
    useEffect(() => {
        fetchGlobalParametros();
        fetchProjectionFormulas();

        // Load all cards data
        Object.entries(SECTION_CARD_TITLES).forEach(([sectionKey, titles]) => {
            titles.forEach((title, index) => {
                const cardId = `${sectionKey}-${index}`;
                loadCardData(cardId, title);
            });
        });
    }, [fetchGlobalParametros, fetchProjectionFormulas, loadCardData]);

    // Estados principales
    const [sectionStates, setSectionStates] = useState({
        crecimiento: false,
        riesgo: false,
        flujo: false,
        rentabilidad: false,
        inversiones: false
    });

    // Updated default to 4 years (2024-2027) - keeping the standard recommendation
    const [globalSelectedYears, setGlobalSelectedYears] = useState<string[]>(['2024', '2025', '2026', '2027']);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [hasNotifications, setHasNotifications] = useState(true);
    const [notificationCount, setNotificationCount] = useState(3);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

    // Estado del sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        },
        inversiones: {
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
        rentabilidad: [],
        inversiones: []
    });

    // Función para calcular el valor de la empresa basado en los años seleccionados
    const calculateCompanyValue = useCallback((selectedYears: string[]): number => {
        const baseValue = 7506;
        const yearMultiplier = selectedYears.length * 0.15; // 15% adicional por cada año
        const futureYearsBonus = selectedYears.filter(year => parseInt(year) > 2025).length * 0.25; // 25% adicional por años futuros

        return Math.round(baseValue * (1 + yearMultiplier + futureYearsBonus));
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

    // Generate card data for each section
    const generateSectionCards = useCallback((sectionKey: SectionKey) => {
        const titles = SECTION_CARD_TITLES[sectionKey];
        const filters = sectionFilters[sectionKey];

        const categoriesToShow = filters.selectedCategories.length === 0
            ? titles
            : filters.selectedCategories;

        return titles
            .map((title, index) => {
                const cardId = `${sectionKey}-${index}`;
                const rawData = cardsData[cardId];
                const isLoading = loadingCards[cardId];

                if (!categoriesToShow.includes(title)) {
                    return null; // Filter out cards not in selected categories
                }

                // Process the data into FinancialCard format - WITH BUDGET DATA
                // Ensure we have proper fallback data with all years
                const defaultData = {
                    dates: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
                    values: Array(8).fill(-1),
                    result: -1
                };

                const rawBudgetData = budgetData[cardId];
                const processedData = processCardData(
                    rawData || defaultData,
                    rawBudgetData || null, // Use budget data if available
                    cardId,
                    title
                );

                const yearsToUse = filters.selectedYears.length > 0
                    ? filters.selectedYears
                    : globalSelectedYears;

                return (
                    <FinancialCard
                        key={cardId}
                        title={title}
                        data={processedData.data}
                        globalSelectedYears={yearsToUse}
                    />
                );
            })
            .filter(Boolean); // Remove null items
    }, [cardsData, loadingCards, sectionFilters, globalSelectedYears]);

    // Create sections with dynamic data
    const sections = useMemo(() => ({
        crecimiento: {
            title: "CRECIMIENTO SOSTENIBLE",
            cards: generateSectionCards('crecimiento'),
            icon: <svg className="block size-full" fill="none" viewBox="0 0 32 32"><path d={svgPathsDark.p20c62f00} fill={isDarkMode ? "white" : "#404040"} /></svg>
        },
        riesgo: {
            title: "RIESGO FINANCIERO",
            cards: generateSectionCards('riesgo'),
            icon: <svg className="block size-full" fill="none" viewBox="0 0 32 32"><path d={svgPathsDark.p5d83c80} fill={isDarkMode ? "white" : "#404040"} /></svg>
        },
        flujo: {
            title: "FLUJO DE EFECTIVO",
            cards: generateSectionCards('flujo'),
            icon: <svg className="block size-full" fill="none" viewBox="0 0 32 32"><path d={svgPathsDark.p266f0a80} fill={isDarkMode ? "white" : "#404040"} /></svg>
        },
        rentabilidad: {
            title: "RENTABILIDAD DEL PATRIMONIO",
            cards: generateSectionCards('rentabilidad'),
            icon: <svg className="block size-full" fill="none" viewBox="0 0 32 32"><path d={svgPathsDark.p9a70c80} fill={isDarkMode ? "white" : "#404040"} /></svg>
        },
        inversiones: {
            title: "INVERSIONES",
            cards: generateSectionCards('inversiones'),
            icon: <svg className="block size-full" fill="none" viewBox="0 0 32 32"><path d="M8 4v6h16V4h-16zm16 8H8v16h16V12zM6 2h20a2 2 0 012 2v24a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm6 6h8v2h-8V8zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" fill={isDarkMode ? "white" : "#404040"} /></svg>
        }
    }), [generateSectionCards, isDarkMode]);

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
        // Handle parameter changes here if needed
    }, []);

    // HANDLER ACTUALIZADO para manejar el cambio de años globales
    const handleGlobalYearsChange = useCallback((years: string[]) => {
        setGlobalSelectedYears(years);

        // Actualizar también los filtros de todas las secciones para sincronizar
        setSectionFilters(prev => ({
            crecimiento: { ...prev.crecimiento, selectedYears: years },
            riesgo: { ...prev.riesgo, selectedYears: years },
            flujo: { ...prev.flujo, selectedYears: years },
            rentabilidad: { ...prev.rentabilidad, selectedYears: years },
            inversiones: { ...prev.inversiones, selectedYears: years }
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
            rentabilidad: "RENTABILIDAD DEL PATRIMONIO",
            inversiones: "INVERSIONES"
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
        rentabilidad: (newOrder) => handleReorder('rentabilidad', newOrder),
        inversiones: (newOrder) => handleReorder('inversiones', newOrder)
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
                                    onDataReload={handleDataReload}
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

                                                {/* NOTIFICATION ICON - HIDDEN/COMMENTED OUT */}
                                                {/* <NotificationIcon
                                                    hasNotifications={hasNotifications}
                                                    notificationCount={notificationCount}
                                                    onClick={handleNotificationClick}
                                                    isDarkMode={isDarkMode}
                                                /> */}

                                                {/* PERFIL DE USUARIO - HIDDEN/COMMENTED OUT */}
                                                {/* <div className="relative">
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
                                                </div> */}
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
                                                        ✅ Datos dinámicos desde API - Sistema refactorizado
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
                                                {sections.crecimiento.cards}
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
                                                {sections.riesgo.cards}
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
                                                {sections.flujo.cards}
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
                                                {sections.rentabilidad.cards}
                                            </CarouselSection>

                                            <CarouselSection
                                                title="INVERSIONES"
                                                icon={
                                                    <div className="relative shrink-0 size-8">
                                                        {sections.inversiones.icon}
                                                    </div>
                                                }
                                                isExpanded={sectionStates.inversiones}
                                                onToggleExpansion={() => toggleSection('inversiones')}
                                                onReorderCards={onReorderHandlers.inversiones}
                                                onFilterClick={() => handleFilterClick('inversiones')}
                                                isDarkMode={isDarkMode}
                                            >
                                                {sections.inversiones.cards}
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
                    availableCategories={filterModal.section ? SECTION_CARD_TITLES[filterModal.section] : []}
                    selectedYears={filterModal.section ? sectionFilters[filterModal.section].selectedYears : []}
                    selectedCategories={filterModal.section ? sectionFilters[filterModal.section].selectedCategories : []}
                    onApplyFilters={handleApplyFilters}
                />
            </div>
        </DnDProviderWrapper>
    );
} 