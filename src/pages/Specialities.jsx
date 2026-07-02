import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Building2, Scissors, Sparkles, Smile, 
  Settings, ArrowRight, Zap, ChevronDown
} from 'lucide-react';
import SEO from '../components/SEO';

export default function Specialities() {
  const [searchParams] = useSearchParams();
  const selectQuery = searchParams.get('select');
  const [activeSpeciality, setActiveSpeciality] = useState(selectQuery || 'ivf-centers');

  useEffect(() => {
    if (selectQuery) {
      setActiveSpeciality(selectQuery);
    }
  }, [selectQuery]);

  const handleSpecialityClick = (specId) => {
    if (activeSpeciality === specId) {
      if (window.innerWidth < 1024) { // Collapse on mobile view only
        setActiveSpeciality(null);
      }
    } else {
      setActiveSpeciality(specId);
    }
  };

  const specialties = [
    {
      id: "ivf-centers",
      name: "IVF & Fertility Centers",
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      challenges: "High treatment costs and lack of awareness create severe patient hesitation. Competitors are aggressive, and patient trust is difficult to win online.",
      solutions: "Educational content explaining IVF procedures, embryology lab quality, success rates, EMI payment options, and warm, emotional patient success stories combined with highly targeted Meta & Google Ads.",
      expectedResults: "Over 40% reduction in lead acquisition costs and a consistent increase in monthly IVF registrations."
    },
    {
      id: "hospitals",
      name: "Hospitals & Multi-Specialities",
      icon: <Building2 className="h-6 w-6 text-blue-500" />,
      challenges: "Managing multiple departments (OPD, Emergency, Surgery) while maintaining a uniform, trusted brand image across the city.",
      solutions: "Department-specific micro-campaigns, local search engine dominance, high-quality emergency service ads, and corporate branding highlighting advanced technology (e.g., Robotic Surgery).",
      expectedResults: "35% surge in overall OPD walk-ins and complete local map pack dominance for emergency care keywords."
    },
    {
      id: "dentists",
      name: "Dentists & Orthodontists",
      icon: <Smile className="h-6 w-6 text-emerald-500" />,
      challenges: "Severe price competition, low patient loyalty, and high resistance to premium treatments like implants or invisalign.",
      solutions: "Before-and-after smile transformation visual showcases, local map ranking optimization, and educational videos explaining the long-term value of implants.",
      expectedResults: "Consistent flow of high-ticket dental implant inquiries and high walk-ins for daily hygiene/cosmetic treatments."
    },
    {
      id: "dermatologists",
      name: "Dermatologists",
      icon: <Sparkles className="h-6 w-6 text-violet-500" />,
      challenges: "Patients opting for salons over medical specialists, and strict regulations on advertising cosmetic injectables.",
      solutions: "Aesthetic skincare routines, video walkthroughs of laser/chemical peel procedures showing safety protocols, and result-oriented Google Ads targeting skincare concerns.",
      expectedResults: "High-value cosmetic packages (anti-aging, laser hair reduction) sold out monthly."
    },
    {
      id: "gynecologists",
      name: "Gynecologists & Obstetricians",
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      challenges: "Patients look for highly compassionate, accessible care and rely heavily on word-of-mouth recommendations rather than standard cold ads.",
      solutions: "Community building groups, pregnancy care guides, interactive Q&A sessions with the doctor, and warm personal branding to nurture prospective mothers.",
      expectedResults: "Consistent increase in maternity package bookings and pregnancy registrations."
    },
    {
      id: "orthopedic-clinics",
      name: "Orthopedic Clinics",
      icon: <Settings className="h-6 w-6 text-teal-500" />,
      challenges: "High patient fear surrounding surgery pain and joint replacements, causing long treatment delays.",
      solutions: "Authentic recovery stories showing patients walking pain-free, interactive orthopedic diagrams, and local search ads for knee and hip replacement searches.",
      expectedResults: "30% increase in monthly elective surgeries and higher conversion rates at consultation."
    },
    {
      id: "diagnostic-centers",
      name: "Diagnostic & Pathology Centers",
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      challenges: "Highly transactional service with low differentiation, resulting in severe price wars with online aggregators.",
      solutions: "Local health camp partnerships, Google Search Ads targeting specific diagnostic tests, and corporate packages tailored for local businesses.",
      expectedResults: "Stable B2B tie-ups and an influx of local patient walk-ins for specialized scans."
    },
    {
      id: "cosmetic-clinics",
      name: "Cosmetic & Plastic Surgery Clinics",
      icon: <Scissors className="h-6 w-6 text-purple-500" />,
      challenges: "Extremely high patient skepticism and platform restrictions regarding before/after photo advertising on social channels.",
      solutions: "Detailed explanation videos on surgical techniques, focus on safety protocols, and premium patient journals explaining post-op care.",
      expectedResults: "Onboarding higher-ticket rhinoplasty, liposuction, and hair transplant clients."
    },
    {
      id: "pediatric-clinics",
      name: "Pediatric Clinics",
      icon: <Smile className="h-6 w-6 text-orange-500" />,
      challenges: "Parents look for hyper-protective clinical safety and accessibility, demanding high communication touchpoints.",
      solutions: "Automated vaccination trackers, pediatric emergency advice posts, and parent-nurturing newsletters explaining infant nutrition.",
      expectedResults: "Growth in baby checkup packages and stable vaccination schedule registrations."
    }
  ];

  return (
    <>
      <SEO 
        title="Healthcare Specialities We Grow"
        description="Tailored marketing programs for IVF centers, hospitals, dentists, dermatologists, gynecologists, orthopedics, diagnostic centers, cosmetic, and pediatric clinics."
      />

      {/* Hero Header */}
      <section className="bg-slate-50 dark:bg-slate-950 pt-28 pb-16 lg:pt-36 lg:pb-20 text-left border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 dark:bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-semibold">
              <span>SPECIALIZED MARKETING FRAMEWORKS</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Custom Fit Solutions for 9 Medical Fields
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-350 leading-relaxed font-sans font-light">
              One size does not fit all in medicine. An IVF center needs patient nurturing, while a dentist needs neighborhood map rankings. Explore our custom specialty roadmaps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Framework grid */}
      <section className="py-20 bg-white dark:bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Specialty Menu */}
            <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-24">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pl-2">Select Speciality</span>
              {specialties.map((spec) => {
                const isSelected = activeSpeciality === spec.id;
                return (
                  <div key={spec.id} className="space-y-2">
                    <button
                      onClick={() => handleSpecialityClick(spec.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-gradient-brand text-white border-transparent shadow-lg font-bold'
                          : 'bg-slate-50 dark:bg-slate-950 border-slate-100 dark:border-slate-850 text-slate-800 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-800'}`}>
                          {spec.icon}
                        </div>
                        <span className="text-sm font-heading">{spec.name}</span>
                      </div>
                      <ChevronDown className={`h-4.5 w-4.5 opacity-75 transition-transform duration-300 block lg:hidden ${isSelected ? 'rotate-180' : ''}`} />
                      <ArrowRight className="h-4 w-4 opacity-75 hidden lg:block" />
                    </button>

                    {/* Inline detail accordion view for mobile/tablet screens */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="lg:hidden block bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-100 dark:border-slate-850 mt-1 space-y-6 overflow-hidden text-left"
                        >
                          <div className="flex items-center space-x-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                            <div className="bg-gradient-brand p-2.5 rounded-xl text-white">
                              {spec.icon}
                            </div>
                            <div>
                              <h3 className="font-heading text-lg font-black text-slate-900 dark:text-white">
                                {spec.name}
                              </h3>
                              <span className="text-[10px] font-semibold text-primary uppercase tracking-widest block">
                                Growth Strategy Framework
                              </span>
                            </div>
                          </div>

                          {/* Challenges */}
                          <div className="space-y-2">
                            <h4 className="text-[10px] font-bold text-rose-500 uppercase tracking-widest flex items-center">
                              <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-1.5"></span> Core Specialty Challenges
                            </h4>
                            <p className="text-slate-600 dark:text-slate-350 font-sans leading-relaxed text-xs sm:text-sm">
                              {spec.challenges}
                            </p>
                          </div>

                          {/* Solutions */}
                          <div className="space-y-2">
                            <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5"></span> Bawra Marketing Solutions
                            </h4>
                            <p className="text-slate-600 dark:text-slate-350 font-sans leading-relaxed text-xs sm:text-sm">
                              {spec.solutions}
                            </p>
                          </div>

                          {/* Expected Results */}
                          <div className="space-y-2 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-850">
                            <h4 className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></span> Expected Growth Results
                            </h4>
                            <p className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed text-xs sm:text-sm font-semibold">
                              {spec.expectedResults}
                            </p>
                          </div>

                          {/* CTA Footer */}
                          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                            <span className="text-[10px] text-slate-400 text-center font-medium">Compliant with National Medical Guidelines</span>
                            <Link
                              to="/book-consultation"
                              className="w-full bg-gradient-brand text-white text-xs font-bold py-3 rounded-xl hover:shadow-lg transition-all text-center block"
                            >
                              Acquire Patient Leads
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Details Panel */}
            <div className="hidden lg:block lg:col-span-8 bg-slate-50 dark:bg-slate-950 p-6 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-850">
              <AnimatePresence mode="wait">
                {specialties.filter(s => s.id === activeSpeciality).map((spec) => (
                  <motion.div
                    key={spec.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    
                    <div className="flex items-center space-x-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                      <div className="bg-gradient-brand p-3.5 rounded-2xl">
                        {spec.icon}
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                          {spec.name}
                        </h2>
                        <span className="text-xs text-primary font-semibold uppercase tracking-wider block mt-0.5">
                          Growth Strategy Framework
                        </span>
                      </div>
                    </div>

                    {/* Challenges */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-rose-500 uppercase tracking-widest flex items-center">
                        <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span> Core Specialty Challenges
                      </h3>
                      <p className="text-slate-600 dark:text-slate-350 font-sans leading-relaxed text-sm sm:text-base">
                        {spec.challenges}
                      </p>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span> Bawra Marketing Solutions
                      </h3>
                      <p className="text-slate-600 dark:text-slate-350 font-sans leading-relaxed text-sm sm:text-base">
                        {spec.solutions}
                      </p>
                    </div>

                    {/* Expected Results */}
                    <div className="space-y-3 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-850">
                      <h3 className="text-xs font-bold text-emerald-500 uppercase tracking-widest flex items-center">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span> Expected Growth Results
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed text-sm sm:text-base font-semibold">
                        {spec.expectedResults}
                      </p>
                    </div>

                    {/* CTA Footer */}
                    <div className="pt-6 border-t border-slate-200 dark:border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-xs font-medium text-slate-400">Compliant with National Medical Guidelines</span>
                      <Link
                        to="/book-consultation"
                        className="w-full sm:w-auto bg-gradient-brand text-white text-sm font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all text-center"
                      >
                        Acquire Patient Leads
                      </Link>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
