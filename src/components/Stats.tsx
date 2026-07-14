import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function Counter({ end, suffix = "", title }: { end: number, suffix?: string, title: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function (easeOutQuad)
        const easeProgress = progress * (2 - progress);
        
        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center group bg-[#1a1a1a]/50 p-6 rounded-3xl border border-white/5 card-hover transition-all">
      <div className="text-4xl md:text-5xl font-serif text-[#d4af37] mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm uppercase tracking-widest text-gray-400 font-medium group-hover:text-white transition-colors">
        {title}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-charcoal-950 border-y border-white/5 relative overflow-hidden">
      {/* Background visual */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Counter end={109} suffix="+" title="Five-Star Reviews" />
          <Counter end={1000} suffix="+" title="Happy Clients" />
          <Counter end={15} suffix="+" title="Pro Experts" />
          <Counter end={50} suffix="+" title="Premium Services" />
        </div>
      </div>
    </section>
  );
}
