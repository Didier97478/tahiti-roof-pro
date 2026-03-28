import { useState } from 'react';
import { motion } from 'framer-motion';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="gallery" className="section-padding bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-bold uppercase tracking-[0.2em] text-xs"
          >
            Preuve Visuelle
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Des résultats <span className="text-gradient">spectaculaires</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Déplacez le curseur pour comparer l'état initial et le résultat après notre intervention.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl cursor-ew-resize select-none group"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0 bg-slate-800">
             <div className="w-full h-full flex items-center justify-center">
                <p className="text-gold font-bold text-3xl opacity-20 uppercase tracking-[0.5em]">Après Rénovation</p>
             </div>
          </div>
          
          {/* Before Image (Overlay) */}
          <div 
            className="absolute inset-0 bg-slate-700 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="w-[100vw] h-full absolute top-0 left-0 bg-slate-700 flex items-center justify-center" style={{ width: '100%' }}>
               <p className="text-white font-bold text-3xl opacity-20 uppercase tracking-[0.5em]">Avant Travaux</p>
            </div>
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-gold z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold shadow-2xl shadow-gold/50 flex items-center justify-center pointer-events-none">
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-slate-950 rounded-full" />
                <div className="w-1 h-3 bg-slate-950 rounded-full" />
              </div>
            </div>
            
            <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
               <span className="px-3 py-1 glass-gold rounded-full text-[10px] font-bold text-gold uppercase tracking-widest shadow-lg">Curseur</span>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-8 left-8 z-30 pointer-events-none">
             <span className="px-4 py-2 glass rounded-xl text-xs font-bold text-white uppercase tracking-widest border-white/20">Avant</span>
          </div>
          <div className="absolute bottom-8 right-8 z-30 pointer-events-none">
             <span className="px-4 py-2 glass rounded-xl text-xs font-bold text-white uppercase tracking-widest border-white/20">Après</span>
          </div>
        </motion.div>
        
        <div className="mt-12 flex justify-center">
           <div className="flex items-center gap-8 text-slate-500 whitespace-nowrap overflow-x-auto pb-4 px-4 no-scrollbar">
              {['Toiture en tôle', 'Toit plat', 'Nettoyage mousse', 'Peinture anticorrosion'].map((tag) => (
                <span key={tag} className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                   {tag}
                </span>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
