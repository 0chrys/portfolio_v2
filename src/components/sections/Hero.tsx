"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { fadeInUp, staggerIn } from "@/lib/animations";
import Button from "@/components/ui/Button";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const title = containerRef.current.querySelector("h1");
      const desc = containerRef.current.querySelector("p");
      const btns = containerRef.current.querySelectorAll(".hero-btn");

      if (title) fadeInUp(title, { delay: 0.1 });
      if (desc) fadeInUp(desc, { delay: 0.3 });
      if (btns.length) staggerIn(btns, { delay: 0.5, stagger: 0.15 });

      // Subtle background floating elements animation
      // (Added directly via Tailwind + CSS classes below for simplicity)
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      id="home"
    >
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10 dark:opacity-50 opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-[120px] -z-10 dark:opacity-50 opacity-40" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div ref={containerRef} className="max-w-4xl">
          {/* Label / Tagline */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-md mb-8 shadow-sm">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent">
              Secure. Build. Innovate.
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 cursor-default leading-[1.1]">
            Expert Web, Mobile{" "}
            <span className="gradient-text">&</span>{" "}
            <br className="hidden md:block" />
            <span className="relative inline-block hover:scale-105 transition-transform duration-500 text-accent">
              <TypeAnimation
                sequence={[
                  "Cybersécurité",
                  2000,
                  "SecDevOps",
                  2000,
                  "Pentester",
                  2000,
                  "Hacker Éthique",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              {/* Scanline effect element */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent opacity-0 hover:opacity-100 animate-[scan_2s_ease-in-out_infinite] pointer-events-none" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted max-w-2xl mb-12 leading-relaxed">
            Je fusionne le développement de pointe et la sécurité offensive pour créer des 
            expériences numériques <strong className="text-foreground">résilientes par conception.</strong>
          </p>

          <div className="flex flex-wrap items-center gap-6 ">
            <div className="hero-btn opacity-0">
              <Button href="#portfolio" variant="primary" size="lg">
                Voir mes projets
              </Button>
            </div>
            <div className="hero-btn opacity-0">
              <Button href="#contact" variant="secondary" size="lg">
                Me contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <span className="text-xs text-muted font-medium tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div> */}
    </section>
  );
}
