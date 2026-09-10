"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { NavItem } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { useAudio, SingleNoteIcon, SlashedNoteIcon } from "./AudioManager";
import { useTheme } from "./ThemeContext";
import clsx from "clsx";

export function MobileNavigation({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const { playClick, sfxMuted, toggleSfx, bgmMuted, toggleBgm } = useAudio();
  const { isDarkHour, toggleDarkHour } = useTheme();

  const handleNavClick = (path: string, id: string) => {
    playClick();
    setIsOpen(false);
    setTimeout(() => {
      if (pathname === "/") {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(path);
      }
    }, 200);
  };

  return (
    <>
      <button
        onClick={() => {
          playClick();
          setIsOpen(!isOpen);
        }}
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-p3-blue border-2 border-p3-cyan text-p3-white shadow-[0_0_15px_rgba(0,184,250,0.5)]"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="md:hidden fixed inset-0 z-40 bg-p3-blue-dark/80 backdrop-blur-md flex flex-col justify-start pt-16 pb-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {/* Theme Toggle */}
              <button
                onClick={() => {
                  playClick();
                  toggleDarkHour();
                }}
                className={`p-4 font-black tracking-widest uppercase clip-slanted flex justify-between items-center ${
                  isDarkHour 
                    ? "bg-p3-black text-p3-yellow border border-p3-yellow shadow-[0_0_10px_#ff003c]" 
                    : "bg-p3-black text-p3-cyan border border-p3-cyan shadow-[0_0_10px_#00b8fa]"
                }`}
              >
                <span>{isDarkHour ? "DARK HOUR" : "STANDARD MODE"}</span>
              </button>

              {/* Audio Controls */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    playClick();
                    toggleBgm();
                  }}
                  className="flex-1 p-4 bg-p3-blue border border-p3-cyan/50 text-p3-white font-bold tracking-widest uppercase clip-slanted flex justify-center items-center gap-2"
                >
                  {bgmMuted ? <SlashedNoteIcon className="opacity-50" size={20} /> : <SingleNoteIcon size={20} />}
                  BGM
                </button>
                <button
                  onClick={() => {
                    playClick();
                    toggleSfx();
                  }}
                  className="flex-1 p-4 bg-p3-blue border border-p3-cyan/50 text-p3-white font-bold tracking-widest uppercase clip-slanted flex justify-center items-center gap-2"
                >
                  {sfxMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  SFX
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 mt-4">
                {navItems.map((item, index) => {
                  const isActive = pathname.startsWith("/projects") && item.id === "projects" 
                    ? true 
                    : pathname === "/" && item.id === "home";

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavClick(`/#${item.id}`, item.id)}
                      className={clsx(
                        "p-5 text-2xl font-black tracking-widest clip-slanted uppercase overflow-hidden relative",
                        isActive 
                          ? "bg-p3-cyan text-p3-black" 
                          : "bg-p3-blue/80 text-p3-white border-l-8 border-p3-cyan/50"
                      )}
                    >
                      <div 
                        className={clsx(
                          "absolute inset-0 z-0 pointer-events-none opacity-40",
                          !isActive && "hidden"
                        )}
                        style={{
                          backgroundImage: "radial-gradient(circle, currentColor 1.5px, transparent 1.5px)",
                          backgroundSize: "6px 6px",
                          maskImage: "radial-gradient(ellipse at top left, black 0%, transparent 70%)",
                          WebkitMaskImage: "radial-gradient(ellipse at top left, black 0%, transparent 70%)"
                        }}
                      />
                      <span className="relative z-10">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
