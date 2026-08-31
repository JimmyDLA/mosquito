import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Calendar, MessageCircle, Send, CheckCircle2, Phone, Mail, User, Sparkles, MapPin } from 'lucide-react';

export const LeadCapture: React.FC = () => {
  const { language } = useLanguage();

  // WhatsApp State
  const [waDate, setWaDate] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [waTime, setWaTime] = useState<string>('19:30');
  const [waGuests, setWaGuests] = useState<number>(4);
  const [waArea, setWaArea] = useState<string>('Rooftop Terrace (Open Sky)');
  const [waOccasion, setWaOccasion] = useState<string>('Casual Drinks & Bites');

  // Web3Forms Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [guestCount, setGuestCount] = useState('8');
  const [message, setMessage] = useState('');

  const generateWhatsAppUrl = () => {
    const phoneNum = '18296392661';
    const textEs = `¡Hola El Mosquito Rooftop! 🍸✨%0A%0ADeseo solicitar una reserva VIP:%0A• Fecha: ${waDate}%0A• Hora: ${waTime}%0A• Personas: ${waGuests}%0A• Área: ${waArea}%0A• Ocasión: ${waOccasion}%0A%0APor favor confírmenme disponibilidad. ¡Gracias!`;
    const textEn = `Hello El Mosquito Rooftop! 🍸✨%0A%0AI would like to request a VIP table reservation:%0A• Date: ${waDate}%0A• Time: ${waTime}%0A• Guests: ${waGuests}%0A• Area: ${waArea}%0A• Occasion: ${waOccasion}%0A%0APlease confirm availability. Thank you!`;
    const msg = language === 'es' ? textEs : textEn;
    return `https://wa.me/${phoneNum}?text=${msg}`;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F59E0B', '#FFFFFF'],
        });
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservations" className="py-28 sm:py-36 relative bg-[#090A0C] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-400/30 bg-zinc-900/80 text-gold-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Calendar className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.5} />
            <span>{language === 'es' ? 'Acceso & Reservaciones' : 'Access & Reservations'}</span>
          </div>

          <h2 className="font-spartan font-extrabold text-4xl sm:text-6xl tracking-tighter text-white uppercase mb-4">
            {language === 'es' ? 'Asegura tu Mesa.' : 'Secure Your Table.'}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-prose mx-auto">
            {language === 'es'
              ? 'Elige tu horario y área preferida para contacto directo por WhatsApp o solicita cotización para eventos VIP privados.'
              : 'Choose your preferred hour and seating area for immediate WhatsApp confirmation or submit a private VIP event inquiry.'}
          </p>
        </div>

        {/* 2-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Option A: WhatsApp Direct Booking (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel rounded-3xl sm:rounded-[36px] p-8 sm:p-10 border border-emerald-500/30 relative"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-spartan font-bold text-xl text-white uppercase tracking-tight">
                    {language === 'es' ? 'Reserva Rápida WhatsApp' : 'Direct WhatsApp Booking'}
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono"> Instant Confirm</p>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live VIP
              </span>
            </div>

            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
              {language === 'es'
                ? 'Personaliza los datos de tu visita abajo para abrir WhatsApp con el mensaje pre-configurado y listo para confirmar con el concierge.'
                : 'Configure your party details below to launch WhatsApp with a pre-formatted request for immediate concierge confirmation.'}
            </p>

            {/* Form controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  {language === 'es' ? 'Fecha de Visita' : 'Date of Visit'}
                </label>
                <input
                  type="date"
                  value={waDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setWaDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  {language === 'es' ? 'Hora Preferida' : 'Preferred Time'}
                </label>
                <select
                  value={waTime}
                  onChange={(e) => setWaTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                >
                  <option value="17:00">5:00 PM (Sunset Doors Open)</option>
                  <option value="18:30">6:30 PM (Golden Hour)</option>
                  <option value="19:30">7:30 PM (Dinner & Cocktails)</option>
                  <option value="21:30">9:30 PM (Nightlife & Music)</option>
                  <option value="23:00">11:00 PM (Late Night VIP)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  {language === 'es' ? 'Número de Personas' : 'Party Size'}
                </label>
                <select
                  value={waGuests}
                  onChange={(e) => setWaGuests(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  {language === 'es' ? 'Área Deseada' : 'Seating Area'}
                </label>
                <select
                  value={waArea}
                  onChange={(e) => setWaArea(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                >
                  <option value="Rooftop Terrace (Open Sky)">
                    {language === 'es' ? 'Terraza Abierta (Open Sky)' : 'Rooftop Terrace (Open Sky)'}
                  </option>
                  <option value="Cocktail Lounge">
                    {language === 'es' ? 'Lounge Techado' : 'Covered Cocktail Lounge'}
                  </option>
                  <option value="VIP Skyline Cabana">
                    {language === 'es' ? 'Cabana VIP Skyline' : 'VIP Skyline Cabana'}
                  </option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  {language === 'es' ? 'Ocasión / Motivo' : 'Occasion'}
                </label>
                <select
                  value={waOccasion}
                  onChange={(e) => setWaOccasion(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                >
                  <option value="Casual Drinks & Bites">
                    {language === 'es' ? 'Tragos & Tapas Casual' : 'Casual Drinks & Bites'}
                  </option>
                  <option value="Birthday Celebration">
                    {language === 'es' ? 'Celebración de Cumpleaños' : 'Birthday Celebration'}
                  </option>
                  <option value="Anniversary / Date Night">
                    {language === 'es' ? 'Aniversario / Cita Romántica' : 'Anniversary / Date Night'}
                  </option>
                  <option value="VIP Bottle Service">
                    {language === 'es' ? 'Mesa VIP Servicio de Botella' : 'VIP Bottle Service Table'}
                  </option>
                </select>
              </div>
            </div>

            {/* Launch CTA */}
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              <span>{language === 'es' ? 'Abrir Reserva en WhatsApp' : 'Launch WhatsApp Reservation'}</span>
            </a>

            <div className="mt-4 flex items-center justify-between text-[11px] text-zinc-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                Rep. del Líbano 3, Santiago
              </span>
              <span className="font-mono text-zinc-400">+1 829-639-2661</span>
            </div>
          </motion.div>

          {/* Option B: Web3Forms VIP & Private Event Lead Capture (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 glass-panel rounded-3xl sm:rounded-[36px] p-8 sm:p-10 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                <Sparkles className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-spartan font-bold text-xl text-white uppercase tracking-tight">
                  {language === 'es' ? 'Eventos & Grupos VIP' : 'VIP Events & Buyouts'}
                </h3>
                <p className="text-xs text-gold-400 font-semibold">Web3Forms Lead Capture</p>
              </div>
            </div>

            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
              {language === 'es'
                ? '¿Celebras un cumpleaños corporativo o cierre privado del rooftop? Envíanos tu propuesta.'
                : 'Planning a corporate gathering, private buyout, or VIP celebration? Submit your inquiry.'}
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center my-4"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" strokeWidth={1.5} />
                  <h4 className="text-base font-bold text-white mb-1">
                    {language === 'es' ? '¡Solicitud Recibida!' : 'Inquiry Received!'}
                  </h4>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    {language === 'es'
                      ? 'Nuestro concierge VIP se comunicará contigo vía WhatsApp o correo a la brevedad.'
                      : 'Our VIP concierge team will reach out via WhatsApp or email shortly.'}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-gold-400 underline underline-offset-4"
                  >
                    {language === 'es' ? 'Enviar otra consulta' : 'Submit another inquiry'}
                  </button>
                </motion.div>
              ) : (
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-3.5"
                >
                  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                  <input type="hidden" name="subject" value="VIP Event Inquiry - El Mosquito Rooftop" />

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-gold-400" />
                      {language === 'es' ? 'Nombre Completo' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. María / Jean-Luc"
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-gold-400" />
                        {language === 'es' ? 'WhatsApp' : 'Phone'} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 829..."
                        className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-gold-400" />
                        {language === 'es' ? 'Correo' : 'Email'} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="client@luxury.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      {language === 'es' ? 'Número Estimado de Invitados' : 'Estimated Guests'}
                    </label>
                    <input
                      type="number"
                      name="guests"
                      min="1"
                      max="200"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      {language === 'es' ? 'Detalles del Evento' : 'Event Details'}
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={language === 'es' ? 'Fecha estimada, requerimientos especiales...' : 'Estimated date, special requirements...'}
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-900 text-white text-xs focus:ring-2 focus:ring-accent focus:border-gold-400 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="gold-btn w-full py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 mt-1 shadow-gold-sm transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" strokeWidth={1.5} />
                    <span>{isSubmitting ? (language === 'es' ? 'Enviando...' : 'Sending...') : (language === 'es' ? 'Enviar Solicitud VIP' : 'Submit VIP Request')}</span>
                  </button>
                </form>
              )}
            </AnimatePresence>

            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-zinc-400 text-center">
              {language === 'es' ? '¿En Las Terrenas? Tel: +1 809-723-5905' : 'Visiting Las Terrenas? Call +1 809-723-5905'}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
