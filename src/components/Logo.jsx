import React from 'react';

export default function Logo({ size = "normal", isLight = false }) {
  const isLarge = size === "large";

  return (
    <a href="#home" className="inline-flex flex-col group select-none">
      {/* Boat Curve Swoosh above text */}
      <div className="flex items-center space-x-1 pl-1 mb-0.5">
        <svg 
          viewBox="0 0 120 20" 
          className={`${isLarge ? 'w-24 h-4' : 'w-20 h-3'} transition-transform duration-300 group-hover:scale-105`}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wave line */}
          <path 
            d="M2 14 C 20 6, 45 18, 70 8 C 90 0, 105 10, 118 6" 
            stroke="#E3262E" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />
          {/* Boat hull swoosh */}
          <path 
            d="M30 15 C 50 18, 75 16, 95 10 L 98 13 C 75 20, 48 20, 26 16 Z" 
            fill={isLight ? "#FFFFFF" : "#2B2D8E"} 
          />
          {/* Sail dot accent */}
          <circle cx="65" cy="5" r="2.5" fill="#00A896" />
        </svg>
      </div>

      {/* Main Brand Name */}
      <div className="flex items-baseline tracking-tight font-heading font-bold uppercase leading-none">
        <span className={`text-brandRed ${isLarge ? 'text-3xl tracking-wider' : 'text-2xl tracking-normal'}`}>
          OCEAN
        </span>
        <span className={`ml-1.5 ${isLight ? 'text-white' : 'text-navy'} ${isLarge ? 'text-3xl tracking-wider' : 'text-2xl tracking-normal'}`}>
          HUNTER
        </span>
      </div>

      {/* Sub-label */}
      <div className="flex items-center space-x-1.5 mt-0.5">
        <span className="w-1.5 h-1.5 rounded-full bg-brandRed"></span>
        <span className={`text-[10px] md:text-[11px] font-medium tracking-widest uppercase ${isLight ? 'text-slate-300' : 'text-navy-800'}`}>
          Resort & Room Booking
        </span>
      </div>
    </a>
  );
}
