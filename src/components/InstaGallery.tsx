import React, { useState } from "react";

type InstaGalleryProps = {
  images: string[];
};

const InstaGallery: React.FC<InstaGalleryProps> = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* --- GRID STYLE INSTAGRAM --- */}
      <div className="insta-grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="insta-img"
            alt={`capture ${i + 1}`}
            onClick={() => openModal(i)}
          />
        ))}
      </div>

      {/* --- MODAL PLEIN ÉCRAN --- */}
      {open && (
        <div className="insta-modal" onClick={() => setOpen(false)}>
          {/* bouton fermer */}
          <span
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            ✕
          </span>

          {/* nav gauche */}
          <span
            className="nav-btn nav-left"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ‹
          </span>

          {/* image centrale */}
          <img
            src={images[index]}
            alt={`capture ${index + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          {/* nav droite */}
          <span
            className="nav-btn nav-right"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ›
          </span>
        </div>
      )}
    </>
  );
};

export default InstaGallery;
