import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ElementRef, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialCardComponent } from '../financial-card/financial-card.component';
import { FinancialData } from '../../interfaces/financial.interfaces';

@Component({
  selector: 'app-carousel-section',
  standalone: true,
  imports: [CommonModule, FinancialCardComponent],
  template: `
    <div class="relative w-full">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <button
          (click)="onToggleExpansion.emit()"
          class="flex items-center gap-4 accordion-button rounded-lg p-2 -ml-2"
          [attr.aria-expanded]="isExpanded"
          [attr.aria-controls]="sectionId"
        >
          <div class="flex items-center gap-4">
            <!-- Icon placeholder - you can pass actual icons through @Input -->
            <div class="size-8 text-[#404040]" [innerHTML]="iconSvg"></div>
            <h2 class="font-['Inter:Medium',_sans-serif] font-medium text-[24px] text-[#404040]">
              {{ title }}
            </h2>
          </div>
          <div class="size-6 text-[#1a6e31] accordion-arrow transition-transform duration-300"
               [class.rotated]="isExpanded">
            <!-- ChevronDown SVG -->
            <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </button>
        
        <!-- Filter Icon -->
        <button
          *ngIf="showFilter"
          (click)="onFilterClick.emit()"
          class="flex items-center justify-center size-10 rounded-lg hover:bg-gray-100 transition-colors duration-200 filter-button"
          [attr.aria-label]="'Filtrar ' + title"
          title="Filtros"
        >
          <!-- Filter SVG -->
          <svg class="size-5 text-[#404040]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"/>
          </svg>
        </button>
      </div>

      <!-- Content -->
      <div 
        class="accordion-content overflow-hidden transition-all duration-500 ease-in-out"
        [class]="isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'"
        [id]="sectionId"
        [attr.data-state]="isExpanded ? 'open' : 'closed'"
      >
        <div [class]="containerClasses()">
          <!-- Navigation Arrows -->
          <ng-container *ngIf="hasNavigation()">
            <button
              class="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 carousel-nav-button arrow-button"
              (click)="scroll('left')"
              [disabled]="!canScrollLeft()"
              aria-label="Scroll left"
            >
              <div class="bg-[#ffffff] relative rounded-full shadow-lg size-12">
                <div class="flex flex-row items-center justify-center relative size-full">
                  <div class="relative shrink-0 size-6">
                    <!-- ChevronLeft SVG -->
                    <svg class="block size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18-6-6 6-6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
            
            <button
              class="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 carousel-nav-button arrow-button"
              (click)="scroll('right')"
              [disabled]="!canScrollRight()"
              aria-label="Scroll right"
            >
              <div class="bg-[#ffffff] relative rounded-full shadow-lg size-12">
                <div class="flex flex-row items-center justify-center relative size-full">
                  <div class="relative shrink-0 size-6">
                    <!-- ChevronRight SVG -->
                    <svg class="block size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18 6-6-6-6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </ng-container>

          <!-- Cards Container -->
          <div
            #scrollContainer
            [class]="scrollContainerClasses()"
            (scroll)="checkScrollPosition()"
          >
            <div *ngFor="let cardData of cards; let i = index" 
                 class="flex-shrink-0"
                 style="scroll-snap-align: start;">
              <app-financial-card
                [title]="cardData.title"
                [data]="cardData.data"
                [globalSelectedYears]="cardData.globalSelectedYears"
              ></app-financial-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./carousel-section.component.css']
})
export class CarouselSectionComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  @Input() iconSvg: string = '';
  @Input() cards: { title: string; data: FinancialData; globalSelectedYears: string[] }[] = [];
  @Input() isExpanded: boolean = false;
  @Input() showFilter: boolean = true;
  
  @Output() onToggleExpansion = new EventEmitter<void>();
  @Output() onFilterClick = new EventEmitter<void>();
  @Output() onReorderCards = new EventEmitter<any[]>();

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  // Signals for reactive scroll state
  private scrollLeft = signal(0);
  private scrollWidth = signal(0);
  private clientWidth = signal(0);

  sectionId: string = '';

  // Computed properties
  hasNavigation = computed(() => this.cards.length > 3);
  
  canScrollLeft = computed(() => this.scrollLeft() > 0);
  
  canScrollRight = computed(() => 
    this.scrollLeft() < this.scrollWidth() - this.clientWidth() - 1
  );

  containerClasses = computed(() => {
    const baseClasses = 'swipe-container';
    const noArrowsClass = !this.hasNavigation() ? 'no-arrows' : '';
    return `${baseClasses} ${noArrowsClass}`.trim();
  });

  scrollContainerClasses = computed(() => {
    const baseClasses = 'flex overflow-x-auto scrollbar-hide gap-8 py-4 carousel-container';
    const paddingClass = this.hasNavigation() ? 'px-16' : 'px-0';
    return `${baseClasses} ${paddingClass}`.trim();
  });

  private resizeObserver?: ResizeObserver;

  ngOnInit(): void {
    this.sectionId = `section-${this.title.replace(/\s+/g, '-').toLowerCase()}`;
    
    // Set up resize observer for responsive scroll calculations
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.checkScrollPosition();
      });
    }
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  ngAfterViewInit(): void {
    if (this.scrollContainer) {
      this.checkScrollPosition();
      if (this.resizeObserver) {
        this.resizeObserver.observe(this.scrollContainer.nativeElement);
      }
    }
  }

  checkScrollPosition(): void {
    if (this.scrollContainer?.nativeElement && this.hasNavigation()) {
      const element = this.scrollContainer.nativeElement;
      this.scrollLeft.set(element.scrollLeft);
      this.scrollWidth.set(element.scrollWidth);
      this.clientWidth.set(element.clientWidth);
    }
  }

  scroll(direction: 'left' | 'right'): void {
    if (this.scrollContainer?.nativeElement) {
      const scrollAmount = 400;
      const element = this.scrollContainer.nativeElement;
      const newScrollLeft = element.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      element.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  }
}