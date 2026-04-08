"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { fadeInUp, staggerIn } from "@/lib/animations";

export default function ProjectPageAnimations({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const items = containerRef.current.querySelectorAll(".animate-item");
      if (items.length) {
        staggerIn(Array.from(items), { 
          y: 20, 
          stagger: 0.1,
          delay: 0.2
        });
      }
    },
    { scope: containerRef }
  );

  return <div ref={containerRef}>{children}</div>;
}
