// src/components/Footer.tsx
import React from "react";
import type { Lang } from "../lang";

type FooterProps = {
  lang: Lang;
};

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const year = new Date().getFullYear();

  const text =
    lang === "fr"
      ? {
          built: "Développé par",
          rights: "Tous droits réservés",
        }
      : {
          built: "Built by",
          rights: "All rights reserved",
        };

  return (
    <footer className="footer-wrap">
      <div className="container text-center py-4 py-md-5">
        <div className="footer-sep mx-auto" />
        <p className="mb-1 text-white-50">
          {text.built}{" "}
          <span className="text-white">Chaima Sghaier</span>
        </p>
        <small className="text-white-50">
          {year} — {text.rights}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
