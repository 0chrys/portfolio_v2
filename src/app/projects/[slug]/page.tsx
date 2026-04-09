import { use } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import ProjectPageAnimations from "@/components/animations/ProjectPageAnimations";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectPageAnimations>
      <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 animate-pulse" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Technical Header & Registry Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 animate-item opacity-0">
            <nav className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted">
              <Link href="/#portfolio" className="hover:text-accent transition-colors flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                DATABASE
              </Link>
              <span className="opacity-20">/</span>
              <span className="text-accent">{project.idCode}</span>
            </nav>

            <div className="flex flex-wrap gap-4 items-center bg-white/[0.02] border border-white/[0.05] p-3 rounded-xl backdrop-blur-md">
              <div className="flex flex-col px-3 border-r border-white/[0.05]">
                <span className="text-[7px] uppercase tracking-widest text-muted/60 font-black">Classification</span>
                <span className="text-[10px] font-mono font-bold text-emerald-500">{project.tier}</span>
              </div>
              <div className="flex flex-col px-3 border-r border-white/[0.05]">
                <span className="text-[7px] uppercase tracking-widest text-muted/60 font-black">Status</span>
                <span className={`text-[10px] font-mono font-bold ${
                  project.status === "PRODUCTION" ? "text-emerald-500" :
                  project.status === "SIMULATION" ? "text-amber-500" : "text-blue-500"
                }`}>{project.status}</span>
              </div>
              <div className="flex flex-col px-3">
                <span className="text-[7px] uppercase tracking-widest text-muted/60 font-black">Registry_Hash</span>
                <span className="text-[10px] font-mono font-bold text-foreground">v{Math.random().toString(36).substring(7).toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* Project Identity */}
          <div className="mb-24 animate-item opacity-0">
             <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded bg-accent/10 border border-accent/20 text-[9px] font-black uppercase text-accent tracking-widest">
                  {project.category.replace("_", " ")}
                </span>
                <span className="h-px w-12 bg-accent/20" />
                <span className="text-[9px] font-mono text-muted/40 uppercase tracking-widest">Security_Audit_Passed</span>
             </div>
             
             <h1 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter mb-8 leading-[0.9] uppercase">
                {project.title}
             </h1>
             
             <p className="text-xl md:text-2xl text-muted/80 leading-relaxed max-w-3xl font-medium italic">
                {project.description}
             </p>
          </div>

          {/* Investigation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-24">
              
              {/* 01_CONTEXT_CHALLENGE */}
              <section className="animate-item opacity-0">
                <div className="flex items-center gap-4 mb-10">
                   <span className="text-accent font-mono text-sm font-bold">01_</span>
                   <h2 className="text-2xl font-black text-foreground tracking-widest uppercase">CONTEXT_&_CHALLENGE</h2>
                   <div className="h-px flex-1 bg-gradient-to-r from-accent/20 to-transparent" />
                </div>
                <div className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] backdrop-blur-sm relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                      <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                   </div>
                   <p className="text-muted leading-relaxed text-lg font-medium relative z-10">
                      {project.details?.challenge}
                   </p>
                </div>
              </section>

              {/* 02_TECHNICAL_ARCHITECTURE */}
              <section className="animate-item opacity-0">
                <div className="flex items-center gap-4 mb-10">
                   <span className="text-accent font-mono text-sm font-bold">02_</span>
                   <h2 className="text-2xl font-black text-foreground tracking-widest uppercase">TECHNICAL_ARCHITECTURE</h2>
                   <div className="h-px flex-1 bg-gradient-to-r from-accent/20 to-transparent" />
                </div>
                <div className="space-y-8">
                   <div className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] backdrop-blur-sm">
                      <p className="text-muted leading-relaxed font-medium mb-8">
                         {project.details?.architecture}
                      </p>
                      
                      {/* Features List */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.details?.features.map((feature, idx) => (
                           <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.03] group hover:border-accent/30 transition-all">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                              <span className="text-[13px] font-bold text-foreground/80 uppercase tracking-tight">{feature}</span>
                           </div>
                        ))}
                      </div>
                   </div>
                </div>
              </section>

              {/* 03_THREAT_LANDSCAPE */}
              {project.details?.threatLandscape && (
                <section className="animate-item opacity-0">
                  <div className="flex items-center gap-4 mb-10">
                     <span className="text-red-500 font-mono text-sm font-bold">03_</span>
                     <h2 className="text-2xl font-black text-foreground tracking-widest uppercase">THREAT_LANDSCAPE</h2>
                     <div className="h-px flex-1 bg-gradient-to-r from-red-500/20 to-transparent" />
                  </div>
                  <div className="p-8 rounded-2xl bg-red-500/[0.01] border border-red-500/10 backdrop-blur-sm relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-red-500">
                        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                     </div>
                     <p className="text-muted leading-relaxed text-lg font-medium relative z-10 italic">
                        {project.details.threatLandscape}
                     </p>
                  </div>
                </section>
              )}

              {/* 04_MITIGATION_STRATEGY */}
              {project.details?.mitigationStrategy && (
                <section className="animate-item opacity-0">
                  <div className="flex items-center gap-4 mb-10">
                     <span className="text-accent font-mono text-sm font-bold">04_</span>
                     <h2 className="text-2xl font-black text-foreground tracking-widest uppercase">MITIGATION_STRATEGY</h2>
                     <div className="h-px flex-1 bg-gradient-to-r from-accent/20 to-transparent" />
                  </div>
                  <div className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] backdrop-blur-sm">
                     <p className="text-muted leading-relaxed text-lg font-medium">
                        {project.details.mitigationStrategy}
                     </p>
                  </div>
                </section>
              )}

              {/* 05_SECURITY_OUTCOME */}
              <section className="animate-item opacity-0">
                <div className="flex items-center gap-4 mb-10">
                   <span className="text-emerald-500 font-mono text-sm font-bold">05_</span>
                   <h2 className="text-2xl font-black text-foreground tracking-widest uppercase">SECURITY_OUTCOME</h2>
                   <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/20 to-transparent" />
                </div>
                <div className="p-8 rounded-2xl bg-emerald-500/[0.01] border border-emerald-500/10 backdrop-blur-sm relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-emerald-500">
                      <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                   </div>
                   <h3 className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Hardening_Report</h3>
                   <p className="text-muted leading-relaxed text-lg font-medium relative z-10 italic">
                      "{project.details?.securityOutcome}"
                   </p>
                </div>
              </section>
            </div>

            {/* Sidebar: Metadata & Metrics */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* STACK_ANALYSIS */}
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] animate-item opacity-0">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-8 pb-4 border-b border-white/[0.05]">PROJECT_SPECS</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-[9px] font-bold bg-white/[0.03] border border-white/[0.05] rounded text-muted uppercase tracking-widest">
                       {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* SECURITY_DOSSIER */}
              {project.details?.auditHighlights && (
                <div className="p-8 rounded-2xl bg-accent/5 border border-accent/20 animate-item opacity-0 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.05] text-accent group-hover:opacity-[0.1] transition-opacity">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-6 pb-4 border-b border-accent/10">SECURITY_DOSSIER</h3>
                  <div className="space-y-4">
                    {project.details.auditHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-accent mt-1.5" />
                        <span className="text-[11px] font-bold text-foreground/70 uppercase tracking-tight leading-tight">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* METRIC_ANALYSIS */}
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] animate-item opacity-0">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-8 pb-4 border-b border-white/[0.05]">METRIC_ANALYSIS</h3>
                <div className="space-y-6">
                  {project.details?.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                       <span className="text-[10px] font-mono text-accent font-bold">METRIC_{idx+1}_VAL</span>
                       <span className="text-[13px] font-black text-foreground uppercase tracking-tight">{metric}</span>
                       <div className="h-1 w-full bg-white/[0.03] rounded-full mt-1 overflow-hidden">
                          <div className="h-full bg-accent/40 w-[85%] rounded-full" />
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RESOURCE_ACCESS */}
              <div className="p-8 rounded-2xl bg-accent text-white animate-item opacity-0 relative overflow-hidden group shadow-2xl shadow-accent/20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px] animate-[scan_6s_linear_infinite]" />
                <h3 className="text-xl font-black mb-6 relative z-10 uppercase tracking-tighter">Accéder_au_Projet</h3>
                <div className="space-y-3 relative z-10">
                   {project.github && (
                     <Button href={project.github} className="w-full bg-white text-accent hover:bg-white/90">GITHUB_SOURCE</Button>
                   )}
                   {project.live && (
                     <Button href={project.live} variant="ghost" className="w-full border border-white/30 text-white hover:bg-white/10">LIVE_PREVIEW</Button>
                   )}
                </div>
                <div className="mt-8 pt-6 border-t border-white/20 text-[7px] font-mono text-white/50 uppercase tracking-[0.3em] text-center">
                   Protocol: SECURE_LINK_ENABLED
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </ProjectPageAnimations>
  );
}
