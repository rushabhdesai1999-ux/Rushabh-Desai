import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  // Use a generic mobile WhatsApp short link structure based on the provided number
  const phoneNumber = "919820697986";
  const message = encodeURIComponent("Hello Hair Katta Salon! I would like to book an appointment.");

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-charcoal-800 text-white text-xs px-3 py-2 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity flex items-center shadow-lg border border-white/10 font-sans pointer-events-none">
        Chat with us
        {/* Triangle pointer */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-charcoal-800" />
      </span>
    </motion.a>
  );
}
