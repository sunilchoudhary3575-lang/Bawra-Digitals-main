import { useState } from 'react';
import { ShieldCheck, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function BookConsultation() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    clinicName: '',
    specialty: 'IVF Centers',
    city: '',
    phone: '',
    email: '',
    budget: '₹46,999 - ₹79,999'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, submit this to your API/CRM
    setFormSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Book Free Healthcare Marketing Consultation"
        description="Fill out the form to request a free 30-minute marketing audit and patient acquisition roadmap for your clinic or hospital."
      />

      <div className="min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 bg-slate-50 dark:bg-slate-950 font-sans text-left relative overflow-hidden flex items-center">
        {/* Glow Backgrounds */}
        <div className="absolute top-1/10 left-1/10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/10 right-1/10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse duration-5000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6 lg:space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-brand text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md shadow-primary/15">
                <Sparkles className="h-4 w-4 mr-1 animate-spin" />
                <span>FREE 30-MIN STRATEGY CALL</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                Get Your Custom <span className="text-gradient">OPD Growth</span> Roadmap
              </h1>
              
              <p className="text-slate-600 dark:text-slate-350 text-sm sm:text-base leading-relaxed">
                During this strategy call, we will analyze your website speed, review local search terms for your city, audit your Google Map listings, and show you exactly what your local competitors are bidding.
              </p>

              {/* Bullet points of trust */}
              <div className="space-y-4 pt-2">
                {[
                  { title: "Competitor Bidding Audit", desc: "See exactly which keywords other clinics in your city target." },
                  { title: "Local Maps Audit", desc: "Discover search visibility blocks preventing walk-ins." },
                  { title: "Compliance Review", desc: "Verify that your current marketing follows MCI guidelines." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="bg-emerald-500/10 p-1.5 rounded-lg text-emerald-500 mr-3 flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">{item.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Statistics highlight */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-black font-heading text-slate-900 dark:text-white">200+</div>
                  <div className="text-[10px] text-slate-450 uppercase tracking-widest font-semibold mt-0.5">Medical Projects Done</div>
                </div>
                <div>
                  <div className="text-2xl font-black font-heading text-slate-900 dark:text-white">Up To 5X</div>
                  <div className="text-[10px] text-slate-450 uppercase tracking-widest font-semibold mt-0.5">Visibility Growth</div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-xl">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-6 font-sans">
                    <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle className="h-10 w-10 text-emerald-500" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="font-heading text-2xl font-black text-slate-900 dark:text-white">Audit Confirmed!</h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                        We have received your practice details. One of our senior healthcare marketing strategists will call you within 12 hours to schedule the screen-share call.
                      </p>
                    </div>
                    <div className="pt-4 text-xs text-slate-400 border-t border-slate-100 dark:border-slate-800 max-w-xs mx-auto">
                      Need immediate assistance? Call <a href="tel:+916377790409" className="text-primary font-bold hover:underline">+91 63777 90409</a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 font-sans text-xs sm:text-sm">
                    
                    <div className="space-y-2 text-center md:text-left mb-6">
                      <h2 className="font-heading text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Book Free Consultation</h2>
                      <p className="text-xs text-slate-400">Complete the form to customize your healthcare audit.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="name" className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required 
                          placeholder="Enter your name" 
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-primary text-slate-800 dark:text-slate-200"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="clinicName" className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase">Clinic/Hospital Name</label>
                        <input 
                          type="text" 
                          id="clinicName" 
                          name="clinicName" 
                          required 
                          placeholder="Enter your hospital name" 
                          value={formData.clinicName}
                          onChange={handleChange}
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-primary text-slate-800 dark:text-slate-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="specialty" className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase">Clinical Speciality</label>
                        <select 
                          id="specialty" 
                          name="specialty" 
                          value={formData.specialty}
                          onChange={handleChange}
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-primary text-slate-850 dark:text-slate-200"
                        >
                          <option value="IVF Centers">IVF & Fertility Center</option>
                          <option value="Hospitals">Hospital / Multi-Speciality</option>
                          <option value="Dentists">Dental Clinic</option>
                          <option value="Dermatologists">Dermatology / Skin Care</option>
                          <option value="Gynecologists">Gynecology / Maternity</option>
                          <option value="Orthopedic Clinics">Orthopedic / Bone Joint</option>
                          <option value="Diagnostic Centers">Diagnostic Center / Lab</option>
                          <option value="Cosmetic Clinics">Cosmetic & Plastic Surgery</option>
                          <option value="Pediatric Clinics">Pediatric Clinic</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="city" className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase">Your City</label>
                        <input 
                          type="text" 
                          id="city" 
                          name="city" 
                          required 
                          placeholder="Jodhpur" 
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-primary text-slate-800 dark:text-slate-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="phone" className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          required 
                          placeholder="+91 1234567890" 
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-primary text-slate-800 dark:text-slate-200"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="email" className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required 
                          placeholder="doctor@gmail.com" 
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-primary text-slate-800 dark:text-slate-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="budget" className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase">Monthly Marketing Budget</label>
                      <select 
                        id="budget" 
                        name="budget" 
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-primary text-slate-850 dark:text-slate-200"
                      >
                         <option value="Under ₹46,999">Under ₹46,999</option>
                         <option value="₹46,999 - ₹79,999">₹46,999 - ₹79,999</option>
                         <option value="₹79,999 - ₹1,09,999">₹79,999 - ₹1,09,999</option>
                         <option value="Above ₹1,09,999">Above ₹1,09,999</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-gradient-brand text-white font-bold py-3.5 rounded-xl hover:shadow-lg shadow-primary/25 transition-all text-center flex items-center justify-center space-x-2 text-sm sm:text-base cursor-pointer hover:-translate-y-0.5"
                    >
                      <span>Book Free Healthcare Marketing Consultation</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>

                    {/* HIPAA Compliance Note */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-center space-x-2 text-[10px] text-slate-400">
                      <ShieldCheck className="h-4.5 w-4.5 text-emerald-500" />
                      <span>Compliant with National Patient Data Ethics</span>
                    </div>

                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
