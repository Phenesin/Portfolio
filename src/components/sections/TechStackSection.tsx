import { AnimatedText } from "@/components/AnimatedText";
import { SkillGroup } from "@/types";

export default function TechStack({ skills }: { skills: SkillGroup[] }) {
  return (
    <div className="h-full flex flex-col pt-12">
      <AnimatedText 
        text="TECH STACK"
        className="text-fluid-h1 font-black text-p3-white mb-12 border-b-4 border-p3-cyan pb-2 inline-block"
      />
      
      <div className="grid gap-12">
        {skills.map((skillGroup, index) => (
          <div key={index} className="relative">
            <h3 className="text-xl font-bold text-p3-yellow tracking-widest uppercase mb-4 flex items-center">
              <span className="w-4 h-4 bg-p3-cyan inline-block mr-4 clip-diagonal" />
              {skillGroup.category}
            </h3>
            
            <div className="flex flex-wrap gap-4 pl-8 border-l-2 border-p3-cyan/20">
              {skillGroup.items.map((item, i) => (
                <div 
                  key={i} 
                  className="bg-p3-blue border border-p3-cyan/30 text-p3-white px-6 py-3 font-mono text-lg hover:bg-p3-yellow hover:text-p3-black hover:border-p3-black transition-colors duration-300 cursor-default clip-slanted"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
