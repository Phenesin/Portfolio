"use client";

import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Clock } from "./Clock";
import { SoundToggle } from "./AudioManager";
import { ThemeToggle } from "./ThemeToggle";
import { Background } from "./Background";
import { CustomCursor } from "./CustomCursor";
import { ParallaxShapes } from "./ParallaxShapes";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Background />
      <ParallaxShapes />
      <CustomCursor />
      
      <div className="min-h-screen flex flex-col md:flex-row relative z-10 p-6 md:p-12 gap-8 md:gap-12">
        {/* Left Sidebar */}
        <aside className="w-full md:w-80 flex-shrink-0 flex flex-col md:sticky md:top-12 self-start z-20">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-p3-white mb-2 leading-none uppercase">
              SIDDHARTHA<br />MANU
            </h1>
            <h2 className="text-xl font-bold text-p3-white tracking-widest uppercase drop-shadow-md">
              Software Developer
            </h2>
            <div className="mt-4 text-xs font-mono text-p3-white bg-p3-black inline-block px-2 py-1 uppercase font-bold tracking-widest">
              Machine Learning / Backend / Systems / Experiments
            </div>
          </header>
          
          <Navigation />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 relative w-full overflow-hidden pb-32">
          <div className="max-w-4xl">
            {children}
          </div>
        </main>
      </div>

      <Clock />
      <SoundToggle />
      <ThemeToggle />

      
      {/* System Status Indicator */}
      <div className="fixed bottom-6 left-6 z-40 text-xs font-mono text-p3-cyan/70 tracking-widest uppercase">
        <div>2026</div>
        <div>System Online</div>
      </div>
    </>
  );
}
