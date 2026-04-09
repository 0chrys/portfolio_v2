"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { fadeInUp, staggerIn } from "@/lib/animations";
import Button from "@/components/ui/Button";

import { TypeAnimation } from "react-type-animation";
import Terminal from "@/components/ui/Terminal";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const title = containerRef.current.querySelector("h1");
      const desc = containerRef.current.querySelector("p");
      const btns = containerRef.current.querySelectorAll(".hero-btn");
      const terminal = containerRef.current.querySelector(".terminal-wrapper");

      if (title) fadeInUp(title, { delay: 0.1 });
      if (desc) fadeInUp(desc, { delay: 0.3 });
      if (btns.length) staggerIn(btns, { delay: 0.5, stagger: 0.15 });
      if (terminal) fadeInUp(terminal, { delay: 0.7 });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
      id="home"
    >
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10 dark:opacity-30 opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-tech/10 rounded-full blur-[120px] -z-10 dark:opacity-20 opacity-15" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--accent-dim)_1px,transparent_1px),linear-gradient(90deg,var(--accent-dim)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Column 1: Text Content */}
          <div className="flex flex-col items-start text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-md mb-8 shadow-sm">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent">
                Secure. Build. Innovate.
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground mb-8 cursor-default leading-[1.05]">
              <span className="text-xl md:text-2xl lg:text-3xl block text-accent font-semibold tracking-[0.2em] uppercase mb-4 opacity-80">
                Hello, je suis
              </span>
              <span className="block mb-2">Chrys KONAN</span>
              <span className="relative inline-block text-accent/90 min-h-[0.9em] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <TypeAnimation
                  sequence={[
                    "Analyste Cyber",
                    2000,
                    "Dev Freelance",
                    2000,
                   
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent opacity-0 hover:opacity-100 animate-[scan_3s_ease-in-out_infinite] pointer-events-none" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed">
              Issu du <span className="text-foreground font-medium">développement freelance</span>, je me consacre aujourd'hui à la <span className="text-accent font-bold">cybersécurité</span>. 
              Je construis des expériences numériques résilientes avec une approche "Secure-by-Design".
            </p>
          </div>

          {/* Column 2: Terminal & Controls */}
          <div className="terminal-wrapper opacity-0 hidden lg:flex flex-col gap-6 items-end">
            <Terminal />
            
            {/* Control Panel (Buttons) */}
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-accent/5 rounded-t-xl">
                 <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-accent/80">System Ready</span>
                 </div>
                 <span className="text-[9px] font-mono text-slate-500 tracking-tighter uppercase">ID: CK-INT-092</span>
              </div>
              
              <div className="flex flex-row items-center justify-end gap-3">
                <div className="hero-btn opacity-0">
                  <Button href="#portfolio" variant="primary" size="lg" className="h-14 px-8 shadow-[0_0_20px_var(--accent-dim)]">
                    Projets
                  </Button>
                </div>
                <div className="hero-btn opacity-0">
                  <Button 
                    href="/cv-chrys-konan.pdf" 
                    variant="secondary" 
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-14"
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    CV
                  </Button>
                </div>
                <div className="hero-btn opacity-0">
                  <Button href="#contact" variant="ghost" size="lg" className="h-14">
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Buttons (Visible only on small screens) */}
          <div className="lg:hidden flex flex-col gap-4 mt-8 w-full">
             <div className="flex flex-wrap gap-4">
                <Button href="#portfolio" variant="primary" size="lg" className="flex-1">Projets</Button>
                <Button href="/cv-chrys-konan.pdf" variant="secondary" size="lg" className="flex-1" target="_blank" rel="noopener noreferrer">CV</Button>
             </div>
             <Button href="#contact" variant="ghost" size="lg" className="w-full">Me contacter</Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
