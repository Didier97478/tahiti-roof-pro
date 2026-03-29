import { useRef } from 'react';
import { Wrench, Droplets, SprayCan, ShieldCheck, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import heroImage from '@/assets/hero_roof.png';
import imgNettoyage from '@/assets/chantier_nettoyage.jpg';
import imgMaisonRouge from '@/assets/chantier_maison_rouge.jpg';
import imgToitureVerte from '@/assets/chantier_toiture_verte.jpg';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Rénovation de toiture',
    desc: 'Remise à neuf complète de votre toiture avec des matériaux anticorrosion de haute performance adaptés au climat tropical.',
    icon: Wrench,
    className: 'md:col-span-2 md:row-span-2',
    gradient: 'from-gold/20 via-gold/5 to-transparent',
    image: imgMaisonRouge,
  },
  {
    title: 'Nettoyage & Traitement',
    desc: 'Haute pression et traitement anti-mousse pour une toiture éclatante.',
    icon: SprayCan,
    className: 'md:col-span-1 md:row-span-1',
    gradient: 'from-tropical/20 via-tropical/5 to-transparent',
    image: imgNettoyage,
  },
  {
    title: 'Peinture & Étanchéité',
    desc: 'Solutions d\'imperméabilisation avancées pour toits plats et tôles. Résultat longue durée.',
    icon: Droplets,
    className: 'md:col-span-1 md:row-span-1',
    gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
    image: imgToitureVerte,
  },
  {
    title: 'Expertise Tropicale',
    desc: 'Matériaux certifiés pour résister à la corrosion saline et aux UV intenses de Polynésie.',
    icon: ShieldCheck,
    className: 'md:col-span-3 md:row-span-1',
    gradient: 'from-slate-400/10 via-transparent to-transparent',
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animation de titre
    gsap.from('.services-header', {
      scrollTrigger: {
        trigger: '.services-header',
        start: 'top 85%',
      },
      y: 50,
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Animation Bento Grid (Staggered)
    gsap.from('.bento-item', {
      scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top 80%',
      },
      y: 60,
      autoAlpha: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out'
    });
  }, { scope: sectionRef });

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="section-padding bg-slate-950 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="services-header text-center mb-20 space-y-4">
          <p className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">
            L'Excellence du Toit
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white italic leading-tight">
            Une expertise <br className="md:hidden" />
            <span className="text-gradient not-italic">sans compromis</span>
          </h2>
          <div className="w-20 h-1 bg-gold/30 mx-auto mt-6 rounded-full" />
        </div>

        {/* Bento Grid layout */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service) => (
            <div
              key={service.title}
              className={`
                bento-item group relative glass rounded-[2.5rem] p-10 border-white/5 overflow-hidden flex flex-col justify-between
                transition-all duration-700 hover:border-gold/30 hover:shadow-[0_0_50px_rgba(212,175,55,0.1)]
                ${service.className}
              `}
              style={{ perspective: '1200px' }}
            >
              {/* Image background for the main card */}
              {service.image && (
                <div className="absolute inset-0 z-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-20 filter grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>
              )}

              {/* Hover Mesh Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 space-y-8 pointer-events-none transform-gpu group-hover:translate-z-10 transition-transform duration-500">
                <div className="w-16 h-16 rounded-[1.25rem] bg-slate-900/80 backdrop-blur-xl flex items-center justify-center text-gold border border-white/10 group-hover:border-gold/50 shadow-2xl group-hover:scale-110 transition-all duration-500">
                  <service.icon size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-white italic group-hover:text-gold transition-colors duration-500">{service.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed max-w-sm font-light">{service.desc}</p>
                </div>
              </div>

              <div className="relative z-10 flex justify-end items-center gap-4">
                <span className="text-[10px] font-bold text-slate-600 group-hover:text-gold uppercase tracking-widest transition-colors">En savoir plus</span>
                <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-gold group-hover:text-slate-950 group-hover:border-gold transition-all duration-700 shadow-xl">
                   <ArrowUpRight size={24} />
                </div>
              </div>
              
              {/* Noise overlay for premium texture */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
