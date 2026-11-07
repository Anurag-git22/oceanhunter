import React from 'react';
import Logo from './Logo';
import { BRAND, MAP } from '../data';
import { Phone, MapPin, Navigation, Heart, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-white/10 pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="footer" />
            
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm font-light mt-4 leading-relaxed">
              Official boat safaris and coastal resort bookings at Devbag Sangam, Malvan. Experience the best of Maharashtra's marine wonders from backwaters to open ocean.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-oceanTeal-light font-medium">
              <span>Devbag Sangam</span>
              <span>•</span>
              <span>Dolphin Point</span>
              <span>•</span>
              <span>Nivti Lighthouses</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-light">
              <li>
                <a href="#home" className="hover:text-brandRed transition-colors">Home</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-brandRed transition-colors">Safari Packages</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-brandRed transition-colors">Destinations Gallery</a>
              </li>
              <li>
                <a href="#resort" className="hover:text-brandRed transition-colors">Devbag Resort & Rooms</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brandRed transition-colors">Contact Coordinators</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-slate-200">
              Safari Contacts
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white">Vishal Dongre:</span>
                <a href="tel:9370208843" className="hover:text-brandRed">93702 08843</a>
                <span>/</span>
                <a href="tel:8007020197" className="hover:text-brandRed">80070 20197</a>
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-semibold text-white">Shubham:</span>
                <a href="tel:8007017417" className="hover:text-brandRed">80070 17417</a>
                <span>/</span>
                <a href="tel:7498710675" className="hover:text-brandRed">74987 10675</a>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <MapPin className="w-4 h-4 text-brandRed flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 block">{BRAND.address}</span>
                  <a
                    href={MAP.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-oceanTeal-light hover:text-white font-medium underline underline-offset-2 transition-colors mt-1"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-[#25D366] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors border border-white/20"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366] group-hover:text-white" />
                <span>WhatsApp: +91 9370208843</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Ocean Hunter. All rights reserved. A/P Devbag, Malvan.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors p-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
