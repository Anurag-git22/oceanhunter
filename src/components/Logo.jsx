import React from 'react';

/**
 * Ocean Hunter Logo Component
 * 
 * Props:
 * - variant: "navbar" | "footer" (default: "navbar")
 * - isScrolled: boolean (for navbar: whether page has scrolled past hero)
 * - className: string (additional wrapper classes)
 * 
 * The logo has navy "HUNTER" and red "OCEAN".
 * - On transparent hero background: wrapped in a white rounded-xl pill/card (bg-white, px-3 py-1.5, soft shadow)
 * - On solid white navbar: rendered directly with no pill
 * - On dark footer: wrapped in a white rounded card with tagline "Backwater to Ocean"
 * - Maintains 1.83:1 aspect ratio with width/height attributes (1200x655) to prevent CLS
 */
export default function Logo({ variant = "navbar", isScrolled = false, className = "" }) {
  if (variant === "footer") {
    return (
      <a 
        href="#home" 
        className={`inline-flex flex-col items-start group select-none ${className}`}
        aria-label="Ocean Hunter Home"
      >
        <div className="bg-white rounded-2xl p-3 sm:px-4 sm:py-3 shadow-lg border border-white/20 inline-flex flex-col sm:flex-row items-center sm:space-x-3 space-y-2 sm:space-y-0 group-hover:shadow-xl transition-all duration-200">
          <img
            src="/images/ocean-hunter-logo-1200.png"
            alt="Ocean Hunter logo"
            width="1200"
            height="655"
            decoding="async"
            loading="lazy"
            className="h-14 w-auto object-contain"
          />
          <div className="border-t sm:border-t-0 sm:border-l border-slate-200 pt-1.5 sm:pt-0 sm:pl-3 text-center sm:text-left">
            <span className="text-[11px] font-bold text-navy uppercase tracking-wider block">
              Backwater to Ocean
            </span>
            <span className="text-[10px] text-brandRed font-semibold tracking-wide block">
              Devbag • Malvan
            </span>
          </div>
        </div>
      </a>
    );
  }

  // Navbar variant
  return (
    <a 
      href="#home" 
      className={`inline-flex items-center group select-none transition-all duration-300 ${className}`}
      aria-label="Ocean Hunter Home"
    >
      <div 
        className={`flex items-center transition-all duration-300 ${
          isScrolled 
            ? 'bg-transparent p-0' 
            : 'bg-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-md border border-white/60 group-hover:shadow-lg'
        }`}
      >
        <img
          src="/images/ocean-hunter-logo-1200.png"
          alt="Ocean Hunter logo"
          width="1200"
          height="655"
          decoding="async"
          className="h-10 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
        />
      </div>
    </a>
  );
}
