import svgPaths from "../imports/svg-vafc9130a3";

interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function ArrowButton({ direction, onClick, disabled = false, className = "" }: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative size-[52px] rounded-full transition-all duration-200 
        ${disabled 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:bg-[#757575] cursor-pointer'
        }
        ${className}
      `}
    >
      <svg
        className={`block size-full transition-transform duration-200 ${direction === 'left' ? 'rotate-180' : ''}`}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 52 52"
      >
        <g>
          <path
            d={svgPaths.p3c61cd00}
            fill={disabled ? "#CCCCCC" : "#9E9E9E"}
          />
        </g>
      </svg>
    </button>
  );
}