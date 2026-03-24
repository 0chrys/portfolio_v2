"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/** Fade-in from below */
export function fadeInUp(
  element: gsap.TweenTarget,
  options?: { delay?: number; duration?: number; y?: number; trigger?: string | Element }
) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: options?.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.8,
      delay: options?.delay ?? 0,
      ease: "power3.out",
      scrollTrigger: options?.trigger
        ? {
            trigger: options.trigger,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        : undefined,
    }
  );
}

/** Stagger children into view */
export function staggerIn(
  elements: gsap.TweenTarget,
  options?: { trigger?: string | Element; stagger?: number; y?: number; delay?: number }
) {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: options?.y ?? 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: options?.delay ?? 0,
      stagger: options?.stagger ?? 0.15,
      ease: "power3.out",
      scrollTrigger: options?.trigger
        ? {
            trigger: options.trigger,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        : undefined,
    }
  );
}

/** Scale in from small */
export function scaleIn(
  element: gsap.TweenTarget,
  options?: { trigger?: string | Element; delay?: number }
) {
  return gsap.fromTo(
    element,
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      delay: options?.delay ?? 0,
      ease: "power2.out",
      scrollTrigger: options?.trigger
        ? {
            trigger: options.trigger,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        : undefined,
    }
  );
}

/** Reveal a line from left */
export function lineReveal(
  element: gsap.TweenTarget,
  options?: { trigger?: string | Element }
) {
  return gsap.fromTo(
    element,
    { scaleX: 0, transformOrigin: "left center" },
    {
      scaleX: 1,
      duration: 0.8,
      ease: "power3.inOut",
      scrollTrigger: options?.trigger
        ? {
            trigger: options.trigger,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        : undefined,
    }
  );
}
