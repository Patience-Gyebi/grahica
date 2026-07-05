import { useState, FormEvent, ChangeEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Twitter, Github, Sparkles, Map } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FormFields {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

interface Office {
  city: string;
  country: string;
  address: string;
  phone: string;
  hours: string;
  timeZone: string;
  x: string; // SVG relative coordinate
  y: string; // SVG relative coordinate
}

export default function Contact() {
  // Form states
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Active Office selector states
  const offices: Office[] = [
    {
      city: "Stockholm",
      country: "Sweden",
      address: "Sveavägen 44, 111 34 Stockholm",
      phone: "05025830",
      hours: "09:00 - 18:00 (GMT+1)",
      timeZone: "Europe/Stockholm",
      x: "48%",
      y: "28%"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "12 Clerkenwell Rd, London EC1M 5PQ",
      phone: "+44 (0) 20 7123 4567",
      hours: "09:00 - 18:00 (GMT)",
      timeZone: "Europe/London",
      x: "44%",
      y: "32%"
    },
    {
      city: "Tokyo",
      country: "Japan",
      address: "2 Chome-2-1 Shinjuku, Tokyo 160-0022",
      phone: "+81 (0) 3 5321 1111",
      hours: "10:00 - 19:00 (GMT+9)",
      timeZone: "Asia/Tokyo",
      x: "78%",
      y: "45%"
    }
  ];

  const [activeOffice, setActiveOffice] = useState<Office>(offices[0]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!fields.name.trim()) nextErrors.name = "Full name is required.";
    else if (fields.name.length < 2) nextErrors.name = "Name must be at least 2 characters.";

    if (!fields.email.trim()) nextErrors.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) nextErrors.email = "Please specify a valid email address.";

    if (!fields.service) nextErrors.service = "Please select a service project category.";

    if (!fields.message.trim()) nextErrors.message = "Message cannot be empty.";
    else if (fields.message.length < 10) nextErrors.message = "Message must contain at least 10 characters.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate premium backend post latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset fields
      setFields({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Glow shapes */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-[#E2D1B3]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/10 right-1/10 w-96 h-96 bg-[#E2D1B3]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs font-bold text-[#E2D1B3] uppercase tracking-widest block mb-4">
            INITIATE ENGAGEMENT
          </span>
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-slate-900 dark:text-[#F5F5F5] tracking-tight">
            Let's construct your next <span className="italic font-serif text-[#E2D1B3]">digital asset</span>.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-light mt-3">
            Submit details about your system and timeline. Our product team replies in 4 hours.
          </p>
        </div>

        {/* ================= DETAILS & FORM SPLIT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          
          {/* Left Block: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-serif font-semibold text-xl text-slate-900 dark:text-[#F5F5F5] mb-2 tracking-tight">
              Graphica Coordinates
            </h3>

            {/* Address card */}
            <div className="p-6 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#121212]/30 hover:shadow-lg transition-all duration-300 flex gap-4">
              <div className="p-3.5 rounded-xl bg-[#E2D1B3]/10 text-[#E2D1B3] h-fit shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[9px] text-slate-400 tracking-wider uppercase font-bold block mb-1">HQ ADDRESS</span>
                <p className="text-slate-800 dark:text-slate-200 text-sm font-light leading-relaxed">
                  Sveavägen 44, Suite 10, Stockholm, Sweden
                </p>
              </div>
            </div>

            {/* Email card */}
            <div className="p-6 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#121212]/30 hover:shadow-lg transition-all duration-300 flex gap-4">
              <div className="p-3.5 rounded-xl bg-[#E2D1B3]/10 text-[#E2D1B3] h-fit shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[9px] text-slate-400 tracking-wider uppercase font-bold block mb-1">STUDIO INBOX</span>
                <a href="mailto:graphicagh.@gmai.com" className="text-[#E2D1B3] hover:opacity-80 text-sm font-light leading-relaxed">
                  graphicagh.@gmai.com
                </a>
              </div>
            </div>

            {/* Phone card */}
            <div className="p-6 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#121212]/30 hover:shadow-lg transition-all duration-300 flex gap-4">
              <div className="p-3.5 rounded-xl bg-[#E2D1B3]/10 text-[#E2D1B3] h-fit shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[9px] text-slate-400 tracking-wider uppercase font-bold block mb-1">TELEPHONY</span>
                <a href="tel:05025830" className="text-slate-800 dark:text-slate-200 hover:text-[#E2D1B3] transition-colors text-sm font-light leading-relaxed">
                  05025830
                </a>
              </div>
            </div>

            {/* Hours card */}
            <div className="p-6 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#121212]/30 hover:shadow-lg transition-all duration-300 flex gap-4">
              <div className="p-3.5 rounded-xl bg-[#E2D1B3]/10 text-[#E2D1B3] h-fit shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[9px] text-slate-400 tracking-wider uppercase font-bold block mb-1">BUSINESS HOURS</span>
                <p className="text-slate-800 dark:text-slate-200 text-sm font-light leading-relaxed">
                  Mon - Fri: 09:00 - 18:00 (GMT+1)
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Dynamic Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-slate-900/30 shadow-xl shadow-slate-900/5 dark:shadow-black/10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    noValidate
                  >
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-sans font-medium text-xs text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={fields.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name
                            ? "border-rose-500/60 focus:ring-rose-500/15 focus:border-rose-500"
                            : "border-slate-200 dark:border-white/10 focus:ring-[#E2D1B3]/15 focus:border-[#E2D1B3]"
                        } bg-slate-50/50 dark:bg-slate-950/30 text-slate-900 dark:text-white text-sm outline-none transition-all`}
                      />
                      {errors.name && <span className="text-[11px] text-rose-500">{errors.name}</span>}
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-sans font-medium text-xs text-slate-700 dark:text-slate-300">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={fields.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.email
                              ? "border-rose-500/60 focus:ring-rose-500/15 focus:border-rose-500"
                              : "border-slate-200 dark:border-white/10 focus:ring-[#E2D1B3]/15 focus:border-[#E2D1B3]"
                          } bg-slate-50/50 dark:bg-slate-950/30 text-slate-900 dark:text-white text-sm outline-none transition-all`}
                        />
                        {errors.email && <span className="text-[11px] text-rose-500">{errors.email}</span>}
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="font-sans font-medium text-xs text-slate-700 dark:text-slate-300">
                          Phone Number (Optional)
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={fields.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 focus:ring-[#E2D1B3]/15 focus:border-[#E2D1B3] bg-slate-50/50 dark:bg-slate-950/30 text-slate-900 dark:text-white text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Service requested */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="font-sans font-medium text-xs text-slate-700 dark:text-slate-300">
                        Project Category *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={fields.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.service
                            ? "border-rose-500/60 focus:ring-rose-500/15 focus:border-rose-500"
                            : "border-slate-200 dark:border-white/10 focus:ring-[#E2D1B3]/15 focus:border-[#E2D1B3]"
                        } bg-slate-50/50 dark:bg-slate-950/30 text-slate-900 dark:text-white text-sm outline-none transition-all`}
                      >
                        <option value="" disabled className="text-slate-400">Select standard branch...</option>
                        <option value="ui-ux" className="text-slate-900 dark:text-white">UI/UX Experience Design</option>
                        <option value="web-dev" className="text-slate-900 dark:text-white">Full-Stack Development</option>
                        <option value="branding" className="text-slate-900 dark:text-white">Brand Ecosystem & Strategy</option>
                        <option value="growth" className="text-slate-900 dark:text-white">Digital Strategy & Growth SEO</option>
                      </select>
                      {errors.service && <span className="text-[11px] text-rose-500">{errors.service}</span>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-sans font-medium text-xs text-slate-700 dark:text-slate-300">
                        Project Description / Brief *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={fields.message}
                        onChange={handleChange}
                        placeholder="Tell us about your company and project requirements..."
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.message
                            ? "border-rose-500/60 focus:ring-rose-500/15 focus:border-rose-500"
                            : "border-slate-200 dark:border-white/10 focus:ring-[#E2D1B3]/15 focus:border-[#E2D1B3]"
                        } bg-slate-50/50 dark:bg-slate-950/30 text-slate-900 dark:text-white text-sm outline-none transition-all resize-none`}
                      />
                      {errors.message && <span className="text-[11px] text-rose-500">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-xl font-serif italic font-medium text-sm tracking-wide uppercase text-slate-950 bg-[#E2D1B3] hover:bg-white border border-[#E2D1B3]/20 hover:shadow-lg transition-all cursor-pointer focus:outline-none disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Transmit Proposal</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 animate-bounce" />
                    </div>
                    <h4 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white mb-3 tracking-tight">
                      Proposal Transmitted!
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-light max-w-sm mb-8 leading-relaxed">
                      Thank you. Your project brief has been logged into our secure portal. 
                      Our lead experience architect will reach out via your email in less than 4 hours.
                    </p>
                    <button
                      id="contact-reset-btn"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-full border border-slate-200 dark:border-white/10 text-xs font-display font-semibold uppercase text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer focus:outline-none"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* ================= INTERACTIVE WORLD OFFICE MAP ================= */}
        <div id="interactive-map-section" className="pt-24 border-t border-slate-200 dark:border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Map info side */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="font-mono text-xs font-bold text-[#E2D1B3] uppercase tracking-widest block mb-4">
                GLOBAL NETWORKS
              </span>
              <h3 className="font-sans font-light text-2xl sm:text-3xl text-slate-900 dark:text-[#F5F5F5] tracking-tight mb-4">
                Connected globally, acting <span className="italic font-serif text-[#E2D1B3]">locally</span>.
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed mb-8">
                Click any active pin on our vector terminal map on the right to focus our coordinates, localized team hours, and direct voice telephony lines.
              </p>

              {/* Office selector buttons */}
              <div className="flex flex-col gap-3 w-full">
                {offices.map((office) => {
                  const isActive = activeOffice.city === office.city;
                  return (
                    <button
                      key={office.city}
                      onClick={() => setActiveOffice(office)}
                      className={`text-left p-5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer focus:outline-none ${
                        isActive
                          ? "border-[#E2D1B3] bg-[#E2D1B3]/5 dark:bg-[#E2D1B3]/10 shadow-md"
                          : "border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/10 hover:bg-slate-100 dark:hover:bg-slate-900/30"
                      }`}
                    >
                      <div>
                        <span className="font-serif font-semibold text-sm text-slate-900 dark:text-[#F5F5F5] block">
                          {office.city}, {office.country}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400">
                          {office.phone}
                        </span>
                      </div>
                      <span className={`w-2 h-2 rounded-full ${isActive ? "bg-[#E2D1B3] animate-pulse" : "bg-slate-300 dark:bg-slate-700"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Vector Map Side */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-4 shadow-xl aspect-16/10 flex items-center justify-center overflow-hidden">
                
                {/* Custom Elegant World Map SVG */}
                <svg className="w-full h-full text-slate-200 dark:text-slate-800/60 opacity-60 dark:opacity-40" viewBox="0 0 1000 500" fill="currentColor">
                  {/* North America */}
                  <path d="M150,150 L250,130 L300,180 L250,280 L200,320 L120,250 Z" />
                  {/* South America */}
                  <path d="M220,330 L280,350 L320,420 L270,480 L240,430 Z" />
                  {/* Eurasia/Africa */}
                  <path d="M420,150 L550,100 L700,120 L800,150 L900,160 L850,280 L750,300 L650,220 L580,260 Z" />
                  <path d="M440,240 L500,280 L520,380 L460,400 L430,320 Z" />
                  {/* Australia */}
                  <path d="M780,360 L850,370 L870,420 L800,430 Z" />
                </svg>

                {/* Pin Overlays with labels */}
                {offices.map((office) => {
                  const isActive = activeOffice.city === office.city;
                  return (
                    <button
                      key={office.city}
                      onClick={() => setActiveOffice(office)}
                      className="absolute group transform -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
                      style={{ left: office.x, top: office.y }}
                    >
                      {/* Pulsing ring */}
                      <span className={`absolute -inset-4 rounded-full transition-all ${isActive ? "bg-[#E2D1B3]/25 animate-ping" : "bg-transparent group-hover:bg-[#E2D1B3]/10"}`} />
                      
                      {/* Vector Pin dot */}
                      <span className={`w-3.5 h-3.5 rounded-full border-2 border-white shadow-md block relative z-10 transition-transform ${isActive ? "bg-[#E2D1B3] scale-120" : "bg-slate-400 dark:bg-slate-600 group-hover:scale-110"}`} />
                      
                      {/* Name card focus label */}
                      <span className={`absolute top-6 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-[8px] font-mono tracking-widest font-bold uppercase whitespace-nowrap bg-slate-900 text-white shadow-lg pointer-events-none transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-80"}`}>
                        {office.city}
                      </span>
                    </button>
                  );
                })}

                {/* Selected Office Details Overlay card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-panel border border-white/20 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[9px] text-[#E2D1B3] tracking-widest uppercase font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#E2D1B3] animate-spin-slow" />
                      SELECTED TERMINAL
                    </span>
                    <span className="font-serif font-semibold text-base text-slate-900 dark:text-[#F5F5F5]">
                      Graphica {activeOffice.city}
                    </span>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-light max-w-sm leading-relaxed">
                      {activeOffice.address}
                    </p>
                  </div>
                  
                  <div className="flex flex-col text-left sm:text-right text-xs gap-1">
                    <span className="font-mono text-slate-400 font-medium">{activeOffice.hours}</span>
                    <span className="font-serif font-semibold text-[#E2D1B3] dark:text-[#E2D1B3]">{activeOffice.phone}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
