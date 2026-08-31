import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const ProofQuote: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="proof" className="py-28 sm:py-36 relative bg-[#090A0C] border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-400/30 bg-zinc-900/80 text-gold-300 text-xs font-bold uppercase tracking-widest mb-8"
        >
          <Quote className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.5} />
          <span>{language === 'es' ? 'La Opinión de Quienes nos Visitan' : 'Guest Impressions'}</span>
        </motion.div>

        {/* Editorial Big Typography Quote (Apple Style) */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-spartan font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.15] uppercase mb-10 max-w-4xl mx-auto"
        >
          {language === 'es' ? (
            <>
              “Cócteles con ron de autor impecables y una atmósfera que nada tiene que envidiarle a Miami o Tulum.”
            </>
          ) : (
            <>
              “Impeccable signature rum mixology and an atmosphere that easily rivals Miami or Tulum.”
            </>
          )}
        </motion.blockquote>

        {/* Citation & Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-white/10 max-w-md mx-auto"
        >
          <div className="flex text-gold-400 gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold-400" strokeWidth={1.5} />
            ))}
          </div>

          <div className="text-left text-xs">
            <div className="font-bold text-white flex items-center gap-1.5">
              <span>Carlos Medina & Elena R.</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-zinc-400 font-light">
              Google Verified Reviews · Santiago de los Caballeros
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
