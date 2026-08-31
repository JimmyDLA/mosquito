import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { menuItems } from '../data/menuData';
import { MenuItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Wine, Utensils, Sparkles, Search, Flame, GlassWater, Crown } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('signature-cocktails');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currency, setCurrency] = useState<'DOP' | 'USD'>('DOP');

  const categories = [
    { id: 'signature-cocktails', label: t.menu.tabSignature, icon: Sparkles },
    { id: 'classic-mixology', label: t.menu.tabClassics, icon: GlassWater },
    { id: 'tapas-gastronomy', label: t.menu.tabTapas, icon: Utensils },
    { id: 'wines-champagne', label: t.menu.tabWines, icon: Wine },
    { id: 'bottle-service', label: t.menu.tabBottles, icon: Crown },
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase();
      const name = (language === 'es' ? item.nameEs : item.name).toLowerCase();
      const desc = (language === 'es' ? item.descriptionEs : item.description).toLowerCase();
      const tags = (language === 'es' ? item.tagsEs : item.tags).join(' ').toLowerCase();

      return name.includes(query) || desc.includes(query) || tags.includes(query);
    });
  }, [activeCategory, searchQuery, language]);

  const formatPrice = (item: MenuItem) => {
    if (currency === 'DOP') {
      return `RD$ ${item.priceDop.toLocaleString()}`;
    }
    return `$${item.priceUsd} USD`;
  };

  return (
    <section id="menu" className="py-24 sm:py-32 relative bg-[#090A0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-400/30 bg-zinc-900/80 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Wine className="w-3.5 h-3.5" />
            <span>{t.menu.tagline}</span>
          </div>

          <h2 className="editorial-heading text-3xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            {t.menu.title}
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Controls Bar: Category Tabs, Search & Currency Switcher */}
        <div className="flex flex-col gap-6 mb-12">
          
          {/* Scrollable Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 sm:pb-0 gap-2 no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSearchQuery('');
                  }}
                  className={`px-5 py-3 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2.5 ${
                    isActive
                      ? 'gold-gradient-btn shadow-gold-sm'
                      : 'border border-white/10 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-gold-400/40 hover:bg-zinc-850'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-gold-400'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search & Currency Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.menu.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-white/10 bg-zinc-900/80 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs text-zinc-400 font-medium">Currency:</span>
              <div className="inline-flex rounded-full p-1 bg-zinc-900 border border-white/10">
                <button
                  onClick={() => setCurrency('DOP')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    currency === 'DOP'
                      ? 'bg-gold-400 text-black shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  DOP (RD$)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    currency === 'USD'
                      ? 'bg-gold-400 text-black shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, idx) => {
                const itemName = language === 'es' ? item.nameEs : item.name;
                const itemDesc = language === 'es' ? item.descriptionEs : item.description;
                const itemTags = language === 'es' ? item.tagsEs : item.tags;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="glass-card rounded-2xl p-6 border border-white/10 hover:border-gold-400/40 relative overflow-hidden flex flex-col justify-between group"
                  >
                    {/* Item Top Row */}
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex flex-col">
                          {/* Badges */}
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            {item.isSignature && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-300 text-[10px] font-bold uppercase tracking-wider">
                                <Sparkles className="w-3 h-3 text-gold-400" />
                                {t.menu.signatureBadge}
                              </span>
                            )}
                            {item.isChefPick && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                                <Flame className="w-3 h-3 text-amber-400" />
                                {t.menu.chefBadge}
                              </span>
                            )}
                          </div>

                          <h3 className="editorial-heading text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                            {itemName}
                          </h3>
                        </div>

                        {/* Price */}
                        <div className="text-right shrink-0">
                          <span className="text-lg font-bold text-gold-400 font-mono tracking-tight">
                            {formatPrice(item)}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                        {itemDesc}
                      </p>
                    </div>

                    {/* Image Spotlight for featured items */}
                    {item.image && (
                      <div className="w-full h-36 rounded-xl overflow-hidden mb-4 border border-white/5 relative">
                        <img
                          src={item.image}
                          alt={itemName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C]/80 via-transparent to-transparent" />
                      </div>
                    )}

                    {/* Tags Footer */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-white/5">
                      {itemTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-zinc-850/80 border border-white/5 text-[11px] text-zinc-400 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full py-16 text-center text-zinc-400">
                <Search className="w-8 h-8 mx-auto mb-3 text-zinc-600" />
                <p className="text-sm">{t.menu.emptySearch}</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Full PDF Menu Button */}
        <div className="mt-16 text-center">
          <a
            href="#reservations"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gold-400/40 bg-zinc-900/60 hover:bg-gold-400 hover:text-black text-gold-300 text-xs uppercase tracking-widest font-bold transition-all shadow-gold-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.menu.downloadPdf}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
