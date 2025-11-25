import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <div className="container text-center py-4 py-md-5">
        <div className="footer-sep mx-auto" />
        <p className="mb-1 text-white-50">
          Développé avec <span className="text-white">React</span> et{" "}
          <span className="text-white">Tailwind CSS</span> par{" "}
          <span className="text-white">Chaima Sghaier</span>
        </p>
        <small className="text-white-50">{year} — Tous droits réservés</small>
      </div>
    </footer>
  );
};

export default Footer;
