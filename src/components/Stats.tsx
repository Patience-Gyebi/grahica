import { useEffect, useState, useRef } from "react";
import { Award, Briefcase, Smile, History } from "lucide-react";
import { motion, useInView } from "motion/react";

interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: any;
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  const statsList: StatItem[] = [
    { id: "projects", label: "Projects Completed", value: 142, suffix: "+", icon: Briefcase },
    { id: "clients", label: "Happy Client Partners", value: 98, suffix: "%", icon: Smile },
    { id: "experience", label: "Years Experience", value: 5, suffix: "", icon: History },
    { id: "awards", label: "International Awards", value: 12, suffix: "", icon: Award }
  ];

  return (
    <section
      ref={containerRef}
      id="statistics-section"
      className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-b border-white/5"
    >
      {/* Background soft glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E2D1B3]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {statsList.map((stat, index) => (
            <motion.div
              key={stat.id}
              id={`stat-item-${stat.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Stat Icon */}
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-[#E2D1B3] mb-6 shadow-inner">
                <stat.icon className="w-4 h-4" />
              </div>

              {/* Counting Number */}
              <Counter value={stat.value} suffix={stat.suffix} trigger={isInView} />

              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] mt-3">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Custom Counter Subcomponent to handle tick rates beautifully
function Counter({ value, suffix, trigger }: { value: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.max(Math.floor(duration / value), 12);
    
    const timer = setInterval(() => {
      start += Math.ceil(value / 100) || 1;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, trigger]);

  return (
    <div className="flex items-baseline justify-center">
      <span className="font-sans font-light text-5xl sm:text-6xl text-[#F5F5F5] tracking-tighter">
        {count}
      </span>
      <span className="font-serif italic font-light text-3xl sm:text-4xl text-[#E2D1B3] ml-1">
        {suffix}
      </span>
    </div>
  );
}
