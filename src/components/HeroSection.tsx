"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like feel or slight zoom */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <video
          src="/videobg.mp4"
          poster="/hero-bg.png"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tight leading-none mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform Your Body at <br />
          <span className="text-[var(--neon-yellow)] drop-shadow-[0_0_15px_rgba(223,255,0,0.6)]">
            Silver Gym Abu Dhabi
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl text-gray-300 font-sans max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Unleash your ultimate potential with premium equipment, elite trainers, and an atmosphere built for champions.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-[var(--neon-yellow)] text-black font-heading font-bold uppercase tracking-widest text-lg hover:shadow-[var(--neon-glow)] transition-shadow duration-300 transform hover:-translate-y-1"
          >
            Join Now
          </a>
          <a
            href="#services"
            className="px-8 py-4 border-2 border-white/20 glass-panel text-white font-heading font-bold uppercase tracking-widest text-lg hover:border-[var(--neon-yellow)] hover:text-[var(--neon-yellow)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Facility
          </a>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-gray-400">Scroll</span>
        <motion.div 
          className="w-[2px] h-12 bg-white/20 relative overflow-hidden"
        >
          <motion.div 
            className="w-full h-1/2 bg-[var(--neon-yellow)] absolute top-0"
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
