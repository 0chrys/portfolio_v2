import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div 
      className="cyber-card group h-full flex flex-col bg-surface/40 backdrop-blur-md border-border/50 hover:border-accent/40 transition-all duration-500 block relative overflow-hidden"
      data-index={index}
    >
      {/* Simplified Registry Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border/40 bg-accent/5">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono font-bold text-accent/80 tracking-tight">{project.idCode}</span>
          <span className="w-1 h-1 rounded-full bg-border/30" />
          <span className="text-[9px] font-mono font-bold text-emerald-500/80 tracking-tight">{project.tier}</span>
        </div>
        <span className={`text-[8px] font-black px-2 py-0.5 rounded-full border ${
          project.status === "PRODUCTION" ? "bg-status-success/10 border-status-success/20 text-status-success" :
          project.status === "SIMULATION" ? "bg-status-warning/10 border-status-warning/20 text-status-warning" :
          project.status === "LAB" ? "bg-status-info/10 border-status-info/20 text-status-info" :
          "bg-status-error/10 border-status-error/20 text-status-error"
        }`}>
          {project.status}
        </span>
      </div>

      {/* Visual Area: Minimalist & Clean */}
      <div className="relative h-40 bg-background/50 overflow-hidden group/visual">
        <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />
        
        {/* Simplified Central Icon Area */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-accent/10 border-dashed animate-[spin_25s_linear_infinite]" />
            <span className="text-3xl grayscale group-hover/visual:grayscale-0 group-hover/visual:scale-110 transition-all duration-700 opacity-20 group-hover/visual:opacity-70">
              {project.category === "Infrastructure" ? "🌐" : 
               project.category === "Cyber_Offense" ? "🛡️" : 
               project.category === "Automation" ? "⚙️" : "💻"}
            </span>
          </div>
        </div>

        {/* Subtle Scan Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent h-full w-full animate-[scan_8s_linear_infinite] opacity-0 group-hover/visual:opacity-100" />
      </div>

      {/* Structured Content Area */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-bold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300 uppercase">
            {project.title}
          </h3>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4 text-muted/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex gap-2 mb-4">
             {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="text-[7px] font-mono text-muted uppercase tracking-widest opacity-60">{tech}</span>
             ))}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-border/40">
             <span className="text-[7px] font-black uppercase tracking-widest text-muted group-hover:text-status-warning transition-colors italic opacity-50">Access_Classified</span>
             <div className="flex items-center gap-1.5 grayscale group-hover:grayscale-0 transition-all">
                <span className="w-1 h-1 rounded-full bg-status-warning animate-pulse" />
                <span className="text-[7px] font-black uppercase tracking-widest text-muted opacity-40 group-hover:opacity-70 group-hover:text-muted">PROTECTED</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
