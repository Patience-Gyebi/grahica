import { useState } from "react";
import { Linkedin, Twitter, Github, Award, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { TEAM_MEMBERS, MILESTONES } from "../data";
import { motion } from "motion/react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"story" | "mission" | "vision">("story");

  const skills = [
    { name: "Creative Brand Strategy", percentage: 95, color: "from-[#E2D1B3] to-[#C5B496]" },
    { name: "React & Next.js Systems", percentage: 98, color: "from-[#E2D1B3] to-[#C5B496]" },
    { name: "Holographic & Watch Interfaces", percentage: 90, color: "from-[#E2D1B3] to-[#C5B496]" },
    { name: "Conversion SEO Architecture", percentage: 94, color: "from-[#E2D1B3] to-[#C5B496]" }
  ];

  const storyContent = {
    story: {
      tag: "THE GENESIS",
      title: "We craft custom realities, not standard grids.",
      text: "Founded in 2021 by Sarah Jenkins, Graphica Creative emerged as a rebellion against cookie-cutter agency templates. We noticed that websites were losing their soul—getting trapped in identical visual styles and slow-loading frameworks. We integrated the aesthetics of Swiss minimalism with cutting-edge front-end engineering to deliver blazing fast speed and jaw-dropping typography.",
      highlight: "Craftsmanship is not an afterthought; it is our entire system."
    },
    mission: {
      tag: "OUR CORE PURPOSE",
      title: "Empowering businesses through pristine code and flawless art.",
      text: "Our mission is to translate complex business software and brand messages into beautiful, intuitive, and accessible user experiences. We empower leaders, creators, and developers worldwide to experience digital tools that feel natural, secure, and blazing fast. We do this by writing custom, clean React code with no bloated dependencies.",
      highlight: "We build for performance, longevity, and high emotional resonance."
    },
    vision: {
      tag: "THE FUTURE",
      title: "Pioneering the next dimension of interactive layouts.",
      text: "We envision a world where digital touchpoints are entirely integrated, responsive, and carbon-neutral. Whether it's high-speed web apps, bespoke luxury smartphone panels, or holographic heads-up smartwatch interfaces, Graphica aims to define the benchmark for UI/UX excellence globally.",
      highlight: "Leading the global transition into high-performance sustainable software."
    }
  };

  return (
    <section
      id="about"
      className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] animate-pulse-soft" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= COMPANY PROFILE & SKILLS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          
          {/* Left Block: Narrative Tab system */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="font-mono text-xs font-bold text-[#E2D1B3] uppercase tracking-widest mb-4">
              ABOUT GRAPHICA
            </span>
            <h2 className="font-sans font-light text-3xl sm:text-4xl text-slate-900 dark:text-[#F5F5F5] tracking-tight mb-8">
              Artistic vision backed by <span className="italic font-serif text-[#E2D1B3]">elite technical</span> muscle.
            </h2>

            {/* Tab Toggles */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-200/50 dark:bg-[#121212]/50 border border-slate-200/40 dark:border-white/5 rounded-full mb-8">
              {(["story", "mission", "vision"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full font-display font-medium text-xs tracking-wider uppercase transition-all cursor-pointer focus:outline-none ${
                    activeTab === tab
                      ? "bg-white dark:bg-[#1A1A1A] border border-[#E2D1B3]/10 text-[#E2D1B3] dark:text-[#E2D1B3] shadow-md"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab narrative pane */}
            <div className="min-h-72">
              <span className="font-mono text-[10px] text-[#E2D1B3] tracking-widest font-bold uppercase block mb-3">
                {storyContent[activeTab].tag}
              </span>
              <h3 className="font-serif font-semibold text-xl text-slate-900 dark:text-[#F5F5F5] mb-4 tracking-tight">
                {storyContent[activeTab].title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed mb-6">
                {storyContent[activeTab].text}
              </p>
              <div className="border-l-2 border-[#E2D1B3] pl-4 py-1 italic text-slate-500 dark:text-slate-400 text-sm">
                "{storyContent[activeTab].highlight}"
              </div>
            </div>
          </div>

          {/* Right Block: Skills Progress visualization */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#121212]/30 shadow-xl shadow-slate-900/5 dark:shadow-black/10">
            <h3 className="font-serif font-semibold text-lg text-slate-900 dark:text-[#F5F5F5] tracking-tight mb-8">
              Bespoke Studio Competence
            </h3>
            <div className="flex flex-col gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-display font-medium text-slate-700 dark:text-slate-300">
                      {skill.name}
                    </span>
                    <span className="font-mono font-bold text-[#E2D1B3]">
                      {skill.percentage}%
                    </span>
                  </div>
                  {/* Progress track */}
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= TIMELINE MILESTONES ================= */}
        <div className="mb-32">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
            <span className="font-mono text-xs font-bold text-[#E2D1B3] uppercase tracking-widest block mb-4">
              CHRONOLOGY
            </span>
            <h2 className="font-sans font-light text-3xl sm:text-4xl text-slate-900 dark:text-[#F5F5F5] tracking-tight">
              A timeline of <span className="italic font-serif text-[#E2D1B3]">relentless digital</span> crafting.
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-[1px] before:bg-slate-200 dark:before:bg-white/10">
            
            {MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={milestone.id}
                  id={`milestone-${milestone.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Chrono Dot node */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-slate-200/50 dark:border-white/10 bg-slate-50 dark:bg-slate-950 flex items-center justify-center z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E2D1B3] shadow-md shadow-[#E2D1B3]/50" />
                  </div>

                  {/* Left block (occupies half width on desktop) */}
                  <div className="w-full md:w-1/2 px-6 flex justify-end">
                    {!isEven && (
                      <div className="glass-panel p-6 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#121212]/30 max-w-md w-full shadow-lg">
                        <span className="font-mono text-xs font-bold text-[#E2D1B3] mb-2 block">{milestone.year}</span>
                        <h4 className="font-serif font-semibold text-base text-slate-900 dark:text-[#F5F5F5] tracking-tight mb-2">{milestone.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-light leading-relaxed">{milestone.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Right block (occupies half width on desktop) */}
                  <div className="w-full md:w-1/2 px-6">
                    {isEven && (
                      <div className="glass-panel p-6 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#121212]/30 max-w-md w-full shadow-lg">
                        <span className="font-mono text-xs font-bold text-[#E2D1B3] mb-2 block">{milestone.year}</span>
                        <h4 className="font-serif font-semibold text-base text-slate-900 dark:text-[#F5F5F5] tracking-tight mb-2">{milestone.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-light leading-relaxed">{milestone.description}</p>
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= TEAM PROFILE SECTION ================= */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-xl">
              <span className="font-mono text-xs font-bold text-[#E2D1B3] uppercase tracking-widest block mb-4">
                THE COLLECTIVE
              </span>
              <h2 className="font-sans font-light text-3xl sm:text-4xl text-slate-900 dark:text-[#F5F5F5] tracking-tight">
                Craftsmen dedicated to the <span className="italic font-serif text-[#E2D1B3]">pixel grid</span>.
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed max-w-sm mt-4 md:mt-0">
              Meet our team of researchers, conceptual designers, full-stack engineers, and packaging architects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                id={`team-member-${member.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#121212]/30 shadow-xl"
              >
                {/* Profile Image container */}
                <div className="relative aspect-square w-full overflow-hidden">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Floating Social cards on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex items-center gap-3">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#E2D1B3] hover:border-[#E2D1B3] hover:text-black transition-all"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#E2D1B3] hover:border-[#E2D1B3] hover:text-black transition-all"
                          aria-label={`${member.name} Twitter`}
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#E2D1B3] hover:border-[#E2D1B3] hover:text-black transition-all"
                          aria-label={`${member.name} GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif font-semibold text-base text-slate-900 dark:text-[#F5F5F5] tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <span className="font-mono text-[10px] text-[#E2D1B3] tracking-wider uppercase font-bold block mb-3">
                    {member.role}
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= CERTIFICATIONS & ACCREDITATIONS ================= */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl border border-slate-200/50 dark:border-white/5 bg-slate-100/30 dark:bg-[#121212]/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#121212] shadow-sm text-[#E2D1B3] shrink-0 border border-slate-200/50 dark:border-white/10">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-serif font-semibold text-lg text-slate-900 dark:text-[#F5F5F5] tracking-tight mb-1">
                Verified Global Accreditations
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-light">
                Our design processes and engineering systems are fully certified for safety and top quality.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#1A1A1A] border border-slate-200/40 dark:border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#E2D1B3]" />
              <span className="font-mono text-[10px] font-bold tracking-wider text-slate-700 dark:text-slate-300">ISO-27001 SECURE</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#1A1A1A] border border-slate-200/40 dark:border-white/10">
              <Sparkles className="w-4 h-4 text-[#E2D1B3]" />
              <span className="font-mono text-[10px] font-bold tracking-wider text-slate-700 dark:text-slate-300">RED DOT CONCEPT 2024</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#1A1A1A] border border-slate-200/40 dark:border-white/10">
              <Heart className="w-4 h-4 text-[#E2D1B3]" />
              <span className="font-mono text-[10px] font-bold tracking-wider text-slate-700 dark:text-slate-300">W3C ACCESSIBLE WAI</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
