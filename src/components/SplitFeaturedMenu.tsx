import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Wine, Utensils, Sparkles, ArrowUpRight, Flame } from 'lucide-react';

interface SplitFeaturedMenuProps {
  onOpenReservationModal: () => void;
}

export const SplitFeaturedMenu: React.FC<SplitFeaturedMenuProps> = ({ onOpenReservationModal }) => {
  const { language } = useLanguage();
  const [menuTab, setMenuTab] = useState<'cocktails' | 'tapas'>('cocktails');

  const cocktailList = [
    {
      name: 'Santiago Sunset Mule',
      priceDop: 'RD$ 750',
      priceUsd: '$13',
      desc: language === 'es'
        ? 'Ron Brugal 1888, cordial de chinola especiada, jugo de limón fresco, ginger beer artesanal y romero flameado.'
        : 'Brugal 1888 Dominican Rum, spiced passionfruit cordial, fresh lime, artisanal ginger beer, charred rosemary.',
      tag: 'House Signature',
    },
    {
      name: 'El Mosquito Golden Spritz',
      priceDop: 'RD$ 850',
      priceUsd: '$15',
      desc: language === 'es'
        ? 'Italicus Rosolio di Bergamotto, Prosecco Superiore DOCG, licor de flor de saúco, toronja rosada y oro comestible 24k.'
        : 'Italicus Bergamotto, Prosecco Superiore DOCG, elderflower liqueur, sparkling mineral water, pink grapefruit & 24k gold.',
      tag: 'Bestseller',
    },
    {
      name: 'Smoked Tamarind Mezcalita',
      priceDop: 'RD$ 800',
      priceUsd: '$14',
      desc: language === 'es'
        ? 'Mezcal Montelobos Espadín, reducción artesanal de tamarindo, néctar de agave y escarchado de sal volcánica con chile.'
        : 'Montelobos Espadín Mezcal, housemade tamarind reduction, fresh lime, agave nectar, volcanic chili salt rim.',
      tag: 'Smoky & Bold',
    },
    {
      name: 'Cacao & Tobacco Old Fashioned',
      priceDop: 'RD$ 900',
      priceUsd: '$16',
      desc: language === 'es'
        ? 'Ron Bermúdez Aniversario infusionado en nibs de cacao dominicano, amargo de tabaco artesanal y niebla de cedro ahumado.'
        : 'Bermúdez Aniversario Rum, infused organic Dominican cacao nibs, tobacco bitters, express orange & cedar smoke.',
      tag: 'Chef Signature',
    },
    {
      name: 'Clarified Guava Velvet Milk Punch',
      priceDop: 'RD$ 850',
      priceUsd: '$15',
      desc: language === 'es'
        ? 'Gin botánico clarificado con leche 24h, puré de lichi exótico, néctar de guayaba rosada y cubo de hielo tallado a mano.'
        : '24h milk-washed botanical gin, exotic lychee, clarified pink guava essence, crystal hand-cut ice block.',
      tag: 'Silky Smooth',
    },
  ];

  const tapasList = [
    {
      name: 'Chicharrón Glaseado en Guayaba',
      priceDop: 'RD$ 950',
      priceUsd: '$17',
      desc: language === 'es'
        ? 'Panceta de cerdo confitada a baja temperatura y crocante, reducción de guayaba picante, cebollas encurtidas y tierra de plátano.'
        : 'Slow-braised crispy pork belly cubes, spiced Dominican guava glaze, pickled red onions, plantain crumble.',
      tag: 'Chef Signature',
    },
    {
      name: 'Hamachi & Passionfruit Ceviche',
      priceDop: 'RD$ 1,100',
      priceUsd: '$19',
      desc: language === 'es'
        ? 'Hamachi corte sashimi, leche de tigre de chinola fresca, cubos de aguacate, mousseline de batata y maíz chulpi crocante.'
        : 'Fresh yellowtail sashimi, fresh passionfruit leche de tigre, avocado, caramelized sweet potato, toasted canchita.',
      tag: 'Fresh Seafood',
    },
    {
      name: 'Yucas Trufadas al Parmesano Reggiano',
      priceDop: 'RD$ 650',
      priceUsd: '$11',
      desc: language === 'es'
        ? 'Bastones de yuca dominicana en triple cocción, aceite de trufa blanca, Parmigiano Reggiano 24 meses y alioli de ajo asado.'
        : 'Triple-cooked crispy yuca batons, white truffle oil, 24-month aged Parmigiano Reggiano, roasted garlic aioli.',
      tag: 'Vegetarian',
    },
    {
      name: 'Brochetas de Langostinos al Robata',
      priceDop: 'RD$ 1,350',
      priceUsd: '$24',
      desc: language === 'es'
        ? 'Langostinos tigre jumbo al carbón japonés Robata, mantequilla de ajo y jengibre, togarashi y lima asada.'
        : 'Charcoal-grilled wild jumbo tiger prawns, garlic-ginger butter, togarashi chili, charred lime, toasted sesame.',
      tag: 'Charcoal Grilled',
    },
    {
      name: 'Sliders de Res Wagyu en Brioche',
      priceDop: 'RD$ 1,250',
      priceUsd: '$22',
      desc: language === 'es'
        ? 'Trío de hamburguesitas de Wagyu, queso Gruyère fundido, chalotas caramelizadas, mermelada de tocineta y mayonesa trufada.'
        : 'Trio of prime Wagyu beef patties, melted Gruyère, caramelized shallots, bacon jam, truffle mayo on brioche.',
      tag: 'Gourmet Trio',
    },
  ];

  const activeItems = menuTab === 'cocktails' ? cocktailList : tapasList;

  return (
    <section id="menu-split" className="py-28 sm:py-36 relative bg-[#090A0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tab Switcher Pills */}
        <div className="flex items-center justify-center gap-3 mb-16 sm:mb-20">
          <button
            onClick={() => setMenuTab('cocktails')}
            className={`px-6 py-3 rounded-full text-xs uppercase tracking-wider font-extrabold transition-all flex items-center gap-2 ${
              menuTab === 'cocktails'
                ? 'gold-btn shadow-gold-sm'
                : 'glass-panel text-zinc-400 hover:text-white border border-white/10'
            }`}
          >
            <Wine className="w-4 h-4" />
            <span>{language === 'es' ? 'Mixología de Autor' : 'Signature Mixology'}</span>
          </button>

          <button
            onClick={() => setMenuTab('tapas')}
            className={`px-6 py-3 rounded-full text-xs uppercase tracking-wider font-extrabold transition-all flex items-center gap-2 ${
              menuTab === 'tapas'
                ? 'gold-btn shadow-gold-sm'
                : 'glass-panel text-zinc-400 hover:text-white border border-white/10'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>{language === 'es' ? 'Tapas & Cocina Robata' : 'Robata & Tapas'}</span>
          </button>
        </div>

        {/* 2-Column Split Section (amritpalace.com layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Menu Items List with Clean Line Prices (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-spartan font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                      {menuTab === 'cocktails' 
                        ? (language === 'es' ? 'Cócteles de Autor' : 'Signature Cocktails')
                        : (language === 'es' ? 'Platos & Tapas' : 'Culinary Plates')}
                    </h3>
                    <p className="text-xs text-gold-300 font-mono">DOP & USD Pricing</p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                  Est. Santiago
                </span>
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-6">
                <AnimatePresence mode="wait">
                  {activeItems.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="group p-3 sm:p-4 rounded-2xl hover:bg-zinc-900/50 border border-transparent hover:border-white/5 transition-all"
                    >
                      {/* Name & Price Line */}
                      <div className="flex items-baseline justify-between gap-4 mb-1.5">
                        <div className="flex items-center gap-2">
                          <h4 className="font-spartan font-bold text-base sm:text-lg text-white group-hover:text-gold-200 transition-colors uppercase tracking-tight">
                            {item.name}
                          </h4>
                          <span className="px-2 py-0.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-[9px] font-bold text-gold-400 uppercase tracking-wider hidden sm:inline-block">
                            {item.tag}
                          </span>
                        </div>

                        {/* Price Tag */}
                        <div className="flex items-baseline gap-1 shrink-0 font-mono font-bold text-gold-400 text-sm sm:text-base">
                          <span>{item.priceDop}</span>
                          <span className="text-zinc-500 text-xs">/ {item.priceUsd}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenReservationModal}
                className="gold-btn w-full sm:w-auto px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-extrabold flex items-center justify-center gap-2"
              >
                <span>{language === 'es' ? 'Reservar Mesa para Degustar' : 'Reserve a Table to Taste'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#reservations"
                className="text-xs uppercase tracking-wider text-zinc-400 hover:text-white font-semibold flex items-center gap-1 transition-colors"
              >
                <span>{language === 'es' ? 'Ver Carta Completa de Vinos' : 'Explore Full Wine & Bottle List'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Photography Showcase & Editorial Story (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Story Card */}
            <div className="glass-panel rounded-3xl p-7 sm:p-8 border border-white/10">
              <h3 className="font-spartan font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                {language === 'es' ? 'Sabor de Autor. Raíces del Caribe.' : 'Signature Craft. Caribbean Roots.'}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {language === 'es'
                  ? 'Cada creación en nuestra barra y cocina es un homenaje a la República Dominicana. Rones añejados en roble blanco, especias nativas del Cibao y técnicas culinarias de clase mundial.'
                  : 'Every creation across our bar and kitchen pays tribute to Dominican craftsmanship. White oak aged rums, native Cibao botanicals, and world-class culinary finesse.'}
              </p>
              <button
                onClick={onOpenReservationModal}
                className="w-full py-3 rounded-full border border-white/15 bg-zinc-900/60 hover:bg-gold-400 hover:text-black hover:border-gold-400 text-white text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2"
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>{language === 'es' ? 'Reservar Degustación' : 'Book a Tasting'}</span>
              </button>
            </div>

            {/* High-Res Showcase Image Card */}
            <div className="relative h-[320px] sm:h-[380px] rounded-3xl overflow-hidden border border-white/10 group">
              <img
                src={menuTab === 'cocktails'
                  ? 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop'
                  : 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop'
                }
                alt="Signature Showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="glass-pill px-3 py-1.5 rounded-full text-xs font-bold text-white">
                  {menuTab === 'cocktails' ? 'Cocktail Lab Santiago' : 'Robata Charcoal Gastronomy'}
                </span>
                <span className="text-xs font-mono font-bold text-gold-400">
                  DOP 1,000–3,000 p/p
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
