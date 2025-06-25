import svgPaths from "./svg-t3jooojoxf";

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

export default function ExpandIcon() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[99px] size-full"
      data-name="Expand icon"
    >
      <div className="absolute border border-neutral-100 border-solid inset-[-1px] pointer-events-none rounded-[100px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[4px] relative size-full">
          <IconSolidChevronLeft />
        </div>
      </div>
    </div>
  );
}