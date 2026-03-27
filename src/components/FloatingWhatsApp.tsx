import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/7972155233?text=Hi, I want to order food from Jivika's Kitchen."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-stone-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
        Order on WhatsApp
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-stone-900" />
      </span>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" />
    </motion.a>
  );
}
