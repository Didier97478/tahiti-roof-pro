import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-8 left-8 z-50 group">
      {/* Tooltip / Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2 bg-slate-900 border border-gold/20 rounded-xl text-gold text-sm font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Besoin d'un devis ? WhatsApp →
      </motion.div>

      {/* Pulsing Background */}
      <div className="absolute inset-0 bg-gold rounded-full animate-pulse-gold blur-xl opacity-50" />

      {/* Button */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/68987289350?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20ma%20toiture."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 bg-gold text-slate-950 rounded-full flex items-center justify-center shadow-2xl shadow-gold/40 border-4 border-slate-950 overflow-hidden"
      >
        <MessageCircle size={32} fill="currentColor" className="animate-float" />
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </motion.a>
      
      {/* Notification Dot */}
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-tropical border-2 border-slate-950 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full animate-ping" />
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
