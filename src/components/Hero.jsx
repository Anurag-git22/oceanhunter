import React from 'react';
import { Phone, MapPin, Compass, Navigation, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { BRAND } from '../data';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[640px] h-[100svh] flex flex-col justify-end overflow-hidden bg-navy-950 text-white pb-20 select-none"
    >
      {/* Background Image Container with Proper Fit & No Heavy Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/backwater1.jpg"
          alt="Ocean Hunter - Backwater to Ocean Boat Safari Devbag"
          fetchPriority="high"
          className="w-full h-full object-cover object-[center_55%] md:object-[center_50%] transition-transform duration-700"
          onError={(e) => {
            // Safe fallback if needed
            e.currentTarget.src = "/images/new-lighthouse.jpg";
          }}
        />

        {/* 
          Balanced Gradient Overlay:
          - Navy at ~40% at the top (behind navbar)
          - Nearly transparent in the center (under 15%) so the 4K wave and horizon remain crisp & visible
          - Deep navy at ~85% at bottom for maximum readability of text and buttons
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090A22]/45 via-transparent via-45% to-[#090A22]/90 pointer-events-none" />
      </div>

      {/* Main Content Container: max-w-7xl aligned with navbar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Content Block: Left-aligned on desktop, Centered on mobile */}
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
          
          {/* 1. Location Pill (16px bottom margin to headline) */}
          <div className="mb-4 inline-flex flex-wrap items-center justify-center md:justify-start gap-2 bg-white/15 hover:bg-white/20 backdrop-blur-md border border-white/25 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-slate-100 shadow-md">
            <span className="inline-flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-brandRed" />
              <span>A/P Devbag, Tal. Malvan • Sindhudurg</span>
            </span>
            <span className="hidden sm:inline-block text-white/40">|</span>
            <a 
              href={BRAND.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-oceanTeal-light hover:text-white font-semibold underline underline-offset-2 transition-colors"
            >
              <Navigation className="w-3 h-3" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* 2. Headline (12px bottom margin to subline) */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.8)] mb-3">
            Backwater <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-brandRed to-orange-400">to Ocean</span>
          </h1>

          {/* 3. Subline (24px bottom margin to buttons) */}
          <p className="font-sans text-lg sm:text-xl md:text-2xl font-light text-slate-100 tracking-wide max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-6 text-balance">
            Boat safaris on the Malvan coast
          </p>

          {/* 4. Action Buttons (32px bottom margin to info strip) */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3.5 w-full sm:w-auto mb-8">
            <a
              href="#packages"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-brandRed to-red-600 hover:from-brandRed-hover hover:to-red-700 text-white font-semibold text-base sm:text-lg px-8 py-3.5 rounded-full shadow-ocean hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-5 h-5" />
              <span>View Packages</span>
            </a>

            <a
              href="https://wa.me/919370208843?text=Hi%20Ocean%20Hunter%2C%20I%20want%20to%20book%20a%20boat%20safari."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da851] text-white font-semibold text-base sm:text-lg px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:9370208843"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-white/20 hover:bg-white/30 active:bg-white/35 backdrop-blur-md text-white border border-white/40 font-semibold text-base sm:text-lg px-7 py-3.5 rounded-full transition-all duration-300 hover:border-white shadow-md hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-oceanTeal-light" />
              <span>Call Now</span>
            </a>

            <a
              href={BRAND.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-navy-950/70 hover:bg-navy-900 text-slate-200 hover:text-white border border-white/25 font-semibold text-base px-6 py-3.5 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <Navigation className="w-4 h-4 text-oceanTeal-light" />
              <span>Directions</span>
            </a>
          </div>

          {/* 5. Info Strip (3 Glass Cards: Island Safaris, Wildlife, Adventure) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xl">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 text-center md:text-left shadow-sm">
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-300 font-medium">Island Safaris</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 leading-snug">Tsunami & Seagull</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 text-center md:text-left shadow-sm">
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-300 font-medium">Wildlife</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 leading-snug">Dolphin Sightings</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 text-center md:text-left shadow-sm">
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-300 font-medium">Adventure</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 leading-snug">2 Lighthouses</p>
            </div>
          </div>

        </div>

      </div>

      {/* Small Animated Scroll-down Chevron at Bottom Center */}
      <a 
        href="#packages"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors flex flex-col items-center animate-bounce"
        aria-label="Scroll down to safari packages"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
