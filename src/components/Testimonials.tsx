import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section
      id="testimonials-section"
      className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#E2D1B3]/5 rounded-full blur-[100px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs font-bold text-[#E2D1B3] uppercase tracking-widest block mb-4">
            CLIENT REVIEWS
          </span>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-slate-900 dark:text-[#F5F5F5] tracking-tight">
            Trusted by <span className="italic font-serif text-[#E2D1B3]">modern product</span> founders.
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative glass-panel p-8 sm:p-14 rounded-3xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#121212]/40 shadow-xl shadow-slate-900/5 dark:shadow-black/20 flex flex-col items-center">
          
          {/* Quote Icon Background ornament */}
          <div className="absolute top-6 left-6 text-[#E2D1B3]/10">
            <Quote className="w-16 h-16 transform scale-x-[-1]" />
          </div>

          {/* Testimonial Active Slider view */}
          <div className="w-full relative min-h-60 overflow-hidden flex flex-col items-center text-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col items-center"
              >
                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E2D1B3] text-[#E2D1B3]" />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="font-serif font-light text-slate-700 dark:text-slate-200 text-lg sm:text-xl md:text-2xl italic leading-relaxed mb-8 max-w-2xl">
                  "{activeTestimonial.text}"
                </blockquote>

                {/* Profile block */}
                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={activeTestimonial.avatarUrl}
                    alt={activeTestimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-slate-200 dark:border-white/10"
                  />
                  <div className="text-left">
                    <span className="font-serif font-semibold text-sm text-slate-900 dark:text-[#F5F5F5] block">
                      {activeTestimonial.name}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 font-medium block">
                      {activeTestimonial.role}, {activeTestimonial.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Custom Controls */}
          <div className="flex items-center gap-4 mt-12">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="p-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Slider Dots */}
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all cursor-pointer focus:outline-none ${
                    currentIndex === idx
                      ? "w-6 bg-[#E2D1B3]"
                      : "w-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="p-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer focus:outline-none"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
