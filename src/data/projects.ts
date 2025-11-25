export interface Project {
  title: string;
  badge: string;       // catégorie courte
  year: string;
  description: string;
  tech: string[];
  icon?: string;       // nom d’icône bootstrap (optionnel)
}

export const projects: Project[] = [
  {
    title: "CampTun",
    badge: "Application Web & Mobile",
    year: "2025",
    description:
      "Application dédiée à la réservation de spots de camping en Tunisie : recherche par localisation, réservation en ligne, suggestions personnalisées.",
    tech: ["Flutter", "Angular", "Spring Boot", "MySQL", "REST API"],
    icon: "tent",
  },
  {
    title: "Matchy Look",
    badge: "E-commerce & IA",
    year: "2024",
    description:
      "Boutique de vêtements avec essayage virtuel via avatar 3D personnalisé à partir des mensurations de l’utilisateur.",
    tech: ["Laravel", "MySQL", "JavaScript", "HTML/CSS", "3D Avatar API"],
    icon: "person-standing-dress",
  },
  {
    title: "MeetingApp",
    badge: "Application Web Full-Stack",
    year: "2024",
    description:
      "Gestion de réunions : créneaux multiples, vote, présence, stockage MongoDB, invitations email.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: "calendar2-week",
  },
  {
    title: "Web Scraping & Comparateur",
    badge: "Data Science",
    year: "2023",
    description:
      "Extraction automatique d’infos produits (prix, image) d’Amazon/eBay avec Selenium. Interface pour trier par prix.",
    tech: ["Python", "Selenium", "MongoDB", "Web Scraping"],
    icon: "search",
  },
  {
    title: "Prédiction Prix Immobilier",
    badge: "Machine Learning",
    year: "2023",
    description:
      "Prédiction de prix immobiliers (Scikit-learn) + interface Streamlit et rapports téléchargeables.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Machine Learning"],
    icon: "house",
  },
  {
    title: "Plateforme E-commerce Restaurant",
    badge: "Web Full-Stack",
    year: "2022",
    description:
      "E-commerce pour restaurants : géolocalisation, panier, commandes, paiement en ligne et livraison.",
    tech: ["Angular", "Spring Boot", "MySQL"],
    icon: "emoji-smile", // remplace si tu veux
  },
];
