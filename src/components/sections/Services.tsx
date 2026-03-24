"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { fadeInUp, staggerIn } from "@/lib/animations";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const heading = containerRef.current.querySelector(".heading-wrapper");
      const cards = containerRef.current.querySelectorAll(".service-card");

      if (heading) fadeInUp(heading, { trigger: heading });
      if (cards.length && sectionRef.current) staggerIn(cards, { trigger: sectionRef.current });
    },
    { scope: sectionRef }
  );

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-surface/30">
      <div className="container mx-auto px-6 max-w-7xl" ref={containerRef}>
        <div className="heading-wrapper opacity-0">
          <SectionHeading
            label="Services"
            title="Secure. Build. Innovate."
            description="Une expertise unifiée pour propulser vos projets numériques avec une résilience native et une performance de pointe."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
          {services.map((service, index) => (
            <div key={service.id} className="service-card opacity-0">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
