import { Service, PortfolioItem, TeamMember, Testimonial, Milestone, CoreValue } from "./types";

export const SERVICES: Service[] = [
  {
    id: "ui-ux",
    title: "UI/UX Experience Design",
    description: "Crafting digital interfaces that feel natural, intuitive, and visually arresting. We combine strict research with world-class artistry.",
    icon: "Layers",
    features: ["User Research & Wireframing", "High-Fidelity UI Design", "Interactive Prototypes", "Design System Architecture"]
  },
  {
    id: "web-dev",
    title: "Full-Stack Development",
    description: "Engineering robust, ultra-fast, and scalable applications. Our clean code ensures flawless performance and security.",
    icon: "Cpu",
    features: ["Next.js & React Applications", "Custom API Integrations", "Optimized Core Web Vitals", "Headless CMS Setups"]
  },
  {
    id: "branding",
    title: "Brand Identity & Strategy",
    description: "Defining unique brand voices that resonate with target audiences and stand strong in competitive global markets.",
    icon: "Sparkles",
    features: ["Logo & Brand System Guidelines", "Tone of Voice Development", "Collateral & Print Design", "Creative Strategy & Audits"]
  },
  {
    id: "digital-growth",
    title: "Digital Strategy & SEO",
    description: "Maximizing visibility and conversion through data-driven campaigns, deep SEO optimization, and structural analysis.",
    icon: "TrendingUp",
    features: ["Structural SEO Audits", "Conversion Rate Optimization", "Data Analytics Setup", "Content Strategy Frameworks"]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "Chronos Holographic Smartwatch UI",
    category: "Branding",
    description: "A luxury smartwatch design blending high-end physical materials with an advanced holographic interface projection.",
    imageUrl: "/src/assets/images/portfolio_watch_1783275249078.jpg",
    client: "Chronos Labs",
    year: "2025",
    tags: ["UI/UX", "3D Modeling", "Branding"]
  },
  {
    id: "2",
    title: "Apex Wealth Mobile Fintech Portal",
    category: "Mobile",
    description: "A premium wealth management app facilitating secure multi-asset investments and dynamic, real-time portfolio tracking.",
    imageUrl: "/src/assets/images/portfolio_fintech_1783275262496.jpg",
    client: "Apex Capital",
    year: "2026",
    tags: ["Mobile App", "React Native", "Fintech"]
  },
  {
    id: "3",
    title: "Vesper Matte Bottle Packaging",
    category: "Branding",
    description: "High-end bespoke cosmetic packaging crafted using textured obsidian matte glass and gold leaf typography.",
    imageUrl: "/src/assets/images/portfolio_bottle_1783275277230.jpg",
    client: "Vesper Organic",
    year: "2025",
    tags: ["Packaging", "Visual Identity", "Sustainable Design"]
  },
  {
    id: "4",
    title: "Zenith Studio Website & Platform",
    category: "Web",
    description: "An ultra-fast headless web platform showcasing global design assets with interactive, GPU-accelerated motion experiences.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    client: "Zenith Creators",
    year: "2026",
    tags: ["Web Architecture", "Three.js", "Performance"]
  },
  {
    id: "5",
    title: "Nordic Haven Boutique Hotel Brand",
    category: "Branding",
    description: "Complete design ecosystem for a high-end Arctic retreat, capturing minimalism, safety, and local cultural details.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    client: "Nordic Haven",
    year: "2024",
    tags: ["Brand Ecosystem", "Signage", "Creative Direction"]
  },
  {
    id: "6",
    title: "Velo Intelligent Cycling Assistant",
    category: "Mobile",
    description: "A futuristic heads-up mobile navigation utility and tracking portal optimized for extreme road cyclists.",
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    client: "Velo Tech",
    year: "2025",
    tags: ["iOS Design", "Maps Integration", "IoT"]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    role: "Chief Executive Officer / Founder",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Sarah brings over 15 years of digital leadership experience, scaling tech products and steering creative direction for Fortune 500 brands.",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "t2",
    name: "Marcus Vance",
    role: "Creative Director",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Award-winning visual designer whose philosophy revolves around typographic elegance, bold color spaces, and architectural visual systems.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "t3",
    name: "Elena Rostova",
    role: "Head of Experience Design",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Passionate researcher and designer focused on accessibility, micro-interactions, and creating natural interfaces that flow effortlessly.",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "t4",
    name: "David Kross",
    role: "Lead Engineer",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "A functional programming enthusiast dedicated to sub-second bundle compilations, custom motion orchestration, and clean code security.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test1",
    name: "Katarina Lindqvist",
    role: "VP of Product",
    company: "Volvo Global",
    text: "Graphica redesigned our entire client dashboard ecosystem from scratch. The outcome has been stellar: user retention went up by 34%, and our loading performance improved tenfold.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "test2",
    name: "Aidan Sterling",
    role: "Founder",
    company: "Scribe AI",
    text: "Working with Graphica felt less like hiring a vendor and more like partnering with true craftsmen. They grasped our complex system immediately, turning highly dense AI workflows into an elegant, fluid experience.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "test3",
    name: "Naomi Takahashi",
    role: "Head of Marketing",
    company: "Mori Corp",
    text: "Their strategic brand identity development transformed how we launch new boutique lines. Graphica didn't just deliver beautiful logos; they curated a comprehensive emotional language for our business.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: "m1",
    year: "2021",
    title: "Agency Genesis",
    description: "Founded Graphica Creative with a vision of blending Swiss design minimalism with high-performance digital engineering."
  },
  {
    id: "m2",
    year: "2022",
    title: "Red Dot Accolade",
    description: "Awarded 'Best Digital Design Concept' at the Red Dot Gala for our groundbreaking immersive smartwatch user interface."
  },
  {
    id: "m3",
    year: "2023",
    title: "Global Reach",
    description: "Expanded our operations across Stockholm, London, and Tokyo, establishing custom client strategy pipelines."
  },
  {
    id: "m4",
    year: "2024",
    title: "Carbon-Neutral Digital",
    description: "Pioneered sustainable green hosting setups and ultra-light bundle designs, reducing web-experience footprints by 60%."
  },
  {
    id: "m5",
    year: "2025",
    title: "Web3 & Holography Ventures",
    description: "Launched secure interactive interfaces for next-generation smart-wearables and real-world augmented layouts."
  },
  {
    id: "m6",
    year: "2026",
    title: "The Next Era",
    description: "Spearheading immersive, privacy-focused design ecosystems that combine local security with beautiful fluid layouts."
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: "cv1",
    title: "Absolute Simplicity",
    description: "We strip away clutter to reveal the essential form. Noise is the enemy of premium brand engagement.",
    icon: "ShieldAlert"
  },
  {
    id: "cv2",
    title: "Pristine Execution",
    description: "Sub-pixel alignments, consistent spacing, and flawless code. Craftsmanship is visible in what is unseen.",
    icon: "CheckCircle2"
  },
  {
    id: "cv3",
    title: "Human-First Innovation",
    description: "Technology must adapt to human biology and intuition, not the other way around. Accessibility is standard.",
    icon: "Heart"
  },
  {
    id: "cv4",
    title: "Sustained Evolution",
    description: "Design is a living, breathing interface. We build scalable systems that grow with your company.",
    icon: "RefreshCw"
  }
];
