import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  const textColor = light ? 'text-white' : 'text-[#1F2928]';

  return (
    <a
      href="#home"
      id="brand-logo"
      aria-label="Optimistic Africa home"
      className={`brand inline-flex items-center gap-2.5 font-bold tracking-tight select-none transition-opacity hover:opacity-90 ${textColor} ${className}`}
    >
      {/* Brand mark circle matching uploaded HTML/CSS */}
      <span
        className="brand-mark w-[35px] h-[35px] rounded-full bg-[#D7663F] text-white font-sans font-bold text-[11px] leading-none tracking-tighter grid place-items-center shrink-0 shadow-xs"
        aria-hidden="true"
      >
        OA
      </span>
      <span className="font-serif text-lg sm:text-xl font-bold tracking-normal">
        Optimistic Africa
      </span>
    </a>
  );
};
