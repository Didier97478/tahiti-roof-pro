import { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4',
        isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-gold to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform duration-300">
            <span className="text-slate-950 font-heading font-bold text-xl">T</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-heading font-black tracking-tight text-white leading-none">TAHITI</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Rénovation Toiture</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-gold transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/68987289350"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-gold text-gold hover:bg-gold hover:text-slate-950 transition-all duration-300"
          >
            <MessageSquare size={18} />
          </a>
          <a
            href="tel:+68987289350"
            className="flex items-center gap-2 px-5 py-2.5 bg-gold text-slate-950 rounded-full font-bold text-sm hover:bg-gold-hover hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Phone size={16} />
            87 28 93 50
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-slate-950 z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-heading font-bold text-white hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+68987289350"
            className="flex items-center gap-3 px-8 py-4 bg-gold text-slate-950 rounded-full font-bold text-lg mt-4"
          >
            <Phone size={20} />
            87 28 93 50
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
