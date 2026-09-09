import { profile } from "@/data/profile";
import { AnimatedText } from "@/components/AnimatedText";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ResearchSection from "@/components/sections/ResearchSection";
import WhatIBuildSection from "@/components/sections/WhatIBuildSection";
import BeyondCodeSection from "@/components/sections/BeyondCodeSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
        <div className="relative z-10">
          <AnimatedText 
            text="BUILD."
            className="text-6xl md:text-8xl font-black text-p3-white opacity-20 block"
            delay={0.1}
          />
          <AnimatedText 
            text="UNDERSTAND."
            className="text-6xl md:text-8xl font-black text-p3-white opacity-40 block ml-8"
            delay={0.3}
          />
          <AnimatedText 
            text="EXPERIMENT."
            className="text-6xl md:text-8xl font-black text-p3-cyan block ml-4"
            delay={0.5}
          />
        </div>

        <div className="mt-12 max-w-xl">
          <p className="text-xl text-p3-white bg-p3-blue-dark/50 backdrop-blur-sm p-6 border-l-4 border-p3-yellow">
            {profile.about.headline}
          </p>
        </div>
        
        {/* Abstract geometric decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 border border-p3-cyan/20 rotate-45 pointer-events-none" />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-32 h-32 border-2 border-p3-yellow/40 rotate-[25deg] pointer-events-none" />
      </section>

      <section id="about" className="min-h-screen pt-20"><AboutSection /></section>
      <section id="projects" className="min-h-screen pt-20"><ProjectsSection /></section>
      <section id="tech-stack" className="min-h-screen pt-20"><TechStackSection /></section>
      <section id="research" className="min-h-screen pt-20"><ResearchSection /></section>
      <section id="what-i-build" className="min-h-screen pt-20"><WhatIBuildSection /></section>
      <section id="beyond-code" className="min-h-screen pt-20"><BeyondCodeSection /></section>
      <section id="contact" className="min-h-screen pt-20"><ContactSection /></section>
    </div>
  );
}
