import svgPaths from "./svg-kyrm2ff689";
import imgPerfil from "figma:asset/227a0764bd2f101feb2c421e7bc009746575d2ea.png";

function Main() {
  return (
    <div className="h-8 relative shrink-0 w-[42px]" data-name="main">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 42 32"
      >
        <g id="main">
          <line
            id="Line 9"
            stroke="var(--stroke-0, #1A6E31)"
            strokeLinecap="round"
            strokeWidth="2.5"
            x1="9.25"
            x2="32.75"
            y1="6.75"
            y2="6.75"
          />
          <line
            id="Line 10"
            stroke="var(--stroke-0, #1A6E31)"
            strokeLinecap="round"
            strokeWidth="2.5"
            x1="9.25"
            x2="32.75"
            y1="14.75"
            y2="14.75"
          />
          <line
            id="Line 11"
            stroke="var(--stroke-0, #1A6E31)"
            strokeLinecap="round"
            strokeWidth="2.5"
            x1="9.25"
            x2="32.75"
            y1="22.75"
            y2="22.75"
          />
        </g>
      </svg>
    </div>
  );
}

function Top() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px order-3 relative shrink-0"
      data-name="Top"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-full items-center justify-center px-4 py-6 relative">
          <Main />
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div
      className="bg-[#f7f9fa] h-12 relative rounded-2xl shadow-[0px_16px_44px_0px_rgba(0,0,0,0.07)] shrink-0"
      data-name="Sidebar"
    >
      <div className="box-border content-stretch flex flex-col-reverse gap-6 h-12 items-start justify-center p-0 relative">
        <Top />
      </div>
    </div>
  );
}

function TitleAndSubtitle() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Title and Subtitle"
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center leading-[0] not-italic p-0 relative text-left w-full">
        <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[36px] text-neutral-700 w-full">
          <p className="block leading-[normal]">Dashboard FI</p>
        </div>
        <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#adadad] text-[20px] w-full">
          <p className="block leading-[normal]">Cliente</p>
        </div>
      </div>
    </div>
  );
}

function Sun() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="sun">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="sun">
          <path
            d={svgPaths.p281657f0}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p2af48600}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <g id="Vector_3" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearSun() {
  return (
    <div
      className="absolute contents left-0 top-0"
      data-name="vuesax/linear/sun"
    >
      <Sun />
    </div>
  );
}

function Sun1() {
  return (
    <div className="relative shrink-0 size-5" data-name="sun">
      <VuesaxLinearSun />
    </div>
  );
}

function IconContent() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon Content">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative size-5">
        <Sun1 />
      </div>
    </div>
  );
}

function IconButton() {
  return (
    <div
      className="absolute h-[38px] left-9 rounded-[50px] top-0"
      data-name="Icon Button"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row h-[38px] items-start justify-start p-[8px] relative">
          <IconContent />
        </div>
      </div>
    </div>
  );
}

function Moon() {
  return (
    <div className="absolute left-0 size-5 top-0" data-name="moon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="moon">
          <path
            d={svgPaths.pfb06380}
            id="Vector"
            stroke="var(--stroke-0, #404040)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearMoon() {
  return (
    <div
      className="absolute contents left-0 top-0"
      data-name="vuesax/linear/moon"
    >
      <Moon />
    </div>
  );
}

function Moon1() {
  return (
    <div className="relative shrink-0 size-5" data-name="moon">
      <VuesaxLinearMoon />
    </div>
  );
}

function IconContent1() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon Content">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative size-5">
        <Moon1 />
      </div>
    </div>
  );
}

function IconButton1() {
  return (
    <button
      className="absolute cursor-pointer h-[38px] left-0 rounded-[50px] top-0"
      data-name="Icon Button"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row h-[38px] items-start justify-start p-[8px] relative">
          <IconContent1 />
        </div>
      </div>
    </button>
  );
}

function ModeChanger() {
  return (
    <div
      className="h-[38px] relative rounded-[1000px] shrink-0 w-[72px]"
      data-name="Mode changer"
    >
      <div className="absolute border border-[#9e9e9e] border-solid inset-[-1px] pointer-events-none rounded-[1001px]" />
      <div className="absolute h-[38px] left-9 top-0 w-9">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 38"
        >
          <ellipse
            cx="18"
            cy="19"
            fill="var(--fill-0, #FFC000)"
            id="Ellipse 2"
            rx="18"
            ry="19"
          />
        </svg>
      </div>
      <IconButton />
      <IconButton1 />
    </div>
  );
}

function Notification() {
  return (
    <div
      className="absolute left-0 size-[24.594px] top-0"
      data-name="notification"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="notification">
          <path
            d={svgPaths.p1238b400}
            id="Vector"
            stroke="var(--stroke-0, #ADADAD)"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="1.53713"
          />
          <path
            d={svgPaths.pc62afc8}
            id="Vector_2"
            stroke="var(--stroke-0, #ADADAD)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.53713"
          />
          <path
            d={svgPaths.p2f887a80}
            id="Vector_3"
            stroke="var(--stroke-0, #ADADAD)"
            strokeMiterlimit="10"
            strokeWidth="1.53713"
          />
          <g id="Vector_4" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearNotification() {
  return (
    <div
      className="absolute contents left-0 top-0"
      data-name="vuesax/linear/notification"
    >
      <Notification />
    </div>
  );
}

function Notification1() {
  return (
    <div className="relative shrink-0 size-[24.594px]" data-name="notification">
      <VuesaxLinearNotification />
    </div>
  );
}

function NotificationIcon() {
  return (
    <div
      className="backdrop-blur-[20.0671px] backdrop-filter bg-[#ffffff] relative rounded-[11.6403px] shrink-0 size-12"
      data-name="Notification Icon"
    >
      <div className="absolute border border-[#adadad] border-solid inset-[-1px] pointer-events-none rounded-[12.6403px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[11.64px] items-center justify-center p-[15.5204px] relative size-12">
          <Notification1 />
          <div className="absolute left-[30.408px] size-[8.73px] top-[15.711px]">
            <div className="absolute inset-[-35.214%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
              >
                <circle
                  cx="8.36511"
                  cy="8.36511"
                  fill="var(--fill-0, #B00020)"
                  id="Ellipse 1"
                  r="5.90225"
                  stroke="var(--stroke-0, white)"
                  strokeWidth="3.07427"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Perfil() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat relative rounded-lg shrink-0 size-12"
      data-name="Perfil"
      style={{ backgroundImage: `url('${imgPerfil}')` }}
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="size-12" />
      </div>
    </div>
  );
}

function IconsAndProfile() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Icons and Profile"
    >
      <div className="box-border content-stretch flex flex-row gap-[16.396px] items-center justify-end p-0 relative w-full">
        <ModeChanger />
        <NotificationIcon />
        <Perfil />
      </div>
    </div>
  );
}

