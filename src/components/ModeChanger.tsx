import React, { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-equovlt055";

interface ModeChangerProps {
  onModeChange: (isDark: boolean) => void;
}

function SunIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 20 20"
    >
      <g>
        <path
          d={svgPaths.p281657f0}
          stroke="#FAFAFA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d={svgPaths.p2af48600}
          stroke="#FAFAFA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 20 20"
    >
      <g>
        <path
          d={svgPaths.pfb06380}
          stroke="#404040"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export const ModeChanger: React.FC<ModeChangerProps> = ({ onModeChange }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detectar el modo inicial del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const initialDarkMode = mediaQuery.matches;
    setIsDark(initialDarkMode);
    // Notify parent component about the initial system preference
    onModeChange(initialDarkMode);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
      onModeChange(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [onModeChange]);

  const handleToggle = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    onModeChange(newMode);
  };

  return (
    <button
      onClick={handleToggle}
      className="mode-changer-toggle relative h-[38px] w-[72px] rounded-full border border-[#9e9e9e] transition-all duration-300 hover:scale-105 overflow-hidden"
      style={{
        background: isDark
          ? 'rgba(34,33,38,0.5)'
          : 'rgba(247,249,250,0.95)'
      }}
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
    >
      {/* Fondo base que cubre todo */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: isDark
            ? 'rgba(34,33,38,0.5)'
            : 'rgba(247,249,250,0.95)'
        }}
      />

      {/* Elipse activo que se mueve */}
      <div
        className={`absolute top-0 h-[38px] w-[38px] transition-all duration-300 ease-in-out overflow-hidden ${isDark ? 'left-0' : 'left-[34px]'
          }`}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: isDark ? "#4350AF" : "#FFC000"
          }}
        />
      </div>

      {/* Contenedor de iconos */}
      <div className="relative w-full h-full flex">
        {/* Icono Luna (lado izquierdo) */}
        <div className="absolute left-0 top-0 w-[38px] h-[38px] flex items-center justify-center z-10">
          {isDark && <MoonIcon />}
        </div>

        {/* Icono Sol (lado derecho) */}
        <div className="absolute right-0 top-0 w-[38px] h-[38px] flex items-center justify-center z-10">
          {!isDark && <SunIcon />}
        </div>
      </div>
    </button>
  );
};