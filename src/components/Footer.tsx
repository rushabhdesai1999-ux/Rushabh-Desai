export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-wider text-white block mb-2">
              HAIR<span className="text-[#d4af37]">KATTA</span>
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400 block mb-6">
              Unisex Salon
            </span>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Mumbais premium destination for luxury hair care, beauty, and grooming. Experience the art of transformation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Testimonials', 'Book Appointment'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link === 'Home' ? 'home' : link.split(' ')[0].toLowerCase()}`} className="text-gray-400 hover:text-[#d4af37] transition-colors text-[11px] uppercase tracking-wider">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Precision Haircuts', 'Premium Coloring', 'Keratin & Smoothening', 'Bridal Packages', 'Facial Therapies'].map((src, i) => (
                <li key={i}>
                  <a href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors text-[11px] uppercase tracking-wider">
                    {src}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">
                <span className="block text-white mb-1">Phone:</span>
                <a href="tel:+919820697986" className="hover:text-[#d4af37] transition-colors">+91 98206 97986</a>
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block text-white mb-1 mt-3">Address:</span>
                Shashi Niwas, Majas Road, Opp. Paras Nagar, Thakur Nagar, Gupha Tekdi, Jogeshwari East, Mumbai 400060
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-xs text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hair Katta Unisex Salon. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            {['Instagram', 'Facebook', 'Twitter'].map((social) => (
              <a key={social} href="#" className="text-gray-500 hover:text-[#d4af37] text-xs uppercase tracking-wider transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
