"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAudio } from "./AudioManager";
import { motion } from "framer-motion";
import clsx from "clsx";

const navItems = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT ME" },
  { id: "projects", label: "PROJECTS" },
  { id: "tech-stack", label: "TECH STACK" },
  { id: "research", label: "RESEARCH" },
  { id: "what-i-build", label: "WHAT I BUILD" },
  { id: "beyond-code", label: "BEYOND CODE" },
  { id: "contact", label: "CONTACT" },
];

export function Navigation() {
  const [activeId, setActiveId] = useState("home");
  const pathname = usePathname();
  const { playHover, playClick } = useAudio();

  useEffect(() => {
    if (pathname !== "/") return; // Only observe on home page

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-40% 0px -40% 0px" 
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    playClick();
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="flex flex-col gap-3 mt-8 z-20 relative w-64 transform origin-top-left -skew-x-12 -rotate-3 ml-8 md:ml-12">
      {navItems.map((item, index) => {
        // If we are on a project page, highlight the projects tab
        const isActive = pathname.startsWith("/projects") && item.id === "projects" 
          ? true 
          : pathname === "/" && activeId === item.id;
        
        return (
          <Link href={`/#${item.id}`} key={item.id} onClick={(e) => handleClick(e, item.id)}>
            <motion.div 
              onHoverStart={playHover}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                scale: 1.05, 
                x: 15,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              transition={{ delay: index * 0.1 }}
              className={clsx(
                "group relative flex items-center p-4 text-xl font-black tracking-widest transition-colors duration-200 clip-slanted cursor-pointer uppercase",
                isActive 
                  ? "bg-p3-cyan text-p3-black" 
                  : "bg-p3-blue/60 text-p3-white hover:bg-p3-black hover:text-p3-yellow backdrop-blur-md border-l-8 border-transparent hover:border-p3-yellow shadow-lg"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute left-0 top-0 bottom-0 w-2 bg-p3-black" 
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
