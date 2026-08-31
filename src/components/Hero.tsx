import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Star, Utensils, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenReservationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservationModal }) => {
  const { language } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#090A0C]">
      
      {/* Background Visual Layer with Cinematic Depth & Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img1.wsimg.com/isteam/ip/a4d17db7-f8f4-4a3e-be8b-4259938cb734/MosquitoRooftop-14.jpg"
          alt="El Mosquito Rooftop Atmosphere"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow opacity-40"
        />
        {/* Multilayer Gradients for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/75 to-[#090A0C]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent" />
      </div>

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gold-400/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Floating Official Brand Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-2 border-gold-400/50 bg-zinc-950/90 backdrop-blur-2xl p-3 sm:p-4 shadow-2xl shadow-gold-400/20 flex items-center justify-center group hover:border-gold-400 hover:shadow-gold-glow transition-all duration-500">
            <img
              src="https://img1.wsimg.com/isteam/ip/a4d17db7-f8f4-4a3e-be8b-4259938cb734/Mosquito%20Rooftop%20Logo-0001.png/:/rs=w:399,h:400,cg:true,m/cr=w:399,h:400/qt=q:95"
              alt="El Mosquito Logo"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Split Typography Headline (amritpalace.com aesthetic) */}
        <div className="w-full max-w-5xl mb-8">
          
          {/* Line 1 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-spartan font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white uppercase leading-none"
            >
              {language === 'es' ? 'SANTIAGO' : 'SANTIAGO'}
            </motion.h1>
          </div>

          {/* Line 2 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-spartan font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-none gold-gradient-text"
            >
              {language === 'es' ? 'EN LAS ALTURAS' : 'FROM ABOVE'}
            </motion.h1>
          </div>

        </div>

        {/* Confident Apple/Amrit Subheadline strictly max-w-xl */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-xl mx-auto font-light leading-relaxed mb-10 text-balance"
        >
          {language === 'es'
            ? 'Una experiencia sensorial de altura donde convergen rones dominicanos prémium, cocina fusión al carbón y los mejores atardeceres sobre el valle del Cibao.'
            : 'An elevated sanctuary where ultra-aged Dominican rums, contemporary robata dining, and sunset skylines converge over the Cibao valley.'}
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <button
            onClick={onOpenReservationModal}
            className="gold-btn w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase tracking-widest font-extrabold flex items-center justify-center gap-2 shadow-gold-glow transition-all active:scale-[0.98]"
          >
            <span>{language === 'es' ? 'Reservar Mesa' : 'Reserve a Table'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/18296392661?text=Hola%20El%20Mosquito%20Rooftop,%20deseo%20hacer%20una%20reserva"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-full border border-emerald-500/30 bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-300 text-xs uppercase tracking-widest font-bold backdrop-blur-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => scrollTo('menu-split')}
            className="w-full sm:w-auto px-7 py-4 rounded-full border border-white/10 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 text-xs uppercase tracking-widest font-semibold backdrop-blur-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Utensils className="w-3.5 h-3.5 text-gold-400" />
            <span>{language === 'es' ? 'Ver Menú Destacado' : 'Featured Menu'}</span>
          </button>
        </motion.div>

        {/* Floating Google Rating Ribbon (amritpalace.com style) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="glass-panel px-6 py-3.5 rounded-full border border-white/10 shadow-2xl flex items-center gap-4 sm:gap-6 flex-wrap justify-center"
        >
          {/* Rating number */}
          <div className="flex items-center gap-2">
            <span className="font-spartan font-extrabold text-xl text-white">4.2</span>
            <span className="text-zinc-500 text-xs font-mono">/ 5</span>
            <div className="flex text-gold-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
              ))}
            </div>
          </div>

          <div className="h-4 w-px bg-white/10 hidden sm:block" />

          {/* Reviews count */}
          <div className="text-xs text-zinc-300 font-medium">
            <span className="text-gold-300 font-bold">Google Verified</span> · 98+ {language === 'es' ? 'Opiniones' : 'Reviews'}
          </div>

          <div className="h-4 w-px bg-white/10 hidden sm:block" />

          {/* Location */}
          <div className="flex items-center gap-1 text-xs text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>Rep. del Líbano 3, Santiago</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
