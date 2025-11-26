// src/components/Hero.tsx
import React from "react";
import type { Lang } from "../lang";
import photo from "../assets/imagecv.png";

const heroTexts: Record<
  Lang,
  {
    job: string;
    paragraph: string;
    location: string;
    contact: string;
  }
> = {
  fr: {
    job: "Ingénieure Informatique | Développeuse Full-Stack",
    paragraph:
      "Étudiante en dernière année de Génie Logiciel à ESPRIM, passionnée par le développement web et mobile full-stack. Je recherche un stage de fin d’études (PFE) en Technologies de l’Information pour appliquer mes compétences et contribuer à des projets innovants.",
    location: "Mahdia, Tunisie",
    contact: "Contact",
  },
  en: {
    job: "Computer Engineer | Full-Stack Developer",
    paragraph:
      "Final-year Software Engineering student at ESPRIM, passionate about full-stack web and mobile development. I am looking for a final-year internship to apply my skills and contribute to innovative projects.",
    location: "Mahdia, Tunisia",
    contact: "Contact",
  },
};

type HeroProps = {
  lang: Lang;
};

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = heroTexts[lang];

  return (
    <section id="hero" className="hero-wrap py-5">
      <div className="container text-center py-4 py-lg-5">
        <div className="avatar shadow-soft mx-auto mb-4">
          <img src={photo} alt="Chaima Sghaier" className="avatar-img" />
        </div>

        <h1 className="display-4 fw-bolder mb-2">
          Chaima <span className="text-teal">Sghaier</span>
        </h1>

        <p className="lead text-muted mb-4">{t.job}</p>

        <p className="mx-auto hero-sublead">{t.paragraph}</p>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
          <span className="chip">
            <i className="bi bi-geo-alt" /> {t.location}
          </span>
          <span className="chip">
            <i className="bi bi-telephone" /> +216 93 582 719
          </span>
          <span className="chip">
            <i className="bi bi-envelope" /> Chaima.Sghaier@esprim.tn
          </span>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <a
            className="btn btn-teal"
            href="https://github.com/sghaierchaima"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github me-2" />
            GitHub
          </a>
          <a
            className="btn btn-outline-teal"
            href="https://www.linkedin.com/in/chaima-sghaier-4a8bab305/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin me-2" />
            LinkedIn
          </a>
          <a className="btn btn-light border" href="#contact">
            <i className="bi bi-chat-dots me-2" />
            {t.contact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
