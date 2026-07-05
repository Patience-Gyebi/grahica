import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { X, ArrowRight, Eye, Sparkles } from "lucide-react";
import { PORTFOLIO_ITEMS } from "../data";
import { PortfolioItem } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);
  
  // Before-and-After Slider States
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Web", "Branding", "Mobile"];

  const filteredItems = selectedCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  return (
    <section
      id="photos"
      className="py-32 bg-white dark:bg-slate-900 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= PORTFOLIO HEADER & FILTERS ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs font-bold text-[#E2D1B3] uppercase tracking-widest block mb-4">
              CREATIVE ARCHIVE
            </span>
            <h2 className="font-sans font-light text-3xl sm:text-4xl text-slate-900 dark:text-[#F5F5F5] tracking-tight">
              A gallery of our <span className="italic font-serif text-[#E2D1B3]">elite visual</span> and digital crafts.
            </h2>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-[#121212]/50 border border-slate-200/50 dark:border-white/5 rounded-full mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-display font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer focus:outline-none ${
                  selectedCategory === cat
                    ? "bg-[#E2D1B3] text-black shadow-md"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ================= MASONRY PORTFOLIO GRID ================= */}
        <motion.div
          layout
          id="portfolio-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                id={`portfolio-card-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setActiveLightboxItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200/30 dark:border-white/5 bg-slate-50 dark:bg-slate-900/40 shadow-sm"
              >
                {/* Image Wrap */}
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Hover Glass Veil */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-white/25 backdrop-blur-md text-white border border-white/20 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold text-slate-800 bg-white/80 backdrop-blur-xs border border-white/20 shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Info block */}
                <div className="p-6">
                  <span className="font-mono text-[9px] text-[#E2D1B3] tracking-wider font-semibold uppercase block mb-1">
                    {item.client} &bull; {item.year}
                  </span>
                  <h3 className="font-serif font-semibold text-base text-slate-900 dark:text-[#F5F5F5] tracking-tight mb-2 group-hover:text-[#E2D1B3] dark:group-hover:text-[#E2D1B3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ================= BEFORE-AND-AFTER CONTRAST SLIDER ================= */}
        <div id="before-after-container" className="mt-32 pt-24 border-t border-slate-200/50 dark:border-white/5">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold text-[#E2D1B3] uppercase tracking-widest block mb-4">
              COMPARATIVE CRAFT
            </span>
            <h2 className="font-sans font-light text-3xl sm:text-4xl text-slate-900 dark:text-[#F5F5F5] tracking-tight">
              From skeletal logic to <span className="italic font-serif text-[#E2D1B3]">premium experience</span>.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-light mt-3">
              Drag or hover your cursor across the device image below to contrast our wireframe system and finished high-fidelity viewport.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Device Frame */}
            <div className="relative rounded-3xl border border-slate-200/50 dark:border-white/10 bg-white dark:bg-[#121212]/30 p-3 shadow-2xl">
              <div
                ref={sliderRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative aspect-16/9 w-full overflow-hidden rounded-2xl cursor-ew-resize select-none"
              >
                {/* BEFORE IMAGE (Wireframe blueprint view) */}
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200"
                  alt="Skeletal Wireframe Blueprint"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-md bg-slate-900/80 text-white font-mono text-[9px] tracking-widest uppercase font-bold">
                  SKELETAL BLUEPRINT (BEFORE)
                </div>

                {/* AFTER IMAGE (High Fidelity view, clipped dynamically) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                  <img
                    src="/src/assets/images/hero_workspace_1783275234880.jpg"
                    alt="High Fidelity UI Design"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: sliderRef.current?.getBoundingClientRect().width }}
                  />
                  <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-md bg-[#E2D1B3]/90 text-slate-950 font-mono text-[9px] tracking-widest uppercase font-bold">
                    PREMIUM HI-FI RENDER (AFTER)
                  </div>
                </div>

                {/* Sliding separator handle line */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-20 flex items-center justify-center"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Slider Node Bubble */}
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-[#E2D1B3] border-2 border-[#E2D1B3] shadow-xl flex items-center justify-center -translate-x-1/2">
                    <Sparkles className="w-4.5 h-4.5 text-[#E2D1B3] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ================= LIGHTBOX PREVIEW PORTAL ================= */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            id="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/95 backdrop-blur-md"
          >
            {/* Close handler on background click */}
            <div className="absolute inset-0" onClick={() => setActiveLightboxItem(null)} />

            {/* Lightbox Content Container */}
            <motion.div
              id="lightbox-card"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-2xl z-10 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Close Button */}
              <button
                id="lightbox-close-btn"
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white z-20 transition-all cursor-pointer focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image view */}
              <div className="lg:col-span-7 relative bg-slate-100 dark:bg-slate-950 aspect-4/3 lg:aspect-auto flex items-center justify-center overflow-hidden">
                <img
                  src={activeLightboxItem.imageUrl}
                  alt={activeLightboxItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column: Spec details */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white dark:bg-[#121212]">
                <div>
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-bold text-[#E2D1B3] bg-[#E2D1B3]/10 border border-[#E2D1B3]/10">
                      {activeLightboxItem.category}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {activeLightboxItem.year}
                    </span>
                  </div>

                  <h3 className="font-serif font-semibold text-2xl text-slate-900 dark:text-[#F5F5F5] mb-4 tracking-tight leading-snug">
                    {activeLightboxItem.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8 font-light">
                    {activeLightboxItem.description}
                  </p>

                  {/* Project metadata lists */}
                  <div className="border-t border-slate-100 dark:border-white/5 py-6 flex flex-col gap-4">
                    <div className="flex justify-between text-xs">
                      <span className="font-mono text-slate-400 uppercase tracking-wider">Client partner</span>
                      <span className="font-serif font-semibold text-slate-900 dark:text-[#F5F5F5]">{activeLightboxItem.client}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-mono text-slate-400 uppercase tracking-wider">Services rendered</span>
                      <span className="font-serif font-semibold text-slate-900 dark:text-[#F5F5F5]">Experience Architecture</span>
                    </div>
                  </div>
                </div>

                {/* CTA or tag capsule list */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeLightboxItem.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md font-mono text-[9px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    id="lightbox-cta-btn"
                    onClick={() => setActiveLightboxItem(null)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-display font-semibold text-center text-xs tracking-wider uppercase text-slate-950 bg-[#E2D1B3] hover:bg-white dark:hover:bg-white border border-[#E2D1B3]/20 transition-all cursor-pointer focus:outline-none"
                  >
                    <span>Close Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
