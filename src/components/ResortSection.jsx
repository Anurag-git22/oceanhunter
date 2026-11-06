import React from 'react';
import { BedDouble, MapPin, CheckCircle, Sparkles, Image as ImageIcon } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { BRAND } from '../data';

export default function ResortSection() {
  const resortWhatsappMessage = encodeURIComponent(
    "Hello Ocean Hunter, I would like to enquire about room availability and stay booking at your Devbag resort."
  );

  return (
    <section id="resort" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden border border-navy-700">
          
          {/* Subtle background decorative shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brandRed/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-oceanTeal/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-oceanTeal-light border border-white/15">
                <BedDouble className="w-4 h-4 text-brandRed" />
                <span>Stay With Us in Devbag</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight">
                Wake Up Where the <span className="text-brandRed">Backwater</span> Meets the Ocean
              </h2>

              <p className="text-sm sm:text-base text-slate-200 font-light max-w-xl">
                Peaceful Konkani coastal hospitality steps away from Devbag beach and private safari boarding points.
              </p>

              {/* Short Punchy Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-oceanTeal-light flex-shrink-0" />
                  <span>Direct beach & river access</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-oceanTeal-light flex-shrink-0" />
                  <span>AC & Non-AC family rooms</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-oceanTeal-light flex-shrink-0" />
                  <span>Authentic Malvani home meals</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-oceanTeal-light flex-shrink-0" />
                  <span>Direct boat tour departures</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={`https://wa.me/${BRAND.whatsappNumber}?text=${resortWhatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-brandRed to-red-600 hover:from-brandRed-hover hover:to-red-700 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
                  aria-label="Enquire for Resort Rooms on WhatsApp"
                  title="Enquire for Rooms on WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4 text-white" />
                  <span>Enquire for Rooms</span>
                </a>

                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-brandRed" />
                  <span>A/P Devbag, Malvan</span>
                </div>
              </div>

            </div>

            {/* Right Column: Resort Image Slot with clear TODO comment */}
            <div className="lg:col-span-5">
              
              {/* 
                ========================================================================
                TODO: RESORT PHOTOS PLACEHOLDER
                Replace the placeholder below with official Ocean Hunter resort photos
                once room photography has been captured and uploaded to /public/images/
                Recommended dimensions: 800x600px or 1200x800px (16:9 / 4:3)
                ========================================================================
              */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-navy-950/70 p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[280px] sm:min-h-[320px] shadow-inner group">
                
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-oceanTeal-light mb-4 group-hover:scale-105 transition-transform duration-300">
                  <ImageIcon className="w-8 h-8 text-brandRed" />
                </div>

                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                  Resort Image Slot
                </span>

                <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                  Ocean Hunter Devbag Retreat
                </h4>

                <p className="text-xs text-slate-300 mt-2 max-w-xs leading-relaxed font-light">
                  Stay amidst tranquil coconut palms and sea breezes. Photos being updated for the season.
                </p>

                <div className="mt-5 inline-flex items-center space-x-2 text-xs font-semibold text-oceanTeal-light bg-oceanTeal/10 border border-oceanTeal/30 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instant WhatsApp Booking</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
