import { useState, useEffect } from "react";
import { Sparkles, ArrowLeft, RefreshCw, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppSupport from "./components/WhatsAppSupport";
import CookieConsent from "./components/CookieConsent";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [show404, setShow404] = useState(false);
  
  // Theme State
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("graphica-theme");
    if (saved) return saved === "dark";
    // Default to dark mode for a cinematic first-load vibe
    return true;
  });

  // Apply Dark Mode Class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("graphica-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("graphica-theme", "light");
    }
  }, [darkMode]);

  // Scroll Spy Section Observer
  useEffect(() => {
    if (isLoading || show404) return;

    const handleScroll = () => {
      const sections = ["home", "about", "photos", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset for sticky nav

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, show404]);

  // Smooth Scroll Trigger
  const handleNavigate = (sectionId: string) => {
    if (show404) {
      setShow404(false);
      // Wait for 404 transition to clear
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300);
      return;
    }
    scrollToSection(sectionId);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80; // nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-500 selection:bg-blue-500/30 selection:text-blue-500 selection:dark:text-blue-300">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : show404 ? (
          /* ================= PROFESSIONAL 404 PAGE ================= */
          <motion.div
            key="404-viewport"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center p-8 bg-slate-950 text-white relative overflow-hidden"
          >
            {/* Ambient geometric vector background decoration */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-[100px] animate-float-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] animate-float-reverse" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
              {/* Alert Sign */}
              <motion.div
                initial={{ scale: 0.8, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="w-20 h-20 rounded-3xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center mb-8"
              >
                <AlertTriangle className="w-9 h-9" />
              </motion.div>

              {/* Typographic display */}
              <h1 className="font-display font-black text-8xl tracking-tighter text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-600">
                404
              </h1>
              <span className="font-mono text-xs tracking-[0.3em] font-bold text-rose-400 mb-6 uppercase">
                Node Desynchronization
              </span>

              <p className="text-slate-400 text-sm font-light leading-relaxed mb-10">
                The terminal coordinate you are requesting appears desynchronized or offline. 
                Please reconnect to our primary business network layout.
              </p>

              {/* Action */}
              <button
                id="404-reconnect-btn"
                onClick={() => setShow404(false)}
                className="flex items-center gap-2.5 px-8 py-4 rounded-full font-display font-semibold text-xs tracking-wider uppercase text-slate-950 bg-white hover:bg-slate-100 hover:scale-102 active:scale-98 shadow-xl shadow-white/5 transition-all cursor-pointer focus:outline-none"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Reconnect to Core</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* ================= MAIN APPLICATION PORTAL ================= */
          <motion.div
            key="app-portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col relative"
          >
            {/* Navigation Header */}
            <Navbar
              activeSection={activeSection}
              onNavigate={handleNavigate}
              darkMode={darkMode}
              onToggleDarkMode={() => setDarkMode(!darkMode)}
            />

            {/* Main Sections */}
            <main className="flex-1">
              <Hero onNavigate={handleNavigate} />
              <Services />
              <About />
              <Stats />
              <Portfolio />
              <Testimonials />
              <Contact />
            </main>

            {/* Footer Section */}
            <Footer onNavigate={handleNavigate} />

            {/* Demo Helper: 404 Trigger widget in footer spacer to display elite 404 screen layout */}
            <div className="bg-slate-950 border-t border-white/5 py-4 text-center select-none">
              <button
                id="preview-404-trigger"
                onClick={() => {
                  window.scrollTo({ top: 0 });
                  setShow404(true);
                }}
                className="inline-flex items-center gap-1.5 font-mono text-[9px] text-slate-600 hover:text-rose-400 transition-colors uppercase tracking-widest cursor-pointer focus:outline-none"
                title="Preview professional 404 page"
              >
                <RefreshCw className="w-3 h-3 animate-spin-slow" />
                <span>Simulate 404 Interface</span>
              </button>
            </div>

            {/* Floating Support Widgets */}
            <WhatsAppSupport />
            <CookieConsent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
