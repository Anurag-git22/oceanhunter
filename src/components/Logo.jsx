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
        className={`inline-flex flex-col items-start group select-none ${className}`}
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
      </a>
    );
  }

  // Navbar Variant
  return (
    <a 
      href="#home" 
      className={`inline-flex items-center group select-none transition-all duration-300 ${className}`}
      aria-label="Ocean Hunter Home"
    >
      {/* 
        Logo Block (Logo, Line, Tagline wrapped in one flex column, aligned left):
        - h-11 on mobile (width ~81px), h-12 on desktop (width ~88px)
        - Entire block fits comfortably inside --nav-h (72px mobile / 80px desktop)
        - Tagline "Resort & Room Booking" strictly constrained to logo width (no wider than logo)
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
          className="h-11 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]"
        />

        {/* 
          Thin horizontal line directly under the logo (1.5px height).
          Matches logo width: h-11 is ~81px, h-12 is ~88px.
        */}
        <div 
          className={`w-[81px] md:w-[88px] h-[1.5px] rounded-full transition-colors duration-300 ${
            isScrolled ? 'bg-[#2B2D8E]' : 'bg-white/90'
          }`}
        />

        {/* 
          Tagline under line: "Resort & Room Booking" in serif font (Playfair Display / Georgia),
          semi-bold, centered under the logo, strictly no wider than the logo.
        */}
        <span 
          className={`font-serif font-semibold tracking-[0.01em] text-[9.5px] sm:text-[10px] md:text-[11px] text-center leading-none transition-colors duration-300 max-w-[81px] md:max-w-[88px] truncate block ${
            isScrolled ? 'text-[#2B2D8E]' : 'text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
          }`}
        >
          Resort & Room Booking
        </span>
      </div>
    </a>
  );
}
