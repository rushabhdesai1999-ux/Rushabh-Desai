import { motion } from 'motion/react';
import { CalendarDays, Clock, User, Phone, MapPin } from 'lucide-react';

export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-charcoal-900 border-t border-white/5 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-[0.03] z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="h-[1px] w-8 bg-[#d4af37]"></span>
              <span className="text-[#d4af37] uppercase tracking-widest text-[11px] font-bold">Reserve Your Time</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Book an Appointment</h2>
            <p className="text-gray-400 font-light mb-10 max-w-md leading-relaxed">
              Secure your spot with our expert stylists. Fill out the form, and our concierge will contact you shortly to confirm your booking.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mr-4 border border-white/5 flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="pt-1">
                  <h4 className="text-white text-[10px] uppercase tracking-widest mb-1">Call Us Directly</h4>
                  <a href="tel:+919820697986" className="text-gray-400 hover:text-[#d4af37] transition-colors font-serif text-lg">+91 98206 97986</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mr-4 border border-white/5 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="pt-1">
                  <h4 className="text-white text-[10px] uppercase tracking-widest mb-1">Salon Location</h4>
                  <p className="text-gray-400 max-w-sm text-sm">
                    Shashi Niwas, Majas Road, Opp. Paras Nagar, Thakur Nagar, Gupha Tekdi, Jogeshwari East, Mumbai 400060
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mr-4 border border-white/5 flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="pt-1">
                  <h4 className="text-white text-[10px] uppercase tracking-widest mb-1">Working Hours</h4>
                  <p className="text-gray-400 text-sm">Open Everyday: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-[#1a1a1a]/50 border border-white/10 rounded-xl py-3 px-4 text-[10px] text-white focus:outline-none focus:border-[#d4af37] transition-colors pl-10"
                      />
                      <User className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Phone Number</label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        placeholder="+91"
                        className="w-full bg-[#1a1a1a]/50 border border-white/10 rounded-xl py-3 px-4 text-[10px] text-white focus:outline-none focus:border-[#d4af37] transition-colors pl-10"
                      />
                      <Phone className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Select Service</label>
                    <select className="w-full bg-[#1a1a1a]/50 border border-white/10 rounded-xl py-3 px-4 text-[10px] text-white/50 focus:outline-none focus:border-[#d4af37] transition-colors appearance-none">
                      <option>Hair Styling & Cut</option>
                      <option>Hair Color & Highlights</option>
                      <option>Keratin Treatment</option>
                      <option>Bridal Makeup</option>
                      <option>Facial & Skin Care</option>
                      <option>Grooming Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Preferred Date</label>
                    <div className="relative">
                      <input 
                        type="date"
                        className="w-full bg-[#1a1a1a]/50 border border-white/10 rounded-xl py-3 px-4 text-[10px] text-white/50 focus:outline-none focus:border-[#d4af37] transition-colors pl-10 [&::-webkit-calendar-picker-indicator]:invert"
                      />
                      <CalendarDays className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Any Special Requests?</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-[#1a1a1a]/50 border border-white/10 rounded-xl py-3 px-4 text-[10px] text-white focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full gold-gradient hover:opacity-90 text-black font-bold uppercase tracking-widest text-[11px] py-4 rounded-xl transition-all duration-300"
                >
                  Confirm Reservation Request
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
