"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.matchMedia("(hover: hover)").matches) {
      const updateMousePosition = (e: MouseEvent) => {
        if (!isVisible) setIsVisible(true);
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      };

      const handleMouseOver = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('a, button, [role="button"]')) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      const handleClick = (e: MouseEvent) => {
        const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
        setRipples((prev) => [...prev, newRipple]);
      };

      window.addEventListener("mousemove", updateMousePosition);
      window.addEventListener("mouseover", handleMouseOver);
      window.addEventListener("mousedown", handleClick);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("mouseover", handleMouseOver);
        window.removeEventListener("mousedown", handleClick);
      };
    }
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed w-12 h-12 border-[3px] border-p3-yellow pointer-events-none z-[90]"
          style={{ 
            top: ripple.y - 24, 
            left: ripple.x - 24,
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" // Diamond shape ripple
          }}
          initial={{ scale: 0.2, opacity: 1, rotate: 0 }}
          animate={{ scale: 3, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onAnimationComplete={() => {
            setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
          }}
        />
      ))}

      {/* Main Cursor Reticle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[100] text-p3-cyan mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
          rotate: isHovering ? 45 : 0,
        }}
      >
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
          {/* Abstract angular brackets */}
          <path d="M 10 2 L 2 10" />
          <path d="M 30 2 L 38 10" />
          <path d="M 10 38 L 2 30" />
          <path d="M 30 38 L 38 30" />
          {/* Inner diamond */}
          <rect x="14" y="14" width="12" height="12" transform="rotate(45 20 20)" />
        </svg>
      </motion.div>

      {/* Direct Mouse Point */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-p3-yellow pointer-events-none z-[100]"
        style={{ 
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
    </>
  );
}
