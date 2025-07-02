import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import svgPaths from '../../imports/svg-vsl3eqlqsh';

@Component({
  selector: 'app-indicadores',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative size-full" data-name="indicadores">
      <div class="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative size-full">
        
        <!-- Primera Caja - UTILIDAD -->
        <div
          class="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shrink-0"
          data-name="Caja-final"
        >
          <div class="min-w-inherit overflow-clip relative size-full">
            <div class="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative">
              
              <!-- Header con selector -->
              <div class="min-w-[370px] relative shrink-0 w-full">
                <div class="flex flex-row items-center min-w-inherit overflow-clip relative size-full">
                  <div class="box-border content-stretch flex flex-row gap-3 items-center justify-start min-w-inherit px-0 py-1.5 relative w-full">
                    
                    <!-- Titulo con info icon -->
                    <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                      <div class="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
                          <p class="block leading-[normal] whitespace-pre">UTILIDAD</p>
                        </div>
                        
                        <!-- Info Icon -->
                        <div class="relative shrink-0 size-4" data-name="ic_Info_">
                          <div class="absolute contents left-[1.358px] top-[1.358px]" data-name="InfoCircle">
                            <div class="absolute bottom-[8.486%] left-[8.486%] right-[8.486%] top-[8.486%]" data-name="Ellipse">
                              <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                <path
                                  [attr.d]="svgPaths.p31f23600"
                                  id="Ellipse "
                                  stroke="#9E9E9E"
                                  stroke-width="1.5"
                                />
                              </svg>
                            </div>
                            <div class="absolute contents left-[7.262px] top-[4.242px]">
                              <div class="absolute bg-[#9e9e9e] bottom-[27.849%] left-[46.541%] right-[46.541%] rounded-[15px] top-[40.727%]" />
                              <div class="absolute bg-[#9e9e9e] bottom-[64.264%] left-[45.387%] right-[45.387%] rounded-[15px] top-[26.511%]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Select dropdown -->
                    <div class="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0" data-name="SELECT">
                      <div class="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                      <div class="flex flex-row items-center min-w-inherit relative size-full">
                        <div class="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
                          <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">2024-2026</p>
                          </div>
                          <!-- Chevron Down -->
                          <div class="relative shrink-0 size-4" data-name="Chevron down">
                            <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g id="Chevron down">
                                <path
                                  d="M4 6L8 10L12 6"
                                  id="Icon"
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
                    
                    <!-- Drag gripper -->
                    <div class="relative shrink-0 size-6" data-name="ix:drag-gripper">
                      <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="ix:drag-gripper">
                          <path
                            clip-rule="evenodd"
                            [attr.d]="svgPaths.p1e1c14f0"
                            fill="#404040"
                            fill-rule="evenodd"
                            id="Vector"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Fechas header -->
              <div class="h-[34.111px] relative shrink-0 w-full" data-name="Fechas">
                <div class="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
                <div class="flex flex-row items-center relative size-full">
                  <div class="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
                    <div class="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Fecha3">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
                          <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Fecha4">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
                          <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Fecha5">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
                          <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">2026</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Resultado -->
              <div class="h-[34.111px] relative shrink-0 w-full" data-name="resultado">
                <div class="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
                <div class="flex flex-row items-center justify-center relative size-full">
                  <div class="box-border content-stretch flex flex-row gap-2.5 h-[34.111px] items-center justify-center pb-2 pt-1 px-1 relative w-full">
                    <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#b00020] text-[28px] text-left text-nowrap">
                      <p class="block leading-[normal] whitespace-pre">15.376</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Cantidades -->
              <div class="h-[34.111px] relative shrink-0 w-full" data-name="Cantidades">
                <div class="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
                <div class="flex flex-row items-center relative size-full">
                  <div class="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
                    <div class="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0" data-name="Cantidad7">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">147.950</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0" data-name="Cantidad5">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">177.540</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0" data-name="Cantidad5">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">177.540</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Label UTILIDAD -->
              <div class="h-[34.111px] relative shrink-0 w-full">
                <div class="flex flex-row items-center overflow-clip relative size-full">
                  <div class="box-border content-stretch flex flex-row gap-3 h-[34.111px] items-center justify-start pb-2 pt-0 px-1.5 relative w-full">
                    <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
                      <p class="block leading-[normal] whitespace-pre">UTILIDAD</p>
                    </div>
                  </div>
                </div>
                <div class="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
              </div>

              <!-- Segunda fila de cantidades -->
              <div class="h-[34.111px] relative shrink-0 w-full" data-name="Cantidades">
                <div class="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
                <div class="flex flex-row items-center relative size-full">
                  <div class="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
                    <div class="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">147.950</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">177.540</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">177.540</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
        </div>

        <!-- Segunda Caja - Flujo de caja -->
        <div
          class="bg-[#ffffff] h-[293px] min-w-[370px] relative rounded-[18.9259px] shrink-0 w-[370px]"
          data-name="Caja-final"
        >
          <div class="min-w-inherit overflow-clip relative size-full">
            <div class="box-border content-stretch flex flex-col gap-[9px] h-[293px] items-start justify-start min-w-inherit p-[12px] relative w-[370px]">
              
              <!-- Fechas -->
              <div class="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Fechas">
                <div class="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
                <div class="flex flex-row items-center relative size-full">
                  <div class="box-border content-stretch flex flex-row items-center justify-start pb-2 pt-0 px-0 relative size-full">
                    <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
                          <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
                          <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
                          <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">2026</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- EXCEDENTE DE CAJA ESTRUCTURAL -->
              <div class="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
                <div class="flex flex-row items-center overflow-clip relative size-full">
                  <div class="box-border content-stretch flex flex-row gap-3 items-center justify-start pb-2 pt-0 px-1.5 relative size-full">
                    <div class="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow h-full leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left">
                      <p class="block leading-[normal]">EXCEDENTE DE CAJA ESTRUCTURAL</p>
                    </div>
                  </div>
                </div>
                <div class="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
              </div>

              <!-- Cantidades excedente -->
              <div class="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Cantidades">
                <div class="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
                <div class="flex flex-row items-center relative size-full">
                  <div class="box-border content-stretch flex flex-row items-center justify-start pb-2 pt-0 px-0 relative size-full">
                    <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">147.950</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">177.540</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">177.540</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- REQUERIMIENTO DE CAJA ADICIONAL -->
              <div class="relative shrink-0 w-full">
                <div class="flex flex-row items-center overflow-clip relative size-full">
                  <div class="box-border content-stretch flex flex-row items-center justify-between pb-2 pt-0 px-1.5 relative w-full">
                    <div class="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left">
                      <p class="block leading-[normal]">REQUERIMIENTO DE CAJA ADICIONAL POR ESTACIONALIDAD</p>
                    </div>
                  </div>
                </div>
                <div class="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
              </div>

              <!-- Cantidades requerimiento (rojas) -->
              <div class="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Cantidades">
                <div class="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
                <div class="flex flex-row items-center relative size-full">
                  <div class="box-border content-stretch flex flex-row items-center justify-start pb-2 pt-0 px-0 relative size-full">
                    <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#b00020] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">147.950</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#b00020] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">177.540</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#b00020] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">177.540</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Última fila de cantidades -->
              <div class="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Cantidades">
                <div class="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
                <div class="flex flex-row items-center relative size-full">
                  <div class="box-border content-stretch flex flex-row items-center justify-start pb-2 pt-0 px-0 relative size-full">
                    <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">150.000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">180.000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                      <div class="flex flex-row items-center justify-center relative size-full">
                        <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
                          <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
                            <p class="block leading-[normal] whitespace-pre">180.000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
        </div>

        <!-- Tercera Caja - PARÁMETROS -->
        <div
          class="bg-[#ffffff] h-[292px] relative rounded-[18.9259px] shrink-0 w-[345px]"
          data-name="Cajas"
        >
          <div class="overflow-clip relative size-full">
            <div class="box-border content-stretch flex flex-col gap-[9px] h-[292px] items-start justify-start p-[12px] relative w-[345px]">
              
              <!-- Header PARÁMETROS -->
              <div class="h-[31px] relative rounded-[31.5431px] shrink-0 w-full">
                <div class="flex flex-row items-center overflow-clip relative size-full">
                  <div class="box-border content-stretch flex flex-row h-[31px] items-center justify-start p-[6px] relative w-full">
                    <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[14px] text-left text-nowrap">
                      <p class="block leading-[normal] whitespace-pre">PARÁMETROS</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- INICIO PROYECCIÓN 2025 -->
              <div class="h-[25px] relative rounded-lg shrink-0 w-full" data-name="Cantidades">
                <div class="box-border content-stretch flex flex-row h-[25px] items-center justify-start p-0 relative w-full">
                  <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                    <div class="flex flex-row items-center relative size-full">
                      <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative size-full">
                        <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[14px] text-left text-nowrap">
                          <p class="block leading-[normal] whitespace-pre">INICIO PROYECCIÓN 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- DÍAS PERÍODO -->
              <div class="h-[25px] relative rounded-lg shrink-0 w-full" data-name="Cantidades">
                <div class="box-border content-stretch flex flex-row h-[25px] items-center justify-start p-0 relative w-full">
                  <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                    <div class="flex flex-row items-center relative size-full">
                      <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative size-full">
                        <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[14px] text-left text-nowrap">
                          <p class="block leading-[normal] whitespace-pre">DÍAS PERÍODO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                    <div class="flex flex-row items-center justify-end relative size-full">
                      <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-[4px] relative size-full">
                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
                          <p class="block leading-[normal] whitespace-pre">365</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- UNIDAD DE MEDIDA -->
              <div class="relative rounded-lg shrink-0 w-full" data-name="Cantidades">
                <div class="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
                  <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div class="flex flex-row items-center relative size-full">
                      <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative w-full">
                        <div class="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2e649d] text-[14px] text-left">
                          <p class="block leading-[normal]">UNIDAD DE MEDIDA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Select UNIDADES -->
                  <div class="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0" data-name="SELECT">
                    <div class="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                    <div class="flex flex-row items-center min-w-inherit relative size-full">
                      <div class="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
                        <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
                          <p class="block leading-[normal] whitespace-pre">UNIDADES</p>
                        </div>
                        <!-- Chevron Down -->
                        <div class="relative shrink-0 size-4" data-name="Chevron down">
                          <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g id="Chevron down">
                              <path
                                d="M4 6L8 10L12 6"
                                id="Icon"
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
                </div>
              </div>

              <!-- MONEDA -->
              <div class="relative rounded-lg shrink-0 w-full" data-name="Cantidades">
                <div class="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
                  <div class="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div class="flex flex-row items-center relative size-full">
                      <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative w-full">
                        <div class="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2e649d] text-[14px] text-left">
                          <p class="block leading-[normal]">MONEDA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Select CLP -->
                  <div class="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0" data-name="SELECT">
                    <div class="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                    <div class="flex flex-row items-center justify-center min-w-inherit relative size-full">
                      <div class="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-center min-w-inherit pl-4 pr-3 py-3 relative">
                        <div class="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
                          <p class="block leading-[normal] whitespace-pre">CLP</p>
                        </div>
                        <!-- Chevron Down -->
                        <div class="relative shrink-0 size-4" data-name="Chevron down">
                          <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g id="Chevron down">
                              <path
                                d="M4 6L8 10L12 6"
                                id="Icon"
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
                </div>
              </div>
            </div>
          </div>
          <div class="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
        </div>

        <!-- Cuarta Caja - VALORIZACIÓN -->
        <div
          class="basis-0 bg-[#ffffff] grow h-[293px] min-h-px min-w-px relative rounded-[18.9259px] shrink-0"
          data-name="Cajas"
        >
          <div class="overflow-clip relative size-full">
            <div class="box-border content-stretch flex flex-col gap-[9px] h-[293px] items-start justify-start p-[12px] relative w-full">
              
              <!-- Header VALORIZACIÓN -->
              <div class="h-[31px] relative rounded-[31.5431px] shrink-0 w-full">
                <div class="flex flex-row items-center overflow-clip relative size-full">
                  <div class="box-border content-stretch flex flex-row h-[31px] items-center justify-start p-[6px] relative w-full">
                    <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[20px] text-left text-nowrap">
                      <p class="block leading-[normal] whitespace-pre">VALORIZACIÓN</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- RD -->
              <div class="h-[25px] relative rounded-lg shrink-0 w-full" data-name="Cantidades">
                <div class="box-border content-stretch flex flex-row h-[25px] items-center justify-start p-0 relative w-full">
                  <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                    <div class="flex flex-row items-center relative size-full">
                      <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative size-full">
                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[16px] text-left text-nowrap">
                          <p class="block leading-[normal] whitespace-pre">RD</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                    <div class="flex flex-row items-center justify-end relative size-full">
                      <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-[4px] relative size-full">
                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[16px] text-left text-nowrap">
                          <p class="block leading-[normal] whitespace-pre">230.802</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- RE -->
              <div class="h-[25px] relative rounded-lg shrink-0 w-full" data-name="Cantidades">
                <div class="box-border content-stretch flex flex-row h-[25px] items-center justify-start p-0 relative w-full">
                  <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                    <div class="flex flex-row items-center relative size-full">
                      <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative size-full">
                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[16px] text-left text-nowrap">
                          <p class="block leading-[normal] whitespace-pre">RE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                    <div class="flex flex-row items-center justify-end relative size-full">
                      <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-[4px] relative size-full">
                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[16px] text-left text-nowrap">
                          <p class="block leading-[normal] whitespace-pre">230.802</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- WACC -->
              <div class="h-[25px] relative rounded-lg shrink-0 w-full" data-name="Cantidades">
                <div class="box-border content-stretch flex flex-row h-[25px] items-center justify-start p-0 relative w-full">
                  <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                    <div class="flex flex-row items-center relative size-full">
                      <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative size-full">
                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[16px] text-left text-nowrap">
                          <p class="block leading-[normal] whitespace-pre">WACC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                    <div class="flex flex-row items-center justify-end relative size-full">
                      <div class="box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-[4px] relative size-full">
                        <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[16px] text-left text-nowrap">
                          <p class="block leading-[normal] whitespace-pre">230.802</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent {
  // Hacer los svgPaths disponibles para el template
  svgPaths = svgPaths;

  constructor() {}
}