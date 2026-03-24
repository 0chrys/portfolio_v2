export interface WorkflowStep {
  title: string;
  description: string;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  workflow: WorkflowStep[];
  tools: Tool[];
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    icon: "💻",
    title: "Développement Web & Mobile",
    shortDescription:
      "Création d'applications web et mobiles modernes, performantes et sécurisées avec les dernières technologies.",
    fullDescription:
      "Je conçois des solutions numériques sur mesure, du site vitrine à l'application mobile complexe. Mon expertise couvre le développement Web et Mobile avec une approche 'Security by Design' systématique, garantissant des produits robustes et évolutifs.",
    features: [
      "Applications Web (Next.js)",
      "Applications Mobiles (iOS & Android)",
      "API RESTful & GraphQL sécurisées",
      "Expériences UX/UI fluides & responsives",
    ],
    workflow: [
      {
        title: "Analyse & Conception",
        description: "Définition des besoins, architecture technique et choix technologiques adaptés.",
      },
      {
        title: "Développement Agile",
        description: "Codage itératif avec tests unitaires et intégration continue (CI/CD).",
      },
      {
        title: "Audit de Sécurité",
        description: "Revue de code et tests de sécurité avant chaque mise en production.",
      },
      {
        title: "Déploiement & Support",
        description: "Déploiement sur environnements sécurisés (Vercel, AWS) et maintenance évolutive.",
      },
    ],
    tools: [
      { name: "Next.js", icon: "🌐" },
      { name: "React Native", icon: "📱" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
    deliverables: [
      "Code source documenté",
      "Documentation technique",
      "Guide utilisateur",
      "Rapport de performance & SEO",
    ],
  },
  {
    id: "cybersecurity",
    icon: "🔐",
    title: "Cybersécurité",
    shortDescription:
      "Audit, sécurisation et mise en conformité de vos applications et infrastructure web.",
    fullDescription:
      "Dans un paysage de menaces en constante évolution, je vous aide à protéger vos actifs numériques. De l'audit ponctuel à l'accompagnement SecDevOps complet, je mets en œuvre des stratégies de défense robustes basées sur les standards de l'industrie (OWASP, NIST).",
    features: [
      "Audit de sécurité complet",
      "Sécurisation de sites web",
      "Tests de pénétration",
      "Bonnes pratiques & conformité",
    ],
    workflow: [
      {
        title: "Reconnaissance",
        description: "Identification de la surface d'attaque et des technologies exposées.",
      },
      {
        title: "Analyse des Vulnérabilités",
        description: "Détection des failles (Injection, XSS, Auth) via outils automatisés et manuels.",
      },
      {
        title: "Exploitation Contrôlée",
        description: "Validation de l'impact réel des vulnérabilités découvertes (Pentest).",
      },
      {
        title: "Rapport & Remédiation",
        description: "Livraison d'un rapport détaillé avec plans d'actions prioritaires.",
      },
    ],
    tools: [
      { name: "Burp Suite", icon: "🕷️" },
      { name: "OWASP ZAP", icon: "🛡️" },
      { name: "Nmap", icon: "🔍" },
      { name: "Metasploit", icon: "💀" },
    ],
    deliverables: [
      "Rapport d'audit complet",
      "Preuve de concept (PoC)",
      "Recommandations de sécurité",
      "Attestation de sécurisation",
    ],
  },
];

