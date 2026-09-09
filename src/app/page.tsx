import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills, whatIBuild } from "@/data/skills";
import { research } from "@/data/research";
import { activities } from "@/data/activities";
import { AnimatedText } from "@/components/AnimatedText";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ResearchSection from "@/components/sections/ResearchSection";
import WhatIBuildSection from "@/components/sections/WhatIBuildSection";
import BeyondCodeSection from "@/components/sections/BeyondCodeSection";
import ContactSection from "@/components/sections/ContactSection";
import { SectionReveal } from "@/components/SectionReveal";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* Home Section */}
      <section id="home" className="min-h-[100dvh] flex flex-col justify-center relative pt-20">
        <div className="relative z-10 break-words max-w-full">
          <AnimatedText 
            text="BUILD."
            className="text-fluid-hero font-black text-p3-white opacity-20 block p3-glitch-hover cursor-crosshair transition-opacity hover:opacity-100"
            delay={0.1}
          />
          <AnimatedText 
            text="UNDERSTAND."
            className="text-fluid-hero font-black text-p3-white opacity-40 block ml-0 md:ml-8 p3-glitch-hover cursor-crosshair transition-opacity hover:opacity-100"
            delay={0.3}
          />
          <AnimatedText 
            text="EXPERIMENT."
            className="text-fluid-hero font-black text-p3-cyan block ml-0 md:ml-4 p3-glitch-hover cursor-crosshair transition-opacity hover:opacity-100"
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

      <SectionReveal id="about" className="min-h-[100dvh] pt-20"><AboutSection profile={profile} /></SectionReveal>
      <SectionReveal id="projects" className="min-h-[100dvh] pt-20"><ProjectsSection projects={projects} /></SectionReveal>
      <SectionReveal id="tech-stack" className="min-h-[100dvh] pt-20"><TechStackSection skills={skills} /></SectionReveal>
      <SectionReveal id="research" className="min-h-[100dvh] pt-20"><ResearchSection research={research} /></SectionReveal>
      <SectionReveal id="what-i-build" className="min-h-[100dvh] pt-20"><WhatIBuildSection whatIBuild={whatIBuild} /></SectionReveal>
      <SectionReveal id="beyond-code" className="min-h-[100dvh] pt-20"><BeyondCodeSection activities={activities} /></SectionReveal>
      <SectionReveal id="contact" className="min-h-[100dvh] pt-20"><ContactSection profile={profile} /></SectionReveal>
    </div>
  );
}
