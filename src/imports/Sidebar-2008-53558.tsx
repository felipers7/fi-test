import svgPaths from "./svg-tlrzm2wqv9";

function IconSolidChevronLeft() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="Icon/Solid/chevron-left"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon/Solid/chevron-left">
          <path
            clipRule="evenodd"
            d={svgPaths.pf08ef40}
            fill="var(--fill-0, #242424)"
            fillRule="evenodd"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function ExpandIcon() {
  return (
    <div
      className="absolute bg-[#ffffff] right-[-12px] rounded-[99px] top-7"
      data-name="Expand icon"
    >
      <div className="absolute border border-neutral-100 border-solid inset-[-1px] pointer-events-none rounded-[100px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[4px] relative">
          <IconSolidChevronLeft />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-8" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Icon">
          <path
            d={svgPaths.p1a193480}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function HeaderIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Header Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Header Icon">
          <circle
            cx="8"
            cy="8"
            id="Ellipse 320"
            r="5.89762"
            stroke="var(--stroke-0, #ADADAD)"
            strokeWidth="1.5"
          />
          <path
            d="M8 4.81787V9.08756"
            id="Vector 437"
            stroke="var(--stroke-0, #ADADAD)"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            d="M8 10.6713L8 10.9089"
            id="Vector 438"
            stroke="var(--stroke-0, #ADADAD)"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="relative shrink-0" data-name="Header Content">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-center text-neutral-700 text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            PARÁMETROS FINANCIEROS (EDITABLES)
          </p>
        </div>
        <HeaderIcon />
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="relative shrink-0" data-name="Section Header">
      <div className="box-border content-stretch flex flex-row gap-[18px] items-center justify-center p-0 relative">
        <Icon />
        <HeaderContent />
        <div className="h-0 relative shrink-0 w-px">
          <div className="absolute bottom-[-0.394px] left-0 right-0 top-[-0.394px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1 2"
            >
              <path
                d="M0 1H1"
                id="Line 82"
                stroke="var(--stroke-0, #404040)"
                strokeWidth="0.788577"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="order-4 relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-[24px] relative w-full">
          <ExpandIcon />
          <SectionHeader />
        </div>
      </div>
    </div>
  );
}

function IcBaselineKeyboardArrowAbajo() {
  return (
    <div
      className="relative size-[18px]"
      data-name="ic:baseline-keyboard-arrow-abajo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="ic:baseline-keyboard-arrow-abajo">
          <path
            d={svgPaths.p3fb14600}
            fill="var(--fill-0, #FAFAFA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Inner() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Inner"
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
        <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[14px] text-left text-neutral-50">
          <p className="block leading-[normal]">UTILIDAD</p>
        </div>
        <div className="flex h-[18.626px] items-center justify-center relative shrink-0 w-[18.626px]">
          <div className="flex-none rotate-[92.03deg]">
            <IcBaselineKeyboardArrowAbajo />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem() {
  return (
    <div
      className="bg-green-900 h-11 relative rounded-lg shrink-0 w-full"
      data-name="Nav item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start px-4 py-2 relative w-full">
          <Inner />
        </div>
      </div>
    </div>
  );
}

function Fecha1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="fecha1"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha2"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] w-full" />
      </div>
    </div>
  );
}

function Fecha3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha3"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha5() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha5"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha6() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha6"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2027</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fechas() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full" data-name="Fechas">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Fecha1 />
          <Fecha2 />
          <Fecha3 />
          <Fecha4 />
          <Fecha5 />
          <Fecha6 />
        </div>
      </div>
    </div>
  );
}

function Resultado() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="resultado"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[34.111px] items-center justify-center pb-2 pt-1 px-1 relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#b00020] text-[28px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">15.376</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad4() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">147.950</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad7() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">147.950</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad5() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad5"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">177.540</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad6() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad6"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">230.802</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidades() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad4 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad7 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad5 key={i} />
          ))}
          <Cantidad6 />
        </div>
      </div>
    </div>
  );
}

