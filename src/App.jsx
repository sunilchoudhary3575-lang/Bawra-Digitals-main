import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Specialities from './pages/Specialities';
import CaseStudies from './pages/CaseStudies';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import BookConsultation from './pages/BookConsultation';

// Scroll to top helper component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable body scroll during preloader active phase
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              y: -80,
              transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }
            }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0D1B3E]"
          >
            <div className="relative flex flex-col items-center">
              {/* Logo with smooth pulse animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [0.9, 1.05, 1],
                  opacity: 1
                }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeOut",
                  times: [0, 0.6, 1],
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="mb-6"
              >
                <img 
                  src="/logo.png" 
                  alt="Bawra Digitals Logo" 
                  className="h-16 sm:h-20 w-auto object-contain" 
                />
              </motion.div>
              
              {/* Sleek horizontal loading progress bar */}
              <div className="w-40 h-1 bg-white/10 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ 
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity 
                  }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-primary-light to-secondary rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Root Layout wrapper */}
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        
        {/* Sticky Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/specialities" element={<Specialities />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Premium Footer */}
        <Footer />

        {/* Floating WhatsApp Quick Action */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
