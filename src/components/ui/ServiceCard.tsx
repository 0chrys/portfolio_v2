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
      className="service-card group relative p-8 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 shadow-sm"
      data-index={index}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <span className="text-4xl mb-6 block">{service.icon}</span>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Features Preview */}
        <ul className="space-y-2 mb-8">
          {service.features.slice(0, 2).map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-sm text-muted/80"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Read More Link */}
        <div className="mt-auto pt-6 border-t border-border/50">
          <Link
            href={`/services/${service.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors group/link"
          >
            Découvrir l'offre
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
