"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "CUSTOMER 1",
    role: "Member for 2 years",
    content: "The equipment and atmosphere are unmatched in Abu Dhabi. Silver Gym pushes me to go harder every single session.",
    image: "/placeholder-people.png",
  },
  {
    name: "CUSTOMER 2",
    role: "Personal Training Client",
    content: "Joining was the best decision I've made for my fitness journey. The trainers are incredibly knowledgeable and supportive.",
    image: "/placeholder-people.png",
  },
  {
    name: "CUSTOMER 3",
    role: "Powerlifter",
    content: "If you're serious about lifting, this is the only place to be. The community here is elite.",
    image: "/placeholder-people.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#111111] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#111111] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-4">
            Proven <span className="text-[var(--neon-yellow)]">Results</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-[#111111] p-8 border border-white/5 hover:border-[var(--neon-yellow)]/50 transition-colors relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
              <div className="flex gap-4 items-center mb-6">
                <Image 
                  src={t.image} 
                  alt={t.name} 
                  width={60} 
                  height={60} 
                  className="rounded-full border-2 border-[var(--neon-yellow)]"
                />
                <div>
                  <h4 className="font-heading uppercase font-bold text-lg text-white">{t.name}</h4>
                  <p className="text-gray-500 font-sans text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 font-sans italic relative z-10">
                "{t.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
