import svgPaths from "./svg-ec6iy79qbc";
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
            stroke="var(--stroke-0, #3ABE76)"
            strokeLinecap="round"
            strokeWidth="2.5"
            x1="9.25"
            x2="32.75"
            y1="6.75"
            y2="6.75"
          />
          <line
            id="Line 10"
            stroke="var(--stroke-0, #3ABE76)"
            strokeLinecap="round"
            strokeWidth="2.5"
            x1="9.25"
            x2="32.75"
            y1="14.75"
            y2="14.75"
          />
          <line
            id="Line 11"
            stroke="var(--stroke-0, #3ABE76)"
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
      className="bg-[rgba(115,115,115,0.4)] h-12 relative rounded-2xl shadow-[0px_16px_44px_0px_rgba(0,0,0,0.07)] shrink-0"
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
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center leading-[0] not-italic p-0 relative text-left w-full">
        <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#ffffff] text-[36px] w-full">
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
            stroke="var(--stroke-0, #E8E8E8)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p2af48600}
            id="Vector_2"
            stroke="var(--stroke-0, #E8E8E8)"
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
    <button
      className="absolute cursor-pointer h-[38px] left-9 rounded-[50px] top-0"
      data-name="Icon Button"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row h-[38px] items-start justify-start p-[8px] relative">
          <IconContent />
        </div>
      </div>
    </button>
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
            stroke="var(--stroke-0, #E8E8E8)"
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
    <div
      className="absolute h-[38px] left-0 rounded-[50px] top-0"
      data-name="Icon Button"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row h-[38px] items-start justify-start p-[8px] relative">
          <IconContent1 />
        </div>
      </div>
    </div>
  );
}

