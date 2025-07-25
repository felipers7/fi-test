import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DraggableCard } from './DraggableCard';
import svgPaths from "../imports/svg-qa3cbw0llx";
import svgPathsDown from "../imports/svg-bxntzbklo8";

interface CarouselSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode[];
  isExpanded: boolean;
  onToggleExpansion: () => void;
  onReorderCards: (newOrder: React.ReactNode[]) => void;
  onFilterClick: () => void;
  isDarkMode: boolean;
}

export const CarouselSection: React.FC<CarouselSectionProps> = ({
  title,
  icon,
  children,
  isExpanded,
  onToggleExpansion,
  onReorderCards,
  onFilterClick,
  isDarkMode,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cards, setCards] = useState<React.ReactNode[]>(children);
  const [pendingReorder, setPendingReorder] = useState<React.ReactNode[] | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Update local cards when children prop changes
  useEffect(() => {
    setCards(children);
  }, [children]);

  // Handle pending reorder notifications
  useEffect(() => {
    if (pendingReorder) {
      onReorderCards(pendingReorder);
      setPendingReorder(null);
    }
  }, [pendingReorder, onReorderCards]);

  // Calculate how many cards fit per page based on screen size
  const getCardsPerPage = useCallback(() => {
    if (typeof window === 'undefined') return 3;
    const width = window.innerWidth;
    if (width < 640) return 1; // mobile
    if (width < 1024) return 2; // tablet
    if (width < 1280) return 3; // small desktop
    return 3; // large desktop
  }, []);

  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage());
      setCurrentPage(0); // Reset to first page on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getCardsPerPage]);

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const canGoLeft = currentPage > 0;
  const canGoRight = currentPage < totalPages - 1;

  const scrollToPage = useCallback((page: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 370; // Base card width
      const gap = 24; // Gap between cards
      const scrollAmount = page * (cardWidth + gap) * cardsPerPage;
      
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
    setCurrentPage(page);
  }, [cardsPerPage]);

  const handlePrevious = useCallback(() => {
    if (canGoLeft) {
      scrollToPage(currentPage - 1);
    }
  }, [canGoLeft, currentPage, scrollToPage]);

  const handleNext = useCallback(() => {
    if (canGoRight) {
      scrollToPage(currentPage + 1);
    }
  }, [canGoRight, currentPage, scrollToPage]);

  // Handle card reordering with drag and drop - FIXED to avoid state update during render
  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const draggedCard = newCards[dragIndex];
      
      // Remove the dragged card from its current position
      newCards.splice(dragIndex, 1);
      
      // Insert the dragged card at its new position
      newCards.splice(hoverIndex, 0, draggedCard);
      
      // Schedule notification to parent component
      setPendingReorder(newCards);
      
      return newCards;
    });
  }, []);

  // Get the visible cards for current page
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = cards.slice(startIndex, endIndex);

  return (
    <div className="relative w-full">
      {/* Header Section - USANDO EL DISEÑO EXACTO DEL FRAME IMPORTADO */}
      <div className="relative shrink-0 w-full mb-[42px]">
        <div className="box-border content-stretch flex flex-row gap-[18px] items-center justify-center p-0 relative w-full">
          
          {/* Icono de la sección */}
          {icon}
          
          {/* Título + Filtro en un contenedor */}
          <div className="relative shrink-0">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
              <div className="font-['Aptos_Narrow:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap"
                   style={{ color: isDarkMode ? '#ffffff' : '#404040' }}>
                <p className="block leading-[normal] whitespace-pre">{title}</p>
              </div>
              
              {/* Icono de filtro */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onFilterClick();
                }}
                className="relative shrink-0 size-3 transition-colors filter-button"
                aria-label="Abrir filtros"
              >
                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                  <path
                    d={svgPaths.pddd8680}
                    fill={isDarkMode ? '#ffffff' : '#404040'}
                  />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Línea divisoria */}
          <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
            <div className="absolute bottom-[-0.394px] left-0 right-0 top-[-0.394px]">
              <svg className="block size-full" fill="none" viewBox="0 0 1021 2">
                <path
                  d="M0 1H1021"
                  stroke={isDarkMode ? '#ffffff' : '#404040'}
                  strokeWidth="0.788577"
                />
              </svg>
            </div>
          </div>
          
          {/* Botón de colapso/expandir con FLECHAS CORRECTAS */}
          <button
            onClick={onToggleExpansion}
            className="relative shrink-0 size-[42px] transition-all duration-300 collapse-button"
            aria-label={isExpanded ? "Contraer sección" : "Expandir sección"}
          >
            {/* Background circle */}
            <div className="absolute inset-[4.167%]">
              <svg className="block size-full" fill="none" viewBox="0 0 39 39">
                <g>
                  {/* Circle background - siempre el mismo */}
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p39164d00}
                    fill={isDarkMode ? '#3ABE76' : '#1A6E31'}
                    fillRule="evenodd"
                  />
                  
                  {/* Flecha - CONDICIONAL según isExpanded */}
                  <path
                    d={isExpanded ? svgPathsDown.p2468c7c0 : svgPaths.p222dae00}
                    fill={isDarkMode ? '#3ABE76' : '#1A6E31'}
                  />
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Content Section - with smooth animation */}
      <div 
        className={`accordion-content transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {isExpanded && (
          <div className="relative">
            {/* Navigation Arrows - Only show if more than cardsPerPage */}
            {cards.length > cardsPerPage && (
              <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-between">
                {/* Left Arrow */}
                <button
                  onClick={handlePrevious}
                  disabled={!canGoLeft}
                  className={`pointer-events-auto w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 carousel-nav-button ${
                    canGoLeft 
                      ? 'hover:scale-105 cursor-pointer' 
                      : 'opacity-30 cursor-not-allowed'
                  }`}
                  style={{ 
                    backgroundColor: isDarkMode ? 'rgba(115,115,115,0.9)' : '#ffffff',
                    border: `1px solid ${isDarkMode ? '#9e9e9e' : '#d0d5dd'}`
                  }}
                  aria-label="Página anterior"
                >
                  <ChevronLeft 
                    className="w-6 h-6" 
                    style={{ color: isDarkMode ? '#ffffff' : '#404040' }}
                  />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  disabled={!canGoRight}
                  className={`pointer-events-auto w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 carousel-nav-button ${
                    canGoRight 
                      ? 'hover:scale-105 cursor-pointer' 
                      : 'opacity-30 cursor-not-allowed'
                  }`}
                  style={{ 
                    backgroundColor: isDarkMode ? 'rgba(115,115,115,0.9)' : '#ffffff',
                    border: `1px solid ${isDarkMode ? '#9e9e9e' : '#d0d5dd'}`
                  }}
                  aria-label="Página siguiente"
                >
                  <ChevronRight 
                    className="w-6 h-6" 
                    style={{ color: isDarkMode ? '#ffffff' : '#404040' }}
                  />
                </button>
              </div>
            )}

            {/* Cards Container - WITH DRAG AND DROP */}
            <div 
              ref={scrollContainerRef}
              className={`swipe-container scrollbar-hide overflow-x-auto ${
                cards.length <= cardsPerPage ? 'no-arrows' : 'px-16'
              }`}
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <div className="flex gap-6 pb-4">
                {visibleCards.map((child, index) => {
                  const actualIndex = startIndex + index;
                  return (
                    <DraggableCard
                      key={`${title}-card-${actualIndex}`}
                      id={`${title}-card-${actualIndex}`}
                      index={actualIndex}
                      moveCard={moveCard}
                      isDarkMode={isDarkMode}
                    >
                      {child}
                    </DraggableCard>
                  );
                })}
              </div>
            </div>

            {/* Page Indicators - Only show if multiple pages */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-4 gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToPage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentPage
                        ? (isDarkMode ? 'bg-[#3ABE76]' : 'bg-[#1A6E31]') + ' scale-125'
                        : isDarkMode 
                          ? 'bg-gray-600 hover:bg-gray-500'
                          : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir a página ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Drag and Drop Instructions */}
            <div className="mt-6 text-center">
              <p className={`text-sm opacity-60 ${
                isDarkMode ? 'text-white' : 'text-gray-600'
              }`}>
                💡 Arrastra las tarjetas para reordenarlas
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};