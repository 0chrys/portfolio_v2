"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { fadeInUp, scaleIn, staggerIn } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications, type Certification } from "@/data/certifications";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const heading = containerRef.current.querySelector(".heading-wrapper");
      const textBlocs = containerRef.current.querySelectorAll(".text-bloc");
      const skillPills = containerRef.current.querySelectorAll(".skill-pill");
      const picture = containerRef.current.querySelector(".profile-picture");

      if (heading) fadeInUp(heading, { trigger: heading });
      if (textBlocs.length) {
        textBlocs.forEach((bloc, i) => {
          fadeInUp(bloc, { trigger: bloc, delay: i * 0.1 });
        });
      }
      
      if (skillPills.length) {
        gsap.fromTo(
          skillPills,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: sectionRef.current ? {
              trigger: ".skills-container",
              start: "top 85%",
            } : undefined,
          }
        );
      }
      
      if (picture) scaleIn(picture, { trigger: picture });
    },
    { scope: sectionRef }
  );

  const securitySkills = [
    "SOC L1 Monitoring", "Pentesting Web", "GRC - ISO 27001", "Audit de Code", 
    "Analyse de logs", "Wireshark", "Burp Suite", "Sécurité Cloud"
  ];

  const devSkills = [
    "TypeScript", "Next.js", "React Native", "NestJS", 
    "PostgreSQL", "Tailwind CSS", "GSAP", "REST/GraphQL"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-surface/30 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="heading-wrapper opacity-0">
              <SectionHeading
                label="À propos"
                title="Expertise Hybride"
              />
            </div>
            
            <div className="space-y-6 text-lg text-muted mb-10">
              <p className="text-bloc opacity-0">
                Issu du <span className="text-foreground font-medium">développement</span>, mon parcours a naturellement évolué vers la protection des systèmes. 
                Aujourd'hui, je combine une base technique solide avec une expertise en <span className="text-accent font-bold">SOC</span>, <span className="text-accent font-bold">Pentester Junior</span> et <span className="text-accent font-bold">GRC</span>.
              </p>
              
              <p className="text-bloc opacity-0">
                Cette vision hybride me permet de comprendre les vulnérabilités directement à la source (le code) 
                et d'y remédier efficacement, tout en assurant la conformité et la gouvernance des infrastructures numériques.
              </p>
            </div>

            <div className="text-bloc opacity-0 mb-12">
              <a 
                href="/cv-chrys-konan.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-accent/20 bg-accent/5 text-accent font-bold text-sm hover:bg-accent hover:text-white transition-all group"
              >
                <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger mon CV complet (.pdf)
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 skills-container">
              {/* Security Column */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-accent mb-4 text-bloc opacity-0">
                  <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold uppercase tracking-widest text-sm">Expertise Sécurité</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {securitySkills.map(skill => (
                    <span key={skill} className="skill-pill opacity-0 px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-semibold text-foreground hover:border-accent/50 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dev Column */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-blue-400 mb-4 text-bloc opacity-0">
                  <div className="p-2 rounded-lg bg-blue-400/10 border border-blue-400/20">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold uppercase tracking-widest text-sm text-foreground">Développement</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {devSkills.map(skill => (
                    <span key={skill} className="skill-pill opacity-0 px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-semibold text-foreground hover:border-blue-400/50 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certification Highlights */}
            <div className="mt-16 pt-8 border-t border-border/50 text-bloc opacity-0">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted mb-6">Certifications Clés</h3>
              <div className="flex flex-wrap gap-4">
                {certifications.slice(0, 3).map((cert: Certification) => (
                  <div key={cert.id} className="flex items-center gap-4 p-3 rounded-xl bg-surface border border-border/50 hover:border-accent/30 transition-all duration-300 group/cert shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-accent/5 flex items-center justify-center text-xl grayscale group-hover/cert:grayscale-0 transition-all">
                      {cert.logo}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground leading-tight">{cert.title}</p>
                      <p className="text-[10px] text-muted uppercase tracking-wider mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Visual Profile Area */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end perspective-1000">
            <div className="profile-picture opacity-0 relative w-full max-w-md aspect-square rounded-full flex items-center justify-center group">
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 rounded-full border border-accent/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-accent/10 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Hexagon Container */}
              <div className="relative w-72 h-72 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-surface stroke-accent/40 stroke-[0.5] drop-shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                  <path d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" />
                </svg>
                
                {/* Internal UI elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-accent/30 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:100%_4px] animate-[scan_4s_linear_infinite]" />
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-700 select-none">🛡️</span>
                  </div>
                </div>

                {/* Rotating Tech Markers */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                    style={{
                      transform: `rotate(${angle}deg) translateY(-145px)`,
                      opacity: 0.6 + (i * 0.05)
                    }}
                  />
                ))}
              </div>
              
              {/* Floating Badges */}
              <div className="absolute top-12 -left-8 px-5 py-3 rounded-xl glass-card border border-white/10 shadow-2xl animate-[float_4s_infinite_ease-in-out] backdrop-blur-md">
                <p className="text-lg font-black text-accent leading-none">PENTEST</p>
                <p className="text-[10px] uppercase tracking-widest text-muted mt-1 font-bold">Verified</p>
              </div>
              
              <div className="absolute bottom-12 -right-4 px-5 py-3 rounded-xl glass-card border border-white/10 shadow-2xl animate-[float_5s_infinite_ease-in-out_reverse] backdrop-blur-md">
                <p className="text-lg font-black text-white leading-none">SECURE</p>
                <p className="text-[10px] uppercase tracking-widest text-muted mt-1 font-bold">By Design</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
