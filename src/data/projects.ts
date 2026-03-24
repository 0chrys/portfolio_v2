export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "secure-auth-platform",
    title: "Secure Auth Platform",
    description:
      "Plateforme d'authentification sécurisée avec 2FA, détection d'intrusion et gestion des sessions. Architecture microservices avec chiffrement de bout en bout.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "JWT", "2FA"],
    github: "https://github.com",
    featured: true,
  },
  {
    id: "vulnerability-scanner",
    title: "Vulnerability Scanner",
    description:
      "Outil de scan automatisé pour détecter les vulnérabilités web courantes (XSS, SQL injection, CSRF). Interface dashboard avec rapports détaillés.",
    technologies: ["Python", "React", "Docker", "OWASP"],
    github: "https://github.com",
    featured: true,
  },
  {
    id: "agency-website",
    title: "Site Agence Digitale",
    description:
      "Site vitrine pour une agence digitale avec animations GSAP, design premium et performances élevées. Score Lighthouse 100/100.",
    technologies: ["Next.js", "Tailwind CSS", "GSAP", "Vercel"],
    github: "https://github.com",
    featured: true,
  },
  {
    id: "ecommerce-securise",
    title: "E-Commerce Sécurisé",
    description:
      "Application e-commerce avec intégration paiement sécurisé, conformité PCI-DSS et protection contre la fraude.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    github: "https://github.com",
  },
  {
    id: "network-monitor",
    title: "Network Monitor",
    description:
      "Dashboard de monitoring réseau en temps réel avec alertes, visualisation de trafic et détection d'anomalies.",
    technologies: ["TypeScript", "WebSocket", "D3.js", "Redis"],
    github: "https://github.com",
  },
  {
    id: "portfolio-v2",
    title: "Portfolio V2",
    description:
      "Ce portfolio ! Développé avec Next.js, Tailwind CSS, GSAP et MDX pour un rendu premium et une architecture propre.",
    technologies: ["Next.js", "Tailwind CSS", "GSAP", "MDX"],
    github: "https://github.com",
  },
];
