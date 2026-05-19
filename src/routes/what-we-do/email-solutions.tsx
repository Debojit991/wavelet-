import { createFileRoute, Link } from '@tanstack/react-router';
import { emailSolutionsData } from '@/data/emailSolutionsData';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { ServiceContactForm } from '@/components/ServiceContactForm';
import { 
  AlertCircle, ArrowRight, Check, CheckCircle2, 
  Activity, ShieldAlert, Zap, Mail, RefreshCw, 
  Archive, Lock, Key, Globe, Cog, TrendingUp, Building,
  ChevronDown, HelpCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const iconMap: Record<string, any> = {
  mail: Mail,
  "refresh-cw": RefreshCw,
  "shield-alert": ShieldAlert,
  archive: Archive,
  lock: Lock,
  key: Key,
  globe: Globe,
  cog: Cog,
  zap: Zap,
  "trending-up": TrendingUp,
  building: Building
};

// Programmatic mapping of the 12 checklist deliverables to their specific implementation steps
const stepDeliverables: Record<string, string[]> = {
  "step-discovery": [
    "Comprehensive environment audit and readiness assessment",
    "Verified DNS configuration (MX, SPF, DKIM, DMARC)"
  ],
  "step-security-assessment": [
    "Enforced Multi-Factor Authentication (MFA)",
    "Spam, phishing, and malware filtering policies",
    "Data Loss Prevention (DLP) rule configuration"
  ],
  "step-tenant-provisioning": [
    "Directory synchronization and SSO setup",
    "Mobile Device Management (MDM) profiles for email"
  ],
  "step-data-migration": [
    "High-fidelity mailbox, calendar, and contact migration"
  ],
  "step-cutover-dns": [
    "Compliance archiving and retention policies"
  ],
  "step-enduser-onboarding": [
    "Post-migration hyper-care support",
    "Comprehensive admin documentation and runbooks",
    "Automated onboarding and offboarding workflows"
  ]
};

const stepIcons: Record<string, any> = {
  "step-discovery": Globe,
  "step-security-assessment": ShieldAlert,
  "step-tenant-provisioning": Key,
  "step-data-migration": RefreshCw,
  "step-cutover-dns": Lock,
  "step-enduser-onboarding": Cog
};

export const Route = createFileRoute('/what-we-do/email-solutions')({
  component: EmailSolutionsRoute,
});

function EmailSolutionsRoute() {
  const { meta, sections } = emailSolutionsData;

  const hero = sections.find((s) => s.type === "hero") as any;
  const pio = sections.find((s) => s.type === "pain_impact_outcome") as any;
  const modules = sections.find((s) => s.type === "service_modules") as any;
  const journey = sections.find((s) => s.type === "implementation_journey") as any;
  const tabs = sections.find((s) => s.type === "tabs") as any;
  const useCases = sections.find((s) => s.type === "use_cases") as any;
  const faq = sections.find((s) => s.type === "faq") as any;
  const finalCta = sections.find((s) => s.type === "final_cta") as any;

  // State for consolidated Interactive Journey & Deliverables Dashboard
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  // States for Vertical Use Case Chronological Auto-Cycler
  const [activeUcIdx, setActiveUcIdx] = useState(0);

  // UseCase Autoplay execution hook: Advances index every 6 seconds, resetting the timer dynamically on step changes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUcIdx((prev) => (prev + 1) % useCases.items.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeUcIdx, useCases.items.length]);

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

  return (
    <div className="w-full bg-[#FFCDD2] min-h-screen font-sans text-slate-900 antialiased selection:bg-red-200 selection:text-red-950 overflow-x-hidden pt-20">
      
      {/* 1. Hero Section - Warm Red Background Override (#E57373) - Spacing Compressed */}
      <section className="relative px-4 py-8 sm:py-10 flex flex-col items-center text-center bg-[#E57373] overflow-hidden">
        {/* Subtle geometric structural pattern overlay */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={sectionTransition}
            className="inline-flex items-center gap-2 rounded-full bg-white/95 border border-red-200 px-4 py-1.5 text-xs sm:text-sm font-extrabold tracking-widest uppercase text-red-700 shadow-sm mb-4"
          >
            <span className="h-2 w-2 rounded-full bg-[#E57373] animate-pulse" />
            {meta.category}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-4 max-w-3xl"
          >
            {hero.h1}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="text-lg sm:text-xl text-red-50/95 font-semibold max-w-2xl leading-relaxed mb-6"
          >
            {hero.subheadline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.3 }}
            className="flex flex-wrap justify-center gap-2.5 mb-6"
          >
            {hero.bullets.map((bullet: string, i: number) => (
              <span key={i} className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-red-150 px-4 py-2 text-sm font-bold text-slate-900 shadow-sm transition-transform hover:scale-[1.02]">
                <Check className="w-4.5 h-4.5 text-[#E57373] stroke-[3px]" />
                {bullet}
              </span>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
          >
            <Link to="/contact" className="w-full sm:w-auto rounded-full bg-white text-[#d32f2f] hover:bg-red-50 hover:text-red-700 font-bold px-10 py-4.5 hover:scale-[1.02] active:scale-95 transition-all shadow-md text-base cursor-pointer text-center">
              {hero.ctas.primary}
            </Link>
            <Link to="/contact" className="w-full sm:w-auto rounded-full bg-red-600/30 border border-red-300/40 text-white hover:bg-red-600/50 font-bold px-10 py-4.5 hover:scale-[1.02] active:scale-95 transition-all text-base backdrop-blur cursor-pointer text-center">
              {hero.ctas.secondary}
            </Link>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.5 }}
            className="mt-6 text-xs font-bold text-red-105 uppercase tracking-widest"
          >
            {hero.trust_line}
          </motion.p>
        </div>
      </section>

      {/* 2. Pain, Impact, Outcome - Compressed Spacing & Highly Elevated White Cards */}
      <motion.section 
        {...getSectionReveal()}
        className="py-6 sm:py-8 px-4 max-w-6xl mx-auto"
      >
        <motion.div 
          {...getGridContainer()}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div {...getGridItem()} className="bg-white rounded-2xl p-8 border border-red-100 shadow-md transition-all duration-300 hover:shadow-lg hover:border-red-200 overflow-hidden">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500">
                <ShieldAlert className="w-6 h-6 stroke-[1.5px]" />
              </div>
              <h3 className="text-xl font-black text-[#d32f2f] tracking-tight">The Pain</h3>
            </div>
            <ul className="space-y-3.5">
              {pio.pain_points.map((pt: string, i: number) => (
                <li key={i} className="text-slate-900 text-sm leading-relaxed flex gap-3 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E57373] shrink-0 mt-2" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...getGridItem()} className="bg-white rounded-2xl p-8 border border-red-100 shadow-md transition-all duration-300 hover:shadow-lg hover:border-red-200 overflow-hidden">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                <Activity className="w-6 h-6 stroke-[1.5px]" />
              </div>
              <h3 className="text-xl font-black text-[#d32f2f] tracking-tight">The Impact</h3>
            </div>
            <ul className="space-y-3.5">
              {pio.impacts.map((pt: string, i: number) => (
                <li key={i} className="text-slate-900 text-sm leading-relaxed flex gap-3 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...getGridItem()} className="bg-white rounded-2xl p-8 border border-red-100 shadow-md transition-all duration-300 hover:shadow-lg hover:border-red-200 overflow-hidden">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Zap className="w-6 h-6 stroke-[1.5px]" />
              </div>
              <h3 className="text-xl font-black text-[#d32f2f] tracking-tight">The Outcome</h3>
            </div>
            <ul className="space-y-3.5">
              {pio.outcomes.map((pt: string, i: number) => (
                <li key={i} className="text-slate-900 text-sm leading-relaxed flex gap-3 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 3. Service Modules - Compressed Spacing & Highly Elevated White Cards with Warm SVGs */}
      <motion.section 
        {...getSectionReveal()}
        className="py-6 sm:py-8 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-red-700 font-extrabold mb-2">Core Components</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">What We Deliver</h2>
          </div>
          
          <motion.div 
            {...getGridContainer()}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {modules.modules.map((m: any) => {
              const IconComponent = m.icon ? iconMap[m.icon] : null;
              return (
                <motion.div 
                  key={m.id} 
                  {...getGridItem()}
                  whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
                  className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-red-150 shadow-md hover:border-red-300 hover:shadow-lg transition-all duration-500 flex flex-col min-h-[260px] overflow-hidden z-0"
                >
                  {/* Faint Programmatic Warm SVG Background illustration - Rendered at bottom of file */}
                  <CardIllustration type={m.id} />
                  
                  <div className="relative z-10 flex flex-col h-full flex-1">
                    <div className="mb-6 w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#d32f2f] transition-colors group-hover:bg-[#E57373] group-hover:text-white duration-300">
                      {IconComponent && <IconComponent className="w-5 h-5 stroke-[1.5px]" />}
                    </div>
                    <h3 className="text-base font-black text-slate-900 mb-2 tracking-tight">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 flex-1 font-semibold">{m.description}</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 border border-red-100 text-[9px] font-bold text-red-700 uppercase tracking-widest self-start">
                      Best for: {m.best_for}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 4. Interactive Implementation Dashboard - Compressed Spacing & Highly Elevated Panels */}
      <motion.section 
        {...getSectionReveal()}
        className="py-6 sm:py-8 px-4 max-w-6xl mx-auto"
      >
        <div className="text-center mb-8 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-red-700 font-extrabold mb-2">Enterprise Rollout</span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">How It Works</h2>
          <p className="mt-2 text-slate-800 text-sm max-w-md font-semibold">A structured, low-risk process mapped directly to tangible system outcomes.</p>
        </div>

        <div className="bg-white border border-red-100 shadow-md rounded-[2rem] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Subtle tech background accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50/50 rounded-full blur-[100px] pointer-events-none select-none -z-10" />

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
            
            {/* Left Panel: Step Navigators (Fully Responsive) */}
            <div className="w-full lg:w-[45%] flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-red-700 font-extrabold mb-3 block">Implementation Steps</span>
              
              {/* Desktop Tracker View */}
              <div className="hidden md:flex flex-col gap-2.5 relative">
                <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-red-100 -z-10" />
                
                {journey.steps.map((step: any, idx: number) => {
                  const StepIcon = stepIcons[step.id] || Globe;
                  const isActive = activeStepIdx === idx;
                  const isCompleted = idx < activeStepIdx;
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStepIdx(idx)}
                      className={`flex items-center gap-5 p-4 rounded-xl border text-left transition-all duration-300 w-full cursor-pointer ${
                        isActive 
                          ? 'bg-[#E57373] border-red-400 text-white shadow-sm hover:bg-[#ef5350] scale-[1.01]' 
                          : 'bg-white border-red-100 text-slate-800 hover:border-red-200 hover:bg-red-50/40'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        isActive 
                          ? 'bg-white text-[#d32f2f] font-black' 
                          : isCompleted 
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                            : 'bg-red-50 text-red-400 border border-red-100'
                      }`}>
                        {isCompleted ? <Check className="w-5 h-5 stroke-[2.5px]" /> : <StepIcon className="w-5 h-5" />}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <span className={`text-[9px] uppercase tracking-widest font-extrabold block mb-0.5 ${isActive ? 'text-white/90' : 'text-red-700/80'}`}>
                          Step {idx + 1} · {step.timeline_hint}
                        </span>
                        <h4 className={`text-sm font-black tracking-tight truncate ${isActive ? 'text-white' : 'text-slate-900'}`}>
                          {step.step}
                        </h4>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Tracker View */}
              <div className="flex md:hidden flex-col gap-2.5">
                {journey.steps.map((step: any, idx: number) => {
                  const StepIcon = stepIcons[step.id] || Globe;
                  const isActive = activeStepIdx === idx;
                  const isCompleted = idx < activeStepIdx;

                  return (
                    <div 
                      key={step.id} 
                      className={`rounded-xl border transition-all duration-300 ${
                        isActive ? 'border-red-300 bg-red-50/30' : 'border-red-100 bg-white'
                      }`}
                    >
                      <button
                        onClick={() => setActiveStepIdx(idx)}
                        className="flex items-center justify-between w-full p-4 text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                            isActive 
                              ? 'bg-[#E57373] text-white' 
                              : isCompleted 
                                ? 'bg-emerald-50 text-emerald-600' 
                                : 'bg-red-50 text-red-500'
                          }`}>
                            {isCompleted ? <Check className="w-4 h-4 stroke-[2.5px]" /> : <StepIcon className="w-4 h-4" />}
                          </div>
                          <div>
                            <span className="text-[8px] uppercase tracking-widest font-extrabold text-red-700 block mb-0.5">
                              Step {idx + 1} · {step.timeline_hint}
                            </span>
                            <h4 className="text-xs font-bold text-slate-900 tracking-tight">
                              {step.step}
                            </h4>
                          </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-900 transition-transform ${isActive ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden border-t border-red-50 bg-white rounded-b-xl"
                          >
                            <div className="p-5 space-y-4">
                              <p className="text-xs text-slate-900 leading-relaxed font-semibold">
                                {step.description}
                              </p>
                              
                              <div className="pt-3 border-t border-red-50">
                                <span className="text-[8px] uppercase tracking-widest font-extrabold text-red-700 block mb-2">
                                  Deliverables for Step {idx + 1}
                                </span>
                                <ul className="space-y-2">
                                  {(stepDeliverables[step.id] || []).map((item, i) => (
                                    <li key={i} className="flex gap-2 items-start text-xs font-semibold text-slate-900 leading-relaxed">
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Panel: Step Detail View (Desktop Only) */}
            <div className="hidden md:flex flex-col flex-1 justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStepIdx}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                  transition={{ duration: shouldReduceMotion ? 0.01 : 0.3 }}
                  className="bg-white rounded-2xl p-8 border border-red-100 shadow-sm flex flex-col h-full justify-between overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-red-100 pb-5 mb-6">
                      <div>
                        <span className="text-[10px] font-extrabold text-red-700 uppercase tracking-widest block mb-1">
                          Phase {activeStepIdx + 1} Timeline Hint
                        </span>
                        <span className="text-xs font-extrabold uppercase text-white bg-[#E57373] px-3 py-1.5 rounded-lg tracking-widest shadow-sm">
                          {journey.steps[activeStepIdx].timeline_hint}
                        </span>
                      </div>
                      
                      <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 shadow-sm">
                        {(() => {
                          const StepIcon = stepIcons[journey.steps[activeStepIdx].id] || Globe;
                          return <StepIcon className="w-6 h-6 stroke-[1.5px]" />;
                        })()}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-[#d32f2f] tracking-tight mb-3">
                      {journey.steps[activeStepIdx].step}
                    </h3>
                    <p className="text-slate-900 text-sm leading-relaxed font-semibold mb-6">
                      {journey.steps[activeStepIdx].description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-red-100">
                    <span className="text-[10px] font-extrabold text-red-700 uppercase tracking-widest block mb-3">
                      Step Outcomes & Deliverables
                    </span>
                    <ul className="space-y-3">
                      {(stepDeliverables[journey.steps[activeStepIdx].id] || []).map((item, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, delay: shouldReduceMotion ? 0 : i * 0.08 }}
                          className="flex gap-3 items-start text-sm font-semibold text-slate-900 leading-relaxed"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 5. Tabs - Expanded Width Container to fit all tabs on a single line & Compressed spacing */}
      <motion.section 
        {...getSectionReveal()}
        className="py-6 sm:py-8 px-4 max-w-7xl w-full mx-auto"
      >
        <div className="w-full">
          <Tabs defaultValue={tabs.tabs[0].id} className="w-full">
            <div className="overflow-x-auto pb-2 mb-4" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
              {/* Responsive Tabs Grid stretches beautifully on desktop (768px+) and scrolls cleanly on mobile */}
              <TabsList className="h-14 p-1.5 bg-white border border-red-100 rounded-full flex sm:grid sm:grid-cols-5 w-full min-w-[768px] sm:min-w-0 justify-between items-center shadow-md">
                {tabs.tabs.map((tab: any) => (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id}
                    className="flex-1 rounded-full px-2 sm:px-4 py-2.5 text-[10px] sm:text-xs lg:text-sm font-extrabold text-red-700/80 data-[state=active]:bg-[#E57373] data-[state=active]:text-white hover:data-[state=active]:bg-[#ef5350] transition-all shadow-none cursor-pointer text-center whitespace-nowrap"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {tabs.tabs.map((tab: any) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-2 focus-visible:outline-none">
                <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-red-100 shadow-md overflow-hidden">
                  <p className="text-lg sm:text-xl text-[#d32f2f] font-black mb-4 leading-relaxed">
                    {tab.summary}
                  </p>
                  <ul className="space-y-3.5 mb-6">
                    {tab.bullets.map((b: string, idx: number) => (
                      <li key={idx} className="flex gap-3.5 text-slate-900 text-base font-semibold">
                        <Check className="w-5 h-5 text-[#E57373] stroke-[3px] shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-red-50/50 rounded-xl p-5 border border-red-100 flex gap-4 items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d32f2f] block mb-1">Pro Tip</span>
                      <p className="text-sm text-slate-900 leading-relaxed font-semibold">{tab.pro_tip}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </motion.section>

      {/* 6. Use Cases - Vertical Chronological Auto-Cycler - Compressed Spacing */}
      <motion.section 
        {...getSectionReveal()}
        className="py-6 sm:py-8 px-4 max-w-6xl mx-auto"
      >
        <div className="text-center mb-8 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-red-700 font-extrabold mb-2">Strategic Applications</span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">Common Use Cases</h2>
          <p className="mt-2 text-slate-800 text-sm max-w-md font-semibold">Proven outcomes across complex organizational modernizations.</p>
        </div>

        {/* Desktop View (md and up) */}
        <div className="hidden md:flex gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Vertical Timeline Rail (01-05) */}
          <div className="w-[30%] flex flex-col gap-3 relative justify-center">
            {/* Timeline connection line */}
            <div className="absolute left-[24px] top-6 bottom-6 w-0.5 bg-red-200 -z-10" />
            
            {/* Active Progress Bar Filling track */}
            <div 
              className="absolute left-[24px] w-0.5 bg-[#E57373] transition-all duration-500 -z-10"
              style={{
                top: "24px",
                height: `${(activeUcIdx / (useCases.items.length - 1)) * 80}%`
              }}
            />

            {useCases.items.map((uc: any, idx: number) => {
              const isActive = activeUcIdx === idx;
              const isCompleted = idx < activeUcIdx;
              
              return (
                <button
                  key={uc.id}
                  onClick={() => {
                    setActiveUcIdx(idx);
                  }}
                  className="flex items-center gap-6 p-2 text-left group w-full cursor-pointer focus:outline-none"
                >
                  {/* Circle Step indicator */}
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center shrink-0 font-bold text-sm transition-all duration-300 z-10 ${
                    isActive 
                      ? 'bg-[#E57373] border-red-400 text-white scale-110 shadow-sm hover:bg-[#ef5350]' 
                      : isCompleted 
                        ? 'bg-red-500 border-red-500 text-white hover:bg-red-600'
                        : 'bg-white border-red-200 text-red-400 group-hover:border-red-300'
                  }`}>
                    0{idx + 1}
                  </div>
                  
                  {/* Step title */}
                  <div className="min-w-0 flex-1">
                    <h4 className={`text-base font-bold tracking-tight transition-colors duration-300 ${
                      isActive 
                        ? 'text-red-950 font-black scale-[1.02] origin-left' 
                        : 'text-red-700/60 group-hover:text-red-900'
                    }`}>
                      {uc.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Content details panel */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUcIdx}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.4 }}
                className="bg-white border border-red-100 shadow-md rounded-[2rem] p-8 sm:p-10 h-full flex flex-col justify-between relative overflow-hidden"
              >
                {/* Visual grid background texture inside usecase */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "16px 16px" }} />
                
                <div>
                  <div className="flex justify-between items-center mb-6 border-b border-red-100 pb-5">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-extrabold text-red-700 bg-red-50 px-2.5 py-1 rounded">
                      Case Study 0{activeUcIdx + 1}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-[#d32f2f] tracking-tight mb-4">
                    {useCases.items[activeUcIdx].title}
                  </h3>
                  <p className="text-slate-900 text-base sm:text-lg leading-relaxed font-semibold mb-6">
                    {useCases.items[activeUcIdx].description}
                  </p>
                </div>

                {/* Filling Progress Indicator Bar */}
                <div className="pt-5 border-t border-red-100 mt-auto">
                  <div className="flex justify-between items-center text-[10px] text-red-700 font-bold uppercase tracking-widest mb-2.5">
                    <span>Uptime & Scale Verified</span>
                    <span>Cycling...</span>
                  </div>
                  <div className="w-full h-1 bg-red-50 rounded-full overflow-hidden">
                    <motion.div
                      key={activeUcIdx}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: shouldReduceMotion ? 0.01 : 6, ease: "linear" }}
                      className="h-full bg-[#E57373]"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View (< md breakpoint) */}
        <div className="flex md:hidden flex-col gap-2.5">
          {useCases.items.map((uc: any, idx: number) => {
            const isActive = activeUcIdx === idx;
            const isCompleted = idx < activeUcIdx;
            
            return (
              <div 
                key={uc.id} 
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isActive ? 'border-red-300 bg-red-50/20' : 'border-red-100 bg-white'
                }`}
              >
                <button
                  onClick={() => {
                    setActiveUcIdx(idx);
                  }}
                  className="flex items-center justify-between w-full p-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                      isActive 
                        ? 'bg-[#E57373] text-white shadow-sm hover:bg-[#ef5350]' 
                        : isCompleted 
                          ? 'bg-red-500 text-white' 
                          : 'bg-red-50 text-red-500'
                    }`}>
                      0{idx + 1}
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 tracking-tight">
                      {uc.title}
                    </h4>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-900 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-red-50 bg-white rounded-b-xl"
                    >
                      <div className="p-5">
                        <p className="text-xs text-slate-900 leading-relaxed font-semibold">
                          {uc.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* FAQs - Spacing optimization and pure white elevated accordion items - Spacing Compressed */}
      <motion.section 
        {...getSectionReveal()}
        className="py-6 sm:py-8 px-4"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 flex flex-col items-center">
            <HelpCircle className="w-10 h-10 text-[#d32f2f] mb-2.5 animate-bounce" />
            <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-2.5">
            {faq.items.map((item: any) => (
              <AccordionItem key={item.id} value={item.id} className="bg-white border border-red-100 rounded-xl px-5 hover:border-red-200 transition-colors shadow-md border-b overflow-hidden">
                <AccordionTrigger className="text-base font-bold text-slate-900 hover:text-[#d32f2f] hover:no-underline py-4 text-left cursor-pointer">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 leading-relaxed pb-4 text-xs sm:text-sm font-semibold">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.section>

      {/* Let's Connect Form Section */}
      <motion.section 
        {...getSectionReveal()}
        className="py-8 sm:py-12 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <ServiceContactForm
            layout="split"
            theme="red"
            title="Let's Connect"
            description="Ready to build a reliable and secure communications foundation? Let's discuss your enterprise email, productivity suite, or migration requirements."
            buttonText="Start My Project"
            successHeading="Project Request Received!"
            successMessage="Our email solutions specialists will review your project details and reach out within 24 business hours."
            subject="WAVELET: Email & Productivity Solutions Inquiry"
            bullets={[
              { iconName: "zap", title: "Zero Downtime", subtitle: "Seamless migration guarantee" },
              { iconName: "shield-check", title: "Enterprise Security", subtitle: "DKIM, SPF & DMARC fully configured" }
            ]}
          />
        </div>
      </motion.section>

      {/* 9. Final CTA - Spacing Compressed */}
      <motion.section 
        {...getSectionReveal()}
        className="py-10 sm:py-14 px-4 bg-gray-900 text-white text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(#FFF 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            {finalCta.headline}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
            {finalCta.supporting_line}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
            <Link to="/contact" className="w-full sm:w-auto rounded-full bg-[#E57373] hover:bg-[#ef5350] hover:scale-[1.02] active:scale-95 text-white font-bold px-10 py-4 shadow-md text-base transition-all cursor-pointer text-center">
              {finalCta.ctas.primary}
            </Link>
            <Link to="/contact" className="w-full sm:w-auto rounded-full bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 font-bold px-10 py-4 transition-all text-base cursor-pointer text-center">
              {finalCta.ctas.secondary}
            </Link>
          </div>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
            {finalCta.reassurance}
          </p>
        </div>
      </motion.section>

      {/* footer - Pass hideCta={true} to eliminate the redundant final CTA card */}
      <EnterpriseFooter hideCta={true} />
    </div>
  );
}

// 10. Capability Programmatic SVG Illustrations (Placed at bottom of file per Architecture Rule) - Warm Color Accent (#E57373)
function CardIllustration({ type }: { type: string }) {
  switch (type) {
    case "module-m365": // Microsoft 365 Deployment: Isometric grid/cubes
      return (
        <svg className="absolute inset-0 w-full h-full text-[#E57373] pointer-events-none select-none -z-10 animate-pulse" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.04">
            <path d="M100 20 L175 60 L100 100 L25 60 Z" />
            <path d="M100 100 L175 60 L175 140 L100 180 Z" />
            <path d="M100 100 L25 60 L25 140 L100 180 Z" />
            <path d="M25 80 L100 120 L175 80" />
            <path d="M25 100 L100 140 L175 100" />
            <path d="M25 120 L100 160 L175 120" />
            <circle cx="100" cy="20" r="4" fill="currentColor" />
            <circle cx="175" cy="60" r="4" fill="currentColor" />
            <circle cx="25" cy="60" r="4" fill="currentColor" />
            <circle cx="100" cy="180" r="4" fill="currentColor" />
            <circle cx="100" cy="100" r="3" fill="currentColor" />
          </g>
        </svg>
      );
    case "module-google-workspace": // Google Workspace Migration: Intersecting circular network nodes
      return (
        <svg className="absolute inset-0 w-full h-full text-[#E57373] pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.04">
            <circle cx="100" cy="100" r="75" strokeDasharray="6 4" />
            <circle cx="100" cy="100" r="50" />
            <circle cx="100" cy="100" r="25" strokeDasharray="2 2" />
            <line x1="100" y1="10" x2="100" y2="190" />
            <line x1="10" y1="100" x2="190" y2="100" />
            <path d="M45 45 L155 155" />
            <path d="M155 45 L45 155" />
            <circle cx="100" cy="25" r="5" fill="currentColor" />
            <circle cx="100" cy="175" r="5" fill="currentColor" />
            <circle cx="25" cy="100" r="5" fill="currentColor" />
            <circle cx="175" cy="100" r="5" fill="currentColor" />
          </g>
        </svg>
      );
    case "module-advanced-protection": // Advanced Threat Protection: Concentric radar or shield lines
      return (
        <svg className="absolute inset-0 w-full h-full text-[#E57373] pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.04">
            <circle cx="100" cy="100" r="85" />
            <circle cx="100" cy="100" r="65" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="45" />
            <circle cx="100" cy="100" r="25" strokeDasharray="2 2" />
            <line x1="100" y1="15" x2="100" y2="185" />
            <line x1="15" y1="100" x2="185" y2="100" />
            <path d="M100 100 L160 40" strokeWidth="2" />
            <polygon points="100,100 120,60 140,80" fill="currentColor" fillOpacity="0.1" />
          </g>
        </svg>
      );
    case "module-archiving-ediscovery": // Archiving & eDiscovery: Layered horizontal database planes
      return (
        <svg className="absolute inset-0 w-full h-full text-[#E57373] pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.04">
            <path d="M40 50 L100 25 L160 50 L100 75 Z" />
            <path d="M40 90 L100 65 L160 90 L100 115 Z" />
            <path d="M40 130 L100 105 L160 130 L100 155 Z" />
            <path d="M40 50 L40 130" />
            <path d="M160 50 L160 130" />
            <path d="M100 75 L100 155" />
            <line x1="60" y1="60" x2="80" y2="68" />
            <line x1="60" y1="100" x2="80" y2="108" />
            <line x1="60" y1="140" x2="80" y2="148" />
          </g>
        </svg>
      );
    case "module-dlp": // Data Loss Prevention: Minimalist lock/keyhole geometry
      return (
        <svg className="absolute inset-0 w-full h-full text-[#E57373] pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.04">
            <rect x="50" y="80" width="100" height="80" rx="8" />
            <path d="M70 80 L70 50 C70 30, 80 20, 100 20 C120 20, 130 30, 130 50 L130 80" />
            <circle cx="100" cy="115" r="8" fill="currentColor" />
            <path d="M100 123 L100 143" strokeWidth="2" />
            <circle cx="100" cy="50" r="3" fill="currentColor" />
            <path d="M20 100 L180 100" strokeDasharray="8 4" />
            <path d="M100 20 L100 180" strokeDasharray="8 4" />
          </g>
        </svg>
      );
    case "module-identity-access": // Identity & Access: Abstract fingerprint or multi-node tree
      return (
        <svg className="absolute inset-0 w-full h-full text-[#E57373] pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.04">
            <path d="M40 160 C50 120, 80 100, 100 100 C120 100, 150 120, 160 160" />
            <path d="M55 160 C65 130, 85 115, 100 115 C115 115, 135 130, 145 160" />
            <path d="M70 160 C78 142, 88 130, 100 130 C112 130, 122 142, 130 160" />
            <path d="M85 160 C90 152, 95 145, 100 145 C105 145, 110 152, 115 160" />
            <circle cx="100" cy="50" r="25" />
            <circle cx="100" cy="50" r="12" strokeDasharray="2 2" />
            <line x1="100" y1="75" x2="100" y2="100" />
          </g>
        </svg>
      );
    case "module-dns-hardening": // DNS & Deliverability: Radiating broadcast waves
      return (
        <svg className="absolute inset-0 w-full h-full text-[#E57373] pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.04">
            <circle cx="100" cy="140" r="10" fill="currentColor" />
            <path d="M85 125 A 25 25 0 0 1 115 125" strokeWidth="1.5" />
            <path d="M70 110 A 45 45 0 0 1 130 110" strokeWidth="1.5" strokeDasharray="3 2" />
            <path d="M55 95 A 65 65 0 0 1 145 95" strokeWidth="1.5" />
            <path d="M40 80 A 85 85 0 0 1 160 80" strokeWidth="1.5" strokeDasharray="5 3" />
            <line x1="100" y1="140" x2="100" y2="190" />
            <line x1="80" y1="190" x2="120" y2="190" strokeWidth="2" />
          </g>
        </svg>
      );
    case "module-managed-admin": // Fully Managed Admin: Interlocking gears or control sliders
      return (
        <svg className="absolute inset-0 w-full h-full text-[#E57373] pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.04">
            <rect x="30" y="40" width="140" height="12" rx="4" />
            <rect x="30" y="80" width="140" height="12" rx="4" />
            <rect x="30" y="120" width="140" height="12" rx="4" />
            <circle cx="65" cy="46" r="10" fill="currentColor" />
            <circle cx="125" cy="86" r="10" fill="currentColor" />
            <circle cx="85" cy="126" r="10" fill="currentColor" />
            <circle cx="100" cy="165" r="15" />
            <circle cx="100" cy="165" r="5" fill="currentColor" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}
