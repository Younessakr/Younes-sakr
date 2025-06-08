import { Experience, Education, Skill, Language, Certification, Project } from '../types';

export const experiences: Experience[] = [
  {
    id: "exp1",
    title: "IT Support Specialist",
    company: "ODIF Maroc",
    period: "Mai 2025 - Présent",
    responsibilities: [
      "Diagnostiquer et résoudre les pannes matérielles et logicielles",
      "Assister les utilisateurs à distance ou sur site",
      "Surveiller les performances du réseau et résoudre les problèmes de connectivité",
      "Configurer les outils collaboratifs"
    ]
  },
  {
    id: "exp2",
    title: "IT Support Specialist",
    company: "Groupe FIKRI CASH",
    period: "Janvier 2024 - Janvier 2025",
    responsibilities: [
      "Gestion et résolution des incidents",
      "Assister les utilisateurs à distance ou sur site",
      "Administration système",
      "Maintenance, administration et sécurisation des équipements IT",
      "Former les utilisateurs sur les bonnes pratiques informatiques",
      "Management de la sécurité informatique"
    ]
  },
  {
    id: "exp3",
    title: "Stage - Service Réseau Informatique",
    company: "AYOUR CONCEPT",
    period: "2023 (7 mois)",
    responsibilities: [
      "Installation, essai et mise à jour des équipements informatiques",
      "Diagnostic et nettoyage des imprimantes",
      "Maintenance, administration et sécurisation des équipements IT",
      "Résolution des incidents",
      "Installation et configuration des pointeuses, contrôleurs d'accès et standards téléphoniques",
      "Récupération des données et installation des logiciels"
    ]
  },
  {
    id: "exp4",
    title: "Opérateur de Saisie",
    company: "HARMONY TECHNOLOGY",
    period: "2023 (4 mois)",
    responsibilities: [
      "Saisie de données dans la base de données",
      "Classement et organisation des données",
      "Étiquette antivol"
    ]
  },
  {
    id: "exp5",
    title: "Stage - Service Informatique",
    company: "AGANET INFO",
    period: "2020 (1 mois)",
    responsibilities: [
      "Installation et mise à jour des équipements informatiques (ordinateurs et logiciels)",
      "Résoudre les problèmes matériels et logiciels",
      "Configuration des routeurs, points d'accès",
      "Sauvegarde des données"
    ]
  }
];

export const skills: Skill[] = [
  // Technical Skills
  { name: "Linux", category: "technical", level: 65 },
  { name: "Windows Server", category: "technical", level: 80 },
  { name: "Cisco", category: "technical", level: 65 },
  { name: "JavaScript (JS)", category: "technical", level: 35 },
  { name: "React Js", category: "technical", level: 37 },
  { name: "Python", category: "technical", level: 32 },
  { name: "HTML", category: "technical", level: 70 },
  { name: "CSS", category: "technical", level: 70 },
  
  // Software Skills
  { name: "Microsoft Office (Excel, Word, Outlook)", category: "software", level: 90 },
  { name: "Ticketing Systems", category: "software", level: 85 },
  
  // Soft Skills
  { name: "Travail en équipe", category: "soft", level: 90 },
  { name: "Résolution de problèmes", category: "soft", level: 85 },
  { name: "Management", category: "soft", level: 80 },
  { name: "Travail sous pression", category: "soft", level: 85 }
];

export const languages: Language[] = [
  { name: "Arabic", level: 95, proficiency: "native" },
  { name: "English", level: 85, proficiency: "proficient" },
  { name: "Français", level: 75, proficiency: "intermediate" },
  { name: "Deutsch", level: 75, proficiency: "intermediate" }
];

export const education: Education[] = [
  {
    id: "edu1",
    degree: "Licence d'Études Fondamentales en Sciences Économiques et Gestion, option Gestion",
    institution: "Faculté des Sciences Juridiques, Économiques et Sociales d'Agadir",
    year: "2023"
  },
  {
    id: "edu2",
    degree: "Diplôme Technicien en Maintenance et Support Informatique et Réseaux",
    institution: "Institut Spécialisé de Technologie Appliquée ISTA Taddart Agadir",
    year: "2021"
  },
  {
    id: "edu3",
    degree: "Baccalauréat en Sciences de la Vie et de la Terre",
    institution: "Lycée Qualifiant Anoual Agadir",
    year: "2019"
  }
];

export const certifications: Certification[] = [
  { 
    title: "Microsoft Office Excel, Word et Word Expert 2016", 
    issuer: "MICROSOFT", 
    date: "2021" 
  },
  { 
    title: "Career Essentials in System Administration", 
    issuer: "MICROSOFT et LINKEDIN", 
    date: "Déc 2024" 
  },
  { 
    title: "Windows Server 2022: Installation and Configuration", 
    issuer: "LINKEDIN", 
    date: "Déc 2024" 
  },
  { 
    title: "IT Help Desk For Beginners", 
    issuer: "LINKEDIN", 
    date: "Jan 2025" 
  },
  { 
    title: "Learning Python", 
    issuer: "LINKEDIN", 
    date: "Jan 2025" 
  },
  { 
    title: "React Js: Create a Web Application", 
    issuer: "ODC AGADIR", 
    date: "Mar 2025" 
  },
  { 
    title: "Boost web development workflows with AI", 
    issuer: "ODC AGADIR", 
    date: "Avr 2025" 
  },
  { 
    title: "E-commerce Design A to Z", 
    issuer: "ODC AGADIR", 
    date: "Avr 2025" 
  }
];

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Network Infrastructure Optimization",
    description: "Complete overhaul of the company's network infrastructure, including cable management, network topology redesign, and performance optimization.",
    technologies: ["Cisco", "Network Management", "Cable Management"],
    beforeImage: "https://images.pexels.com/photos/2194062/pexels-photo-2194062.jpeg",
    afterImage: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    improvements: [
      "Reduced network latency by 40%",
      "Improved cable organization and accessibility",
      "Enhanced network security protocols",
      "Streamlined maintenance procedures"
    ]
  },
  {
    id: "proj2",
    title: "Server Room Modernization",
    description: "Comprehensive server room upgrade focusing on cooling efficiency, power management, and equipment organization.",
    technologies: ["Server Management", "Cooling Systems", "Power Management"],
    beforeImage: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    afterImage: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    improvements: [
      "Reduced power consumption by 30%",
      "Improved cooling efficiency",
      "Better space utilization",
      "Enhanced monitoring systems"
    ]
  },
  {
    id: "proj3",
    title: "Workstation Setup Optimization",
    description: "Redesign of employee workstations to improve ergonomics, cable management, and overall efficiency.",
    technologies: ["Ergonomics", "Cable Management", "Workspace Design"],
    beforeImage: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    afterImage: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    improvements: [
      "Enhanced workspace organization",
      "Improved ergonomics",
      "Better cable management",
      "Increased productivity"
    ]
  }
];

export const navItems = [
  { id: "hero", title: "Accueil" },
  { id: "about", title: "À Propos" },
  { id: "experience", title: "Expérience" },
  { id: "education", title: "Formation" },
  { id: "skills", title: "Compétences" },
  { id: "projects", title: "Projets" },
  { id: "contact", title: "Contact" }
];