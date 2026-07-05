import { useState, FormEvent } from "react";
import { Sparkles, Linkedin, Twitter, Github, Mail, Send, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please specify an email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please specify a valid email address.");
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#0A0A0A] text-slate-400 border-t border-white/5 relative overflow-hidden">
      {/* Glow orb */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E2D1B3]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Logo & Narrative column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-3 cursor-pointer mb-6 focus:outline-none"
            >
              <div className="relative w-8 h-8 rounded-full border border-[#E2D1B3]/30 flex items-center justify-center">
                <span className="font-serif italic text-[#E2D1B3] text-sm">g</span>
              </div>
              <span className="font-serif italic font-normal text-lg tracking-wider text-white">
                Graphica
              </span>
            </button>
            <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 max-w-sm">
              We replace standard design defaults with sub-second performance, Swiss typography, and high-fidelity emotional layouts.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E2D1B3] border border-white/5 hover:border-[#E2D1B3] text-slate-400 hover:text-slate-950 flex items-center justify-center transition-all"
                aria-label="Graphica LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E2D1B3] border border-white/5 hover:border-[#E2D1B3] text-slate-400 hover:text-slate-950 flex items-center justify-center transition-all"
                aria-label="Graphica Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E2D1B3] border border-white/5 hover:border-[#E2D1B3] text-slate-400 hover:text-slate-950 flex items-center justify-center transition-all"
                aria-label="Graphica GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links column */}
          <div className="md:col-span-2">
            <h4 className="font-mono font-medium text-slate-400 text-[10px] tracking-[0.2em] uppercase mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm font-light text-slate-500">
              {(["home", "about", "photos", "contact"] as const).map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => onNavigate(sec)}
                    className="hover:text-[#E2D1B3] hover:underline transition-colors capitalize cursor-pointer focus:outline-none"
                  >
                    {sec === "photos" ? "Featured Work" : sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact coordinates column */}
          <div className="md:col-span-2">
            <h4 className="font-mono font-medium text-slate-400 text-[10px] tracking-[0.2em] uppercase mb-6">
              Inquiries
            </h4>
            <ul className="flex flex-col gap-4 text-xs font-light text-slate-500">
              <li>
                <span className="text-slate-400 block font-serif font-medium mb-1">Stockholm HQ</span>
                <span className="leading-relaxed block">Sveavägen 44, Suite 10, Stockholm</span>
              </li>
              <li>
                <span className="text-slate-400 block font-serif font-medium mb-1">Direct Voice</span>
                <a href="tel:05025830" className="hover:text-[#E2D1B3] transition-colors block">05025830</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-mono font-medium text-slate-400 text-[10px] tracking-[0.2em] uppercase mb-6">
              The Graphica Ledger
            </h4>
            <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
              Sub-second insights on experience architecture, typography, and clean-code development. No spam.
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form
                  key="subscribe-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribe}
                  className="w-full flex flex-col gap-2"
                >
                  <div className="relative w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="email@example.com"
                      className="w-full pl-4 pr-12 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-xs outline-none focus:border-[#E2D1B3] transition-colors"
                    />
                    <button
                      type="submit"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#E2D1B3] text-slate-950 hover:bg-white transition-all cursor-pointer focus:outline-none animate-none"
                      aria-label="Submit Email Subscription"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {error && <span className="text-[10px] text-rose-500 pl-1">{error}</span>}
                </motion.form>
              ) : (
                <motion.div
                  key="subscribed-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full p-4 rounded-xl border border-[#E2D1B3]/25 bg-[#E2D1B3]/5 text-[#E2D1B3] text-xs flex items-center gap-2.5"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Subscribed! Welcome to the Graphica Ledger.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div>
            <span>&copy; {currentYear} Aura Creative Studio. All systems operational. Designed by top-tier UI/UX architects.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate("about")}
              className="hover:text-white transition-all cursor-pointer focus:outline-none"
            >
              Privacy Agreement
            </button>
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer focus:outline-none"
              aria-label="Scroll Back to Top"
            >
              <span>Scroll to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