function Cantidad16() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">150.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad17() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">150.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad19() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad5"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">180.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad21() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad6"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">235.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidades2() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad16 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad17 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad19 key={i} />
          ))}
          <Cantidad21 />
        </div>
      </div>
    </div>
  );
}

function Cantidad22() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">152.500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad23() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">152.500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad25() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad5"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">182.500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad27() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad6"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">240.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidades3() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad22 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad23 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad25 key={i} />
          ))}
          <Cantidad27 />
        </div>
      </div>
    </div>
  );
}

function Cantidad28() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">155.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad29() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">155.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad31() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad5"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">185.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad33() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad6"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">245.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidades4() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad28 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad29 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad31 key={i} />
          ))}
          <Cantidad33 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shrink-0 w-full"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-full">
          <Fechas />
          <Resultado />
          <Cantidades />
          <Cantidades />
          <Cantidades2 />
          <Cantidades3 />
          <Cantidades4 />
          <Cantidades />
          <Cantidades />
          <Cantidades />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Mantenedores() {
  return (
    <div className="relative shrink-0 w-full" data-name="mantenedores">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <NavItem />
        <CajaFinal />
      </div>
    </div>
  );
}

function IcBaselineKeyboardArrowAbajo1() {
  return (
    <div
      className="relative size-[18px]"
      data-name="ic:baseline-keyboard-arrow-abajo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="ic:baseline-keyboard-arrow-abajo">
          <path
            d={svgPaths.p3fb14600}
            fill="var(--fill-0, #FAFAFA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Inner1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Inner"
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
        <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[14px] text-left text-neutral-50">
          <p className="block leading-[normal]">CRECIMIENTOS DE VENTA</p>
        </div>
        <div className="flex h-[18.626px] items-center justify-center relative shrink-0 w-[18.626px]">
          <div className="flex-none rotate-[92.03deg]">
            <IcBaselineKeyboardArrowAbajo1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem1() {
  return (
    <div
      className="bg-green-900 h-11 relative rounded-lg shrink-0 w-full"
      data-name="Nav item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start px-4 py-2 relative w-full">
          <Inner1 />
        </div>
      </div>
    </div>
  );
}

function Fecha7() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="fecha1"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha8() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha2"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha9() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha3"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha10() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha11() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha5"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha12() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha6"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2027</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fechas1() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full" data-name="Fechas">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Fecha7 />
          <Fecha8 />
          <Fecha9 />
          <Fecha10 />
          <Fecha11 />
          <Fecha12 />
        </div>
      </div>
    </div>
  );
}

function Cantidad52() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">147.950</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad53() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">147.950</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad55() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad5"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">177.540</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad57() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad6"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">230.802</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidades8() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad52 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad53 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad55 key={i} />
          ))}
          <Cantidad57 />
        </div>
      </div>
    </div>
  );
}

function Cantidad58() {
  return (
    <div
      className="basis-0 grow h-[30px] min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[30px] items-center justify-center px-2 py-1 w-full" />
      </div>
    </div>
  );
}

function Cantidad1() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad1"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-1 relative size-full">
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-left text-neutral-700">
            <p className="block leading-[normal]">PROY</p>
          </div>
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad58 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Cantidad60() {
  return (
    <div
      className="bg-[rgba(4,47,29,0)] h-[30px] relative rounded-lg shrink-0 w-[68px]"
      data-name="Cantidad5"
    >
      <div className="absolute border border-[#1a6e31] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="h-[30px] w-[68px]" />
      </div>
    </div>
  );
}

