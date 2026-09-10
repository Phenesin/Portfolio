"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes";
import { useAudio } from "./AudioManager";

type ThemeContextType = {
  isDarkHour: boolean;
  toggleDarkHour: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeLogicProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useNextTheme();
  const { playClick } = useAudio();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDarkHour = theme === "dark-hour";

  const toggleDarkHour = () => {
    playClick();
    setTheme(isDarkHour ? "light" : "dark-hour");
  };

  if (!mounted) {
    return <ThemeContext.Provider value={{ isDarkHour: false, toggleDarkHour: () => {} }}>{children}</ThemeContext.Provider>;
  }

  return (
    <ThemeContext.Provider value={{ isDarkHour, toggleDarkHour }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false} themes={['light', 'dark-hour']}>
      <ThemeLogicProvider>
        {children}
      </ThemeLogicProvider>
    </NextThemesProvider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
