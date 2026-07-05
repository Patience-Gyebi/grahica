import { ArrowUpRight, Sparkles, MoveRight } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Background Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-[130px] animate-float-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400/5 dark:bg-emerald-600/5 rounded-full blur-[100px]" />

      {/* Decorative Grid Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Typography and Details */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Accent Label */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#E2D1B3]/30 dark:border-[#E2D1B3]/20 rounded-full text-[10px] uppercase tracking-[0.2em] text-[#E2D1B3] bg-[#E2D1B3]/5 mb-6 w-fit"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#E2D1B3]" />
            <span className="font-mono font-medium">
              Award Winning Design Agency
            </span>
          </motion.div>

          {/* Large Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-sans font-light text-5xl sm:text-6xl lg:text-[76px] leading-[0.95] tracking-tighter text-slate-900 dark:text-[#F5F5F5] mb-8"
          >
            Crafting <span className="italic font-serif text-[#E2D1B3] font-normal">digital</span><br/>modern legacies.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-slate-500 dark:text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-md mb-10"
          >
            We bridge the gap between high-end aesthetics and technical excellence for global brands looking to lead, not follow.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-view-portfolio-btn"
              onClick={() => onNavigate("photos")}
              className="group w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-display font-bold text-[10px] uppercase tracking-widest text-slate-950 bg-[#E2D1B3] hover:bg-white dark:hover:bg-white transition-all cursor-pointer focus:outline-none shadow-md shadow-[#E2D1B3]/10"
            >
              <span>View Portfolio</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              id="hero-contact-btn"
              onClick={() => onNavigate("contact")}
              className="group w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 border border-slate-900/15 dark:border-white/10 hover:border-slate-900 dark:hover:border-white rounded-full font-display font-bold text-[10px] uppercase tracking-widest text-slate-900 dark:text-[#F5F5F5] hover:bg-slate-900/5 dark:hover:bg-white/5 transition-all cursor-pointer focus:outline-none"
            >
              <span>Work with us</span>
              <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Mini Features Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-slate-200 dark:border-white/5 pt-8 w-full max-w-xl"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#E2D1B3]">01 /</span>
              <span className="text-xs font-display font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">Swiss Aesthetics</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#E2D1B3]">02 /</span>
              <span className="text-xs font-display font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">Modern Legacies</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#E2D1B3]">03 /</span>
              <span className="text-xs font-display font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">Bespoke Excellence</span>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Visual Image Mockup */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-square max-w-md lg:max-w-none group"
          >
            {/* Glowing Backdrop Border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E2D1B3] to-[#C5B496] rounded-3xl opacity-15 blur-xl group-hover:opacity-25 transition-opacity duration-500" />
            
            {/* Frame container */}
            <div className="relative w-full h-full overflow-hidden rounded-3xl border border-slate-200/50 dark:border-white/5 bg-slate-50 dark:bg-[#121212] shadow-2xl p-3">
              <div className="w-full h-full overflow-hidden rounded-2xl relative">
                {/* Generated Premium Work Image */}
                <img
                  src="/src/assets/images/hero_workspace_1783275234880.jpg"
                  alt="Graphica Premium Workspace"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-102 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Content glassmorphic pill */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl border border-white/10 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xl flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] text-[#E2D1B3] tracking-widest uppercase font-bold">Featured Concept</span>
                    <span className="font-serif font-semibold text-sm text-[#F5F5F5]">The Obsidian Identity</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E2D1B3]/10 text-[#E2D1B3] font-mono text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E2D1B3] animate-pulse" />
                    SHOWCASE
                  </div>
                </div>
              </div>
            </div>

            {/* Float accessory card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 hidden xl:flex items-center gap-3 p-4 rounded-2xl border border-slate-200/30 dark:border-white/5 bg-white/90 dark:bg-[#121212]/95 backdrop-blur-md shadow-lg"
            >
              <div className="w-8 h-8 rounded-full bg-[#E2D1B3]/10 flex items-center justify-center text-[#E2D1B3] font-serif font-bold text-sm">G</div>
              <div className="flex flex-col">
                <span className="text-xs font-display font-bold text-slate-800 dark:text-[#F5F5F5]">Sub-second Load</span>
                <span className="text-[10px] font-mono text-slate-400">Swiss Design Precision</span>
              </div>
            </motion.div>

            {/* Float accessory card 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 hidden xl:flex items-center gap-3 p-4 rounded-2xl border border-slate-200/30 dark:border-white/5 bg-white/90 dark:bg-[#121212]/95 backdrop-blur-md shadow-lg"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#E2D1B3]" />
              <div className="flex flex-col">
                <span className="text-xs font-display font-bold text-slate-800 dark:text-[#F5F5F5]">Editorial Vibe</span>
                <span className="text-[10px] font-mono text-slate-400">Pure Legacy Art</span>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
