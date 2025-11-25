import React from "react";

type PillProps = {
  children: React.ReactNode;
};

const Pill: React.FC<PillProps> = ({ children }) => (
  <span className="pill">{children}</span>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-5 section-bg">
      <div className="container">
        <h2 className="section-title text-center">
          Compétences & Certifications
        </h2>

        <div className="row g-4 mt-1">
          {/* Langages de Programmation */}
          <div className="col-lg-6">
            <div className="card-soft h-100 p-4 p-md-5">
              <div className="icon-bubble gradient-blue mb-2">
                <i className="bi bi-code-slash" />
              </div>
              <h5 className="mb-3">Langages de Programmation</h5>
              <div className="d-flex flex-wrap gap-2">
                <Pill>JavaScript</Pill>
                <Pill>TypeScript</Pill>
                <Pill>Java</Pill>
                <Pill>Python</Pill>
                <Pill>PHP</Pill>
                <Pill>HTML/CSS</Pill>
                <Pill>C</Pill>
              </div>
            </div>
          </div>

          {/* Frameworks & Bibliothèques */}
          <div className="col-lg-6">
            <div className="card-soft h-100 p-4 p-md-5">
              <div className="icon-bubble gradient-indigo mb-2">
                <i className="bi bi-layers" />
              </div>
              <h5 className="mb-3">Frameworks & Bibliothèques</h5>
              <div className="d-flex flex-wrap gap-2">
                <Pill>React</Pill>
                <Pill>Angular</Pill>
                <Pill>Node.js</Pill>
                <Pill>Spring Boot</Pill>
                <Pill>Flutter</Pill>
                <Pill>Bootstrap</Pill>
                <Pill>JEE</Pill>
                <Pill>Laravel</Pill>
              </div>
            </div>
          </div>

          {/* Bases de Données */}
          <div className="col-lg-6">
            <div className="card-soft h-100 p-4 p-md-5">
              <div className="icon-bubble gradient-purple mb-2">
                <i className="bi bi-hdd-network" />
              </div>
              <h5 className="mb-3">Bases de Données</h5>
              <div className="d-flex flex-wrap gap-2">
                <Pill>MySQL</Pill>
                <Pill>MongoDB</Pill>
                <Pill>Oracle</Pill>
                <Pill>SQL</Pill>
                <Pill>PL/SQL</Pill>
              </div>
            </div>
          </div>

          {/* Outils & Technologies */}
          <div className="col-lg-6">
            <div className="card-soft h-100 p-4 p-md-5">
              <div className="icon-bubble gradient-green mb-2">
                <i className="bi bi-phone" />
              </div>
              <h5 className="mb-3">Outils & Technologies</h5>
              <div className="d-flex flex-wrap gap-2">
                <Pill>Git</Pill>
                <Pill>REST API</Pill>
                <Pill>UML</Pill>
                <Pill>Selenium</Pill>
                <Pill>Scikit-learn</Pill>
                <Pill>JWT</Pill>
                <Pill>Vite</Pill>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        
      </div>
    </section>
  );
};

export default Skills;
