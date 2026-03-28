// Removed unused React import
import { Phone, MessageSquare, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="contact" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-tropical/10 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass rounded-[3rem] p-8 md:p-16 border-white/10 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black text-white leading-tight"
              >
                Prêt à <span className="text-gradient">protéger</span> votre maison ?
              </motion.h2>
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                Ne laissez pas votre toiture se dégrader sous le soleil et la pluie de Tahiti. Nos experts interviennent partout sur l'île.
              </p>

              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, text: 'Inspection gratuite sans engagement' },
                  { icon: Clock, text: 'Devis détaillé sous 48h' },
                  { icon: MapPin, text: 'Service sur toute l\'île de Tahiti' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-white/80">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                      <item.icon size={20} />
                    </div>
                    <span className="font-bold text-sm tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+68987289350"
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-gold text-slate-950 rounded-2xl font-black text-xl shadow-2xl shadow-gold/20 hover:bg-gold-hover transition-all"
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
                  className="flex items-center justify-center gap-3 px-10 py-5 glass border-gold/20 rounded-2xl font-bold text-xl text-gold hover:bg-gold/10 transition-all"
                >
                  <MessageSquare size={24} />
                  WhatsApp
                </motion.a>
              </div>
            </div>

            {/* Right Side (Visual Card) */}
            <div className="relative group lg:pl-12">
               <div className="aspect-square rounded-[2rem] bg-slate-900 border border-white/5 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/Users/oliviahonore/.gemini/antigravity/brain/d069c57a-5cb4-40c6-a4b3-738438105700/premium_roof_tahiti_1774708374441.png" 
                    alt="Mockup"
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-transparent to-gold/10" />
                  
                  {/* Floating Elements Animation */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="p-8 glass rounded-3xl border-gold/10 text-center space-y-4 max-w-[280px] relative z-10 shadow-2xl"
                  >
                     <p className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Intervention</p>
                     <h3 className="text-4xl font-black text-white">48H</h3>
                     <p className="text-xs text-slate-400">Délai moyen d'inspection gratuite après votre appel.</p>
                     <div className="h-1 w-20 bg-gold/30 mx-auto rounded-full" />
                  </motion.div>
               </div>
               
               {/* Accent decoration */}
               <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-gold/30 rounded-tl-3xl lg:translate-x-12" />
               <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-gold/30 rounded-br-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
