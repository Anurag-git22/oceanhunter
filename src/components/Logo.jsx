import React from 'react';

export default function Logo({ size = "normal", isLight = false }) {
  const isLarge = size === "large";

  return (
    <a href="#home" className="inline-flex flex-col group select-none">
      <div className="flex items-center space-x-2">
        <img
          src="/images/ocean-hunter-logo.png"
          alt="Ocean Hunter Logo"
          className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
            isLarge ? 'h-12 md:h-14' : 'h-9 md:h-10'
          } ${isLight ? 'brightness-125 contrast-125 drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]' : ''}`}
        />
      </div>

      {/* Sub-label */}
      <div className="flex items-center space-x-1.5 mt-0.5 pl-1">
        <span className="w-1.5 h-1.5 rounded-full bg-brandRed"></span>
        <span className={`text-[10px] md:text-[11px] font-medium tracking-widest uppercase ${
          isLight ? 'text-slate-300' : 'text-navy-800'
        }`}>
          Resort & Room Booking
        </span>
      </div>
    </a>
  );
}
