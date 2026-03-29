import { useRef } from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import heroImage from '@/assets/chantier_maison_rouge.jpg';
import heroCleaningImage from '@/assets/chantier_nettoyage.jpg';

const Hero = () => {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

    // Animation d'entrée premium (Fail-safe with autoAlpha)
    tl.from('.hero-badge', { opacity: 0, y: 20, duration: 0.8 }, 0.2)
      .from('.hero-title-line', { 
        y: 100, 
        opacity: 0, 
        stagger: 0.2, 
        duration: 1.5 
      }, 0.4)
      .from('.hero-subtitle', { opacity: 0, y: 30 }, 0.8)
      .from('.hero-features div', { opacity: 0, scale: 0.9, stagger: 0.1 }, 1)
      .from('.hero-cta', { opacity: 0, y: 20, stagger: 0.2 }, 1.2);
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background with Parallax Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ y: useScroll().scrollYProgress }}
          className="absolute inset-0"
        >
          <img 
            src={heroCleaningImage} 
            alt="Nettoyage Toiture Expert Tahiti"
            className="w-full h-full object-cover brightness-[0.6] transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />
          
          {/* Animated Mesh Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold border-gold/20">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
              <span className="text-xs font-bold uppercase tracking-wider text-gold">Expert Couvreur à Tahiti</span>
            </div>

            {/* Headline */}
            <div className="space-y-6 overflow-hidden">
              <h1 className="text-6xl md:text-8xl font-display italic leading-[1] text-white">
                <span className="hero-title-line block">Votre toit</span>
                <span className="hero-title-line block text-gradient not-italic font-black">mérite l'excellence</span>
              </h1>
              <p className="hero-subtitle text-xl md:text-2xl text-slate-400 max-w-xl leading-relaxed font-light">
                Artisan couvreur spécialisé en rénovation et protection de toitures tropicales à Tahiti.
              </p>
            </div>

            {/* Features List */}
            <div className="hero-features grid sm:grid-cols-2 gap-4">
              {['Devis gratuit sous 48h', 'Garantie décennale', 'Matériaux anticorrosion', 'Intervention rapide'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 size={18} className="text-gold" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+68987289350"
                className="hero-cta flex items-center justify-center gap-2 px-8 py-4 bg-gold text-slate-950 rounded-2xl font-black text-lg shadow-2xl shadow-gold/20 hover:bg-gold-hover transition-all"
              >
                <Phone size={20} fill="currentColor" />
                Appeler : 87 28 93 50
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/68987289350"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta flex items-center justify-center gap-2 px-8 py-4 glass border-white/10 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all"
              >
                WhatsApp
                <ArrowRight size={20} />
              </motion.a>
            </div>

            {/* Micro Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="pt-6"
            >
              <p className="text-sm text-slate-500 font-medium italic">
                Papeete · Punaauia · Faa'a · Mahina · Arue...
              </p>
            </motion.div>
          </div>

          {/* Right Visual (Interactive Feature Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            className="relative hidden lg:block perspective-1000"
          >
            {/* Main Visual Card with Tilt Effect */}
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group transform-gpu transition-transform duration-500 hover:rotate-x-2 hover:rotate-y-2">
              <img 
                src={heroImage} 
                alt="Maison Toiture Tahiti"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.9] group-hover:brightness-[0.8] group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
              
              {/* Floating Glass Badge */}
              <div className="absolute top-8 right-8 p-4 glass rounded-2xl border-white/20">
                <p className="text-gold font-black text-2xl">10+</p>
                <p className="text-[10px] uppercase tracking-tighter text-slate-400">Ans d'expérience</p>
              </div>

              {/* Floating Overlay Card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-10 left-8 right-8 p-8 glass rounded-[2rem] border-gold/20"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-gold shadow-inner">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-black italic">100% Qualité</h3>
                    <p className="text-sm text-slate-400">Satisfaction garantie à Tahiti</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase text-gold font-bold">
                    <span>Performance</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: '100%' }}
                       transition={{ duration: 2.5, delay: 1 }}
                       className="h-full bg-gradient-to-r from-gold to-amber-200" 
                     />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-gold/10 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-tropical/10 blur-[120px] rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
