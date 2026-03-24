"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { fadeInUp, scaleIn } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

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

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "Tailwind CSS", "GSAP", "PostgreSQL", "MongoDB",
    "Docker", "Linux", "OWASP", "Pentesting", "DevSecOps"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-surface/30">
      <div className="container mx-auto px-6 max-w-7xl" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <div className="heading-wrapper opacity-0">
              <SectionHeading
                label="À propos"
                title="Expertise Hybride"
              />
            </div>
            
            <div className="space-y-6 text-lg text-muted">
              <p className="text-bloc opacity-0">
                Mon approche ne sépare pas la création de la protection. En tant qu'expert hybride, 
                je traite la <strong className="text-foreground">performance, l'UX et la sécurité</strong> comme un seul et même pilier technique.
              </p>
              
              <p className="text-bloc opacity-0">
                Aujourd'hui, j'adopte une philosophie "Secure-by-Design" totale. 
                Que ce soit pour une application Web complexe ou une app Mobile, 
                j'intègre les audits de sécurité et la remédiation dès la genèse du projet.
              </p>
            </div>
            
            <div className="mt-12 skills-container">
              <h3 className="text-xl font-bold text-foreground mb-6">Stack & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                  <span 
                    key={skill} 
                    className="skill-pill opacity-0 px-4 py-2 rounded-full border border-border bg-surface text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent hover:border-accent/40 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Visual Profile Area */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="profile-picture opacity-0 relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-surface border border-border group shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-transparent opacity-50 mix-blend-overlay z-10" />
              
              {/* Abstract Avatar Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-background">
                <div className="w-64 h-64 rounded-full border-2 border-accent/20 flex items-center justify-center relative">
                  <div className="w-48 h-48 rounded-full border border-accent/40 animate-[spin_10s_linear_infinite]" />
                  <div className="w-32 h-32 rounded-full border border-accent/60 absolute animate-[spin_7s_linear_infinite_reverse]" />
                  <span className="text-6xl absolute">👨‍💻</span>
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent/50 rounded-tl-3xl z-20 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/50 rounded-br-3xl z-20 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute top-12 left-0 lg:-left-12 px-6 py-4 rounded-2xl glass shadow-2xl animate-[bounce_4s_infinite_ease-in-out]">
              <p className="text-sm font-bold text-foreground">100%</p>
              <p className="text-xs text-muted">Performance</p>
            </div>
            
            <div className="absolute bottom-12 right-0 lg:-right-8 px-6 py-4 rounded-2xl glass shadow-2xl animate-[bounce_5s_infinite_ease-in-out_reverse]">
              <p className="text-sm font-bold text-accent">0</p>
              <p className="text-xs text-muted">Vulnérabilités</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
