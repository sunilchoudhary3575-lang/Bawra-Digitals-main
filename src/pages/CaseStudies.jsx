import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { siteData } from '../data/siteData';

export default function CaseStudies() {
  return (
    <>
      <SEO 
        title="Healthcare Case Studies & Success Stories"
        description="Explore how Bawra Digitals helped IVF centers, hospitals, and dermatologists double their patient inquiries and scale their monthly OPD."
      />

      {/* Hero Header */}
      <section className="bg-slate-50 dark:bg-slate-950 pt-28 pb-16 lg:pt-36 lg:pb-20 text-left border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-semibold">
              <span>PROVEN GROWTH HISTORIES</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Real Patient Growth Case Studies
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-350 leading-relaxed font-sans font-light">
              We focus on final outcomes: booked appointments, registered patient files, and organic rankings. Look at how we scaled these healthcare brands.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Dashboard Cards */}
      <section className="py-20 bg-white dark:bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {siteData.caseStudies.map((cs, idx) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-50 dark:bg-slate-950 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-850 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8"
              >
                
                <div className={`lg:col-span-5 relative rounded-2xl overflow-hidden h-64 lg:h-auto min-h-[300px] ${cs.id === 'sonal-parihar' ? 'bg-gradient-to-tr from-sky-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800' : 'bg-slate-800'}`}>
                  <img 
                    src={cs.image} 
                    alt={cs.client} 
                    className={`w-full h-full object-cover opacity-90 ${cs.id === 'sonal-parihar' ? 'object-top scale-105' : 'object-center'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      {cs.specialty}
                    </span>
                    <span className="bg-slate-900/90 text-white text-xs px-3 py-1.5 rounded-full">
                      {cs.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <h3 className="font-heading text-2xl font-black">{cs.client}</h3>
                    <p className="text-xs text-slate-300 font-sans tracking-wide">Bawra Growth Campaign Partner</p>
                  </div>
                </div>

                {/* Growth Metrics & Narrative */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                  
                  {/* Dashboard Metrics Header */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Patient Reach</div>
                      <div className="font-heading text-xl sm:text-2xl font-black text-primary mt-1">{cs.metrics.reach}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Leads generated</div>
                      <div className="font-heading text-xl sm:text-2xl font-black text-secondary mt-1">{cs.metrics.leads}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">OPD Growth</div>
                      <div className="font-heading text-xl sm:text-2xl font-black text-emerald-500 mt-1">{cs.metrics.opd}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Campaign ROI</div>
                      <div className="font-heading text-xl sm:text-2xl font-black text-indigo-500 mt-1">{cs.metrics.roi}</div>
                    </div>
                  </div>

                  {/* Narration */}
                  <div className="space-y-4 text-sm sm:text-base font-sans">
                    <div>
                      <strong className="text-slate-900 dark:text-white font-heading">The Challenge:</strong>
                      <p className="text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white font-heading">Our Strategy:</strong>
                      <p className="text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{cs.strategy}</p>
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white font-heading">The Outcome:</strong>
                      <p className="text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-semibold text-emerald-600 dark:text-emerald-400">{cs.outcome}</p>
                    </div>
                  </div>

                  {/* Footer link to consult */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400 flex items-center">
                      <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 mr-1.5" /> HIPAA & Compliance Vetted
                    </span>
                    <Link
                      to="/book-consultation"
                      className="text-xs sm:text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center"
                    >
                      Plan Similar Campaign <ArrowUpRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
