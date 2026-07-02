import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { siteData } from '../data/siteData';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: '',
    specialty: 'IVF Centers',
    message: ''
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
    setFormData({
      name: '',
      email: '',
      phone: '',
      clinicName: '',
      specialty: 'IVF Centers',
      message: ''
    });
  };

  return (
    <>
      <SEO 
        title="Contact Us | Bawra Digitals"
        description="Get in touch with Bawra Digitals Pvt. Ltd., India's leading healthcare marketing agency. Call us at +91 63777 90409 or email contact@bawradigitals.com."
      />

      {/* Hero Header */}
      <section className="bg-slate-50 dark:bg-slate-950 pt-28 pb-16 lg:pt-36 lg:pb-20 text-left border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-semibold">
              <span>GET IN TOUCH TODAY</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Start Scaling Your OPD OPD Inflow
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-350 leading-relaxed font-sans font-light">
              Have questions about our packaging or want to audit your current search ranking? Drop a message below, and we will get back to you within 12 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-white dark:bg-slate-900 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Info Panel */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-sans leading-relaxed text-sm sm:text-base">
                Whether you need immediate local map optimizations or wish to launch surgical Google Ads, we are here to support your practice.
              </p>

              <div className="space-y-6">
                
                {/* Phones */}
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-slate-900 dark:text-white">Call/WhatsApp</h3>
                    <div className="mt-1 space-y-1 text-sm text-slate-500 dark:text-slate-400 font-medium font-sans">
                      {siteData.phoneNumbers.map((phone, idx) => (
                        <a key={idx} href={`tel:${phone.replace(/\s+/g, '')}`} className="block hover:text-primary transition-colors">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-xl mr-4 text-secondary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-slate-900 dark:text-white">Email Address</h3>
                    <div className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-medium font-sans">
                      <a href={`mailto:${siteData.emails[0]}`} className="hover:text-primary transition-colors">
                        {siteData.emails[0]}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Headquarters Address */}
                <div className="flex items-start">
                  <div className="bg-indigo-500/10 p-3 rounded-xl mr-4 text-indigo-500">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-slate-900 dark:text-white">Jodhpur Headquarters</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                      {siteData.address}
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Callout */}
              <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-3xl border border-slate-100 dark:border-slate-850 flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="font-heading text-base font-bold text-slate-950 dark:text-white">Direct Chat</h4>
                  <p className="text-xs text-slate-400 font-sans">Instant connection with a marketer.</p>
                </div>
                <a
                  href={`https://wa.me/${siteData.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white p-3.5 rounded-2xl hover:bg-[#1ebd59] shadow-md shadow-emerald-500/25 transition-all"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageSquare className="h-5 w-5" />
                </a>
              </div>

            </div>

            {/* Message Form */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 p-6 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-850">
              {formSubmitted ? (
                <div className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-center py-10 px-6 rounded-2xl space-y-4 font-sans">
                  <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto" />
                  <h3 className="font-heading text-xl font-bold">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto">
                    Thank you for reaching out. A healthcare branding expert from Bawra Digitals will call you within 12 hours.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-sans text-sm">
                  
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
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
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
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                      />
                    </div>
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
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="specialty" className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase">Your Medical Speciality</label>
                    <select 
                      id="specialty" 
                      name="specialty" 
                      value={formData.specialty}
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                    >
                      <option value="IVF Centers">IVF & Fertility</option>
                      <option value="Hospitals">Hospital/Multi-Speciality</option>
                      <option value="Dentists">Dental Clinic</option>
                      <option value="Dermatologists">Dermatology/Cosmetology</option>
                      <option value="Gynecologists">Gynecology/Obstetrics</option>
                      <option value="Orthopedic Clinics">Orthopedic Clinic</option>
                      <option value="Diagnostic Centers">Diagnostic Lab</option>
                      <option value="Cosmetic Clinics">Cosmetic/Plastic Surgery</option>
                      <option value="Pediatric Clinics">Pediatric Clinic</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-xs font-bold text-slate-550 dark:text-slate-400 uppercase">Describe Your Marketing Goals</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      placeholder="I want to double my IVF registration inquiries and optimize my Google Map rank..." 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gradient-brand text-white font-bold py-3.5 rounded-xl hover:shadow-lg shadow-primary/10 transition-all flex items-center justify-center space-x-2 text-sm sm:text-base cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="h-4.5 w-4.5" />
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="h-96 w-full relative overflow-hidden border-t border-slate-100 dark:border-slate-900">
        <div className="absolute inset-0 bg-slate-250">
          {/* Iframe with Bombay Motors Jodhpur Location */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14300.916891223946!2d73.00331006132049!3d26.2704403756193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c39e246cfbf%3A0x6b1076f7b11d9a5b!2sBombay%20Motor%20Circle%2C%20Jodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Bawra Digitals Bombay Motor Circle Jodhpur Headquarters Map"
          ></iframe>
        </div>
      </section>
    </>
  );
}
