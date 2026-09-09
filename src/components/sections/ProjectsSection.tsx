"use client";

import { AnimatedText } from "@/components/AnimatedText";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAudio } from "@/components/AudioManager";
import { Project } from "@/types";

export default function Projects({ projects }: { projects: Project[] }) {
  const { playHover, playClick } = useAudio();

  return (
    <div className="h-full flex flex-col pt-12">
      <AnimatedText 
        text="PROJECTS"
        className="text-fluid-h1 font-black text-p3-white mb-12 border-b-4 border-p3-cyan pb-2 inline-block"
      />
      
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <Link href={`/projects/${project.id}`} key={project.id} onClick={playClick}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              onHoverStart={playHover}
              className="group relative bg-p3-blue-dark/50 border border-p3-cyan/20 p-6 hover:bg-p3-cyan transition-colors duration-300 clip-slanted overflow-hidden cursor-pointer"
            >
              <div className="flex items-baseline gap-4 relative z-10">
                <span className="text-3xl font-mono font-bold text-p3-yellow group-hover:text-p3-black">
                  {project.number}
                </span>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-black text-p3-white group-hover:text-p3-black uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <div className="text-sm font-mono text-p3-cyan group-hover:text-p3-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    └─ {project.technologies.slice(0, 2).join(" / ")} / {project.category}
                  </div>
                </div>
              </div>
              
              {/* Background abstract shape on hover */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-p3-black/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500 clip-diagonal skew-x-12" />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
