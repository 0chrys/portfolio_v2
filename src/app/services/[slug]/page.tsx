import { use } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import ServicePageAnimations from "@/components/animations/ServicePageAnimations";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = use(params);
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <ServicePageAnimations>
      <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          {/* Breadcrumbs & Technical Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 animate-item opacity-0">
            <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-muted">
              <Link href="/" className="hover:text-accent transition-colors">Root</Link>
              <span className="opacity-30">/</span>
              <span className="text-accent underline decoration-accent/30 underline-offset-4">{service.title}</span>
            </nav>
            
            <div className="flex items-center gap-4 bg-surface/50 border border-border/50 px-4 py-2 rounded-lg backdrop-blur-sm">
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest text-muted font-black">Service_ID</span>
                <span className="text-[10px] font-mono font-bold text-foreground">SRV-{service.id.slice(0, 3).toUpperCase()}-442</span>
              </div>
              <div className="w-px h-6 bg-border/50 mx-2" />
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest text-muted font-black">Access_Level</span>
                <span className="text-[10px] font-mono font-bold text-emerald-500">L3_RESTRICTED</span>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="mb-24">
            <div className="flex items-center gap-6 mb-8 animate-item opacity-0">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-4xl shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                {service.icon}
              </div>
              <div className="mono-tag text-[10px]">Service_Protocol::Ready</div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-8 animate-item opacity-0 leading-[0.9]">
              {service.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl animate-item opacity-0 font-medium">
              {service.fullDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-20">
              {/* Workflow - Technical Pipeline */}
              <section className="animate-item opacity-0">
                <div className="flex items-baseline gap-4 mb-12">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase">01. Pipeline Pipeline</h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>
                
                <div className="space-y-12 relative">
                  <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-border to-accent/20" />
                  
                  {service.workflow.map((step, index) => (
                    <div key={index} className="relative pl-16 group">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center z-10 group-hover:border-accent/50 transition-colors shadow-sm">
                        <span className="font-mono text-xs font-bold text-accent">0{index + 1}</span>
                      </div>
                      
                      <div className="cyber-card p-6 bg-surface/30 backdrop-blur-sm group-hover:bg-accent/[0.02] transition-colors">
                        <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 uppercase tracking-wide">
                          {step.title}
                          <span className="text-[10px] text-muted font-mono ml-auto opacity-50">STATUS: OK</span>
                        </h3>
                        <p className="text-muted leading-relaxed text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Deliverables */}
              <section className="animate-item opacity-0 pt-8">
                <div className="flex items-baseline gap-4 mb-10">
                  <h2 className="text-3xl font-black text-foreground tracking-tight uppercase">02. Livrables</h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.deliverables.map((item, index) => (
                    <div key={index} className="p-5 rounded-xl border border-border/50 bg-surface/50 flex items-center gap-4 group hover:border-accent/30 transition-all duration-300">
                      <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-foreground text-[13px] font-bold uppercase tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tools Card */}
              <div className="cyber-card p-8 bg-surface/50 border-border animate-item opacity-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <circle cx="12" cy="12" r="3" />
                   </svg>
                </div>
                
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted mb-8 pb-4 border-b border-border/50 flex justify-between">
                  Expertise_Stack
                  <span className="text-emerald-500 animate-pulse">● Authorized</span>
                </h3>
                
                <div className="space-y-4">
                  {service.tools.map((tool, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-background border border-border/50 group hover:border-accent/40 transition-colors">
                      <span className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">{tool.name}</span>
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{tool.icon}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                    <p className="text-[10px] uppercase font-bold text-accent tracking-tighter mb-1">Security Status</p>
                    <p className="text-[11px] text-muted leading-tight italic">
                      Toutes les technologies utilisées sont auditées pour garantir une conformité maximale aux standards de sécurité.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="p-8 rounded-2xl bg-accent text-white animate-item opacity-0 relative overflow-hidden group shadow-2xl shadow-accent/20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px] animate-[scan_4s_linear_infinite]" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100px] blur-2xl group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-bold mb-4 relative z-10 tracking-tight uppercase">Initialiser Projet</h3>
                <p className="text-white/80 text-[13px] mb-8 relative z-10 leading-relaxed font-medium">
                  Prêt à construire une solution performante et imprenable ? Contactez-moi pour un premier audit.
                </p>
                <Button href="/#contact" variant="secondary" className="w-full bg-white text-accent border-none hover:bg-white/90 shadow-xl">
                  Me contacter
                </Button>
                <div className="mt-6 flex items-center justify-center gap-2 text-[8px] uppercase font-black tracking-widest opacity-60">
                   <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                   Connection Securisée: AES-256
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServicePageAnimations>
  );
}

