// Removed unused React import
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with Parallax Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ y: useScroll().scrollYProgress }}
          className="absolute inset-0"
        >
          <img 
            src="/Users/oliviahonore/.gemini/antigravity/brain/d069c57a-5cb4-40c6-a4b3-738438105700/premium_roof_tahiti_1774708374441.png" 
            alt="Toiture Premium Tahiti"
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold border-gold/20"
            >
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-gold">Expert Couvreur à Tahiti</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-display italic leading-[1] text-white">
                Votre toit <br />
                <span className="text-gradient not-italic font-black">mérite l'excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-xl leading-relaxed font-light">
                Artisan couvreur spécialisé en rénovation et protection de toitures tropicales à Tahiti.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+68987289350"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gold text-slate-950 rounded-2xl font-black text-lg shadow-xl shadow-gold/20 hover:bg-gold-hover transition-all"
              >
                <Phone size={20} fill="currentColor" />
                Appeler : 87 28 93 50
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/68987289350"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 glass border-white/10 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all"
              >
                WhatsApp
                <ArrowRight size={20} />
              </motion.a>
            </div>

            {/* Micro Social Proof */}
            <div className="pt-6">
              <p className="text-sm text-slate-500 font-medium italic">
                Papeete · Punaauia · Faa'a · Mahina · Arue...
              </p>
            </div>
          </motion.div>

          {/* Right Visual (Bento-like Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Visual Card */}
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group">
              <img 
                src="/Users/oliviahonore/.gemini/antigravity/brain/d069c57a-5cb4-40c6-a4b3-738438105700/premium_roof_tahiti_1774708374441.png" 
                alt="Expertise Toiture"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              
              {/* Floating Overlay Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border-gold/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">100% Qualité</p>
                    <p className="text-xs text-slate-400">Satisfaction garantie à Tahiti</p>
                  </div>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: '100%' }}
                     transition={{ duration: 2, delay: 1 }}
                     className="h-full bg-gold" 
                   />
                </div>
              </motion.div>
            </div>

            {/* Accents Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-tropical/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gold/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