function Cantidad61() {
  return (
    <div
      className="basis-0 bg-neutral-50 grow h-[30px] min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Cantidad4"
    >
      <div className="absolute border border-[#1a6e31] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[30px] items-center justify-center px-2 py-1 relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a6e31] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">10%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2121453924() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative size-full">
        <Cantidad60 />
        {[...Array(2).keys()].map((_, i) => (
          <Cantidad61 key={i} />
        ))}
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-between pb-2 pt-0 px-0 relative w-full">
          <Cantidad1 />
          <Frame2121453924 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal1() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-full"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-full">
          <Fechas1 />
          <Cantidades8 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Mantenedores1() {
  return (
    <div className="relative shrink-0 w-full" data-name="mantenedores">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <NavItem1 />
        <CajaFinal1 />
      </div>
    </div>
  );
}

function IcBaselineKeyboardArrowAbajo2() {
  return (
    <div
      className="relative size-[18px]"
      data-name="ic:baseline-keyboard-arrow-abajo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="ic:baseline-keyboard-arrow-abajo">
          <path
            d={svgPaths.p3fb14600}
            fill="var(--fill-0, #FAFAFA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Inner2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Inner"
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
        <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[14px] text-left text-neutral-50">
          <p className="block leading-[normal]">INVERSIONES</p>
        </div>
        <div className="flex h-[18.626px] items-center justify-center relative shrink-0 w-[18.626px]">
          <div className="flex-none rotate-[92.03deg]">
            <IcBaselineKeyboardArrowAbajo2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem2() {
  return (
    <div
      className="bg-green-900 h-11 relative rounded-lg shrink-0 w-full"
      data-name="Nav item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start px-4 py-2 relative w-full">
          <Inner2 />
        </div>
      </div>
    </div>
  );
}

function Fecha13() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="fecha1"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha14() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha2"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha15() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha3"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha16() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha17() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha5"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha18() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha6"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2027</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fechas2() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full" data-name="Fechas">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Fecha13 />
          <Fecha14 />
          <Fecha15 />
          <Fecha16 />
          <Fecha17 />
          <Fecha18 />
        </div>
      </div>
    </div>
  );
}

function Cantidad63() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">147.950</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad64() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">147.950</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad66() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad5"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">177.540</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad68() {
  return (
    <div
      className="basis-0 bg-[rgba(232,232,232,0)] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad6"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">230.802</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidades9() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad63 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad64 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad66 key={i} />
          ))}
          <Cantidad68 />
        </div>
      </div>
    </div>
  );
}

function Cantidad69() {
  return (
    <div
      className="basis-0 grow h-[30px] min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[30px] items-center justify-center px-2 py-1 w-full" />
      </div>
    </div>
  );
}

function Cantidad71() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad1"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-1 relative size-full">
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-left text-neutral-700">
            <p className="block leading-[normal]">PROY</p>
          </div>
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad69 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Cantidad72() {
  return (
    <div
      className="bg-[rgba(4,47,29,0)] h-[30px] relative rounded-lg shrink-0 w-[68px]"
      data-name="Cantidad5"
    >
      <div className="absolute border border-[#1a6e31] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="h-[30px] w-[68px]" />
      </div>
    </div>
  );
}

