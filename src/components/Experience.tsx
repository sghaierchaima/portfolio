import React from "react";

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

const Experience: React.FC = () => {
  return (
    <section id="exp" className="py-5">
      <div className="container">
        <h2 className="section-title text-center">Expérience Professionnelle</h2>

        <div className="timeline mt-4">
          <ExpCard
            side="left"
            title="Stage – Développement Application Mobile"
            org="ESPRIM"
            date="Juillet 2025 – Août 2025"
            place="Al Munastir, Tunisie"
            bullets={[
              "Développement d’une application mobile avec Flutter",
              "Backend Spring Boot & MongoDB",
              "Authentification sécurisée JWT",
              "Modules : annonces, emplois du temps, portail étudiant",
            ]}
            tags={["Flutter", "Spring Boot", "MongoDB", "JWT"]}
          />

          <ExpCard
            side="right"
            title="Projet de Fin d’Année – Plateforme E-commerce"
            org="SOTUDEV"
            date="Février 2022 – Mai 2022"
            place="Medenine, Tunisie"
            bullets={[
              "Plateforme e-commerce pour restaurants",
              "Géolocalisation, menus, panier, commande, paiement, livraison",
              "Architecture full-stack complète",
            ]}
            tags={["Angular", "Spring Boot", "MySQL"]}
          />
          {/* ajoute d'autres ExpCard ici */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
