import { motion } from 'motion/react';
import { Scissors, Palette, Droplets, Sparkles, CheckCircle2, UserCheck, Heart, Moon } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: "Hair Cut & Styling",
    description: "Precision cuts and modern styling tailored to complement your face shape and lifestyle."
  },
  {
    icon: Palette,
    title: "Hair Coloring",
    description: "From subtle highlights to bold transformations, using premium damage-free color products."
  },
  {
    icon: Droplets,
    title: "Hair Spa & Treatments",
    description: "Deep conditioning therapies to repair, nourish, and restore your hair's natural shine."
  },
  {
    icon: Sparkles,
    title: "Smoothening & Keratin",
    description: "Frizz-free, silky straight hair with our luxurious keratin and smoothening treatments."
  },
  {
    icon: UserCheck,
    title: "Beard Grooming",
    description: "Expert beard trimming, shaping, and conditioning for the modern gentleman."
  },
  {
    icon: Heart,
    title: "Facial Treatments",
    description: "Rejuvenating facials using high-quality products customized for your skin type."
  },
  {
    icon: Moon,
    title: "Bridal & Party Makeup",
    description: "Flawless, long-lasting makeup looks for your most important special occasions."
  },
  {
    icon: CheckCircle2,
    title: "Groom Packages",
    description: "Comprehensive grooming packages to ensure you look your absolute best."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-charcoal-950 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-900/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <span className="h-[1px] w-8 bg-[#d4af37]"></span>
              <span className="text-[#d4af37] uppercase tracking-widest text-xs font-medium">Impeccable Services</span>
              <span className="h-[1px] w-8 bg-[#d4af37]"></span>
            </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Expertise</h2>
          <p className="text-gray-400 font-light text-lg">
            Experience the pinnacle of grooming and beauty with our comprehensive range of specialized unisex salon services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl group card-hover relative overflow-hidden"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center rounded-xl mb-6 border border-white/5 transition-colors relative z-10">
                <service.icon className="w-5 h-5 text-[#d4af37] transition-colors" />
              </div>
              
              <h3 className="text-lg font-serif text-white mb-2 relative z-10">{service.title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed relative z-10">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1a1a1a] border border-white/10 hover:border-[#d4af37] text-white transition-all duration-300 font-bold uppercase tracking-widest text-xs rounded-2xl group"
          >
            View Full Service Menu
            <svg 
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
