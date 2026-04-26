"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="contact" className="py-24 bg-[#111111] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-8">
              Find <span className="text-[var(--neon-yellow)]">Us</span>
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-[var(--neon-yellow)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading uppercase font-bold text-white mb-1">Address</h4>
                  <p className="text-gray-400 font-sans">
                    Silver Gym<br />
                    Khalifa street<br />
                    Abu Dhabi, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-[var(--neon-yellow)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading uppercase font-bold text-white mb-1">Contact</h4>
                  <p className="text-gray-400 font-sans">+971 52 570 0388<br />silvergym.ae@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="w-6 h-6 text-[var(--neon-yellow)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading uppercase font-bold text-white mb-1">Hours</h4>
                  <p className="text-gray-400 font-sans">
                    Monday - Friday: 5:00 AM - 12:00 AM<br />
                    Weekends: 6:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/VJ5VGubVADhfThMd8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--neon-yellow)] text-black font-heading font-bold uppercase tracking-widest text-lg hover:shadow-[var(--neon-glow)] transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>

          <motion.div 
            className="lg:w-2/3 h-[400px] lg:h-auto min-h-[400px] bg-[#050505] relative border border-white/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Embed Google Maps */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9389299391605!2d54.362039100000004!3d24.490354900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6664316de577%3A0x490ae6038485e33f!2sSilver%20Gym!5e1!3m2!1sen!2sin!4v1777204759303!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            {/* Note: Map filter gives it a dark mode look. Adjust filter values to tweak the darkness. */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
