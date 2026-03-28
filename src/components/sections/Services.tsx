// Removed unused React import
import { Wrench, Droplets, SprayCan, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Rénovation de toiture',
    desc: 'Remise à neuf complète de votre toiture avec des matériaux anticorrosion de haute performance.',
    icon: Wrench,
    className: 'md:col-span-2 md:row-span-2',
    gradient: 'from-gold/20 via-gold/5 to-transparent',
  },
  {
    title: 'Nettoyage & Traitement',
    desc: 'Haute pression et traitement anti-mousse pour une toiture comme neuve.',
    icon: SprayCan,
    className: 'md:col-span-1 md:row-span-1',
    gradient: 'from-tropical/20 via-tropical/5 to-transparent',
  },
  {
    title: 'Étanchéité',
    desc: 'Solutions d\'imperméabilisation avancées pour toits plats et tôles.',
    icon: Droplets,
    className: 'md:col-span-1 md:row-span-1',
    gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
  },
  {
    title: 'Expertise Tropicale',
    desc: 'Des matériaux spécifiquement sélectionnés pour résister à la chaleur et au sel de Tahiti.',
    icon: ShieldCheck,
    className: 'md:col-span-2 md:row-span-1',
    gradient: 'from-slate-400/10 via-transparent to-transparent',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold uppercase tracking-[0.2em] text-xs"
          >
            Nos Solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Une expertise <span className="text-gradient">complète</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Nous intervenons sur tous types de toitures (tôle, tuile, plate) avec des techniques adaptées aux contraintes de la Polynésie.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateX: 2,
                rotateY: -2,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              style={{ perspective: 1000 }}
              className={`
                group glass rounded-[2.5rem] p-8 border-white/5 overflow-hidden relative flex flex-col justify-between
                ${service.className}
              `}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-gold/30">
                  <service.icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{service.desc}</p>
                </div>
              </div>

              <div className="relative z-10 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:bg-gold group-hover:text-slate-950 group-hover:border-gold transition-all duration-500">
                   <ArrowUpRight size={20} />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-3xl rounded-full group-hover:bg-gold/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
