import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { ServiceContactForm } from '@/components/ServiceContactForm';
import { 
  BarChart3, Database, TrendingUp, Users, Brain, Shield, 
  Settings, Briefcase, Plus, Minus, ArrowRight, CheckCircle2,
  Factory, ShoppingCart, Stethoscope, GraduationCap, Rocket,
  Building2, Plane, Landmark, PieChart, LineChart, Cpu, Zap
} from 'lucide-react';

export const Route = createFileRoute('/what-we-do/business-intelligence')({
  component: BusinessIntelligencePage,
});

const stats = [
  { value: "20+", label: "Custom Models Deployed" },
  { value: "2000+", label: "Terabytes Data Managed" },
  { value: "850+", label: "Users Trained" },
  { value: "400%", label: "Avg Client ROI First Year" }
];

const partners = [
  { name: "Microsoft Power BI", role: "Gold Partner" },
  { name: "Databricks", role: "Solution Provider" },
  { name: "Tableau", role: "Strategic Partner" },
  { name: "Snowflake", role: "Implementation Expert" },
  { name: "Qlik", role: "Elite Partner" }
];

const services = [
  {
    title: "BI Consulting & Strategy",
    icon: Briefcase,
    image: "https://picsum.photos/seed/wavelet_bi_strategy/800/600",
    description: "Designing data maturity frameworks to align analytics with your core business KPIs.",
    bullets: ["Roadmap Development", "Data Governance", "ROI Analysis"]
  },
  {
    title: "Data Engineering",
    icon: Database,
    image: "https://picsum.photos/seed/wavelet_data_engineering/800/600",
    description: "Building robust, scalable data pipelines to unify disparate enterprise data sources.",
    bullets: ["ETL/ELT Processes", "Data Lake Architecture", "Real-time Streaming"]
  },
  {
    title: "Predictive Analytics",
    icon: Brain,
    image: "https://picsum.photos/seed/wavelet_predictive_ai/800/600",
    description: "Leveraging machine learning to forecast trends and identify future opportunities.",
    bullets: ["Demand Forecasting", "Churn Prediction", "Sentiment Analysis"]
  },
  {
    title: "Visualization & Dashboards",
    icon: BarChart3,
    image: "https://picsum.photos/seed/wavelet_data_viz/800/600",
    description: "Crafting intuitive, real-time dashboards that tell a compelling story with your data.",
    bullets: ["Executive Dashboards", "Operational Reports", "Self-service BI"]
  },
  {
    title: "Managed Analytics",
    icon: Settings,
    image: "https://picsum.photos/seed/wavelet_managed_analytics/800/600",
    description: "End-to-end management of your BI infrastructure, ensuring 24/7 reliability.",
    bullets: ["Performance Tuning", "24/7 Support", "Continuous Optimization"]
  },
  {
    title: "Big Data Solutions",
    icon: TrendingUp,
    image: "https://picsum.photos/seed/wavelet_big_data/800/600",
    description: "Architecting systems that handle massive datasets with high velocity and variety.",
    bullets: ["Hadoop/Spark Ecosystems", "In-memory Computing", "Cloud Data Warehousing"]
  }
];

const industries = [
  { name: "Manufacturing", subtitle: "Predictive Maintenance", icon: Factory, image: "https://picsum.photos/seed/wavelet_industry_manufacturing/800/600", description: "Minimizing downtime and optimizing supply chain throughput." },
  { name: "Hospitality", subtitle: "Guest Personalization", icon: Plane, image: "https://picsum.photos/seed/wavelet_industry_hospitality/800/600", description: "Enhancing guest experiences through data-driven loyalty insights." },
  { name: "Healthcare", subtitle: "Clinical Analytics", icon: Stethoscope, image: "https://picsum.photos/seed/wavelet_industry_healthcare/800/600", description: "Improving patient outcomes with real-time health data monitoring." },
  { name: "Retail", subtitle: "Inventory Optimization", icon: ShoppingCart, image: "https://picsum.photos/seed/wavelet_industry_retail/800/600", description: "Managing stock levels and predicting consumer demand trends." },
  { name: "Education", subtitle: "Student Success", icon: GraduationCap, image: "https://picsum.photos/seed/wavelet_industry_education/800/600", description: "Tracking performance metrics to personalize learning paths." },
  { name: "Startups", subtitle: "Growth Hacking", icon: Rocket, image: "https://picsum.photos/seed/wavelet_industry_startups/800/600", description: "Scaling rapidly with lean, data-backed operational decisions." },
  { name: "Finance", subtitle: "Risk Management", icon: Landmark, image: "https://picsum.photos/seed/wavelet_industry_finance/800/600", description: "Detecting fraud and managing portfolio risk in real-time." },
  { name: "Real Estate", subtitle: "Market Analysis", icon: Building2, image: "https://picsum.photos/seed/wavelet_industry_realestate/800/600", description: "Valuing properties and identifying investment hotspots." }
];

