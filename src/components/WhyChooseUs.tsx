import { motion } from 'motion/react';
import { Star, ShieldCheck, HeartPulse, Award, Gem, Smile } from 'lucide-react';

const reasons = [
  {
    icon: Star,
    title: "109+ Five-Star Reviews",
    description: "Highly rated on Google by our satisfied clientele for consistently exceeding expectations."
  },
  {
    icon: Award,
    title: "Experienced Stylists",
    description: "Our artists bring years of professional experience and creative vision to every appointment."
  },
  {
    icon: HeartPulse,
    title: "Hygienic Environment",
    description: "Uncompromising cleanliness protocols, sanitized tools, and a pristine salon atmosphere."
  },
  {
    icon: Gem,
    title: "Premium Beauty Products",
    description: "We partner exclusively with top-tier international brands to ensure optimal results."
  },
  {
    icon: Smile,
    title: "Personalized Consultation",
    description: "Every service begins with a thorough consultation to match your unique needs and desires."
  },
  {
    icon: ShieldCheck,
    title: "Affordable Luxury",
    description: "Experience premium salon indulgence without the exorbitant price tag."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="h-[1px] w-8 bg-[#d4af37]"></span>
              <span className="text-[#d4af37] uppercase tracking-widest text-[11px] font-bold">The Hair Katta Difference</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Why Choose Us?</h2>
            <p className="text-gray-400 font-light text-lg mb-8">
              We go beyond basic salon services to offer an elevated experience where artistry, 
              hygiene, and customer satisfaction are at the core of everything we do.
            </p>

            <ul className="space-y-6">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-start group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37]/10 transition-colors">
                      <reason.icon className="w-5 h-5 text-[#d4af37]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white mb-1 group-hover:text-[#f2d06b] transition-colors">{reason.title}</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{reason.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-3xl mt-12"
                alt="Styling" 
              />
              <img 
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-3xl -mt-12"
                alt="Product" 
              />
            </div>
            {/* Center abstract circle overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#050505] rounded-full border border-[#d4af37]/20 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10 glass-panel">
               <span className="text-5xl font-serif text-[#d4af37] mb-1">5.0</span>
               <div className="flex text-[#d4af37] mb-2">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
               </div>
               <span className="text-xs uppercase tracking-widest text-gray-300">Google Rating</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
