import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionKey } from '../../interfaces/financial.interfaces';

interface YearSelectProps {
  availableYears: string[];
  selectedYears: string[];
  onYearsChange: (years: string[]) => void;
  isOpen: boolean;
  onToggle: () => void;
}

interface CategorySelectProps {
  availableCategories: string[];
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
  isOpen: boolean;
  onToggle: () => void;
}

@Component({
  selector: 'app-section-filter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="isOpen">
      <!-- Overlay -->
      <div 
        class="fixed inset-0 z-40 bg-black bg-opacity-50" 
        (click)="handleCancel()"
        aria-hidden="true"
      ></div>
      
      <!-- Modal -->
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          class="bg-[#ffffff] relative rounded-lg w-full max-w-md animate-dropdown-appear"
          style="transform-origin: center"
          (click)="$event.stopPropagation()"
        >
          <div class="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-lg"></div>
          <div class="relative size-full">
            <div class="box-border content-stretch flex flex-col gap-6 items-start justify-start pb-5 pt-0 px-0 relative size-full">
              
              <!-- Header -->
              <div class="bg-green-800 relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
                <div class="flex flex-row items-center relative size-full">
                  <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-5 pr-4 py-4 relative w-full">
                    <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                      <div class="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
                        <div
                          class="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap"
                          style="font-variation-settings: 'wdth' 100"
                        >
                          <p class="block leading-[normal] whitespace-pre">{{ sectionTitle }}</p>
                        </div>
                      </div>
                    </div>
                    <div 
                      class="cursor-pointer relative shrink-0 size-6" 
                      (click)="handleCancel()"
                      role="button"
                      tabindex="0"
                      (keydown.enter)="handleCancel()"
                      (keydown.space)="handleCancel()"
                    >
                      <svg
                        class="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 24 24"
                      >
                        <g>
                          <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="white" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="relative shrink-0 w-full">
                <div class="relative size-full">
                  <div class="box-border content-stretch flex flex-col gap-[37px] items-start justify-start px-5 py-0 relative w-full">
                    
                    <!-- Year Filter -->
                    <div class="relative shrink-0 w-full">
                      <div class="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-left w-full">
                          <p class="block leading-[1.4]">Seleccione los años a filtrar:</p>
                        </div>
                        
                        <!-- Year Select -->
                        <div class="relative w-full">
                          <div
                            class="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0 w-full cursor-pointer"
                            (click)="toggleYearSelect()"
                          >
                            <div class="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]"></div>
                            <div class="flex flex-row items-center min-w-inherit relative size-full">
                              <div class="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-between min-w-inherit pl-4 pr-3 py-3 relative w-full">
                                <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
                                  <p class="block leading-[normal] whitespace-pre">{{ getYearDisplayText() }}</p>
                                </div>
                                <div class="relative shrink-0 size-4">
                                  <svg
                                    class="block size-full"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 16 16"
                                  >
                                    <g>
                                      <path
                                        d="M4 6L8 10L12 6"
                                        stroke="#404040"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.6"
                                      />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- Year Dropdown -->
                          <div *ngIf="isYearSelectOpen" class="absolute top-full left-0 right-0 mt-1 z-50">
                            <div class="bg-[#ffffff] relative rounded-lg">
                              <div class="absolute border border-neutral-50 border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)]"></div>
                              <div class="relative size-full">
                                <div class="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative size-full">
                                  <!-- Select All Years -->
                                  <div class="relative shrink-0 w-full cursor-pointer" (click)="handleSelectAllYears()">
                                    <div class="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
                                      <div
                                        class="relative rounded shrink-0 size-4 transition-all duration-200"
                                        [class]="isAllYearsSelected() ? 'bg-[#2e649d]' : 'bg-white border border-[#d0d5dd]'"
                                      >
                                        <div class="flex flex-row items-center justify-center overflow-clip relative size-full">
                                          <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[2px] relative size-4">
                                            <div *ngIf="isAllYearsSelected()" class="relative shrink-0 size-3">
                                              <svg
                                                class="block size-full"
                                                fill="none"
                                                preserveAspectRatio="none"
                                                viewBox="0 0 12 12"
                                              >
                                                <g>
                                                  <path
                                                    d="M1.5 6L4.5 9L10.5 3"
                                                    stroke="white"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-miterlimit="10"
                                                  />
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div *ngIf="isAllYearsSelected()" class="absolute border-2 border-[#cfe5ff] border-solid inset-[-2px] pointer-events-none rounded-md"></div>
                                      </div>
                                      <div class="relative shrink-0 pl-2">
                                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#474d66] text-[12px] text-left text-nowrap">
                                          <p class="block leading-[normal] whitespace-pre">Seleccionar todos</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <!-- Individual Years -->
                                  <div *ngFor="let year of availableYears" 
                                       class="relative shrink-0 w-full cursor-pointer" 
                                       (click)="toggleYear(year)">
                                    <div class="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
                                      <div
                                        class="relative rounded shrink-0 size-4 transition-all duration-200"
                                        [class]="localSelectedYears.includes(year) ? 'bg-[#2e649d]' : 'bg-white border border-[#d0d5dd]'"
                                      >
                                        <div class="flex flex-row items-center justify-center overflow-clip relative size-full">
                                          <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[2px] relative size-4">
                                            <div *ngIf="localSelectedYears.includes(year)" class="relative shrink-0 size-3">
                                              <svg
                                                class="block size-full"
                                                fill="none"
                                                preserveAspectRatio="none"
                                                viewBox="0 0 12 12"
                                              >
                                                <g>
                                                  <path
                                                    d="M1.5 6L4.5 9L10.5 3"
                                                    stroke="white"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-miterlimit="10"
                                                  />
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div *ngIf="localSelectedYears.includes(year)" class="absolute border-2 border-[#cfe5ff] border-solid inset-[-2px] pointer-events-none rounded-md"></div>
                                      </div>
                                      <div class="relative shrink-0 pl-2">
                                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#474d66] text-[12px] text-left text-nowrap">
                                          <p class="block leading-[normal] whitespace-pre">{{ year }}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Category Filter -->
                    <div class="relative shrink-0 w-full">
                      <div class="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-left w-full">
                          <p class="block leading-[1.4]">Seleccione las categorías a filtrar:</p>
                        </div>
                        
                        <!-- Category Select -->
                        <div class="relative w-full">
                          <div
                            class="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0 w-full cursor-pointer"
                            (click)="toggleCategorySelect()"
                          >
                            <div class="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]"></div>
                            <div class="flex flex-row items-center min-w-inherit relative size-full">
                              <div class="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-between min-w-inherit pl-4 pr-3 py-3 relative w-full">
                                <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
                                  <p class="block leading-[normal] whitespace-pre">{{ getCategoryDisplayText() }}</p>
                                </div>
                                <div class="relative shrink-0 size-4">
                                  <svg
                                    class="block size-full"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 16 16"
                                  >
                                    <g>
                                      <path
                                        d="M4 6L8 10L12 6"
                                        stroke="#404040"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.6"
                                      />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- Category Dropdown -->
                          <div *ngIf="isCategorySelectOpen" class="absolute top-full left-0 right-0 mt-1 z-50">
                            <div class="bg-[#ffffff] relative rounded-lg">
                              <div class="absolute border border-neutral-50 border-solid inset-0 pointer-events-none rounded-lg shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)]"></div>
                              <div class="relative size-full">
                                <div class="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative size-full">
                                  <!-- Select All Categories -->
                                  <div class="relative shrink-0 w-full cursor-pointer" (click)="handleSelectAllCategories()">
                                    <div class="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
                                      <div
                                        class="relative rounded shrink-0 size-4 transition-all duration-200"
                                        [class]="isAllCategoriesSelected() ? 'bg-[#2e649d]' : 'bg-white border border-[#d0d5dd]'"
                                      >
                                        <div class="flex flex-row items-center justify-center overflow-clip relative size-full">
                                          <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[2px] relative size-4">
                                            <div *ngIf="isAllCategoriesSelected()" class="relative shrink-0 size-3">
                                              <svg
                                                class="block size-full"
                                                fill="none"
                                                preserveAspectRatio="none"
                                                viewBox="0 0 12 12"
                                              >
                                                <g>
                                                  <path
                                                    d="M1.5 6L4.5 9L10.5 3"
                                                    stroke="white"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-miterlimit="10"
                                                  />
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div *ngIf="isAllCategoriesSelected()" class="absolute border-2 border-[#cfe5ff] border-solid inset-[-2px] pointer-events-none rounded-md"></div>
                                      </div>
                                      <div class="relative shrink-0 pl-2">
                                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#474d66] text-[12px] text-left text-nowrap">
                                          <p class="block leading-[normal] whitespace-pre">SELECCIONAR TODO</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <!-- Individual Categories -->
                                  <div *ngFor="let category of availableCategories" 
                                       class="relative shrink-0 w-full cursor-pointer" 
                                       (click)="toggleCategory(category)">
                                    <div class="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
                                      <div
                                        class="relative rounded shrink-0 size-4 transition-all duration-200"
                                        [class]="localSelectedCategories.includes(category) ? 'bg-[#2e649d]' : 'bg-white border border-[#d0d5dd]'"
                                      >
                                        <div class="flex flex-row items-center justify-center overflow-clip relative size-full">
                                          <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[2px] relative size-4">
                                            <div *ngIf="localSelectedCategories.includes(category)" class="relative shrink-0 size-3">
                                              <svg
                                                class="block size-full"
                                                fill="none"
                                                preserveAspectRatio="none"
                                                viewBox="0 0 12 12"
                                              >
                                                <g>
                                                  <path
                                                    d="M1.5 6L4.5 9L10.5 3"
                                                    stroke="white"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-miterlimit="10"
                                                  />
                                                </g>
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                        <div *ngIf="localSelectedCategories.includes(category)" class="absolute border-2 border-[#cfe5ff] border-solid inset-[-2px] pointer-events-none rounded-md"></div>
                                      </div>
                                      <div class="relative shrink-0 pl-2">
                                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#474d66] text-[12px] text-left text-nowrap">
                                          <p class="block leading-[normal] whitespace-pre">{{ category }}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Buttons -->
              <div class="relative shrink-0 w-full">
                <div class="relative size-full">
                  <div class="box-border content-stretch flex flex-row gap-2 items-start justify-start px-5 py-0 relative w-full">
                    <button
                      class="h-9 relative rounded-lg shrink-0 w-[150px] transition-all duration-200 hover:bg-red-50 filter-cancel-button"
                      (click)="handleCancel()"
                    >
                      <div class="absolute border-2 border-[#b00020] border-solid inset-0 pointer-events-none rounded-lg"></div>
                      <div class="flex flex-row items-center relative size-full">
                        <div class="box-border content-stretch flex flex-row h-9 items-center justify-between px-3 py-2 relative w-[150px]">
                          <div
                            class="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b00020] text-[14px] text-left text-nowrap"
                            style="font-variation-settings: 'wdth' 100"
                          >
                            <p class="block leading-[normal] whitespace-pre">Cancelar</p>
                          </div>
                        </div>
                      </div>
                    </button>

                    <button
                      class="bg-[#1a6e31] h-9 relative rounded-lg shrink-0 w-[150px] transition-all duration-200 hover:bg-green-700 filter-apply-button"
                      (click)="handleApply()"
                    >
                      <div class="flex flex-row items-center relative size-full">
                        <div class="box-border content-stretch flex flex-row h-9 items-center justify-between px-3 py-2 relative w-[150px]">
                          <div
                            class="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
                            style="font-variation-settings: 'wdth' 100"
                          >
                            <p class="block leading-[normal] whitespace-pre">Aplicar</p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-container>
  `,
  styleUrls: ['./section-filter.component.css']
})
export class SectionFilterComponent implements OnInit, OnDestroy {
  @Input() isOpen: boolean = false;
  @Input() sectionTitle: string = '';
  @Input() availableYears: string[] = [];
  @Input() availableCategories: string[] = [];
  @Input() selectedYears: string[] = [];
  @Input() selectedCategories: string[] = [];

  @Output() onClose = new EventEmitter<void>();
  @Output() onApplyFilters = new EventEmitter<{ years: string[], categories: string[] }>();

  localSelectedYears: string[] = [];
  localSelectedCategories: string[] = [];
  isYearSelectOpen = signal(false);
  isCategorySelectOpen = signal(false);

  ngOnInit(): void {
    this.localSelectedYears = [...this.selectedYears];
    this.localSelectedCategories = [...this.selectedCategories];
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  ngOnChanges(): void {
    if (this.isOpen) {
      this.localSelectedYears = [...this.selectedYears];
      this.localSelectedCategories = [...this.selectedCategories];
    }
  }

  toggleYearSelect(): void {
    this.isYearSelectOpen.set(!this.isYearSelectOpen());
    this.isCategorySelectOpen.set(false);
  }

  toggleCategorySelect(): void {
    this.isCategorySelectOpen.set(!this.isCategorySelectOpen());
    this.isYearSelectOpen.set(false);
  }

  handleSelectAllYears(): void {
    const allSelected = this.localSelectedYears.length === this.availableYears.length;
    this.localSelectedYears = allSelected ? [] : [...this.availableYears];
  }

  handleSelectAllCategories(): void {
    const allSelected = this.localSelectedCategories.length === this.availableCategories.length;
    this.localSelectedCategories = allSelected ? [] : [...this.availableCategories];
  }

  toggleYear(year: string): void {
    const index = this.localSelectedYears.indexOf(year);
    if (index > -1) {
      this.localSelectedYears.splice(index, 1);
    } else {
      this.localSelectedYears.push(year);
    }
  }

  toggleCategory(category: string): void {
    const index = this.localSelectedCategories.indexOf(category);
    if (index > -1) {
      this.localSelectedCategories.splice(index, 1);
    } else {
      this.localSelectedCategories.push(category);
    }
  }

  isAllYearsSelected(): boolean {
    return this.localSelectedYears.length === this.availableYears.length && this.availableYears.length > 0;
  }

  isAllCategoriesSelected(): boolean {
    return this.localSelectedCategories.length === this.availableCategories.length && this.availableCategories.length > 0;
  }

  getYearDisplayText(): string {
    if (this.localSelectedYears.length === 0) return "Seleccione un año";
    if (this.localSelectedYears.length === this.availableYears.length) return "Todos los años";
    if (this.localSelectedYears.length === 1) return this.localSelectedYears[0];
    return `${this.localSelectedYears.length} años seleccionados`;
  }

  getCategoryDisplayText(): string {
    if (this.localSelectedCategories.length === 0) return "Selecciones una categoría";
    if (this.localSelectedCategories.length === this.availableCategories.length) return "Todas las categorías";
    if (this.localSelectedCategories.length === 1) return this.localSelectedCategories[0];
    return `${this.localSelectedCategories.length} categorías`;
  }

  handleApply(): void {
    this.onApplyFilters.emit({
      years: this.localSelectedYears,
      categories: this.localSelectedCategories
    });
    this.onClose.emit();
  }

  handleCancel(): void {
    this.localSelectedYears = [...this.selectedYears];
    this.localSelectedCategories = [...this.selectedCategories];
    this.onClose.emit();
  }
}