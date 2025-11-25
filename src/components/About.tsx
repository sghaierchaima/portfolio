export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="section-title text-center">À Propos de Moi</h2>

        <div className="row g-4 mt-1">
          <div className="col-md-3">
            <div className="card-soft h-100 p-4">
              <div className="icon-bubble"><i className="bi bi-mortarboard"></i></div>
              <h6 className="mb-1">Formation</h6>
              <p className="mb-0 text-muted">Cycle Ingénieur en Informatique à ESPRIM</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-soft h-100 p-4">
              <div className="icon-bubble"><i className="bi bi-bag"></i></div>
              <h6 className="mb-1">Expérience</h6>
              <p className="mb-0 text-muted">Développement Full-Stack Web & Mobile</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-soft h-100 p-4">
              <div className="icon-bubble"><i className="bi bi-bullseye"></i></div>
              <h6 className="mb-1">Objectif</h6>
              <p className="mb-0 text-muted">Stage PFE en Technologies de l’Information</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-soft h-100 p-4">
              <div className="icon-bubble"><i className="bi bi-translate"></i></div>
              <h6 className="mb-1">Langues</h6>
              <p className="mb-0 text-muted">Arabe, Français, Anglais</p>
            </div>
          </div>
        </div>

        <div className="card-soft p-4 p-md-5 mt-4">
          <p className="mb-2">
            Passionnée par les technologies et l’innovation, je suis une développeuse full-stack
            avec une solide expérience dans la création d’applications web et mobiles modernes.
          </p>
          <p className="mb-0">
            Expertise en <b>Angular, React, Flutter, Spring Boot</b> et bases de données
            (<b>SQL, MongoDB</b>). Je conçois des solutions de bout en bout : UI, APIs, sécurité, et
            architecture backend. Actuellement en recherche d’un <b>stage de fin d’études</b>, je
            souhaite contribuer à des projets innovants dans un environnement stimulant.
          </p>
        </div>
      </div>
    </section>
  );
}
