import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-slate-300 border-t border-slate-800 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Agency Intro */}
          <div className="space-y-6 col-span-2 sm:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Bawra Digitals" className="h-10 sm:h-12 w-auto object-contain" />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              India's leading healthcare-exclusive marketing agency. We translate medical expertise into patient trust, helping doctors, clinics, and hospitals scale their reputation and OPD.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/bawradigitals" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/5 text-slate-400 hover:bg-primary/20 hover:text-white transition-all duration-200" aria-label="Facebook">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="https://instagram.com/bawradigitals" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/5 text-slate-400 hover:bg-primary/20 hover:text-white transition-all duration-200" aria-label="Instagram">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/bawradigitals" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/5 text-slate-400 hover:bg-primary/20 hover:text-white transition-all duration-200" aria-label="LinkedIn">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-base font-semibold text-white tracking-wider uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-white text-slate-300 transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white text-slate-300 transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Marketing Services</Link>
              </li>
              <li>
                <Link to="/specialities" className="hover:text-white text-slate-300 transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Medical Specialities</Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white text-slate-300 transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Case Studies</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white text-slate-300 transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Packages & Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Medical Specialities */}
          <div>
            <h3 className="font-heading text-base font-semibold text-white tracking-wider uppercase mb-6">
              Specialities
            </h3>
            <ul className="space-y-3 text-sm">
              {siteData.specialities.map((spec) => (
                <li key={spec.id}>
                  <Link to="/specialities" className="hover:text-white text-slate-300 transition-colors flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-primary-light" /> {spec.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading text-base font-semibold text-white tracking-wider uppercase mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-normal">{siteData.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <div>
                  {siteData.phoneNumbers.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.replace(/\s+/g, '')}`} className="block hover:text-white transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-light mr-3 flex-shrink-0" />
                <a href={`mailto:${siteData.emails[0]}`} className="hover:text-white transition-colors">
                  {siteData.emails[0]}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-row items-center justify-between text-[10px] sm:text-xs text-slate-500 flex-wrap gap-4 text-left">
          <p>© {currentYear} {siteData.agencyName}. All rights reserved.</p>
          <div className="flex space-x-4 sm:space-x-6">
            <Link to="/contact" className="hover:text-white">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
