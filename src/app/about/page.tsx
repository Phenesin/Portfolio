import { profile } from "@/data/profile";
import { AnimatedText } from "@/components/AnimatedText";

export default function About() {
  return (
    <div className="h-full flex flex-col pt-12">
      <AnimatedText 
        text="ABOUT ME"
        className="text-4xl md:text-6xl font-black text-p3-white mb-8 border-b-4 border-p3-cyan pb-2 inline-block"
      />
      
      <div className="space-y-6 max-w-2xl bg-p3-blue-dark/80 p-8 border-l-4 border-p3-yellow shadow-[8px_8px_0_0_rgba(0,229,255,0.2)]">
        <h3 className="text-2xl font-bold text-p3-cyan uppercase">
          {profile.about.headline}
        </h3>
        
        {profile.about.body.map((paragraph, index) => (
          <p key={index} className="text-lg text-p3-white/90 leading-relaxed">
            {paragraph}
          </p>
        ))}
        
        <div className="pt-6 mt-6 border-t border-p3-cyan/30">
          <h4 className="text-sm font-mono text-p3-yellow tracking-widest uppercase mb-4">
            CURRENTLY INTERESTED IN
          </h4>
          <ul className="grid grid-cols-2 gap-3">
            {profile.about.interests.map((interest, index) => (
              <li key={index} className="flex items-center text-p3-white">
                <span className="w-2 h-2 bg-p3-cyan inline-block mr-3 rotate-45" />
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
