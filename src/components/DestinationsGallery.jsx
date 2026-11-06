import React, { useState } from 'react';
import { DESTINATIONS, GALLERY_FILTERS } from '../data';
import Lightbox from './Lightbox';
import { Camera, Maximize2, Sparkles } from 'lucide-react';

export default function DestinationsGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter items
  const filteredItems = activeFilter === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter(item => item.category === activeFilter);

  const openLightbox = (indexInFiltered) => {
    setLightboxIndex(indexInFiltered);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Subtle Accent glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-oceanTeal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brandRed/10 rounded-full blur-3xl pointer-events-none" />

      {/* Uniform Max Width Container: max-w-6xl centered px-4 */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Title Row: Heading left, subtext right, stacked on mobile, aligned to grid edges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-oceanTeal-light font-semibold text-xs sm:text-sm uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1 rounded-full mb-3">
              <Camera className="w-4 h-4" />
              <span>Real Safari Destinations</span>
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-none">
              Explore Our <span className="text-brandRed">Coastline</span>
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-md font-light text-left md:text-right">
            High-definition glimpses of Malvan's emerald backwaters, open ocean pods & offshore lighthouses.
          </p>
        </div>

        {/* Filter Tabs Row: Horizontally scrollable on mobile, min height 40px, active in red */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
          {GALLERY_FILTERS.map((filter) => {
            const count = filter.id === 'all'
              ? DESTINATIONS.length
              : DESTINATIONS.filter(item => item.category === filter.id).length;
            const isActive = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex-shrink-0 min-h-[40px] px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center space-x-2 select-none ${
                  isActive
                    ? 'bg-brandRed text-white shadow-md shadow-brandRed/30 scale-[1.02]'
                    : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white border border-white/10'
                }`}
              >
                <span>{filter.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-black/30 text-white' : 'bg-white/15 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Uniform Grid:
            - 2 cols on mobile, 3 cols on md, 4 cols on lg
            - gap 12px (gap-3) mobile, 16px (gap-4) desktop
            - Exactly aspect-[4/5] on mobile, aspect-[3/4] on desktop
            - If filter has fewer tiles, centers rows cleanly
        */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 ${
          filteredItems.length < 4 ? 'justify-center' : ''
        }`}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-navy-900 border border-white/10 shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/5] sm:aspect-[3/4] flex flex-col justify-end"
            >
              {/* Background Image: sensible object-position (e.g. object-top for lighthouses), 500ms hover scale */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                  item.position || 'object-center'
                } ${
                  item.isDolphin ? 'contrast-[1.06] saturate-[1.12]' : ''
                }`}
              />

              {/* Bottom Gradient Overlay from-black/75 to transparent so text is easily readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300 group-hover:from-black/90 pointer-events-none" />

              {/* Quick Zoom Icon (Desktop Hover) */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-black/60 backdrop-blur-sm text-white pointer-events-none">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Text Overlay: Title at least 16px mobile & 18px desktop, caption 12px line-clamp-1 */}
              <div className="relative z-10 p-3 sm:p-4 transition-transform duration-300 group-hover:-translate-y-0.5">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-oceanTeal-light block mb-0.5">
                  {item.categoryName}
                </span>

                <h3 className="font-heading text-base sm:text-lg font-bold uppercase text-white tracking-wide leading-tight line-clamp-2 drop-shadow-sm">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5 font-light drop-shadow-sm">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Caption Hint at bottom */}
        <div className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-oceanTeal-light" />
          <span>Tap any photo to view full screen • Swipe left/right on mobile</span>
        </div>

      </div>

      {/* Lightbox Modal with Swipe Support */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
