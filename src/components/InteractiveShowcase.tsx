import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface InteractiveShowcaseProps {
  onOpenReservationModal: () => void;
}

export const InteractiveShowcase: React.FC<InteractiveShowcaseProps> = ({ onOpenReservationModal }) => {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'sunset',
      stepNum: '01',
      time: '5:00 PM – 7:30 PM',
      title: language === 'es' ? 'Golden Hour Sunset' : 'Golden Hour Sunset',
      headline: language === 'es' ? 'El Atardecer de Santiago' : 'The Sunset Ritual',
      description: language === 'es'
        ? 'El inicio de la velada. Disfruta de un cóctel refrescante mientras la luz dorada baña los techos y colinas de Santiago de los Caballeros.'
        : 'The opening ritual. Bask in the soft twilight over Santiago’s cityscape with chilled effervescent spritzes and chilled acoustic lounge music.',
      highlight: language === 'es' ? 'El Mosquito Golden Spritz (24k Gold & Italicus)' : 'El Mosquito Golden Spritz (24k Gold Flakes & Italicus)',
      perks: language === 'es' 
        ? ['Vistas panorámicas 360°', 'Luz ideal para fotografía', 'Música chill acústica']
        : ['360° Unobstructed views', 'Golden hour natural lighting', 'Chill acoustic ambient sets'],
      image: 'https://img1.wsimg.com/isteam/ip/a4d17db7-f8f4-4a3e-be8b-4259938cb734/MosquitoRooftop-14.jpg',
      badge: language === 'es' ? 'Aperitivos & Atardecer' : 'Aperitifs & Skyline',
    },
    {
      id: 'dining',
      stepNum: '02',
      time: '7:30 PM – 9:30 PM',
      title: language === 'es' ? 'Gastronomía de Autor' : 'Contemporary Gastronomy',
      headline: language === 'es' ? 'Cena Fusión & Robata' : 'Robata & Shared Plates',
      description: language === 'es'
        ? 'Una propuesta culinaria vanguardista diseñada para compartir. Ingredientes autóctonos elevados con técnicas internacionales.'
        : 'A progressive culinary offering created for social dining. Native Dominican ingredients elevated with world-class gastronomic techniques.',
      highlight: language === 'es' ? 'Chicharrón Glaseado en Guayaba & Ceviche Hamachi' : 'Guava Glazed Pork Belly & Hamachi Passionfruit Ceviche',
      perks: language === 'es'
        ? ['Platos al carbón japonés Robata', 'Maridaje con vinos y espumosos', 'Servicio de mesa exclusivo']
        : ['Japanese Robata charcoal skewers', 'Curated champagne & wine pairings', 'Dedicated table service'],
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
      badge: language === 'es' ? 'Cocina & Robata' : 'Dining & Tapas',
    },
    {
      id: 'mixology',
      stepNum: '03',
      time: '9:30 PM – 11:00 PM',
      title: language === 'es' ? 'Alquimia & Mixología' : 'Smoked Mixology',
      headline: language === 'es' ? 'Coctelería Sensorial' : 'Sensory Alchemy',
      description: language === 'es'
        ? 'Nuestros bartenders crean verdaderas obras de arte. Rones dominicanos ultra-añejos, botánicos y humo capturado en copa.'
        : 'Our mixologists craft multisensory libations. Ultra-aged Dominican rums, exotic citrus cordials, and fragrant cedar wood smoke.',
      highlight: language === 'es' ? 'Old Fashioned de Cacao & Tabaco Ahumado' : 'Cacao Nib & Smoked Cigar Old Fashioned',
      perks: language === 'es'
        ? ['Hielo cristalino tallado a mano', 'Infusiones botánicas caseras', 'Copas de cristal soplado']
        : ['Hand-cut crystal clear ice blocks', 'House-made botanical reductions', 'Hand-blown crystal glassware'],
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
      badge: language === 'es' ? 'Coctelería de Autor' : 'Craft Mixology',
    },
    {
      id: 'vip',
      stepNum: '04',
      time: '11:00 PM – Cierre',
      title: language === 'es' ? 'Noche VIP & DJs' : 'Midnight VIP Beats',
      headline: language === 'es' ? 'Celebración en las Alturas' : 'Elevated Nightlife',
      description: language === 'es'
        ? 'La noche cobra vida con los mejores talentos de la música electrónica, servicio de botellas prémium y cabanas privadas.'
        : 'The rooftop peaks with melodic deep house, premium bottle service presentations, and private skyline cabana reservations.',
      highlight: language === 'es' ? 'Servicio de Botellas Clase Azul, Dom Pérignon & Brugal 1888' : 'Bottle Service: Clase Azul, Dom Pérignon & Brugal 1888',
      perks: language === 'es'
        ? ['Cabanas VIP con vista frontal', 'Anfitrión de mesa privado', 'Bengalas y show de servicio']
        : ['Front-row skyline VIP cabanas', 'Dedicated VIP concierge host', 'Sparkler bottle presentations'],
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
      badge: language === 'es' ? 'Servicio de Botellas VIP' : 'VIP Bottle Service',
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="showcase" className="py-28 sm:py-36 relative bg-[#090A0C] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-400/30 bg-zinc-900/80 text-gold-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Clock className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.5} />
            <span>{language === 'es' ? 'La Secuencia de la Noche' : 'The Night Sequence'}</span>
          </div>

          <h2 className="font-spartan font-extrabold text-4xl sm:text-6xl tracking-tighter text-white uppercase mb-4">
            {language === 'es' ? 'Hora tras Hora.' : 'Hour by Hour.'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-prose mx-auto">
            {language === 'es'
              ? 'Desde el primer rayo dorado del sol hasta el brindis de medianoche. Descubre cómo se vive una noche en El Mosquito.'
              : 'From the first twilight aperitif to the midnight celebration. Experience each phase of the El Mosquito rooftop atmosphere.'}
          </p>
        </div>

        {/* Step-by-Step Interactive Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {steps.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveStep(idx)}
              className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl border text-left transition-all duration-300 relative group flex flex-col justify-between ${
                activeStep === idx
                  ? 'bg-zinc-900/90 border-gold-400/60 shadow-gold-glow'
                  : 'bg-zinc-950/40 border-white/10 hover:border-white/20 hover:bg-zinc-900/40'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs font-bold ${activeStep === idx ? 'text-gold-400' : 'text-zinc-500'}`}>
                  {s.stepNum}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400">
                  {s.time.split('–')[0]}
                </span>
              </div>
              <div className={`font-spartan font-bold text-sm sm:text-base tracking-tight uppercase ${activeStep === idx ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                {s.title}
              </div>
            </button>
          ))}
        </div>

        {/* Interactive Showcase Display Card */}
        <div className="glass-panel rounded-3xl sm:rounded-[36px] border border-white/10 p-6 sm:p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Storytelling Content (6 Cols) */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.5} />
                    <span>{current.badge} · {current.time}</span>
                  </div>

                  <h3 className="font-spartan font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4">
                    {current.headline}
                  </h3>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                    {current.description}
                  </p>

                  {/* Highlight feature card */}
                  <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 mb-6">
                    <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">
                      {language === 'es' ? 'Destacado de la Franja' : 'Phase Highlight'}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {current.highlight}
                    </p>
                  </div>

                  {/* Perks list */}
                  <div className="flex flex-col gap-2.5 mb-8">
                    {current.perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" strokeWidth={1.5} />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <button
                  onClick={onOpenReservationModal}
                  className="gold-btn self-start px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold flex items-center gap-2 shadow-gold-sm transition-all active:scale-[0.98]"
                >
                  <span>{language === 'es' ? 'Reservar Esta Franja' : 'Book This Experience'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Column: Visual Stage (6 Cols) */}
              <div className="lg:col-span-6 relative h-[320px] sm:h-[440px] rounded-3xl overflow-hidden border border-white/10 group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C]/90 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <span className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-bold text-white">
                    {current.time}
                  </span>
                  <span className="text-xs font-mono font-bold text-gold-400">
                    Santiago, DR
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