const capabilities = [
  { title: "Master Data Management", icon: Database, description: "Establishing a single source of truth across your enterprise data ecosystem." },
  { title: "Cloud Data Migration", icon: Zap, description: "Seamlessly transitioning your legacy on-premise data to modern cloud platforms." },
  { title: "Advanced Data Security", icon: Shield, description: "Implementing robust encryption and access controls for regulatory compliance." },
  { title: "Production Support", icon: Cpu, description: "Ongoing maintenance and troubleshooting for high-availability BI systems." }
];

const faqs = [
  {
    question: "How long does a typical BI implementation take?",
    answer: "Project timelines vary based on complexity, but a standard implementation typically takes 3 to 6 months. We follow an iterative approach to deliver initial value within the first 6-8 weeks."
  },
  {
    question: "Do you work with our existing data infrastructure?",
    answer: "Yes, we are platform-agnostic. Whether your data is in legacy on-premise servers, cloud lakes, or disparate SaaS applications, we can build custom connectors to unify it."
  },
  {
    question: "How do you handle data security and privacy?",
    answer: "Security is integrated at the architectural level. We implement end-to-end encryption, multi-factor authentication, and ensure compliance with GDPR, HIPAA, and SOC2 standards."
  },
  {
    question: "What BI tools do you specialize in?",
    answer: "We are certified partners for Microsoft Power BI, Tableau, and Qlik. We also have deep expertise in Snowflake, Databricks, and various cloud-native analytics services."
  },
  {
    question: "Can you help us scale our existing BI platform?",
    answer: "Absolutely. We specialize in performance tuning and architectural scaling to handle growing data volumes and increasing user counts without compromising speed."
  },
  {
    question: "Do you provide training for our internal team?",
    answer: "Yes, we believe in long-term success. We provide comprehensive workshops and hands-on training to ensure your team is proficient in using and managing the new tools."
  },
  {
    question: "What is the expected ROI for a Business Intelligence project?",
    answer: "Our clients typically see a full ROI within the first year. This is achieved through operational efficiency gains, reduced data processing costs, and identified revenue opportunities."
  },
  {
    question: "How do you handle real-time data streaming?",
    answer: "We leverage modern technologies like Kafka, Spark Streaming, and cloud-native services to process and visualize data the moment it's generated."
  }
];

function BusinessIntelligencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openCapability, setOpenCapability] = useState<number | null>(0);

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
    <div className="min-h-screen bg-white font-sans text-[#111111] antialiased">
      <SiteHeader />

      <main className="pt-24">
        {/* 1. Hero Section */}
        <section className="relative px-4 pt-20 pb-32 overflow-hidden bg-[#b0c5e6]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={sectionTransition}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                Unlocking Business Value with Comprehensive <span className="text-slate-800">Analytics & Intelligence.</span>
              </h1>
              <p className="text-xl text-gray-800 mb-10 max-w-xl leading-relaxed font-medium">
                Transforming raw data into predictive insights that drive revenue, efficiency, and growth. We build the engine that powers data-driven decisions.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="bg-[#111111] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-black/20">
                  Get Started
                </Link>
                <button className="bg-white border border-gray-100 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm">
                  View Case Studies
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
              className="relative aspect-square"
            >
              {/* Abstract Illustration */}
              <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center shadow-md">
                <div className="relative w-3/4 h-3/4">
                  {/* Stylized Data Points & Connections */}
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <motion.circle 
                      cx="200" cy="200" r="100" 
                      fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="10 10"
                      animate={shouldReduceMotion ? {} : { rotate: 360 }}
                      transition={shouldReduceMotion ? {} : { duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle 
                      cx="200" cy="200" r="150" 
                      fill="none" stroke="#F3F4F6" strokeWidth="1"
                      animate={shouldReduceMotion ? {} : { rotate: -360 }}
                      transition={shouldReduceMotion ? {} : { duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Nodes */}
                    {[
                      { x: 200, y: 100, color: "#3B82F6" },
                      { x: 300, y: 200, color: "#EF4444" },
                      { x: 200, y: 300, color: "#3B82F6" },
                      { x: 100, y: 200, color: "#111111" },
                      { x: 270, y: 130, color: "#9CA3AF" },
                      { x: 130, y: 270, color: "#EF4444" }
                    ].map((node, i) => (
                      <motion.circle
                        key={i}
                        cx={node.x} cy={node.y} r="8"
                        fill={node.color}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, delay: shouldReduceMotion ? 0 : i * 0.1 }}
                      />
                    ))}
                    {/* Connections */}
                    <path d="M200 100 L300 200 L200 300 L100 200 Z" fill="none" stroke="#111111" strokeWidth="0.5" strokeOpacity="0.2" />
                    <motion.path 
                      d="M100 200 Q200 150 300 200" 
                      fill="none" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.3"
                      animate={shouldReduceMotion ? {} : { pathLength: [0, 1] }}
                      transition={shouldReduceMotion ? {} : { duration: 2, repeat: Infinity }}
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <LineChart className="w-16 h-16 text-[#111111] mb-2" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Analytics Engine</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div 
            {...getGridContainer()}
            className="max-w-6xl mx-auto mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                {...getGridItem()}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 2. Partners Grid */}
        <motion.section 
          {...getSectionReveal()}
          className="py-24 bg-gray-50 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.4em] mb-16">Strategic Alliances & Platforms</h2>
            <motion.div 
              {...getGridContainer()}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {partners.map((partner, i) => (
                <motion.div 
                  key={i} 
                  {...getGridItem()}
                  className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-xl mb-4 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="font-bold text-sm mb-1">{partner.name}</div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">{partner.role}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* 3. Service Deep-Dive */}
        <motion.section 
          {...getSectionReveal()}
          className="py-32 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">End-to-End Analytics Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">We cover the entire data lifecycle, from the first spark of a strategy to the final dashboard insight.</p>
            </div>
            <motion.div 
              {...getGridContainer()}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, i) => (
                <motion.div 
                  key={i} 
                  {...getGridItem()}
                  className="rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden flex flex-col min-h-[500px]"
                >
                  {/* Layer 1: Background Image (Inline Style - Guaranteed Working) */}
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  
                  {/* Layer 2: Gradient Anchor (Text Readability) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent" />

                  {/* Layer 3: Content */}
                  <div className="p-10 relative z-10 flex-1 flex flex-col justify-end">
                    <div className="mt-auto">
                      <div className="p-4 rounded-2xl bg-white text-[#111111] mb-6 inline-block shadow-md group-hover:bg-[#111111] group-hover:text-white transition-colors">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-[#111111]">{service.title}</h3>
                      <p className="text-gray-600 mb-8 leading-relaxed font-medium">{service.description}</p>
                      <ul className="space-y-3">
                        {service.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-center gap-3 text-sm font-semibold text-gray-500">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* 4. Industry Grid */}
        <motion.section 
          {...getSectionReveal()}
          className="py-32 px-4 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Vertical Specific Expertise</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Every industry has a unique data fingerprint. Our models are built to recognize yours.</p>
            </div>
            <motion.div 
              {...getGridContainer()}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {industries.map((industry, i) => (
                <motion.div 
                  key={i} 
                  {...getGridItem()}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col min-h-[400px]"
                >
                  {/* Layer 1: Background Image (Inline Style - Guaranteed Working) */}
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${industry.image})` }}
                  />

                  {/* Layer 2: Gradient Anchor (Text Readability) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />

                  <div className="p-8 relative z-10 mt-auto">
                    <div className="p-3 rounded-xl bg-white text-gray-400 mb-6 inline-block shadow-sm group-hover:text-blue-600 transition-colors">
                      <industry.icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{industry.name}</div>
                    <h3 className="text-lg font-bold mb-3 text-[#111111]">{industry.subtitle}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">{industry.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* 5. Capabilities Accordion */}
        <motion.section 
          {...getSectionReveal()}
          className="py-32 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Core Implementation Capabilities</h2>
            <div className="space-y-4">
              {capabilities.map((cap, i) => (
                <div key={i} className="border-b border-gray-100 last:border-0 overflow-hidden">
                  <button
                    onClick={() => setOpenCapability(openCapability === i ? null : i)}
                    className="w-full flex items-center justify-between py-8 text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`p-4 rounded-2xl transition-all ${openCapability === i ? 'bg-[#111111] text-white' : 'bg-gray-50 text-gray-400'}`}>
                        <cap.icon className="w-6 h-6" />
                      </div>
                      <span className={`text-2xl font-bold transition-colors ${openCapability === i ? 'text-[#111111]' : 'text-gray-500'}`}>
                        {cap.title}
                      </span>
                    </div>
                    {openCapability === i ? <Minus className="w-6 h-6 text-gray-300" /> : <Plus className="w-6 h-6 text-gray-300" />}
                  </button>
                  <AnimatePresence>
                    {openCapability === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0.01 : 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pl-20 text-gray-600 text-lg max-w-2xl leading-relaxed">
                          {cap.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 6. FAQ Section */}
        <motion.section 
          {...getSectionReveal()}
          className="py-32 px-4 bg-gray-50"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#111111] mb-16 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left group transition-all"
                  >
                    <span className={`text-xl font-semibold transition-colors duration-300 ${openFaq === i ? 'text-blue-600' : 'text-[#111111] group-hover:text-blue-600'}`}>
                      {faq.question}
                    </span>
                    <div className={`transition-transform duration-300 ${openFaq === i ? 'rotate-45' : 'rotate-0'}`}>
                      <Plus className={`h-6 w-6 ${openFaq === i ? 'text-blue-600' : 'text-gray-400'}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 7. Let's Connect Form */}
        <motion.section 
          {...getSectionReveal()}
          className="py-32 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <ServiceContactForm
              layout="dark-split"
              theme="dark"
              title="Let's Connect"
              description="Ready to architect your data-driven future? Our analytics experts are ready to show you what's possible."
              buttonText="Send Message"
              successHeading="Inquiry Received!"
              successMessage="Our analytics architects will review your business intelligence requirements and reach out within 24 business hours."
              subject="WAVELET: Business Intelligence Inquiry"
              bullets={[
                { iconName: "zap", title: "Quick Response", subtitle: "Under 24 hours" },
                { iconName: "shield-check", title: "Secure Consultation", subtitle: "NDA Ready" }
              ]}
              fields={[
                { name: "name", label: "Full Name", type: "text", placeholder: "Full Name", required: true },
                { name: "email", label: "Work Email", type: "email", placeholder: "you@company.com", required: true },
                { name: "company", label: "Company", type: "text", placeholder: "Company", required: true },
                { 
                  name: "service_type", 
                  label: "Service Type", 
                  type: "select", 
                  placeholder: "Select Service Type", 
                  required: true,
                  options: [
                    { value: "consulting", label: "BI Consulting" },
                    { value: "engineering", label: "Data Engineering" },
                    { value: "predictive", label: "Predictive Analytics" },
                    { value: "managed", label: "Managed Services" }
                  ]
                },
                { name: "message", label: "Your Message", type: "textarea", placeholder: "Your Message", required: true }
              ]}
            />
          </div>
        </motion.section>
      </main>

      <EnterpriseFooter hideCta={true} />
    </div>
  );
}
