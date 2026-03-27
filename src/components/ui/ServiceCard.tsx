"use client";

import Link from "next/link";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div
      className="cyber-card group p-8 h-full flex flex-col"
      data-index={index}
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 cyber-grid opacity-[0.03] group-hover:opacity-[0.05] transition-opacity" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon with Scanline */}
        <div className="relative w-16 h-16 mb-8 flex items-center justify-center rounded-xl bg-accent/5 border border-accent/10 overflow-hidden group-hover:border-accent/30 transition-colors">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:100%_4px] animate-scan opacity-0 group-hover:opacity-100" />
          <span className="text-4xl group-hover:scale-110 transition-transform duration-500">{service.icon}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-8 line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Features Preview */}
        <ul className="space-y-3 mb-8 flex-1">
          {service.features.slice(0, 3).map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-xs font-medium text-muted/90 uppercase tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Read More Link */}
        <div className="mt-auto pt-6 border-t border-border/50">
          <Link
            href={`/services/${service.id}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors group/link"
          >
            [ OPEN ACCESS ]
            <svg
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
