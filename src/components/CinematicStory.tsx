import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface CinematicStoryProps {
  onOpenReservationModal: () => void;
}

export const CinematicStory: React.FC<CinematicStoryProps> = ({ onOpenReservationModal }) => {
  const { language } = useLanguage();

  return (
    <section className="relative py-32 sm:py-44 overflow-hidden bg-black flex items-center justify-center min-h-[75vh]">
      {/* Background Image with Zoom & Dark Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://img1.wsimg.com/isteam/ip/a4d17db7-f8f4-4a3e-be8b-4259938cb734/MosquitoRooftop-14.jpg"
          alt="El Mosquito Rooftop Fullsize View"
          className="w-full h-full object-cover object-center scale-110 opacity-40 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-black/60 to-[#090A0C]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-zinc-950/80 backdrop-blur-md shadow-sm mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-xs uppercase tracking-widest text-gold-300 font-bold">
            {language === 'es' ? 'La Esencia de las Alturas' : 'Rooted Above Santiago'}
          </span>
        </motion.div>

        {/* Big Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-spartan font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tighter text-white uppercase leading-[1.08] mb-8"
        >
          {language === 'es' ? (
            <>
              El Espíritu de la <br />
              <span className="gold-gradient-text">Noche Dominicana</span>
            </>
          ) : (
            <>
              The Spirit of <br />
              <span className="gold-gradient-text">Santiago Nights</span>
            </>
          )}
        </motion.h2>

        {/* Editorial Storytelling Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto mb-10 text-balance"
        >
          {language === 'es'
            ? 'En el corazón de Rep. del Líbano 3, El Mosquito ha redefinido el ocio nocturno en la República Dominicana. Cada velada es un ritual: la brisa del atardecer sobre la cordillera, el perfume del ron dominicano ahumado con cacao y la vibración de una terraza diseñada para crear memorias inolvidables.'
            : 'Along Rep. del Líbano 3, El Mosquito Rooftop has elevated nightlife in the Dominican Republic. Every evening is a ritual: the sunset breeze over the Cibao mountains, the aroma of aged rum smoked with organic cacao, and the resonance of an open-sky terrace built for unforgettable memories.'}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onOpenReservationModal}
            className="gold-btn px-8 py-4 rounded-full text-xs uppercase tracking-widest font-extrabold flex items-center gap-2 shadow-gold-glow transition-all active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            <span>{language === 'es' ? 'Vivir la Experiencia' : 'Experience the Rooftop'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
