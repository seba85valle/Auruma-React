import { useState } from "react";
import "./ContactForm.css";

export const ContactForm = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [modal, setModal] = useState({ show: false, type: "", message: "" });
  const [closing, setClosing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !email || !mensaje) {
      openModal("error", "Por favor complete todos los campos antes de enviar.");
      return;
    }

    openModal(
      "success",
      "Hemos recibido su mensaje con éxito. Nos estaremos comunicando a la brevedad. ¡Muchas gracias por contactarse con Auruma!"
    );

    setNombre("");
    setEmail("");
    setMensaje("");
  };

  const openModal = (type, message) => {
    setModal({ show: true, type, message });
  };

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setModal({ show: false, type: "", message: "" });
    }, 300);
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="nombre"
          value={nombre}
          placeholder="Ingrese su nombre..."
          onChange={(e) => setNombre(e.target.value)}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Ingrese su email..."
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <textarea
          name="mensaje"
          value={mensaje}
          placeholder="Escriba su mensaje..."
          onChange={(e) => setMensaje(e.target.value)}
          className="form-textarea"
        ></textarea>
        <button type="submit" className="form-button">Enviar</button>
      </form>

      {modal.show && (
        <div
          className={`modal-overlay ${closing ? "fade-out" : "fade-in"}`}
          onClick={closeModal}
        >
          <div
            className={`modal-content ${modal.type === "error" ? "error" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            {modal.type === "success" ? (
              <>
                <h3>Mensaje enviado</h3>
                <p>{modal.message}</p>
              </>
            ) : (
              <>
                <h3>Error</h3>
                <p>{modal.message}</p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};


  