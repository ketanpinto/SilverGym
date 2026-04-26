"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  { type: "video", src: "/videobg.mp4" },
  { type: "image", src: "/image2.jpg" },
  { type: "image", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" },
  { type: "video", src: "/video4.mp4" },
];

export default function GallerySection() {
  return (
    <section className="py-2 bg-[#050505]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {galleryItems.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden group cursor-pointer"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            ) : (
              <Image 
                src={item.src}
                alt={`Gallery Image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            )}
            <div className="absolute inset-0 bg-[var(--neon-yellow)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
