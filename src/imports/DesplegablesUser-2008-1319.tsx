import svgPaths from "./svg-u0aa5ouow5";
import imgPerfil from "figma:asset/227a0764bd2f101feb2c421e7bc009746575d2ea.png";

function Perfil() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-20 relative rounded-lg shrink-0 w-[102px]"
      data-name="Perfil"
      style={{ backgroundImage: `url('${imgPerfil}')` }}
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="h-20 w-[102px]" />
      </div>
    </div>
  );
}

function Nombre() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Nombre"
    >
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-center leading-[0] p-0 relative size-full text-left">
        <div
          className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-neutral-700 w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[normal]">José Rodríguez</p>
        </div>
        <div
          className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#9e9e9e] text-[11px] w-full"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[normal]">Administrador</p>
        </div>
      </div>
    </div>
  );
}

function Frame1261153583() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative w-full">
        <Perfil />
        <div className="flex flex-row items-center self-stretch">
          <Nombre />
        </div>
      </div>
    </div>
  );
}

function Frame1000006628() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 311 1"
        >
          <g id="Frame 1000006628">
            <line
              id="Line 263"
              stroke="var(--stroke-0, #D0D5DD)"
              x2="311"
              y1="0.5"
              y2="0.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1261153584() {
  return (
    <div className="relative shrink-0 w-[311px]">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-[311px]">
        <Frame1261153583 />
        <Frame1000006628 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d={svgPaths.p34aff900}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0" data-name="Icon">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative">
        <Icon2 />
      </div>
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
        <Icon3 />
        <div
          className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative self-stretch shrink-0 text-[#9e9e9e] text-[14px] text-left"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[normal]">Mi perfil</p>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsKeyboardArrowDown1() {
  return (
    <div
      className="relative size-6"
      data-name="material-symbols:keyboard-arrow-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="material-symbols:keyboard-arrow-down">
          <path
            d={svgPaths.p2b1b0180}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function NavItem1() {
  return (
    <div
      className="h-11 relative rounded-[99px] shrink-0 w-full"
      data-name="Nav item"
    >
      <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start overflow-clip p-0 relative w-full">
        <Inner1 />
        <div className="flex h-[24.023px] items-center justify-center relative shrink-0 w-[24.023px]">
          <div className="flex-none rotate-[269.945deg]">
            <MaterialSymbolsKeyboardArrowDown1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="settings">
          <path d={svgPaths.pab73400} fill="var(--fill-0, #404040)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0" data-name="Icon">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative">
        <Icon4 />
      </div>
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
        <Icon5 />
        <div
          className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative self-stretch shrink-0 text-[#9e9e9e] text-[14px] text-left"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[normal]">Configuración</p>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsKeyboardArrowDown2() {
  return (
    <div
      className="relative size-6"
      data-name="material-symbols:keyboard-arrow-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="material-symbols:keyboard-arrow-down">
          <path
            d={svgPaths.p2b1b0180}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function NavItem2() {
  return (
    <div
      className="h-11 relative rounded-[99px] shrink-0 w-full"
      data-name="Nav item"
    >
      <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start overflow-clip p-0 relative w-full">
        <Inner2 />
        <div className="flex h-[24.023px] items-center justify-center relative shrink-0 w-[24.023px]">
          <div className="flex-none rotate-[269.945deg]">
            <MaterialSymbolsKeyboardArrowDown2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d={svgPaths.p216ef80}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0" data-name="Icon">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative">
        <Icon6 />
      </div>
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
        <Icon7 />
        <div
          className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative self-stretch shrink-0 text-[#9e9e9e] text-[14px] text-left"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[normal]">Cambiar clave</p>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsKeyboardArrowDown3() {
  return (
    <div
      className="relative size-6"
      data-name="material-symbols:keyboard-arrow-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="material-symbols:keyboard-arrow-down">
          <path
            d={svgPaths.p2b1b0180}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function NavItem3() {
  return (
    <div
      className="h-11 relative rounded-[99px] shrink-0 w-full"
      data-name="Nav item"
    >
      <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start overflow-clip p-0 relative w-full">
        <Inner3 />
        <div className="flex h-[24.023px] items-center justify-center relative shrink-0 w-[24.023px]">
          <div className="flex-none rotate-[269.945deg]">
            <MaterialSymbolsKeyboardArrowDown3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1261153587() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
        <NavItem1 />
        <NavItem2 />
        <NavItem3 />
      </div>
    </div>
  );
}

function Frame1000006629() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 311 1"
        >
          <g id="Frame 1000006628">
            <line
              id="Line 263"
              stroke="var(--stroke-0, #D0D5DD)"
              x2="311"
              y1="0.5"
              y2="0.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon">
          <path
            d={svgPaths.p10367b00}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0" data-name="Icon">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative">
        <Icon8 />
      </div>
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
        <Icon9 />
        <div
          className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative self-stretch shrink-0 text-[#9e9e9e] text-[14px] text-left"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[normal]">Cerrar sesión</p>
        </div>
      </div>
    </div>
  );
}

function NavItem4() {
  return (
    <div
      className="h-11 relative rounded-[99px] shrink-0 w-full"
      data-name="Nav item"
    >
      <div className="box-border content-stretch flex flex-row gap-3 h-11 items-center justify-start overflow-clip p-0 relative w-full">
        <Inner4 />
      </div>
    </div>
  );
}

function Frame1261153586() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
        <Frame1000006629 />
        <NavItem4 />
      </div>
    </div>
  );
}

export default function DesplegablesUser() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl shadow-[0px_4px_14px_0px_rgba(0,0,0,0.1)] size-full"
      data-name="desplegables-user"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative size-full">
          <Frame1261153584 />
          <Frame1261153587 />
          <Frame1261153586 />
        </div>
      </div>
    </div>
  );
}