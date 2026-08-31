import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { reviewsItems } from '../data/siteData';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote, CheckCircle, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="reviews" className="py-24 sm:py-32 relative bg-[#090A0C] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-400/30 bg-zinc-900/80 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{t.reviews.tagline}</span>
          </div>

          <h2 className="editorial-heading text-3xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            {t.reviews.title}
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Highlight Score Banner */}
        <div className="max-w-3xl mx-auto mb-14 glass-panel rounded-3xl p-6 sm:p-8 border border-gold-400/25 flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
          
          <div className="flex items-center gap-4">
            <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono flex items-center gap-2">
              <span>4.2</span>
              <div className="flex text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400" />
                ))}
              </div>
            </div>
            <div className="border-l border-white/10 pl-4">
              <div className="text-sm font-bold text-white tracking-wide flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Google Verified
              </div>
              <div className="text-xs text-zinc-400">{t.reviews.ratingBasis}</div>
            </div>
          </div>

          <div className="border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
            <div className="text-lg font-bold text-gold-400 font-mono tracking-tight">
              DOP 1,000 – 3,000
            </div>
            <div className="text-xs text-zinc-400">{t.reviews.priceDesc}</div>
          </div>

        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviewsItems.map((rev, idx) => {
            const text = language === 'es' ? rev.textEs : rev.text;
            const role = language === 'es' ? rev.roleEs : rev.role;
            const highlight = language === 'es' ? rev.highlightEs : rev.highlight;

            return (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-7 border border-white/10 flex flex-col justify-between hover:border-gold-400/40 relative group"
              >
                <div>
                  {/* Top rating stars & date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-gold-400 gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-zinc-500">{rev.date}</span>
                  </div>

                  {/* Highlight pill */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-gold-300 leading-snug block">
                      "{highlight}"
                    </span>
                  </div>

                  {/* Review body */}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                    {text}
                  </p>
                </div>

                {/* Author footer */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover border border-gold-400/30"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <span>{rev.author}</span>
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div className="text-[11px] text-zinc-400 font-light">{role}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
