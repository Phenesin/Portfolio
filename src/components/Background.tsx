"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingParticles = () => {
  const [particles, setParticles] = useState<{id: number, size: number, left: string, duration: number, delay: number, drift: number}[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newParticles = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        size: Math.random() * 15 + 5,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * -20,
        drift: Math.random() * 40 - 20,
      }));
      setParticles(newParticles);
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-p3-white mix-blend-overlay"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: "-10%",
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: [0, p.drift, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export function Background() {
  const bgText = "PYTHON / PYTORCH / C++ / FASTAPI / SQL / OPENGL / SCIKIT-LEARN / ";
  const textArray = new Array(10).fill(bgText);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-p3-blue-dark flex flex-col justify-between py-10 pointer-events-none">
      
      {/* Water Depth Gradients (Performant) */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-3/4 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-p3-blue/60 via-transparent to-transparent opacity-80"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-p3-cyan/10 via-transparent to-transparent"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Scrolling Text Lines */}
      <div className="relative w-[200vw] -left-[50vw] rotate-[5deg] origin-center opacity-100 mt-32 overflow-hidden mix-blend-overlay">
        <motion.div 
          className="flex whitespace-nowrap text-8xl md:text-[8rem] font-black tracking-normal text-p3-white uppercase w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        >
          {textArray.map((text, i) => (
             <span key={`orig1-${i}`} className="mr-8">{text}</span>
          ))}
          {textArray.map((text, i) => (
             <span key={`dup1-${i}`} className="mr-8">{text}</span>
          ))}
        </motion.div>
      </div>

      <div className="relative w-[200vw] -left-[50vw] -rotate-[15deg] origin-center opacity-40 top-1/2 overflow-hidden mix-blend-overlay">
        <motion.div 
          className="flex whitespace-nowrap text-8xl md:text-[8rem] font-black tracking-normal text-p3-white uppercase w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
        >
          {textArray.map((text, i) => (
             <span key={`orig2-${i}`} className="mr-8">{text}</span>
          ))}
          {textArray.map((text, i) => (
             <span key={`dup2-${i}`} className="mr-8">{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
    </div>
  );
}
