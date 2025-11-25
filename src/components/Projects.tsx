// src/components/Projects.tsx
import React, { useState } from "react";
import demoCampTun from "../assets/democamptun.mp4"; // 🎥 vidéo CampTun
import camptunThumb from "../assets/camptun.png";    // 🖼️ image CampTun
import matchyLook from "../assets/MatchyLOok.mp4"; 
import matchyLooki from "../assets/matchyLook.png"; 
import estimation from "../assets/estimation.png"; 
import webscrapping from "../assets/image.png"; 
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
  thumbnail?: string;   // image dans la carte
  videos?: string[];    // vidéos affichées dans le modal
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
}) => {
  const [open, setOpen] = useState(false);
  const hasVideos = videos.length > 0;

  return (
    <>
      <div className="col-lg-4">
        <div className="project-card card-soft overflow-hidden h-100">
          {/* ---------- HEAD : image/icône + année ---------- */}
          <div
            className={`project-head ${
              hasVideos ? "project-head-clickable" : ""
            }`}
            onClick={() => hasVideos && setOpen(true)}
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
            </div>

            {/* badge année SOUS la vignette */}
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

      {/* ---------- MODAL VIDÉOS ---------- */}
      {open && (
        <div className="modal-backdrop-custom" onClick={() => setOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h4 className="mb-3">{title} – Démos vidéo</h4>

            {videos.map((v, i) => (
              <div key={i} className="mb-3">
                <video src={v} controls className="modal-video" />
              </div>
            ))}

            <button
              className="btn btn-danger w-100 mt-2"
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

// ---------- SECTION LISTE DES PROJETS ----------
const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-5 section-bg">
      <div className="container">
        <h2 className="section-title text-center">Projets Réalisés</h2>

        <div className="row g-4 mt-1">
          {/* CampTun : thumbnail + modal vidéo */}
          <ProjectCard
            thumbnail={camptunThumb}
            videos={[demoCampTun]}
            icon="🏕️" // fallback
            year="2025"
            title="CampTun"
            subtitle="Application Web & Mobile"
            desc="Réservation de spots de camping en Tunisie avec recherche, réservation et suggestions personnalisées."
            tags={["Flutter", "Angular", "Spring Boot", "MySQL", "REST API"]}
          />

          <ProjectCard
           thumbnail={matchyLooki}
            videos={[matchyLook]}
            icon="👗"
            year="2024"
            title="Matchy Look"
            subtitle="E-commerce & IA"
            desc="Vente de vêtements avec essayage virtuel (avatar 3D) généré à partir des mensurations via webcam."
            tags={["Laravel", "MySQL", "JavaScript", "HTML/CSS", "3D Avatar API"]}
          />

          <ProjectCard
          
            icon="📅"
            year="2024"
            title="MeetingApp"
            subtitle="Application Web Full-Stack"
            desc="Gestion de réunions : créneaux, vote, suivis de présences, stockage MongoDB et envoi d’invitations."
            tags={["React", "Node.js", "MongoDB", "Express"]}
          />
        </div>

        <div className="row g-4 mt-1">
          <ProjectCard
            thumbnail={webscrapping}
            icon="🔍"
            year="2023"
            title="Web Scraping & Comparateur"
            subtitle="Data Science"
            desc="Scraping Amazon/eBay (nom, prix, image) avec Selenium. Interface pour filtrer et trier les produits."
            tags={["Python", "Selenium", "MongoDB", "Web Scraping"]}
          />

          <ProjectCard
          thumbnail={estimation}
            icon="🏠"
            year="2023"
            title="Prédiction Prix Immobilier"
            subtitle="Machine Learning"
            desc="Modèle Scikit-learn avec front Streamlit pour saisir les features, voir les prédictions et générer des rapports PDF."
            tags={["Python", "Scikit-learn", "Streamlit", "Machine Learning"]}
          />

          <ProjectCard
            icon="🍽️"
            year="2022"
            title="Plateforme E-commerce Restaurant"
            subtitle="Web Full-Stack"
            desc="Plateforme pour restaurants avec géolocalisation, menus, panier, paiement en ligne et gestion des livraisons."
            tags={["Angular", "Spring Boot", "MySQL"]}
          />
        </div>

        <div className="text-center mt-5">
          <a
            className="btn btn-teal btn-lg rounded-pill px-4"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-box-arrow-up-right me-2" />
            Voir plus sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
