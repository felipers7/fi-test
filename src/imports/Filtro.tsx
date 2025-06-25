import svgPaths from "./svg-lc9nrcpjpo";

function Container() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
        <div
          className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[normal] whitespace-pre">
            RENTABILIDAD DEL PATRIMONIO
          </p>
        </div>
      </div>
    </div>
  );
}

function Close() {
  return (
    <div className="cursor-pointer relative shrink-0 size-6" data-name="close">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="close">
          <path d={svgPaths.p2edaeb50} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div
      className="bg-green-800 relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-5 pr-4 py-4 relative w-full">
          <Container />
          <Close />
        </div>
      </div>
    </div>
  );
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
            stroke="var(--stroke-0, #404040)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </g>
      </svg>
    </div>
  );
}

function Select() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0 w-full"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-between min-w-inherit pl-4 pr-3 py-3 relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Seleccione un año
            </p>
          </div>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function Frame2121453952() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-left w-full">
          <p className="block leading-[1.4]">Seleccione los años a filtrar:</p>
        </div>
        <Select />
      </div>
    </div>
  );
}

function ChevronDown1() {
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
            stroke="var(--stroke-0, #404040)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </g>
      </svg>
    </div>
  );
}

function Select1() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0 w-full"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-between min-w-inherit pl-4 pr-3 py-3 relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Selecciones una categoría
            </p>
          </div>
          <ChevronDown1 />
        </div>
      </div>
    </div>
  );
}

function Frame2121453953() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-left w-full">
          <p className="block leading-[1.4]">
            Seleccione las categorías a filtrar:
          </p>
        </div>
        <Select1 />
      </div>
    </div>
  );
}

function Frame2121453950() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[37px] items-start justify-start px-5 py-0 relative w-full">
          <Frame2121453952 />
          <Frame2121453953 />
        </div>
      </div>
    </div>
  );
}

function ButtomSmall() {
  return (
    <div
      className="h-9 relative rounded-lg shrink-0 w-[150px]"
      data-name="buttom-small"
    >
      <div className="absolute border-2 border-[#b00020] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-9 items-center justify-between px-3 py-2 relative w-[150px]">
          <div
            className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b00020] text-[14px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[normal] whitespace-pre">Cancelar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtomSmall1() {
  return (
    <div
      className="bg-[#1a6e31] h-9 relative rounded-lg shrink-0 w-[150px]"
      data-name="buttom-small"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-9 items-center justify-between px-3 py-2 relative w-[150px]">
          <div
            className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[normal] whitespace-pre">Aplicar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2121453951() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start px-5 py-0 relative w-full">
          <ButtomSmall />
          <ButtomSmall1 />
        </div>
      </div>
    </div>
  );
}

export default function Filtro() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg size-full"
      data-name="filtro"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start pb-5 pt-0 px-0 relative size-full">
          <Header />
          <Frame2121453950 />
          <Frame2121453951 />
        </div>
      </div>
    </div>
  );
}