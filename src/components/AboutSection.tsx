"use client";

import { motion } from "framer-motion";
import { Dumbbell, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: <Dumbbell className="w-10 h-10 text-[var(--neon-yellow)]" />,
    title: "Premium Equipment",
    description: "State-of-the-art machinery and free weights tailored for peak performance.",
  },
  {
    icon: <Users className="w-10 h-10 text-[var(--neon-yellow)]" />,
    title: "Expert Trainers",
    description: "Certified professionals dedicated to guiding you to your ultimate goals.",
  },
  {
    icon: <Trophy className="w-10 h-10 text-[var(--neon-yellow)]" />,
    title: "Elite Community",
    description: "Surround yourself with a community of driven individuals pushing limits.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--neon-yellow)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-6">
              More Than A Gym. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-yellow)] to-white">
                It's A Lifestyle.
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-sans">
              At Silver Gym Abu Dhabi, we don't just build bodies; we forge mindsets. 
              Our high-end facility is engineered for those who demand excellence from themselves and their environment. 
              Experience the fusion of luxury and raw power.
            </p>
            <div className="w-24 h-1 bg-[var(--neon-yellow)] drop-shadow-[0_0_8px_rgba(223,255,0,0.5)]"></div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 grid sm:grid-cols-2 lg:grid-cols-1 gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                className="flex items-start gap-6 glass-panel p-6 border-l-4 border-l-transparent hover:border-l-[var(--neon-yellow)] transition-all duration-300 group cursor-default"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[var(--neon-yellow)]/10 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-heading uppercase tracking-wide mb-2 text-white group-hover:text-[var(--neon-yellow)] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 font-sans text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