function Cantidad73() {
  return (
    <div
      className="basis-0 bg-neutral-50 grow h-[30px] min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Cantidad4"
    >
      <div className="absolute border border-[#1a6e31] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[30px] items-center justify-center px-2 py-1 relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a6e31] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">10%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2121453925() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative size-full">
        <Cantidad72 />
        {[...Array(2).keys()].map((_, i) => (
          <Cantidad73 key={i} />
        ))}
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-between pb-2 pt-0 px-0 relative w-full">
          <Cantidad71 />
          <Frame2121453925 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal2() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-full"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-full">
          <Fechas2 />
          <Cantidades9 />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Mantenedores2() {
  return (
    <div className="relative shrink-0 w-full" data-name="mantenedores">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <NavItem2 />
        <CajaFinal2 />
      </div>
    </div>
  );
}

function IcBaselineKeyboardArrowAbajo3() {
  return (
    <div
      className="relative size-[18px]"
      data-name="ic:baseline-keyboard-arrow-abajo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="ic:baseline-keyboard-arrow-abajo">
          <path
            d={svgPaths.p3fb14600}
            fill="var(--fill-0, #FAFAFA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Inner3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Inner"
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
        <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[14px] text-left text-neutral-50">
          <p className="block leading-[normal]">VIDA ÚTIL ACTIVOS</p>
        </div>
        <div className="flex h-[18.626px] items-center justify-center relative shrink-0 w-[18.626px]">
          <div className="flex-none rotate-[92.03deg]">
            <IcBaselineKeyboardArrowAbajo3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem3() {
  return (
    <div
      className="bg-green-900 h-11 relative rounded-lg shrink-0 w-full"
      data-name="Nav item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start px-4 py-2 relative w-full">
          <Inner3 />
        </div>
      </div>
    </div>
  );
}

function Cantidad75() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad1"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              VIDA ÚTIL ACTIVOS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad76() {
  return (
    <div
      className="basis-0 bg-[rgba(4,47,29,0)] grow h-[30px] min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Cantidad5"
    >
      <div className="absolute border border-[#1a6e31] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="h-[30px] w-full" />
      </div>
    </div>
  );
}

function Frame2121452916() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row h-[34.111px] items-start justify-start p-0 relative w-full">
        <Cantidad75 />
        <Cantidad76 />
      </div>
    </div>
  );
}

function CajaFinal3() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-full"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-full">
          <Frame2121452916 />
        </div>
      </div>
    </div>
  );
}

function Mantenedores3() {
  return (
    <div className="relative shrink-0 w-full" data-name="mantenedores">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <NavItem3 />
        <CajaFinal3 />
      </div>
    </div>
  );
}

function IcBaselineKeyboardArrowAbajo4() {
  return (
    <div
      className="relative size-[18px]"
      data-name="ic:baseline-keyboard-arrow-abajo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="ic:baseline-keyboard-arrow-abajo">
          <path
            d={svgPaths.p3fb14600}
            fill="var(--fill-0, #FAFAFA)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Inner4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Inner"
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
        <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[14px] text-left text-neutral-50">
          <p className="block leading-[normal]">ESTACIONALIDAD DE VENTAS</p>
        </div>
        <div className="flex h-[18.626px] items-center justify-center relative shrink-0 w-[18.626px]">
          <div className="flex-none rotate-[92.03deg]">
            <IcBaselineKeyboardArrowAbajo4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem4() {
  return (
    <div
      className="bg-green-900 h-11 relative rounded-lg shrink-0 w-full"
      data-name="Nav item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start px-4 py-2 relative w-full">
          <Inner4 />
        </div>
      </div>
    </div>
  );
}

function Fecha19() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="fecha1"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] w-full" />
      </div>
    </div>
  );
}

function Fecha20() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha2"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha21() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha3"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha22() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha4"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha23() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha5"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fecha24() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fecha6"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2027</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fechas3() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full" data-name="Fechas">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Fecha19 />
          <Fecha20 />
          <Fecha21 />
          <Fecha22 />
          <Fecha23 />
          <Fecha24 />
        </div>
      </div>
    </div>
  );
}

function Cantidad77() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad1"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">63.163</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad2() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad2"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#b00020] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">80.535</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad3() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad3"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#b00020] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">134.500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2121453943() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative size-full">
        <Cantidad77 />
        <Cantidad2 />
        <Cantidad3 />
      </div>
    </div>
  );
}

function Cantidad78() {
  return (
    <div
      className="bg-[rgba(4,47,29,0)] h-[30px] relative rounded-lg shrink-0 w-[68px]"
      data-name="Cantidad5"
    >
      <div className="absolute border border-[#1a6e31] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="h-[30px] w-[68px]" />
      </div>
    </div>
  );
}

