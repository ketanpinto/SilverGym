import { Link } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-3 group mb-6">
              <Image 
                src="/silvergym-logo.png" 
                alt="Silver Gym Abu Dhabi" 
                width={112} 
                height={112} 
                className="w-28 h-28 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(223,255,0,0.3)]" 
              />
              <span className="text-3xl font-heading font-bold uppercase tracking-wider block">
                Silver <span className="text-[var(--neon-yellow)] drop-shadow-[0_0_8px_rgba(223,255,0,0.5)]">Gym</span>
              </span>
            </a>
            <p className="text-gray-400 font-sans text-sm mb-6 max-w-xs">
              Elevate your fitness journey at Abu Dhabi's premier strength and conditioning facility.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/silvergymabudhabi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--neon-yellow)] hover:text-black transition-colors duration-300">
                <Link size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--neon-yellow)] hover:text-black transition-colors duration-300">
                <Link size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading uppercase font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 font-sans text-sm text-gray-400">
              <li><a href="#home" className="hover:text-[var(--neon-yellow)] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[var(--neon-yellow)] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[var(--neon-yellow)] transition-colors">Facilities</a></li>
              <li><a href="#pricing" className="hover:text-[var(--neon-yellow)] transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading uppercase font-bold text-white mb-6">Support</h4>
            <ul className="space-y-3 font-sans text-sm text-gray-400">
              <li><a href="#" className="hover:text-[var(--neon-yellow)] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[var(--neon-yellow)] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[var(--neon-yellow)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[var(--neon-yellow)] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading uppercase font-bold text-white mb-6">Newsletter</h4>
            <p className="text-gray-400 font-sans text-sm mb-4">
              Subscribe for fitness tips and exclusive offers.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-[#111111] border border-white/10 px-4 py-3 text-sm font-sans text-white focus:outline-none focus:border-[var(--neon-yellow)] transition-colors"
              />
              <button 
                type="submit" 
                className="bg-[var(--neon-yellow)] text-black font-heading uppercase font-bold tracking-wider py-3 hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-gray-500">
          <p>&copy; {new Date().getFullYear()} Silver Gym Abu Dhabi. All rights reserved.</p>
          <p>Designed for Performance.</p>
        </div>
      </div>
    </footer>
  );
}
