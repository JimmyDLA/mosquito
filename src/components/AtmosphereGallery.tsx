import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { galleryItems } from '../data/siteData';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Maximize2 } from 'lucide-react';

export const AtmosphereGallery: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filters = [
    { id: 'all', label: t.gallery.filterAll },
    { id: 'mixology', label: t.gallery.filterCocktails },
    { id: 'skyline', label: t.gallery.filterSkyline },
    { id: 'events', label: t.gallery.filterVibe },
    { id: 'gastronomy', label: t.gallery.filterPlates },
  ];

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <section id="gallery" className="py-24 sm:py-32 relative bg-[#090A0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-400/30 bg-zinc-900/80 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>{t.gallery.tagline}</span>
          </div>

          <h2 className="editorial-heading text-3xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            {t.gallery.title}
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-gold-400 text-black shadow-gold-sm font-bold'
                  : 'border border-white/10 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-gold-400/40'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => {
              const title = language === 'es' ? item.titleEs : item.title;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setActiveImage(item.imageUrl)}
                  className="group relative h-80 rounded-3xl overflow-hidden border border-white/10 cursor-pointer bg-zinc-900/60"
                >
                  <img
                    src={item.imageUrl}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C]/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  {/* Overlay Info */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="w-9 h-9 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <Maximize2 className="w-4 h-4 text-gold-400" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold mb-1 block">
                        {item.category}
                      </span>
                      <h3 className="editorial-heading text-lg font-bold text-white group-hover:text-gold-200 transition-colors">
                        {title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setActiveImage(null)}
              aria-label="Close Lightbox"
              className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900/80 border border-white/20 text-white hover:text-gold-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={activeImage}
              alt="Lightbox View"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
