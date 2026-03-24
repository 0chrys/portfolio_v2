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
      <div className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted mb-12 animate-item opacity-0">
            <Link href="/" className="hover:text-accent transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{service.title}</span>
          </nav>

          {/* Hero Section */}
          <div className="mb-20">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-4xl mb-8 animate-item opacity-0">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 animate-item opacity-0">
              {service.title}
            </h1>
            <p className="text-xl text-muted leading-relaxed max-w-3xl animate-item opacity-0">
              {service.fullDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Workflow */}
              <section className="animate-item opacity-0">
                <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center">1</span>
                  Méthodologie & Étapes
                </h2>
                <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border">
                  {service.workflow.map((step, index) => (
                    <div key={index} className="relative pl-12">
                      <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center z-10">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Deliverables */}
              <section className="animate-item opacity-0">
                <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-accent text-white text-sm flex items-center justify-center">2</span>
                  Livrables Clés
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.deliverables.map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-surface border border-border flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tools */}
              <div className="p-8 rounded-2xl bg-surface border border-border animate-item opacity-0">
                <h3 className="text-lg font-bold text-foreground mb-6">Expertise Technique</h3>
                <div className="space-y-4">
                  {service.tools.map((tool, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background border border-border/50">
                      <span className="text-sm font-medium text-foreground">{tool.name}</span>
                      <span className="text-xl">{tool.icon}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-8 rounded-2xl bg-accent text-white animate-item opacity-0 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100px] blur-2xl group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-bold mb-4 relative z-10">Prêt à collaborer ?</h3>
                <p className="text-white/80 text-sm mb-8 relative z-10 leading-relaxed">
                  Discutons de vos besoins spécifiques et définissons ensemble la meilleure stratégie pour votre projet.
                </p>
                <Button href="/#contact" variant="secondary" className="w-full bg-white text-accent border-none hover:bg-white/90">
                  Me contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServicePageAnimations>
  );
}