function ModeChanger() {
  return (
    <div
      className="bg-[rgba(34,33,38,0.5)] h-[38px] relative rounded-[1000px] shrink-0 w-[72px]"
      data-name="Mode changer"
    >
      <div className="absolute border border-[#9e9e9e] border-solid inset-[-1px] pointer-events-none rounded-[1001px]" />
      <div className="absolute h-[38px] left-0 top-0 w-9">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 36 38"
        >
          <ellipse
            cx="18"
            cy="19"
            fill="var(--fill-0, #4350AF)"
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
            d={svgPaths.p1c91a800}
            id="Vector"
            stroke="var(--stroke-0, #ADADAD)"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="1.53713"
          />
          <path
            d={svgPaths.p2391f100}
            id="Vector_2"
            stroke="var(--stroke-0, #ADADAD)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.53713"
          />
          <path
            d={svgPaths.p21dd98e0}
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
      className="backdrop-blur-[20.0671px] backdrop-filter bg-[rgba(34,33,38,0.5)] relative rounded-[11.6403px] shrink-0 size-12"
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
                <g id="Ellipse 1">
                  <circle
                    cx="8.36511"
                    cy="8.36511"
                    fill="var(--fill-0, #FF2E2E)"
                    r="4.36511"
                  />
                  <circle
                    cx="8.36511"
                    cy="8.36511"
                    r="5.90225"
                    stroke="var(--stroke-0, #222126)"
                    strokeOpacity="0.5"
                    strokeWidth="3.07427"
                  />
                </g>
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
            fill="var(--fill-0, #ADADAD)"
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
      className="bg-[rgba(34,33,38,0.5)] relative rounded-[20px] shrink-0 w-[516px]"
      data-name="preiodo-completo-2"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-8 py-6 relative w-[516px]">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#adadad] text-[16px] text-left text-nowrap">
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left text-nowrap">
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
      className="bg-[rgba(115,115,115,0.4)] h-[72px] relative rounded-[20px] shrink-0"
      data-name="Company Value Container"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-[72px] items-center justify-start p-[32px] relative">
          <div
            className="absolute h-[230px] left-0 opacity-[0.15] top-0 w-[2994px]"
            data-name="Rectangle"
          />
          <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[24px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Valor empresa
            </p>
          </div>
          <ValueContainer />
        </div>
      </div>
      <div className="absolute border-2 border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
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
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#adadad] text-[16px] text-left text-nowrap">
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
            stroke="var(--stroke-0, #E0E0E0)"
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
      className="bg-[rgba(34,33,38,0.5)] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#f2f2f2] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#e0e0e0] text-[14px] text-left text-nowrap">
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
            fill="var(--fill-0, #E0E0E0)"
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
      <div className="absolute border-[#e0e0e0] border-[0px_0px_0.8px] border-dashed inset-0 pointer-events-none" />
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
      <div className="absolute border-[#e0e0e0] border-[0px_0px_0.8px] border-dashed inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[34.111px] items-center justify-center pb-2 pt-1 px-1 relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ff2e2e] text-[28px] text-left text-nowrap">
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
      <div className="absolute border-[#e0e0e0] border-[0px_0px_0.8px] border-dashed inset-0 pointer-events-none" />
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#adadad] text-[16px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">UTILIDAD</p>
          </div>
        </div>
      </div>
      <div className="absolute border-[#e0e0e0] border-[0px_0px_0.8px] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function CajaFinal() {
  return (
    <div
      className="bg-[rgba(34,33,38,0.5)] min-w-[370px] relative rounded-[18.9259px] shrink-0"
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
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
      <div className="absolute border-[#e0e0e0] border-[0px_0px_0.8px] border-dashed inset-0 pointer-events-none" />
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
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow h-full leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#adadad] text-[16px] text-left">
            <p className="block leading-[normal]">
              EXCEDENTE DE CAJA ESTRUCTUTAL
            </p>
          </div>
        </div>
      </div>
      <div className="absolute border-[#e0e0e0] border-[0px_0px_0.8px] border-dashed inset-0 pointer-events-none" />
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3acfff] text-[12px] text-left text-nowrap">
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3acfff] text-[12px] text-left text-nowrap">
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
      <div className="absolute border-[#e0e0e0] border-[0px_0px_0.8px] border-dashed inset-0 pointer-events-none" />
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
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#adadad] text-[16px] text-left">
            <p className="block leading-[normal]">
              REQUERIMIENTO DE CAJA ADICIONAL POR ESTACIONALIDAD
            </p>
          </div>
        </div>
      </div>
      <div className="absolute border-[#e0e0e0] border-[0px_0px_0.8px] border-dashed inset-0 pointer-events-none" />
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ff2e2e] text-[12px] text-left text-nowrap">
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ff2e2e] text-[12px] text-left text-nowrap">
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
      <div className="absolute border-[#e0e0e0] border-[0px_0px_0.8px] border-dashed inset-0 pointer-events-none" />
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
      <div className="absolute border-[#e0e0e0] border-[0px_0px_0.8px] border-dashed inset-0 pointer-events-none" />
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
      className="bg-[rgba(34,33,38,0.5)] h-[293px] min-w-[370px] relative rounded-[18.9259px] shrink-0 w-[370px]"
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
      <div className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[18.9259px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame2121452916() {
  return (
    <div className="h-[31px] relative rounded-[31.5431px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-[31px] items-center justify-start p-[6px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#adadad] text-[14px] text-left text-nowrap">
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#3acfff] text-[14px] text-left text-nowrap">
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
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#3acfff] text-[14px] text-left text-nowrap">
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3acfff] text-[12px] text-left text-nowrap">
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
          <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#3acfff] text-[14px] text-left">
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
            stroke="var(--stroke-0, #E0E0E0)"
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
      className="bg-[rgba(34,33,38,0.5)] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#f2f2f2] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-start min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#e0e0e0] text-[14px] text-left text-nowrap">
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
          <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#3acfff] text-[14px] text-left">
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
            stroke="var(--stroke-0, #E0E0E0)"
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
      className="bg-[rgba(34,33,38,0.5)] h-10 min-w-[100px] relative rounded-lg shrink-0"
      data-name="SELECT"
    >
      <div className="absolute border border-[#f2f2f2] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center justify-center min-w-inherit relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-2 h-10 items-center justify-center min-w-inherit pl-4 pr-3 py-3 relative">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#e0e0e0] text-[14px] text-left text-nowrap">
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
      className="basis-0 bg-[rgba(34,33,38,0.5)] grow h-[292px] min-h-px min-w-px relative rounded-[18.9259px] shrink-0"
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#adadad] text-[20px] text-left text-nowrap">
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3acfff] text-[16px] text-left text-nowrap">
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3acfff] text-[16px] text-left text-nowrap">
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3acfff] text-[16px] text-left text-nowrap">
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3acfff] text-[16px] text-left text-nowrap">
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3acfff] text-[16px] text-left text-nowrap">
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
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#3acfff] text-[16px] text-left text-nowrap">
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
      className="basis-0 bg-[rgba(34,33,38,0.5)] grow h-[293px] min-h-px min-w-px relative rounded-[18.9259px] shrink-0"
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
            fill="var(--fill-0, white)"
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
            fill="var(--fill-0, #E0E0E0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121453948() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <div className="font-['Aptos_Narrow:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-center text-nowrap">
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
            d={svgPaths.p2468c7c0}
            fill="var(--fill-0, #3ABE76)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p3ef6bb00}
            fill="var(--fill-0, #3ABE76)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function GgArrowDownO() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="gg:arrow-down-o">
      <Group />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="box-border content-stretch flex flex-row gap-[18px] items-center justify-center p-0 relative w-full">
        <Icon />
        <Frame2121453948 />
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
                stroke="var(--stroke-0, white)"
                strokeWidth="0.788577"
              />
            </svg>
          </div>
        </div>
        <GgArrowDownO />
      </div>
    </div>
  );
}

