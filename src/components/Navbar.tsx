"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Trainers", href: "#trainers" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <Image 
            src="/silvergym-logo.png" 
            alt="Silver Gym Abu Dhabi" 
            width={80} 
            height={80} 
            className="w-20 h-20 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(223,255,0,0.3)]" 
          />
          <span className="text-3xl font-heading font-bold uppercase tracking-wider hidden sm:block">
            Silver <span className="text-[var(--neon-yellow)] drop-shadow-[0_0_8px_rgba(223,255,0,0.5)]">Gym</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest font-medium hover:text-[var(--neon-yellow)] transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--neon-yellow)] transition-all duration-300 group-hover:w-full drop-shadow-[0_0_5px_rgba(223,255,0,0.8)]"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border-2 border-[var(--neon-yellow)] text-[var(--neon-yellow)] font-heading uppercase tracking-widest hover:bg-[var(--neon-yellow)] hover:text-black transition-all duration-300 hover:shadow-[var(--neon-glow)]"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white hover:text-[var(--neon-yellow)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#050505] border-b border-gray-800 flex flex-col items-center py-6 space-y-6 md:hidden glass-panel"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg uppercase tracking-widest hover:text-[var(--neon-yellow)] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 border-2 border-[var(--neon-yellow)] text-[var(--neon-yellow)] font-heading uppercase tracking-widest hover:bg-[var(--neon-yellow)] hover:text-black transition-all"
            >
              Join Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
