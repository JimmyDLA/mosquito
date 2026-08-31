import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  Car, 
  Shirt, 
  Sparkles 
} from 'lucide-react';

export const LocationHours: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const fullAddress = 'Rep. del Líbano 3, Santiago de los Caballeros 51000, Dominican Republic';
  const googleMapsUrl = 'https://maps.google.com/?q=El+Mosquito+Rooftop+Santiago+Rep+del+Libano+3+Santiago+de+los+Caballeros';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 sm:py-32 relative bg-[#090A0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-400/30 bg-zinc-900/80 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.location.tagline}</span>
          </div>

          <h2 className="editorial-heading text-3xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            {t.location.title}
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            {t.location.subtitle}
          </p>
        </div>

        {/* 2-Column Layout: Details Bento + Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Info Cards (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Address & Plus Code Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-7 sm:p-8 border border-white/10 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{t.location.addressTitle}</h3>
                    <p className="text-sm text-zinc-200 font-medium">{t.location.addressLine1}</p>
                    <p className="text-xs text-zinc-400">{t.location.addressLine2}, {t.location.addressLine3}</p>
                    <p className="text-xs text-gold-400 font-mono mt-1">{t.location.plusCode}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <button
                    onClick={copyToClipboard}
                    className="px-3.5 py-2 rounded-xl border border-white/10 bg-zinc-900/80 hover:border-gold-400/40 text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5 transition-all"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? t.location.addressCopied : t.location.copyAddress}</span>
                  </button>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-gold-400/30 bg-gold-400/10 hover:bg-gold-400/20 text-gold-400 transition-colors"
                    title={t.location.openInGoogleMaps}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Hours & Schedule Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel rounded-3xl p-7 sm:p-8 border border-white/10"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{t.location.hoursTitle}</h3>
                  <span className="text-xs text-emerald-400 font-medium">● Closed · Opens 5 PM Tue</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                  <span className="text-zinc-400 block mb-1">Tuesday – Thursday</span>
                  <span className="text-white font-bold">5:00 PM – 1:00 AM</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                  <span className="text-zinc-400 block mb-1">Friday – Saturday</span>
                  <span className="text-gold-400 font-bold">5:00 PM – 2:30 AM (Late)</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                  <span className="text-zinc-400 block mb-1">Sunday</span>
                  <span className="text-white font-bold">5:00 PM – Midnight</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                  <span className="text-zinc-400 block mb-1">Monday</span>
                  <span className="text-zinc-500 font-semibold">Closed (Private Events)</span>
                </div>
              </div>
            </motion.div>

            {/* Dress Code & Valet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Dress code */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="glass-panel rounded-3xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Shirt className="w-4 h-4 text-gold-400" />
                  <h4 className="text-sm font-bold text-white">{t.location.dressCodeTitle}</h4>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  {t.location.dressCodeDesc}
                </p>
              </motion.div>

              {/* Parking */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-panel rounded-3xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Car className="w-4 h-4 text-gold-400" />
                  <h4 className="text-sm font-bold text-white">{t.location.parkingTitle}</h4>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  {t.location.parkingDesc}
                </p>
              </motion.div>

            </div>

          </div>

          {/* Column 2: Styled Google Map Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel rounded-3xl border border-white/10 p-6 flex flex-col justify-between overflow-hidden relative"
          >
            {/* Map Frame Preview with Stylized Dark Mode Filter */}
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 mb-6 group">
              <iframe
                title="El Mosquito Rooftop Location Map"
                src="https://maps.google.com/maps?q=Rep.+del+L%C3%ADbano+3,+Santiago+de+los+Caballeros+Dominican+Republic&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-85 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              
              {/* Floating Pin Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#090A0C]/90 backdrop-blur-md border border-white/15 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center text-black font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">El Mosquito Rooftop</div>
                    <div className="text-[10px] text-zinc-400">Rep. del Líbano 3, Santiago</div>
                  </div>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-gold-400 hover:bg-gold-300 text-black text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1"
                >
                  <span>Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Call CTA */}
            <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-xs text-zinc-400">{t.location.phoneTitle}</div>
                  <div className="text-sm font-bold text-white font-mono">{t.location.phoneValue}</div>
                </div>
              </div>

              <a
                href="tel:+18296392661"
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors"
              >
                Call / Llamar
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
