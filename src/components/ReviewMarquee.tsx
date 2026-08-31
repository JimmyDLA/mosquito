import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, ShieldCheck } from 'lucide-react';

export const ReviewMarquee: React.FC = () => {
  const { language } = useLanguage();

  const reviews = [
    {
      author: 'Carlos Medina',
      platform: 'Google Review',
      rating: 5,
      text: language === 'es'
        ? 'La mejor vista de Santiago por mucho. Los cócteles son de altísima calidad con ron dominicano y el atardecer es un espectáculo inigualable.'
        : 'The best rooftop view in Santiago by far. The cocktails are crafted to perfection with Dominican rum and the sunset is unmatched.',
      tag: language === 'es' ? 'Vistas 360° & Mixología' : '360° Views & Mixology',
    },
    {
      author: 'Elena Rodríguez',
      platform: 'Verified Guest',
      rating: 5,
      text: language === 'es'
        ? 'Excelente atención, ambiente súper fino y los tragos de autor están a otro nivel. El chicharrón con reducción de guayaba es sensacional.'
        : 'Outstanding service, sophisticated crowd, and the signature rum cocktails are top tier. The guava glazed pork belly was sensational.',
      tag: language === 'es' ? 'Gastronomía & Servicio' : 'Dining & Service',
    },
    {
      author: 'David & Sarah K.',
      platform: 'Google Review',
      rating: 5,
      text: language === 'es'
        ? 'Viajamos frecuentemente y El Mosquito compite con los mejores rooftops de Miami o Tulum. Terraza al aire libre y música increíble del DJ.'
        : 'We travel frequently and El Mosquito rivals rooftops in Miami or Tulum. Beautiful open-air terrace and incredible DJ sound.',
      tag: language === 'es' ? 'Ambiente Internacional' : 'International Vibe',
    },
    {
      author: 'Manuel Tavares',
      platform: 'Google Review',
      rating: 5,
      text: language === 'es'
        ? 'El spot perfecto para citas o celebrar con amigos en Santiago. El valet parking en Rep. del Líbano 3 es comodísimo.'
        : 'The perfect spot for date night or celebratory drinks in Santiago. The valet parking on Rep. del Líbano 3 was super easy.',
      tag: language === 'es' ? 'Valet & Comodidad' : 'Valet & Convenience',
    },
    {
      author: 'Sofia Almonte',
      platform: 'Verified Foodie',
      rating: 5,
      text: language === 'es'
        ? 'El Old Fashioned ahumado con cacao dominicano es una obra de arte. La brisa del atardecer con vista a las montañas no tiene precio.'
        : 'The smoked Dominican cacao Old Fashioned is a true masterpiece. The sunset breeze over the mountain range is priceless.',
      tag: language === 'es' ? 'Coctelería de Autor' : 'Signature Drinks',
    },
  ];

  // Duplicate for seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 sm:py-20 relative bg-[#060709] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-zinc-900/80 text-gold-300 text-xs font-bold uppercase tracking-widest mb-3">
          <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
          <span>{language === 'es' ? 'Opiniones Verificadas' : 'Verified Guest Reviews'}</span>
        </div>
        <h2 className="font-spartan font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
          {language === 'es' ? 'Lo que dicen quienes nos visitan' : 'What Our Guests Say'}
        </h2>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {duplicatedReviews.map((rev, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] p-6 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-gold-400/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Platform */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-gold-400 gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    {rev.platform}
                  </span>
                </div>

                {/* Tag */}
                <div className="mb-2">
                  <span className="text-[11px] font-bold text-gold-300 tracking-wide">
                    {rev.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                  "{rev.text}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-white">{rev.author}</span>
                <span className="text-[10px] text-zinc-400 font-mono">Santiago, DR</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
