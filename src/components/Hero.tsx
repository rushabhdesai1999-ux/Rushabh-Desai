import { motion } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop")',
        }}
      >
        {/* Luxury Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-900/80 to-charcoal-950/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="h-[1px] w-8 bg-[#d4af37]"></span>
            <span className="text-[#d4af37] uppercase tracking-[0.2em] text-sm font-medium">Welcome to Excellence</span>
            <span className="h-[1px] w-8 bg-[#d4af37]"></span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
            Transform Your Look With <br className="hidden md:block"/>
            <span className="gold-text">
              Premium Salon Care
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Hair Katta Unisex Salon offers expert hair styling, beauty treatments, 
            grooming services, and personalized care for men and women.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#booking"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 gold-gradient hover:opacity-90 text-black transition-all duration-300 font-bold rounded-2xl group uppercase tracking-widest"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Book Appointment
            </a>
            <a 
              href="tel:+919820697986"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300 font-bold rounded-2xl group uppercase tracking-widest"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Call Now
            </a>
          </div>
          
          <div className="mt-16 sm:mt-24 flex items-center justify-center space-x-6">
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
                 "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
              ].map((src, i) => (
                <img key={i} src={src} alt={`Client ${i}`} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-charcoal-950 object-cover" />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-[#d4af37] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-300 mt-1"><span className="font-semibold text-white">109+</span> Five-Star Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-[#d4af37] transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
