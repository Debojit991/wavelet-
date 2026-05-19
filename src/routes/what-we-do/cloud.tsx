import { createFileRoute, Link } from '@tanstack/react-router';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { Plus, CheckCircle, Clock, Globe, Shield, Zap, Target, BarChart, Server, Lock, Cpu, Cloud, Database, Network } from 'lucide-react';
import { useState } from 'react';
import { ServiceContactForm } from '@/components/ServiceContactForm';

export const Route = createFileRoute('/what-we-do/cloud')({
  component: CloudRoute,
});

const faqData = [
  { question: "How do you handle data security during migration?", answer: "We implement zero-trust architecture with end-to-end encryption. Our security protocols include AES-256 encryption for data at rest, TLS 1.3 for data in transit, and continuous compliance monitoring to ensure your data remains secure throughout the entire migration lifecycle." },
  { question: "Do you provide multi-cloud support?", answer: "Yes, our certified architects design robust multi-cloud and hybrid cloud environments across AWS, Azure, and Google Cloud. This approach prevents vendor lock-in, ensures high availability, and optimizes your cloud spend by matching workloads to the most cost-effective platforms." }
];

function CloudRoute() {
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
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-blue-500/10 selection:text-blue-600">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-32 px-4 bg-[#42A5F5] overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={sectionTransition}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight"
            >
              Cloud Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
              className="text-lg md:text-xl mb-10 text-blue-50 max-w-xl leading-relaxed font-medium"
            >
              Accelerate your digital transformation with our enterprise-grade cloud architecture. We design, deploy, and manage secure, scalable, and highly available cloud environments tailored to your business needs.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="px-8 py-4 rounded-full font-bold bg-white text-[#42A5F5] hover:bg-gray-50 transition-colors shadow-lg shadow-blue-500/30">
                Request A Free Demo
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-full font-bold text-white border-2 border-white hover:bg-white/10 transition-colors text-center">
                Start A Project
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.3 }}
            className="relative"
          >
            <img src="/cloud_hero_graphic_1778999119823.png" alt="Cloud Architecture" className="w-full h-auto drop-shadow-2xl rounded-2xl" />
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Banner */}
      <motion.section 
        {...getSectionReveal()}
        className="bg-white border-b border-gray-100 py-16 px-4"
      >
        <motion.div 
          {...getGridContainer()}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <motion.div {...getGridItem()} className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-extrabold text-[#42A5F5]">99.99%</span>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Uptime Guarantee</span>
          </motion.div>
          <motion.div {...getGridItem()} className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-extrabold text-[#42A5F5]">40%</span>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Reduce Cloud Cost</span>
          </motion.div>
          <motion.div {...getGridItem()} className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-extrabold text-[#42A5F5]">100+</span>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Managed Cloud Deployments</span>
          </motion.div>
          <motion.div {...getGridItem()} className="flex flex-col gap-2">
            <span className="text-4xl md:text-5xl font-extrabold text-[#42A5F5]">24/7</span>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Premium Support</span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 3. Digital Transformation Section */}
      <motion.section 
        {...getSectionReveal()}
        className="py-24 px-4 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Digital Transformation with Cloud</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our cloud solutions facilitate seamless business modernization by optimizing resource usage, accelerating innovation, and enabling a flexible, remote-ready workforce. Transition from legacy systems to a highly resilient cloud infrastructure that scales dynamically with your growth.
            </p>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
            <img src="/cloud_digital_transformation_1778999144121.png" alt="Digital Transformation Team" className="w-full object-cover max-h-[600px]" />
          </div>
        </div>
      </motion.section>

      {/* 4. Service Statistics Grid */}
      <motion.section 
        {...getSectionReveal()}
        className="py-20 px-4 bg-white"
      >
        <motion.div 
          {...getGridContainer()}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <motion.div {...getGridItem()} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <Clock className="w-10 h-10 text-[#42A5F5] mb-4" />
              <span className="text-3xl font-bold text-gray-900 mb-2">18+</span>
              <span className="text-sm font-medium text-gray-500">Years of Experience</span>
            </motion.div>
            <motion.div {...getGridItem()} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <CheckCircle className="w-10 h-10 text-[#42A5F5] mb-4" />
              <span className="text-3xl font-bold text-gray-900 mb-2">100+</span>
              <span className="text-sm font-medium text-gray-500">Certifications</span>
            </motion.div>
            <motion.div {...getGridItem()} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <Target className="w-10 h-10 text-[#42A5F5] mb-4" />
              <span className="text-3xl font-bold text-gray-900 mb-2">98%</span>
              <span className="text-sm font-medium text-gray-500">Project Completion Rate</span>
            </motion.div>
            <motion.div {...getGridItem()} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <Globe className="w-10 h-10 text-[#42A5F5] mb-4" />
              <span className="text-3xl font-bold text-gray-900 mb-2">16 Location</span>
              <span className="text-sm font-medium text-gray-500">Global Delivery Centers</span>
            </motion.div>
            <motion.div {...getGridItem()} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
              <Shield className="w-10 h-10 text-[#42A5F5] mb-4" />
              <span className="text-3xl font-bold text-gray-900 mb-2">365 24/7</span>
              <span className="text-sm font-medium text-gray-500">Available Support</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* 5. Our Cloud Offerings Grid */}
      <motion.section 
        {...getSectionReveal()}
        className="py-24 px-4 bg-gray-50 border-y border-gray-200"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center tracking-tight">Our Cloud Offerings Include</h2>
          <motion.div 
            {...getGridContainer()}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Cloud Consulting", desc: "Strategic assessment and roadmap planning to optimize your cloud investment.", icon: Cloud },
              { title: "Cloud Migration", desc: "Seamless and secure transition of your legacy workloads to modern cloud infrastructure.", icon: Server },
              { title: "Cloud Management", desc: "Proactive monitoring, maintenance, and optimization of your cloud resources.", icon: Database },
              { title: "Cloud Platform", desc: "Robust and scalable PaaS solutions to accelerate your application development.", icon: Cpu },
              { title: "Cloud Integration", desc: "Connecting disparate systems and data sources into a unified cloud ecosystem.", icon: Network },
              { title: "Cloud Marketing", desc: "Leveraging cloud-native analytics and tools to drive targeted digital growth.", icon: BarChart }
            ].map((offering, idx) => (
              <motion.div 
                key={idx} 
                {...getGridItem()}
                whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#42A5F5] transition-colors">
                  <offering.icon className="w-7 h-7 text-[#42A5F5] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{offering.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 6. Value Proposition Stack */}
      <motion.section 
        {...getSectionReveal()}
        className="py-24 px-4 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            {...getGridContainer()}
            className="space-y-6"
          >
            {[
              { title: "Customer", desc: "Deliver faster feature releases and a highly available, responsive user interface to enhance customer satisfaction." },
              { title: "Business Value", desc: "Accelerate time-to-market for new products and services while maintaining enterprise-grade reliability." },
              { title: "Economy of Cloud", desc: "Shift from CapEx to OpEx with pay-as-you-go pricing, significantly reducing total cost of ownership." },
              { title: "Operational efficiency", desc: "Automate repetitive IT tasks and infrastructure provisioning, freeing up your team for strategic initiatives." },
              { title: "Flexibility", desc: "Instantly scale resources up or down to meet fluctuating demand without hardware constraints." }
            ].map((value, idx) => (
              <motion.div 
                key={idx} 
                {...getGridItem()}
                className="flex gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors"
              >
                <div className="mt-1">
                  <CheckCircle className="w-6 h-6 text-[#42A5F5]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 7. Partner Logos */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black text-gray-900 tracking-tighter">AWS</span>
            <span className="text-2xl font-black text-gray-900 tracking-tighter">AZURE</span>
            <span className="text-2xl font-black text-gray-900 tracking-tighter">GOOGLE CLOUD</span>
            <span className="text-2xl font-black text-gray-900 tracking-tighter">ORACLE</span>
          </div>
        </div>
      </section>

      {/* 8. Quote Banner */}
      <motion.section 
        {...getSectionReveal()}
        className="relative py-32 px-4 bg-[#42A5F5] overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img src="/cloud_team_collaboration_1778999166955.png" alt="Collaborative Team" className="w-full h-full object-cover opacity-20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[#42A5F5]/80" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            "Cloud is a tool if used correctly can bring down cost and increase scalability"
          </h2>
        </div>
      </motion.section>

      {/* 9. FAQs Section */}
      <motion.section 
        {...getSectionReveal()}
        className="py-24 px-4 bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="border-b border-gray-200">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group transition-all"
                >
                  <span className={`text-xl font-semibold transition-colors duration-300 ${openFaq === i ? 'text-[#42A5F5]' : 'text-gray-900 group-hover:text-[#42A5F5]'}`}>
                    {faq.question}
                  </span>
                  <div className={`transition-transform duration-300 ${openFaq === i ? 'rotate-45' : 'rotate-0'}`}>
                    {openFaq === i ? <Plus className="h-6 w-6 text-[#42A5F5]" /> : <Plus className="h-6 w-6 text-gray-400" />}
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

      {/* 10. Final CTA & Contact Form */}
      <motion.section 
        {...getSectionReveal()}
        className="py-24 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Are you ready for a better, more productive business?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Start your digital transformation journey today. Our experts are ready to design a scalable cloud architecture that perfectly aligns with your strategic business goals.
            </p>
            <Link to="/contact" className="inline-block bg-[#42A5F5] hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-blue-500/20 text-lg text-center">
              Contact Us Now
            </Link>
          </div>

          <div className="mt-12">
            <ServiceContactForm
              layout="dark-split"
              theme="blue"
              title="Let's Connect"
              description="Have a specific challenge? Our enterprise architects are ready to help you navigate the complexity."
              buttonText="Submit Query"
              successHeading="Inquiry Received!"
              successMessage="Our enterprise architects will review your infrastructure query and reach out within 24 business hours."
              subject="WAVELET: Cloud Infrastructure Inquiry"
              fields={[
                { name: "name", label: "Your Name", type: "text", placeholder: "Full Name", required: true },
                { name: "email", label: "Work Email", type: "email", placeholder: "you@company.com", required: true },
                { name: "message", label: "Message", type: "textarea", placeholder: "Describe your cloud architecture, constraints, or goals...", required: true }
              ]}
            />
          </div>
        </div>
      </motion.section>

      <EnterpriseFooter hideCta={true} />
    </div>
  );
}
