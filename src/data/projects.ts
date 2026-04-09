export type ProjectCategory = "Infrastructure" | "Cyber_Offense" | "Secure_Dev" | "Automation";
export type ProjectStatus = "SIMULATION" | "LAB" | "PRODUCTION" | "UNDER_AUDIT";

export interface Project {
  id: string;
  idCode: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tier: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
  details?: {
    challenge: string;
    architecture: string;
    features: string[];
    securityOutcome: string;
    metrics: string[];
    threatLandscape?: string;
    mitigationStrategy?: string;
    auditHighlights?: string[];
  };
}

export const projects: Project[] = [
  // --- Infrastructure & Network ---
  {
    id: "ams-network-simulation",
    idCode: "#PRJ-NET-001",
    category: "Infrastructure",
    status: "SIMULATION",
    tier: "TIER-2",
    title: "Simulation Réseau AMS",
    description: "Conception et simulation d'une infrastructure réseau multi-sites sécurisée.",
    technologies: ["Cisco Packet Tracer", "VLAN", "OSPF (MD5)", "DMZ", "VPN/CHAP"],
    featured: true,
    details: {
      challenge: "Concevoir une infrastructure réseau robuste capable de supporter une entreprise multi-sites tout en garantissant l'isolement des services critiques.",
      architecture: "Implémentation d'une architecture hiérarchique avec routage OSPF authentifié (MD5), VLANs segmentés et une zone DMZ pour les services publics.",
      features: ["Routage dynamique OSPF", "Segmentation VLAN L2/L3", "Accès WAN sécurisé via PPP/CHAP", "Serveurs NTP et TFTP centralisés"],
      securityOutcome: "Isolation complète des flux inter-services et authentification des mises à jour de routage pour prévenir le détournement de trafic.",
      metrics: ["Disponibilité théorique 99.9%", "Zéro collision réseau détectée", "Temps de convergence < 2s"],
    }
  },
  {
    id: "suricata-ids-ips",
    idCode: "#PRJ-NET-002",
    category: "Infrastructure",
    status: "PRODUCTION",
    tier: "TIER-1",
    title: "Système IDS/IPS Suricata",
    description: "Déploiement d'une sonde de détection d'intrusion avec analyse de paquets en temps réel.",
    technologies: ["Suricata", "Linux", "Packet Analysis", "Inbound-Filtering"],
    details: {
      challenge: "Surveiller et bloquer les tentatives d'intrusion sur un réseau local tout en minimisant les faux positifs.",
      architecture: "Déploiement de Suricata en mode IPS (Inline) sur une Gateway Linux, configuré avec des jeux de règles personnalisés.",
      features: ["Analyse protocolaire profonde", "Détection de signatures connues", "Alertes en temps réel via logs unifiés", "Auto-drop des paquets malveillants"],
      securityOutcome: "Identification et blocage immédiat de 95% des tentatives de scan Nmap et d'attaques par force brute.",
      metrics: ["Analyse 1Gbps sans latence", "0.5% de faux positifs", "Alertes traitées en < 100ms"],
    }
  },
  {
    id: "openvpn-gate",
    idCode: "#PRJ-NET-003",
    category: "Infrastructure",
    status: "PRODUCTION",
    tier: "TIER-1",
    title: "Tunnel VPN Sécurisé",
    description: "Mise en place d'un accès distant durci (OpenVPN) avec chiffrement bout en bout.",
    technologies: ["OpenVPN", "RSA/AES-256", "Secure-Access"],
    details: {
      challenge: "Fournir un accès distant sécurisé aux ressources internes pour des collaborateurs nomades via un canal chiffré indéchiffrable.",
      architecture: "Serveur OpenVPN durci utilisant une PKI personnalisée et des certificats RSA 4096 bits avec chiffrement des données AES-256-GCM.",
      features: ["Authentification double facteur simulée", "Gestion stricte des certificats clients", "Logs d'accès centralisés", "Compression LZO pour performance"],
      securityOutcome: "Protection totale contre les attaques Man-in-the-Middle et interception de données en transit.",
      metrics: ["Chiffrement AES-256", "Clés RSA 4096 bits", "Stabilité de connexion 100%"],
    }
  },

  // --- Cyber Offense & Audit ---
  {
    id: "network-pentest-labs",
    idCode: "#PRJ-SEC-002",
    category: "Cyber_Offense",
    status: "LAB",
    tier: "TIER-3",
    title: "Pentesting Network & Web",
    description: "Tests d'intrusion sur environnements contrôlés : énumération, exploitation et post-exploitation.",
    technologies: ["Nmap", "Nikto", "Metasploit", "Burp Suite"],
    details: {
      challenge: "Simuler des attaques réelles pour identifier les chemins de compromission dans des réseaux d'entreprise.",
      architecture: "Environnement de laboratoire isolé comprenant des serveurs vulnérables, des bases de données et des postes clients.",
      features: ["Reconnaissance réseau avancée", "Exploitation de services obsolètes", "Privilege Escalation (Linux/Win)", "Persistance contrôlée"],
      securityOutcome: "Démonstration de l'importance du patch management et du durcissement des configurations par défaut.",
      metrics: ["Root/Admin obtenu 5/5", "Pivoting réseau réussi", "Evasion d'AV basique"],
    }
  },
  {
    id: "thm-htb-labs",
    idCode: "#PRJ-SEC-003",
    category: "Cyber_Offense",
    status: "LAB",
    tier: "TIER-3",
    title: "Labs (THM / HTB)",
    description: "Challenges CTF et résolution de labs pratiques en cybersécurité offensive.",
    technologies: ["TryHackMe", "HackTheBox", "Active Directory", "Reverse-Shell"],
    details: {
      challenge: "Se maintenir à jour sur les techniques d'exploitation les plus récentes via des plateformes de référence.",
      architecture: "Accès à des infrastructures virtuelles complexes simulant des environnements Active Directory et Web Apps réels.",
      features: ["Résolution de machines Linux/Windows", "Attack & Defense CTFs", "Analyse de binaires", "Exploitation de failles logiques"],
      securityOutcome: "Acquisition de compétences pointues en énumération et exploitation de services système.",
      metrics: ["Top 5% TryHackMe", "20+ machines résolues", "Top 10% HackTheBox"],
    }
  },

  // --- Secure Development & automation ---
  {
    id: "iua-management-system",
    idCode: "#PRJ-DEV-001",
    category: "Secure_Dev",
    status: "PRODUCTION",
    tier: "TIER-1",
    title: "Gestion Universitaire IUA",
    description: "Système complet de gestion académique (emplois du temps, salles) pour l'IUA.",
    technologies: ["PHP", "SQL", "Relational-DB", "Logic-Management"],
    details: {
      challenge: "Informatiser la gestion complexe des emplois du temps et des ressources d'une université.",
      architecture: "Application Web monolithique MVC avec base de données relationnelle hautement normalisée.",
      features: ["Gestion des conflits de salles", "Interface Administration/Etudiant", "Exports PDF automatiques", "Moteur de recherche filtrable"],
      securityOutcome: "Mise en place de contrôles d'accès basés sur les rôles (RBAC) et protection des données sensibles.",
      metrics: ["1000+ étudiants gérés", "Réduction erreur planning 90%", "Temps de réponse < 50ms"],
    }
  },
  {
    id: "ecommerce-security-evolution",
    idCode: "#PRJ-DEV-002",
    category: "Secure_Dev",
    status: "UNDER_AUDIT",
    tier: "TIER-2",
    title: "E-Commerce (Secured)",
    description: "Évolution d'une plateforme d'achat avec intégration de PDO et protection contre les injections.",
    technologies: ["PHP (PDO)", "Bootstrap", "MySQL", "Input-Sanitization"],
    featured: true,
    details: {
      challenge: "Sécuriser une plateforme e-commerce vulnérable aux injections SQL tout en améliorant l'expérience utilisateur.",
      architecture: "Transition d'une architecture PHP legacy vers une architecture sécurisée utilisant PDO et les requêtes préparées.",
      features: ["Tunnel d'achat fluide", "Gestion de panier dynamique", "Sanitisation globale des inputs", "Password Hashing (Bcrypt)"],
      securityOutcome: "Élimination totale des vulnérabilités d'injection SQL et amélioration de la gestion des sessions utilisateur.",
      metrics: ["SQL Injection Résistance 100%", "Temps de chargement -30%", "Code-Source audité"],
    }
  },
  {
    id: "cklabs-portfolio-v2",
    idCode: "#PRJ-DEV-003",
    category: "Secure_Dev",
    status: "PRODUCTION",
    tier: "TIER-1",
    title: "CKLabs Portfolio V2",
    description: "Architecture Next.js haute performance avec design 'Cyber-Premium' et animations GSAP.",
    technologies: ["Next.js", "TailwindCSS v4", "GSAP", "TypeScript"],
    featured: true,
    details: {
      challenge: "Créer une identité numérique forte alliant esthétique premium, performances SEO et accessibilité.",
      architecture: "Stack moderne basée sur Next.js 15 (App Router), Tailwind CSS v4 pour le style et GSAP pour les micro-interactions.",
      features: ["Interface Cyber-Premium réactive", "Déploiement CI/CD Vercel", "Animations GSAP haut de gamme", "Analyse de métadonnées SEO"],
      securityOutcome: "Score de sécurité Lighthouse optimal et headers HTTP durcis (HSTS, CSP).",
      metrics: ["Score Lighthouse 100/100", "LCP < 1.0s", "Zéro erreur TypeScript"],
    }
  },
  {
    id: "python-automation-scripts",
    idCode: "#PRJ-DEV-004",
    category: "Automation",
    status: "PRODUCTION",
    tier: "TIER-2",
    title: "Automation & Sec-Scripts",
    description: "Scripts d'automatisation de tâches web, manipulation de données et surveillance.",
    technologies: ["Python", "Selenium", "Pandas", "Task-Automation"],
    details: {
      challenge: "Automatiser des flux de travail répétitifs et fastidieux pour gagner en productivité et précision.",
      architecture: "Collection de scripts Python modulaires utilisant Selenium pour le web et Pandas pour l'analyse de données.",
      features: ["Scraping de données sécurisé", "Nettoyage automatique de datasets", "Génération de rapports Excel/PDF", "Monitoring de changements Web"],
      securityOutcome: "Gestion sécurisée des credentials via variables d'environnement et limitation des rate-limits.",
      metrics: ["Gain de temps 80%", "Traitement 10k+ lignes/sec", "Precision 99.9%"],
    }
  },
];
