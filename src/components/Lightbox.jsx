import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ 
  items, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev 
}) {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50; // px threshold for swipe

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }
  };

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-6 animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div 
        className="absolute top-0 inset-x-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-white">
          <span className="text-xs font-semibold text-oceanTeal-light uppercase tracking-widest block">
            {currentItem.categoryName || currentItem.category || "Malvan Coast Safari"}
          </span>
          <h4 className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wide">
            {currentItem.title}
          </h4>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-xs font-medium text-slate-400 bg-white/10 px-3 py-1 rounded-full">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-brandRed text-white transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Area with Touch Events for Swipe */}
      <div 
        className="relative max-w-5xl max-h-[82vh] w-full flex items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl select-none"
        />

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-brandRed text-white backdrop-blur-md transition-all duration-200 transform hover:scale-110 focus:outline-none shadow-lg"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-brandRed text-white backdrop-blur-md transition-all duration-200 transform hover:scale-110 focus:outline-none shadow-lg"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Caption & Swipe Notice at Bottom */}
      <div 
        className="absolute bottom-4 inset-x-0 text-center px-4 z-20 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="inline-block text-xs sm:text-sm text-slate-200 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 max-w-xl mx-auto">
          {currentItem.caption}
          <span className="sm:hidden text-oceanTeal-light ml-2 font-medium">(Swipe ↔)</span>
        </p>
      </div>
    </div>
  );
}
