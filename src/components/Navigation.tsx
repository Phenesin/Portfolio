"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAudio } from "./AudioManager";
import { motion } from "framer-motion";
import clsx from "clsx";

const navItems = [
  { path: "/about", label: "ABOUT" },
  { path: "/projects", label: "PROJECTS" },
  { path: "/tech-stack", label: "TECH STACK" },
  { path: "/research", label: "RESEARCH" },
  { path: "/what-i-build", label: "WHAT I BUILD" },
  { path: "/beyond-code", label: "BEYOND CODE" },
  { path: "/contact", label: "CONTACT" },
];

export function Navigation() {
  const pathname = usePathname();
  const { playHover, playClick } = useAudio();

  return (
    <nav className="flex flex-col gap-2 mt-8 z-20 relative w-64">
      {navItems.map((item, index) => {
        const isActive = pathname.startsWith(item.path);
        
        return (
          <Link href={item.path} key={item.path} onClick={playClick}>
            <motion.div 
              onHoverStart={playHover}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={clsx(
                "group relative flex items-center p-3 text-lg font-bold tracking-wider transition-colors duration-200 clip-slanted cursor-pointer",
                isActive 
                  ? "bg-p3-cyan text-p3-black" 
                  : "bg-p3-blue/40 text-p3-white hover:bg-p3-yellow hover:text-p3-black backdrop-blur-sm border-l-4 border-transparent hover:border-p3-black"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-p3-black" 
                />
              )}
              <span className="relative z-10">{isActive ? `> ${item.label}` : item.label}</span>
            </motion.div>
          </Link>
        );
      })}
    </nav>
  );
}
