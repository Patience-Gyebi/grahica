import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  const loadingTexts = [
    "GRAPHICA CREATIVE STUDIO",
    "INTEGRATING VISUAL SYSTEMS",
    "REFINING INTERFACES",
    "CRAFTING EXPERIENCES"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        
        // Dynamic increments to look organic
        const increment = Math.floor(Math.random() * 8) + 4;
        const nextProgress = Math.min(prev + increment, 100);
        
        // Progressively shift the subtitle stage
        if (nextProgress > 80) setStage(3);
        else if (nextProgress > 50) setStage(2);
        else if (nextProgress > 25) setStage(1);

        return nextProgress;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      id="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-slate-950 p-8 text-white select-none"
    >
      {/* Decorative ambient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E2D1B3]/5 rounded-full blur-[100px]" />

      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Logo reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3.5 mb-8"
        >
          <div className="relative w-10 h-10 rounded-full border border-[#E2D1B3]/30 flex items-center justify-center bg-white/5">
            <span className="font-serif italic text-[#E2D1B3] text-lg">g</span>
          </div>
          <span className="font-serif italic font-normal text-3xl tracking-widest text-white">
            Graphica
          </span>
        </motion.div>

        {/* Dynamic loading steps text */}
        <div className="h-6 overflow-hidden mb-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={stage}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs text-[#E2D1B3] tracking-[0.25em]"
            >
              {loadingTexts[stage]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Minimal linear loader */}
        <div className="w-64 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute left-0 top-0 h-full bg-[#E2D1B3]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Progress counter */}
      <div className="flex flex-col items-center gap-1">
        <motion.span
          className="font-sans font-light text-6xl text-white/90 tracking-tighter"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {progress}%
        </motion.span>
        <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">
          Initializing Portfolio System
        </span>
      </div>
    </motion.div>
  );
}
