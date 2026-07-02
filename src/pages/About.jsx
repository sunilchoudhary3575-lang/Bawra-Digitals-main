import { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ShieldAlert, Compass, Target, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(0);
  const milestoneTimelineRef = useRef(null);

  const { scrollYProgress: milestoneProgress } = useScroll({
    target: milestoneTimelineRef,
    offset: ["start 65%", "end 65%"]
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (customIdx) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: isMobile ? 0 : customIdx * 0.15,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.12,
        delayChildren: isMobile ? 0.05 : (customIdx * 0.15) + 0.05
      }
    })
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  const milestones = [
    { year: "2022", title: "Agency Founded", desc: "Bawra Digitals is launched in Jodhpur with a clear focus on healthcare marketing, signing our first 5 dental clinics." },
    { year: "2023", title: "IVF Speciality Expansion", desc: "We onboarded 15+ IVF and fertility centers, building custom patient-nurturing funnels that cut ad spend in half." },
    { year: "2024", title: "Video Production Unit", desc: "Launched dedicated mobile recording crews to manage high-quality procedure explainer reels and patient testimonials." },
    { year: "2025", title: "National Footprint", desc: "Serving 100+ doctors across 12 states in India, managing over ₹2 Crores in cumulative annual ad budgets." },
    { year: "2026", title: "Bawra Analytics Platform", desc: "Integrating advanced CRM lead-routing platforms to automate patient confirmation notifications for clinic receptionists." }
  ];

  const team = [
    { name: "Pradeep Bawra", role: "Founder & Chief Healthcare Strategist", bio: "4+ years of healthcare growth experience. Pradeep is an expert in local map pack SEO and doctor reputation building.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" },
    { name: "Sanjay Sharma", role: "Creative Director & Video Lead", bio: "Ex-creative agency head. Sanjay plans procedure scripts and shoots premium reels that build immediate doctor trust.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" },
    { name: "Dr. Anjali Verma", role: "Medical Compliance Vetting", bio: "Dr. Anjali reviews all ad copies, reels, and blogs to ensure complete MCI compliance and factual accuracy.", image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=300" }
  ];

  const processes = [
    { step: "01", title: "Clinical Brand Audit", desc: "We review your search rankings, reviews, competitor strategies, and current digital presence." },
    { step: "02", title: "Tailored Content Creation", desc: "Our writers and designers create custom social media calendars and medical scripting reels." },
    { step: "03", title: "Direct-to-Patient Ads", desc: "We launch highly optimized Google Search and Meta Ads campaigns targeting your nearby geo-locations." },
    { step: "04", title: "CRM Lead Integration", desc: "We link incoming patient inquiries directly to your reception desk for immediate appointment calls." },
    { step: "05", title: "A/B Testing & Scaling", desc: "We continuously tweak keyword bids and ad designs based on monthly conversion reporting." }
  ];

  return (
    <>
      <SEO 
        title="About Us | Healthcare Marketing Specialists"
        description="Learn more about Bawra Digitals Pvt. Ltd., our mission, team, and process. We specialize exclusively in doctor branding, hospital SEO, and clinical OPD growth."
      />

      {/* Hero Header */}
      <section className="bg-slate-50 dark:bg-slate-950 pt-28 pb-16 lg:pt-36 lg:pb-20 text-left border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 dark:bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-semibold">
              <span>OUR STORY & PHILOSOPHY</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Bridging the Gap Between Doctors & Patients
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-350 leading-relaxed font-sans font-light">
              Bawra Digitals was founded to help doctors and clinics stand out. We understand that medical advertising requires empathy, compliance, and clinical accuracy. That's why we build campaigns that generate real consultations, not just clicks.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-5">
              <div className="bg-primary/10 p-3.5 rounded-xl inline-flex">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
              <p className="text-slate-500 dark:text-slate-400 font-sans leading-relaxed text-sm sm:text-base">
                To empower individual medical practitioners and hospital chains to establish authentic digital authority. We aim to connect active patients with the best-suited clinics through compliant, high-converting digital communication systems.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-5">
              <div className="bg-secondary/10 p-3.5 rounded-xl inline-flex">
                <Compass className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
              <p className="text-slate-500 dark:text-slate-400 font-sans leading-relaxed text-sm sm:text-base">
                To become India's most trusted healthcare-exclusive growth agency, setting national benchmarks for ethical patient acquisition, digital reputation management, and doctor personal branding by 2030.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Healthcare Marketing is Different */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 text-left border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-rose-500/10 text-rose-500 px-4 py-1.5 rounded-full text-xs font-semibold">
                <ShieldAlert className="h-4 w-4" />
                <span>ETHICAL & LEGAL SAFETY</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Why Healthcare Marketing is Unique
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-sm sm:text-base">
                Unlike real estate or e-commerce, healthcare involves severe clinical responsibility. Medical branding cannot afford exaggerated promises, false reviews, or illegal claims that violate regulatory frameworks.
              </p>
              <div className="space-y-4">
                {[
                  "No absolute '100% cure' claims that trigger legal penalties.",
                  "Strict compliance with MCI guidelines.",
                  "Full patient data privacy and confidential review acquisition.",
                  "Clear, medically accurate explanations of complex surgeries."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg space-y-6">
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">Our Guardrails & Compliance Policy</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-sans leading-relaxed">
                At Bawra Digitals, we run every video script, social media post, and ad headline through a dedicated vetting check. If a statement violates local laws or medical council guidelines, it is rewritten to prioritize education over empty sales promotions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl">
                  <div className="text-primary font-bold text-lg font-heading">100% Compliance</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-semibold uppercase">Zero Legal Issues</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl">
                  <div className="text-secondary font-bold text-lg font-heading">Medical Check</div>
                  <div className="text-[11px] text-slate-400 mt-1 font-semibold uppercase">Dr.-Reviewed Scripts</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Process Timeline */}
      <section className="py-20 bg-white dark:bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xs font-bold tracking-widest text-primary uppercase mb-3"
            >
              HOW WE PARTNER WITH YOU
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
            >
              Our Step-By-Step Patient Growth Process
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processes.map((process, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="relative space-y-4"
              >
                <motion.div 
                  variants={childVariants}
                  className="font-heading text-5xl font-black text-primary/20 dark:text-primary/10 select-none"
                >
                  {process.step}
                </motion.div>
                <motion.h3 
                  variants={childVariants}
                  className="font-heading text-lg font-bold text-slate-900 dark:text-white mt-1"
                >
                  {process.title}
                </motion.h3>
                <motion.p 
                  variants={childVariants}
                  className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed"
                >
                  {process.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Milestones / Timeline */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 text-left border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">OUR MILESTONES</h2>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Bawra Digitals Growth Timeline
            </h2>
          </div>

          <div ref={milestoneTimelineRef} className="space-y-12 relative pl-1 sm:pl-0">
            {/* Background Line Track */}
            <div className="absolute top-2 bottom-2 left-4 w-0.5 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
            
            {/* Active Progress Bar (Fills on scroll) */}
            <motion.div 
              style={{ scaleY: milestoneProgress, originY: 0 }}
              className="absolute top-2 bottom-2 left-4 w-0.5 bg-gradient-to-b from-primary via-primary-light to-secondary rounded-full"
            />

            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                onViewportEnter={() => setActiveMilestone(idx)}
                viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
                className="relative pl-12"
              >
                {/* Dot Bullet Indicator */}
                <div 
                  className={`absolute top-2.5 left-2 w-4.5 h-4.5 rounded-full border-4 flex items-center justify-center z-10 transition-all duration-500 ${
                    activeMilestone === idx
                      ? 'bg-primary border-white dark:border-slate-950 scale-125 shadow-[0_0_15px_rgba(27,63,222,0.8)]'
                      : 'bg-slate-200 dark:bg-slate-800 border-slate-50 dark:border-slate-950 scale-100'
                  }`}
                />

                {/* Card Container */}
                <div 
                  className={`p-6 rounded-2xl border transition-all duration-500 shadow-sm ${
                    activeMilestone === idx 
                      ? 'bg-gradient-to-r from-blue-50/40 to-white dark:from-primary/10 dark:to-slate-900 border-primary dark:border-primary-light scale-[1.02] shadow-md shadow-primary/5 opacity-100' 
                      : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-850 opacity-60 scale-[0.98]'
                  }`}
                >
                  <div className={`text-sm font-bold font-heading transition-colors duration-500 ${
                    activeMilestone === idx ? 'text-primary' : 'text-slate-400'
                  }`}>
                    {milestone.year}
                  </div>
                  <h3 className="font-heading text-lg font-extrabold text-slate-900 dark:text-white mt-1 transition-colors duration-500">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-sans mt-2 leading-relaxed transition-colors duration-500">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Grid */}
      <section className="py-20 bg-white dark:bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">EXPERT TEAM</h2>
            <p className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Meet Our Healthcare Growth Experts
            </p>
            <p className="text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-sans text-sm sm:text-base">
              A curated blend of healthcare marketers, medical compliance reviewers, and expert videographers dedicated to your clinic's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-50 dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-850 shadow-sm"
              >
                <div className="p-6">
                  <div className="text-xs text-secondary font-semibold uppercase tracking-wider">{member.role}</div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-450 font-sans mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
