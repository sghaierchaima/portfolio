// src/components/Projects.tsx
import React, { useState } from "react";
import type { Lang } from "../lang";

// --- Assets CampTun ---
import demoCampTun from "../assets/democamptun.mp4";
import camptunThumb from "../assets/camptun.png";

// --- Assets Matchy Look ---
import matchyLook from "../assets/MatchyLOok.mp4";
import matchyLooki from "../assets/matchyLook.png";

// --- Assets autres projets ---
import estimation from "../assets/estimation.png";
import webscrapping from "../assets/image.png";

// --- Assets MeetingApp (toutes les captures) ---
import accueil from "../assets/accueil.jpeg";
import creer from "../assets/creerR.jpeg";
import dash from "../assets/dashbord.png";
import liste from "../assets/listedeReunionparuser.jpeg";
import listeparticipant from "../assets/listeparticipantparreubion.png";
import login from "../assets/logincntrlsaisir.png";
import mail from "../assets/mailpourmodifiermtps.png";
import modifier from "../assets/ModifierReunion.jpeg";
import nvpasword from "../assets/poursaisirlenvmtps.png";
import rappel from "../assets/rappels.png";
import registre from "../assets/registercntrlsaisir.png";
import reset from "../assets/resetpassword.png";
import stat from "../assets/statistique .png";

import InstaGallery from "./InstaGallery";

