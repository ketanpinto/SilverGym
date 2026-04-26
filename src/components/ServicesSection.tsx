"use client";

import { motion } from "framer-motion";
import { Activity, Dumbbell, Flame, Users, Sparkles, Lock } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Strength Training",
    description: "Premium free weights and resistance machines to build raw power and muscle mass.",
    icon: <Dumbbell size={48} strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: "Cardio Zone",
    description: "High-tech treadmills, rowers, and bikes equipped with performance tracking.",
    icon: <Activity size={48} strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: "Personal Training",
    description: "1-on-1 coaching customized to your specific goals and fitness level.",
    icon: <Flame size={48} strokeWidth={1.5} />,
  },
  {
    id: 4,
    title: "Group Classes",
    description: "High-energy sessions from HIIT to Yoga, led by inspiring instructors.",
    icon: <Users size={48} strokeWidth={1.5} />,
  },
  {
    id: 5,
    title: "Women-Only Sessions",
    description: "Private, empowering environment dedicated exclusively to women's fitness.",
    icon: <Sparkles size={48} strokeWidth={1.5} />,
  },
  {
    id: 6,
    title: "Personal Lockers",
    description: "Secure, premium locker rooms with complimentary amenities for your convenience.",
    icon: <Lock size={48} strokeWidth={1.5} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#111111] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-heading font-bold uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Elite <span className="text-[var(--neon-yellow)]">Facilities</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 font-sans max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to surpass your limits. Engineered for performance, designed for comfort.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-[#050505] p-8 border border-white/5 hover:border-[var(--neon-yellow)] hover:shadow-[var(--neon-glow)] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-yellow)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-gray-500 group-hover:text-[var(--neon-yellow)] transition-colors duration-300 mb-6 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading uppercase font-bold mb-3 text-white relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-400 font-sans text-sm leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
