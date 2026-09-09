"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function ParallaxShapes() {
  const [isMobile, setIsMobile] = useState(true);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Map normalized coordinates [-1, 1] to pixel offsets for different depths
  // x1/y1 = moves with cursor slightly (distant)
  const x1 = useTransform(smoothX, [-1, 1], [-40, 40]);
  const y1 = useTransform(smoothY, [-1, 1], [-40, 40]);
  
  // x2/y2 = moves against cursor heavily (close)
  const x2 = useTransform(smoothX, [-1, 1], [80, -80]);
  const y2 = useTransform(smoothY, [-1, 1], [80, -80]);
  
  // x3/y3 = moves against cursor very heavily (very close)
  const x3 = useTransform(smoothX, [-1, 1], [-120, 120]);
  const y3 = useTransform(smoothY, [-1, 1], [-120, 120]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) * 2 - 1);
      mouseY.set((e.clientY / innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null; // Disable on mobile for performance

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Small distant square */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-16 h-16 border-2 border-p3-cyan/60 rotate-12"
        style={{ x: x1, y: y1 }}
      />
      
      {/* Large close diamond */}
      <motion.div
        className="absolute bottom-[20%] left-[10%] w-64 h-64 border-[3px] border-p3-white/30 rotate-45"
        style={{ x: x2, y: y2 }}
      />
      
      {/* Floating line */}
      <motion.div
        className="absolute top-[40%] left-[60%] w-[3px] h-40 bg-p3-yellow/80 rotate-[30deg] shadow-[0_0_10px_var(--theme-yellow)]"
        style={{ x: x3, y: y3 }}
      />

      {/* Abstract crosshair */}
      <motion.div
        className="absolute top-[60%] right-[30%] w-24 h-24 border-2 border-p3-blue/80 rounded-full flex items-center justify-center"
        style={{ x: x1, y: y1 }}
      >
        <div className="w-full h-px bg-p3-blue/80 absolute" />
        <div className="h-full w-px bg-p3-blue/80 absolute" />
      </motion.div>
      
      {/* Plus signs scattered */}
      <motion.div
        className="absolute bottom-[40%] right-[10%] text-p3-cyan/60 text-4xl font-black"
        style={{ x: x2, y: y2 }}
      >
        +
      </motion.div>
      <motion.div
        className="absolute top-[30%] left-[30%] text-p3-yellow/60 text-3xl font-black"
        style={{ x: x1, y: y1 }}
      >
        +
      </motion.div>
    </div>
  );
}
