import React from 'react';
import svgPaths from "../imports/svg-h9t05zbsew";

interface FinancialData {
  dates: string[];
  result: number | string;
  // Tres filas de datos conceptualmente claras (8 valores cada una = 24 valores total)
  presupuestadoValues: (number | string)[]; // Fila 1 - Valores presupuestados
  realValues: (number | string)[]; // Fila 2 - Valores reales/base
  proyectadoValues?: (number | string)[]; // Fila 3 - Valores proyectados (opcional)
}

interface FinancialCardProps {
  title: string;
  data: FinancialData;
  globalSelectedYears: string[];
}

export const FinancialCard: React.FC<FinancialCardProps> = ({
  title,
  data,
  globalSelectedYears
}) => {
  // Filter data based on selected years
  const filteredData = data.dates
    .map((date, index) => ({
      date,
      presupuestadoValue: data.presupuestadoValues[index],
      realValue: data.realValues[index],
      proyectadoValue: data.proyectadoValues ? data.proyectadoValues[index] : undefined,
      index
    }))
    .filter(item => globalSelectedYears.includes(item.date))
    .sort((a, b) => parseInt(a.date) - parseInt(b.date));

  const formatNumber = (num: number | string): string => {
    if (typeof num === 'string') return num; // Handle '-', 'cargando', etc.
    return new Intl.NumberFormat('es-ES').format(num);
  };

  // Function to format the year display in the selector
  const formatYearDisplay = (years: string[]): string => {
    if (years.length === 0) return '2022-2027';
    if (years.length === 1) return years[0];
    return `${years[0]}-${years[years.length - 1]}`;
  };

  return (
    <div
      className="financial-card relative rounded-[18.9259px]"
      style={{ minWidth: '370px', width: '370px' }}
    >
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit overflow-clip p-[12px] relative size-full">

          {/* Header Frame - EXACTO DEL CAJA FINAL */}
          <div className="min-w-[370px] relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center min-w-inherit p-[6px] relative w-full">

                {/* Título */}
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                  <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                    <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap dark:text-[#adadad]">
                      <p className="block leading-[normal] whitespace-pre">{title}</p>
                    </div>
                  </div>
                </div>

                {/* Selector de años - ADAPTABLE */}
                <div className="financial-card-select h-10 min-w-[100px] relative rounded-lg shrink-0">
                  <div className="absolute financial-card-select-border border border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                  <div className="flex flex-row items-center min-w-inherit relative size-full">
                    <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
                      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left financial-card-select-text text-nowrap">
                        <p className="block leading-[normal] whitespace-pre">
                          {formatYearDisplay(globalSelectedYears)}
                        </p>
                      </div>

                      {/* Chevron Down */}
                      <div className="relative shrink-0 size-4">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path
                              d="M4 6L8 10L12 6"
                              className="financial-card-chevron"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.6"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Drag Gripper - ADAPTABLE CON TOOLTIP */}
                <div
                  className="relative shrink-0 size-6 drag-handle group cursor-move"
                  title="Arrastra para reordenar"
                  aria-label="Mover tarjeta"
                >
                  <svg className="block size-full transition-all duration-200 group-hover:scale-110" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g>
                      <path
                        clipRule="evenodd"
                        d={svgPaths.p1e1c14f0}
                        className="financial-card-gripper"
                        fillRule="evenodd"
                      />
                    </g>
                  </svg>

                  {/* Tooltip para mostrar funcionalidad */}
                  <div className="absolute -top-8 -left-12 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    Arrastra aquí
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fechas Header - ADAPTABLE */}
          <div className="h-[34.111px] relative shrink-0 w-full">
            <div className="absolute border-[0px_0px_0.8px] border-dashed financial-card-border-dashed inset-0 pointer-events-none" />
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
                {filteredData.map((item) => (
                  <div key={item.date} className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
                        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left financial-card-date-text text-nowrap">
                          <p className="block leading-[normal] whitespace-pre">{item.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resultado Principal - ADAPTABLE */}
          <div className="h-[34.111px] relative shrink-0 w-full">
            <div className="absolute border-[0px_0px_0.8px] border-dashed financial-card-border-dashed inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 h-[34.111px] items-center justify-center pb-2 pt-1 px-1 relative w-full">
                <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#b00020] dark:text-[#ff2e2e] text-[28px] text-left text-nowrap">
                  <p className="block leading-[normal] whitespace-pre">{formatNumber(data.result)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* FILA 1 - Primera fila (ceros por defecto) */}
          <div className="h-[34.111px] relative shrink-0 w-full">
            <div className="absolute border-[0px_0px_0.8px] border-dashed financial-card-border-dashed inset-0 pointer-events-none" />
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
                {filteredData.map((item, index) => (
                  <div key={`presupuestado-${item.date}`} className={`basis-0 ${index > 0 ? 'financial-card-transparent-bg' : ''} grow h-full min-h-px min-w-px relative shrink-0`}>
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] dark:text-[#3acfff] text-[12px] text-left text-nowrap">
                          <p className="block leading-[normal] whitespace-pre">
                            {formatNumber(item.presupuestadoValue)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FILA 2 - Segunda fila (valores base/originales) */}
          <div className="h-[34.111px] relative shrink-0 w-full">
            <div className="absolute border-[0px_0px_0.8px] border-dashed financial-card-border-dashed inset-0 pointer-events-none" />
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
                {filteredData.map((item, index) => (
                  <div key={`real-${item.date}`} className={`basis-0 ${index > 0 ? 'financial-card-transparent-bg' : ''} grow h-full min-h-px min-w-px relative shrink-0`}>
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] dark:text-[#3acfff] text-[12px] text-left text-nowrap">
                          <p className="block leading-[normal] whitespace-pre">
                            {formatNumber(item.realValue)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FILA 3 - Tercera fila (valores proyectados) - UPDATED to handle '-' for historical years */}
          <div className="h-[34.111px] relative shrink-0 w-full">
            <div className="absolute border-[0px_0px_0.8px] border-dashed financial-card-border-dashed inset-0 pointer-events-none" />
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
                {filteredData.map((item, index) => (
                  <div key={`proyectado-${item.date}`} className={`basis-0 ${index > 0 ? 'financial-card-transparent-bg' : ''} grow h-full min-h-px min-w-px relative shrink-0`}>
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full`}>
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] dark:text-[#3acfff] text-[12px] text-left text-nowrap">
                          <p className="block leading-[normal] whitespace-pre">
                            {formatNumber(item.proyectadoValue ?? '-')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Border y shadow ADAPTATIVOS */}
      <div className="absolute financial-card-outer-border border border-solid inset-0 pointer-events-none rounded-[18.9259px] financial-card-shadow" />
    </div>
  );
};