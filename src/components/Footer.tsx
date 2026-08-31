import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Instagram, Facebook, MessageCircle, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060709] border-t border-white/10 pt-20 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Logo (5 Cols) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-gold-400/40 bg-zinc-950 flex items-center justify-center p-2 shrink-0 shadow-lg">
                <img
                  src="https://img1.wsimg.com/isteam/ip/a4d17db7-f8f4-4a3e-be8b-4259938cb734/Mosquito%20Rooftop%20Logo-0001.png/:/rs=w:399,h:400,cg:true,m/cr=w:399,h:400/qt=q:95"
                  alt="El Mosquito Rooftop"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-spartan font-extrabold text-lg sm:text-xl text-white tracking-tight uppercase leading-none">
                  EL MOSQUITO
                </span>
                <span className="text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-semibold mt-1">
                  ROOFTOP · SANTIAGO
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs font-light leading-relaxed max-w-sm">
              {language === 'es'
                ? 'El rooftop de coctelería de autor y gastronomía contemporánea más exclusivo de Santiago de los Caballeros, República Dominicana.'
                : 'Santiago’s premier skyline cocktail lounge and culinary destination. Artisanal mixology and sunset panoramas in Dominican Republic.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/10 bg-zinc-900/60 hover:border-gold-400 hover:text-gold-400 flex items-center justify-center text-zinc-300 transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/10 bg-zinc-900/60 hover:border-gold-400 hover:text-gold-400 flex items-center justify-center text-zinc-300 transition-colors"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/18296392661"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp VIP"
                className="w-8 h-8 rounded-full border border-emerald-500/30 bg-emerald-950/40 hover:border-emerald-400 hover:text-emerald-300 flex items-center justify-center text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Cols) */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-spartan text-white font-bold tracking-wider uppercase text-[11px]">
              {language === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="flex flex-col gap-2 font-light">
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  {language === 'es' ? 'Experiencia' : 'Experience'}
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  {language === 'es' ? 'Secuencia' : 'Showcase'}
                </a>
              </li>
              <li>
                <a href="#proof" className="hover:text-white transition-colors">
                  {language === 'es' ? 'Opiniones' : 'Reviews'}
                </a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-white transition-colors">
                  {language === 'es' ? 'Reservar' : 'Reservations'}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  {language === 'es' ? 'Ubicación' : 'Location'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Santiago HQ (3 Cols) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-spartan text-white font-bold tracking-wider uppercase text-[11px]">
              Santiago de los Caballeros
            </h4>
            <div className="flex items-start gap-2 text-xs font-light">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>
                Rep. del Líbano 3, Santiago 51000<br />
                Dominican Republic
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-light">
              <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" strokeWidth={1.5} />
              <span className="font-mono text-white">+1 829-639-2661</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold">
              ● {language === 'es' ? 'Mar – Dom: 5:00 PM – Tarde' : 'Tue – Sun: 5:00 PM – Late'}
            </span>
          </div>

          {/* Col 4: Sister Brand (2 Cols) */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-spartan text-white font-bold tracking-wider uppercase text-[11px]">
              {language === 'es' ? 'Sede Hermana' : 'Sister Brand'}
            </h4>
            <div className="p-3 rounded-2xl bg-zinc-950 border border-white/5">
              <p className="text-zinc-200 font-bold text-xs">Las Terrenas</p>
              <p className="text-[10px] text-zinc-400 font-light mb-1">Samaná, Dominican Rep.</p>
              <a
                href="tel:+18097235905"
                className="text-[10px] font-mono text-gold-400 hover:underline block"
              >
                +1 809-723-5905
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-light">
          <div>
            <span>© 2026 El Mosquito Rooftop Santiago. All rights reserved.</span>
            <span className="block sm:inline sm:ml-3 text-zinc-400">
              {language === 'es' ? 'Solo mayores de 18 años. Consume con moderación.' : 'Must be 18+ to consume alcohol. Drink responsibly.'}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-zinc-900/60 hover:border-gold-400/50 hover:text-white transition-all text-xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.5} />
          </button>
        </div>

      </div>
    </footer>
  );
};
