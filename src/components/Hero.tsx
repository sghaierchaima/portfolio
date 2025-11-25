import photo from "../assets/imagecv.png";
export default function Hero() {
  return (
    <section id="hero" className="hero-wrap py-5">
      <div className="container text-center py-4 py-lg-5">
        <div className="avatar shadow-soft mx-auto mb-4">
  <img src={photo} alt="Chaima Sghaier" className="avatar-img" />
</div>
        <h1 className="display-4 fw-bolder mb-2">
          Chaima <span className="text-teal">Sghaier</span>
        </h1>

        <p className="lead text-muted mb-4">
          Ingénieure Informatique | Développeuse Full-Stack
        </p>

        <p className="mx-auto hero-sublead">
          Étudiante en dernière année de Génie Logiciel à <b>ESPRIM</b>, passionnée par le
          développement web et mobile full-stack. Je recherche un <b>stage de fin d’études (PFE)</b>
          en Technologies de l’Information pour appliquer mes compétences et contribuer à des
          projets innovants.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
          <span className="chip"><i className="bi bi-geo-alt"></i> Mahdia, Tunisie</span>
          <span className="chip"><i className="bi bi-telephone"></i> +216 93 582 719</span>
          <span className="chip"><i className="bi bi-envelope"></i> Chaima.Sghaier@esprim.tn</span>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <a className="btn btn-teal" href="https://github.com/sghaierchaima" target="_blank" rel="noreferrer">
            <i className="bi bi-github me-2"></i>GitHub
          </a>
          <a className="btn btn-outline-teal" href="https://www.linkedin.com/in/chaima-sghaier-4a8bab305/" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin me-2"></i>LinkedIn
          </a>
          <a className="btn btn-light border" href="#contact">
            <i className="bi bi-chat-dots me-2"></i>Contact
          </a>
        </div>
      </div>
    </section>
  );
}
