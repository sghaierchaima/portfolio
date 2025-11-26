// src/components/Navbar.tsx
import React from "react";
import type { Lang } from "../lang";

type NavbarProps = {
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
};

const texts = {
  fr: {
    home: "Accueil",
    about: "À Propos",
    skills: "Compétences",
    exp: "Expérience",
    contact: "Contact",
    project:"Projets"
  },
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    exp: "Experience",
    contact: "Contact",
    project:"Projects"
  },
};

const Navbar: React.FC<NavbarProps> = ({ lang, onChangeLang }) => {
  const t = texts[lang];

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom">
      <div className="container">
        <a className="navbar-brand fw-bold text-teal" href="#hero">
          CS
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-lg-3 align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#hero">
                {t.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                {t.about}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                {t.skills}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#exp">
                {t.exp}
              </a>
            </li>
              <li className="nav-item">
              <a className="nav-link" href="#projects">
                {t.project}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                {t.contact}
              </a>
            </li>

            {/* Bouton FR / EN global */}
            <li className="nav-item ms-lg-3 d-flex gap-2">
              <button
                className={`btn btn-sm ${
                  lang === "fr" ? "btn-teal" : "btn-outline-teal"
                }`}
                onClick={() => onChangeLang("fr")}
              >
                FR
              </button>
              <button
                className={`btn btn-sm ${
                  lang === "en" ? "btn-teal" : "btn-outline-teal"
                }`}
                onClick={() => onChangeLang("en")}
              >
                EN
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
