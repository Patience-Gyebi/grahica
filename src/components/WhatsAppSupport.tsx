import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppSupport() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Default professional support number
  const phoneNumber = "05025830"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Graphica%21%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.`;

  return (
    <div
      id="whatsapp-support-widget"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-end group select-none"
    >
      {/* Tooltip Popup on Hover */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            className="absolute right-16 px-4 py-2 rounded-xl bg-slate-900 text-white font-serif italic text-xs whitespace-nowrap shadow-xl border border-white/10"
          >
            Chat with us
            {/* Tiny arrow pointing right */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[-4px] w-2 h-2 rotate-45 bg-slate-900 border-r border-t border-white/10" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating circular WhatsApp trigger button with pulsing ring */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:bg-emerald-600 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-500/25 animate-pulse-soft"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6.5 h-6.5 fill-white text-emerald-500" />
      </a>
    </div>
  );
}
