import { motion } from 'motion/react';
import { BadgeCheck, Sparkles, Droplets } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-charcoal-900 border-b border-white/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-900/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-900/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-[#d4af37]/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Salon Interior" 
                className="w-full h-[600px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl shadow-2xl z-20 w-48 glass-panel hidden md:block">
              <div className="text-[#d4af37] text-4xl mb-2">✦</div>
              <h4 className="text-2xl font-serif text-white mb-1">Elite</h4>
              <p className="text-sm text-gray-400">Styling & Grooming</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="h-[1px] w-8 bg-[#d4af37]"></span>
              <span className="text-[#d4af37] uppercase tracking-widest text-[10px] font-medium">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Redefining Beauty in <br/>
              <span className="italic text-gray-300">Jogeshwari East, Mumbai</span>
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed font-light">
              Welcome to Hair Katta Unisex Salon, your ultimate destination for luxury hair care, beauty treatments, and professional grooming. Nestled in the heart of Jogeshwari East, we have built a reputation as a trusted and highly-rated salon dedicated to exceptional customer service.
            </p>
            
            <p className="text-gray-300 mb-10 leading-relaxed font-light">
              Our skilled professionals consistently deliver superior results using modern styling techniques and premium, globally-recognized products. Whether you need a transformative haircut, revitalizing hair spa, or flawless bridal makeup, we promise an indulgent experience tailored specifically to you.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#1a1a1a] rounded-xl border border-white/5">
                  <BadgeCheck border-0 className="text-[#d4af37] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Skilled Professionals</h4>
                  <p className="text-sm text-gray-400">Expert stylists and estheticians continuously trained in modern techniques.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#1a1a1a] rounded-xl border border-white/5">
                  <Sparkles className="text-[#d4af37] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Premium Products</h4>
                  <p className="text-sm text-gray-400">Exclusive use of high-end, nourishing beauty & hair care formulations.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/29/Hairdresser_scissors_and_comb_vector.svg" 
                alt="Signature Decal"
                className="h-10 opacity-20 invert"
                style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(15deg) contrast(1.2)"}}
              />
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
