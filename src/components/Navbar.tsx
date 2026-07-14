import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal-950/90 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                HAIR<span className="text-[#d4af37]">KATTA</span>
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-gray-400">
                Unisex Salon
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Book Now */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+919820697986"
                className="flex items-center text-gray-300 hover:text-[#d4af37] transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+91 98206 97986</span>
              </a>
              <a
                href="#booking"
                className="gold-gradient hover:opacity-90 text-black px-6 py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-[#d4af37] focus:outline-none p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-charcoal-950 flex flex-col items-center justify-center pt-20 pb-6 px-4 md:hidden"
          >
            <nav className="flex flex-col items-center space-y-6 w-full">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-serif text-gray-100 hover:text-[#d4af37] transition-colors w-full text-center py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col items-center w-full mt-8 space-y-4">
                <a
                  href="tel:+919820697986"
                  className="flex items-center text-[#d4af37] justify-center w-full py-3 bg-white/5 rounded-2xl"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+91 98206 97986</span>
                </a>
                <a
                  href="#booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center gold-gradient hover:opacity-90 text-black px-6 py-4 rounded-2xl font-bold uppercase tracking-widest transition-colors"
                >
                  Book Appointment
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
