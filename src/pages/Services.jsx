import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Sparkles, TrendingUp, BarChart2, Shield, Award, 
  Video, FileText, Building2, Smartphone, CheckCircle2, 
  ChevronDown, HelpCircle, Calendar
} from 'lucide-react';
import SEO from '../components/SEO';
import { siteData } from '../data/siteData';

export default function Services() {
  const [searchParams] = useSearchParams();
  const selectQuery = searchParams.get('select');
  const [expandedService, setExpandedService] = useState(selectQuery || 'meta-ads');
  const [faqOpen, setFaqOpen] = useState({});

  useEffect(() => {
    if (selectQuery && siteData.services.some(s => s.id === selectQuery)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setExpandedService(selectQuery);
    }
  }, [selectQuery]);

  const handleServiceClick = (serviceId) => {
    if (expandedService === serviceId) {
      if (window.innerWidth < 1024) { // Collapse on mobile view only
        setExpandedService(null);
      }
    } else {
      setExpandedService(serviceId);
    }
  };

  const toggleFaq = (serviceId, index) => {
    const key = `${serviceId}-${index}`;
    setFaqOpen(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getServiceIcon = (id) => {
    const className = "h-7 w-7 text-white";
    switch (id) {
      case 'social-media-marketing': return <Users className={className} />;
      case 'meta-ads': return <Sparkles className={className} />;
      case 'google-ads': return <TrendingUp className={className} />;
      case 'seo': return <BarChart2 className={className} />;
      case 'google-business-profile': return <Shield className={className} />;
      case 'doctor-branding': return <Award className={className} />;
      case 'video-production': return <Video className={className} />;
      case 'healthcare-content': return <FileText className={className} />;
      case 'hospital-marketing': return <Building2 className={className} />;
      case 'lead-generation': return <Smartphone className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  return (
    <>
      <SEO 
        title="Healthcare Marketing Services"
        description="Explore our 10 specialized healthcare marketing solutions. We provide SEO, Google PPC Ads, Meta Patient Leads Ads, Video Shoots, and Doctor Branding."
      />

      {/* Hero Header */}
      <section className="bg-slate-50 dark:bg-slate-950 pt-28 pb-16 lg:pt-36 lg:pb-20 text-left border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-semibold">
              <span>SPECIALIZED CLINICAL CHANNELS</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              10 Ways We Scale Your Patient Inflow
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-350 leading-relaxed font-sans font-light">
              From localized search map optimization to high-intent surgical campaigns, we deploy specialized, compliant funnels that address patient psychology and drive direct clinic bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Service Grid / Accordion */}
      <section className="py-20 bg-white dark:bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar navigation list */}
            <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-24">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pl-2">SELECT A SERVICE</span>
              {siteData.services.map((service) => {
                const isSelected = expandedService === service.id;
                return (
                  <div key={service.id} className="space-y-2">
                    <button
                      onClick={() => handleServiceClick(service.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-gradient-brand text-white border-transparent shadow-lg shadow-primary/10 font-bold'
                          : 'bg-slate-50 dark:bg-slate-950 border-slate-100 dark:border-slate-850/80 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/10' : 'bg-primary/10'}`}>
                          {/* Nested helper so icon is visible on select */}
                          {isSelected ? (
                            <CheckCircle2 className="h-5 w-5 text-white" />
                          ) : (
                            <div className="h-5 w-5 text-primary flex items-center justify-center font-bold text-xs">
                              ✓
                            </div>
                          )}
                        </div>
                        <span className="text-sm font-heading">{service.title}</span>
                      </div>
                      <ChevronDown className={`h-4.5 w-4.5 opacity-75 transition-transform duration-300 lg:-rotate-90 ${isSelected ? 'rotate-180 lg:-rotate-90' : ''}`} />
                    </button>

                    {/* Inline detail accordion view for mobile/tablet screens */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="lg:hidden block bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-100 dark:border-slate-850 mt-1 space-y-6 overflow-hidden"
                        >
                          {/* Header with Title and CTA */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex items-center space-x-3">
                              <div className="bg-gradient-brand p-2.5 rounded-xl shadow-md">
                                {getServiceIcon(service.id)}
                              </div>
                              <div>
                                <h3 className="font-heading text-lg font-black text-slate-900 dark:text-white">
                                  {service.title}
                                </h3>
                                <span className="text-[10px] font-semibold text-secondary uppercase tracking-widest block">
                                  Active Growth Channel
                                </span>
                              </div>
                            </div>
                            <Link
                              to="/book-consultation"
                              className="bg-primary hover:bg-primary-dark text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-md shadow-primary/10 transition-all text-center block w-full sm:w-auto"
                            >
                              Acquire Patient Leads
                            </Link>
                          </div>

                          {/* Service Overview */}
                          <div className="space-y-1.5">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SERVICE OVERVIEW</h4>
                            <p className="text-slate-650 dark:text-slate-350 font-sans leading-relaxed text-xs">
                              {service.overview}
                            </p>
                          </div>

                          {/* Key Benefits */}
                          <div className="space-y-2">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">KEY BENEFITS FOR CLINICS</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {service.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-100 dark:border-slate-800/80">
                                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span className="text-xs text-slate-700 dark:text-slate-350 font-sans leading-tight">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Implementation Pipeline */}
                          <div className="space-y-3">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">IMPLEMENTATION PIPELINE</h4>
                            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-4 space-y-4 ml-2">
                              {service.process.map((step, idx) => (
                                <div key={idx} className="relative">
                                  <div className="absolute -left-7.5 top-0.5 bg-white dark:bg-slate-950 w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center font-bold text-[10px] text-primary">
                                    {idx + 1}
                                  </div>
                                  <h5 className="text-xs font-bold text-slate-900 dark:text-white font-heading">{step}</h5>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* FAQs */}
                          <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-850">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
                              <HelpCircle className="h-3.5 w-3.5 mr-1 text-secondary" /> SERVICE-SPECIFIC FAQS
                            </h4>
                            <div className="space-y-2">
                              {service.faqs.map((faq, idx) => {
                                const faqKey = `${service.id}-${idx}`;
                                const isFaqOpen = !!faqOpen[faqKey];
                                return (
                                  <div key={idx} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100/70 dark:border-slate-800/80 overflow-hidden">
                                    <button
                                      onClick={() => toggleFaq(service.id, idx)}
                                      className="w-full flex items-center justify-between text-left p-3 focus:outline-none"
                                    >
                                      <span className="font-heading text-xs font-bold text-slate-800 dark:text-white">
                                        {faq.q}
                                      </span>
                                      <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${isFaqOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                      {isFaqOpen && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="px-3 pb-3 border-t border-slate-50 dark:border-slate-850 pt-1.5"
                                        >
                                          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                                            {faq.a}
                                          </p>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Detailed view area (hidden on mobile, visible on desktop) */}
            <div className="hidden lg:block lg:col-span-8 bg-slate-50 dark:bg-slate-950 p-6 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-850">
              <AnimatePresence mode="wait">
                {siteData.services.filter(s => s.id === expandedService).map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-brand p-3.5 rounded-2xl shadow-md">
                          {getServiceIcon(service.id)}
                        </div>
                        <div>
                          <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                            {service.title}
                          </h2>
                          <span className="text-xs font-semibold text-secondary uppercase tracking-widest block mt-0.5">
                            Active Growth Channel
                          </span>
                        </div>
                      </div>
                      <Link
                        to="/book-consultation"
                        className="bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md shadow-primary/10 transition-all text-center"
                      >
                        Acquire Patient Leads
                      </Link>
                    </div>

                    {/* Overview */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">SERVICE OVERVIEW</h3>
                      <p className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
                        {service.overview}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">KEY BENEFITS FOR CLINICS</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80">
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2.5 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 dark:text-slate-350 font-sans leading-tight">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">IMPLEMENTATION PIPELINE</h3>
                      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 space-y-6">
                        {service.process.map((step, i) => (
                          <div key={i} className="relative">
                            <div className="absolute -left-9.5 top-0.5 bg-white dark:bg-slate-950 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center font-bold text-xs text-primary">
                              {i + 1}
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">{step}</h4>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* FAQ Accordions */}
                    <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center">
                        <HelpCircle className="h-4 w-4 mr-1 text-secondary" /> SERVICE-SPECIFIC FAQS
                      </h3>
                      <div className="space-y-3">
                        {service.faqs.map((faq, i) => {
                          const key = `${service.id}-${i}`;
                          const isOpen = !!faqOpen[key];
                          return (
                            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden">
                              <button
                                onClick={() => toggleFaq(service.id, i)}
                                className="w-full flex items-center justify-between text-left p-4 focus:outline-none"
                              >
                                <span className="font-heading text-sm font-bold text-slate-800 dark:text-white">
                                  {faq.q}
                                </span>
                                <ChevronDown className={`h-4.5 w-4.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                              </button>
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="px-4 pb-4 border-t border-slate-50 dark:border-slate-850 pt-2"
                                  >
                                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                                      {faq.a}
                                    </p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* Service Contact CTA */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-sky-100/50 text-slate-800 py-16 text-center border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Not Sure Which Marketing Channels Meet Your Goals?
          </h2>
          <p className="text-slate-650 font-sans max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
            Let our strategists review your clinic location, competitor bids, and specialty keywords to draft an optimized quarterly marketing proposal.
          </p>
          <div className="pt-2">
            <Link
              to="/book-consultation"
              className="bg-gradient-brand text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-103 transition-all inline-flex items-center text-sm"
            >
              <span>Schedule Free Clinic Audit</span>
              <Calendar className="h-4.5 w-4.5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
