"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show off the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ 
            clipPath: "polygon(100% 0, 100% 0, 0 100%, 0 100%)", // Diagonal slice exit
            opacity: 0,
            transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-[#0a110a] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Abstract Clock / Moon Graphic */}
          <div className="relative w-32 h-32 mb-8">
            {/* Outer ring */}
            <motion.div 
              className="absolute inset-0 border-4 border-[#ff003c] rounded-full opacity-30"
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner ticking hand */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-[2px] h-12 bg-[#14f466] origin-bottom"
              style={{ x: "-50%", y: "-100%" }}
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "backOut" }}
            />
            {/* Glitching center dot */}
            <motion.div 
              className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-[#e3f5e1]"
              style={{ x: "-50%", y: "-50%" }}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Loading Text */}
          <div className="relative flex flex-col items-center">
            <motion.h1 
              className="text-3xl md:text-5xl font-black text-[#e3f5e1] tracking-widest uppercase mb-2 font-mono"
              animate={{ opacity: [1, 0.8, 1], x: [-2, 2, -2] }}
              transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
              style={{ textShadow: "3px 0 0 #ff003c, -3px 0 0 #14f466" }}
            >
              INITIALIZING
            </motion.h1>
            <motion.p 
              className="text-[#ff003c] font-mono tracking-[0.3em] text-sm uppercase"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              System // Dark Hour
            </motion.p>
          </div>

          {/* Background scanlines/noise */}
          <div className="absolute inset-0 pointer-events-none opacity-10"
               style={{
                 backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)"
               }} 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
