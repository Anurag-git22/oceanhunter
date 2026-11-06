import React from 'react';

/**
 * Ocean Hunter Logo Component
 * 
 * Props:
 * - variant: "navbar" | "footer" (default: "navbar")
 * - isScrolled: boolean (for navbar: whether page has scrolled past hero)
 * - className: string (additional wrapper classes)
 */
export default function Logo({ variant = "navbar", isScrolled = false, className = "" }) {
  const isFooter = variant === "footer";
  const isDarkHero = !isScrolled && !isFooter;

  // Footer Variant
  if (isFooter) {
    return (
      <a 
        href="#home" 
        className={`inline-flex items-center group select-none gap-3 sm:gap-3.5 ${className}`}
        aria-label="Ocean Hunter Home"
      >
        {/* Logo Block: Logo Image + Line + Tagline */}
        <div className="flex flex-col items-center gap-[3px]">
          <img
            src="/images/ocean-hunter-logo-1200.png"
            alt="Ocean Hunter logo"
            width="1200"
            height="655"
            decoding="async"
            loading="lazy"
            style={{
              filter: 'drop-shadow(0 0 2px rgba(255,255,255,1)) drop-shadow(0 0 8px rgba(255,255,255,0.35))'
            }}
            className="h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
          {/* Thin horizontal line same width as logo (h-14 * 1.83 = ~103px) */}
          <div className="w-[103px] h-[1.5px] rounded-full bg-white/90" />
          {/* Tagline in serif font */}
          <span className="font-serif font-semibold text-[11px] sm:text-[12px] tracking-[0.02em] text-white/90 text-center leading-tight">
            Resort & Room Booking
          </span>
        </div>

        {/* Brand headline text beside logo */}
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline tracking-tight font-heading font-bold uppercase leading-none">
            <span className="text-brandRed text-2xl sm:text-3xl tracking-wider">
              OCEAN
            </span>
            <span className="ml-1.5 text-white text-2xl sm:text-3xl tracking-wider">
              HUNTER
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-oceanTeal-light mt-1">
            Backwater to Ocean
          </span>
        </div>
      </a>
    );
  }

  // Navbar Variant
  return (
    <a 
      href="#home" 
      className={`inline-flex items-center group select-none gap-2 sm:gap-2.5 transition-all duration-300 ${className}`}
      aria-label="Ocean Hunter Home"
    >
      {/* 
        Logo Block (Logo, Line, Tagline wrapped in one flex column, items-center)
        No white rounded background or pill; sits directly on the navbar.
      */}
      <div className="flex flex-col items-center gap-[2px] sm:gap-[3px]">
        <img
          src="/images/ocean-hunter-logo-1200.png"
          alt="Ocean Hunter logo"
          width="1200"
          height="655"
          decoding="async"
          loading="eager"
          style={{
            filter: isDarkHero
              ? 'drop-shadow(0 0 2px rgba(255,255,255,1)) drop-shadow(0 0 8px rgba(255,255,255,0.35))'
              : 'none'
          }}
          className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]"
        />

        {/* 
          Thin horizontal line directly under the logo (1.5px height).
          Matches logo width: h-10 is ~74px, h-12 is ~88px.
        */}
        <div 
          className={`w-[74px] md:w-[88px] h-[1.5px] rounded-full transition-colors duration-300 ${
            isScrolled ? 'bg-[#2B2D8E]' : 'bg-white/90'
          }`}
        />

        {/* 
          Tagline under line: "Resort & Room Booking" in serif font (Playfair Display / Georgia),
          semi-bold, centered under the logo, same color as the line.
        */}
        <span 
          className={`font-serif font-semibold tracking-[0.02em] text-[10px] sm:text-[11px] md:text-[12px] text-center leading-tight transition-colors duration-300 ${
            isScrolled ? 'text-[#2B2D8E]' : 'text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
          }`}
        >
          Resort & Room Booking
        </span>
      </div>

      {/* 
        Restored headline/brand text beside the logo:
        - Exactly as before: OCEAN (red) HUNTER (navy/white), font-heading, font-bold, uppercase.
        - On screens < 380px, hidden to prevent any navbar overflow at 360px.
        - On screens >= 380px, visible and crisp.
      */}
      <div className="hidden min-[380px]:flex flex-col justify-center">
        <div className="flex items-baseline tracking-tight font-heading font-bold uppercase leading-none">
          <span className="text-brandRed text-xl sm:text-2xl md:text-[26px] tracking-normal">
            OCEAN
          </span>
          <span 
            className={`ml-1.5 text-xl sm:text-2xl md:text-[26px] tracking-normal transition-colors duration-300 ${
              isScrolled 
                ? 'text-navy' 
                : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]'
            }`}
          >
            HUNTER
          </span>
        </div>
      </div>
    </a>
  );
}
