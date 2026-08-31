import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsAppWidget: React.FC = () => {
  const { language } = useLanguage();

  const message = language === 'es'
    ? 'Hola El Mosquito Rooftop Santiago, deseo reservar una mesa.'
    : 'Hello El Mosquito Rooftop Santiago, I would like to reserve a table.';

  const url = `https://wa.me/18296392661?text=${encodeURIComponent(message)}`;

  return (
    <aside aria-label="WhatsApp VIP Concierge" className="fixed bottom-6 right-6 z-40">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Reservation"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/80 border border-emerald-400/40 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider">
          {language === 'es' ? 'Reservar por WhatsApp' : 'WhatsApp VIP Booking'}
        </span>
      </a>
    </aside>
  );
};
