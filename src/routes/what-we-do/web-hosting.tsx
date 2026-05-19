import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ServiceContactForm } from '@/components/ServiceContactForm';
import { 
  Server, Shield, Zap, Globe, HardDrive, CheckCircle2, 
  HelpCircle, ArrowRight, Layers, Lock, Cpu, Database, 
  Activity, Mail, User
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute('/what-we-do/web-hosting')({
  component: WebHostingPage,
});

const proofStats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "< 200ms", label: "Global Server Response" },
  { value: "Tbps", label: "DDoS Mitigation" },
  { value: "24/7/365", label: "Active Monitoring" }
];

const capabilityCards = [
  {
    title: "Managed High-Performance Hosting",
    description: "Enterprise-grade infrastructure optimized for your specific workloads. We handle server administration, updates, and scaling.",
    icon: Server,
    gradient: "from-orange-500 to-rose-500",
    tag: "Infrastructure"
  },
  {
    title: "Global Domain Management",
    description: "Centralized control for your entire domain portfolio. Secure DNS propagation, automated renewals, and strict access controls.",
    icon: Globe,
    gradient: "from-rose-500 to-orange-600",
    tag: "Identity"
  },
  {
    title: "SSL & Advanced Security",
    description: "Military-grade encryption and active threat mitigation. We deploy automated SSL, Web Application Firewalls (WAF), and malware scanning.",
    icon: Shield,
    gradient: "from-orange-600 to-red-500",
    tag: "Protection"
  },
  {
    title: "Scalable Cloud Architecture",
    description: "Elastic environments that grow instantly with your traffic. Auto-scaling nodes, load balancing, and high-availability clustered databases.",
    icon: CloudNetworkIcon,
    gradient: "from-rose-500 to-red-600",
    tag: "Scalability"
  }
];

const largeValueCards = [
  {
    title: "Speed That Converts",
    subtitle: "EDGE CACHING / NVME STORAGE / CDN",
    description: "Page speed directly correlates with revenue. Our hosting architecture is built on enterprise NVMe SSDs, aggressive caching layers, and a global CDN to ensure your application loads instantaneously for users anywhere in the world.",
    bullets: [
      "Global Edge Content Delivery Network (CDN)",
      "Object and Database Query Caching (Redis/Memcached)",
      "Enterprise-Grade NVMe SSD Infrastructure",
      "HTTP/3 & TLS 1.3 Optimized Protocols"
    ],
    highlight: "text-orange-700 border-orange-200 bg-orange-50"
  },
  {
    title: "Security That Protects",
    subtitle: "WAF / DDOS MITIGATION / ISOLATION",
    description: "We assume your application is always under attack. Our security perimeter includes L3/L4/L7 DDoS mitigation, real-time machine learning threat intelligence, and strict container isolation to prevent cross-tenant contamination.",
    bullets: [
      "Automated Web Application Firewall (WAF)",
      "Always-On Multi-Tbps DDoS Protection",
      "Isolated Container Environments",
      "Real-Time File Integrity Monitoring"
    ],
    highlight: "text-rose-700 border-rose-200 bg-rose-50"
  }
];

const featuresList = [
  "Dedicated IPv4 & IPv6 Addresses",
  "Automated Daily Off-site Backups",
  "Staging & Production Environments",
  "Custom Web Application Firewall (WAF)",
  "Free SSL Certificate Automation",
  "Developer API & SSH Access",
  "Advanced Resource Analytics Dashboard",
  "Zero-Downtime Migration Services"
];

const techStackList = [
  "Nginx", "LiteSpeed", "Redis", "MariaDB", "Docker", "Kubernetes", "Cloudflare", "Ubuntu"
];

