import { useState, useRef, useEffect } from 'react';

interface YearFilterSelectorProps {
  availableYears: string[];
  selectedYears: string[];
  onYearsChange: (years: string[]) => void;
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-4" data-name="Chevron down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Chevron down">
          <path
            d="M4 6L8 10L12 6"
            id="Icon"
            stroke="#404040"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon12CheckboxSelected() {
  return (
    <div className="relative shrink-0 size-3" data-name="Icon/12/Checkbox Selected">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Icon/12/Checkbox Selected">
          <path
            d="M1.5 6L4.5 9L10.5 3"
            id="Vector"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
        </g>
      </svg>
    </div>
  );
}

function MasterCheckbox({ checked }: { checked: boolean }) {
  return (
    <div
      className={`relative rounded shrink-0 size-4 ${
        checked ? 'bg-[#2e649d]' : 'bg-white border border-[#d0d5dd]'
      }`}
      data-name="Master/Checkbox"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[2px] relative size-4">
          {checked && <Icon12CheckboxSelected />}
        </div>
      </div>
      {checked && (
        <div className="absolute border-2 border-[#cfe5ff] border-solid inset-[-2px] pointer-events-none rounded-md" />
      )}
    </div>
  );
}

function CheckboxOption({ 
  text, 
  checked, 
  onClick, 
  disabled = false 
}: { 
  text: string; 
  checked: boolean; 
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <div 
      className={`relative shrink-0 w-full cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
      data-name="Checkbox_16px"
      onClick={disabled ? undefined : onClick}
    >
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <MasterCheckbox checked={checked} />
        <div className="relative shrink-0" data-name="Type=Normal">
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-row items-start justify-start pl-2 pr-0 py-0 relative">
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#474d66] text-[12px] text-left text-nowrap">
                <p className="block leading-[normal] whitespace-pre">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function YearFilterSelector({ availableYears, selectedYears, onYearsChange }: YearFilterSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleYearToggle = (year: string) => {
    const isSelected = selectedYears.includes(year);
    let newSelection: string[];

    if (isSelected) {
      // Don't allow deselecting all years - must have at least one
      if (selectedYears.length > 1) {
        newSelection = selectedYears.filter(y => y !== year);
      } else {
        return; // Don't deselect the last year
      }
    } else {
      newSelection = [...selectedYears, year].sort();
    }

    onYearsChange(newSelection);
  };

  const handleSelectAll = () => {
    const allSelected = selectedYears.length === availableYears.length;
    if (allSelected) {
      // Keep only the first year when "deselecting all"
      onYearsChange([availableYears[0]]);
    } else {
      onYearsChange([...availableYears]);
    }
  };

  const getDisplayText = () => {
    if (selectedYears.length === availableYears.length) {
      // Show range format when all years are selected (2022-2027)
      const sortedYears = availableYears.sort();
      return `${sortedYears[0]}-${sortedYears[sortedYears.length - 1]}`;
    } else if (selectedYears.length === 1) {
      return selectedYears[0];
    } else if (selectedYears.length <= 2) {
      return selectedYears.join(', ');
    } else {
      return `${selectedYears.length} años`;
    }
  };

  const allSelected = selectedYears.length === availableYears.length;

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0 cursor-pointer year-filter-selector"
        data-name="YEAR_FILTER"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
        <div className="flex flex-row items-center min-w-inherit relative size-full">
          <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
            <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap max-w-[100px] overflow-hidden text-ellipsis">
              <p className="block leading-[normal] whitespace-pre truncate">{getDisplayText()}</p>
            </div>
            <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="bg-[#ffffff] relative rounded-lg size-full absolute top-full left-0 right-0 mt-1 z-50 min-w-[200px]" 
          data-name="SELECT"
        >
          <div className="absolute border border-neutral-50 border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)]" />
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative size-full">
              
              {/* Select All Option */}
              <CheckboxOption
                text="Seleccionas todos"
                checked={allSelected}
                onClick={handleSelectAll}
              />

              {/* Individual Year Options */}
              {availableYears.map((year) => {
                const isSelected = selectedYears.includes(year);
                const isLastSelected = selectedYears.length === 1 && isSelected;
                
                return (
                  <CheckboxOption
                    key={year}
                    text={year}
                    checked={isSelected}
                    onClick={() => handleYearToggle(year)}
                    disabled={isLastSelected}
                  />
                );
              })}
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}