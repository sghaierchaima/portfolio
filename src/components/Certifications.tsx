// src/components/Certifications.tsx
import React from "react";
import type { Lang } from "../lang";
import SectionTitle from "./SectionTitle";
import { certifications } from "../data/certifications";

type CertificationsProps = {
  lang: Lang;
};

const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  const title = lang === "fr" ? "Certifications" : "Certifications";
  const subtitle =
    lang === "fr"
      ? "Quelques formations et certifications que j’ai obtenues."
      : "Some of the trainings and certifications I completed.";

  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="row g-3">
          {certifications.map((cert, i) => (
            <div className="col-md-6" key={i}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card-link"
              >
                <div className="cert-card p-3 d-flex align-items-center gap-3">
                  <div className="text-primary fs-3">
                    <i className="bi bi-check2-circle"></i>
                  </div>
                  <h5 className="mb-0">{cert.title}</h5>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