// ---------- Petites puces (tags techno) ----------
type TagProps = {
  children: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({ children }) => (
  <span className="pill me-2 mb-2 d-inline-block">{children}</span>
);

// ---------- Card projet ----------
type ProjectCardProps = {
  icon?: React.ReactNode | string;
  year: string;
  title: string;
  subtitle: string;
  desc: string;
  tags?: string[];
  thumbnail?: string; // image affichée dans la card
  videos?: string[]; // vidéos à afficher dans le modal
  images?: string[]; // captures d’écran à afficher dans le modal
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  icon = "⛺",
  year,
  title,
  subtitle,
  desc,
  tags = [],
  thumbnail,
  videos = [],
  images = [],
}) => {
  const [open, setOpen] = useState(false);

  const hasVideos = videos.length > 0;
  const hasImages = images.length > 0;
  const clickable = hasVideos || hasImages;

  return (
    <>
      <div className="col-lg-4">
        <div className="project-card card-soft overflow-hidden h-100">
          {/* ---------- HEAD : image/icône + année ---------- */}
          <div
            className={`project-head ${
              clickable ? "project-head-clickable" : ""
            }`}
            onClick={() => clickable && setOpen(true)}
          >
            <div className="project-media-wrapper">
              {thumbnail ? (
                <img src={thumbnail} alt={title} className="project-thumb" />
              ) : (
                <div className="project-icon">{icon}</div>
              )}

              {hasVideos && (
                <div className="play-overlay">
                  <i className="bi bi-play-circle-fill" />
                </div>
              )}

              {!hasVideos && hasImages && (
                <div className="play-overlay">
                  <i className="bi bi-images" />
                </div>
              )}
            </div>

            {/* badge année en dessous */}
            <div className="project-year-line">
              <span className="year">{year}</span>
            </div>
          </div>

          {/* ---------- BODY ---------- */}
          <div className="p-4 p-md-5">
            <h3 className="h2 fw-bolder mb-2">{title}</h3>
            <div className="text-teal fw-semibold mb-2">
              <i className="bi bi-lightbulb me-2" />
              {subtitle}
            </div>
            <p className="text-muted">{desc}</p>
            <div className="d-flex flex-wrap mt-2">
              {tags.map((t, i) => (
                <Tag key={i}>{t}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MODAL (vidéos + images) ---------- */}
      {open && (
        <div className="modal-backdrop-custom" onClick={() => setOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h4 className="mb-3">{title} – Démos</h4>

            {/* Vidéos */}
            {hasVideos && (
              <>
                <h6 className="mb-2">Vidéos</h6>
                {videos.map((v, i) => (
                  <div key={`vid-${i}`} className="mb-3">
                    <video src={v} controls className="modal-video" />
                  </div>
                ))}
              </>
            )}

            {/* Captures d’écran (galerie style Instagram) */}
            {hasImages && (
              <>
                {hasVideos && <hr className="my-3" />}
                <h6 className="mb-3">Captures d&apos;écran</h6>

                {/* 👉 Galerie Insta avec navigation */}
                <InstaGallery images={images} />
              </>
            )}

            <button
              className="btn btn-danger w-100 mt-3"
              onClick={() => setOpen(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

type ProjectsProps = {
  lang: Lang;
};

// ---------- SECTION LISTE DES PROJETS ----------
const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const sectionTitle =
    lang === "fr" ? "Projets Réalisés" : "Projects Completed";

  const t = {
    camptun: {
      subtitle:
        lang === "fr"
          ? "Application Web & Mobile"
          : "Web & Mobile Application",
      desc:
        lang === "fr"
          ? "Réservation de spots de camping en Tunisie avec recherche, réservation et suggestions personnalisées."
          : "Camping spot booking in Tunisia with search, online reservation and personalized suggestions.",
    },
    matchy: {
      subtitle: lang === "fr" ? "E-commerce & IA" : "E-commerce & AI",
      desc:
        lang === "fr"
          ? "Vente de vêtements avec essayage virtuel (avatar 3D) généré à partir des mensurations via webcam."
          : "Clothing e-shop with virtual try-on using a 3D avatar generated from body measurements via webcam.",
    },
    meeting: {
      subtitle:
        lang === "fr"
          ? "Application Web Full-Stack"
          : "Full-Stack Web Application",
      desc:
        lang === "fr"
          ? "Gestion de réunions : créneaux, vote, suivis de présences, stockage MongoDB et envoi d’invitations."
          : "Meeting management: time slots, voting, attendance tracking, MongoDB storage and email invitations.",
    },
    scraping: {
      subtitle: lang === "fr" ? "Data Science" : "Data Science",
      desc:
        lang === "fr"
          ? "Scraping Amazon/eBay (nom, prix, image) avec Selenium. Interface pour filtrer et trier les produits."
          : "Scraping Amazon/eBay (name, price, image) with Selenium. UI to filter and sort products.",
    },
    house: {
      subtitle: lang === "fr" ? "Machine Learning" : "Machine Learning",
      desc:
        lang === "fr"
          ? "Modèle Scikit-learn avec front Streamlit pour saisir les features, voir les prédictions et générer des rapports PDF."
          : "Scikit-learn model with Streamlit front-end to input features, view predictions and generate PDF reports.",
    },
    resto: {
      subtitle: lang === "fr" ? "Web Full-Stack" : "Full-Stack Web",
      desc:
        lang === "fr"
          ? "Plateforme pour restaurants avec géolocalisation, menus, panier, paiement en ligne et gestion des livraisons."
          : "Restaurant e-commerce platform with geolocation, menus, cart, online payments and delivery management.",
    },
    btnGithub:
      lang === "fr" ? "Voir plus sur GitHub" : "See more on GitHub",
  };

  return (
    <section id="projects" className="py-5 section-bg">
      <div className="container">
        <h2 className="section-title text-center">{sectionTitle}</h2>

        <div className="row g-4 mt-1">
          {/* CampTun : thumbnail + modal vidéo */}
          <ProjectCard
            thumbnail={camptunThumb}
            videos={[demoCampTun]}
            icon="🏕️"
            year="2025"
            title="CampTun"
            subtitle={t.camptun.subtitle}
            desc={t.camptun.desc}
            tags={["Flutter", "Angular", "Spring Boot", "MySQL", "REST API"]}
          />

          {/* Matchy Look : vidéo + image */}
          <ProjectCard
            thumbnail={matchyLooki}
            videos={[matchyLook]}
            icon="👗"
            year="2024"
            title="Matchy Look"
            subtitle={t.matchy.subtitle}
            desc={t.matchy.desc}
            tags={[
              "Laravel",
              "MySQL",
              "JavaScript",
              "HTML/CSS",
              "3D Avatar API",
            ]}
          />

          {/* MeetingApp : toutes les captures */}
          <ProjectCard
            thumbnail={accueil}
            images={[
              accueil,
              creer,
              dash,
              liste,
              listeparticipant,
              login,
              mail,
              modifier,
              nvpasword,
              rappel,
              registre,
              reset,
              stat,
            ]}
            icon="📅"
            year="2024"
            title="MeetingApp"
            subtitle={t.meeting.subtitle}
            desc={t.meeting.desc}
            tags={["React", "Node.js", "MongoDB", "Express"]}
          />
        </div>

        <div className="row g-4 mt-1">
          <ProjectCard
            thumbnail={webscrapping}
            icon="🔍"
            year="2023"
            title="Web Scraping & Comparateur"
            subtitle={t.scraping.subtitle}
            desc={t.scraping.desc}
            tags={["Python", "Selenium", "MongoDB", "Web Scraping"]}
          />

          <ProjectCard
            thumbnail={estimation}
            icon="🏠"
            year="2023"
            title="Prédiction Prix Immobilier"
            subtitle={t.house.subtitle}
            desc={t.house.desc}
            tags={["Python", "Scikit-learn", "Streamlit", "Machine Learning"]}
          />

        
        </div>

        <div className="text-center mt-5">
          <a
            className="btn btn-teal btn-lg rounded-pill px-4"
            href="https://github.com/sghaierchaima"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-box-arrow-up-right me-2" />
            {t.btnGithub}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
