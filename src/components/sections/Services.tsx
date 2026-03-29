import { useRef } from 'react';
import { Wrench, Droplets, SprayCan, ShieldCheck, ArrowUpRight, Play } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

import imgMaisonRouge from '@/assets/chantier_maison_rouge.jpg';
import imgNettoyage from '@/assets/chantier_nettoyage.jpg';
import imgToitureVerte from '@/assets/chantier_toiture_verte.jpg';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Rénovation de toiture',
    desc: 'Remise à neuf complète de votre toiture avec des matériaux anticorrosion de haute performance adaptés au climat tropical.',
    icon: Wrench,
    className: 'md:col-span-2 md:row-span-2',
    gradient: 'from-gold/20 via-gold/5 to-transparent',
    video: '/videos/peinture-toiture-2eme-couche.mp4',
    image: imgMaisonRouge,
  },
  {
    title: 'Nettoyage Haute Pression',
    desc: 'Traitement anti-mousse professionnel. Résultat immédiat, toiture comme neuve.',
    icon: SprayCan,
    className: 'md:col-span-1 md:row-span-1',
    gradient: 'from-tropical/20 via-tropical/5 to-transparent',
    video: '/videos/peinture-plaques-demo.mp4',
    image: imgNettoyage,
  },
  {
    title: 'Peinture & Étanchéité',
    desc: 'Imperméabilisation avancée. Résine anti-corrosion longue durée adaptée au climat polynésien.',
    icon: Droplets,
    className: 'md:col-span-1 md:row-span-1',
    gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
    video: '/videos/etancheite-resine.mp4',
    image: imgToitureVerte,
  },
];

const galleryVideos = [
  { src: '/videos/etancheite-complete.mp4', title: 'Étanchéité Complète', desc: 'Résine caoutchoutée sur tirefonds et boulons' },
  { src: '/videos/peinture-2eme-couche.mp4', title: 'Peinture 2ème Couche', desc: 'Application en double couche pour durabilité maximale' },
  { src: '/videos/peinture-anticorrosion.mp4', title: 'Traitement Anticorrosion', desc: 'Protection anti-rouille spéciale climat tropical' },
  { src: '/videos/peinture-plaques-demo.mp4', title: 'Peinture Plaques', desc: 'Finition impeccable sur plaques ondulées' },
  { src: '/videos/peinture-toiture-2eme-couche.mp4', title: 'Rénovation Complète', desc: 'Avant/après : un résultat spectaculaire' },
  { src: '/videos/etancheite-resine.mp4', title: 'Résine d\'Étanchéité', desc: 'Imperméabilisation totale et durable' },
];

const Services = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.services-header', {
      scrollTrigger: { trigger: '.services-header', start: 'top 85%' },
      y: 50, opacity: 0, duration: 1, ease: 'power3.out'
    });
    gsap.from('.bento-item', {
      scrollTrigger: { trigger: '.bento-grid', start: 'top 80%' },
      y: 60, opacity: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out'
    });
    gsap.from('.expertise-section', {
      scrollTrigger: { trigger: '.expertise-section', start: 'top 90%' },
      y: 30, opacity: 0, duration: 1, ease: 'power3.out'
    });
    gsap.from('.gallery-item', {
      scrollTrigger: { trigger: '.gallery-grid', start: 'top 90%' },
      y: 30, opacity: 0.5, duration: 1, stagger: 0.1, ease: 'power3.out'
    });
  }, { scope: sectionRef });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="services-header text-center mb-20 space-y-5">
          <p className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] font-sans">
            L'Excellence du Toit
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.95]">
            <span className="block font-display italic text-white/90">Une expertise</span>
            <span className="block text-gradient not-italic font-black">sans compromis</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
            De la première inspection au résultat final, nous garantissons une qualité irréprochable adaptée au climat polynésien.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-amber-300 mx-auto rounded-full mt-6" />
        </div>

        {/* Bento Grid — 3 cartes avec vidéos ET photos */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[320px]">
          {services.map((service) => (
            <div
              key={service.title}
              className={`
                bento-item group relative glass rounded-[2.5rem] overflow-hidden flex flex-col justify-between
                transition-all duration-700 hover:border-gold/40 hover:shadow-[0_0_60px_rgba(212,175,55,0.12)]
                ${service.className}
              `}
            >
              {/* Photo background (toujours visible) */}
              {service.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover brightness-[0.8] group-hover:brightness-[0.6] transition-all duration-1000"
                  />
                </div>
              )}

              {/* Vidéo en overlays au hover */}
              {service.video && (
                <div className="absolute inset-0 z-[1] opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  <video
                    src={service.video}
                    poster={service.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover brightness-[0.6] scale-105"
                  />
                </div>
              )}

              {/* Gradients overlay */}
              <div className="absolute inset-0 z-[2] bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/10" />
              <div className={`absolute inset-0 z-[2] bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Content */}
              <div className="relative z-[3] p-8 md:p-10 flex flex-col h-full justify-between">
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900/80 backdrop-blur-xl flex items-center justify-center text-gold border border-white/10 group-hover:border-gold/60 group-hover:scale-110 transition-all duration-500 shadow-xl">
                    <service.icon size={28} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-black text-white italic leading-tight group-hover:text-gold transition-colors duration-500 font-display">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-light max-w-sm">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-[10px] font-bold text-gold uppercase tracking-widest">Vidéo en cours</span>
                  </div>
                  <div className="w-11 h-11 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-gold group-hover:text-slate-950 group-hover:border-gold transition-all duration-500 shadow-xl">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Expertise Tropicale */}
        <div className="expertise-section mt-5">
          <div
            className="relative rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-700"
            style={{ minHeight: '200px' }}
          >
            <img
              src={imgToitureVerte}
              alt="Expertise Tropicale"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.75]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
            <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white italic font-display">Expertise Tropicale</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mt-1 max-w-lg">
                    Matériaux certifiés pour résister à la corrosion saline et aux UV intenses de Polynésie. Chaque chantier est traité comme une référence.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 flex-shrink-0">
                {[['10+', 'Ans d\'exp.'], ['100%', 'Garanti'], ['48h', 'Devis']].map(([val, label]) => (
                  <div key={label} className="text-center">
                    <p className="text-3xl font-black text-gold font-display">{val}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Galerie 6 vidéos */}
        <div id="gallery" className="mt-24">
          <div className="text-center mb-14 space-y-4">
            <p className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">
              Nos Chantiers en Action
            </p>
            <h3 className="text-4xl md:text-5xl font-black text-white italic font-display">
              Voyez par <span className="text-gradient not-italic">vous-même</span>
            </h3>
            <p className="text-slate-400 text-base max-w-md mx-auto font-light">
              6 vidéos de vrais chantiers à Tahiti — notre savoir-faire en images.
            </p>
          </div>

          <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryVideos.map((vid) => (
              <motion.div
                key={vid.src}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="gallery-item group relative rounded-[2rem] overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-500 shadow-2xl bg-slate-900"
                style={{ aspectRatio: '16/9' }}
              >
                <video
                  src={vid.src}
                  poster={imgToitureVerte}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
                {/* Label overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-[10px] font-black text-gold uppercase tracking-[0.2em]">{vid.title}</span>
                  </div>
                  <p className="text-slate-300 text-xs font-light">{vid.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
