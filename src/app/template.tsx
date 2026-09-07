"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 bg-p3-blue origin-right pointer-events-none flex items-center justify-center"
      >
         <div className="text-p3-yellow font-mono text-4xl font-bold tracking-[1em] opacity-20 rotate-90">LOADING...</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="h-full"
      >
        {children}
      </motion.div>
    </>
  );
}
