import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Star, DollarSign, Compass, Clock } from 'lucide-react';

export const MetricsRibbon: React.FC = () => {
  const { language } = useLanguage();

  const metrics = [
    {
      icon: Star,
      value: '4.2 ★',
      label: language === 'es' ? 'Reseñas en Google' : 'Google Rating',
      sub: language === 'es' ? '98+ opiniones verificadas' : '98+ verified reviews',
    },
    {
      icon: DollarSign,
      value: '1K – 3K',
      unit: 'DOP',
      label: language === 'es' ? 'Consumo Promedio' : 'Average Spend',
      sub: language === 'es' ? 'Coctelería & Tapas de autor' : 'Craft cocktails & tapas',
    },
    {
      icon: Compass,
      value: '360°',
      label: language === 'es' ? 'Skyline de Santiago' : 'Panoramic Skyline',
      sub: language === 'es' ? 'Atardeceres sobre el Cibao' : 'Cibao valley sunset views',
    },
    {
      icon: Clock,
      value: '5:00 PM',
      label: language === 'es' ? 'Mar – Dom' : 'Tue – Sun',
      sub: language === 'es' ? 'Abierto hasta tarde' : 'Late night cocktail lounge',
    },
  ];

  return (
    <section className="py-12 sm:py-16 relative bg-[#090A0C] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-zinc-950/40 border border-white/5"
              >
                <div className="w-8 h-8 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 mb-3">
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-spartan text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </span>
                  {item.unit && (
                    <span className="text-xs font-mono font-bold text-gold-400">{item.unit}</span>
                  )}
                </div>
                <div className="text-xs font-semibold text-zinc-200 tracking-wide">{item.label}</div>
                <div className="text-[11px] text-zinc-400 font-light mt-0.5">{item.sub}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
