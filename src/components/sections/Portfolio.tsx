"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fadeInUp, staggerIn } from "@/lib/animations";
import { projects, type ProjectCategory } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";

export default function Portfolio() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const heading = containerRef.current.querySelector(".heading-wrapper");
      const filterBar = containerRef.current.querySelector(".filter-bar");
      const scrollArea = containerRef.current.querySelector(".scroll-area");
      const cards = containerRef.current.querySelectorAll(".project-card-wrapper");

      if (heading) fadeInUp(heading, { trigger: heading });
      if (filterBar) fadeInUp(filterBar, { trigger: filterBar, delay: 0.05 });
      if (scrollArea) fadeInUp(scrollArea, { trigger: scrollArea, delay: 0.1 });

      // Immediate staggered appearance for cards when filtering
      if (cards.length) {
        gsap.set(cards, { opacity: 0, y: 15 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.15
        });
      }

      // GSAP Focus Effect: Dim others on hover
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(cards, {
            opacity: (i, target) => target === card ? 1 : 0.3,
            scale: (i, target) => target === card ? 1 : 0.98,
            duration: 0.4,
            overwrite: true
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(cards, { opacity: 1, scale: 1, duration: 0.4, overwrite: true });
        });
      });
    },
    { scope: sectionRef, dependencies: [filter] }
  );

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter((p) => p.category === filter);

  const categories: (ProjectCategory | "All")[] = ["All", "Infrastructure", "Cyber_Offense", "Secure_Dev", "Automation"];

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 relative overflow-hidden bg-background">
      {/* Subtle Background Grids */}
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl" ref={containerRef}>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="heading-wrapper opacity-0 max-w-2xl">
            <SectionHeading
              label="Engineering_Registries"
              title="Projets & Missions"
              description="Sélection indexée de mes travaux en infrastructure et cybersécurité."
              className="mb-0"
            />
          </div>

          {/* Minimalist Filter Bar */}
          <div className="filter-bar opacity-0 flex flex-wrap gap-2 p-1.5 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all duration-300 ${
                  filter === cat 
                    ? "bg-accent text-white shadow-lg shadow-accent/20" 
                    : "text-muted hover:text-foreground hover:bg-white/5"
                }`}
              >
                {cat.replace("_", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="scroll-area opacity-0 relative mt-12 group/scroll">
          {/* Subtle Scroll Hint */}
          <div className="absolute -top-10 right-0 flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-muted/30">
            Explorer
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-16 snap-x snap-proximity no-scrollbar scroll-smooth -mx-6 px-6 md:-mx-12 md:px-12">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card-wrapper opacity-0 flex-shrink-0 w-[85vw] md:w-[400px] snap-start"
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
            {/* Spacer for ending scroll */}
            <div className="flex-shrink-0 w-6 md:w-12 h-1" />
          </div>

          {/* Minimalist Progress Track */}
          <div className="absolute bottom-8 left-0 right-0 h-[1px] bg-white/[0.03] rounded-full overflow-hidden">
            <div className="h-full bg-accent/30 w-1/5 animate-[progress_30s_linear_infinite]" />
          </div>
        </div>
        
        {/* Technical Footer Indicator */}
        <div className="mt-20 pt-10 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-4 text-[9px] font-mono text-muted/60">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                SYSTEM_STABLE
              </span>
              <span className="w-px h-3 bg-border/50" />
              <span>TOTAL_ASSETS: {projects.length}</span>
           </div>
           
           <Button variant="ghost" href="https://github.com" className="group text-[10px] uppercase font-bold tracking-widest">
              Accéder au repository GitHub complet
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
           </Button>
        </div>
      </div>
    </section>
  );
}
