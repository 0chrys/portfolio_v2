"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { fadeInUp, staggerIn } from "@/lib/animations";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const heading = containerRef.current.querySelector(".heading-wrapper");
      const cards = containerRef.current.querySelectorAll(".project-card-wrapper");
      const btn = containerRef.current.querySelector(".more-btn-wrapper");

      if (heading) fadeInUp(heading, { trigger: heading });
      if (cards.length && sectionRef.current) staggerIn(cards, { trigger: sectionRef.current });
      if (btn) fadeInUp(btn, { trigger: btn, delay: 0.2 });
    },
    { scope: sectionRef }
  );

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6 max-w-7xl" ref={containerRef}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="heading-wrapper opacity-0 flex-1">
            <SectionHeading
              label="Portfolio"
              title="Projets Récents"
              description="Une sélection de mes travaux alliant design moderne, performances et architecture sécurisée."
              className="mb-0" // override default margin
            />
          </div>
          
          <div className="more-btn-wrapper opacity-0 hidden md:block pb-2">
            <Button variant="ghost" href="https://github.com" className="group">
              Voir tout le GitHub
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="project-card-wrapper opacity-0">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
        
        <div className="more-btn-wrapper opacity-0 mt-12 flex justify-center md:hidden">
          <Button variant="secondary" href="https://github.com" className="w-full">
            Voir plus sur GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
