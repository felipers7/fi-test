import { Component, Input, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialData } from '../../interfaces/financial.interfaces';

@Component({
  selector: 'app-financial-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-[#ffffff] relative rounded-[20px] financial-card draggable"
         style="min-width: 390px; max-width: 390px; width: 390px; height: 245px;">
      
      <!-- Border and shadow effects -->
      <div class="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]"></div>
      
      <div class="relative size-full">
        <div class="box-border content-stretch flex flex-col gap-4 items-start justify-start p-6 relative size-full">
          
          <!-- Header with drag handle and title -->
          <div class="relative shrink-0 w-full">
            <div class="box-border content-stretch flex flex-row gap-2.5 items-start justify-between p-0 relative w-full">
              
              <!-- Drag handle -->
              <div class="drag-handle cursor-move relative shrink-0 size-6" 
                   title="Arrastrar para reordenar">
                <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <circle cx="7" cy="7" r="1" fill="#9e9e9e"/>
                    <circle cx="7" cy="12" r="1" fill="#9e9e9e"/>
                    <circle cx="7" cy="17" r="1" fill="#9e9e9e"/>
                    <circle cx="12" cy="7" r="1" fill="#9e9e9e"/>
                    <circle cx="12" cy="12" r="1" fill="#9e9e9e"/>
                    <circle cx="12" cy="17" r="1" fill="#9e9e9e"/>
                    <circle cx="17" cy="7" r="1" fill="#9e9e9e"/>
                    <circle cx="17" cy="12" r="1" fill="#9e9e9e"/>
                    <circle cx="17" cy="17" r="1" fill="#9e9e9e"/>
                  </g>
                </svg>
              </div>
              
              <!-- Card title -->
              <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left w-full">
                  <p class="block leading-[normal] card-title">{{ title }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Values display -->
          <div class="relative shrink-0 w-full">
            <div class="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
              
              <!-- Years column -->
              <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                <div class="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
                  <div *ngFor="let year of filteredYears(); let i = index" class="relative shrink-0 w-full">
                    <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px] text-left w-full">
                      <p class="block leading-[normal] year-label">{{ year }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Values column -->
              <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                <div class="box-border content-stretch flex flex-col gap-2 items-end justify-start p-0 relative w-full">
                  <div *ngFor="let value of filteredValues(); let i = index" class="relative shrink-0 w-full">
                    <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-right w-full">
                      <p class="block leading-[normal] value-text">{{ formatNumber(value) }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Result section -->
          <div class="relative shrink-0 w-full">
            <div class="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
              <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[14px] text-left w-full">
                <p class="block leading-[normal]">Resultado 2024</p>
              </div>
              <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#b00020] text-[28px] text-left w-full">
                <p class="block leading-[normal] result-number">{{ formatNumber(data.result) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./financial-card.component.css']
})
export class FinancialCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() data!: FinancialData;
  @Input() globalSelectedYears: string[] = [];

  // Computed properties for filtered data
  filteredYears = computed(() => {
    if (this.globalSelectedYears.length === 0) {
      return this.data.dates;
    }
    return this.data.dates.filter(date => this.globalSelectedYears.includes(date));
  });

  filteredValues = computed(() => {
    if (this.globalSelectedYears.length === 0) {
      return this.data.values;
    }
    const filteredIndices = this.data.dates
      .map((date, index) => this.globalSelectedYears.includes(date) ? index : -1)
      .filter(index => index !== -1);
    return filteredIndices.map(index => this.data.values[index]);
  });

  ngOnInit(): void {
    if (!this.data) {
      console.error('FinancialCard: data input is required');
    }
  }

  formatNumber(value: number): string {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }
    return value.toLocaleString();
  }
}