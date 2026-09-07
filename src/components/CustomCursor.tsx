"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.matchMedia("(hover: hover)").matches) {
      const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseOver = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('a, button, [role="button"]')) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      window.addEventListener("mousemove", updateMousePosition);
      window.addEventListener("mouseover", handleMouseOver);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("mouseover", handleMouseOver);
      };
    }
  }, []);

  if (!mousePosition.x && !mousePosition.y) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-full h-full border-2 border-p3-cyan rotate-45" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-p3-yellow pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
}
