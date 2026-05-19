import { createFileRoute, Link } from '@tanstack/react-router';
import { erpBusinessAppsData, erpStepDeliverables } from '@/data/erpBusinessAppsData';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { ServiceContactForm } from '@/components/ServiceContactForm';
import { 
  AlertCircle, ArrowRight, Check, CheckCircle2, 
  Activity, ShieldAlert, Zap, RefreshCw, 
  Lock, Key, Globe, Cog, Building,
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
  building: Building,
  "refresh-cw": RefreshCw,
  zap: Zap,
  lock: Lock
};

const stepIcons: Record<string, any> = {
  "step-scoping": Globe,
  "step-cleanse": RefreshCw,
  "step-infrastructure": Key,
  "step-middleware": Zap,
  "step-testing": CheckCircle2,
  "step-onboarding": Cog
};

export const Route = createFileRoute('/what-we-do/erp-business-applications')({
  component: ERPRoute,
});

function ERPRoute() {
  const { meta, sections } = erpBusinessAppsData;

  const hero = sections.find((s) => s.type === "hero") as any;
  const pio = sections.find((s) => s.type === "pain_impact_outcome") as any;
  const modules = sections.find((s) => s.type === "service_modules") as any;
  const journey = sections.find((s) => s.type === "implementation_journey") as any;
  const largeValue = sections.find((s) => s.type === "large_value_cards") as any;
  const erpModulesSection = sections.find((s) => s.type === "erp_modules") as any;
  const iconFeatures = sections.find((s) => s.type === "icon_features") as any;
  const partnerEcosystem = sections.find((s) => s.type === "partner_ecosystem") as any;
  const useCases = sections.find((s) => s.type === "use_cases") as any;
  const faq = sections.find((s) => s.type === "faq") as any;
  const contactCard = sections.find((s) => s.type === "contact_card") as any;
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
    <div className="w-full bg-[#DCEDC8] min-h-screen font-sans text-[#111111] antialiased selection:bg-gray-200 selection:text-gray-900 overflow-x-hidden pt-20">
      
      {/* 1. Hero Section - Vibrant Key-Lime Background Override (#BACF00) - Tightened Spacing */}
      <section className="relative px-4 py-12 sm:py-16 flex flex-col items-center text-center bg-[#BACF00] overflow-hidden">
        {/* Subtle geometric structural pattern overlay */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={sectionTransition}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-black/10 px-4 py-1.5 text-xs sm:text-sm font-extrabold tracking-widest uppercase text-gray-900 shadow-sm mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
            {meta.category}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6 max-w-3xl"
          >
            {hero.h1}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="text-lg sm:text-xl text-slate-800/90 font-semibold max-w-2xl leading-relaxed mb-8"
          >
            {hero.subheadline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {hero.bullets.map((bullet: string, i: number) => (
              <span key={i} className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-black/10 px-4 py-2 text-sm font-semibold text-gray-905 shadow-sm transition-transform hover:scale-[1.02]">
                <Check className="w-4.5 h-4.5 text-emerald-600 stroke-[3px]" />
                {bullet}
              </span>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link to="/contact" className="w-full sm:w-auto rounded-full bg-black text-white font-bold px-10 py-5 hover:bg-black/90 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:scale-[1.03] active:scale-95 text-base cursor-pointer text-center">
              {hero.ctas.primary}
            </Link>
            <Link to="/contact" className="w-full sm:w-auto rounded-full bg-white/40 border border-black/20 text-slate-900 font-bold px-10 py-5 hover:bg-white/60 transition-all hover:scale-[1.03] active:scale-95 text-base backdrop-blur cursor-pointer text-center">
              {hero.ctas.secondary}
            </Link>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.5 }}
            className="mt-8 text-xs font-bold text-gray-800/80 uppercase tracking-widest"
          >
            {hero.trust_line}
          </motion.p>
        </div>
      </section>

      {/* 2. Pain, Impact, Outcome - Tightened Spacing */}
      <motion.section 
        {...getSectionReveal()}
        className="py-8 sm:py-12 px-4 max-w-6xl mx-auto"
      >
        <motion.div 
          {...getGridContainer()}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div {...getGridItem()} className="bg-white rounded-[2.2rem] p-10 border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-md hover:border-gray-300/80 overflow-hidden">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500">
                <ShieldAlert className="w-6 h-6 stroke-[1.5px]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">The Pain</h3>
            </div>
            <ul className="space-y-4">
              {pio.pain_points.map((pt: string, i: number) => (
                <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-3 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...getGridItem()} className="bg-white rounded-[2.2rem] p-10 border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-md hover:border-gray-300/80 overflow-hidden">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600">
                <Activity className="w-6 h-6 stroke-[1.5px]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">The Impact</h3>
            </div>
            <ul className="space-y-4">
              {pio.impacts.map((pt: string, i: number) => (
                <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-3 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0 mt-2" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...getGridItem()} className="bg-white rounded-[2.2rem] p-10 border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-md hover:border-gray-300/80 overflow-hidden">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Zap className="w-6 h-6 stroke-[1.5px]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">The Outcome</h3>
            </div>
            <ul className="space-y-4">
              {pio.outcomes.map((pt: string, i: number) => (
                <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-3 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 3. Service Modules - capability cards - Tightened Spacing */}
      <motion.section 
        {...getSectionReveal()}
        className="py-8 sm:py-12 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-3">Core Components</span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-none">What We Deliver</h2>
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
                  className="group relative bg-white rounded-3xl p-8 border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gray-300 hover:shadow-md transition-all duration-500 flex flex-col min-h-[280px] overflow-hidden z-0"
                >
                  {/* Faint Programmatic SVG Background illustration */}
                  <CardIllustration type={m.id} />

                  <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-800 mb-6 transition-all duration-300 group-hover:bg-[#BACF00] group-hover:scale-110">
                    {IconComponent && <IconComponent className="w-6 h-6 stroke-[1.5px]" />}
                  </div>

                  <h3 className="text-lg font-black text-gray-900 tracking-tight mb-3">
                    {m.title}
                  </h3>
                  
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold mb-6 flex-grow">
                    {m.description}
                  </p>

                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold block mb-1">Target Application</span>
                    <p className="text-gray-700 text-xs font-bold leading-tight line-clamp-1">{m.best_for}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 4. Large Value Cards Section */}
      <motion.section 
        {...getSectionReveal()}
        className="py-8 sm:py-12 px-4 max-w-6xl mx-auto"
      >
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-3">Operational Excellence</span>
          <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-none">{largeValue.heading}</h2>
        </div>

        <motion.div 
          {...getGridContainer()}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {largeValue.items.map((item: any) => (
            <motion.div 
              key={item.id} 
              {...getGridItem()}
              className="bg-white rounded-[2.5rem] p-10 border border-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col min-h-[320px]"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#BACF00] bg-black/90 px-3 py-1.5 rounded-full w-fit mb-6">
                {item.title}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-4">
                {item.title === "Operational Visibility" ? "Integrated Real-Time Insights" : "Secure Immutable Oversight"}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold mb-8 flex-grow">
                {item.description}
              </p>
              <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-[#BACF00] transition-colors mt-auto w-fit group cursor-pointer">
                {item.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 5. Core ERP Modules & Workflows Grid */}
      <motion.section 
        {...getSectionReveal()}
        className="py-8 sm:py-12 px-4 max-w-7xl mx-auto"
      >
        <div className="text-center mb-10 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-3">Modular Architecture</span>
          <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-none">{erpModulesSection.heading}</h2>
        </div>

        <motion.div 
          {...getGridContainer()}
          className="flex flex-wrap justify-center gap-3"
        >
          {erpModulesSection.items.map((mod: string, idx: number) => (
            <motion.span 
              key={idx} 
              {...getGridItem()}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs sm:text-sm font-bold text-gray-900 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-gray-300 transition-all hover:scale-[1.02]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#BACF00]" />
              {mod}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      {/* 6. Dynamic Implementation Dashboard - Expanded tabs triggering deliverables - Tightened Spacing */}
      <motion.section 
        {...getSectionReveal()}
        className="py-8 sm:py-12 px-4 bg-white/40 backdrop-blur-sm border-y border-black/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-3">Interactive Blueprint</span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-none">{journey.heading}</h2>
          </div>

          <Tabs defaultValue="step-scoping" className="w-full hidden md:block">
            {/* Expanded desktop trigger bar stretching across the 7xl wrapper without truncation */}
            <div className="max-w-7xl w-full mx-auto px-4 mb-8">
              <TabsList className="grid grid-cols-6 gap-2 w-full bg-gray-100/80 backdrop-blur p-1 rounded-2xl border border-gray-200/50 min-h-[56px]">
                {journey.steps.map((step: any, idx: number) => {
                  const Icon = stepIcons[step.id];
                  return (
                    <TabsTrigger
                      key={step.id}
                      value={step.id}
                      onClick={() => setActiveStepIdx(idx)}
                      className="flex items-center justify-center gap-2 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-gray-950 transition-all cursor-pointer py-3 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm border border-transparent data-[state=active]:border-gray-200/50"
                    >
                      {Icon && <Icon className="w-4 h-4 stroke-[2px] shrink-0" />}
                      <span className="truncate">{step.title.split(" ")[0]}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {journey.steps.map((step: any, idx: number) => (
              <TabsContent key={step.id} value={step.id} className="outline-none focus:outline-none">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#BACF00] bg-black px-3.5 py-1.5 rounded-md w-fit mb-4">
                      {step.phase}
                    </span>
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-7">
                    <div className="bg-white rounded-[2rem] p-8 border border-black/5 shadow-[0_12px_45px_rgba(0,0,0,0.03)] relative overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-gray-400 mb-6">Phase Deliverables Checklist</h4>
                      
                      <div className="space-y-4 relative z-10">
                        {erpStepDeliverables[step.id]?.map((del: string, dIdx: number) => (
                          <motion.div 
                            key={dIdx}
                            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, delay: shouldReduceMotion ? 0 : dIdx * 0.08 }}
                            className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors"
                          >
                            <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3px]" />
                            </div>
                            <p className="text-gray-800 text-sm sm:text-base font-bold leading-normal">{del}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Interactive Accordion for Mobile Screens (< md breakpoint) */}
          <div className="block md:hidden max-w-xl mx-auto">
            <Accordion type="single" collapsible defaultValue="step-scoping" className="space-y-3">
              {journey.steps.map((step: any, idx: number) => {
                const Icon = stepIcons[step.id];
                return (
                  <AccordionItem 
                    key={step.id} 
                    value={step.id}
                    className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden"
                  >
                    <AccordionTrigger className="flex items-center justify-between p-5 font-bold text-sm text-gray-900 hover:no-underline">
                      <div className="flex items-center gap-3.5">
                        <div className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-800 shrink-0">
                          {Icon && <Icon className="w-4 h-4 stroke-[1.5px]" />}
                        </div>
                        <div className="text-left">
                          <span className="text-[9px] uppercase tracking-widest text-[#BACF00] font-extrabold block leading-none mb-1">{step.phase}</span>
                          <span className="text-gray-900 text-xs sm:text-sm font-black tracking-tight">{step.title}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="border-t border-gray-100 bg-gray-50 p-5">
                      <p className="text-xs text-gray-600 leading-relaxed font-semibold mb-6">
                        {step.description}
                      </p>
                      
                      <div className="border-t border-gray-200/60 pt-5 space-y-3">
                        <h4 className="text-[9px] uppercase tracking-widest font-extrabold text-gray-400 mb-2">Checklist Deliverables</h4>
                        {erpStepDeliverables[step.id]?.map((del: string, dIdx: number) => (
                          <div key={dIdx} className="flex items-start gap-3.5 bg-white p-3.5 rounded-xl border border-gray-100">
                            <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-emerald-600 stroke-[3px]" />
                            </div>
                            <p className="text-gray-800 text-xs font-bold leading-normal">{del}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </motion.section>

      {/* 7. Chronological Use Case Auto-Cycler Section - Tightened Spacing */}
      <motion.section 
        {...getSectionReveal()}
        className="py-8 sm:py-12 px-4 max-w-6xl mx-auto"
      >
        <div className="text-center mb-10 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-3">Enterprise Deployments</span>
          <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-none">{useCases.heading}</h2>
        </div>

        <div className="hidden md:grid grid-cols-12 gap-8 items-center min-h-[460px]">
          {/* Left Vertical Active Timeline Rail */}
          <div className="col-span-5 flex flex-col gap-3 relative pl-6">
            {/* Linking vertical connector line */}
            <div className="absolute left-[34px] top-6 bottom-6 w-0.5 bg-gray-200/80 -z-10" />
            
            {useCases.items.map((uc: any, idx: number) => {
              const isActive = activeUcIdx === idx;
              return (
                <button
                  key={uc.id}
                  onClick={() => {
                    setActiveUcIdx(idx);
                  }}
                  className="flex items-center gap-6 p-2 text-left group w-full cursor-pointer focus:outline-none"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border font-bold text-sm transition-all duration-300 shrink-0 ${
                    isActive 
                      ? 'bg-gray-900 border-gray-900 text-[#BACF00] scale-110 shadow-md shadow-gray-900/10' 
                      : 'bg-white border-gray-200 text-gray-400 group-hover:border-gray-400 group-hover:text-gray-700'
                  }`}>
                    0{idx + 1}
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-base font-black tracking-tight transition-colors duration-300 ${
                      isActive ? 'text-gray-900 font-extrabold' : 'text-gray-400 group-hover:text-gray-700'
                    }`}>
                      {uc.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Details Display Card (Perfect Rounded Corners & Inset Grid Matrix Pattern) */}
          <div className="col-span-7 h-full flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUcIdx}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.4 }}
                className="bg-white rounded-[2rem] p-8 sm:p-10 border border-black/5 shadow-[0_15px_45px_rgba(0,0,0,0.04)] h-full flex flex-col justify-between relative overflow-hidden min-h-[340px]"
              >
                {/* Clean inset matrix pattern cropped perfectly by overflow-hidden */}
                <div 
                  className="absolute inset-0 opacity-[0.015] pointer-events-none select-none" 
                  style={{ 
                    backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", 
                    backgroundSize: "20px 20px" 
                  }} 
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-6">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-extrabold text-gray-400">
                      Deployment 0{activeUcIdx + 1}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 tracking-tight mb-6">
                    {useCases.items[activeUcIdx].title}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-semibold mb-8">
                    {useCases.items[activeUcIdx].description}
                  </p>
                </div>

                {/* Filling Progress Indicator Bar */}
                <div className="pt-6 border-t border-gray-100/60 mt-auto relative z-10">
                  <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">
                    <span>Uptime & Accuracy Verified</span>
                    <span>Cycling...</span>
                  </div>
                  <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      key={activeUcIdx}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: shouldReduceMotion ? 0.01 : 6, ease: "linear" }}
                      className="h-full bg-gray-900"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View (< md breakpoint) */}
        <div className="flex md:hidden flex-col gap-3">
          {useCases.items.map((uc: any, idx: number) => {
            const isActive = activeUcIdx === idx;
            const isCompleted = idx < activeUcIdx;
            
            return (
              <div 
                key={uc.id} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isActive ? 'border-gray-900 bg-gray-50' : 'border-gray-100 bg-white'
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
                        ? 'bg-gray-900 text-[#BACF00]' 
                        : isCompleted 
                          ? 'bg-gray-900 text-[#BACF00]' 
                          : 'bg-gray-50 text-gray-400'
                    }`}>
                      0{idx + 1}
                    </div>
                    <h4 className="text-xs font-bold text-gray-900 tracking-tight">
                      {uc.title}
                    </h4>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-gray-100 bg-white rounded-b-2xl"
                    >
                      <div className="p-5">
                        <p className="text-xs text-gray-600 leading-relaxed font-semibold">
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

      {/* 8. Icon Features Section */}
      <motion.section 
        {...getSectionReveal()}
        className="py-8 sm:py-12 px-4 max-w-6xl mx-auto"
      >
        <div className="text-center mb-10 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-3">Enterprise Governance</span>
          <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-none">{iconFeatures.heading}</h2>
        </div>

        <motion.div 
          {...getGridContainer()}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {iconFeatures.items.map((feat: any, idx: number) => (
            <motion.div 
              key={idx} 
              {...getGridItem()}
              className="bg-white rounded-3xl p-8 border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#BACF00]/20 flex items-center justify-center text-gray-900 font-black text-sm mb-6">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-black text-gray-900 tracking-tight mb-3">
                {feat.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-semibold">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 9. Partner Ecosystem Section */}
      <section className="py-8 sm:py-12 px-4 bg-black/90 text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-4 block">{partnerEcosystem.heading}</span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {partnerEcosystem.items.map((part: string, idx: number) => (
              <span key={idx} className="text-sm md:text-base font-extrabold uppercase tracking-widest hover:opacity-100 transition-opacity">
                {part}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQs - Spacing optimization and pure white elevated accordion items - Tightened Spacing */}
      <motion.section 
        {...getSectionReveal()}
        className="py-8 sm:py-12 px-4 max-w-4xl mx-auto"
      >
        <div className="text-center mb-10 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-3">FAQ</span>
          <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-none">{faq.heading}</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faq.items.map((item: any, idx: number) => (
            <AccordionItem 
              key={idx} 
              value={`faq-${idx}`}
              className="bg-white rounded-[1.8rem] border border-black/5 shadow-[0_6px_25px_rgba(0,0,0,0.03)] px-6 overflow-hidden"
            >
              <AccordionTrigger className="py-5 text-left font-extrabold text-sm sm:text-base text-gray-900 hover:no-underline gap-4">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-gray-400 shrink-0 stroke-[1.8px]" />
                  <span>{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed font-semibold border-t border-gray-100/50">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.section>

      {/* 11. Contact Form Section */}
      <motion.section 
        {...getSectionReveal()}
        className="py-8 sm:py-12 px-4"
      >
        <ServiceContactForm
          layout="single-card"
          theme="erp"
          title={contactCard.heading}
          description="Let's build a unified, automated operation. Our specialists will review your requirements."
          buttonText={contactCard.submitButtonText}
          successHeading="ERP Project Request Received!"
          successMessage="Our business application architects will review your business process requirements and reach out within 24 business hours."
          subject="WAVELET: ERP & Business Applications Inquiry"
          fields={[
            { name: "name", label: "Full Name", type: "text", placeholder: "Enter your name...", required: true },
            { name: "email", label: "Work Email", type: "email", placeholder: "Enter your work email...", required: true },
            { name: "message", label: "Message", type: "textarea", placeholder: "Enter your message...", required: true }
          ]}
        />
      </motion.section>

      {/* 12. Final Call-to-Action - Tightened Spacing */}
      <motion.section 
        {...getSectionReveal()}
        className="relative py-12 sm:py-16 px-4 text-center bg-[#BACF00] overflow-hidden"
      >
        {/* Subtle geometric structural pattern overlay */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none mb-6">
            {finalCta.heading}
          </h2>
          <Link to="/contact" className="inline-block rounded-full bg-black text-white font-bold px-12 py-5 hover:bg-black/90 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:scale-[1.03] active:scale-95 text-base cursor-pointer text-center">
            {finalCta.button}
          </Link>
        </div>
      </motion.section>

      {/* 13. Enterprise Footer - Integrated directly with structural hideCta configuration */}
      <EnterpriseFooter hideCta={true} />
      
    </div>
  );
}

// Programmatic Custom Vector Designs matching the 4 ERP modules
function CardIllustration({ type }: { type: string }) {
  switch (type) {
    case "module-erp-rollout": // ERP Implementation & Rollout: Abstract isometric database cube grid
      return (
        <svg className="absolute inset-0 w-full h-full text-black pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.05">
            <path d="M40 60 L100 30 L160 60 L100 90 Z" />
            <path d="M40 100 L100 70 L160 100 L100 130 Z" />
            <path d="M40 140 L100 110 L160 140 L100 170 Z" />
            <path d="M40 60 L40 140" />
            <path d="M160 60 L160 140" />
            <path d="M100 90 L100 170" />
            <line x1="60" y1="70" x2="80" y2="80" />
            <line x1="60" y1="110" x2="80" y2="120" />
            <line x1="60" y1="150" x2="80" y2="160" />
          </g>
        </svg>
      );
    case "module-workflow-automation": // Workflow Automation: Abstract looping node pipeline connection
      return (
        <svg className="absolute inset-0 w-full h-full text-black pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.05">
            <circle cx="50" cy="50" r="10" />
            <circle cx="150" cy="80" r="10" />
            <circle cx="100" cy="150" r="10" />
            <path d="M60 50 C90 50, 110 80, 140 80" strokeDasharray="4 2" />
            <path d="M150 90 C150 120, 120 150, 110 150" />
            <path d="M90 150 C60 150, 50 80, 50 60" strokeDasharray="6 3" />
            <circle cx="95" cy="65" r="4" fill="currentColor" />
            <circle cx="130" cy="120" r="4" fill="currentColor" />
          </g>
        </svg>
      );
    case "module-integrations-middleware": // Integrations & Middleware: Multi-branch API data exchange nodes
      return (
        <svg className="absolute inset-0 w-full h-full text-black pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.05">
            <rect x="75" y="75" width="50" height="50" rx="6" />
            <circle cx="100" cy="25" r="8" fill="currentColor" />
            <circle cx="100" cy="175" r="8" fill="currentColor" />
            <circle cx="25" cy="100" r="8" fill="currentColor" />
            <circle cx="175" cy="100" r="8" fill="currentColor" />
            <line x1="100" y1="33" x2="100" y2="75" />
            <line x1="100" y1="125" x2="100" y2="167" />
            <line x1="33" y1="100" x2="75" y2="100" strokeDasharray="3 3" />
            <line x1="125" y1="100" x2="167" y2="100" strokeDasharray="3 3" />
          </g>
        </svg>
      );
    case "module-reporting-compliance": // Reporting & Compliance: Minimal compliance locks & data tables
      return (
        <svg className="absolute inset-0 w-full h-full text-black pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.2]" opacity="0.05">
            <rect x="40" y="40" width="120" height="120" rx="8" />
            <line x1="40" y1="75" x2="160" y2="75" />
            <line x1="40" y1="110" x2="160" y2="110" />
            <line x1="85" y1="40" x2="85" y2="160" strokeDasharray="4 2" />
            <circle cx="62" cy="57" r="6" fill="currentColor" />
            <circle cx="122" cy="92" r="6" fill="currentColor" />
            <path d="M110 135 L120 145 L140 125" strokeWidth="2" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}
