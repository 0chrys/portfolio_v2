"use client";

import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="cyber-card group h-full flex flex-col"
      data-index={index}
    >
      {/* Project ID Tag */}
      <div className="absolute top-4 left-4 z-20">
        <span className="mono-tag text-[8px] opacity-70 group-hover:opacity-100 transition-opacity backdrop-blur-md">
          #PRJ-{(index + 1).toString().padStart(3, '0')}
        </span>
      </div>

      {/* Image / Visual Area */}
      <div className="relative h-56 bg-surface overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 cyber-grid opacity-[0.03]" />
        
        {/* Tech Visual Component */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/5 via-transparent to-accent/10">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Rotating Tech Ring */}
            <div className="absolute inset-0 rounded-full border border-accent/10 border-dashed animate-[spin_10s_linear_infinite]" />
            <span className="text-6xl opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700">
              {project.technologies[0] === "Python" ? "🐍" : 
               project.technologies.includes("React Native") ? "📱" : "⚡"}
            </span>
          </div>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-4 right-4 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest rounded bg-accent text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded border border-border/50 bg-surface text-muted/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 pt-6 border-t border-border/50">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted hover:text-accent transition-all duration-300"
              id={`project-${project.id}-github`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted hover:text-accent transition-all duration-300"
              id={`project-${project.id}-live`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
