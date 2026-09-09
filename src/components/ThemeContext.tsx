"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAudio } from "./AudioManager";

type ThemeContextType = {
  isDarkHour: boolean;
  toggleDarkHour: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkHour, setIsDarkHour] = useState(false);
  const { playHover, playClick } = useAudio(); // Or a custom ominous sound if available

  useEffect(() => {
    // Apply class to html tag for global CSS variable switching
    const html = document.documentElement;
    if (isDarkHour) {
      html.classList.add("dark-hour");
    } else {
      html.classList.remove("dark-hour");
    }
  }, [isDarkHour]);

  const toggleDarkHour = () => {
    // In a real app we'd play an ominous chime here
    playClick();
    setIsDarkHour((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkHour, toggleDarkHour }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
