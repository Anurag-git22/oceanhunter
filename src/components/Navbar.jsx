import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { BRAND } from '../data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Clean, non-repetitive core sections
      const sections = ['home', 'packages', 'destinations', 'resort', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean 5-link navigation without repetitive redundant items
  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Packages", href: "#packages", id: "packages" },
    { name: "Destinations", href: "#destinations", id: "destinations" },
    { name: "Resort", href: "#resort", id: "resort" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <>
      {/* Dark semi-transparent backdrop behind the menu (fixed inset-0 bg-black/40) */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden animate-backdrop-fade"
          aria-hidden="true"
        />
      )}

      <header 
        className={`fixed top-0 left-0 right-0 z-50 h-[var(--nav-h)] transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white shadow-md border-b border-slate-100' 
            : 'bg-gradient-to-b from-navy-950/80 via-navy-950/30 to-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo on the left */}
          <Logo variant="navbar" isScrolled={isScrolled || mobileMenuOpen} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm lg:text-base font-medium tracking-wide transition-colors relative group py-1 ${
                    isScrolled
                      ? (isActive ? 'text-navy font-bold' : 'text-slate-600 hover:text-navy')
                      : (isActive ? 'text-white font-bold drop-shadow' : 'text-white/90 hover:text-white drop-shadow-sm')
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-brandRed transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:9370208843"
              className={`inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold px-2.5 sm:px-3 py-2 rounded-lg transition-colors ${
                isScrolled ? 'text-navy-800 hover:text-navy' : 'text-white hover:text-oceanTeal-light drop-shadow-sm'
              }`}
              title="Call Vishal Dongre"
            >
              <Phone className="w-4 h-4 text-brandRed" />
              <span className="hidden lg:inline">93702 08843</span>
              <span className="lg:hidden">Call</span>
            </a>

            <a
              href="#packages"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brandRed to-red-600 hover:from-brandRed-hover hover:to-red-700 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Right: Book Now button & Hamburger vertically centered with 16px side padding */}
          <div className="flex md:hidden items-center space-x-2 flex-shrink-0">
            <a
              href="#packages"
              className="bg-brandRed hover:bg-brandRed-hover text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm sm:hidden transition-all flex-shrink-0"
            >
              Book Now
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 sm:p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled || mobileMenuOpen ? 'text-navy hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 
          Mobile Menu Panel:
          - Solid white background (bg-white, 100% opaque, no transparency, no blur)
          - Full width, directly under navbar, soft shadow (shadow-xl), rounded bottom corners (rounded-b-2xl)
          - Max-height: calc(100svh - var(--nav-h)) with overflow-y-auto
          - Smooth open/close animation (slide down + fade, 200ms)
        */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 w-full bg-white shadow-xl rounded-b-2xl overflow-y-auto border-t border-gray-100 animate-menu-slide-down"
            style={{ maxHeight: 'calc(100svh - var(--nav-h))' }}
          >
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full min-h-[48px] py-[14px] px-6 text-[18px] font-medium transition-colors border-b border-gray-200 flex items-center ${
                      isActive 
                        ? 'text-[#2B2D8E] font-semibold bg-[#2B2D8E]/10 border-l-[3px] border-l-[#E3262E]' 
                        : 'text-[#2B2D8E] border-l-[3px] border-l-transparent hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              {/* Bottom of the Menu */}
              <div className="p-4 pt-3 flex flex-col space-y-2.5 bg-white rounded-b-2xl">
                {/* Call Vishal: navy text, bold, with red phone */}
                <a
                  href="tel:9370208843"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2.5 w-full py-3 px-4 rounded-xl border border-[#2B2D8E]/20 text-[#2B2D8E] font-bold text-base bg-[#2B2D8E]/5 hover:bg-[#2B2D8E]/10 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#E3262E] flex-shrink-0" />
                  <span>Call Vishal: 9370208843</span>
                </a>

                {/* Book on WhatsApp CTA */}
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2.5 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brandRed to-red-600 hover:from-brandRed-hover hover:to-red-700 text-white font-semibold text-base shadow-md transition-all active:scale-[0.99]"
                  aria-label="Book on WhatsApp"
                  title="Book on WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 text-white flex-shrink-0" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
