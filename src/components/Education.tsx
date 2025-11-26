// src/components/Education.tsx
import React from "react";
import type { Lang } from "../lang";

type EduItemProps = {
  icon: React.ReactNode;
  title: string;
  school: string;
  place: string;
  period: string;
  desc: string;
};

const EduItem: React.FC<EduItemProps> = ({
  icon,
  title,
  school,
  place,
  period,
  desc,
}) => {
  return (
    <div className="card-soft p-4 p-md-5 edu-item">
      <div className="d-flex align-items-start gap-3">
        <div className="icon-bubble">{icon}</div>
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h3 className="h3 fw-bolder mb-1">{title}</h3>
              <div className="text-teal fw-semibold">{school}</div>
              <div className="text-muted small">{place}</div>
            </div>
            <span className="pill">{period}</span>
          </div>
          <p className="mb-0 mt-3 text-muted">{desc}</p>
        </div>
      </div>
    </div>
  );
};

type EducationProps = {
  lang: Lang;
};

const Education: React.FC<EducationProps> = ({ lang }) => {
  const title = lang === "fr" ? "Formation Académique" : "Academic Background";

  const items: EduItemProps[] =
    lang === "fr"
      ? [
          {
            icon: <i className="bi bi-mortarboard"></i>,
            title: "Cycle Ingénieur en Informatique",
            school: "ESPRIM",
            place: "Al Munastir, Tunisie",
            period: "Depuis Septembre 2023",
            desc: "Spécialisation en développement web et mobile.",
          },
          {
            icon: <i className="bi bi-book-half"></i>,
            title: "Licence en Technologies de l'Informatique",
            school: "ISET Medenine",
            place: "Medenine, Tunisie",
            period: "Septembre 2019 - Juin 2022",
            desc: "Développement des Systèmes d'Information.",
          },
          {
            icon: <i className="bi bi-award"></i>,
            title: "Baccalauréat en Informatique",
            school: "Abou El Kacem El Chebbi",
            place: "Kssour Essef, Mahdia",
            period: "2018",
            desc: "Série sciences informatiques.",
          },
        ]
      : [
          {
            icon: <i className="bi bi-mortarboard"></i>,
            title: "Computer Engineering Cycle",
            school: "ESPRIM",
            place: "Al Munastir, Tunisia",
            period: "Since September 2023",
            desc: "Specialization in web and mobile development.",
          },
          {
            icon: <i className="bi bi-book-half"></i>,
            title: "Bachelor in IT Technologies",
            school: "ISET Medenine",
            place: "Medenine, Tunisia",
            period: "September 2019 - June 2022",
            desc: "Information Systems Development.",
          },
          {
            icon: <i className="bi bi-award"></i>,
            title: "High School Diploma in Computer Science",
            school: "Abou El Kacem El Chebbi",
            place: "Kssour Essef, Mahdia",
            period: "2018",
            desc: "Computer science track.",
          },
        ];

  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="section-title text-center">{title}</h2>

        <div className="vstack gap-4 mt-1">
          {items.map((e, i) => (
            <EduItem key={i} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
