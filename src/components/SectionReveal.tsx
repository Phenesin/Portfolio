"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionReveal({ children, id, className }: { children: ReactNode, id?: string, className?: string }) {
  return (
    <motion.section 
      id={id} 
      className={className}
      initial={{ clipPath: "polygon(0 0, 0 0, -20% 100%, -20% 100%)", opacity: 0, y: 40 }}
      whileInView={{ 
        clipPath: "polygon(0 0, 120% 0, 100% 100%, -20% 100%)", 
        opacity: 1,
        y: 0
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.7, 
        ease: [0.25, 0.46, 0.45, 0.94] // snappy P3R-style cubic bezier
      }}
    >
      {children}
    </motion.section>
  );
}
