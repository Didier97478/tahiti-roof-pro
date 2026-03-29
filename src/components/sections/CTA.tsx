import { useRef } from 'react';
import { Phone, MessageSquare, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import heroImage from '@/assets/hero_roof.png';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.cta-card', {
      scrollTrigger: {
        trigger: '.cta-card',
        start: 'top 85%',
      },
      scale: 0.98,
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out'
    });

    gsap.from('.cta-item', {
      scrollTrigger: {
        trigger: '.cta-card',
        start: 'top 75%',
      },
      x: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.3
    });
  }, { scope: containerRef });

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="section-padding bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-tropical/10 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="cta-card glass rounded-[3.5rem] p-10 md:p-20 border-white/5 overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.5)]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Prêt pour l'Excellence ?</p>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] italic">
                  Protégez votre <br />
                  <span className="text-gradient not-italic">patrimoine</span>
                </h2>
                <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-light">
                  Sous le soleil et les pluies de Tahiti, votre toiture est votre première défense. Nos experts interviennent partout sur l'île.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, text: 'Inspection gratuite sans engagement' },
                  { icon: Clock, text: 'Devis détaillé sous 48h' },
                  { icon: MapPin, text: 'Service sur toute l\'île de Tahiti' },
                ].map((item) => (
                  <div key={item.text} className="cta-item flex items-center gap-4 text-white/90 group">
                    <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-slate-950 transition-all duration-500 shadow-xl">
                      <item.icon size={24} />
                    </div>
                    <span className="font-black text-sm uppercase tracking-widest">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+68987289350"
                  className="flex items-center justify-center gap-3 px-10 py-6 bg-gold text-slate-950 rounded-2xl font-black text-xl shadow-2xl shadow-gold/30 hover:bg-gold-hover transition-all duration-500"
                >
                  <Phone size={24} fill="currentColor" />
                  87 28 93 50
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/68987289350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-10 py-6 glass border-gold/30 rounded-2xl font-black text-xl text-gold hover:bg-gold/10 transition-all duration-500"
                >
                  <MessageSquare size={24} />
                  WhatsApp
                </motion.a>
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
