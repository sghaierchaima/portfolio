import SectionTitle from "./SectionTitle";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionTitle title="Certifications" />

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
}
