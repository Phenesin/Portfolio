"use client";

import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { isDarkHour, toggleDarkHour } = useTheme();

  return (
    <button
      onClick={toggleDarkHour}
      className={`fixed bottom-20 right-6 z-50 p-3 rounded-full overflow-hidden transition-colors duration-500 flex items-center gap-3 font-mono font-bold tracking-widest text-xs uppercase ${
        isDarkHour 
          ? "bg-p3-black border border-p3-yellow text-p3-yellow shadow-[0_0_15px_#ff003c]" 
          : "bg-p3-black text-p3-cyan border border-p3-cyan shadow-[0_0_10px_#00b8fa]"
      }`}
    >
      <motion.div
        animate={{ rotate: isDarkHour ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-4 h-4 rounded-full border-2 border-current"
      >
        {/* Simple moon/clock hands depending on theme */}
        <motion.div 
          className="absolute bg-current"
          style={{ width: 2, height: '50%', top: '10%', left: 'calc(50% - 1px)', transformOrigin: 'bottom center' }}
          animate={{ rotate: isDarkHour ? 12 : 360 }}
          transition={isDarkHour ? { duration: 0.1 } : { duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      {isDarkHour ? "DARK HOUR" : "STANDARD"}
    </button>
  );
}
