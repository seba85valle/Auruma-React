import "./Footer.css";
import logoAuruma from "/images/logo.jpg"; 

export const Footer = () => {
  return (
    <footer className="footer bg-white text-black mt-5">
      {/* Fila superior */}
      <div className="footer-top border-top border-3 border-dark py-2 text-center">
        <p className="mb-0">&copy;Valle, Sebastián</p>
      </div>

      {/* Fila inferior */}
      <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap py-3 px-3">
        {/* Logo AURUMA */}
        <div className="footer-left">
          <img src={logoAuruma} alt="Logo Auruma" className="footer-logo"/>
        </div>

        {/* Redes sociales */}
        <div className="footer-right d-flex gap-3 mt-2 mt-lg-0">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram social-icon"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook social-icon"></i>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp social-icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
