import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { 
  Zap, 
  ShieldCheck, 
  Shield, 
  User, 
  Mail, 
  HelpCircle, 
  CheckCircle2, 
  Building2, 
  Server, 
  Globe, 
  Cpu 
} from 'lucide-react';

// Icon Map to avoid importing Lucide icons in every single caller page
const iconMap: Record<string, any> = {
  zap: Zap,
  shield: Shield,
  "shield-check": ShieldCheck,
  mail: Mail,
  user: User,
  building: Building2,
  server: Server,
  globe: Globe,
  cpu: Cpu,
  help: HelpCircle
};

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  placeholder: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}

export interface BulletItem {
  iconName: "zap" | "shield" | "shield-check" | "mail" | "globe" | "cpu";
  title: string;
  subtitle: string;
}

export interface ServiceContactFormProps {
  layout: "split" | "centered" | "single-card" | "dark-split";
  theme: "indigo" | "amber" | "orange" | "blue" | "dark" | "erp" | "red" | "violet";
  title: string;
  description: string;
  buttonText: string;
  successHeading?: string;
  successMessage?: string;
  subject: string;
  fields?: FormField[];
  bullets?: BulletItem[];
}

export function ServiceContactForm({
  layout,
  theme,
  title,
  description,
  buttonText,
  successHeading = "Thank you!",
  successMessage = "Your inquiry has been received. Our team will get back to you shortly.",
  subject,
  fields,
  bullets
}: ServiceContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  // Set default fields if none are provided
  const activeFields = fields || [
    { name: "name", label: "Name", type: "text", placeholder: "Full Name", required: true },
    { name: "email", label: "Work Email", type: "email", placeholder: "you@company.com", required: true },
    { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your objectives...", required: true }
  ];

  // Initialize fields with empty strings
  useEffect(() => {
    const initialValues: Record<string, string> = {};
    activeFields.forEach(f => {
      initialValues[f.name] = "";
    });
    setFormValues(initialValues);
  }, [fields]);

  const handleInputChange = (name: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Environment-aware Access Key with fallback
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "b576863c-c40d-45a6-b535-1f16787daf33";

    // Read form values including honeypot
    const formData = new FormData(e.currentTarget);
    const formObj: Record<string, any> = {};
    formData.forEach((value, key) => {
      formObj[key] = value;
    });

    // Populate explicit fields for JSON body
    formObj["access_key"] = accessKey;
    formObj["subject"] = subject;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formObj)
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Inquiry sent successfully!");
        setFormSubmitted(true);
        // Reset states of all form fields to empty strings (Guardrail 1)
        const resetValues: Record<string, string> = {};
        activeFields.forEach(f => {
          resetValues[f.name] = "";
        });
        setFormValues(resetValues);
      } else {
        console.error("Web3Forms submission failed:", data);
        toast.error(data.message || "Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Web3Forms request network error:", error);
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper classes mapping for diverse layouts and colors
  const themeStyles = {
    indigo: {
      cardBg: "bg-white border border-indigo-200 shadow-md rounded-[2.5rem]",
      radialGlow: "radial-gradient(circle at 100% 0%, #747ee8 0%, transparent 60%)",
      formCard: "bg-indigo-50/50 border border-indigo-200 rounded-2xl p-5 sm:p-6 shadow-sm",
      focusRing: "focus:ring-indigo-500 focus:border-indigo-500 border-indigo-200",
      button: "bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all shadow-sm cursor-pointer text-xs w-full",
      bulletIconBg: "bg-indigo-50 border border-indigo-200 text-indigo-600",
      textClass: "text-slate-900",
      labelClass: "text-slate-500",
      inputClass: "bg-white text-slate-900 border-indigo-200"
    },
    amber: {
      cardBg: "bg-white border border-amber-200 shadow-md rounded-[2.5rem]",
      radialGlow: "radial-gradient(circle at 100% 0%, #FFD54F 0%, transparent 60%)",
      formCard: "bg-amber-50/50 border border-amber-200 rounded-2xl p-5 sm:p-6 shadow-sm",
      focusRing: "focus:ring-amber-500 focus:border-amber-500 border-amber-200",
      button: "bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all shadow-sm cursor-pointer text-xs w-full",
      bulletIconBg: "bg-amber-50 border border-amber-200 text-amber-700",
      textClass: "text-slate-900",
      labelClass: "text-slate-500",
      inputClass: "bg-white text-slate-900 border-amber-200"
    },
    orange: {
      cardBg: "bg-white border border-orange-200 shadow-md rounded-[2.5rem]",
      radialGlow: "radial-gradient(circle at 100% 0%, #FF8A65 0%, transparent 60%)",
      formCard: "bg-orange-50/50 border border-orange-200 rounded-2xl p-5 sm:p-6 shadow-sm",
      focusRing: "focus:ring-orange-500 focus:border-orange-500 border-orange-200",
      button: "bg-slate-950 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all shadow-sm cursor-pointer text-xs w-full",
      bulletIconBg: "bg-orange-50 border border-orange-200 text-orange-700",
      textClass: "text-slate-900",
      labelClass: "text-slate-500",
      inputClass: "bg-white text-slate-900 border-orange-200"
    },
    blue: {
      cardBg: "bg-gray-900 rounded-[3rem]",
      radialGlow: "radial-gradient(circle at 100% 0%, white 0%, transparent 50%)",
      formCard: "space-y-4",
      focusRing: "focus:ring-2 focus:ring-[#42A5F5] border-transparent",
      button: "bg-[#42A5F5] hover:bg-blue-500 text-white font-bold py-5 rounded-xl transition-all shadow-lg shadow-blue-500/20 w-full",
      bulletIconBg: "bg-white/5 text-blue-400",
      textClass: "text-white",
      labelClass: "text-gray-400",
      inputClass: "bg-white text-gray-900"
    },
    dark: {
      cardBg: "bg-[#111111] rounded-[3rem]",
      radialGlow: "radial-gradient(circle at 100% 0%, white 0%, transparent 50%)",
      formCard: "space-y-4",
      focusRing: "focus:ring-2 focus:ring-blue-500 border-white/10",
      button: "bg-white text-[#111111] font-bold py-5 rounded-2xl hover:scale-[1.02] transition-all shadow-xl shadow-black/20 w-full",
      bulletIconBg: "bg-white/5 text-blue-400",
      textClass: "text-white",
      labelClass: "text-gray-500",
      inputClass: "bg-white/5 text-white border-white/10"
    },
    erp: {
      cardBg: "bg-white rounded-[2.5rem] border border-black/5 shadow-[0_15px_50px_rgba(0,0,0,0.04)]",
      radialGlow: "none",
      formCard: "space-y-6",
      focusRing: "focus:border-gray-900 focus:bg-white border-gray-200/80",
      button: "bg-black hover:bg-black/90 text-white font-bold py-5 rounded-full transition-all text-base cursor-pointer w-full",
      bulletIconBg: "bg-gray-50 border border-gray-200 text-gray-700",
      textClass: "text-gray-900",
      labelClass: "text-gray-400",
      inputClass: "bg-gray-50 border-gray-200/80 text-gray-900"
    },
    red: {
      cardBg: "bg-white border border-red-200 shadow-md rounded-[2.5rem]",
      radialGlow: "radial-gradient(circle at 100% 0%, #E57373 0%, transparent 60%)",
      formCard: "bg-red-50/50 border border-red-200 rounded-2xl p-5 sm:p-6 shadow-sm",
      focusRing: "focus:ring-red-500 focus:border-red-500 border-red-200",
      button: "bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all shadow-sm cursor-pointer text-xs w-full",
      bulletIconBg: "bg-red-50 border border-red-200 text-red-600",
      textClass: "text-slate-900",
      labelClass: "text-slate-500",
      inputClass: "bg-white text-slate-900 border-red-200"
    },
    violet: {
      cardBg: "bg-white border border-indigo-100 rounded-[2rem]",
      radialGlow: "none",
      formCard: "space-y-3",
      focusRing: "focus:ring-1 focus:ring-indigo-500 border-slate-200",
      button: "bg-indigo-900 hover:bg-indigo-800 text-white font-black py-3.5 rounded-xl transition-all shadow-md text-sm w-full mt-2",
      bulletIconBg: "bg-slate-50 border border-slate-200 text-indigo-600",
      textClass: "text-slate-900",
      labelClass: "text-indigo-800",
      inputClass: "bg-slate-50 text-slate-900 border-slate-200"
    }
  };

  const style = themeStyles[theme];

  // Helper to render field inputs dynamically
  const renderField = (field: FormField) => {
    const value = formValues[field.name] || "";
    const baseInputStyles = `w-full rounded-xl px-4 py-2.5 text-xs outline-none transition-all font-semibold ${style.inputClass} ${style.focusRing}`;

    switch (field.type) {
      case "textarea":
        return (
          <textarea
            required={field.required}
            name={field.name}
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            rows={3}
            className={`${baseInputStyles} resize-none`}
          />
        );
      case "select":
        return (
          <select
            required={field.required}
            name={field.name}
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className={`${baseInputStyles} appearance-none cursor-pointer`}
          >
            <option value="" className="bg-[#111111]">{field.placeholder}</option>
            {field.options?.map(opt => (
              <option key={opt.value} value={opt.value} className="bg-[#111111]">
                {opt.label}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            required={field.required}
            type={field.type}
            name={field.name}
            value={value}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            className={baseInputStyles}
          />
        );
    }
  };

  return (
    <div className={`${style.cardBg} p-6 sm:p-8 lg:p-12 relative overflow-hidden`}>
      {style.radialGlow !== "none" && (
        <div className="absolute inset-0 opacity-[0.05]" style={{ background: style.radialGlow }} />
      )}

      {layout === "centered" ? (
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.4em] ${style.labelClass} font-bold mb-3">Get in Touch</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">{title}</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-3 font-semibold leading-relaxed max-w-md">
              {description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className={style.formCard}>
            {/* Honeypot field for bot spam prevention (Guardrail 3) */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            {activeFields.map((f, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 block mb-1">
                  {f.label}
                </label>
                {renderField(f)}
              </div>
            ))}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${style.button} ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "Sending..." : buttonText}
            </button>
          </form>
        </div>
      ) : layout === "single-card" ? (
        <div className="relative z-10">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">{title}</h2>
          <p className="text-slate-600 text-sm font-bold leading-relaxed mb-6">{description}</p>
          
          <form onSubmit={handleSubmit} className={style.formCard}>
            {/* Honeypot field for bot spam prevention (Guardrail 3) */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <>
                  {activeFields.map((f, i) => (
                    <div key={i} className="relative">
                      <label className={`text-[9px] font-black uppercase tracking-widest block mb-1 ${style.labelClass}`}>
                        {f.label}
                      </label>
                      <div className="relative">
                        {renderField(f)}
                      </div>
                    </div>
                  ))}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${style.button} ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? "Sending..." : buttonText}
                  </button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center"
                >
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <div className="font-black text-slate-900 mb-1">{successHeading}</div>
                  <div className="text-xs font-bold text-slate-700">{successMessage}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      ) : (
        /* split or dark-split layout */
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-stretch">
          
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className={`text-3xl sm:text-4xl font-black mb-4 tracking-tight ${style.textClass}`}>
                {title}
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-semibold opacity-80 ${style.textClass}`}>
                {description}
              </p>
            </div>

            {bullets && bullets.length > 0 && (
              <div className="space-y-4 my-auto">
                {bullets.map((bullet, idx) => {
                  const BulletIcon = iconMap[bullet.iconName] || Zap;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${style.bulletIconBg}`}>
                        <BulletIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[8px] font-black uppercase tracking-widest text-slate-500">
                          {bullet.title}
                        </div>
                        <div className={`font-extrabold text-xs sm:text-sm ${style.textClass}`}>
                          {bullet.subtitle}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column Form */}
          <div className={layout === "dark-split" ? style.formCard : `${style.formCard} flex flex-col justify-center`}>
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Honeypot field for bot spam prevention (Guardrail 3) */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  {activeFields.map((f, i) => (
                    <div key={i} className="relative">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 block mb-1">
                        {f.label}
                      </label>
                      <div className="relative">
                        {renderField(f)}
                      </div>
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${style.button} ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? "Sending..." : buttonText}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-6 space-y-3"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-500 flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className={`text-base font-black ${style.textClass}`}>{successHeading}</h4>
                  <p className={`text-xs font-semibold leading-relaxed opacity-85 ${style.textClass}`}>
                    {successMessage}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      )}
    </div>
  );
}
