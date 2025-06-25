import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface GlobalYearSelectorProps {
  selectedYears: string[];
  onYearsChange: (years: string[]) => void;
  isDarkMode: boolean;
}

export const GlobalYearSelector: React.FC<GlobalYearSelectorProps> = ({
  selectedYears,
  onYearsChange,
  isDarkMode
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Updated year ranges - 1 año now starts from 2025
  const yearRanges = [
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Function to compare arrays
  const arraysEqual = (a: string[], b: string[]) => {
    return a.length === b.length && a.every((val, i) => val === b[i]);
  };

  // Get current selection info
  const getCurrentSelectionInfo = () => {
    const matchingRange = yearRanges.find(range => 
      arraysEqual(range.years, selectedYears)
    );

    if (matchingRange) {
      return {
        label: matchingRange.label,
        isCustom: false
      };
    } else {
      return {
        label: `${selectedYears.length} año${selectedYears.length !== 1 ? 's' : ''} (personalizado)`,
        isCustom: true
      };
    }
  };

  const currentSelection = getCurrentSelectionInfo();

  const handleRangeSelect = (range: typeof yearRanges[0]) => {
    onYearsChange(range.years);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Main Selector Button */}
      <button
        onClick={toggleDropdown}
        className="w-full p-4 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between group"
        style={{
          backgroundColor: isDarkMode ? 'rgba(115,115,115,0.4)' : '#f7f9fa',
          borderColor: isDarkMode ? '#f2f2f2' : '#d0d5dd',
          color: isDarkMode ? '#ffffff' : '#404040'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = isDarkMode ? '#3ABE76' : '#1A6E31';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = isDarkMode 
            ? '0 8px 25px -5px rgba(0, 0, 0, 0.3)' 
            : '0 8px 25px -5px rgba(0, 0, 0, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = isDarkMode ? '#f2f2f2' : '#d0d5dd';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Seleccionar rango de años para análisis"
      >
        <div className="flex-1 text-left">
          <div className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: isDarkMode ? '#3ABE76' : '#1A6E31' }}
            />
            <div>
              <div className="font-medium text-lg">
                {currentSelection.label}
              </div>
              <div
                className="text-sm mt-1"
                style={{ color: isDarkMode ? '#adadad' : '#9d9292' }}
              >
                {selectedYears.length === 1 
                  ? `Año: ${selectedYears[0]}`
                  : `Años: ${selectedYears[0]} - ${selectedYears[selectedYears.length - 1]}`
                }
              </div>
            </div>
          </div>
        </div>

        {/* Arrow Icon */}
        <ChevronDown 
          className={`w-6 h-6 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ color: isDarkMode ? '#adadad' : '#9d9292' }}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 right-0 mt-2 rounded-2xl border shadow-2xl z-50 overflow-hidden year-selector-dropdown animate-dropdown-appear"
          style={{
            backgroundColor: isDarkMode ? 'rgba(34, 33, 38, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            borderColor: isDarkMode ? '#9e9e9e' : '#d0d5dd',
            boxShadow: isDarkMode 
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
              : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
          role="listbox"
          aria-label="Opciones de rango de años"
        >
          {yearRanges.map((range) => {
            const isSelected = arraysEqual(range.years, selectedYears);
            
            return (
              <div
                key={range.id}
                onClick={() => handleRangeSelect(range)}
                className="px-4 py-3 cursor-pointer transition-all duration-200 hover:scale-[1.02]"
                style={{
                  backgroundColor: isSelected
                    ? isDarkMode
                      ? 'rgba(58, 190, 118, 0.15)'
                      : 'rgba(26, 110, 49, 0.1)'
                    : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = isDarkMode
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
                role="option"
                aria-selected={isSelected}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleRangeSelect(range);
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="font-medium"
                        style={{ color: isDarkMode ? '#ffffff' : '#404040' }}
                      >
                        {range.label}
                      </span>
                      {isSelected && (
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: isDarkMode ? '#3ABE76' : '#1A6E31' }}
                        />
                      )}
                    </div>
                  </div>
                  
                  {/* Year chips - now show for 2+ years (instead of 3+) */}
                  {range.years.length >= 2 && (
                    <div className="flex items-center gap-1">
                      {range.years.map((year, index) => (
                        <div
                          key={year}
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            index === 0 ? 'mr-1' : index === range.years.length - 1 ? 'ml-1' : ''
                          }`}
                          style={{
                            backgroundColor: isDarkMode
                              ? 'rgba(173, 173, 173, 0.1)'
                              : 'rgba(64, 64, 64, 0.1)',
                            color: isDarkMode ? '#adadad' : '#404040'
                          }}
                        >
                          {year}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Custom Selection Display */}
          {currentSelection.isCustom && (
            <>
              <div
                className="border-t mx-4"
                style={{ borderColor: isDarkMode ? '#9e9e9e' : '#e0e0e0' }}
              />
              <div
                className="px-4 py-3"
                style={{
                  backgroundColor: isDarkMode
                    ? 'rgba(58, 190, 118, 0.15)'
                    : 'rgba(26, 110, 49, 0.1)'
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="font-medium"
                        style={{ color: isDarkMode ? '#ffffff' : '#404040' }}
                      >
                        Selección Personalizada
                      </span>
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: isDarkMode ? '#3ABE76' : '#1A6E31' }}
                      />
                    </div>
                  </div>
                  
                  {/* Year chips for custom selection - show for 2+ years */}
                  {selectedYears.length >= 2 && (
                    <div className="flex items-center gap-1">
                      {selectedYears.map((year, index) => (
                        <div
                          key={year}
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            index === 0 ? 'mr-1' : index === selectedYears.length - 1 ? 'ml-1' : ''
                          }`}
                          style={{
                            backgroundColor: isDarkMode
                              ? 'rgba(173, 173, 173, 0.1)'
                              : 'rgba(64, 64, 64, 0.1)',
                            color: isDarkMode ? '#adadad' : '#404040'
                          }}
                        >
                          {year}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};