import { AnimatedText } from "@/components/AnimatedText";
import { Activity } from "@/types";

export default function BeyondCode({ activities }: { activities: Activity[] }) {
  return (
    <div className="h-full flex flex-col pt-12">
      <AnimatedText 
        text="BEYOND CODE"
        className="text-fluid-h1 font-black text-p3-white mb-12 border-b-4 border-p3-cyan pb-2 inline-block"
      />
      
      <div className="grid gap-12">
        {activities.map((activity, index) => (
          <div key={index} className="relative pl-8 border-l-4 border-p3-yellow">
            <h3 className="text-2xl font-black text-p3-white uppercase tracking-wider mb-2">
              {activity.title}
            </h3>
            
            <div className="text-sm font-mono text-p3-cyan font-bold tracking-widest uppercase mb-4 bg-p3-blue inline-block px-3 py-1">
              {activity.role}
            </div>
            
            <p className="text-lg text-p3-white/90 mb-4 max-w-2xl">
              {activity.description}
            </p>
            
            <ul className="flex flex-wrap gap-4">
              {activity.stats.map((stat, i) => (
                <li key={i} className="text-xs font-mono font-bold text-p3-black bg-p3-yellow px-3 py-1 clip-diagonal uppercase">
                  {stat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
