import imagecv from "../assets/imagecv.png";
export default function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom">
      <div className="container">
        
        <a className="navbar-brand fw-bold text-teal" href="#hero">CS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-lg-3">
            <li className="nav-item"><a className="nav-link" href="#hero">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">À Propos</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Compétences</a></li>
            <li className="nav-item"><a className="nav-link" href="#exp">Expérience</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
