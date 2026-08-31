import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experienceItems } from '../data/siteData';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Calendar } from 'lucide-react';

interface ExperienceCardsProps {
  onOpenReservationModal: () => void;
}

export const ExperienceCards: React.FC<ExperienceCardsProps> = ({ onOpenReservationModal }) => {
  const { t, language } = useLanguage();

  return (
    <section id="events" className="py-24 sm:py-32 relative bg-[#090A0C] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-400/30 bg-zinc-900/80 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.experiences.tagline}</span>
          </div>

          <h2 className="editorial-heading text-3xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            {t.experiences.title}
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            {t.experiences.subtitle}
          </p>
        </div>

        {/* 3 Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experienceItems.map((item, idx) => {
            const title = language === 'es' ? item.titleEs : item.title;
            const desc = language === 'es' ? item.descriptionEs : item.description;
            const badge = language === 'es' ? item.badgeEs : item.badge;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-gold-400/40"
              >
                {/* Image Banner */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-semibold text-gold-300">
                      {badge}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Time pill */}
                    <div className="flex items-center gap-2 text-xs font-medium text-gold-400 mb-3">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.time}</span>
                    </div>

                    {/* Title */}
                    <h3 className="editorial-heading text-2xl font-bold text-white mb-3 group-hover:text-gold-200 transition-colors">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                      {desc}
                    </p>
                  </div>

                  {/* Reserve CTA */}
                  <button
                    onClick={onOpenReservationModal}
                    className="w-full py-3 rounded-full border border-white/15 bg-zinc-900/60 hover:bg-gold-400 hover:text-black hover:border-gold-400 text-white text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t.nav.reserveBtn}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
