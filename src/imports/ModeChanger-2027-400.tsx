import svgPaths from "./svg-equovlt055";

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
            stroke="var(--stroke-0, #9E9E9E)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p2af48600}
            id="Vector_2"
            stroke="var(--stroke-0, #9E9E9E)"
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
            stroke="var(--stroke-0, #9E9E9E)"
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

export default function ModeChanger() {
  return (
    <div
      className="bg-[rgba(34,33,38,0.5)] relative rounded-[1000px] size-full"
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