function Cantidad79() {
  return (
    <div
      className="basis-0 bg-[rgba(4,47,29,0)] grow h-[30px] min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Cantidad4"
    >
      <div className="absolute border border-[#1a6e31] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[30px] items-center justify-center px-0 py-1 relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a6e31] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">10%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad80() {
  return (
    <div
      className="basis-0 bg-[rgba(4,47,29,0)] grow h-[30px] min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Cantidad6"
    >
      <div className="absolute border border-[#1a6e31] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[30px] items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a6e31] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">30%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2121453942() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <Cantidad78 />
        <Cantidad79 />
        <Cantidad80 />
      </div>
    </div>
  );
}

function Frame2121452921() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-start justify-between pb-2 pt-0 px-0 relative w-full">
          <Frame2121453943 />
          <Frame2121453942 />
        </div>
      </div>
    </div>
  );
}

function Cantidad81() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad1"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">63.163</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad82() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad2"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#b00020] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">80.535</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad83() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad3"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#b00020] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">134.500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2121453949() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative size-full">
        <Cantidad81 />
        <Cantidad82 />
        <Cantidad83 />
      </div>
    </div>
  );
}

function Cantidad84() {
  return (
    <div
      className="basis-0 bg-[rgba(4,47,29,0)] grow h-[30px] min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Cantidad5"
    >
      <div className="absolute border border-[#1a6e31] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[30px] items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a6e31] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">20%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad85() {
  return (
    <div
      className="basis-0 bg-[rgba(4,47,29,0)] grow h-[30px] min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Cantidad4"
    >
      <div className="absolute border border-[#1a6e31] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[30px] items-center justify-center px-0 py-1 relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a6e31] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">10%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad86() {
  return (
    <div
      className="basis-0 bg-[rgba(4,47,29,0)] grow h-[30px] min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Cantidad6"
    >
      <div className="absolute border border-[#1a6e31] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[30px] items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a6e31] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">30%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2121453950() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <Cantidad84 />
        <Cantidad85 />
        <Cantidad86 />
      </div>
    </div>
  );
}

function Frame2121452913() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-start justify-between pb-2 pt-0 px-0 relative w-full">
          <Frame2121453949 />
          <Frame2121453950 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal4() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] shrink-0 w-full"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-full">
          <Fechas3 />
          <Frame2121452921 />
          {[...Array(3).keys()].map((_, i) => (
            <Frame2121452913 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Mantenedores4() {
  return (
    <div className="relative shrink-0 w-full" data-name="mantenedores">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <NavItem4 />
        <CajaFinal4 />
      </div>
    </div>
  );
}

function Frame1261153578() {
  return (
    <div className="order-3 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
        <Mantenedores />
        <Mantenedores1 />
        <Mantenedores2 />
        <Mantenedores3 />
        <Mantenedores4 />
        <Mantenedores1 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-8" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Icon">
          <path
            d={svgPaths.p366d9c00}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function HeaderIcon1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Header Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Header Icon">
          <circle
            cx="8"
            cy="8"
            id="Ellipse 320"
            r="5.89762"
            stroke="var(--stroke-0, #ADADAD)"
            strokeWidth="1.5"
          />
          <path
            d="M8 4.81787V9.08756"
            id="Vector 437"
            stroke="var(--stroke-0, #ADADAD)"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            d="M8 10.6713L8 10.9089"
            id="Vector 438"
            stroke="var(--stroke-0, #ADADAD)"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function HeaderContent1() {
  return (
    <div className="relative shrink-0" data-name="Header Content">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-center text-neutral-700 text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            FACTORES FINANCIEROS (EDITABLES)
          </p>
        </div>
        <HeaderIcon1 />
      </div>
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="relative shrink-0" data-name="Section Header">
      <div className="box-border content-stretch flex flex-row gap-[18px] items-center justify-center p-0 relative">
        <Icon13 />
        <HeaderContent1 />
        <div className="h-0 relative shrink-0 w-px">
          <div className="absolute bottom-[-0.394px] left-0 right-0 top-[-0.394px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1 2"
            >
              <path
                d="M0 1H1"
                id="Line 82"
                stroke="var(--stroke-0, #404040)"
                strokeWidth="0.788577"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div className="order-2 relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-[24px] relative w-full">
          <SectionHeader1 />
        </div>
      </div>
    </div>
  );
}

function Inner6() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Inner"
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
        <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#9e9e9e] text-[14px] text-left">
          <p className="block leading-[normal]">UTILIDAD</p>
        </div>
      </div>
    </div>
  );
}

function IcBaselineKeyboardArrowAbajo6() {
  return (
    <div
      className="relative size-[18px]"
      data-name="ic:baseline-keyboard-arrow-abajo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="ic:baseline-keyboard-arrow-abajo">
          <path
            d={svgPaths.p3fb14600}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function NavItem6() {
  return (
    <div
      className="basis-0 grow h-11 min-h-px min-w-px relative rounded-[99px] shrink-0"
      data-name="Nav item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start px-4 py-3 relative w-full">
          <Inner6 />
          <div className="flex h-[18.017px] items-center justify-center relative shrink-0 w-[18.017px]">
            <div className="flex-none rotate-[269.945deg]">
              <IcBaselineKeyboardArrowAbajo6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mantenedores6() {
  return (
    <div className="relative shrink-0 w-full" data-name="mantenedores">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <NavItem6 />
      </div>
    </div>
  );
}

function Inner7() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Inner"
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
        <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#9e9e9e] text-[14px] text-left">
          <p className="block leading-[normal]">CRECIMIENTOS DE VENTA</p>
        </div>
      </div>
    </div>
  );
}

function IcBaselineKeyboardArrowAbajo7() {
  return (
    <div
      className="relative size-[18px]"
      data-name="ic:baseline-keyboard-arrow-abajo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="ic:baseline-keyboard-arrow-abajo">
          <path
            d={svgPaths.p3fb14600}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function NavItem7() {
  return (
    <div
      className="basis-0 grow h-11 min-h-px min-w-px relative rounded-[99px] shrink-0"
      data-name="Nav item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start px-4 py-3 relative w-full">
          <Inner7 />
          <div className="flex h-[18.017px] items-center justify-center relative shrink-0 w-[18.017px]">
            <div className="flex-none rotate-[269.945deg]">
              <IcBaselineKeyboardArrowAbajo7 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mantenedores7() {
  return (
    <div className="relative shrink-0 w-full" data-name="mantenedores">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <NavItem7 />
      </div>
    </div>
  );
}

function Inner8() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Inner"
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
        <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#9e9e9e] text-[14px] text-left">
          <p className="block leading-[normal]">INVERSIONES</p>
        </div>
      </div>
    </div>
  );
}

function IcBaselineKeyboardArrowAbajo8() {
  return (
    <div
      className="relative size-[18px]"
      data-name="ic:baseline-keyboard-arrow-abajo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="ic:baseline-keyboard-arrow-abajo">
          <path
            d={svgPaths.p3fb14600}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function NavItem8() {
  return (
    <div
      className="basis-0 grow h-11 min-h-px min-w-px relative rounded-[99px] shrink-0"
      data-name="Nav item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start px-4 py-3 relative w-full">
          <Inner8 />
          <div className="flex h-[18.017px] items-center justify-center relative shrink-0 w-[18.017px]">
            <div className="flex-none rotate-[269.945deg]">
              <IcBaselineKeyboardArrowAbajo8 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mantenedores8() {
  return (
    <div className="relative shrink-0 w-full" data-name="mantenedores">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <NavItem8 />
      </div>
    </div>
  );
}

function Inner9() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Inner"
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
        <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#9e9e9e] text-[14px] text-left">
          <p className="block leading-[normal]">VIDA ÚTIL ACTIVOS</p>
        </div>
      </div>
    </div>
  );
}

function IcBaselineKeyboardArrowAbajo9() {
  return (
    <div
      className="relative size-[18px]"
      data-name="ic:baseline-keyboard-arrow-abajo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="ic:baseline-keyboard-arrow-abajo">
          <path
            d={svgPaths.p3fb14600}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function NavItem9() {
  return (
    <div
      className="basis-0 grow h-11 min-h-px min-w-px relative rounded-[99px] shrink-0"
      data-name="Nav item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start px-4 py-3 relative w-full">
          <Inner9 />
          <div className="flex h-[18.017px] items-center justify-center relative shrink-0 w-[18.017px]">
            <div className="flex-none rotate-[269.945deg]">
              <IcBaselineKeyboardArrowAbajo9 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mantenedores9() {
  return (
    <div className="relative shrink-0 w-full" data-name="mantenedores">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <NavItem9 />
      </div>
    </div>
  );
}

function Inner10() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Inner"
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
        <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#9e9e9e] text-[14px] text-left">
          <p className="block leading-[normal]">ESTACIONALIDAD DE VENTAS</p>
        </div>
      </div>
    </div>
  );
}

function IcBaselineKeyboardArrowAbajo10() {
  return (
    <div
      className="relative size-[18px]"
      data-name="ic:baseline-keyboard-arrow-abajo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="ic:baseline-keyboard-arrow-abajo">
          <path
            d={svgPaths.p3fb14600}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function NavItem10() {
  return (
    <div
      className="basis-0 grow h-11 min-h-px min-w-px relative rounded-[99px] shrink-0"
      data-name="Nav item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start px-4 py-3 relative w-full">
          <Inner10 />
          <div className="flex h-[18.017px] items-center justify-center relative shrink-0 w-[18.017px]">
            <div className="flex-none rotate-[269.945deg]">
              <IcBaselineKeyboardArrowAbajo10 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mantenedores10() {
  return (
    <div className="relative shrink-0 w-full" data-name="mantenedores">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <NavItem10 />
      </div>
    </div>
  );
}

function Inner11() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Inner"
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
        <div className="basis-0 flex flex-col font-['Inter:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[#9e9e9e] text-[14px] text-left">
          <p className="block leading-[normal]">RESULTADO</p>
        </div>
      </div>
    </div>
  );
}

function IcBaselineKeyboardArrowAbajo11() {
  return (
    <div
      className="relative size-[18px]"
      data-name="ic:baseline-keyboard-arrow-abajo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="ic:baseline-keyboard-arrow-abajo">
          <path
            d={svgPaths.p3fb14600}
            fill="var(--fill-0, #616161)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function NavItem11() {
  return (
    <div
      className="basis-0 grow h-11 min-h-px min-w-px relative rounded-[99px] shrink-0"
      data-name="Nav item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start px-4 py-3 relative w-full">
          <Inner11 />
          <div className="flex h-[18.017px] items-center justify-center relative shrink-0 w-[18.017px]">
            <div className="flex-none rotate-[269.945deg]">
              <IcBaselineKeyboardArrowAbajo11 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mantenedores11() {
  return (
    <div className="relative shrink-0 w-full" data-name="mantenedores">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <NavItem11 />
      </div>
    </div>
  );
}

function Frame1261153579() {
  return (
    <div className="order-1 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
        <Mantenedores6 />
        <Mantenedores7 />
        <Mantenedores8 />
        <Mantenedores9 />
        <Mantenedores10 />
        <Mantenedores11 />
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="relative rounded-2xl size-full" data-name="Sidebar">
      <div className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_16px_44px_0px_rgba(0,0,0,0.07)]" />
      <div className="box-border content-stretch flex flex-col-reverse gap-6 items-center justify-start p-0 relative size-full">
        <Top />
        <Frame1261153578 />
        <Top1 />
        <Frame1261153579 />
      </div>
    </div>
  );
}