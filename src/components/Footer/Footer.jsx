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
            href="https://wa.me/541165134447"
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
