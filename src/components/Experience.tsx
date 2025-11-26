// src/components/Experience.tsx
import React from "react";
import type { Lang } from "../lang";

type ExpCardProps = {
  side?: "left" | "right";
  title: string;
  org: string;
  date: string;
  place: string;
  bullets?: string[];
  tags?: string[];
};

const ExpCard: React.FC<ExpCardProps> = ({
  side = "left",
  title,
  org,
  date,
  place,
  bullets = [],
  tags = [],
}) => {
  return (
    <div className={`exp-card ${side}`}>
      <div className="card-soft p-4 p-md-5 h-100">
        <div className="d-flex align-items-center gap-3 mb-2">
          <div className="icon-bubble">
            <i className="bi bi-briefcase" />
          </div>
          <div>
            <h5 className="mb-0">{title}</h5>
            <div className="text-teal fw-semibold">{org}</div>
          </div>
        </div>

        <div className="text-muted small mb-3">
          <i className="bi bi-calendar-week me-2" />
          {date}
          <span className="mx-2">•</span>
          <i className="bi bi-geo-alt me-2" />
          {place}
        </div>

        <ul className="mb-3">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="d-flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span key={i} className="pill">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

type ExperienceProps = {
  lang: Lang;
};

const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const title =
    lang === "fr" ? "Expérience Professionnelle" : "Professional Experience";

  const cards: ExpCardProps[] =
    lang === "fr"
      ? [
          {
            side: "left",
            title: "Stage – Développement Application Mobile",
            org: "ESPRIM",
            date: "Juillet 2025 – Août 2025",
            place: "Al Munastir, Tunisie",
            bullets: [
              "Développement d’une application mobile avec Flutter",
              "Backend Spring Boot & MongoDB",
              "Authentification sécurisée JWT",
              "Modules : annonces, emplois du temps, portail étudiant",
            ],
            tags: ["Flutter", "Spring Boot", "MongoDB", "JWT"],
          },
          {
            side: "right",
            title: "Projet de Fin d’étude – Plateforme E-commerce",
            org: "SOTUDEV",
            date: "Février 2022 – Mai 2022",
            place: "Medenine, Tunisie",
            bullets: [
              "Plateforme e-commerce pour restaurants",
              "Géolocalisation, menus, panier, commande, paiement, livraison",
              "Architecture full-stack complète",
            ],
            tags: ["Angular", "Spring Boot", "MySQL"],
          },
          {
            side: "left",
            title: "Stage – Développement Site Vitrine",
            org: "Société Sghaier",
            date: "Septembre 2021 – Octobre 2021",
            place: "Ksour Essef, Mahdia",
            bullets: [
              "Création d'un site vitrine pour pièces détachées automobiles",
              "Catalogue, moteur de recherche, formulaire de contact",
              "Développement front-end et back-end",
            ],
            tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
          },
        ]
      : [
          {
            side: "left",
            title: "Internship – Mobile Application Development",
            org: "ESPRIM",
            date: "July 2025 – August 2025",
            place: "Al Munastir, Tunisia",
            bullets: [
              "Developed a mobile application using Flutter",
              "Backend with Spring Boot & MongoDB",
              "Secure authentication with JWT",
              "Modules: announcements, timetables, student portal",
            ],
            tags: ["Flutter", "Spring Boot", "MongoDB", "JWT"],
          },
          {
            side: "right",
            title: "Final-Year Project – E-commerce Platform",
            org: "SOTUDEV",
            date: "February 2022 – May 2022",
            place: "Medenine, Tunisia",
            bullets: [
              "E-commerce platform for restaurants",
              "Geolocation, menus, cart, orders, payment, delivery",
              "Full-stack architecture",
            ],
            tags: ["Angular", "Spring Boot", "MySQL"],
          },
          {
            side: "left",
            title: "Internship – Showcase Website",
            org: "Sghaier Company",
            date: "September 2021 – October 2021",
            place: "Ksour Essef, Mahdia",
            bullets: [
              "Created a showcase website for auto parts",
              "Catalog, search engine, contact form",
              "Front-end and back-end development",
            ],
            tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
          },
        ];

  return (
    <section id="exp" className="py-5">
      <div className="container">
        <h2 className="section-title text-center">{title}</h2>

        <div className="timeline mt-4">
          {cards.map((c, i) => (
            <ExpCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
