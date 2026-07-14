import { motion } from 'motion/react';

const images = [
  { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop", class: "col-span-2 row-span-2" }, // Large portrait style
  { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop", class: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop", class: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=800&auto=format&fit=crop", class: "col-span-2 row-span-1 text-center" }, // Wide
  { src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800&auto=format&fit=crop", class: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop", class: "col-span-1 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <span className="h-[1px] w-8 bg-[#d4af37]"></span>
            <span className="text-[#d4af37] uppercase tracking-widest text-[11px] font-bold">Portfolio</span>
            <span className="h-[1px] w-8 bg-[#d4af37]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Masterpieces</h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            A glimpse into the stunning transformations and the luxurious environment at Hair Katta Unisex Salon.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${img.class} relative overflow-hidden rounded-3xl group cursor-pointer border border-white/5`}
            >
              <div className="absolute inset-0 bg-charcoal-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-charcoal-950/80 border border-[#d4af37]/50 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-5 h-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
