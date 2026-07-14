import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Client",
    content: "Absolutely exceptional service! I've been coming to Hair Katta for over a year now, and their attention to detail and standard of hygiene are unmatched in Jogeshwari East.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Rahul Verma",
    role: "Groom Package",
    content: "Booked them for my pre-wedding grooming. The team was extremely professional, and the ambiance felt very premium. They truly delivered a luxury experience at a great price.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Sneha Patil",
    role: "First-time Customer",
    content: "Did the keratin treatment here and I am amazed at the results. The stylist gave me a proper consultation first and completely transformed my frizzy hair.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <span className="h-[1px] w-8 bg-[#d4af37]"></span>
            <span className="text-[#d4af37] uppercase tracking-widest text-[11px] font-bold">Client Reviews</span>
            <span className="h-[1px] w-8 bg-[#d4af37]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Words of Appreciation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-panel p-8 rounded-3xl relative card-hover"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              <div className="flex text-[#d4af37] mb-6">
                 {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-8 relative z-10 italic">
                "{t.content}"
              </p>
              <div className="flex items-center border-t border-white/10 pt-6 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="text-white font-medium">{t.name}</h4>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
