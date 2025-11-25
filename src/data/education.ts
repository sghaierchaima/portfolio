export interface Edu {
  diploma: string;
  school: string;
  place: string;
  period: string;
  yearBadge?: string;  // ex: 2018
  icon?: string;       // icône bootstrap
  desc?: string;
}

export const education: Edu[] = [
  {
    diploma: "Cycle Ingénieur en Informatique",
    school: "ESPRIM",
    place: "Al Munastir, Tunisie",
    period: "Depuis Septembre 2023",
    icon: "mortarboard",
    desc: "Spécialisation développement web et mobile.",
  },
  {
    diploma: "Licence en Technologies de l'Informatique",
    school: "ISET Medenine",
    place: "Medenine, Tunisie",
    period: "Septembre 2019 – Juin 2022",
    icon: "book",
    desc: "Développement des Systèmes d'Information.",
  },
  {
    diploma: "Baccalauréat en Informatique",
    school: "Abou El Kacem El Chebbi",
    place: "Ksour Essef, Mahdia",
    period: "",
    yearBadge: "2018",
    icon: "award",
  },
];
