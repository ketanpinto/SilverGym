"use client";

import { motion } from "framer-motion";

export default function PricingCTA() {
  return (
    <section id="pricing" className="py-24 bg-[#111111] relative border-t border-b border-white/5">
      <div className="absolute inset-0 bg-[var(--neon-yellow)]/5 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to <span className="text-[var(--neon-yellow)]">Transform?</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 font-sans max-w-2xl mx-auto text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We offer flexible pricing options and exclusive packages tailored to your goals. Get in touch with our team to discover the perfect membership plan for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-block px-10 py-5 bg-[var(--neon-yellow)] text-black font-heading font-bold uppercase tracking-widest text-xl hover:shadow-[var(--neon-glow)] transition-shadow duration-300 transform hover:-translate-y-1"
          >
            Inquire for Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
