import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navbar({
  activeSection,
  onNavigate,
  darkMode,
  onToggleDarkMode
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "photos", label: "Photos" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setScrolled(window.scrollY > 20);

      // Page scroll progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-nav shadow-lg shadow-slate-900/5 dark:shadow-black/20"
          : "py-6 bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2.5px] bg-[#E2D1B3] transition-all duration-100" style={{ width: `${scrollProgress}%` }} />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavItemClick("home")}
          className="flex items-center gap-3 group cursor-pointer focus:outline-none"
        >
          <div className="w-7 h-7 bg-[#E2D1B3]/10 border border-[#E2D1B3]/40 rounded-full flex items-center justify-center shadow-md shadow-[#E2D1B3]/5 transition-transform duration-300 group-hover:scale-105">
            <span className="font-serif italic text-[#E2D1B3] text-xs font-semibold leading-none">g</span>
          </div>
          <span className="font-serif font-bold text-lg tracking-widest uppercase text-slate-900 dark:text-[#F5F5F5] transition-all">
            GRAPHICA<span className="text-[#E2D1B3]">.</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-[#121212]/50 p-1.5 rounded-full border border-slate-200/30 dark:border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className={`relative px-5 py-2 rounded-full font-display font-medium text-xs uppercase tracking-wider transition-all cursor-pointer focus:outline-none ${
                  isActive
                    ? "text-[#E2D1B3] dark:text-[#E2D1B3] font-semibold"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-[#F5F5F5]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-white dark:bg-[#1A1A1A] border border-[#E2D1B3]/10 shadow-md rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode Button */}
          <button
            id="nav-dark-toggle"
            onClick={onToggleDarkMode}
            className="p-2.5 rounded-full border border-slate-200/50 dark:border-white/10 bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#121212] transition-all cursor-pointer focus:outline-none"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4.5 h-4.5 text-[#E2D1B3]" /> : <Moon className="w-4.5 h-4.5 text-slate-700" />}
          </button>

          {/* Contact Button */}
          <button
            id="nav-cta-contact"
            onClick={() => handleNavItemClick("contact")}
            className="px-5 py-2.5 border border-slate-950/20 dark:border-white/10 hover:border-slate-950 dark:hover:border-white rounded-full text-[10px] font-display font-bold uppercase tracking-widest text-slate-950 dark:text-[#F5F5F5] hover:bg-slate-950 dark:hover:bg-[#F5F5F5] hover:text-white dark:hover:text-black transition-all cursor-pointer focus:outline-none"
          >
            Work with us
          </button>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex md:hidden items-center gap-3">
          {/* Theme Toggle */}
          <button
            id="nav-dark-toggle-mobile"
            onClick={onToggleDarkMode}
            className="p-2 rounded-full border border-slate-200/50 dark:border-white/10 bg-white/5 text-slate-700 dark:text-slate-300 focus:outline-none"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            id="nav-hamburger-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full border border-slate-200/50 dark:border-white/10 bg-white/5 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-t border-slate-200/50 dark:border-white/10 mt-3 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-2 p-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavItemClick(item.id)}
                    className={`flex items-center justify-between p-3 rounded-xl font-display font-medium text-sm transition-all ${
                      isActive
                        ? "bg-[#E2D1B3]/10 text-slate-900 dark:text-[#E2D1B3]"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/40"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E2D1B3]" />
                    )}
                  </button>
                );
              })}

              <button
                id="mobile-drawer-cta"
                onClick={() => handleNavItemClick("contact")}
                className="mt-4 w-full py-3.5 rounded-full font-display font-bold text-center text-xs tracking-widest uppercase text-white bg-slate-950 dark:bg-white dark:text-slate-950 hover:bg-opacity-90 transition-all focus:outline-none"
              >
                Work with us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
