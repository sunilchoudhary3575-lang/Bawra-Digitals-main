import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, CheckCircle, ChevronDown, Award,
  TrendingUp, Users, Shield, ArrowUpRight, BarChart2, Sparkles, Check, Activity, X
} from 'lucide-react';
import { siteData } from '../data/siteData';
import SEO from '../components/SEO';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('meta-ads');
  const [beforeAfterToggle, setBeforeAfterToggle] = useState('after');
  const [isMobile, setIsMobile] = useState(false);

  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.75], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.75], [80, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.75], [isMobile ? 10 : 20, 0]);
  const glowScale = useTransform(scrollYProgress, [0, 0.75], [0.6, 1.2]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.75], [0.15, 0.55]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const currentCaseStudies = siteData.caseStudies;

  // Icons mapping for services
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Share2': return <Users className="h-6 w-6 text-primary" />;
      case 'Instagram': return <Sparkles className="h-6 w-6 text-pink-500" />;
      case 'Search': return <TrendingUp className="h-6 w-6 text-secondary" />;
      case 'TrendingUp': return <BarChart2 className="h-6 w-6 text-amber-500" />;
      case 'MapPin': return <Shield className="h-6 w-6 text-emerald-500" />;
      case 'UserCheck': return <Award className="h-6 w-6 text-indigo-500" />;
      default: return <Sparkles className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <>
      <SEO
        title="India's Leading Healthcare Marketing Agency"
        description="Bawra Digitals Pvt. Ltd. is India's leading medical marketing agency. We grow doctor OPD, establish clinic branding, and run patient lead generation systems."
      />

      <div className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-premium text-white">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl -z-10 animate-pulse duration-5000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-6 text-left space-y-6 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider"
              >
                <Sparkles className="h-4.5 w-4.5 animate-spin" />
                <span>100% HEALTHCARE MARKETING FOCUS</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight"
              >
                Grow Your <span className="text-emerald-300">OPD</span> <br />
                Build Your Brand <br />
                Get More Patients
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-200 font-sans max-w-xl leading-relaxed"
              >
                We translate medical expertise into patient trust. Dominate search rankings, generate high-intent inquiries, and establish your reputation as the top medical authority in your region.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <Link
                  to="/book-consultation"
                  className="bg-white text-primary hover:bg-slate-50 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white/40 bg-transparent text-white px-8 py-4 rounded-xl font-bold hover:border-white transition-all duration-300 text-center"
                >
                  View Services
                </Link>
              </motion.div>

              {/* Statistics Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/15"
              >
                {siteData.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-heading font-black text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-350 font-semibold uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero Right Visual: Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 w-full max-w-lg lg:max-w-none mx-auto"
            >
              <div className="relative bg-white rounded-3xl p-5 sm:p-6 shadow-xl shadow-slate-200/60 border border-slate-100">
                {/* Header of Dashboard */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                  </div>
                  <div className="bg-slate-50 text-primary text-xs px-3 py-1 rounded-full font-mono font-medium border border-slate-100">
                    bawra-analytics-v4.exe
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {/* Metric Card 1 */}
                  <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100/80">
                    <div className="text-[10px] uppercase font-bold text-slate-500">Monthly OPD Calls</div>
                    <div className="text-2xl font-bold font-heading text-slate-800 mt-1">428</div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +148% vs last mo
                    </div>
                  </div>
                  {/* Metric Card 2 */}
                  <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100/80">
                    <div className="text-[10px] uppercase font-bold text-slate-500">Meta Ads Reach</div>
                    <div className="text-2xl font-bold font-heading text-slate-800 mt-1">84.2K</div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +320% vs last mo
                    </div>
                  </div>
                  {/* Metric Card 3 */}
                  <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100/80">
                    <div className="text-[10px] uppercase font-bold text-slate-500">Total Consultations</div>
                    <div className="text-2xl font-bold font-heading text-slate-800 mt-1">115</div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +215% vs last mo
                    </div>
                  </div>
                </div>

                {/* Graph Visualization */}
                <div className="bg-slate-50/40 p-4 rounded-2xl border border-slate-100/40 mb-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold text-slate-700">Patient Conversion Growth</h3>
                    <div className="flex space-x-2 text-[10px] font-medium">
                      <span className="flex items-center text-primary"><span className="w-2 h-2 bg-primary rounded-full mr-1"></span> Organic</span>
                      <span className="flex items-center text-secondary"><span className="w-2 h-2 bg-secondary rounded-full mr-1"></span> Campaigns</span>
                    </div>
                  </div>
                  <div className="h-36 flex items-end justify-between space-x-2 pt-4">
                    {[35, 50, 40, 75, 60, 95, 80, 110, 90, 125, 115, 140].map((h, i) => (
                      <div key={i} className="w-full flex flex-col items-center">
                        <div className="w-full bg-slate-100/50 rounded-t-sm relative overflow-hidden" style={{ height: '110px' }}>
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: i * 0.05 }}
                            className={`w-full absolute bottom-0 rounded-t-md ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}
                          ></motion.div>
                        </div>
                        <span className="text-[8px] text-slate-400 mt-1">W{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Patient Booking Table */}
                <div className="bg-slate-50/60 p-4 rounded-2xl border border-slate-100/80">
                  <h4 className="text-xs font-bold text-slate-600 mb-3">Live Consultation Requests</h4>
                  <div className="space-y-2.5">
                    {[
                      { name: "Dr. Sandeep (IVF Center)", city: "Jodhpur", budget: "₹45k/mo", status: "Verified" },
                      { name: "Dr. Kirti (Cosmetology)", city: "Delhi NCR", budget: "₹85k/mo", status: "Verified" }
                    ].map((lead, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs bg-white p-2.5 rounded-xl border border-slate-100/30">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                          <span className="text-slate-700 font-semibold">{lead.name}</span>
                        </div>
                        <span className="text-slate-500">{lead.city}</span>
                        <span className="text-primary font-bold">{lead.budget}</span>
                        <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] px-2 py-0.5 rounded-md font-semibold">
                          {lead.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Trusted Brands Carousel */}
      <section className="bg-white dark:bg-slate-900 py-10 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
            TRUSTED BY LEADING CLINICS & HOSPITALS ACROSS INDIA
          </p>
          <div className="relative overflow-hidden w-full flex">
            <div className="flex animate-scroll space-x-12 whitespace-nowrap w-max">
              {[
                "Shri Ram Hospital", "Kamala Nagar Hospital", "Galva Care Hospital", "Dhanwantari Hospital",
                "Dr. Singhi's", "Benda Acupuncture", "Dara Hospital & Mind Center", "Endocrine",
                "Lamaria's", "Skin & Soul Aesthetics", "SONAA Medihub", "Singla Hospital",
                "AIMS Doc Talks", "ZAIB Hospital", "Healing Hands", "Dr. Bhajan", "NAMYAA",
                "Shivam Homeopathy", "Mediking Diagnostic Centre"
              ].concat([
                "Shri Ram Hospital", "Kamala Nagar Hospital", "Galva Care Hospital", "Dhanwantari Hospital",
                "Dr. Singhi's", "Benda Acupuncture", "Dara Hospital & Mind Center", "Endocrine",
                "Lamaria's", "Skin & Soul Aesthetics", "SONAA Medihub", "Singla Hospital",
                "AIMS Doc Talks", "ZAIB Hospital", "Healing Hands", "Dr. Bhajan", "NAMYAA",
                "Shivam Homeopathy", "Mediking Diagnostic Centre"
              ]).map((brand, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center justify-center py-3">
                  <span className="text-lg sm:text-xl font-heading font-extrabold tracking-tight text-slate-300 dark:text-slate-700 hover:text-primary transition-colors duration-200">
                    ✦ {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xs font-bold tracking-widest text-primary uppercase mb-3"
            >
              WHY BAWRA DIGITALS
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              We Speak Medicine. We Drive Patient Actions.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans"
            >
              Healthcare marketing is different. It's built on ethical compliance, patient empathy, and immediate geographical trust. Here is why top doctors choose us.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "100% Healthcare Focus",
                desc: "We don't do real estate or fashion. Our entire team works only on medical and healthcare campaigns daily.",
                icon: <Activity className="h-6 w-6 text-white" />
              },
              {
                title: "Patient Psychology Expertise",
                desc: "We draft contents that address patient fear, trust questions, and trigger immediate OPD consultation bookings.",
                icon: <Users className="h-6 w-6 text-white" />
              },
              {
                title: "Doctor Branding Specialists",
                desc: "We turn individual medical practitioners into celebrated local healthcare experts via video reels and podcasts.",
                icon: <Award className="h-6 w-6 text-white" />
              },
              {
                title: "Proven Conversion Systems",
                desc: "We construct direct lead funnels connecting Google and Meta platforms to your clinic's WhatsApp and reception.",
                icon: <Shield className="h-6 w-6 text-white" />
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: isMobile ? 0 : idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm shadow-slate-100 dark:shadow-none transition-colors duration-300"
              >
                <div className="bg-gradient-brand p-3 rounded-xl inline-flex mb-5 shadow-md shadow-primary/20">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Tabs */}
      <section className="py-20 bg-white dark:bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 lg:mb-16">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">OUR CAPABILITIES</h2>
              <p className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Premium Patient Acquisition Channels
              </p>
            </div>
            <Link to="/services" className="mt-4 lg:mt-0 font-sans text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center">
              Explore All Services <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Tabs List */}
            <div className="lg:col-span-4 space-y-2">
              {siteData.services.slice(0, 5).map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border ${activeTab === service.id
                      ? 'bg-primary/5 dark:bg-primary/10 border-primary text-primary font-bold'
                      : 'bg-transparent border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    {getServiceIcon(service.icon)}
                    <span className="text-sm font-heading">{service.title}</span>
                  </div>
                  <ArrowRight className={`h-4 w-4 transition-transform duration-200 ${activeTab === service.id ? 'translate-x-1' : 'opacity-0'}`} />
                </button>
              ))}
            </div>

            {/* Active Tab Preview Card */}
            <div className="lg:col-span-8 bg-slate-50 dark:bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
              <AnimatePresence mode="wait">
                {siteData.services.filter(s => s.id === activeTab).map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        {getServiceIcon(service.icon)}
                      </div>
                      <h3 className="font-heading text-2xl font-black text-slate-900 dark:text-white">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {service.overview}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">EXPECTED ADVANTAGES</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.slice(0, 4).map((benefit, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <CheckCircle className="h-4.5 w-4.5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-tight">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
                        <span>Compliant Marketing Protocols</span>
                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                        <span>Full ROI Attribution</span>
                      </div>
                      <Link
                        to="/book-consultation"
                        className="bg-primary text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors flex items-center space-x-2 shadow-md shadow-primary/10"
                      >
                        <span>Acquire Patient Leads</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-bold tracking-widest text-primary uppercase">MARKETING RESULTS</h2>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Traditional Clinics vs. Bawra Digital Systems
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                Most agencies run general advertisements that exhaust your budgets and deliver invalid queries. We structure compliant, direct-to-patient consultation funnels that convert.
              </p>

              {/* Toggles */}
              <div className="flex bg-slate-200 dark:bg-slate-900 p-1.5 rounded-xl inline-flex">
                <button
                  onClick={() => setBeforeAfterToggle('before')}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${beforeAfterToggle === 'before'
                      ? 'bg-rose-500 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-800'
                    }`}
                >
                  Unoptimized Approach
                </button>
                <button
                  onClick={() => setBeforeAfterToggle('after')}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${beforeAfterToggle === 'after'
                      ? 'bg-emerald-500 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-800'
                    }`}
                >
                  Bawra Digitals Model
                </button>
              </div>
            </div>

            {/* Right Card Panel */}
            <div className="lg:col-span-7">
              <div className="relative">
                <AnimatePresence mode="wait">
                  {beforeAfterToggle === 'before' ? (
                    <motion.div
                      key="before"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-rose-100 dark:border-rose-950/20 shadow-xl"
                    >
                      <h3 className="font-heading text-xl font-bold text-rose-500 flex items-center mb-6">
                        <span className="w-2.5 h-2.5 bg-rose-500 rounded-full mr-2.5"></span>
                        Unoptimized Traditional Marketing
                      </h3>
                      <ul className="space-y-4 font-sans text-sm">
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-rose-500 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-800 dark:text-slate-200">Wasted Ad Spend:</strong>
                            <p className="text-slate-500 dark:text-slate-400 mt-0.5">Paying for clicks from students looking for courses or non-local patients seeking free advice.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-rose-500 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-800 dark:text-slate-200">No Professional Doctor Video Presence:</strong>
                            <p className="text-slate-500 dark:text-slate-400 mt-0.5">Posting stock photos of generic stethoscopes that do not establish human trust.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-rose-500 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-800 dark:text-slate-200">Lost Leads at Reception:</strong>
                            <p className="text-slate-500 dark:text-slate-400 mt-0.5">Leads sit in Excel files for days, allowing competitors to capture patients first.</p>
                          </div>
                        </li>
                      </ul>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="after"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-emerald-100 dark:border-emerald-950/20 shadow-xl"
                    >
                      <h3 className="font-heading text-xl font-bold text-emerald-500 flex items-center mb-6">
                        <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2.5"></span>
                        Bawra Digitals Conversion Engine
                      </h3>
                      <ul className="space-y-4 font-sans text-sm">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-800 dark:text-slate-200">Hyper-targeted Patient Leads:</strong>
                            <p className="text-slate-500 dark:text-slate-400 mt-0.5">Negative keyword audits and precise zip code filtering restrict waste, maximizing campaign budget.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-800 dark:text-slate-200">Doctor Personal Branding:</strong>
                            <p className="text-slate-500 dark:text-slate-400 mt-0.5">We organize monthly video shoots for reels and explainers, converting doctors into regional thought leaders.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-800 dark:text-slate-200">Instant Lead Routing:</strong>
                            <p className="text-slate-500 dark:text-slate-400 mt-0.5">Automated SMS/WhatsApp alerts route patient details directly to your staff within 60 seconds.</p>
                          </div>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white dark:bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">GROWTH SNAPSHOTS</h2>
              <p className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Real Results from Real Clinics
              </p>
            </div>
            <Link to="/case-studies" className="mt-4 sm:mt-0 font-sans text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center">
              View All Case Studies <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {currentCaseStudies.map((caseStudy, idx) => (
              <motion.div
                key={caseStudy.id}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-850 shadow-md flex flex-col h-full text-left"
              >
                <div className={`${caseStudy.headerBg || 'bg-primary'} text-white p-8 flex flex-row items-center justify-between gap-4 sm:gap-6`}>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase block mb-1">
                      Case Study 0{idx + 1} — {caseStudy.type}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-white leading-tight">{caseStudy.client}</h3>
                    <p className="text-xs sm:text-sm text-white/95 font-sans mt-2 font-medium">
                      {caseStudy.goal}
                    </p>
                  </div>
                  {caseStudy.image && (
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/20 bg-white/10 flex-shrink-0 shadow-md">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.client}
                        className={`w-full h-full object-cover ${caseStudy.id === 'sonal-parihar' ? 'object-top scale-105' : 'object-center'}`}
                      />
                    </div>
                  )}
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                  <ul className="space-y-4">
                    {caseStudy.bullets && caseStudy.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0" />
                        <span
                          className="text-slate-600 dark:text-slate-350 font-sans text-sm sm:text-base leading-relaxed [&>strong]:text-primary [&>strong]:dark:text-primary-light [&>strong]:font-bold"
                          dangerouslySetInnerHTML={{ __html: bullet }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">BAWRA PACKAGES</h2>
            <p className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Simple, Transparent Partnership Packages
            </p>
            <p className="text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans text-sm sm:text-base">
              No hidden agency percentages or setup commissions. Choose the plan that meets your medical facility's monthly objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {siteData.packages.map((pack, idx) => (
              <div
                key={idx}
                className={`bg-white dark:bg-slate-900 rounded-3xl p-8 border ${pack.isPopular
                    ? 'border-2 border-primary shadow-xl scale-100 md:scale-105 relative'
                    : 'border-slate-100 dark:border-slate-800/80 shadow-md'
                  }`}
              >
                {pack.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-brand text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2">{pack.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed h-12">{pack.desc}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-heading font-black text-slate-900 dark:text-white">{pack.price}</span>
                    <span className="text-slate-400 text-xs font-semibold ml-2">/ {pack.period}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium block mt-1">18% GST included</span>
                </div>

                <Link
                  to="/book-consultation"
                  className={`block w-full py-3 rounded-xl text-center text-sm font-bold transition-all mb-8 ${pack.isPopular
                      ? 'bg-gradient-brand text-white hover:shadow-lg hover:shadow-primary/20'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                >
                  Acquire Patient Leads
                </Link>

                <ul className="space-y-3.5 text-sm">
                  {pack.features.map((feat, i) => {
                    const isNo = feat.startsWith('no:');
                    const featText = isNo ? feat.slice(3) : feat;
                    return (
                      <li key={i} className="flex items-start">
                        {isNo ? (
                          <X className="h-4.5 w-4.5 mr-3 flex-shrink-0 mt-0.5 text-slate-300 dark:text-slate-700" />
                        ) : (
                          <CheckCircle className={`h-4.5 w-4.5 mr-3 flex-shrink-0 mt-0.5 ${pack.isPopular ? 'text-primary' : 'text-slate-400'}`} />
                        )}
                        <span className={`font-sans leading-tight text-xs sm:text-sm ${isNo ? 'text-slate-450 dark:text-slate-555 line-through opacity-70' : 'text-slate-600 dark:text-slate-300'}`}>
                          {featText}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/packages" className="font-sans text-sm font-bold text-secondary hover:text-secondary-dark inline-flex items-center">
              Compare Full Packages details <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white dark:bg-slate-900 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">FAQ</h2>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {siteData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-slate-100 dark:border-slate-800/80 pb-4"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left py-3 focus:outline-none"
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-sans leading-relaxed pt-2">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Contact Banner */}
      <section ref={ctaRef} className="bg-gradient-premium relative overflow-hidden text-center py-20 text-white" style={{ perspective: '1000px' }}>
        {/* Glow element in background */}
        <motion.div 
          style={{ 
            scale: glowScale,
            opacity: glowOpacity,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/20 pointer-events-none blur-3xl rounded-full"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-30 pointer-events-none"></div>
        <motion.div 
          style={{ scale, opacity, y, rotateX, transformStyle: 'preserve-3d' }}
          className="max-w-4xl mx-auto px-4 relative z-10 space-y-6"
        >
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready to Experience Consistent OPD Growth?
          </h2>
          <p className="text-slate-300 font-sans max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Book a 30-minute free consultation where our healthcare marketing team reviews your clinical online presence and shares an OPD scaling roadmap.
          </p>
          <div className="pt-4">
            <Link
              to="/book-consultation"
              className="bg-white text-slate-950 font-bold px-8 py-4 rounded-full text-base hover:bg-slate-100 shadow-xl shadow-slate-900/30 hover:scale-105 transition-all inline-flex items-center"
            >
              <span>Schedule Free Strategy Call</span>
              <ArrowRight className="h-5 w-5 ml-2 text-primary" />
            </Link>
          </div>
          <div className="pt-6 flex justify-center space-x-6 text-xs text-slate-400">
            <span>✓ Compliance Shield</span>
            <span>✓ Direct WhatsApp Integrations</span>
            <span>✓ Doctor Personal Branding Checklist</span>
          </div>
        </motion.div>
      </section>
    </>
  );
}
