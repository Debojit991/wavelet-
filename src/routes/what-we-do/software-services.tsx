import { createFileRoute, Link } from '@tanstack/react-router';
import { Layers, Shield, Rocket, HelpCircle, Plus, ArrowUpRight, Check } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { ServiceContactForm } from '@/components/ServiceContactForm';

export const Route = createFileRoute('/what-we-do/software-services')({
  component: SoftwareServicesRoute,
});

const softwareServicesData = {
  title: "Software Services",
  subtitle: "We engineer high-performance, scalable custom software solutions designed to solve complex business challenges and drive digital transformation.",
  stats: [
    { value: "500+", label: "Projects Delivered" },
    { value: "150+", label: "Expert Engineers" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Retention" }
  ],
  subServices: [
    { title: "Custom App Dev", description: "Tailored full-stack applications built with modern frameworks for maximum scalability.", gradient: "bg-gradient-to-b from-indigo-500/10 via-indigo-600/5 to-transparent" },
    { title: "Legacy Modernization", description: "Seamlessly migrating monolithic systems to cloud-native microservices architectures.", gradient: "bg-gradient-to-b from-purple-500/10 via-purple-600/5 to-transparent" },
    { title: "API Ecosystems", description: "Building robust, secure API layers to connect your enterprise data and third-party services.", gradient: "bg-gradient-to-b from-blue-500/10 via-blue-600/5 to-transparent" },
    { title: "SaaS Platforms", description: "End-to-end multi-tenant product engineering from MVP to global scale.", gradient: "bg-gradient-to-b from-rose-500/10 via-rose-600/5 to-transparent" }
  ],
  media: [
    { 
      title: "Enterprise Grade Delivery", 
      image: "/software_engineering_illustration.png",
      description: "Proven methodologies. Scalable solutions. Rigorous quality assurance."
    },
    { 
      title: "Agile Development Lifecycle", 
      image: "/cloud_architecture_illustration.png",
      description: "Iterative velocity. Continuous integration. Rapid value realization."
    }
  ],
  features: [
    { icon: Layers, title: "Microservices Architecture", description: "Decoupled services for independent scaling and failure isolation.", iconColor: "text-blue-600 bg-blue-100" },
    { icon: Shield, title: "Security by Design", description: "Integrated security protocols from the first line of code to production.", iconColor: "text-purple-600 bg-purple-100" },
    { icon: Rocket, title: "Agile CI/CD", description: "Continuous integration and deployment for rapid, reliable feature release.", iconColor: "text-emerald-600 bg-emerald-100" }
  ],
  alliances: ["MICROSOFT", "AWS", "DOCKER", "KUBERNETES", "REACT"],
  faqs: [
    { question: "What is your typical development methodology?", answer: "We follow a strict Agile-Scrum framework with two-week sprints, ensuring transparency and continuous feedback throughout the lifecycle." },
    { question: "How do you ensure code quality?", answer: "Our process includes automated unit testing, peer code reviews, and rigorous QA automation cycles before any release." },
    { question: "Do you provide post-launch support and maintenance?", answer: "Yes, we offer comprehensive post-launch Service Level Agreements (SLAs) to ensure your software remains secure, updated, and optimized for performance." }
  ]
};

function SoftwareServicesRoute() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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
    <div className="w-full bg-[#747ee8] min-h-screen font-sans text-slate-900 antialiased selection:bg-indigo-500/10 selection:text-indigo-600 overflow-x-hidden pt-20">
      
      {/* 1. Hero Section - exact #747ee8 */}
      <section className="relative bg-[#747ee8] pt-12 sm:py-16 px-4 overflow-hidden text-center">
        {/* Glow accent */}
        <div className="absolute inset-0 opacity-40 pointer-events-none select-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)" }} />
        
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={sectionTransition}
            className="inline-flex items-center gap-2 rounded-full bg-white/95 border border-indigo-200 px-4 py-1.5 text-xs sm:text-sm font-extrabold tracking-widest uppercase text-indigo-700 shadow-sm mb-4"
          >
            <span className="h-2 w-2 rounded-full bg-[#747ee8] animate-pulse" />
            Software Services
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={sectionTransition}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05] mb-4 max-w-3xl"
          >
            {softwareServicesData.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="text-base sm:text-lg text-indigo-50/95 font-semibold max-w-2xl leading-relaxed mb-6"
          >
            {softwareServicesData.subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
          >
            <Link to="/contact" className="w-full sm:w-auto rounded-full bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-10 py-4.5 hover:scale-[1.02] active:scale-95 transition-all shadow-md text-base cursor-pointer text-center">
              Get Started Now
            </Link>
            <Link to="/contact" className="w-full sm:w-auto rounded-full bg-indigo-600/30 border border-indigo-300/40 text-white hover:bg-indigo-600/50 font-bold px-10 py-4.5 hover:scale-[1.02] active:scale-95 transition-all text-base backdrop-blur cursor-pointer text-center">
              Watch Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Global Background Body - exact #d3d5f2 - Highly Compact Spacing */}
      <div className="bg-[#d3d5f2] w-full py-4 sm:py-6 space-y-6 sm:space-y-8 relative z-10">
        
        {/* Stats Strip - Zero Dead Space overlay */}
        <section className="relative z-20 -mt-12 px-4">
          <motion.div 
            {...getGridContainer()}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md border border-white/50 rounded-3xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-lg shadow-indigo-900/5"
          >
            {softwareServicesData.stats.map((stat, i) => (
              <motion.div key={i} {...getGridItem()} className="flex flex-col gap-1">
                <span className="text-3xl sm:text-4xl font-black text-[#747ee8] tracking-tight">{stat.value}</span>
                <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Sub-Services Grid */}
        <motion.section {...getSectionReveal()} className="px-4 py-2">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              {...getGridContainer()}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {softwareServicesData.subServices.map((service, i) => (
                <motion.div 
                  key={i} 
                  {...getGridItem()}
                  whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
                  className="bg-white/70 hover:bg-white/95 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-md transition-all duration-300 flex flex-col justify-between min-h-[180px] group cursor-pointer"
                >
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-lg font-black text-gray-900 tracking-tight mb-2 group-hover:text-[#747ee8] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-[#747ee8] uppercase tracking-wider mt-4">
                      Explore Capabilities
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Transforming IT Ecosystems (Media/Vibrant Graphics) */}
        <motion.section {...getSectionReveal()} className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-indigo-700 font-extrabold mb-1">Architecture</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">Transforming IT Ecosystems</h2>
            </div>
            
            <div className="space-y-12 sm:space-y-20">
              {softwareServicesData.media.map((item, i) => {
                // Dynamic Flow: Alternate left/right based on index
                const isEven = i % 2 === 0;
                return (
                  <motion.div 
                    key={i}
                    {...getGridContainer()}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                  >
                    {/* Text Column */}
                    <div className={`md:col-span-5 flex flex-col justify-center space-y-4 ${isEven ? 'md:order-1 order-2' : 'md:order-2 order-2'}`}>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-extrabold text-[#747ee8] bg-indigo-50 px-2 py-1 rounded w-fit block">
                        Modern Standard
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                        {item.description}
                      </p>
                    </div>

                    {/* Image Column */}
                    <div className={`md:col-span-7 flex justify-center ${isEven ? 'md:order-2 order-1' : 'md:order-1 order-1'} mb-6 md:mb-0`}>
                      <div className="bg-white/70 hover:bg-white/95 backdrop-blur-sm rounded-3xl p-4 border border-white/50 shadow-md w-full overflow-hidden flex items-center justify-center transition-all duration-300 group">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-auto aspect-video object-cover rounded-2xl shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Unlock the Future (Split Features with glowing security illustration) */}
        <motion.section {...getSectionReveal()} className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-indigo-700 font-extrabold mb-1">Capabilities</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">Unlock the Future</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left features column (Text Left to continue the alternating flow) */}
              <motion.div 
                {...getGridContainer()}
                className="md:col-span-7 space-y-4 md:order-1 order-2"
              >
                {softwareServicesData.features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div 
                      key={i} 
                      {...getGridItem()}
                      className="flex items-start gap-4 bg-white/70 hover:bg-white/90 rounded-3xl p-5 border border-white/50 shadow-sm transition-all duration-300 group"
                    >
                      <div className={`p-3 rounded-2xl shrink-0 ${feature.iconColor} transition-transform group-hover:scale-110`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-gray-900 tracking-tight mb-1">{feature.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-650 font-semibold leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Right visual column (Image Right) */}
              <div className="md:col-span-5 flex justify-center md:order-2 order-1 mb-6 md:mb-0">
                <div className="bg-white/70 hover:bg-white/95 backdrop-blur-sm rounded-3xl p-4 border border-white/50 shadow-md max-w-sm w-full overflow-hidden flex items-center justify-center transition-all duration-300 group">
                  <img 
                    src="/data_security_illustration.png" 
                    alt="Data Security" 
                    className="w-full h-auto aspect-square object-contain rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

            </div>
          </div>
        </motion.section>

        {/* Strategic Partners (Compact Alliances) */}
        <motion.section {...getSectionReveal()} className="py-4 border-y border-indigo-150">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <span className="text-[9px] uppercase tracking-[0.3em] font-extrabold text-indigo-700/80 mb-6 block">Strategic Alliances</span>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-80">
              {softwareServicesData.alliances.map((alliance) => (
                <span key={alliance} className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-slate-700/90 hover:text-[#747ee8] transition-colors cursor-pointer">
                  {alliance}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ - Spacing Compacted & Duplicates Pruned */}
        <motion.section {...getSectionReveal()} className="px-4 py-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-indigo-700 font-extrabold mb-1">FAQ</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-3">
              {softwareServicesData.faqs.map((faq, i) => (
                <div key={i} className="bg-white/80 rounded-2xl border border-white/50 shadow-sm overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left transition-all"
                  >
                    <span className="text-sm sm:text-base font-extrabold text-gray-900 hover:text-[#747ee8] transition-colors">
                      {faq.question}
                    </span>
                    <div className="shrink-0 p-1 bg-indigo-50 rounded-lg">
                      <Plus className={`h-4 w-4 text-[#747ee8] transition-transform duration-300 ${openFaq === i ? 'rotate-45' : 'rotate-0'}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-indigo-50/50"
                      >
                        <p className="p-5 text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold bg-gray-50/30">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Let's Connect Form Section */}
        <motion.section 
          {...getSectionReveal()}
          className="py-6 sm:py-8 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <ServiceContactForm
              layout="split"
              theme="indigo"
              title="Let's Connect"
              description="Ready to build your digital presence? Our software engineers and solutions architects are prepared to map out your technical goals."
              buttonText="Start My Project"
              successHeading="Project Request Received!"
              successMessage="Our software engineers and solutions architects will review your project details and reach out within 24 business hours."
              subject="WAVELET: Software Services Inquiry"
              bullets={[
                { iconName: "zap", title: "Quick Response", subtitle: "Under 24 hours" },
                { iconName: "shield-check", title: "Secure Consultation", subtitle: "NDA Compliant" }
              ]}
              fields={[
                { name: "name", label: "Name", type: "text", placeholder: "Full Name", required: true },
                { name: "email", label: "Work Email", type: "email", placeholder: "you@company.com", required: true },
                { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your software needs...", required: true }
              ]}
            />
          </div>
        </motion.section>

        {/* 13. Enterprise Footer - Pass hideCta={true} to eliminate the redundant final CTA card */}
        <EnterpriseFooter hideCta={true} />

      </div>

    </div>
  );
}
