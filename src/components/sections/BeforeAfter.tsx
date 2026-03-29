import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgAvant from '@/assets/chantier_toiture_verte_avant.jpg';
import imgApres from '@/assets/chantier_toiture_verte.jpg';

gsap.registerPlugin(ScrollTrigger);

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  useGSAP(() => {
    gsap.from('.ba-header', {
      scrollTrigger: {
        trigger: '.ba-header',
        start: 'top 85%',
      },
      y: 30,
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.ba-slider', {
      scrollTrigger: {
        trigger: '.ba-slider',
        start: 'top 80%',
      },
      scale: 0.95,
      autoAlpha: 0,
      duration: 1.2,
      ease: 'power4.out'
    });
  }, { scope: containerRef });

  return (
    <section 
      id="gallery" 
      ref={containerRef}
      className="section-padding bg-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="ba-header text-center mb-16 space-y-4">
          <p className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">
            Preuve Visuelle
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white italic leading-tight">
            Des résultats <br className="md:hidden" />
            <span className="text-gradient not-italic">spectaculaires</span>
          </h2>
          <div className="w-16 h-1 bg-gold/20 mx-auto mt-6 rounded-full" />
        </div>

        <div
          className="ba-slider relative aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl cursor-ew-resize select-none group"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image (Background) - Vraie photo APRÈS */}
          <div className="absolute inset-0">
            <img
              src={imgApres}
              alt="Toiture après rénovation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/30" />
          </div>
          
          {/* Before Image (Overlay) - Vraie photo AVANT */}
          <div 
            className="absolute inset-0 overflow-hidden border-r-2 border-gold/80"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0" style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}>
              <img
                src={imgAvant}
                alt="Toiture avant rénovation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/30" />
            </div>
          </div>

          {/* Slider Controller */}
          <div 
            className="absolute top-0 bottom-0 w-px bg-gold/50 z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full glass border-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.2)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <div className="flex gap-1.5 transform group-hover:scale-110 transition-transform">
                <div className="w-1 h-4 bg-gold rounded-full" />
                <div className="w-1 h-4 bg-gold rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-10 left-10 z-30 pointer-events-none group-hover:translate-x-2 transition-transform duration-500">
             <span className="px-6 py-3 glass rounded-2xl text-[10px] font-black text-white uppercase tracking-[0.2em] border-white/10 shadow-2xl">État Initial</span>
          </div>
          <div className="absolute bottom-10 right-10 z-30 pointer-events-none group-hover:-translate-x-2 transition-transform duration-500">
             <span className="px-6 py-3 glass rounded-2xl text-[10px] font-black text-gold uppercase tracking-[0.2em] border-gold/20 shadow-2xl">Résultat Expert</span>
          </div>
          
          {/* Grain texture for premium look */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        
        {/* Tags with premium styling */}
        <div className="mt-16 flex justify-center">
           <div className="flex items-center gap-10 text-slate-500 whitespace-nowrap overflow-x-auto pb-6 px-10 no-scrollbar mask-fade-edges">
              {['Toiture en tôle', 'Toit plat', 'Nettoyage mousse', 'Peinture anticorrosion'].map((tag) => (
                <span key={tag} className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 hover:text-gold transition-colors duration-300">
                   <div className="w-2 h-2 rounded-full bg-gold/40 shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
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