const iconFeatures = [
  {
    title: "Automated Scalability",
    description: "Traffic spikes shouldn't cause downtime. Our elastic infrastructure automatically allocates CPU and RAM during high-load events.",
    icon: Activity
  },
  {
    title: "Disaster Recovery",
    description: "Sleep soundly with redundant storage and automated daily backups retained in geographically diverse data centers.",
    icon: HardDrive
  },
  {
    title: "Expert Engineering Support",
    description: "Bypass L1 tech support. Connect directly with senior system administrators who understand complex infrastructure challenges.",
    icon: Zap
  }
];

const faqItems = [
  {
    question: "Do you offer migration assistance from our current provider?",
    answer: "Yes. Our engineering team handles the entire migration process with zero downtime, moving your databases, files, and DNS configurations seamlessly."
  },
  {
    question: "How do you guarantee your 99.99% uptime SLA?",
    answer: "We use high-availability clustering, redundant network uplinks, self-healing architecture, and proactive 24/7 monitoring to intercept issues before they impact availability."
  },
  {
    question: "Are your hosting environments compliant with industry standards?",
    answer: "Our data centers are SOC 2, ISO 27001, and PCI-DSS compliant. We implement strict access controls and encryption to ensure your data meets regulatory requirements."
  },
  {
    question: "What level of access do our developers have to the servers?",
    answer: "We offer tailored access levels depending on your management tier. This ranges from isolated control panels and SFTP to full root SSH access for custom deployments."
  },
  {
    question: "How quickly can resources be scaled if our traffic surges?",
    answer: "Instantly. Our container-based architecture can auto-scale resources automatically based on traffic thresholds, ensuring stable performance during sudden traffic spikes."
  }
];

// Helper icons
function CloudNetworkIcon(props: any) {
  return <Cpu {...props} />;
}

function WebHostingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'specs' | 'security'>('specs');
  
  // Interactive Live Dashboard variables
  const [activeLayoutBlock, setActiveLayoutBlock] = useState<string>('cpu');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [uptimeValue, setUptimeValue] = useState<string>("99.999%");

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
    document.title = "Web & Hosting Services | WAVELET";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate slight uptime metric fluctuation
      const rand = Math.random();
      if(rand > 0.8) setUptimeValue("100.00%");
      else if(rand > 0.4) setUptimeValue("99.999%");
      else setUptimeValue("99.998%");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFCCBC] font-sans text-slate-900 antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden pt-16">
      <SiteHeader />

      <main>
        {/* 1. Hero Section - Strictly `#FF8A65` (Warm Coral) backdrop with pure high-contrast text */}
        <section className="relative px-4 py-10 sm:py-12 overflow-hidden border-b border-orange-300 bg-[#FF8A65] text-slate-950">
          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Content (All text conforms to the dark-contrast rule for AAA readability) */}
            <div className="lg:col-span-7 relative z-10 text-left">
              <motion.span 
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={sectionTransition}
                className="inline-flex items-center gap-2 rounded-full bg-orange-100/60 border border-orange-700/30 px-4 py-1.5 text-xs sm:text-sm font-black tracking-widest uppercase text-slate-900 shadow-sm mb-4"
              >
                <Server className="w-3.5 h-3.5 text-orange-900" />
                Enterprise Cloud Infrastructure
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-4 text-slate-950"
              >
                Uptime Is Revenue. <br className="hidden sm:inline" />
                Never Go <span className="bg-white text-transparent bg-clip-text drop-shadow-sm">Offline.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
                className="text-base sm:text-lg text-slate-900 font-bold max-w-2xl leading-relaxed mb-6"
              >
                Secure, blazing-fast managed hosting engineered for high-traffic environments. We deploy intelligent edge caching and automated threat mitigation to keep your digital assets protected and performant.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
              >
                <Link to="/contact" className="w-full sm:w-auto rounded-full bg-slate-950 text-white font-bold px-8 py-3.5 hover:bg-slate-800 active:scale-95 transition-all text-sm cursor-pointer shadow-md text-center">
                  Deploy Infrastructure
                </Link>
                <Link to="/contact" className="w-full sm:w-auto rounded-full bg-white/90 border border-orange-900/20 text-slate-950 font-bold px-8 py-3.5 hover:bg-white hover:scale-[1.02] active:scale-95 transition-all text-sm backdrop-blur cursor-pointer shadow-sm text-center">
                  Talk to an Architect
                </Link>
              </motion.div>

              {/* Status Badge */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.5 }}
                className="mt-6 flex items-center gap-2.5 text-xs font-black text-slate-900 uppercase tracking-widest"
              >
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span>Global Network Status: <strong className="text-white drop-shadow-sm font-extrabold ml-1">OPERATIONAL</strong></span>
              </motion.div>
            </div>

            {/* Right: Live Interactive Server Engine (Elevated white container) */}
            <div className="lg:col-span-5 relative z-10 w-full">
              <motion.div
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
                className="relative bg-white border border-orange-200 rounded-[2rem] p-5 shadow-lg backdrop-blur-md overflow-hidden"
              >
                {/* Header controls */}
                <div className="flex items-center justify-between pb-3 border-b border-orange-100 mb-4">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-orange-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-orange-800 bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200/60">
                    Live Telemetry
                  </span>
                </div>

                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">
                  System Metrics: Click to inspect cluster health
                </p>

                {/* Dashboard Editor Canvas */}
                <div className="space-y-2 bg-slate-50 rounded-xl p-3 border border-slate-200 min-h-[180px] flex flex-col justify-between">
                  
                  {/* Dynamic CPU Load */}
                  <div 
                    onClick={() => setActiveLayoutBlock('cpu')}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                      activeLayoutBlock === 'cpu' 
                        ? 'border-orange-500 bg-orange-50 shadow-sm text-slate-900 font-extrabold' 
                        : 'border-slate-200 bg-white hover:border-orange-300 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-orange-600" />
                      <span className="text-[10px] font-extrabold tracking-tight">CPU Cluster Load</span>
                    </div>
                    <span className="text-[9px] font-extrabold text-emerald-600">12% Idle</span>
                  </div>

                  {/* Dynamic Uptime */}
                  <div 
                    onClick={() => setActiveLayoutBlock('uptime')}
                    className={`p-3 rounded-lg border transition-all cursor-pointer flex flex-col gap-1.5 ${
                      activeLayoutBlock === 'uptime' 
                        ? 'border-rose-500 bg-rose-50 shadow-sm text-slate-900 font-extrabold' 
                        : 'border-slate-200 bg-white hover:border-orange-300 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-rose-500" />
                        <span className="text-[10px] font-extrabold tracking-tight">System SLA Uptime</span>
                      </div>
                      <span className="text-[9px] font-extrabold text-rose-600 animate-pulse">{uptimeValue}</span>
                    </div>
                    <div className="h-1 bg-rose-200 rounded-full w-full overflow-hidden">
                      <div className="h-full bg-rose-500 w-[99%] animate-pulse" />
                    </div>
                  </div>

                  {/* Dynamic Security */}
                  <div 
                    onClick={() => setActiveLayoutBlock('security')}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                      activeLayoutBlock === 'security' 
                        ? 'border-orange-600 bg-orange-50 shadow-sm text-slate-900 font-extrabold' 
                        : 'border-slate-200 bg-white hover:border-orange-300 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-orange-600" />
                      <span className="text-[10px] font-extrabold tracking-tight">L7 Web Application Firewall</span>
                    </div>
                    <span className="text-[9px] font-extrabold text-emerald-600">Active</span>
                  </div>

                </div>

                {/* Inspector detail panel */}
                <div className="mt-3 pt-3 border-t border-slate-100 bg-white rounded-xl p-3 min-h-[90px] flex flex-col justify-between shadow-sm">
                  <AnimatePresence mode="wait">
                    {activeLayoutBlock === 'cpu' && (
                      <motion.div
                        key="cpu"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-1"
                      >
                        <h4 className="text-[10px] font-black text-orange-700 uppercase tracking-wider">Node Auto-Scaling</h4>
                        <p className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                          System detects traffic anomalies and provisions additional core resources dynamically to prevent bottleneck latency.
                        </p>
                      </motion.div>
                    )}
                    {activeLayoutBlock === 'uptime' && (
                      <motion.div
                        key="uptime"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-1"
                      >
                        <h4 className="text-[10px] font-black text-rose-600 uppercase tracking-wider">High Availability</h4>
                        <p className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                          Redundant routing and load balancing across isolated fault domains ensures constant accessibility.
                        </p>
                      </motion.div>
                    )}
                    {activeLayoutBlock === 'security' && (
                      <motion.div
                        key="security"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-1"
                      >
                        <h4 className="text-[10px] font-black text-orange-800 uppercase tracking-wider">Threat Mitigation</h4>
                        <p className="text-[11px] text-slate-700 leading-relaxed font-semibold">
                          Real-time AI packet inspection filters malicious traffic and DDoS attempts before they reach your origin server.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-3 pt-2 border-t border-slate-50 flex justify-between items-center text-[9px] text-slate-500 font-extrabold uppercase">
                    <span>Edge Datacenter</span>
                    <span className="text-slate-900 font-black">Region: US-EAST-1</span>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </section>

        {/* 2. ProofStats Section - Compact white elevated grid floating over peach body */}
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
                className="bg-white border border-orange-200/60 rounded-2xl p-5 sm:p-6 text-center hover:border-orange-400 transition-all shadow-md"
              >
                <div className="text-3xl sm:text-4xl font-black mb-1 tracking-tight bg-gradient-to-r from-orange-600 via-rose-500 to-orange-700 bg-clip-text text-transparent">
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
            <span className="text-[9px] uppercase tracking-[0.4em] text-orange-700 font-black mb-1">Core Infrastructure</span>
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
                  className="group relative bg-white border border-orange-200/60 rounded-2xl p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:border-orange-400 hover:shadow-md flex flex-col justify-between min-h-[250px]"
                >
                  {/* Glowing background watermark SVG */}
                  <CardIllustration type={String(i)} />

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-700 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200 shadow-inner">
                        <CapIcon className="w-5 h-5 stroke-[1.8px]" />
                      </div>
                      <span className="text-[8px] font-extrabold uppercase tracking-widest text-orange-900 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
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

                  <div className="relative z-10 pt-3 flex items-center gap-1 text-[9px] text-slate-500 font-black uppercase tracking-widest group-hover:text-orange-700 transition-colors">
                    <span>View Specifications</span>
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
            <span className="text-[9px] uppercase tracking-[0.4em] text-rose-600 font-black mb-1">Architectural Excellence</span>
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
                className="relative bg-white border border-orange-200 rounded-[2.5rem] p-6 sm:p-8 overflow-hidden shadow-md"
              >
                {/* Tech background element */}
                <CardIllustration type={`large-${i}`} />

                <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                  <div>
                    <div className="flex items-center justify-between border-b border-orange-100 pb-4 mb-4">
                      <span className="text-[9px] font-black text-orange-700 uppercase tracking-widest block">
                        {card.subtitle}
                      </span>
                      <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded-md border ${card.highlight}`}>
                        Layer 0{i + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold mb-4">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-orange-100">
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-3">
                      Deployed Technologies
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {card.bullets.map((b, idx) => (
                        <div key={idx} className="flex gap-2 items-start text-xs font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
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
          <div className="bg-white border border-orange-200 rounded-[2.5rem] p-6 sm:p-8 shadow-md relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
              
              <div className="lg:col-span-5 text-left">
                <span className="text-[9px] uppercase tracking-[0.4em] text-orange-700 font-black mb-1 block">Included In Every Plan</span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-none mb-4">
                  Fully Managed Ecosystem
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6 font-semibold">
                  We handle the complexities of system administration so your team can focus on shipping features. Explore the core specifications included natively.
                </p>

                {/* Selectors */}
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setActiveTab('specs')}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left font-black transition-all w-full cursor-pointer text-xs ${
                      activeTab === 'specs'
                        ? 'bg-orange-100/60 border-orange-500 text-slate-900 shadow-sm'
                        : 'bg-orange-50/40 border-orange-100 text-slate-600 hover:border-orange-300'
                    }`}
                  >
                    <span>Infrastructure Specifications</span>
                    <Layers className={`w-4 h-4 transition-transform ${activeTab === 'specs' ? 'text-orange-600 scale-110' : ''}`} />
                  </button>
                  <button 
                    onClick={() => setActiveTab('security')}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left font-black transition-all w-full cursor-pointer text-xs ${
                      activeTab === 'security'
                        ? 'bg-rose-100/60 border-rose-500 text-slate-900 shadow-sm'
                        : 'bg-rose-50/40 border-rose-100 text-slate-600 hover:border-rose-300'
                    }`}
                  >
                    <span>Security & Automation Layers</span>
                    <Lock className={`w-4 h-4 transition-transform ${activeTab === 'security' ? 'text-rose-600 scale-110' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Display side inside elevated styling */}
              <div className="lg:col-span-7 bg-orange-50/40 border border-orange-100 rounded-2xl p-5 sm:p-6 min-h-[220px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeTab === 'specs' ? (
                    <motion.div
                      key="specs"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-orange-100">
                        <Layers className="w-4 h-4 text-orange-600" />
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Hardware & Network</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {featuresList.slice(0, 4).map((item, idx) => (
                          <div key={idx} className="flex gap-2 items-center text-xs font-semibold text-slate-800">
                            <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="security"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-rose-100">
                        <Lock className="w-4 h-4 text-rose-600" />
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Protection Protocols</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {featuresList.slice(4, 8).map((item, idx) => (
                          <div key={idx} className="flex gap-2 items-center text-xs font-semibold text-slate-800">
                            <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0" />
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
                  className="bg-white border border-orange-200/60 rounded-2xl p-5 sm:p-6 text-left hover:border-orange-400 transition-all flex flex-col gap-3 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 shadow-inner">
                    <FeatIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* 7. ToolStackStrip Section - Spacing compressed */}
        <section className="py-4 bg-white border-y border-orange-200/60 overflow-hidden shadow-sm">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-3">
            <span className="text-[8px] uppercase tracking-[0.4em] text-slate-500 font-black">Supported Technologies</span>
            
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 opacity-70 hover:opacity-100 transition-all">
              {techStackList.map((tool, i) => (
                <span 
                  key={i} 
                  className="text-base sm:text-lg font-extrabold tracking-tighter text-slate-700 hover:text-orange-700 transition-colors uppercase"
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
              <HelpCircle className="w-8 h-8 text-orange-600 mb-2 animate-bounce" />
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-none">Frequently Asked Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-2.5">
              {faqItems.map((item, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`} 
                  className="bg-white border border-orange-200/60 rounded-xl px-4 hover:border-orange-400 transition-colors shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="text-sm font-extrabold text-slate-900 hover:text-orange-700 hover:no-underline py-3.5 text-left cursor-pointer">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-3.5 text-xs sm:text-sm font-semibold">
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
          className="py-6 sm:py-8 px-4 mb-10"
        >
          <div className="max-w-4xl mx-auto">
            <ServiceContactForm
              layout="split"
              theme="orange"
              title="Let's Connect"
              description="Ready to upgrade your infrastructure? Our system architects are prepared to review your workload and plan a zero-downtime migration."
              buttonText="Request Migration Plan"
              successHeading="Request Received!"
              successMessage="Our engineering architects will review your infrastructure parameters and reach out within 24 business hours."
              subject="WAVELET: Web & Hosting Inquiry"
              bullets={[
                { iconName: "zap", title: "Quick Response", subtitle: "Under 24 hours" },
                { iconName: "shield", title: "Secure Consultation", subtitle: "Strictly Confidential" }
              ]}
              fields={[
                { name: "name", label: "Full Name", type: "text", placeholder: "Full Name", required: true },
                { name: "email", label: "Work Email", type: "email", placeholder: "you@company.com", required: true },
                { name: "message", label: "Current Traffic / Architecture", type: "textarea", placeholder: "Tell us about your current infrastructure needs...", required: true }
              ]}
            />
          </div>
        </motion.section>
      </main>

      <EnterpriseFooter hideCta={true} />
    </div>
  );
}

