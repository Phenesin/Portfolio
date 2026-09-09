import { research } from "@/data/research";
import { AnimatedText } from "@/components/AnimatedText";

export default function Research() {
  return (
    <div className="h-full flex flex-col pt-12">
      <AnimatedText 
        text="RESEARCH"
        className="text-4xl md:text-6xl font-black text-p3-white mb-12 border-b-4 border-p3-cyan pb-2 inline-block"
      />
      
      <div className="bg-p3-blue-dark/50 p-8 border border-p3-cyan/30 clip-slanted relative overflow-hidden group">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-p3-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-p3-cyan/10 transition-colors" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-p3-yellow text-p3-black text-xs font-bold px-3 py-1 uppercase tracking-widest clip-diagonal">
              {research.type}
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black text-p3-white mb-6 uppercase leading-tight">
            {research.title}
          </h3>
          
          <p className="text-xl text-p3-white/90 leading-relaxed mb-8 max-w-2xl border-l-4 border-p3-cyan pl-4">
            {research.description}
          </p>
          
          <div className="grid grid-cols-3 gap-2 max-w-xl mb-8">
            {research.flow.map((step, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                <div className="bg-p3-blue border border-p3-cyan/50 text-p3-cyan text-center p-3 text-xs md:text-sm font-bold tracking-widest uppercase w-full">
                  {step}
                </div>
                {i < research.flow.length - 1 && (
                  <div className="text-p3-yellow mt-2">↓</div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {research.keywords.map((keyword, i) => (
              <span key={i} className="text-xs font-mono text-p3-white/60 uppercase tracking-widest border border-p3-white/20 px-2 py-1">
                #{keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
