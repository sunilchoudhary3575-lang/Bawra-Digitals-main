import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, X } from 'lucide-react';
import SEO from '../components/SEO';
import { siteData } from '../data/siteData';

export default function Packages() {
  const comparisonData = [
    { feature: "Instagram & Facebook Management", starter: "✔ Included", business: "✔ Included", advanced: "✔ Included" },
    { feature: "Google My Business Optimization", starter: "✔ Included", business: "✔ Included", advanced: "✔ Included" },
    { feature: "Reels / Month", starter: "6 Reels", business: "12 Reels", advanced: "16 Reels" },
    { feature: "Graphic Posts / Month", starter: "6 Graphics", business: "12 Graphics", advanced: "16 Graphics" },
    { feature: "Video Shoot Days / Month", starter: "1 Day", business: "2 Days", advanced: "4 Days" },
    { feature: "Meta Ads Management", starter: "✔ Included", business: "✔ Included", advanced: "✔ Included" },
    { feature: "YouTube Channel Management", starter: "❌ Not Included", business: "✔ Included", advanced: "✔ Included" },
    { feature: "Long Videos / Month", starter: "❌ Not Included", business: "3 (up to 10m)", advanced: "6 (up to 10m)" },
    { feature: "Google Ads Management", starter: "❌ Not Included", business: "✔ Included", advanced: "✔ Included" },
    { feature: "Website Development", starter: "❌ Not Included", business: "❌ Not Included", advanced: "✔ Included" },
    { feature: "WhatsApp Bulk Messaging", starter: "❌ Not Included", business: "❌ Not Included", advanced: "✔ 10,000 Msg" },
    { feature: "Monthly Report & Manager", starter: "✔ Included", business: "✔ Included", advanced: "✔ Included" }
  ];

  return (
    <>
      <SEO 
        title="Healthcare Marketing Packages & Pricing"
        description="Choose from our Starter, Business, and Advanced healthcare marketing packages. Clear transparent pricing for scaling clinic OPD and doctor brands."
      />

      {/* Hero Header */}
      <section className="bg-slate-50 dark:bg-slate-950 pt-28 pb-16 lg:pt-36 lg:pb-20 text-left border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 dark:bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-semibold">
              <span>TRANSPARENT VALUE TIERING</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Honest Plans. No Hidden Cut Commissions.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-350 leading-relaxed font-sans font-light">
              We charge flat professional fees. Your advertising budget is paid directly to Google/Meta, giving you 100% transparency and complete ownership of your data.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white dark:bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.packages.map((pack, idx) => (
              <div 
                key={idx}
                className={`bg-slate-50 dark:bg-slate-950 rounded-3xl p-8 border flex flex-col justify-between h-full ${
                  pack.isPopular 
                    ? 'border-2 border-primary shadow-xl scale-100 md:scale-103 relative' 
                    : 'border-slate-100 dark:border-slate-850/80 shadow-md'
                }`}
              >
                {pack.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-brand text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    MOST POPULAR
                  </span>
                )}
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2">{pack.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-450 mb-6 leading-relaxed h-12">{pack.desc}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-heading font-black text-slate-900 dark:text-white">{pack.price}</span>
                      <span className="text-slate-450 text-xs font-semibold ml-2">/ {pack.period}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium block mt-1">18% GST included</span>
                  </div>

                  <Link
                    to="/book-consultation"
                    className={`block w-full py-3.5 rounded-xl text-center text-sm font-bold transition-all mb-8 ${
                      pack.isPopular
                        ? 'bg-gradient-brand text-white hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    Select Plan & Consult
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
                            <CheckCircle2 className={`h-4.5 w-4.5 mr-3 flex-shrink-0 mt-0.5 ${pack.isPopular ? 'text-primary' : 'text-slate-400'}`} />
                          )}
                          <span className={`font-sans leading-tight text-xs sm:text-sm ${isNo ? 'text-slate-450 dark:text-slate-555 line-through opacity-70' : 'text-slate-600 dark:text-slate-300'}`}>
                            {featText}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">PLAN COMPARISON</h2>
            <p className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Side-By-Side Feature Comparison
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800 font-sans text-sm">
              <thead className="bg-slate-50 dark:bg-slate-950 font-heading">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-slate-900 dark:text-white">Service Category</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-900 dark:text-white">Starter</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-900 dark:text-white">Premium (OPD Booster)</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-900 dark:text-white">Elite Hospital Suite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20">
                    <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-200">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-slate-500 dark:text-slate-400">
                      {row.starter.startsWith("❌") ? (
                        <span className="text-slate-300 dark:text-slate-700">❌</span>
                      ) : row.starter.startsWith("✔") ? (
                        <span className="text-emerald-500 font-bold">✔</span>
                      ) : row.starter}
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600 dark:text-slate-300 font-medium bg-slate-50/30 dark:bg-slate-900/30">
                      {row.business.startsWith("❌") ? (
                        <span className="text-slate-300 dark:text-slate-700">❌</span>
                      ) : row.business.startsWith("✔") ? (
                        <span className="text-primary font-bold">✔</span>
                      ) : row.business}
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600 dark:text-slate-300 font-medium">
                      {row.advanced.startsWith("❌") ? (
                        <span className="text-slate-300 dark:text-slate-700">❌</span>
                      ) : row.advanced.startsWith("✔") ? (
                        <span className="text-secondary font-bold">✔</span>
                      ) : row.advanced}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Transparent Ad Spend Policy Notice */}
      <section className="py-20 bg-white dark:bg-slate-900 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-premium text-white p-8 rounded-3xl border border-slate-850 shadow-xl space-y-6">
            <h3 className="font-heading text-xl font-bold flex items-center">
              <ShieldCheck className="h-6 w-6 text-secondary mr-2.5" /> Ad Spend Transparency Pledge
            </h3>
            <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
              Unlike other digital agencies that request a lump-sum check and hide the true advertising platform invoice, Bawra Digitals ensures that all Google, Instagram, and Facebook ads run inside your corporate account. You attach your payment card directly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-secondary mr-2" /> Direct Dashboard Access
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-secondary mr-2" /> Complete Bill Ownership
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
