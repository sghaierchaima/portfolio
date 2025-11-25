export interface Experience {
  title: string;
  org: string;
  date: string;
  place: string;
  bullets: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    title:"Stage - Développement Application Mobile",
    org:"ESPRIM",
    date:"Juillet 2025 – Août 2025",
    place:"Al Munastir, Tunisie",
    bullets:[
      "Développement d'une application mobile avec Flutter",
      "Backend : Spring Boot & MongoDB",
      "Authentification sécurisée JWT",
      "Modules : annonces, emplois du temps, portail étudiant"
    ],
    tech:["Flutter","Spring Boot","MongoDB","JWT"]
  },
  {
    title:"Projet de Fin d'Année - Plateforme E-commerce",
    org:"SOTUDEV",
    date:"Février 2022 – Mai 2022",
    place:"Medenine, Tunisie",
    bullets:[
      "Plateforme e-commerce pour restaurants",
      "Géolocalisation, menus, panier, commande, paiement, livraison",
      "Architecture full-stack complète"
    ],
    tech:["Angular","Spring Boot","MySQL"]
  },
  {
    title:"Stage - Développement Site Vitrine",
    org:"Société Sghaier",
    date:"Septembre 2021 – Octobre 2021",
    place:"Ksour essef, Mahdia",
    bullets:[
      "Création d'un site vitrine pour pièces détachées automobiles",
      "Catalogue, moteur de recherche, formulaire de contact",
      "Développement front-end et back-end"
    ],
    tech:["HTML","CSS","JavaScript","PHP","MySQL"]
  },
  {
    title:"Stage Industriel",
    org:"SOTEMAIL",
    date:"Février 2021",
    place:"Essouassi, Al Jamm, Tunisie",
    bullets:[
      "Stage de formation industrielle",
      "Découverte du milieu professionnel",
      "Observation des processus de développement"
    ],
    tech:[]
  }
];