function Notification2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Notification">
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
        <TitleAndSubtitle />
        <IconsAndProfile />
      </div>
    </div>
  );
}

function MaterialSymbolsKeyboardArrowDown() {
  return (
    <div
      className="relative shrink-0 size-6"
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
            fill="var(--fill-0, #9D9292)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function PreiodoCompleto2() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[20px] shrink-0 w-[516px]"
      data-name="preiodo-completo-2"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-8 py-6 relative w-[516px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Años de análisis
            </p>
          </div>
          <MaterialSymbolsKeyboardArrowDown />
        </div>
      </div>
      <div className="absolute border border-[#9e9e9e] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function ValueContainer() {
  return (
    <div className="relative rounded-lg shrink-0" data-name="Value Container">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-2 relative">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[20px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">7,506</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyValueContainer() {
  return (
    <div
      className="bg-[#f7f9fa] h-[72px] relative rounded-[20px] shrink-0"
      data-name="Company Value Container"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[72px] items-center justify-start p-[32px] relative">
          <div
            className="absolute h-[230px] left-0 opacity-[0.15] top-0 w-[2994px]"
            data-name="Rectangle"
          />
          <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[24px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Valor empresa
            </p>
          </div>
          <ValueContainer />
        </div>
      </div>
      <div className="absolute border-2 border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Cajas1() {
  return (
    <div className="relative shrink-0 w-full" data-name="cajas.1">
      <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
        <PreiodoCompleto2 />
        <CompanyValueContainer />
      </div>
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute contents left-[7.262px] top-[4.242px]">
      <div className="absolute bg-[#9e9e9e] bottom-[27.849%] left-[46.541%] right-[46.541%] rounded-[15px] top-[40.727%]" />
      <div className="absolute bg-[#9e9e9e] bottom-[64.264%] left-[45.387%] right-[45.387%] rounded-[15px] top-[26.511%]" />
    </div>
  );
}

function InfoCircle1() {
  return (
    <div
      className="absolute contents left-[1.358px] top-[1.358px]"
      data-name="InfoCircle"
    >
      <div
        className="absolute bottom-[8.486%] left-[8.486%] right-[8.486%] top-[8.486%]"
        data-name="Ellipse"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 14"
        >
          <path
            d={svgPaths.p31f23600}
            id="Ellipse "
            stroke="var(--stroke-0, #9E9E9E)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <Group68 />
    </div>
  );
}

function IcInfo1() {
  return (
    <div className="relative shrink-0 size-4" data-name="ic_Info_">
      <InfoCircle1 />
    </div>
  );
}

function Frame2121453944() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">UTILIDAD</p>
        </div>
        <IcInfo1 />
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
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022-2027</p>
          </div>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function IxDragGripper() {
  return (
    <div className="relative shrink-0 size-6" data-name="ix:drag-gripper">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ix:drag-gripper">
          <path
            clipRule="evenodd"
            d={svgPaths.p1e1c14f0}
            fill="var(--fill-0, #404040)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121452912() {
  return (
    <div className="min-w-[370px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start min-w-inherit px-0 py-1.5 relative w-full">
          <Frame2121453944 />
          <Select />
          <IxDragGripper />
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
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2023</p>
          </div>
        </div>
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

function Frame2121452911() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[34.111px] items-center justify-start pb-2 pt-0 px-1.5 relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">UTILIDAD</p>
          </div>
        </div>
      </div>
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
    </div>
  );
}

function CajaFinal() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shrink-0"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative">
          <Frame2121452912 />
          <Fechas />
          <Resultado />
          <Cantidades />
          <Frame2121452911 />
          <Cantidades />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
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
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Fechas"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pb-2 pt-0 px-0 relative size-full">
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

function Frame2121452913() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start pb-2 pt-0 px-1.5 relative size-full">
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow h-full leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left">
            <p className="block leading-[normal]">
              EXCEDENTE DE CAJA ESTRUCTUTAL
            </p>
          </div>
        </div>
      </div>
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
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
            <p className="block leading-[normal] whitespace-pre">147.950</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad19() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
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

function Cantidad21() {
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

function Cantidades2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pb-2 pt-0 px-0 relative size-full">
          {[...Array(3).keys()].map((_, i) => (
            <Cantidad16 key={i} />
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

function Frame2121452915() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pb-2 pt-0 px-1.5 relative w-full">
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left">
            <p className="block leading-[normal]">
              REQUERIMIENTO DE CAJA ADICIONAL POR ESTACIONALIDAD
            </p>
          </div>
        </div>
      </div>
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#b00020] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">147.950</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad25() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad5"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#b00020] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">177.540</p>
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
            <p className="block leading-[normal] whitespace-pre">230.802</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidades3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pb-2 pt-0 px-0 relative size-full">
          {[...Array(3).keys()].map((_, i) => (
            <Cantidad22 key={i} />
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
            <p className="block leading-[normal] whitespace-pre">150.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad31() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
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

function Cantidad33() {
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

function Cantidades4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start pb-2 pt-0 px-0 relative size-full">
          {[...Array(3).keys()].map((_, i) => (
            <Cantidad28 key={i} />
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

function CajaFinal1() {
  return (
    <div
      className="bg-[#ffffff] h-[293px] min-w-[370px] relative rounded-[18.9259px] shrink-0 w-[370px]"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] h-[293px] items-start justify-start min-w-inherit p-[12px] relative w-[370px]">
          <Fechas1 />
          <Frame2121452913 />
          <Cantidades2 />
          <Frame2121452915 />
          <Cantidades3 />
          <Cantidades4 />
        </div>
      </div>
      <div className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame2121452916() {
  return (
    <div className="h-[31px] relative rounded-[31.5431px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-[31px] items-center justify-start p-[6px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">PARÁMETROS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad34() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative size-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              INICIO PROYECCIÓN 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidades5() {
  return (
    <div
      className="h-[25px] relative rounded-lg shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="box-border content-stretch flex flex-row h-[25px] items-center justify-start p-0 relative w-full">
        <Cantidad34 />
      </div>
    </div>
  );
}

function Cantidad35() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative size-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              DÍAS PERÍODO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad36() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad6"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[12px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">365</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidades6() {
  return (
    <div
      className="h-[25px] relative rounded-lg shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="box-border content-stretch flex flex-row h-[25px] items-center justify-start p-0 relative w-full">
        <Cantidad35 />
        <Cantidad36 />
      </div>
    </div>
  );
}

function Cantidad37() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative w-full">
          <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2e649d] text-[14px] text-left">
            <p className="block leading-[normal]">UNIDAD DE MEDIDA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronDown2() {
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

function Select2() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">UNIDADES</p>
          </div>
          <ChevronDown2 />
        </div>
      </div>
    </div>
  );
}

function Cantidades7() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Cantidades">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <Cantidad37 />
        <Select2 />
      </div>
    </div>
  );
}

function Cantidad38() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative w-full">
          <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#2e649d] text-[14px] text-left">
            <p className="block leading-[normal]">MONEDA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronDown3() {
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

function Select3() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center justify-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-center min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">CLP</p>
          </div>
          <ChevronDown3 />
        </div>
      </div>
    </div>
  );
}

function Cantidades8() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Cantidades">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <Cantidad38 />
        <Select3 />
      </div>
    </div>
  );
}

function Cajas() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[292px] min-h-px min-w-px relative rounded-[18.9259px] shrink-0"
      data-name="Cajas"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] h-[292px] items-start justify-start p-[12px] relative w-full">
          <Frame2121452916 />
          <Cantidades5 />
          <Cantidades6 />
          <Cantidades7 />
          <Cantidades8 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame2121452917() {
  return (
    <div className="h-[31px] relative rounded-[31.5431px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-[31px] items-center justify-start p-[6px] relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[20px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              VALORIZACIÓN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad39() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">RD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad40() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad6"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[16px] text-left text-nowrap">
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
      className="h-[25px] relative rounded-lg shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="box-border content-stretch flex flex-row h-[25px] items-center justify-start p-0 relative w-full">
        <Cantidad39 />
        <Cantidad40 />
      </div>
    </div>
  );
}

function Cantidad41() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">RE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad42() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad6"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">230.802</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidades10() {
  return (
    <div
      className="h-[25px] relative rounded-lg shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="box-border content-stretch flex flex-row h-[25px] items-center justify-start p-0 relative w-full">
        <Cantidad41 />
        <Cantidad42 />
      </div>
    </div>
  );
}

function Cantidad43() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad4"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">WACC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidad44() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cantidad6"
    >
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-[4px] relative size-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2e649d] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">230.802</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cantidades11() {
  return (
    <div
      className="h-[25px] relative rounded-lg shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="box-border content-stretch flex flex-row h-[25px] items-center justify-start p-0 relative w-full">
        <Cantidad43 />
        <Cantidad44 />
      </div>
    </div>
  );
}

function Cajas2() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[293px] min-h-px min-w-px relative rounded-[18.9259px] shrink-0"
      data-name="Cajas"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] h-[293px] items-start justify-start p-[12px] relative w-full">
          <Frame2121452917 />
          <Cantidades9 />
          <Cantidades10 />
          <Cantidades11 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Indicadores() {
  return (
    <div className="relative shrink-0 w-full" data-name="indicadores">
      <div className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative w-full">
        <CajaFinal />
        <CajaFinal1 />
        <Cajas />
        <Cajas2 />
      </div>
    </div>
  );
}

function Frame2121453933() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-[42px] items-start justify-start p-0 relative w-full">
        <Notification2 />
        <Cajas1 />
        <Indicadores />
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
            d={svgPaths.p20c62f00}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function MdiFilter() {
  return (
    <div className="relative shrink-0 size-4" data-name="mdi:filter">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="mdi:filter">
          <path
            d={svgPaths.pddd8680}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121453947() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <div className="font-['Aptos_Narrow:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-center text-neutral-700 text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            CRECIMIENTO SOSTENIBLE
          </p>
        </div>
        <MdiFilter />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.167%]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 39"
      >
        <g id="Group">
          <path
            d={svgPaths.p222dae00}
            fill="var(--fill-0, #1A6E31)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p39164d00}
            fill="var(--fill-0, #1A6E31)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function GgArrowUpO() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="gg:arrow-up-o">
      <Group />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="box-border content-stretch flex flex-row gap-[18px] items-center justify-center p-0 relative w-full">
        <Icon />
        <Frame2121453947 />
        <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
          <div className="absolute bottom-[-0.394px] left-0 right-0 top-[-0.394px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1021 2"
            >
              <path
                d="M0 1H1021"
                id="Line 82"
                stroke="var(--stroke-0, #404040)"
                strokeWidth="0.788577"
              />
            </svg>
          </div>
        </div>
        <GgArrowUpO />
      </div>
    </div>
  );
}

function Frame2121453946() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            VALOR PATRIMONIO
          </p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown4() {
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

function Select4() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022-2027</p>
          </div>
          <ChevronDown4 />
        </div>
      </div>
    </div>
  );
}

function IxDragGripper2() {
  return (
    <div className="relative shrink-0 size-6" data-name="ix:drag-gripper">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ix:drag-gripper">
          <path
            clipRule="evenodd"
            d={svgPaths.p1e1c14f0}
            fill="var(--fill-0, #404040)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121452918() {
  return (
    <div className="min-w-[370px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center min-w-inherit p-[6px] relative w-full">
          <Frame2121453946 />
          <Select4 />
          <IxDragGripper2 />
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

function Resultado1() {
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

function Cantidad45() {
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

function Cantidad46() {
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

function Cantidad48() {
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

function Cantidad50() {
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

function Cantidades12() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad45 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad46 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad48 key={i} />
          ))}
          <Cantidad50 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal2() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shrink-0 w-[432px]"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-[432px]">
          <Frame2121452918 />
          <Fechas2 />
          <Resultado1 />
          <Cantidades12 />
          <Cantidades12 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame2121453948() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">UTILIDAD</p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown5() {
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

function Select5() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022-2027</p>
          </div>
          <ChevronDown5 />
        </div>
      </div>
    </div>
  );
}

function IxDragGripper3() {
  return (
    <div className="relative shrink-0 size-6" data-name="ix:drag-gripper">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ix:drag-gripper">
          <path
            clipRule="evenodd"
            d={svgPaths.p1e1c14f0}
            fill="var(--fill-0, #404040)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121452919() {
  return (
    <div className="min-w-[370px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center min-w-inherit p-[6px] relative w-full">
          <Frame2121453948 />
          <Select5 />
          <IxDragGripper3 />
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
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022</p>
          </div>
        </div>
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

function Resultado2() {
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

function Cantidad57() {
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

function Cantidad58() {
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

function Cantidad60() {
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

function Cantidad62() {
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

function Cantidades14() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad57 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad58 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad60 key={i} />
          ))}
          <Cantidad62 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal3() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shrink-0 w-[433px]"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-[433px]">
          <Frame2121452919 />
          <Fechas3 />
          <Resultado2 />
          <Cantidades14 />
          <Cantidades14 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame2121453949() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">EBITDA</p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown6() {
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

function Select6() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022-2027</p>
          </div>
          <ChevronDown6 />
        </div>
      </div>
    </div>
  );
}

function IxDragGripper4() {
  return (
    <div className="relative shrink-0 size-6" data-name="ix:drag-gripper">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ix:drag-gripper">
          <path
            clipRule="evenodd"
            d={svgPaths.p1e1c14f0}
            fill="var(--fill-0, #404040)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121452920() {
  return (
    <div className="min-w-[370px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center min-w-inherit p-[6px] relative w-full">
          <Frame2121453949 />
          <Select6 />
          <IxDragGripper4 />
        </div>
      </div>
    </div>
  );
}

function Fecha25() {
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

function Fecha26() {
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

function Fecha27() {
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

function Fecha28() {
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

function Fecha29() {
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

function Fecha30() {
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

function Fechas4() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full" data-name="Fechas">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Fecha25 />
          <Fecha26 />
          <Fecha27 />
          <Fecha28 />
          <Fecha29 />
          <Fecha30 />
        </div>
      </div>
    </div>
  );
}

function Resultado3() {
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

function Cantidad69() {
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

function Cantidad70() {
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

function Cantidad72() {
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

function Cantidad74() {
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

function Cantidades16() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad69 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad70 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad72 key={i} />
          ))}
          <Cantidad74 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal4() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shrink-0 w-[433px]"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-[433px]">
          <Frame2121452920 />
          <Fechas4 />
          <Resultado3 />
          <Cantidades16 />
          <Cantidades16 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame2121453950() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            INTERESES A OPERACIONAL
          </p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown7() {
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

function Select7() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022-2027</p>
          </div>
          <ChevronDown7 />
        </div>
      </div>
    </div>
  );
}

function IxDragGripper5() {
  return (
    <div className="relative shrink-0 size-6" data-name="ix:drag-gripper">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ix:drag-gripper">
          <path
            clipRule="evenodd"
            d={svgPaths.p1e1c14f0}
            fill="var(--fill-0, #404040)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121452921() {
  return (
    <div className="min-w-[370px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center min-w-inherit p-[6px] relative w-full">
          <Frame2121453950 />
          <Select7 />
          <IxDragGripper5 />
        </div>
      </div>
    </div>
  );
}

function Fecha31() {
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

function Fecha32() {
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

function Fecha33() {
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

function Fecha34() {
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

function Fecha35() {
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

function Fecha36() {
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

function Fechas5() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full" data-name="Fechas">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Fecha31 />
          <Fecha32 />
          <Fecha33 />
          <Fecha34 />
          <Fecha35 />
          <Fecha36 />
        </div>
      </div>
    </div>
  );
}

function Resultado4() {
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

function Cantidad81() {
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

function Cantidad82() {
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

function Cantidad84() {
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

function Cantidad86() {
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

function Cantidades18() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad81 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad82 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad84 key={i} />
          ))}
          <Cantidad86 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal5() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shrink-0 w-[433px]"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-[433px]">
          <Frame2121452921 />
          <Fechas5 />
          <Resultado4 />
          <Cantidades18 />
          <Cantidades18 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame2121453951() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">VALOR DEUDA</p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown8() {
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

function Select8() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022-2027</p>
          </div>
          <ChevronDown8 />
        </div>
      </div>
    </div>
  );
}

function IxDragGripper6() {
  return (
    <div className="relative shrink-0 size-6" data-name="ix:drag-gripper">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ix:drag-gripper">
          <path
            clipRule="evenodd"
            d={svgPaths.p1e1c14f0}
            fill="var(--fill-0, #404040)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121452922() {
  return (
    <div className="min-w-[370px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center min-w-inherit p-[6px] relative w-full">
          <Frame2121453951 />
          <Select8 />
          <IxDragGripper6 />
        </div>
      </div>
    </div>
  );
}

function Resultado5() {
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

function Cantidad93() {
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

function Cantidad94() {
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

function Cantidad96() {
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

function Cantidad98() {
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

function Cantidades20() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad93 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad94 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad96 key={i} />
          ))}
          <Cantidad98 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal6() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] self-stretch shrink-0 w-[433px]"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] h-full items-start justify-start min-w-inherit p-[12px] relative w-[433px]">
          <Frame2121452922 />
          <Resultado5 />
          <Cantidades20 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame2121453952() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            CRECIMIENTO PATRIMONIO
          </p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown9() {
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

function Select9() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022-2027</p>
          </div>
          <ChevronDown9 />
        </div>
      </div>
    </div>
  );
}

function IxDragGripper7() {
  return (
    <div className="relative shrink-0 size-6" data-name="ix:drag-gripper">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ix:drag-gripper">
          <path
            clipRule="evenodd"
            d={svgPaths.p1e1c14f0}
            fill="var(--fill-0, #404040)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121452923() {
  return (
    <div className="min-w-[370px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center min-w-inherit p-[6px] relative w-full">
          <Frame2121453952 />
          <Select9 />
          <IxDragGripper7 />
        </div>
      </div>
    </div>
  );
}

function Resultado6() {
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

function Cantidad99() {
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

function Cantidad100() {
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

function Cantidad102() {
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

function Cantidad104() {
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

function Cantidades21() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad99 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad100 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad102 key={i} />
          ))}
          <Cantidad104 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal7() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] self-stretch shrink-0 w-[433px]"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] h-full items-start justify-start min-w-inherit p-[12px] relative w-[433px]">
          <Frame2121452923 />
          <Resultado6 />
          <Cantidades21 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame2121453953() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            CREACIÓN DE VALOR
          </p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown10() {
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

function Select10() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022-2027</p>
          </div>
          <ChevronDown10 />
        </div>
      </div>
    </div>
  );
}

function IxDragGripper8() {
  return (
    <div className="relative shrink-0 size-6" data-name="ix:drag-gripper">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ix:drag-gripper">
          <path
            clipRule="evenodd"
            d={svgPaths.p1e1c14f0}
            fill="var(--fill-0, #404040)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121452924() {
  return (
    <div className="min-w-[370px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center min-w-inherit p-[6px] relative w-full">
          <Frame2121453953 />
          <Select10 />
          <IxDragGripper8 />
        </div>
      </div>
    </div>
  );
}

function Fecha37() {
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

function Fecha38() {
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

function Fecha39() {
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

function Fecha40() {
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

function Fecha41() {
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

function Fecha42() {
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

function Fechas6() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full" data-name="Fechas">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Fecha37 />
          <Fecha38 />
          <Fecha39 />
          <Fecha40 />
          <Fecha41 />
          <Fecha42 />
        </div>
      </div>
    </div>
  );
}

function Resultado7() {
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

function Cantidad105() {
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

function Cantidad106() {
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

function Cantidad108() {
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

function Cantidad110() {
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

function Cantidades22() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad105 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad106 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad108 key={i} />
          ))}
          <Cantidad110 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal8() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shrink-0 w-[433px]"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-[433px]">
          <Frame2121452924 />
          <Fechas6 />
          <Resultado7 />
          <Cantidades22 />
          <Cantidades22 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame2121453954() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            RENTABILIDAD PATRIMONIO
          </p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown11() {
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

function Select11() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022-2027</p>
          </div>
          <ChevronDown11 />
        </div>
      </div>
    </div>
  );
}

function IxDragGripper9() {
  return (
    <div className="relative shrink-0 size-6" data-name="ix:drag-gripper">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ix:drag-gripper">
          <path
            clipRule="evenodd"
            d={svgPaths.p1e1c14f0}
            fill="var(--fill-0, #404040)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121452925() {
  return (
    <div className="min-w-[370px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center min-w-inherit p-[6px] relative w-full">
          <Frame2121453954 />
          <Select11 />
          <IxDragGripper9 />
        </div>
      </div>
    </div>
  );
}

function Fecha43() {
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

function Fecha44() {
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

function Fecha45() {
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

function Fecha46() {
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

function Fecha47() {
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

function Fecha48() {
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

function Fechas7() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full" data-name="Fechas">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Fecha43 />
          <Fecha44 />
          <Fecha45 />
          <Fecha46 />
          <Fecha47 />
          <Fecha48 />
        </div>
      </div>
    </div>
  );
}

function Resultado8() {
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

function Cantidad117() {
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

function Cantidad118() {
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

function Cantidad120() {
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

function Cantidad122() {
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

function Cantidades24() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad117 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad118 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad120 key={i} />
          ))}
          <Cantidad122 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal9() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shrink-0 w-[433px]"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-[433px]">
          <Frame2121452925 />
          <Fechas7 />
          <Resultado8 />
          <Cantidades24 />
          <Cantidades24 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame2121453955() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            RENTABILIDAD CAPITAL
          </p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown12() {
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

function Select12() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022-2027</p>
          </div>
          <ChevronDown12 />
        </div>
      </div>
    </div>
  );
}

function IxDragGripper10() {
  return (
    <div className="relative shrink-0 size-6" data-name="ix:drag-gripper">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ix:drag-gripper">
          <path
            clipRule="evenodd"
            d={svgPaths.p1e1c14f0}
            fill="var(--fill-0, #404040)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121452926() {
  return (
    <div className="min-w-[370px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center min-w-inherit p-[6px] relative w-full">
          <Frame2121453955 />
          <Select12 />
          <IxDragGripper10 />
        </div>
      </div>
    </div>
  );
}

function Fecha49() {
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

function Fecha50() {
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

function Fecha51() {
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

function Fecha52() {
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

function Fecha53() {
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

function Fecha54() {
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

function Fechas8() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full" data-name="Fechas">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Fecha49 />
          <Fecha50 />
          <Fecha51 />
          <Fecha52 />
          <Fecha53 />
          <Fecha54 />
        </div>
      </div>
    </div>
  );
}

function Resultado9() {
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

function Cantidad129() {
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

function Cantidad130() {
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

function Cantidad132() {
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

function Cantidad134() {
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

function Cantidades26() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad129 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad130 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad132 key={i} />
          ))}
          <Cantidad134 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal10() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shrink-0 w-[433px]"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-[433px]">
          <Frame2121452926 />
          <Fechas8 />
          <Resultado9 />
          <Cantidades26 />
          <Cantidades26 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function ContentRow() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Content Row"
    >
      <div className="box-border content-stretch flex flex-row gap-8 items-start justify-start overflow-x-auto overflow-y-clip p-0 relative w-full">
        <CajaFinal2 />
        <CajaFinal3 />
        <CajaFinal4 />
        <CajaFinal5 />
        <CajaFinal6 />
        <CajaFinal7 />
        <CajaFinal8 />
        <CajaFinal9 />
        <CajaFinal10 />
      </div>
    </div>
  );
}

function ArrowButton() {
  return (
    <div className="relative shrink-0 size-[52px]" data-name="Arrow Button">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52 52"
      >
        <g id="Arrow Button">
          <path
            d={svgPaths.p3c61cd00}
            fill="var(--fill-0, #9E9E9E)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function SectionContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Content">
      <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative w-full">
        <ContentRow />
        <ArrowButton />
      </div>
    </div>
  );
}

function ColapsablesEspanol() {
  return (
    <div className="relative shrink-0 w-full" data-name="colapsables-español">
      <div className="box-border content-stretch flex flex-col gap-[42px] items-start justify-start p-0 relative w-full">
        <SectionHeader />
        <SectionContent />
      </div>
    </div>
  );
}

function Icon1() {
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
            d={svgPaths.p5d83c80}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function MdiFilter1() {
  return (
    <div className="relative shrink-0 size-4" data-name="mdi:filter">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="mdi:filter">
          <path
            d={svgPaths.pddd8680}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121453956() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <div className="font-['Aptos_Narrow:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-center text-neutral-700 text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            RIESGO FINANCIERO
          </p>
        </div>
        <MdiFilter1 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[4.167%]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 39"
      >
        <g id="Group">
          <path
            d={svgPaths.p222dae00}
            fill="var(--fill-0, #1A6E31)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p39164d00}
            fill="var(--fill-0, #1A6E31)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function GgArrowUpO1() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="gg:arrow-up-o">
      <Group1 />
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="box-border content-stretch flex flex-row gap-[18px] items-center justify-center p-0 relative w-full">
        <Icon1 />
        <Frame2121453956 />
        <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
          <div className="absolute bottom-[-0.394px] left-0 right-0 top-[-0.394px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1068 2"
            >
              <path
                d="M0 1H1068"
                id="Line 82"
                stroke="var(--stroke-0, #404040)"
                strokeWidth="0.788577"
              />
            </svg>
          </div>
        </div>
        <GgArrowUpO1 />
      </div>
    </div>
  );
}

function Frame2121453957() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">UTILIDAD</p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown13() {
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

function Select13() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022-2027</p>
          </div>
          <ChevronDown13 />
        </div>
      </div>
    </div>
  );
}

function IxDragGripper11() {
  return (
    <div className="relative shrink-0 size-6" data-name="ix:drag-gripper">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ix:drag-gripper">
          <path
            clipRule="evenodd"
            d={svgPaths.p1e1c14f0}
            fill="var(--fill-0, #404040)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121452927() {
  return (
    <div className="min-w-[370px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center min-w-inherit p-[6px] relative w-full">
          <Frame2121453957 />
          <Select13 />
          <IxDragGripper11 />
        </div>
      </div>
    </div>
  );
}

function Fecha55() {
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

function Fecha56() {
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

function Fecha57() {
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

function Fecha58() {
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

function Fecha59() {
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

function Fecha60() {
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

function Fechas9() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full" data-name="Fechas">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Fecha55 />
          <Fecha56 />
          <Fecha57 />
          <Fecha58 />
          <Fecha59 />
          <Fecha60 />
        </div>
      </div>
    </div>
  );
}

function Resultado10() {
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

function Cantidad141() {
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

function Cantidad142() {
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

function Cantidad144() {
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

function Cantidad146() {
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

function Cantidades28() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad141 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad142 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad144 key={i} />
          ))}
          <Cantidad146 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal11() {
  return (
    <div
      className="bg-[#ffffff] min-w-[370px] relative rounded-[18.9259px] shrink-0 w-[433px]"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-[433px]">
          <Frame2121452927 />
          <Fechas9 />
          <Resultado10 />
          <Cantidades28 />
          <Cantidades28 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function ContentRow1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Content Row"
    >
      <div className="box-border content-stretch flex flex-row gap-8 items-start justify-start overflow-x-auto overflow-y-clip p-0 relative w-full">
        {[...Array(9).keys()].map((_, i) => (
          <CajaFinal11 key={i} />
        ))}
      </div>
    </div>
  );
}

function ArrowButton1() {
  return (
    <div className="relative shrink-0 size-[52px]" data-name="Arrow Button">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52 52"
      >
        <g id="Arrow Button">
          <path
            d={svgPaths.p3c61cd00}
            fill="var(--fill-0, #9E9E9E)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function SectionContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Content">
      <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative w-full">
        <ContentRow1 />
        <ArrowButton1 />
      </div>
    </div>
  );
}

function ColapsablesEspanol1() {
  return (
    <div className="relative shrink-0 w-full" data-name="colapsables-español">
      <div className="box-border content-stretch flex flex-col gap-[42px] items-start justify-start p-0 relative w-full">
        <SectionHeader1 />
        <SectionContent1 />
      </div>
    </div>
  );
}

function Icon2() {
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
            d={svgPaths.p266f0a80}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function MdiFilter2() {
  return (
    <div className="relative shrink-0 size-4" data-name="mdi:filter">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="mdi:filter">
          <path
            d={svgPaths.pddd8680}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121453966() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <div className="font-['Aptos_Narrow:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-center text-neutral-700 text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            FLUJO DE EFECTIVO
          </p>
        </div>
        <MdiFilter2 />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[4.167%]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 39"
      >
        <g id="Group">
          <path
            d={svgPaths.p222dae00}
            fill="var(--fill-0, #1A6E31)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p39164d00}
            fill="var(--fill-0, #1A6E31)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function GgArrowUpO2() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="gg:arrow-up-o">
      <Group2 />
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="box-border content-stretch flex flex-row gap-[18px] items-center justify-center p-0 relative w-full">
        <Icon2 />
        <Frame2121453966 />
        <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
          <div className="absolute bottom-[-0.394px] left-0 right-0 top-[-0.394px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1077 2"
            >
              <path
                d="M0 1H1077"
                id="Line 82"
                stroke="var(--stroke-0, #404040)"
                strokeWidth="0.788577"
              />
            </svg>
          </div>
        </div>
        <GgArrowUpO2 />
      </div>
    </div>
  );
}

function Frame2121453967() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">UTILIDAD</p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown22() {
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

function Select22() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022-2027</p>
          </div>
          <ChevronDown22 />
        </div>
      </div>
    </div>
  );
}

function IxDragGripper20() {
  return (
    <div className="relative shrink-0 size-6" data-name="ix:drag-gripper">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ix:drag-gripper">
          <path
            clipRule="evenodd"
            d={svgPaths.p1e1c14f0}
            fill="var(--fill-0, #404040)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121452936() {
  return (
    <div className="min-w-[370px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center min-w-inherit p-[6px] relative w-full">
          <Frame2121453967 />
          <Select22 />
          <IxDragGripper20 />
        </div>
      </div>
    </div>
  );
}

function Fecha109() {
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

function Fecha110() {
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

function Fecha111() {
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

function Fecha112() {
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

function Fecha113() {
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

function Fecha114() {
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

function Fechas18() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full" data-name="Fechas">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Fecha109 />
          <Fecha110 />
          <Fecha111 />
          <Fecha112 />
          <Fecha113 />
          <Fecha114 />
        </div>
      </div>
    </div>
  );
}

function Resultado19() {
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

function Cantidad249() {
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

function Cantidad250() {
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

function Cantidad252() {
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

function Cantidad254() {
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

function Cantidades46() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad249 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad250 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad252 key={i} />
          ))}
          <Cantidad254 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal20() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-[370px] relative rounded-[18.9259px] shrink-0"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-full">
          <Frame2121452936 />
          <Fechas18 />
          <Resultado19 />
          <Cantidades46 />
          <Cantidades46 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function SectionContent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Content">
      <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative w-full">
        {[...Array(3).keys()].map((_, i) => (
          <CajaFinal20 key={i} />
        ))}
      </div>
    </div>
  );
}

function ColapsablesEspanol2() {
  return (
    <div className="relative shrink-0 w-full" data-name="colapsables-español">
      <div className="box-border content-stretch flex flex-col gap-[42px] items-start justify-start p-0 relative w-full">
        <SectionHeader2 />
        <SectionContent2 />
      </div>
    </div>
  );
}

function Icon3() {
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
            d={svgPaths.p9a70c80}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function MdiFilter3() {
  return (
    <div className="relative shrink-0 size-4" data-name="mdi:filter">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="mdi:filter">
          <path
            d={svgPaths.pddd8680}
            fill="var(--fill-0, #404040)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121453970() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <div className="font-['Aptos_Narrow:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-center text-neutral-700 text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            RENTABILIDAD DEL PATRIMONIO
          </p>
        </div>
        <MdiFilter3 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[4.167%]" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 39"
      >
        <g id="Group">
          <path
            d={svgPaths.p222dae00}
            fill="var(--fill-0, #1A6E31)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p39164d00}
            fill="var(--fill-0, #1A6E31)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function GgArrowUpO3() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="gg:arrow-up-o">
      <Group3 />
    </div>
  );
}

function SectionHeader3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="box-border content-stretch flex flex-row gap-[18px] items-center justify-center p-0 relative w-full">
        <Icon3 />
        <Frame2121453970 />
        <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
          <div className="absolute bottom-[-0.394px] left-0 right-0 top-[-0.394px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 983 2"
            >
              <path
                d="M0 1H983"
                id="Line 82"
                stroke="var(--stroke-0, #404040)"
                strokeWidth="0.788577"
              />
            </svg>
          </div>
        </div>
        <GgArrowUpO3 />
      </div>
    </div>
  );
}

function Frame2121453971() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#9d9292] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">UTILIDAD</p>
        </div>
      </div>
    </div>
  );
}

function ChevronDown25() {
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

function Select25() {
  return (
    <div
      className="bg-[#ffffff] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#d0d5dd] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-700 text-nowrap">
            <p className="block leading-[normal] whitespace-pre">2022-2027</p>
          </div>
          <ChevronDown25 />
        </div>
      </div>
    </div>
  );
}

function IxDragGripper23() {
  return (
    <div className="relative shrink-0 size-6" data-name="ix:drag-gripper">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ix:drag-gripper">
          <path
            clipRule="evenodd"
            d={svgPaths.p1e1c14f0}
            fill="var(--fill-0, #404040)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121452939() {
  return (
    <div className="min-w-[370px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center min-w-inherit p-[6px] relative w-full">
          <Frame2121453971 />
          <Select25 />
          <IxDragGripper23 />
        </div>
      </div>
    </div>
  );
}

function Fecha127() {
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

function Fecha128() {
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

function Fecha129() {
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

function Fecha130() {
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

function Fecha131() {
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

function Fecha132() {
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

function Fechas21() {
  return (
    <div className="h-[34.111px] relative shrink-0 w-full" data-name="Fechas">
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Fecha127 />
          <Fecha128 />
          <Fecha129 />
          <Fecha130 />
          <Fecha131 />
          <Fecha132 />
        </div>
      </div>
    </div>
  );
}

function Resultado22() {
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

function Cantidad285() {
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

function Cantidad286() {
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

function Cantidad288() {
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

function Cantidad290() {
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

function Cantidades52() {
  return (
    <div
      className="h-[34.111px] relative shrink-0 w-full"
      data-name="Cantidades"
    >
      <div className="absolute border-[0px_0px_0.8px] border-dashed border-neutral-700 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34.111px] items-center justify-start pb-2 pt-0 px-0 relative w-full">
          <Cantidad285 />
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad286 key={i} />
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <Cantidad288 key={i} />
          ))}
          <Cantidad290 />
        </div>
      </div>
    </div>
  );
}

function CajaFinal23() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-[370px] relative rounded-[18.9259px] shrink-0"
      data-name="Caja-final"
    >
      <div className="min-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-start min-w-inherit p-[12px] relative w-full">
          <Frame2121452939 />
          <Fechas21 />
          <Resultado22 />
          <Cantidades52 />
          <Cantidades52 />
        </div>
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function SectionContent3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Content">
      <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative w-full">
        {[...Array(3).keys()].map((_, i) => (
          <CajaFinal23 key={i} />
        ))}
      </div>
    </div>
  );
}

function ColapsablesEspanol3() {
  return (
    <div className="relative shrink-0 w-full" data-name="colapsables-español">
      <div className="box-border content-stretch flex flex-col gap-[42px] items-start justify-start p-0 relative w-full">
        <SectionHeader3 />
        <SectionContent3 />
      </div>
    </div>
  );
}

function Valores() {
  return (
    <div
      className="opacity-[0.99] relative shrink-0 w-full"
      data-name="valores"
    >
      <div className="box-border content-stretch flex flex-col gap-[42px] items-start justify-start p-0 relative w-full">
        <ColapsablesEspanol />
        <ColapsablesEspanol1 />
        <ColapsablesEspanol2 />
        <ColapsablesEspanol3 />
      </div>
    </div>
  );
}

function Frame2121453934() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-[42px] items-start justify-start p-0 relative w-full">
        <Frame2121453933 />
        <Valores />
      </div>
    </div>
  );
}

export default function PantallaDesktopPropuestaLight() {
  return (
    <div
      className="bg-neutral-50 relative size-full"
      data-name="Pantalla desktop-propuesta.light"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-[40px] relative size-full">
          <div
            className="absolute flex h-[1307.894px] items-center justify-center top-[-484px] w-[1411.386px]"
            style={{ left: "calc(41.6667% + 47.9167px)" }}
          >
            <div className="flex-none rotate-[27.694deg]">
              <div className="h-[884px] relative w-[1130px]">
                <div className="absolute bottom-[-21.619%] left-[-16.913%] right-[-16.913%] top-[-21.619%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 1514 1268"
                  >
                    <g filter="url(#filter0_f_1_79956)" id="Ellipse 5">
                      <ellipse
                        cx="757"
                        cy="634"
                        fill="var(--fill-0, #15803D)"
                        fillOpacity="0.14"
                        rx="565"
                        ry="442"
                      />
                    </g>
                    <defs>
                      <filter
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                        height="1266.23"
                        id="filter0_f_1_79956"
                        width="1512.23"
                        x="0.884888"
                        y="0.884888"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          mode="normal"
                          result="shape"
                        />
                        <feGaussianBlur
                          result="effect1_foregroundBlur_1_79956"
                          stdDeviation="95.5576"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[1048.094px] items-center justify-center left-[-356px] top-[617px] w-[1083.854px]">
            <div className="flex-none rotate-[27.694deg]">
              <div className="h-[747px] relative w-[832px]">
                <div className="absolute bottom-[-25.584%] left-[-22.971%] right-[-22.971%] top-[-25.584%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 1216 1131"
                  >
                    <g filter="url(#filter0_f_1_79980)" id="Ellipse 6">
                      <ellipse
                        cx="608"
                        cy="565.5"
                        fill="var(--fill-0, #15803D)"
                        fillOpacity="0.14"
                        rx="416"
                        ry="373.5"
                      />
                    </g>
                    <defs>
                      <filter
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                        height="1129.23"
                        id="filter0_f_1_79980"
                        width="1214.23"
                        x="0.884888"
                        y="0.884888"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          mode="normal"
                          result="shape"
                        />
                        <feGaussianBlur
                          result="effect1_foregroundBlur_1_79980"
                          stdDeviation="95.5576"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Sidebar />
          <Frame2121453934 />
        </div>
      </div>
    </div>
  );
}