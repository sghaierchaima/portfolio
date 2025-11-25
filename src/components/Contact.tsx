import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_jdyokh9",   // 👉 remplace par TON service ID EmailJS
        "template_8gyqyas",  // 👉 remplace par TON template ID
        formRef.current,
        "EGyrVFgTMxDWTiLLV"     // 👉 remplace par TA public key
      )
      .then(
        () => {
          setSending(false);
          alert("✅ Message envoyé avec succès !");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setSending(false);
          alert("❌ Erreur lors de l’envoi, veuillez réessayer.");
        }
      );
  };

  return (
    <section id="contact" className="contact-wrap">
      {/* HERO */}
      <div className="contact-hero py-5 py-md-6">
        <div className="container text-center">
          <h2 className="display-4 fw-bolder mb-2 text-white">Contactez-Moi</h2>
          <div className="contact-underline mx-auto mb-3" />
          <p className="text-white-50 lead mx-auto" style={{ maxWidth: 820 }}>
            N’hésitez pas à me contacter pour discuter d’opportunités de stage, de projets
            ou simplement pour échanger.
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
                    <div className="text-white-50 small">Email</div>
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
                    <div className="text-white-50 small">Téléphone</div>
                    <span className="text-white">+216 93 582 719</span>
                  </div>
                </div>

                <div className="card-soft bg-translucent p-3 d-flex align-items-center">
                  <div className="contact-bubble me-3">
                    <i className="bi bi-geo-alt" />
                  </div>
                  <div>
                    <div className="text-white-50 small">Localisation</div>
                    <span className="text-white">Mahdia, Tunisie</span>
                  </div>
                </div>

                <div className="d-flex gap-3 mt-2">
                  <a
                    className="btn btn-light rounded-pill px-4"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin me-2" />
                    LinkedIn
                  </a>
                  <a
                    className="btn btn-outline-light rounded-pill px-4"
                    href="#"
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
                  <label className="form-label text-white-50">Nom complet</label>
                  <input
                    name="name" // 🔁 doit correspondre à {{name}} dans EmailJS
                    className="form-control form-control-lg bg-dark-subtle text-white"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-white-50">Email</label>
                  <input
                    name="email" // 🔁 doit correspondre à {{email}} dans EmailJS
                    type="email"
                    className="form-control form-control-lg bg-dark-subtle text-white"
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-white-50">Message</label>
                  <textarea
                    name="message" // 🔁 doit correspondre à {{message}} dans EmailJS
                    rows={5}
                    className="form-control bg-dark-subtle text-white"
                    placeholder="Votre message..."
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
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send me-2" />
                      Envoyer le message
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
