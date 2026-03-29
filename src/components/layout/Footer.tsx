import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon } from '@/components/ui/BrandIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Rénovation de toiture', href: '#services' },
    { name: 'Nettoyage & Traitement', href: '#services' },
    { name: 'Étanchéité', href: '#services' },
    { name: 'Peinture anticorrosion', href: '#services' },
    { name: 'Zones d\'intervention', href: '#zones' },
  ];

  const legalLinks = [
    { name: 'Mentions Légales', href: '#' },
    { name: 'Confidentialité', href: '#' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-gold/20">
                <span className="text-slate-950 font-heading font-bold text-xl">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-black tracking-tight text-white leading-none">TAHITI</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Rénovation Toiture</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Expert couvreur à Tahiti spécialisé dans la protection et la rénovation de toitures tropicales. Qualité premium et intervention rapide sur toute l'île.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/68987289350"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2]/10 border border-[#1877F2]/30 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gold" />
              Nos Services
            </h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 text-sm hover:text-gold transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gold" />
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+68987289350" className="text-slate-300 text-sm font-bold hover:text-gold transition-colors underline decoration-gold/30">
                    87 28 93 50
                  </a>
                  <span className="text-xs text-slate-500 italic mt-1">Inspection gratuite sous 48h</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Mail size={18} className="text-gold shrink-0 mt-0.5" />
                <a href="mailto:contact@tahiti-toiture.pf" className="text-sm hover:text-gold transition-colors">
                  contact@tahiti-toiture.pf
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="text-sm">
                  Service sur toute l'île de Tahiti<br />
                  <span className="text-xs italic text-slate-500">Papeete · Punaauia · Paea · Mahina...</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/5">
            <h4 className="text-white font-heading font-bold mb-4">Un projet ?</h4>
            <p className="text-slate-400 text-xs mb-6">
              N'attendez pas que la première pluie tropicale cause des dégâts. Demandez votre devis gratuit dès aujourd'hui.
            </p>
            <a href="tel:+68987289350" className="w-full flex items-center justify-center gap-2 py-3 bg-gold text-slate-950 rounded-xl font-bold text-sm hover:bg-gold-hover transition-colors shadow-lg shadow-gold/10">
              <Phone size={16} />
              Demander mon devis
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs text-center md:text-left">
          <p>© {currentYear} Tahiti Rénovation Toiture. Tous droits réservés.</p>
          <div className="flex gap-8">
            {legalLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-gold transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
