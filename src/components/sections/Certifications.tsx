"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { fadeInUp, staggerIn } from "@/lib/animations";
import { certifications } from "@/data/certifications";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const heading = containerRef.current.querySelector(".heading-wrapper");
      const cards = containerRef.current.querySelectorAll(".cert-card");

      if (heading) fadeInUp(heading, { trigger: heading });
      if (cards.length && sectionRef.current) staggerIn(cards, { trigger: sectionRef.current });
    },
    { scope: sectionRef }
  );

  return (
    <section id="certifications" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-6 max-w-7xl" ref={containerRef}>
        <div className="heading-wrapper opacity-0">
          <SectionHeading
            label="Qualifications"
            title="Certifications"
            description="La validation continue des acquis est essentielle en cybersécurité. Voici les certifications qui attestent de mon expertise technique."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="cert-card opacity-0 group relative p-8 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 shadow-sm flex flex-col h-full"
              data-index={index}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-3xl">
                    {cert.logo}
                  </div>
                  <span className="text-sm font-medium text-muted px-3 py-1 rounded-full bg-background border border-border">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-muted mb-8 text-sm uppercase tracking-wide font-semibold">
                  {cert.issuer}
                </p>

                <div className="mt-auto pt-6 border-t border-border/50">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group/link"
                  >
                    Voir le certificat
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
