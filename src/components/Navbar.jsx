import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100' 
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo isLight={false} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm lg:text-base font-medium tracking-wide transition-colors relative group py-1 ${
                    isActive ? 'text-navy font-bold' : 'text-slate-600 hover:text-navy'
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
              className="inline-flex items-center space-x-1.5 text-navy-800 hover:text-navy text-xs sm:text-sm font-semibold px-2.5 sm:px-3 py-2 rounded-lg transition-colors"
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

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="#packages"
              className="bg-brandRed text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm sm:hidden"
            >
              Book Now
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium text-base py-2.5 px-3 rounded-lg transition-colors border-l-2 ${
                    isActive 
                      ? 'text-navy font-bold bg-navy-50/70 border-brandRed' 
                      : 'text-slate-700 hover:text-navy hover:bg-slate-50 border-transparent hover:border-brandRed'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
              <a
                href="tel:9370208843"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-xl border border-navy/20 text-navy font-semibold text-sm bg-navy/5"
              >
                <Phone className="w-4 h-4 text-brandRed" />
                <span>Call Vishal: 93702 08843</span>
              </a>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-brandRed to-red-600 text-white font-semibold text-sm shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
