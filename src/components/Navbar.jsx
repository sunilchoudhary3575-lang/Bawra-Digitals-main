import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Specialities', path: '/specialities' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-slate-200/80 bg-white/98 shadow-sm ${
        scrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src="/logo.png" alt="Bawra Digitals" className="h-9 sm:h-10 lg:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-7">
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key={link.path} className="relative group py-2">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `font-sans text-xs xl:text-sm font-medium transition-colors duration-200 hover:text-primary flex items-center gap-1 ${
                          isActive
                            ? 'text-primary border-b-2 border-primary pb-1'
                            : 'text-slate-700'
                        }`
                      }
                    >
                      <span>Services</span>
                      <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                    </NavLink>

                    {/* Dropdown Menu - opens on hover */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-[9999]">
                      <div className="w-[560px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl shadow-slate-100/60 dark:shadow-none p-5 grid grid-cols-2 gap-2">
                        {siteData.services.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services?select=${service.id}`}
                            className="flex items-start space-x-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors text-left group/item"
                          >
                            <div className="bg-primary/5 text-primary p-2 rounded-xl group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-200 mt-0.5">
                              <span className="w-1.5 h-1.5 bg-current rounded-full block"></span>
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-800 dark:text-white font-heading leading-tight group-hover/item:text-primary transition-colors">{service.title}</div>
                              <p className="text-[10px] text-slate-450 dark:text-slate-500 truncate max-w-[200px] mt-0.5 font-sans">{service.shortDesc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              if (link.name === 'Specialities') {
                return (
                  <div key={link.path} className="relative group py-2">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `font-sans text-xs xl:text-sm font-medium transition-colors duration-200 hover:text-primary flex items-center gap-1 ${
                          isActive
                            ? 'text-primary border-b-2 border-primary pb-1'
                            : 'text-slate-700'
                        }`
                      }
                    >
                      <span>Specialities</span>
                      <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                    </NavLink>

                    {/* Dropdown Menu - opens on hover */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-[9999]">
                      <div className="w-[580px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl shadow-slate-100/60 dark:shadow-none p-5 grid grid-cols-2 gap-2">
                        {siteData.specialities.map((spec) => (
                          <Link
                            key={spec.id}
                            to={`/specialities?select=${spec.id}`}
                            className="flex items-start space-x-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors text-left group/item"
                          >
                            <div className="bg-secondary/5 text-secondary p-2 rounded-xl group-hover/item:bg-secondary group-hover/item:text-white transition-colors duration-200 mt-0.5">
                              <span className="w-1.5 h-1.5 bg-current rounded-full block"></span>
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-800 dark:text-white font-heading leading-tight group-hover/item:text-secondary transition-colors">{spec.name}</div>
                              <p className="text-[10px] text-slate-450 dark:text-slate-500 truncate max-w-[210px] mt-0.5 font-sans">{spec.challenges}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-sans text-xs xl:text-sm font-medium transition-colors duration-200 hover:text-primary ${
                      isActive
                        ? 'text-primary border-b-2 border-primary pb-1'
                        : 'text-slate-700'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Link
              to="/book-consultation"
              className="bg-gradient-brand text-white px-4 py-2 xl:px-5 xl:py-2.5 rounded-full text-xs xl:text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link
              to="/book-consultation"
              className="bg-gradient-brand text-white px-3 py-1.5 rounded-full text-xs font-semibold"
            >
              Consult
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 focus:outline-none p-2 rounded-lg bg-slate-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200/50 bg-white/98 backdrop-blur-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-slate-200 flex flex-col space-y-3 px-4">
                <Link
                  to="/book-consultation"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-gradient-brand text-white py-3 rounded-xl font-bold shadow-md shadow-primary/20"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
