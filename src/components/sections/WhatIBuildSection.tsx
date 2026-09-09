import { whatIBuild } from "@/data/skills";
import { AnimatedText } from "@/components/AnimatedText";

export default function WhatIBuild() {
  return (
    <div className="h-full flex flex-col pt-12 pb-24">
      <AnimatedText 
        text="WHAT I BUILD"
        className="text-4xl md:text-6xl font-black text-p3-white mb-4 border-b-4 border-p3-cyan pb-2 inline-block"
      />
      
      <p className="text-xl font-bold text-p3-yellow uppercase tracking-widest mb-12">
        Selected work and technical exploration
      </p>
      
      <div className="grid gap-8">
        {whatIBuild.map((item, index) => (
          <div 
            key={item.id} 
            className="flex flex-col md:flex-row gap-6 items-start bg-p3-blue-dark/60 border border-p3-cyan/20 p-8 clip-slanted relative overflow-hidden group hover:border-p3-yellow transition-colors duration-300"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,rgba(0,229,255,1)_1px,transparent_0)] bg-[size:20px_20px] pointer-events-none group-hover:opacity-20 transition-opacity" />
            
            <div className="text-5xl font-black font-mono text-p3-cyan/20 group-hover:text-p3-yellow/30 transition-colors duration-300">
              {item.id}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-p3-white uppercase tracking-wider mb-4">
                {item.title}
              </h3>
              <p className="text-lg text-p3-white/80 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
