import { useState } from "react";
import * as Icons from "lucide-react";
import { SERVICES, CORE_VALUES } from "../data";
import { motion, AnimatePresence } from "motion/react";

// Dynamic Icon Resolver to handle Lucide string representation cleanly
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
};

export default function Services() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      id="services-section"
      className="py-32 bg-white dark:bg-slate-900 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= SERVICES SUB-SECTION ================= */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold text-[#E2D1B3] uppercase tracking-widest block mb-4">
                OUR EXPERTISE
              </span>
              <h2 className="font-sans font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-[#F5F5F5] tracking-tight">
                Solutions engineered for <span className="italic font-serif text-[#E2D1B3]">elite modern</span> legacies.
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed max-w-sm mt-4 md:mt-0">
              We replace old templates with fluid custom structures, prioritizing speed, conversions, and high-fidelity aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const isHovered = activeCard === service.id;
              return (
                <motion.div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  onMouseEnter={() => setActiveCard(service.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden p-8 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-white/5 bg-slate-50/40 dark:bg-[#121212]/40 hover:border-[#E2D1B3]/30 dark:hover:border-[#E2D1B3]/20 hover:bg-white dark:hover:bg-[#121212] transition-all duration-300 group"
                >
                  {/* Subtle top indicator */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#E2D1B3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    {/* Icon Sphere */}
                    <div className="p-4 rounded-2xl bg-white dark:bg-[#1A1A1A] border border-slate-200/50 dark:border-white/10 text-[#E2D1B3] shadow-xs group-hover:scale-105 group-hover:bg-[#E2D1B3] group-hover:text-black transition-all duration-300">
                      <DynamicIcon name={service.icon} className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-lg text-slate-900 dark:text-[#F5F5F5] mb-3 tracking-tight group-hover:text-[#E2D1B3] dark:group-hover:text-[#E2D1B3] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        {service.description}
                      </p>

                      {/* Expanding Feature Bullets */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs font-display text-slate-500 dark:text-slate-400">
                            <Icons.Check className="w-3.5 h-3.5 text-[#E2D1B3] shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= WHY CHOOSE US SUB-SECTION ================= */}
        <div className="mt-32 pt-24 border-t border-slate-200/50 dark:border-white/5">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
            <span className="font-mono text-xs font-bold text-[#E2D1B3] uppercase tracking-widest block mb-4">
              WHY WORK WITH GRAPHICA
            </span>
            <h2 className="font-sans font-light text-3xl sm:text-4xl text-slate-900 dark:text-[#F5F5F5] tracking-tight leading-tight">
              An agency built on <span className="italic font-serif text-[#E2D1B3]">mathematical precision</span> and artistic clarity.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((value, index) => (
              <motion.div
                key={value.id}
                id={`value-card-${value.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start p-7 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-slate-50/20 dark:bg-[#121212]/10 hover:border-[#E2D1B3]/20 dark:hover:border-[#E2D1B3]/15 hover:bg-white dark:hover:bg-[#121212]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E2D1B3]/10 text-[#E2D1B3] flex items-center justify-center mb-6">
                  <DynamicIcon name={value.icon} className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-semibold text-base text-slate-900 dark:text-[#F5F5F5] mb-3 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