// Warm complementary watermark SVG illustrations mapping
function CardIllustration({ type }: { type: string }) {
  switch (type) {
    case "0": // Server
      return (
        <svg className="absolute inset-0 w-full h-full text-orange-500 pointer-events-none select-none -z-10 animate-pulse" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.5]" opacity="0.1">
            <rect x="50" y="40" width="100" height="30" rx="4" />
            <rect x="50" y="85" width="100" height="30" rx="4" />
            <rect x="50" y="130" width="100" height="30" rx="4" />
            <circle cx="70" cy="55" r="3" fill="currentColor" />
            <circle cx="70" cy="100" r="3" fill="currentColor" />
            <circle cx="70" cy="145" r="3" fill="currentColor" />
            <line x1="90" y1="55" x2="130" y2="55" />
            <line x1="90" y1="100" x2="130" y2="100" />
            <line x1="90" y1="145" x2="130" y2="145" />
          </g>
        </svg>
      );
    case "1": // Globe / Identity
      return (
        <svg className="absolute inset-0 w-full h-full text-rose-500 pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.5]" opacity="0.1">
            <circle cx="100" cy="100" r="60" />
            <ellipse cx="100" cy="100" rx="30" ry="60" />
            <line x1="40" y1="100" x2="160" y2="100" />
            <line x1="55" y1="60" x2="145" y2="60" />
            <line x1="55" y1="140" x2="145" y2="140" />
          </g>
        </svg>
      );
    case "2": // Shield
      return (
        <svg className="absolute inset-0 w-full h-full text-red-500 pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.5]" opacity="0.1">
            <path d="M100 30 L40 50 L40 100 C40 150 90 170 100 180 C110 170 160 150 160 100 L160 50 Z" />
            <path d="M80 100 L95 115 L125 80" />
          </g>
        </svg>
      );
    case "3": // Cloud Network
      return (
        <svg className="absolute inset-0 w-full h-full text-rose-600 pointer-events-none select-none -z-10" viewBox="0 0 200 200" fill="none">
          <g className="stroke-current stroke-[1.5]" opacity="0.1">
            <circle cx="100" cy="70" r="15" />
            <circle cx="50" cy="130" r="15" />
            <circle cx="150" cy="130" r="15" />
            <line x1="88" y1="82" x2="62" y2="118" />
            <line x1="112" y1="82" x2="138" y2="118" />
            <line x1="65" y1="130" x2="135" y2="130" />
          </g>
        </svg>
      );
    case "large-0":
      return (
        <svg className="absolute inset-0 w-full h-full text-orange-500 pointer-events-none select-none -z-10" viewBox="0 0 400 300" fill="none">
          <g className="stroke-current stroke-[1.5]" opacity="0.08">
             <path d="M50 150 Q 150 50 200 150 T 350 150" strokeDasharray="5 5" />
             <circle cx="200" cy="150" r="50" />
             <circle cx="50" cy="150" r="10" />
             <circle cx="350" cy="150" r="10" />
          </g>
        </svg>
      );
    case "large-1":
      return (
        <svg className="absolute inset-0 w-full h-full text-rose-500 pointer-events-none select-none -z-10" viewBox="0 0 400 300" fill="none">
          <g className="stroke-current stroke-[1.5]" opacity="0.08">
             <rect x="100" y="50" width="200" height="200" rx="20" />
             <rect x="120" y="70" width="160" height="160" rx="10" strokeDasharray="8 4" />
             <circle cx="200" cy="150" r="30" />
             <path d="M200 120 L200 180 M170 150 L230 150" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}
