import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Sparkles, Wine, Flame, Disc, ArrowUpRight } from 'lucide-react';

interface BentoGridProps {
  onOpenReservationModal: () => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ onOpenReservationModal }) => {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-28 sm:py-36 relative bg-[#090A0C] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Confident Apple Copy) */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-400/30 bg-zinc-900/80 text-gold-300 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.5} />
            <span>{language === 'es' ? 'Diferenciales Únicos' : 'Core Differentiators'}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-spartan font-extrabold text-4xl sm:text-6xl tracking-tighter text-white uppercase mb-4"
          >
            {language === 'es' ? 'Diseñado para Sorprender.' : 'Crafted to Stun.'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-prose mx-auto"
          >
            {language === 'es'
              ? 'Un encuentro entre arquitectura de cielo abierto, coctelería sensorial y la energía más selecta de Santiago.'
              : 'Where open-air skyline architecture meets sensory mixology and Santiago’s most discerning social circle.'}
          </motion.p>
        </div>

        {/* Bento Grid Architecture with Variable Proportions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: 360° Sunset Horizon (Large 8 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 group relative rounded-3xl sm:rounded-[32px] border border-white/10 bg-zinc-900/40 overflow-hidden backdrop-blur-md hover:border-gold-400/40 hover:-translate-y-1 transition-all duration-300 min-h-[440px] flex flex-col justify-end p-8 sm:p-10"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://img1.wsimg.com/isteam/ip/a4d17db7-f8f4-4a3e-be8b-4259938cb734/MosquitoRooftop-14.jpg"
                alt="Sunset Panorama"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/60 to-transparent" />
            </div>

            <div className="relative z-10 self-start mb-auto">
              <span className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-bold text-gold-300 uppercase tracking-wider">
                {language === 'es' ? '01 · El Atardecer' : '01 · The Horizon'}
              </span>
            </div>

            <div className="relative z-10 mt-8 max-w-lg">
              <h3 className="font-spartan font-extrabold text-2xl sm:text-4xl text-white mb-2 uppercase tracking-tight group-hover:text-gold-200 transition-colors">
                {language === 'es' ? 'Atardecer 360° Sin Filtros' : 'Unfiltered 360° Sunsets'}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                {language === 'es'
                  ? 'La cordillera del Cibao tiñe el cielo de oro mientras cae la noche sobre Santiago. El mejor punto panorámico de la ciudad.'
                  : 'The Cibao mountains glow in gold as dusk transforms into night over Santiago de los Caballeros. The city’s finest vantage point.'}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Smoked Alchemy Mixology (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 group relative rounded-3xl sm:rounded-[32px] border border-white/10 bg-zinc-900/40 overflow-hidden backdrop-blur-md hover:border-gold-400/40 hover:-translate-y-1 transition-all duration-300 min-h-[440px] flex flex-col justify-end p-8 sm:p-10"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop"
                alt="Craft Mixology"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/60 to-transparent" />
            </div>

            <div className="relative z-10 self-start mb-auto">
              <span className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-bold text-gold-300 uppercase tracking-wider flex items-center gap-1.5">
                <Wine className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.5} />
                <span>{language === 'es' ? '02 · Mixología' : '02 · Mixology'}</span>
              </span>
            </div>

            <div className="relative z-10 mt-8">
              <h3 className="font-spartan font-extrabold text-2xl sm:text-3xl text-white mb-2 uppercase tracking-tight group-hover:text-gold-200 transition-colors">
                {language === 'es' ? 'Alquimia de Ron' : 'Rum Alchemy'}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                {language === 'es'
                  ? 'Brugal 1888, infusiones de cacao y niebla de cedro ahumado servidos con hielo tallado a mano.'
                  : 'Brugal 1888, organic cacao nib infusions, and cedar wood smoke over hand-cut crystal ice.'}
              </p>
            </div>
          </motion.div>

          {/* Card 3: Contemporary Robata & Tapas (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 group relative rounded-3xl sm:rounded-[32px] border border-white/10 bg-zinc-900/40 overflow-hidden backdrop-blur-md hover:border-gold-400/40 hover:-translate-y-1 transition-all duration-300 min-h-[400px] flex flex-col justify-end p-8 sm:p-10"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
                alt="Contemporary Gastronomy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/60 to-transparent" />
            </div>

            <div className="relative z-10 self-start mb-auto">
              <span className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" strokeWidth={1.5} />
                <span>{language === 'es' ? '03 · Gastronomía' : '03 · Dining'}</span>
              </span>
            </div>

            <div className="relative z-10 mt-8">
              <h3 className="font-spartan font-extrabold text-2xl sm:text-3xl text-white mb-2 uppercase tracking-tight group-hover:text-gold-200 transition-colors">
                {language === 'es' ? 'Tapas Robata' : 'Robata Tapas'}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                {language === 'es'
                  ? 'Chicharrón confitado en reducción de guayaba picante, ceviche de hamachi y yucas trufadas.'
                  : 'Slow-braised guava glazed pork belly, hamachi yellowtail ceviche, and truffled yuca.'}
              </p>
            </div>
          </motion.div>

          {/* Card 4: Soundscapes & Curated DJs (8 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-8 group relative rounded-3xl sm:rounded-[32px] border border-white/10 bg-zinc-900/40 overflow-hidden backdrop-blur-md hover:border-gold-400/40 hover:-translate-y-1 transition-all duration-300 min-h-[400px] flex flex-col justify-end p-8 sm:p-10"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop"
                alt="Live DJ Sessions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/60 to-transparent" />
            </div>

            <div className="relative z-10 self-start mb-auto flex items-center justify-between w-full">
              <span className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                <Disc className="w-3.5 h-3.5 text-rose-400" strokeWidth={1.5} />
                <span>{language === 'es' ? '04 · Vida Nocturna' : '04 · Nightlife'}</span>
              </span>

              <button
                onClick={onOpenReservationModal}
                className="hidden sm:inline-flex items-center gap-1 text-xs uppercase tracking-wider text-gold-400 hover:text-white font-bold transition-colors"
              >
                <span>{language === 'es' ? 'Reservar Mesa' : 'Book Table'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative z-10 mt-8 max-w-lg">
              <h3 className="font-spartan font-extrabold text-2xl sm:text-4xl text-white mb-2 uppercase tracking-tight group-hover:text-gold-200 transition-colors">
                {language === 'es' ? 'Sonido Orgánico & Deep Beats' : 'Organic Sound & Deep Beats'}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                {language === 'es'
                  ? 'Sesiones de DJs residentes e invitados que fusionan afro-house, downtempo y melodías envolventes bajo las estrellas.'
                  : 'Resident and guest DJ sets blending organic afro-house, melodic downtempo, and open-air rhythms under the night sky.'}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
