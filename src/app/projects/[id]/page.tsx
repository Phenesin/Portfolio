import { projects } from "@/data/projects";
import { AnimatedText } from "@/components/AnimatedText";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="h-full flex flex-col pt-12">
      <div className="flex items-center gap-4 mb-4">
        <Link href="/projects" className="text-p3-yellow hover:text-p3-cyan font-mono text-sm tracking-widest uppercase">
          &lt; BACK TO PROJECTS
        </Link>
      </div>

      <div className="flex items-baseline gap-4 border-b-4 border-p3-cyan pb-2 mb-8">
        <span className="text-5xl font-mono font-bold text-p3-yellow">{project.number}</span>
        <AnimatedText 
          text={project.title}
          className="text-4xl md:text-5xl font-black text-p3-white uppercase"
        />
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-p3-blue-dark/80 p-6 border-l-4 border-p3-yellow">
            <h4 className="text-sm font-mono text-p3-cyan tracking-widest uppercase mb-4">Overview</h4>
            <p className="text-lg text-p3-white/90 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-mono text-p3-cyan tracking-widest uppercase mb-4">Key Features</h4>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start text-p3-white">
                  <span className="w-2 h-2 bg-p3-yellow mt-2 mr-3 flex-shrink-0 clip-diagonal" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {project.github && (
            <div className="pt-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-p3-yellow text-p3-black font-black uppercase px-8 py-4 tracking-widest hover:bg-p3-cyan transition-colors duration-300 clip-slanted"
              >
                View Source Code
              </a>
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div className="bg-p3-cyan/10 p-6 border border-p3-cyan/30 clip-slanted">
            <h4 className="text-sm font-mono text-p3-yellow tracking-widest uppercase mb-4">Architecture</h4>
            <div className="flex flex-col gap-2">
              {project.architecture.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-p3-blue border border-p3-cyan text-p3-white text-xs font-mono py-2 px-4 w-full text-center uppercase tracking-widest">
                    {step}
                  </div>
                  {i < project.architecture.length - 1 && (
                    <div className="w-px h-4 bg-p3-cyan my-1" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono text-p3-cyan tracking-widest uppercase mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-p3-blue-dark border border-p3-white/20 text-p3-white text-xs font-mono py-1 px-3">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
