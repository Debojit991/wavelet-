import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ServiceContactForm } from '@/components/ServiceContactForm';
import { 
  Rocket, Smartphone, Code2, ShieldCheck, CheckCircle2, 
  HelpCircle, ArrowRight, Lock, CloudOff,
  GitBranch, Mail, User, Settings, Database, Code, 
  LayoutTemplate
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute('/what-we-do/web-mobile-apps')({
  component: WebMobileAppsPage,
});

const deliverySignals = [
  { value: "2–8 weeks", label: "MVP Release Window", helper: "Varies by scope & integration." },
  { value: "1–2 weeks", label: "Design-to-Dev Handoff", helper: "Figma system + component implementation." },
  { value: "Bi-weekly", label: "Release Cadence", helper: "Predictable QA and rollout cycles." },
  { value: "24/7", label: "Long-Term Evolution", helper: "Continuous maintenance support." }
];

const capabilityCards = [
  {
    title: "MVP Product Build",
    description: "Scope precisely and ship the core value fast, without locking yourself into a corner.",
    icon: Rocket,
    tag: "Startups"
  },
  {
    title: "Cross-Platform Mobile",
    description: "A shared codebase for efficiency, with native UX patterns where it counts.",
    icon: Smartphone,
    tag: "Consumer Apps"
  },
  {
    title: "Backend & Scalable APIs",
    description: "Secure authentication, robust data models, and integrations engineered for change.",
    icon: Code2,
    tag: "Platforms"
  },
  {
    title: "QA & Release Ops",
    description: "Comprehensive testing strategies, observability, and highly predictable releases.",
    icon: ShieldCheck,
    tag: "Delivery"
  }
];

const interactivePillars = [
  {
    id: "ux",
    label: "UX Foundation",
    summary: "Frictionless user journeys and interaction patterns built to maximize conversion.",
    bullets: [
      "User flows & task analysis",
      "High-fidelity UI components",
      "Baseline accessibility"
    ],
    svgType: "wireframe"
  },
  {
    id: "engineering",
    label: "Engineering Stack",
    summary: "Modular architecture keeping your codebase highly maintainable as features expand.",
    bullets: [
      "Modular app patterns",
      "Strict API contracts",
      "Centralized state management"
    ],
    svgType: "code"
  },
  {
    id: "release",
    label: "Release Pipeline",
    summary: "A repeatable, automated CI/CD pipeline ensuring zero-downtime deployments.",
    bullets: [
      "Automated CI builds",
      "Environment isolation",
      "Crash monitoring"
    ],
    svgType: "database"
  }
];

const productModules = [
  { name: "Onboarding", notes: "Guided walkthroughs & first-value experience." },
  { name: "Authentication", notes: "Email, OAuth, & SSO-ready secure patterns." },
  { name: "RBAC Controls", notes: "Strict role-based permission gating." },
  { name: "Admin Dashboard", notes: "Centralized user and system management." },
  { name: "Push Notifications", notes: "Transactional and segmented alerting." },
  { name: "Payments", notes: "Secure, integration-based checkout flows." },
  { name: "Maps & Location", notes: "Geocoding and place discovery." },
  { name: "Media Processing", notes: "Optimized image/video upload workflows." }
];

const faqItems = [
  {
    q: "How do you scope an MVP?",
    a: "We map the user journey to identify the critical path, scoping only features that enable primary value. Everything else shifts to post-launch."
  },
  {
    q: "Do we own the source code?",
    a: "Absolutely. Full intellectual property and repository handover is standard."
  },
  {
    q: "How do you manage App Store deployments?",
    a: "We handle the entire submission lifecycle: assets, build signing, and regulatory compliance for both Apple and Google."
  },
  {
    q: "How is cross-platform performance maintained?",
    a: "We establish performance baselines early, utilize native bridging where necessary, and continuously monitor memory/CPU metrics."
  }
];

function WebMobileAppsPage() {
  const [activePillar, setActivePillar] = useState<string>('ux');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
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
    document.title = "Web & Mobile App Development | WAVELET";
  }, []);

  return (
    <div className="min-h-screen bg-[#C5CAE9] font-sans text-slate-900 antialiased selection:bg-indigo-500 selection:text-white overflow-x-hidden pt-16">
      <SiteHeader />

      <main>
        {/* 1. Hero Section - Strictly `#7986CB` (Deep Indigo) with pure white high-contrast text */}
        <section className="relative px-4 py-12 sm:py-16 overflow-hidden border-b border-indigo-400 bg-[#7986CB] text-white">
          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none select-none" style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 relative z-10 text-left">
              <motion.div 
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={sectionTransition}
                className="flex flex-wrap gap-2 mb-4"
              >
                {["Product-First UX", "CI/CD Pipeline", "Maintainable Architecture"].map((chip, i) => (
                  <span key={i} className="inline-flex items-center rounded-full bg-white/20 border border-white/30 px-3 py-1 text-[10px] font-black tracking-widest uppercase shadow-sm">
                    {chip}
                  </span>
                ))}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-4 text-white drop-shadow-md"
              >
                Web & Mobile Apps <br className="hidden sm:inline" />
                <span className="text-indigo-50">People Actually Use.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
                className="text-base sm:text-lg text-indigo-50 font-bold max-w-2xl leading-relaxed mb-6"
              >
                From MVP to scalable product. We engineer web applications and Android/iOS apps with clean architecture, measurable UX, and release-ready operations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
              >
                <Link to="/contact" className="w-full sm:w-auto rounded-full bg-white text-indigo-900 font-black px-8 py-3.5 hover:bg-slate-50 active:scale-95 transition-all text-sm cursor-pointer shadow-lg text-center">
                  Get Started Now
                </Link>
                <Link to="/contact" className="w-full sm:w-auto rounded-full bg-transparent border-2 border-white/70 text-white font-black px-8 py-3.5 hover:bg-white/10 active:scale-95 transition-all text-sm backdrop-blur cursor-pointer text-center">
                  Plan My MVP
                </Link>
              </motion.div>
            </div>

            {/* Right Interactive/Visual Side (Elevated white container) */}
            <div className="lg:col-span-5 relative z-10 w-full">
              <motion.div
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
                className="relative bg-white rounded-[2rem] p-6 shadow-xl border border-indigo-200 overflow-hidden"
              >
                {/* Embedded SVG Wireframe / Mockup representation */}
                <svg className="absolute inset-0 w-full h-full text-indigo-100 pointer-events-none -z-10" viewBox="0 0 400 300" fill="none">
                   <rect x="250" y="50" width="120" height="220" rx="16" className="stroke-indigo-300 stroke-2" fill="#F8FAFC" />
                   <rect x="30" y="80" width="200" height="150" rx="12" className="stroke-indigo-300 stroke-2" fill="#F8FAFC" />
                   <line x1="280" y1="70" x2="340" y2="70" className="stroke-indigo-400 stroke-[4]" strokeLinecap="round" />
                   <line x1="50" y1="100" x2="150" y2="100" className="stroke-indigo-400 stroke-[4]" strokeLinecap="round" />
                </svg>

                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                    Deployment Ready
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="bg-indigo-50 rounded-xl p-3 border border-indigo-100 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-indigo-600" />
                        <span className="text-xs font-black text-slate-900">Mobile Compilation</span>
                     </div>
                     <span className="text-[10px] font-bold text-emerald-600">PASS</span>
                  </div>
                  <div className="bg-indigo-50 rounded-xl p-3 border border-indigo-100 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <LayoutTemplate className="w-4 h-4 text-indigo-600" />
                        <span className="text-xs font-black text-slate-900">Web App Optimization</span>
                     </div>
                     <span className="text-[10px] font-bold text-emerald-600">PASS</span>
                  </div>
                  <div className="bg-indigo-50 rounded-xl p-3 border border-indigo-100 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-indigo-600" />
                        <span className="text-xs font-black text-slate-900">API Contract Check</span>
                     </div>
                     <span className="text-[10px] font-bold text-emerald-600">PASS</span>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </section>

        {/* 2. Delivery Signals - Elevated white cards */}
        <motion.section 
          {...getSectionReveal()}
          className="py-8 px-4 max-w-7xl mx-auto"
        >
          <motion.div 
            {...getGridContainer()}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {deliverySignals.map((stat, i) => (
              <motion.div
                key={i}
                {...getGridItem()}
                className="bg-white border border-indigo-100 rounded-2xl p-5 text-center shadow-md hover:shadow-lg hover:border-indigo-300 transition-all"
              >
                <div className="text-2xl sm:text-3xl font-black mb-1 tracking-tight text-indigo-900">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-black text-slate-800 uppercase tracking-widest mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] font-semibold text-slate-500">
                  {stat.helper}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 3. Capability Grid - Elevated White Cards with SVG Watermarks */}
        <motion.section 
          {...getSectionReveal()}
          className="py-8 px-4 max-w-7xl mx-auto"
        >
          <div className="mb-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">System Architecture</h2>
          </div>

          <motion.div 
            {...getGridContainer()}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {capabilityCards.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div 
                  key={i} 
                  {...getGridItem()}
                  whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
                  className="group relative bg-white border border-indigo-100 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between min-h-[200px]"
                >
                  {/* Inline Programmatic SVG Background */}
                  <CardIllustration type={`grid-${i}`} />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                        {cap.tag}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">{cap.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed max-w-md">{cap.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* 4. Interactive Showcase System */}
        <motion.section 
          {...getSectionReveal()}
          className="py-8 px-4 max-w-7xl mx-auto"
        >
          <div className="bg-white border border-indigo-100 rounded-[2.5rem] p-6 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-5 text-left">
                <span className="text-[9px] uppercase tracking-[0.3em] text-indigo-600 font-black mb-1 block">Component Breakdown</span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 mb-4">
                  The Delivery Foundation
                </h3>
                
                <div className="flex flex-col gap-3">
                  {interactivePillars.map(pillar => (
                    <button 
                      key={pillar.id}
                      onClick={() => setActivePillar(pillar.id)}
                      className={`flex items-center justify-between p-4 rounded-xl border text-left font-black transition-all w-full cursor-pointer text-sm ${
                        activePillar === pillar.id
                          ? 'bg-indigo-50 border-indigo-400 text-indigo-900 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-indigo-200 hover:bg-white'
                      }`}
                    >
                      <span>{pillar.label}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${activePillar === pillar.id ? 'text-indigo-600 translate-x-1' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 min-h-[250px] flex flex-col justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {interactivePillars.map(pillar => (
                    activePillar === pillar.id && (
                      <motion.div
                        key={pillar.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10"
                      >
                        {/* Thematic Illustration per Pillar */}
                        <CardIllustration type={`pillar-${pillar.svgType}`} />

                        <h4 className="text-xl font-black text-slate-900 mb-2">{pillar.label}</h4>
                        <p className="text-slate-700 text-sm font-semibold mb-6 max-w-sm leading-relaxed">{pillar.summary}</p>
                        
                        <div className="space-y-3">
                          {pillar.bullets.map((bullet, idx) => (
                            <div key={idx} className="flex gap-2.5 items-start text-sm font-bold text-slate-800">
                              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </motion.section>

        {/* 5. Product Modules Catalog */}
        <motion.section 
          {...getSectionReveal()}
          className="py-8 px-4 max-w-7xl mx-auto"
        >
          <div className="mb-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-2">Core Product Modules</h2>
            <p className="text-slate-700 font-semibold text-sm">Integrate only what's necessary for launch. Scale the rest later.</p>
          </div>
          
          <motion.div 
            {...getGridContainer()}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {productModules.map((mod, i) => (
              <motion.div 
                key={i} 
                {...getGridItem()}
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.01 }}
                className="bg-white border border-indigo-100 rounded-xl p-4 shadow-sm hover:border-indigo-400 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-2 mb-1.5">
                  <Settings className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <h4 className="text-sm font-black text-slate-900 leading-tight">{mod.name}</h4>
                </div>
                <p className="text-[11px] text-slate-600 font-bold leading-relaxed pl-6">{mod.notes}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 6. Value Icons - Tightened */}
        <motion.section 
          {...getSectionReveal()}
          className="py-8 px-4 max-w-7xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-indigo-100 shadow-md p-6 sm:p-10">
            <motion.div 
              {...getGridContainer()}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            >
              {[
                { title: "Authentication", desc: "MFA, Roles, & Permissions", icon: Lock },
                { title: "Offline-First", desc: "Sync & Network Reliability", icon: CloudOff },
                { title: "App Stores", desc: "Automated Store Submissions", icon: GitBranch }
              ].map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div 
                    key={i} 
                    {...getGridItem()}
                    className="flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 mb-3 shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-black text-slate-900 mb-1">{val.title}</h3>
                    <p className="text-xs font-semibold text-slate-600">{val.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* 7. FAQ Accordion & Contact - Side by Side on Large screens for compression */}
        <motion.section 
          {...getSectionReveal()}
          className="py-12 px-4 max-w-7xl mx-auto mb-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* FAQ */}
            <div className="bg-white border border-indigo-100 rounded-[2rem] p-6 sm:p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-8 h-8 text-indigo-600" />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Common Questions</h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-2.5">
                {faqItems.map((item, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-slate-50 border border-slate-200 rounded-xl px-4 hover:border-indigo-300 transition-colors">
                    <AccordionTrigger className="text-sm font-black text-slate-900 hover:text-indigo-700 hover:no-underline py-3.5 text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed pb-3.5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            {/* Contact Form */}
            <div className="bg-white border border-indigo-100 rounded-[2rem] p-3 shadow-xl relative overflow-hidden">
              <ServiceContactForm
                layout="single-card"
                theme="violet"
                title="Scope Your MVP"
                description="Share your requirements. We'll map the fastest, most scalable path to release."
                buttonText="Request Architecture Review"
                successHeading="Inquiry Submitted!"
                successMessage="An engineer will respond shortly with next steps."
                subject="WAVELET: Web & Mobile Applications Inquiry"
                fields={[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Full Name", required: true },
                  { name: "email", label: "Work Email", type: "email", placeholder: "you@company.com", required: true },
                  { name: "message", label: "Project Details", type: "textarea", placeholder: "App functionality, timeline, specific integrations...", required: true }
                ]}
              />
            </div>

          </div>
        </motion.section>
      </main>

      <EnterpriseFooter hideCta={true} />
    </div>
  );
}

// Programmatic SVGs matching the Indigo/Soft Purple theme
function CardIllustration({ type }: { type: string }) {
  const baseClasses = "absolute inset-0 w-full h-full pointer-events-none select-none -z-10";
  
  if (type.startsWith('grid-')) {
    // Variations for the capability grid
    const index = type.split('-')[1];
    return (
      <svg className={`${baseClasses} text-indigo-500`} viewBox="0 0 300 200" fill="none">
        <g opacity="0.06" className="stroke-current stroke-[2]">
          {index === '0' && <circle cx="250" cy="150" r="80" />}
          {index === '1' && <rect x="200" y="50" width="80" height="120" rx="12" />}
          {index === '2' && <path d="M180 180 L280 80 M180 80 L280 180" />}
          {index === '3' && <polygon points="250,50 200,150 300,150" />}
        </g>
      </svg>
    );
  }

  // Showcase SVGs
  switch (type) {
    case 'pillar-wireframe':
      return (
        <svg className={`${baseClasses} opacity-5 text-indigo-900 right-0 top-0 translate-x-1/4 -translate-y-1/4 scale-150`} viewBox="0 0 200 200" fill="none">
           <rect x="20" y="20" width="160" height="160" rx="8" className="stroke-current stroke-[4]" />
           <rect x="40" y="40" width="120" height="40" rx="4" className="stroke-current stroke-[4]" />
           <rect x="40" y="100" width="50" height="60" rx="4" className="stroke-current stroke-[4]" />
           <rect x="110" y="100" width="50" height="60" rx="4" className="stroke-current stroke-[4]" />
        </svg>
      );
    case 'pillar-code':
      return (
        <svg className={`${baseClasses} opacity-5 text-indigo-900 right-0 top-0 translate-x-1/4 -translate-y-1/4 scale-150`} viewBox="0 0 200 200" fill="none">
           <path d="M60 50 L20 100 L60 150 M140 50 L180 100 L140 150" className="stroke-current stroke-[8]" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'pillar-database':
      return (
        <svg className={`${baseClasses} opacity-5 text-indigo-900 right-0 top-0 translate-x-1/4 -translate-y-1/4 scale-150`} viewBox="0 0 200 200" fill="none">
           <ellipse cx="100" cy="50" rx="60" ry="20" className="stroke-current stroke-[6]" />
           <path d="M40 50 L40 150 A 60 20 0 0 0 160 150 L160 50" className="stroke-current stroke-[6]" />
           <ellipse cx="100" cy="100" rx="60" ry="20" className="stroke-current stroke-[6]" />
        </svg>
      );
    default:
      return null;
  }
}
