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
      "Ingénierie logicielle haute performance avec intégration native de protocoles de sécurité avancés.",
    fullDescription:
      "Expert en architecture logicielle moderne, je conçois des écosystèmes numériques où la performance rencontre la résilience. Mon approche 'Secure-by-Design' garantit que chaque ligne de code est pensée pour résister aux menaces tout en offrant une expérience utilisateur fluide sur tous les supports (Web, iOS, Android).",
    features: [
      "Architectures Microservices (Next.js & NestJS)",
      "Applications Mobiles Cross-Platform (React Native)",
      "Authentification Avancée (JWT, OAuth2, 2FA)",
      "Optimisation Performance & SEO Technique",
    ],
    workflow: [
      {
        title: "Audit & Architecture",
        description: "Modélisation des menaces et définition d'une stack technologique robuste et évolutive.",
      },
      {
        title: "Développement Sécurisé",
        description: "Codage avec validation stricte des entrées et protection contre le top 10 OWASP.",
      },
      {
        title: "Contrôle Qualité & Audit",
        description: "Tests unitaires complets et revue de code focalisée sur la logique métier et la sécurité.",
      },
      {
        title: "Déploiement Durci",
        description: "Mise en production sécurisée avec surveillance des logs et monitoring en temps réel.",
      },
    ],
    tools: [
      { name: "Next.js 15", icon: "⚛️" },
      { name: "TypeScript 5", icon: "📘" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Tailwind v4", icon: "🎨" },
    ],
    deliverables: [
      "Code Source Durci & Documenté",
      "Architecture Système (Diagrammes)",
      "Rapport d'Audit de Sécurité Interne",
      "Optimisation SEO & Metrics Performance",
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

