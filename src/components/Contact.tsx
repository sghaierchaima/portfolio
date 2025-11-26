// src/components/Contact.tsx
import React, { useRef, useState } from "react";
import type { Lang } from "../lang";
import emailjs from "emailjs-com";

type ContactProps = {
  lang: Lang;
};

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);

  const t =
    lang === "fr"
      ? {
          title: "Contactez-Moi",
          heroText:
            "N’hésitez pas à me contacter pour discuter d’opportunités de stage, de projets ou simplement pour échanger.",
          labelName: "Nom complet",
          labelEmail: "Email",
          labelMessage: "Message",
          placeholderName: "Votre nom",
          placeholderEmail: "votre.email@exemple.com",
          placeholderMessage: "Votre message...",
          sending: "Envoi en cours...",
          send: "Envoyer le message",
          alertOk: "✅ Message envoyé avec succès !",
          alertErr: "❌ Erreur lors de l’envoi, veuillez réessayer.",
          infoEmail: "Email",
          infoPhone: "Téléphone",
          infoLocation: "Localisation",
        }
      : {
          title: "Contact Me",
          heroText:
            "Feel free to contact me to discuss internship opportunities, projects or just to connect.",
          labelName: "Full name",
          labelEmail: "Email",
          labelMessage: "Message",
          placeholderName: "Your name",
          placeholderEmail: "your.email@example.com",
          placeholderMessage: "Your message...",
          sending: "Sending...",
          send: "Send message",
          alertOk: "✅ Message sent successfully!",
          alertErr: "❌ Error while sending, please try again.",
          infoEmail: "Email",
          infoPhone: "Phone",
          infoLocation: "Location",
        };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_jdyokh9", // ⚠️ tes IDs perso
        "template_8gyqyas",
        formRef.current,
        "EGyrVFgTMxDWTiLLV"
      )
      .then(
        () => {
          setSending(false);
          alert(t.alertOk);
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setSending(false);
          alert(t.alertErr);
        }
      );
  };

  return (
    <section id="contact" className="contact-wrap">
      {/* HERO */}
      <div className="contact-hero py-5 py-md-6">
        <div className="container text-center">
          <h2 className="display-4 fw-bolder mb-2 text-white">{t.title}</h2>
          <div className="contact-underline mx-auto mb-3" />
          <p className="text-white-50 lead mx-auto" style={{ maxWidth: 820 }}>
            {t.heroText}
          </p>
        </div>
      </div>

      {/* CONTENU */}
      <div className="contact-content py-4 py-md-5">
        <div className="container">
          <div className="row g-4">
            {/* Colonne gauche : Infos */}
            <div className="col-lg-5">
              <div className="vstack gap-3">
                <div className="card-soft bg-translucent p-3 d-flex align-items-center">
                  <div className="contact-bubble me-3">
                    <i className="bi bi-envelope" />
                  </div>
                  <div>
                    <div className="text-white-50 small">{t.infoEmail}</div>
                    <a
                      className="text-white text-decoration-none"
                      href="mailto:Chaima.Sghaier@esprim.tn"
                    >
                      Chaima.Sghaier@esprim.tn
                    </a>
                  </div>
                </div>

                <div className="card-soft bg-translucent p-3 d-flex align-items-center">
                  <div className="contact-bubble me-3">
                    <i className="bi bi-telephone" />
                  </div>
                  <div>
                    <div className="text-white-50 small">{t.infoPhone}</div>
                    <span className="text-white">+216 93 582 719</span>
                  </div>
                </div>

                <div className="card-soft bg-translucent p-3 d-flex align-items-center">
                  <div className="contact-bubble me-3">
                    <i className="bi bi-geo-alt" />
                  </div>
                  <div>
                    <div className="text-white-50 small">
                      {t.infoLocation}
                    </div>
                    <span className="text-white">Mahdia, Tunisie</span>
                  </div>
                </div>

                <div className="d-flex gap-3 mt-2">
                  <a
                    className="btn btn-light rounded-pill px-4"
                    href="https://www.linkedin.com/in/chaima-sghaier-4a8bab305/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin me-2" />
                    LinkedIn
                  </a>
                  <a
                    className="btn btn-outline-light rounded-pill px-4"
                    href="https://github.com/sghaierchaima"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github me-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Colonne droite : Formulaire (EmailJS) */}
            <div className="col-lg-7">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="card-soft bg-translucent p-4 p-md-5"
              >
                <div className="mb-3">
                  <label className="form-label text-white-50">
                    {t.labelName}
                  </label>
                  <input
                    name="name"
                    className="form-control form-control-lg bg-dark-subtle text-white"
                    placeholder={t.placeholderName}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-white-50">
                    {t.labelEmail}
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control form-control-lg bg-dark-subtle text-white"
                    placeholder={t.placeholderEmail}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-white-50">
                    {t.labelMessage}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="form-control bg-dark-subtle text-white"
                    placeholder={t.placeholderMessage}
                    required
                  />
                </div>

                <button
                  className="btn btn-teal btn-lg w-100 rounded-pill"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      />
                      {t.sending}
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send me-2" />
                      {t.send}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
