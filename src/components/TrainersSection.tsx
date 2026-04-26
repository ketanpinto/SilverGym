"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "lucide-react";

const trainers = [
  {
    name: "TRAINER 1",
    specialty: "Head Strength Coach",
    description: "Former powerlifting champion specializing in raw strength and biomechanics.",
    image: "/placeholder-people.png",
    social: { insta: "#" }
  },
  {
    name: "TRAINER 2",
    specialty: "HIIT & Conditioning",
    description: "Expert in high-intensity interval training and cardiovascular endurance.",
    image: "/placeholder-people.png",
    social: { insta: "#" }
  },
  {
    name: "TRAINER 3",
    specialty: "Mobility & Recovery",
    description: "Focuses on athletic longevity, flexibility, and injury prevention.",
    image: "/placeholder-people.png",
    social: { insta: "#" }
  },
];

export default function TrainersSection() {
  return (
    <section id="trainers" className="py-24 bg-[#111111] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              className="text-4xl md:text-6xl font-heading font-bold uppercase mb-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Meet The <span className="text-[var(--neon-yellow)]">Experts</span>
            </motion.h2>
            <motion.p 
              className="text-gray-400 font-sans text-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our trainers are industry leaders, dedicated to unlocking your maximum potential through proven methodologies.
            </motion.p>
          </div>
          <motion.a 
            href="#contact"
            className="hidden md:inline-block border-b-2 border-[var(--neon-yellow)] text-[var(--neon-yellow)] font-heading uppercase tracking-widest pb-1 hover:text-white hover:border-white transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            View All Trainers
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden bg-[#050505] aspect-[3/4]"
            >
              <Image 
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-[var(--neon-yellow)] mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                <h3 className="text-3xl font-heading uppercase font-bold text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="text-[var(--neon-yellow)] font-sans text-sm font-semibold mb-4 tracking-wide">
                  {trainer.specialty}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <p className="text-gray-300 font-sans text-sm mb-6 line-clamp-3">
                    {trainer.description}
                  </p>
                  <div className="flex gap-4">
                    <a href={trainer.social.insta} className="text-white hover:text-[var(--neon-yellow)] transition-colors">
                      <Link size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
