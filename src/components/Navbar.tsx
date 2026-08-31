import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenReservationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservationModal }) => {
  const { t, language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: language === 'es' ? 'Experiencia' : 'Experience', href: '#experience' },
    { label: language === 'es' ? 'El Menú' : 'The Menu', href: '#showcase' },
    { label: language === 'es' ? 'Reseñas' : 'Reviews', href: '#proof' },
    { label: language === 'es' ? 'Ubicación' : 'Location', href: '#location' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Floating Apple-Style Pill Header */}
      <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl z-50">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass-pill rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-2xl flex items-center justify-between border border-white/10"
        >
          {/* Official Brand Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-gold-400/40 bg-zinc-950/90 flex items-center justify-center p-1.5 shadow-md group-hover:border-gold-400 group-hover:shadow-gold-sm transition-all duration-300 shrink-0">
              <img
                src="https://img1.wsimg.com/isteam/ip/a4d17db7-f8f4-4a3e-be8b-4259938cb734/Mosquito%20Rooftop%20Logo-0001.png/:/rs=w:399,h:400,cg:true,m/cr=w:399,h:400/qt=q:95"
                alt="El Mosquito Rooftop Logo"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-spartan font-extrabold tracking-tight text-base sm:text-lg text-white group-hover:text-gold-400 transition-colors uppercase leading-none">
                EL MOSQUITO
              </span>
              <span className="text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-semibold mt-1">
                ROOFTOP · SANTIAGO
              </span>
            </div>
          </a>

          {/* Center Nav Links (Apple style) */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-xs uppercase tracking-widest text-zinc-300 hover:text-white transition-colors duration-200 font-medium relative group focus:outline-none"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Actions: Lang Switcher + CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language switch */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-zinc-900/60 hover:border-gold-400/40 text-[11px] font-semibold text-zinc-300 transition-all"
            >
              <Globe className="w-3 h-3 text-gold-400" />
              <span className={language === 'es' ? 'text-gold-400' : 'text-zinc-500'}>ES</span>
              <span className="text-zinc-600">/</span>
              <span className={language === 'en' ? 'text-gold-400' : 'text-zinc-500'}>EN</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenReservationModal}
              className="gold-btn px-5 py-2 rounded-full text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 shadow-gold-glow transition-all active:scale-[0.98]"
            >
              <span>{t.nav.reserveBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-0.5 rounded-full border border-white/10 bg-zinc-900/80 text-[10px] font-bold text-gold-400"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-1.5 rounded-full bg-zinc-900 border border-white/10 text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 glass-pill rounded-3xl p-6 shadow-2xl flex flex-col gap-4 sm:hidden border border-white/15"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-medium text-zinc-200 hover:text-gold-400 py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservationModal();
              }}
              className="gold-btn w-full py-3 rounded-full text-center text-xs uppercase tracking-wider font-bold mt-2"
            >
              {t.nav.reserveBtn}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
