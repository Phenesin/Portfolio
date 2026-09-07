"use client";

import { motion } from "framer-motion";

export function Background() {
  const bgText = "PYTHON / PYTORCH / C++ / FASTAPI / SQL / OPENGL / SCIKIT-LEARN / ";
  const textArray = new Array(10).fill(bgText);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-p3-blue-dark flex flex-col justify-between py-10 pointer-events-none">
      


      {/* Scrolling Text Lines */}
      <div className="relative w-[200vw] -left-[50vw] rotate-[5deg] origin-center opacity-100 mt-32 overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap text-8xl md:text-[8rem] font-black tracking-normal text-p3-blue-dark uppercase [-webkit-text-stroke:2px_white] w-max"
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

      <div className="relative w-[200vw] -left-[50vw] -rotate-[15deg] origin-center opacity-60 top-1/2 overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap text-8xl md:text-[8rem] font-black tracking-normal text-p3-blue-dark uppercase [-webkit-text-stroke:2px_white] w-max"
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
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
    </div>
  );
}