function ColapsablesEspanol() {
  return (
    <div className="relative shrink-0 w-full" data-name="colapsables-español">
      <div className="box-border content-stretch flex flex-col gap-[42px] items-start justify-start p-0 relative w-full">
        <SectionHeader />
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
          <path d={svgPaths.p5d83c80} fill="var(--fill-0, white)" id="Vector" />
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
            fill="var(--fill-0, #E0E0E0)"
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
        <div className="font-['Aptos_Narrow:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-center text-nowrap">
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
            d={svgPaths.p2468c7c0}
            fill="var(--fill-0, #3ABE76)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p3ef6bb00}
            fill="var(--fill-0, #3ABE76)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function GgArrowDownO1() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="gg:arrow-down-o">
      <Group1 />
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="box-border content-stretch flex flex-row gap-[18px] items-center justify-center p-0 relative w-full">
        <Icon1 />
        <Frame2121453947 />
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
                stroke="var(--stroke-0, white)"
                strokeWidth="0.788577"
              />
            </svg>
          </div>
        </div>
        <GgArrowDownO1 />
      </div>
    </div>
  );
}

function ColapsablesEspanol1() {
  return (
    <div className="relative shrink-0 w-full" data-name="colapsables-español">
      <div className="box-border content-stretch flex flex-col gap-[42px] items-start justify-start p-0 relative w-full">
        <SectionHeader1 />
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
            fill="var(--fill-0, white)"
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
            fill="var(--fill-0, #E0E0E0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121453949() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <div className="font-['Aptos_Narrow:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-center text-nowrap">
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
            d={svgPaths.p2468c7c0}
            fill="var(--fill-0, #3ABE76)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p3ef6bb00}
            fill="var(--fill-0, #3ABE76)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function GgArrowDownO2() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="gg:arrow-down-o">
      <Group2 />
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="box-border content-stretch flex flex-row gap-[18px] items-center justify-center p-0 relative w-full">
        <Icon2 />
        <Frame2121453949 />
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
                stroke="var(--stroke-0, white)"
                strokeWidth="0.788577"
              />
            </svg>
          </div>
        </div>
        <GgArrowDownO2 />
      </div>
    </div>
  );
}

function ColapsablesEspanol2() {
  return (
    <div className="relative shrink-0 w-full" data-name="colapsables-español">
      <div className="box-border content-stretch flex flex-col gap-[42px] items-start justify-start p-0 relative w-full">
        <SectionHeader2 />
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
          <path d={svgPaths.p9a70c80} fill="var(--fill-0, white)" id="Vector" />
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
            fill="var(--fill-0, #E0E0E0)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2121453950() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <div className="font-['Aptos_Narrow:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-center text-nowrap">
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
            d={svgPaths.p2468c7c0}
            fill="var(--fill-0, #3ABE76)"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p3ef6bb00}
            fill="var(--fill-0, #3ABE76)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function GgArrowDownO3() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="gg:arrow-down-o">
      <Group3 />
    </div>
  );
}

function SectionHeader3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="box-border content-stretch flex flex-row gap-[18px] items-center justify-center p-0 relative w-full">
        <Icon3 />
        <Frame2121453950 />
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
                stroke="var(--stroke-0, white)"
                strokeWidth="0.788577"
              />
            </svg>
          </div>
        </div>
        <GgArrowDownO3 />
      </div>
    </div>
  );
}

function ColapsablesEspanol3() {
  return (
    <div className="relative shrink-0 w-full" data-name="colapsables-español">
      <div className="box-border content-stretch flex flex-col gap-[42px] items-start justify-start p-0 relative w-full">
        <SectionHeader3 />
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

export default function PantallaDesktopPropuestaDark() {
  return (
    <div
      className="bg-[#0d0f0f] relative size-full"
      data-name="Pantalla desktop-propuesta.dark"
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
                    <g filter="url(#filter0_f_2008_42952)" id="Ellipse 5">
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
                        id="filter0_f_2008_42952"
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
                          result="effect1_foregroundBlur_2008_42952"
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
                    <g filter="url(#filter0_f_2008_42934)" id="Ellipse 6">
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
                        id="filter0_f_2008_42934"
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
                          result="effect1_foregroundBlur_2008_42934"
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