import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, MapPin, PartyPopper, MessageCircle } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();

  const [date, setDate] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState<string>('19:30');
  const [guests, setGuests] = useState<number>(2);
  const [area, setArea] = useState<string>('Rooftop Terrace (Open Sky)');
  const [occasion, setOccasion] = useState<string>('Casual Drinks & Bites');
  const [notes, setNotes] = useState<string>('');

  const generateWhatsAppUrl = () => {
    const phone = '18296392661';
    const textEs = `¡Hola El Mosquito Rooftop! 🍸✨%0A%0ADeseo solicitar una reserva VIP:%0A• Fecha: ${date}%0A• Hora: ${time}%0A• Personas: ${guests}%0A• Área deseada: ${area}%0A• Ocasión: ${occasion}${notes ? `%0A• Notas: ${encodeURIComponent(notes)}` : ''}%0A%0APor favor confírmenme la disponibilidad. ¡Muchas gracias!`;
    const textEn = `Hello El Mosquito Rooftop! 🍸✨%0A%0AI would like to request a VIP reservation:%0A• Date: ${date}%0A• Time: ${time}%0A• Guests: ${guests}%0A• Area: ${area}%0A• Occasion: ${occasion}${notes ? `%0A• Notes: ${encodeURIComponent(notes)}` : ''}%0A%0APlease confirm availability. Thank you!`;
    
    const msg = language === 'es' ? textEs : textEn;
    return `https://wa.me/${phone}?text=${msg}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-3xl bg-[#121418] border border-gold-400/30 p-6 sm:p-8 shadow-2xl z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-gold-400/50 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-400/40 bg-zinc-950 flex items-center justify-center p-1.5 shrink-0 shadow-md">
                <img
                  src="https://img1.wsimg.com/isteam/ip/a4d17db7-f8f4-4a3e-be8b-4259938cb734/Mosquito%20Rooftop%20Logo-0001.png/:/rs=w:399,h:400,cg:true,m/cr=w:399,h:400/qt=q:95"
                  alt="El Mosquito Rooftop"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-spartan font-extrabold text-2xl text-white uppercase tracking-tight">
                  {t.nav.reserveBtn}
                </h3>
                <p className="text-xs text-gold-400 font-mono">El Mosquito Rooftop Santiago</p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 mb-6 font-light">
              {language === 'es'
                ? 'Configura tu reserva para abrir WhatsApp con los datos listos para confirmación instantánea con el anfitrión VIP.'
                : 'Configure your table request below to open WhatsApp with pre-filled details for immediate confirmation.'}
            </p>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  {t.reservations.formDate}
                </label>
                <input
                  type="date"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  {t.reservations.formTime}
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                >
                  <option value="17:00">5:00 PM (Sunset Open)</option>
                  <option value="18:00">6:00 PM (Sunset Golden)</option>
                  <option value="19:30">7:30 PM (Evening Dinner)</option>
                  <option value="21:00">9:00 PM (Nightlife & Cocktails)</option>
                  <option value="22:30">10:30 PM (Late Lounge)</option>
                  <option value="00:00">12:00 AM (Midnight)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-gold-400" />
                  {t.reservations.formGuests}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  {t.reservations.formArea}
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                >
                  <option value="Rooftop Terrace (Open Sky)">{t.reservations.areaTerrace}</option>
                  <option value="Cocktail Lounge">{t.reservations.areaLounge}</option>
                  <option value="VIP Skyline Cabana">{t.reservations.areaCabana}</option>
                  <option value="Sunset Front-Row">{t.reservations.areaSunset}</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                  <PartyPopper className="w-3.5 h-3.5 text-gold-400" />
                  {t.reservations.formOccasion}
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                >
                  <option value="Casual Drinks & Bites">{t.reservations.occasionCasual}</option>
                  <option value="Birthday Celebration">{t.reservations.occasionBirthday}</option>
                  <option value="Anniversary / Date Night">{t.reservations.occasionAnniversary}</option>
                  <option value="Business / Networking">{t.reservations.occasionBusiness}</option>
                  <option value="VIP Bottle Service">{t.reservations.occasionVip}</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  {t.reservations.formNotes}
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.reservations.formNotesPlaceholder}
                  className="w-full px-3 py-2 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Launch WhatsApp CTA */}
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.reservations.btnSendWhatsApp}</span>
            </a>

            <div className="mt-4 text-center text-[10px] text-zinc-500">
              Direct line: +1 829-639-2661 · Rep. del Líbano 3, Santiago de los Caballeros
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
