import { useRef } from 'react';
import { Phone, MessageSquare, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from '../ui/Magnetic';

import heroImage from '@/assets/hero_roof.png';

const CTA = () => {
  return (
    <section id="contact" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-tropical/10 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass rounded-[3rem] p-8 md:p-16 border-white/10 overflow-hidden relative shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h2 className="text-4xl md:text-6xl font-display italic text-white leading-tight">
                  Prêt à <span className="text-gradient not-italic font-black">protéger</span> votre maison ?
                </h2>
                <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-light">
                  Ne laissez pas votre toiture se dégrader sous le soleil et la pluie de Tahiti. Nos experts interviennent partout sur l'île.
                </p>
              </motion.div>

              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, text: 'Inspection gratuite sans engagement' },
                  { icon: Clock, text: 'Devis détaillé sous 48h' },
                  { icon: MapPin, text: 'Service sur toute l\'île de Tahiti' },
                ].map((item, idx) => (
                  <motion.div 
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                      <item.icon size={20} />
                    </div>
                    <span className="font-bold text-sm tracking-wide">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Magnetic>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+68987289350"
                    className="flex items-center justify-center gap-3 px-10 py-5 bg-gold text-slate-950 rounded-2xl font-black text-xl shadow-2xl shadow-gold/20 hover:bg-gold-hover transition-all"
                  >
                    <Phone size={26} fill="currentColor" />
                    87 28 93 50
                  </motion.a>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/68987289350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-10 py-5 glass border-gold/20 rounded-2xl font-bold text-xl text-gold hover:bg-gold/10 transition-all shadow-xl"
                  >
                    <MessageSquare size={26} />
                    WhatsApp
                  </motion.a>
                </Magnetic>
              </div>
            </div>

            {/* Right Side (Expertise Visual) */}
            <div className="relative group perspective-1000 hidden md:block">
               <div className="aspect-[4/5] rounded-[3rem] bg-slate-900 border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl transform-gpu group-hover:rotate-y-2 transition-transform duration-1000">
                  <img 
                    src={heroImage} 
                    alt="Toiture Tahiti"
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.5] group-hover:brightness-[0.4] group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-transparent to-gold/20" />
                  
                  {/* Stats Card Overlay */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="p-10 glass rounded-[2.5rem] border-gold/20 text-center space-y-6 max-w-[320px] relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/5"
                  >
                     <p className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Inspection</p>
                     <h3 className="text-6xl font-black text-white italic">48H</h3>
                     <p className="text-sm text-slate-400 font-light leading-relaxed">Délai moyen d'intervention gratuite après votre appel.</p>
                     <div className="h-1.5 w-24 bg-gradient-to-r from-gold to-amber-200 mx-auto rounded-full shadow-inner" />
                  </motion.div>
                  
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
               </div>
               
               {/* Aesthetic corner markers */}
               <div className="absolute -top-6 -right-6 w-16 h-16 border-t-[6px] border-r-[6px] border-gold/30 rounded-tr-[3rem] -z-10" />
               <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-[6px] border-l-[6px] border-gold/30 rounded-bl-[3rem] -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
