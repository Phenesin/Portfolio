import { profile } from "@/data/profile";
import { AnimatedText } from "@/components/AnimatedText";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="relative z-10">
        <AnimatedText 
          text="BUILD."
          className="text-6xl md:text-8xl font-black text-p3-white opacity-20 block -ml-4"
          delay={0.1}
        />
        <AnimatedText 
          text="UNDERSTAND."
          className="text-6xl md:text-8xl font-black text-p3-white opacity-40 block ml-4"
          delay={0.3}
        />
        <AnimatedText 
          text="EXPERIMENT."
          className="text-6xl md:text-8xl font-black text-p3-cyan block -ml-2"
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
    </div>
  );
}
