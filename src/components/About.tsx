// src/components/About.tsx
import React from "react";
import type { Lang } from "../lang";

type AboutProps = { lang: Lang };

const texts = {
  fr: {
    title: "À Propos de Moi",
    cards: {
      formation: {
        title: "Formation",
        text: "Cycle Ingénieur en Informatique à ESPRIM",
      },
      exp: {
        title: "Expérience",
        text: "Développement Full-Stack Web & Mobile",
      },
      objectif: {
        title: "Objectif",
        text: "Stage PFE en Technologies de l’Information",
      },
      langues: {
        title: "Langues",
        text: "Arabe, Français, Anglais",
      },
    },
    p1: "Passionnée par les technologies et l’innovation, je suis une développeuse full-stack avec une solide expérience dans la création d’applications web et mobiles modernes.",
    p2: "Expertise en Angular, React, Flutter, Spring Boot et bases de données (SQL, MongoDB). Je conçois des solutions de bout en bout : UI, APIs, sécurité, et architecture backend. Actuellement en recherche d’un stage de fin d’études, je souhaite contribuer à des projets innovants dans un environnement stimulant.",
  },
  en: {
    title: "About Me",
    cards: {
      formation: {
        title: "Education",
        text: "Engineering cycle in Computer Science at ESPRIM",
      },
      exp: {
        title: "Experience",
        text: "Full-Stack Web & Mobile Development",
      },
      objectif: {
        title: "Goal",
        text: "Final-year internship in Information Technologies",
      },
      langues: {
        title: "Languages",
        text: "Arabic, French, English",
      },
    },
    p1: "Passionate about technology and innovation, I am a full-stack developer with solid experience in building modern web and mobile applications.",
    p2: "Skilled in Angular, React, Flutter, Spring Boot and databases (SQL, MongoDB). I design end-to-end solutions: UI, APIs, security, and backend architecture. Currently looking for a final-year internship, I want to contribute to innovative projects in a stimulating environment.",
  },
};

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = texts[lang];

  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="section-title text-center">{t.title}</h2>

        <div className="row g-4 mt-1">
          <div className="col-md-3">
            <div className="card-soft h-100 p-4">
              <div className="icon-bubble">
                <i className="bi bi-mortarboard" />
              </div>
              <h6 className="mb-1">{t.cards.formation.title}</h6>
              <p className="mb-0 text-muted">{t.cards.formation.text}</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-soft h-100 p-4">
              <div className="icon-bubble">
                <i className="bi bi-bag" />
              </div>
              <h6 className="mb-1">{t.cards.exp.title}</h6>
              <p className="mb-0 text-muted">{t.cards.exp.text}</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-soft h-100 p-4">
              <div className="icon-bubble">
                <i className="bi bi-bullseye" />
              </div>
              <h6 className="mb-1">{t.cards.objectif.title}</h6>
              <p className="mb-0 text-muted">{t.cards.objectif.text}</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-soft h-100 p-4">
              <div className="icon-bubble">
                <i className="bi bi-translate" />
              </div>
              <h6 className="mb-1">{t.cards.langues.title}</h6>
              <p className="mb-0 text-muted">{t.cards.langues.text}</p>
            </div>
          </div>
        </div>

        <div className="card-soft p-4 p-md-5 mt-4">
          <p className="mb-2">{t.p1}</p>
          <p className="mb-0">{t.p2}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
