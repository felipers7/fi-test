import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface SectionFilterProps {
  isOpen: boolean;
  onClose: () => void;
  sectionTitle: string;
  availableYears: string[];
  availableCategories: string[];
  selectedYears: string[];
  selectedCategories: string[];
  onApplyFilters: (years: string[], categories: string[]) => void;
}

export const SectionFilter: React.FC<SectionFilterProps> = ({
  isOpen,
  onClose,
  sectionTitle,
  availableYears,
  availableCategories,
  selectedYears,
  selectedCategories,
  onApplyFilters,
}) => {
  const [tempSelectedYears, setTempSelectedYears] = useState<string[]>(selectedYears);
  const [tempSelectedCategories, setTempSelectedCategories] = useState<string[]>(selectedCategories);

  // Only update temp state when the component receives new props and modal is not currently open
  useEffect(() => {
    if (isOpen) {
      setTempSelectedYears(selectedYears);
      setTempSelectedCategories(selectedCategories);
    }
  }, [isOpen]); // Only depend on isOpen - update when modal opens

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleYearToggle = (year: string) => {
    setTempSelectedYears(prev => 
      prev.includes(year) 
        ? prev.filter(y => y !== year)
        : [...prev, year]
    );
  };

  const handleCategoryToggle = (category: string) => {
    setTempSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSelectAllYears = () => {
    setTempSelectedYears(tempSelectedYears.length === availableYears.length ? [] : availableYears);
  };

  const handleSelectAllCategories = () => {
    setTempSelectedCategories(tempSelectedCategories.length === availableCategories.length ? [] : availableCategories);
  };

  const handleApply = () => {
    onApplyFilters(tempSelectedYears, tempSelectedCategories);
    onClose();
  };

  const handleCancel = () => {
    setTempSelectedYears(selectedYears);
    setTempSelectedCategories(selectedCategories);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - OVERLAY FIJO */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Container - CENTRADO Y ENCIMA */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden animate-modal-appear"
          style={{
            backgroundColor: 'var(--card-background)',
            borderColor: 'var(--border-medium)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Verde */}
          <div className="bg-[#3ABE76] px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-white text-lg font-medium">
                Filtros - {sectionTitle}
              </h2>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content - Scrolleable */}
          <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
            <div className="p-6 space-y-6">
              
              {/* Years Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    Años
                  </h3>
                  <button
                    onClick={handleSelectAllYears}
                    className="text-sm text-[#3ABE76] hover:text-[#2d8f5d] transition-colors"
                  >
                    {tempSelectedYears.length === availableYears.length ? 'Deseleccionar todo' : 'Seleccionar todo'}
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {availableYears.map((year) => (
                    <label
                      key={year}
                      className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg transition-colors"
                      style={{
                        backgroundColor: tempSelectedYears.includes(year) 
                          ? 'rgba(58, 190, 118, 0.1)' 
                          : 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (!tempSelectedYears.includes(year)) {
                          e.currentTarget.style.backgroundColor = 'var(--section-background)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!tempSelectedYears.includes(year)) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={tempSelectedYears.includes(year)}
                        onChange={() => handleYearToggle(year)}
                        className="w-4 h-4 text-[#3ABE76] border-gray-300 rounded focus:ring-[#3ABE76] focus:ring-2"
                      />
                      <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                        {year}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Categories Section */}
              {availableCategories.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>
                      Categorías
                    </h3>
                    <button
                      onClick={handleSelectAllCategories}
                      className="text-sm text-[#3ABE76] hover:text-[#2d8f5d] transition-colors"
                    >
                      {tempSelectedCategories.length === availableCategories.length ? 'Deseleccionar todo' : 'Seleccionar todo'}
                    </button>
                  </div>
                  <div className="space-y-2">
                    {availableCategories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg transition-colors"
                        style={{
                          backgroundColor: tempSelectedCategories.includes(category) 
                            ? 'rgba(58, 190, 118, 0.1)' 
                            : 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          if (!tempSelectedCategories.includes(category)) {
                            e.currentTarget.style.backgroundColor = 'var(--section-background)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!tempSelectedCategories.includes(category)) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={tempSelectedCategories.includes(category)}
                          onChange={() => handleCategoryToggle(category)}
                          className="w-4 h-4 text-[#3ABE76] border-gray-300 rounded focus:ring-[#3ABE76] focus:ring-2"
                        />
                        <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div 
            className="border-t px-6 py-4"
            style={{ borderColor: 'var(--border-medium)' }}
          >
            <div className="flex gap-3 justify-end">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-lg transition-colors font-medium"
                style={{
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--section-background)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--border-medium)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--section-background)';
                }}
              >
                Cancelar
              </button>
              <button
                onClick={handleApply}
                className="px-4 py-2 bg-[#3ABE76] hover:bg-[#2d8f5d] text-white rounded-lg transition-colors font-medium"
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};