"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { staggerIn } from "@/lib/animations";

export default function ServicePageAnimations({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const elements = containerRef.current.querySelectorAll(".animate-item");
      staggerIn(elements);
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
