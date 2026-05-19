import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ServiceContactForm } from '@/components/ServiceContactForm';
import { 
  Palette, Laptop, BarChart3, Target, Sparkles, CheckCircle2, 
  HelpCircle, ChevronDown, ArrowRight, Layers, FileText, 
  Search, ShieldCheck, Zap, Mail, User
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute('/what-we-do/design-digital-marketing')({
  component: DesignDigitalMarketingPage,
});

const proofStats = [
  { value: "140+", label: "Campaigns launched" },
  { value: "380+", label: "Landing pages shipped" },
  { value: "14 Days", label: "Avg. turnaround time" },
  { value: "94%", label: "Client retention" }
];

const capabilityCards = [
  {
    title: "Brand Identity & UI Systems",
    description: "Establish a cohesive, premium visual language that builds instant credibility and scales seamlessly across all digital touchpoints.",
    icon: Palette,
    gradient: "from-amber-500 to-orange-500",
    tag: "Aesthetics"
  },
  {
    title: "Web & Landing Page Design",
    description: "Deploy high-converting, responsive web experiences engineered with user-centric layouts to maximize lead generation.",
    icon: Laptop,
    gradient: "from-amber-600 to-red-500",
    tag: "Performance"
  },
  {
    title: "SEO & Content Strategy",
    description: "Capture high-intent search traffic and establish industry authority through data-backed keywords and content models.",
    icon: BarChart3,
    gradient: "from-orange-500 to-amber-700",
    tag: "Compounding"
  },
  {
    title: "Paid Ads & Performance Creative",
    description: "Fuel your acquisition funnel with high-impact, scroll-stopping visual assets designed to reduce CAC and drive conversions.",
    icon: Target,
    gradient: "from-amber-500 to-amber-900",
    tag: "Acquisition"
  }
];

const largeValueCards = [
  {
    title: "Design That Converts",
    subtitle: "UX / CRO / MESSAGE HIERARCHY",
    description: "Visual beauty is meaningless without structural purpose. We design digital interfaces anchored in user behavior, implementing strategic conversion rate optimization (CRO), intuitive visual hierarchy, and persuasive messaging that guides prospects seamlessly toward your primary call to action.",
    bullets: [
      "Scientific A/B tested checkout layouts",
      "High-impact responsive visual assets",
      "Behavioral-mapped customer journeys",
      "Dynamic copy & messaging matrices"
    ],
    highlight: "text-amber-600 border-amber-200 bg-amber-50"
  },
  {
    title: "Growth That Compounds",
    subtitle: "SEO / RETARGETING / ANALYTICS",
    description: "Paid traffic stops when your budget does, but compounding growth never sleeps. By unifying systematic SEO, high-authority thought leadership content, automated lifecycle email nurture, and granular web analytics, we build a marketing engine that lowers acquisition costs over time.",
    bullets: [
      "Advanced multi-channel attribution paths",
      "Semantic SEO content maps that dominate search",
      "High-retention behavior-based retargeting",
      "GA4 full-funnel custom event tracking"
    ],
    highlight: "text-orange-600 border-orange-200 bg-orange-50"
  }
];

const deliverablesList = [
  "Brand Guidelines & Visual Assets",
  "Custom UI Component Libraries",
  "High-Converting Landing Pages",
  "Multi-Channel Paid Ad Creatives",
  "SEO Content Briefs & Articles",
  "Performance Dashboard & Reporting Template",
  "Interactive Prototyping",
  "Conversion Rate Optimization Audits"
];

const campaignTypesList = [
  "B2B Lead Generation",
  "Enterprise Product Launch",
  "Localized SEO Strategy",
  "SaaS User Onboarding",
  "Paid Search & Social Retargeting",
  "Inbound Content Marketing"
];

const iconFeatures = [
  {
    title: "Conversion-First UX",
    description: "We eliminate friction at every step of the customer journey, designing intuitive user pathways that turn passive visitors into engaged leads.",
    icon: Sparkles
  },
  {
    title: "Performance Tracking",
    description: "We set up robust tracking architectures—integrating GA4, custom events, and advertising pixels—to deliver perfect attribution data.",
    icon: Layers
  },
  {
    title: "Iteration & A/B Testing",
    description: "Our design process never stands still. We continuously run A/B split tests on key pages to refine layouts, optimize copy, and boost ROI.",
    icon: Target
  }
];

const toolStackStrip = [
  "Figma", "Webflow", "WordPress", "GA4", "Search Console", "Meta Ads", "Google Ads", "HubSpot"
];

const faqItems = [
  {
    question: "How is the success of our design and marketing campaigns measured?",
    answer: "We track core performance indicators including conversion rates, customer acquisition cost (CAC), organic traffic growth, and sales pipeline contribution, aligning our goals directly with your business metrics."
  },
  {
    question: "What are the typical timelines for a custom website design project?",
    answer: "A standard web or landing page project takes between 4 to 8 weeks, covering research, wireframing, UI design, client feedback, and final front-end development."
  },
  {
    question: "What specific deliverables will we receive at the end of the project?",
    answer: "Depending on your scope, you will receive fully editable Figma source files, customized brand identity kits, production-ready code or Webflow staging links, and automated tracking dashboards."
  },
  {
    question: "How do you manage paid advertising budgets and ad spend?",
    answer: "Ad spend is billed directly to your corporate payment method. We charge a flat management fee or percentage of spend to optimize your accounts, ensuring complete transparency with zero hidden markups."
  },
  {
    question: "How long does it take to start seeing measurable results from SEO?",
    answer: "SEO is a compounding long-term investment. While technical updates can yield quick indexation wins, meaningful organic ranking increases and traffic growth typically materialize within 3 to 6 months."
  },
  {
    question: "Who owns the creative assets, code, and copy generated during campaigns?",
    answer: "You do. Upon receipt of final payment, full intellectual property rights for all creative designs, copies, marketing assets, and development code are transferred entirely to your organization."
  },
  {
    question: "What is your revision policy if we need design adjustments?",
    answer: "We include two comprehensive rounds of revisions in our standard agreements. We collaborate closely via Figma comments to ensure iterations are fast, precise, and fully aligned with your vision."
  },
  {
    question: "What is your reporting cadence and how will we stay informed?",
    answer: "We provide automated weekly data dashboards alongside detailed monthly performance reports, complemented by bi-weekly strategy calls to review metrics, progress, and upcoming milestones."
  }
];

function DesignDigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'deliverables' | 'campaigns'>('deliverables');
  
  // Interactive Live Wireframe variables
  const [activeLayoutBlock, setActiveLayoutBlock] = useState<string>('hero');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [visitorCount, setVisitorCount] = useState<number>(3148);

  const shouldReduceMotion = useReducedMotion();

  const sectionTransition = {
    duration: shouldReduceMotion ? 0.01 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const
  };

  const getSectionReveal = () => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: sectionTransition
  });

  const getGridContainer = () => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" },
    variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: shouldReduceMotion ? 0 : 0.12
        }
      }
    }
  });

  const getGridItem = () => ({
    variants: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0.01 : 0.6,
          ease: [0.16, 1, 0.3, 1] as const
        }
      }
    }
  });

  useEffect(() => {
    document.title = "Design & Digital Marketing | WAVELET";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFECB3] font-sans text-slate-900 antialiased selection:bg-amber-500 selection:text-white overflow-x-hidden pt-16">
      <SiteHeader />

      <main>
        {/* 1. Hero Section - Strictly `#FFD54F` backdrop with dark-contrast text */}
        <section className="relative px-4 py-10 sm:py-12 overflow-hidden border-b border-amber-200 bg-[#FFD54F] text-slate-900">
          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Content (All text conforms to the dark-contrast rule) */}
            <div className="lg:col-span-7 relative z-10 text-left">
              <motion.span 
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={sectionTransition}
                className="inline-flex items-center gap-2 rounded-full bg-amber-200/60 border border-amber-600/30 px-4.5 py-1.5 text-xs sm:text-sm font-black tracking-widest uppercase text-amber-950 shadow-sm mb-4"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-800" />
                Growth & Creative Agency Suite
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-4 text-slate-950"
              >
                Turn Digital Identity <br className="hidden sm:inline" />
                Into <span className="bg-gradient-to-r from-slate-950 via-amber-950 to-orange-800 bg-clip-text text-transparent">Measurable Pipeline.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
                className="text-base sm:text-lg text-slate-800 font-bold max-w-2xl leading-relaxed mb-6"
              >
                We combine high-performance UX design with ROI-focused digital marketing to build a brand that attracts interest and converts traffic into compound revenue.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
              >
                <Link to="/contact" className="w-full sm:w-auto rounded-full bg-slate-900 text-white font-bold px-8 py-4 hover:bg-slate-800 active:scale-95 transition-all text-sm cursor-pointer shadow-md text-center">
                  Get Started Now
                </Link>
                <Link to="/contact" className="w-full sm:w-auto rounded-full bg-white/80 border border-amber-900/20 text-slate-900 font-bold px-8 py-4 hover:bg-white hover:scale-[1.02] active:scale-95 transition-all text-sm backdrop-blur cursor-pointer shadow-sm text-center">
                  Request a Marketing Audit
                </Link>
              </motion.div>

              {/* Traffic Counter Badge */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.5 }}
                className="mt-6 flex items-center gap-2.5 text-xs font-black text-slate-800 uppercase tracking-widest"
              >
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
                </span>
                <span>Active global traffic cycles: <strong className="text-slate-950 font-extrabold">{visitorCount.toLocaleString()}</strong></span>
              </motion.div>
            </div>

            {/* Right: Live Interactive UX Engine (Elevated container) */}
            <div className="lg:col-span-5 relative z-10 w-full">
              <motion.div
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
                className="relative bg-white border border-amber-200 rounded-[2rem] p-5 shadow-lg backdrop-blur-md overflow-hidden"
              >
                {/* Header controls */}
                <div className="flex items-center justify-between pb-3 border-b border-amber-100 mb-4">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-orange-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-600" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/60">
                    Live CRO Simulator
                  </span>
                </div>

                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">
                  Interactive Grid Editor: Click elements to optimize layout
                </p>

                {/* Wireframe Editor Canvas */}
                <div className="space-y-2 bg-amber-50/50 rounded-xl p-3 border border-amber-200/60 min-h-[180px] flex flex-col justify-between">
                  
                  {/* Dynamic Wireframe Header */}
                  <div 
                    onClick={() => setActiveLayoutBlock('header')}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                      activeLayoutBlock === 'header' 
                        ? 'border-amber-500 bg-amber-100/50 shadow-sm text-slate-900 font-extrabold' 
                        : 'border-amber-200 bg-white hover:border-amber-400 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-amber-600" />
                      <span className="text-[10px] font-extrabold tracking-tight">Interactive Header Navigation</span>
                    </div>
                    <span className="text-[9px] font-extrabold text-amber-600">Fixed Sticky</span>
                  </div>

                  {/* Dynamic Wireframe Hero */}
                  <div 
                    onClick={() => setActiveLayoutBlock('hero')}
                    className={`p-3 rounded-lg border transition-all cursor-pointer flex flex-col gap-1.5 ${
                      activeLayoutBlock === 'hero' 
                        ? 'border-orange-500 bg-orange-50 shadow-sm text-slate-900 font-extrabold' 
                        : 'border-amber-200 bg-white hover:border-amber-400 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Palette className="w-3.5 h-3.5 text-orange-500" />
                        <span className="text-[10px] font-extrabold tracking-tight">Visual Hero & Split Mockup</span>
                      </div>
                      <span className="text-[9px] font-extrabold text-orange-600">98% Conversion Heat</span>
                    </div>
                    <div className="h-1 bg-amber-200 rounded-full w-3/4 overflow-hidden">
                      <div className="h-full bg-amber-500 w-11/12 animate-pulse" />
                    </div>
                  </div>

                  {/* Dynamic Wireframe Lead Form */}
                  <div 
                    onClick={() => setActiveLayoutBlock('form')}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                      activeLayoutBlock === 'form' 
                        ? 'border-amber-600 bg-amber-50 shadow-sm text-slate-900 font-extrabold' 
                        : 'border-amber-200 bg-white hover:border-amber-400 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Target className="w-3.5 h-3.5 text-amber-600" />
                      <span className="text-[10px] font-extrabold tracking-tight">High-Converting Lead Capture Form</span>
                    </div>
                    <span className="text-[9px] font-extrabold text-amber-600">CRO Enabled</span>
                  </div>

                </div>

                {/* Inspector detail panel */}
                <div className="mt-3 pt-3 border-t border-amber-100 bg-white rounded-xl p-3 min-h-[90px] flex flex-col justify-between shadow-sm">
                  <AnimatePresence mode="wait">
                    {activeLayoutBlock === 'header' && (
                      <motion.div
                        key="header"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-1"
                      >
                        <h4 className="text-[10px] font-black text-amber-700 uppercase tracking-wider">Aesthetics Focus: Brand System</h4>
                        <p className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                          Aligns logo structures with navigation pillars. Enforces instant load speeds and zero layout shifts (CLS) to secure early visitor confidence.
                        </p>
                      </motion.div>
                    )}
                    {activeLayoutBlock === 'hero' && (
                      <motion.div
                        key="hero"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-1"
                      >
                        <h4 className="text-[10px] font-black text-orange-600 uppercase tracking-wider">Conversion Focus: Visual Heat</h4>
                        <p className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                          Splits content to display premium brand aesthetics on one side and structured, conversion-driven primary CTAs on the other, increasing average session duration by 42%.
                        </p>
                      </motion.div>
                    )}
                    {activeLayoutBlock === 'form' && (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-1"
                      >
                        <h4 className="text-[10px] font-black text-amber-800 uppercase tracking-wider">Acquisition Focus: Live Validation</h4>
                        <p className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                          Optimized dynamic labels, clean field triggers, and multi-step micro-interactions that lower user submission anxiety and elevate submission rates by up to 28%.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-3 pt-2 border-t border-amber-50 flex justify-between items-center text-[9px] text-slate-500 font-extrabold uppercase">
                    <span>Target optimization</span>
                    <span className="text-slate-900 font-black">Conversion Matrix v3.2</span>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </section>

        {/* 2. ProofStats Section - Compact white elevated grid floating over yellow body */}
        <motion.section 
          {...getSectionReveal()}
          className="py-6 sm:py-8 px-4 max-w-7xl mx-auto"
        >
          <motion.div 
            {...getGridContainer()}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {proofStats.map((stat, i) => (
              <motion.div
                key={i}
                {...getGridItem()}
                className="bg-white border border-amber-200/60 rounded-2xl p-5 sm:p-6 text-center hover:border-amber-400 transition-all shadow-md"
              >
                <div className="text-3xl sm:text-4xl font-black mb-1 tracking-tight bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-black text-slate-600 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 3. CapabilityCards Section - Elevated pure white panels with warm custom watermarks */}
        <motion.section 
          {...getSectionReveal()}
          className="py-6 sm:py-8 px-4 max-w-7xl mx-auto"
        >
          <div className="text-center mb-6 flex flex-col items-center">
            <span className="text-[9px] uppercase tracking-[0.4em] text-amber-600 font-black mb-1">Core Expertise</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-none">Capability Matrix</h2>
          </div>

          <motion.div 
            {...getGridContainer()}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {capabilityCards.map((cap, i) => {
              const CapIcon = cap.icon;
              return (
                <motion.div 
                  key={i} 
                  {...getGridItem()}
                  whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
                  className="group relative bg-white border border-amber-200/60 rounded-2xl p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:border-amber-400 hover:shadow-md flex flex-col justify-between min-h-[250px]"
                >
                  {/* Glowing background watermark SVG */}
                  <CardIllustration type={cap.title} />

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200 shadow-inner">
                        <CapIcon className="w-5 h-5 stroke-[1.8px]" />
                      </div>
                      <span className="text-[8px] font-extrabold uppercase tracking-widest text-amber-850 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                      {cap.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-3 flex items-center gap-1 text-[9px] text-slate-500 font-black uppercase tracking-widest group-hover:text-amber-700 transition-colors">
                    <span>Explore System</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* 4. LargeValueCards Section - White rounded-[2.5rem] panels with custom SVGs */}
        <motion.section 
          {...getSectionReveal()}
          className="py-6 sm:py-8 px-4 max-w-7xl mx-auto"
        >
          <div className="text-center mb-6 flex flex-col items-center">
            <span className="text-[9px] uppercase tracking-[0.4em] text-orange-600 font-black mb-1">Transforming Digital Presence</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-none">Operational Strategy</h2>
          </div>

          <motion.div 
            {...getGridContainer()}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {largeValueCards.map((card, i) => (
              <motion.div 
                key={i} 
                {...getGridItem()}
                className="relative bg-white border border-amber-200 rounded-[2.5rem] p-6 sm:p-8 overflow-hidden shadow-md"
              >
                {/* Tech background element */}
                <CardIllustration type={String(i)} />

                <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                  <div>
                    <div className="flex items-center justify-between border-b border-amber-100 pb-4 mb-4">
                      <span className="text-[9px] font-black text-amber-700 uppercase tracking-widest block">
                        {card.subtitle}
                      </span>
                      <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded-md border ${card.highlight}`}>
                        Module 0{i + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold mb-4">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-amber-100">
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-3">
                      Integrated Systems
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {card.bullets.map((b, idx) => (
                        <div key={idx} className="flex gap-2 items-start text-xs font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 5. ServiceDetailsLists Section - Elevated Interactive container */}
        <motion.section 
          {...getSectionReveal()}
          className="py-6 sm:py-8 px-4 max-w-7xl w-full mx-auto"
        >
          <div className="bg-white border border-amber-200 rounded-[2.5rem] p-6 sm:p-8 shadow-md relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
              
              <div className="lg:col-span-5 text-left">
                <span className="text-[9px] uppercase tracking-[0.4em] text-amber-600 font-black mb-1 block">Comprehensive Execution</span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-none mb-4">
                  WAVELET Service Ecosystem
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6 font-semibold">
                  We maintain full accountability from pixel-perfect layout designs to multi-network conversion reports. Explore what we deploy below.
                </p>

                {/* Selectors */}
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setActiveTab('deliverables')}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left font-black transition-all w-full cursor-pointer text-xs ${
                      activeTab === 'deliverables'
                        ? 'bg-amber-100/60 border-amber-500 text-slate-900 shadow-sm'
                        : 'bg-amber-50/40 border-amber-100 text-slate-650 hover:border-amber-300'
                    }`}
                  >
                    <span>Core Deliverables Shipped</span>
                    <FileText className={`w-4 h-4 transition-transform ${activeTab === 'deliverables' ? 'text-amber-600 scale-110' : ''}`} />
                  </button>
                  <button 
                    onClick={() => setActiveTab('campaigns')}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left font-black transition-all w-full cursor-pointer text-xs ${
                      activeTab === 'campaigns'
                        ? 'bg-amber-100/60 border-amber-500 text-slate-900 shadow-sm'
                        : 'bg-amber-50/40 border-amber-100 text-slate-650 hover:border-amber-300'
                    }`}
                  >
                    <span>Integrated Campaign Types</span>
                    <Search className={`w-4 h-4 transition-transform ${activeTab === 'campaigns' ? 'text-amber-600 scale-110' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Display side inside elevated styling */}
              <div className="lg:col-span-7 bg-amber-50/50 border border-amber-100 rounded-2xl p-5 sm:p-6 min-h-[220px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeTab === 'deliverables' ? (
                    <motion.div
                      key="deliverables"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-amber-100">
                        <FileText className="w-4 h-4 text-amber-600" />
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Comprehensive Shipped Deliverables</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {deliverablesList.map((item, idx) => (
                          <div key={idx} className="flex gap-2 items-center text-xs font-semibold text-slate-800">
                            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="campaigns"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-amber-100">
                        <Search className="w-4 h-4 text-amber-600" />
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">High-Yield Campaign Implementations</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {campaignTypesList.map((item, idx) => (
                          <div key={idx} className="flex gap-2 items-center text-xs font-semibold text-slate-800">
                            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </motion.section>

        {/* 6. IconFeatures Section - White elevated panels */}
        <motion.section 
          {...getSectionReveal()}
          className="py-6 sm:py-8 px-4 max-w-7xl mx-auto"
        >
          <div className="text-center mb-6 flex flex-col items-center">
            <span className="text-[9px] uppercase tracking-[0.4em] text-amber-700 font-black mb-1">Unlock the Future</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-none">High-Acquisition Engine</h2>
          </div>

          <motion.div 
            {...getGridContainer()}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {iconFeatures.map((feat, i) => {
              const FeatIcon = feat.icon;
              return (
                <motion.div 
                  key={i} 
                  {...getGridItem()}
                  className="bg-white border border-amber-200/60 rounded-2xl p-5 sm:p-6 text-left hover:border-amber-400 transition-all flex flex-col gap-3 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shadow-inner">
                    <FeatIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-semibold">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* 7. ToolStackStrip Section - Spacing compressed */}
        <section className="py-4 bg-white border-y border-amber-200/60 overflow-hidden shadow-sm">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-3">
            <span className="text-[8px] uppercase tracking-[0.4em] text-slate-500 font-black">WAVELET High-Performance Stack</span>
            
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 opacity-70 hover:opacity-100 transition-all">
              {toolStackStrip.map((tool, i) => (
                <span 
                  key={i} 
                  className="text-base sm:text-lg font-extrabold tracking-tighter text-slate-700 hover:text-amber-700 transition-colors uppercase"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FAQ Section - Elevated accordion triggers inside clean white boxes */}
        <motion.section 
          {...getSectionReveal()}
          className="py-6 sm:py-8 px-4"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 flex flex-col items-center">
              <HelpCircle className="w-8 h-8 text-amber-600 mb-2 animate-bounce" />
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-none">Frequently Asked Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-2.5">
              {faqItems.map((item, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`} 
                  className="bg-white border border-amber-200/60 rounded-xl px-4 hover:border-amber-400 transition-colors shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="text-sm font-extrabold text-slate-850 hover:text-amber-700 hover:no-underline py-3.5 text-left cursor-pointer">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-655 leading-relaxed pb-3.5 text-xs sm:text-sm font-semibold">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.section>

        {/* 9. ContactCard Section */}
        <motion.section 
          {...getSectionReveal()}
          className="py-6 sm:py-8 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <ServiceContactForm
              layout="split"
              theme="amber"
              title="Let's Connect"
              description="Ready to build your digital presence? Our design and acquisition architects are prepared to map out your conversion goals."
              buttonText="Start My Free Audit"
              successHeading="Strategy Request Received!"
              successMessage="Our growth and design architects will review your objective checklist and reach out within 24 business hours."
              subject="WAVELET: Design & Marketing Inquiry"
              bullets={[
                { iconName: "zap", title: "Quick Response", subtitle: "Under 24 hours" },
                { iconName: "shield-check", title: "Secure Consultation", subtitle: "NDA Compliant" }
              ]}
              fields={[
                { name: "name", label: "Full Name", type: "text", placeholder: "Full Name", required: true },
                { name: "email", label: "Work Email", type: "email", placeholder: "you@company.com", required: true },
                { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your conversion objectives...", required: true }
              ]}
            />
          </div>
        </motion.section>

        {/* 10. FinalCTA Section - Strictly `#FFD54F` background block with dark-contrast texts */}
        <section className="py-10 px-4 bg-[#FFD54F] border-t border-amber-200/60 text-slate-950 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
              Ready to scale your digital presence?
            </h2>
            <p className="text-slate-800 text-sm sm:text-base mb-6 leading-relaxed max-w-2xl mx-auto font-bold">
              Connect with WAVELET solutions engineers to architect your B2B lead pipelines, visual UI systems, and high-yielding organic search strategies.
            </p>
            <Link to="/contact" className="inline-block rounded-full bg-slate-900 text-white font-bold px-10 py-4.5 hover:bg-slate-800 active:scale-95 transition-all text-sm cursor-pointer shadow-md text-center">
              Let's Talk
            </Link>
          </div>
        </section>
      </main>

      <EnterpriseFooter />
    </div>
  );
}

// Warm complementary watermark SVG illustrations mapping
function CardIllustration({ type }: { type: string }) {
  switch (type) {
    case "Brand Identity & UI Systems":
    case "0":
      return (
        <svg className="absolute inset-0 w-full h-full text-amber-500 pointer-events-none select-none -z-10 animate-pulse" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.1">
            <rect x="30" y="30" width="140" height="140" rx="8" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="45" />
            <path d="M30 100 L170 100" />
            <path d="M100 30 L100 170" />
            <circle cx="100" cy="100" r="3" fill="currentColor" />
          </g>
        </svg>
      );
    case "Web & Landing Page Design":
    case "1":
      return (
        <svg className="absolute inset-0 w-full h-full text-orange-500 pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.1">
            <rect x="25" y="40" width="150" height="120" rx="6" />
            <line x1="25" y1="65" x2="175" y2="65" />
            <circle cx="40" cy="52" r="3" fill="currentColor" />
            <circle cx="52" cy="52" r="3" fill="currentColor" />
            <circle cx="64" cy="52" r="3" fill="currentColor" />
            <rect x="40" y="80" width="55" height="35" rx="3" />
            <line x1="110" y1="85" x2="160" y2="85" strokeWidth="2" />
            <line x1="110" y1="98" x2="150" y2="98" />
            <line x1="110" y1="110" x2="140" y2="110" />
          </g>
        </svg>
      );
    case "SEO & Content Strategy":
    case "2":
      return (
        <svg className="absolute inset-0 w-full h-full text-amber-600 pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.1">
            <path d="M30 160 L70 120 L110 135 L170 70" strokeWidth="2" />
            <circle cx="30" cy="160" r="4" fill="currentColor" />
            <circle cx="70" cy="120" r="4" fill="currentColor" />
            <circle cx="110" cy="135" r="4" fill="currentColor" />
            <circle cx="170" cy="70" r="4" fill="currentColor" />
            <line x1="30" y1="170" x2="170" y2="170" />
            <line x1="30" y1="30" x2="30" y2="170" strokeDasharray="3 3" />
          </g>
        </svg>
      );
    case "Paid Ads & Performance Creative":
    case "3":
      return (
        <svg className="absolute inset-0 w-full h-full text-orange-600 pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.1">
            <circle cx="100" cy="100" r="70" strokeDasharray="6 4" />
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="100" r="15" />
            <line x1="100" y1="10" x2="100" y2="190" />
            <line x1="10" y1="100" x2="190" y2="100" />
            <polygon points="135,65 145,55 155,75" fill="currentColor" />
          </g>
        </svg>
      );
    default:
      return (
        <svg className="absolute inset-0 w-full h-full text-amber-500 pointer-events-none select-none -z-10 animate-pulse" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.1">
            <circle cx="100" cy="100" r="50" />
            <path d="M100 20 L100 180" />
            <path d="M20 100 L180 100" />
          </g>
        </svg>
      );
  }
}
