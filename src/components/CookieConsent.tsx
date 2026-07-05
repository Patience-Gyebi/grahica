import { useState, useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if the preference was already saved
    const savedConsent = localStorage.getItem("graphica-cookie-consent");
    if (!savedConsent) {
      // Prompt user with slight delay
      const delayTimer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(delayTimer);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("graphica-cookie-consent", accepted ? "accepted" : "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="cookie-consent-banner"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed bottom-6 left-6 right-6 md:left-12 md:right-auto md:max-w-md z-40"
        >
          {/* Glass Card */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/90 dark:bg-slate-950/90 shadow-2xl flex flex-col gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-[#E2D1B3]/10 text-[#E2D1B3] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-xs text-slate-900 dark:text-[#F5F5F5] tracking-tight mb-1">
                  Privacy System Notice
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed font-light">
                  We utilize cookies and standard caching to optimize your load times, compile sub-second metrics, and support dark theme settings.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2.5 justify-end">
              <button
                id="cookie-decline-btn"
                onClick={() => handleConsent(false)}
                className="px-4 py-2 rounded-lg text-[10px] font-sans font-medium uppercase tracking-wider text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors cursor-pointer focus:outline-none"
              >
                Decline
              </button>
              <button
                id="cookie-accept-btn"
                onClick={() => handleConsent(true)}
                className="px-5 py-2.5 rounded-xl bg-[#E2D1B3] text-slate-950 hover:bg-white text-[10px] font-serif italic font-medium uppercase tracking-wider shadow-sm transition-all cursor-pointer focus:outline-none"
              >
                Acknowledge
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
