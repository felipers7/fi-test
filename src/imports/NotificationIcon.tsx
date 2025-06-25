import svgPaths from "./svg-hfgjcqk8on";

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
            d={svgPaths.p211d5d00}
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

export default function NotificationIcon() {
  return (
    <div
      className="backdrop-blur-[20.0671px] backdrop-filter bg-[#ffffff] relative rounded-[11.6403px] size-full"
      data-name="Notification Icon"
    >
      <div className="absolute border border-[#adadad] border-solid inset-[-1px] pointer-events-none rounded-[12.6403px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[11.64px] items-center justify-center p-[15.5204px] relative size-full">
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