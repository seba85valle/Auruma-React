import "./Footer.css";
import logoAuruma from "/images/logo.jpg"; 

export const Footer = () => {
  return (
    <footer className="footer bg-white border-top border-3 border-dark py-3 px-3">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        {/* Logo AURUMA */}
        <div className="footer-left">
          <img src={logoAuruma} alt="Logo Auruma" className="footer-logo" />
        </div>

        {/* Redes sociales */}
        <div className="footer-right d-flex gap-3 mt-2 mt-lg-0">
          <a
            href="https://www.instagram.com/auruma_fragancias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram social-icon"></i>
          </a>
          <a
            https://wa.me/541165134448?text=Bienvenidos,%20somos%20AURUMA.%20%C2%BFEn%20qu%C3%A9%20podemos%20ayudarte%3F%20Estamos%20para%20asesorarte%20sobre%20perfumes%2C%20recomendaciones%20y%20precios.
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp social-icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
