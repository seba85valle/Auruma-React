import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
  const location = useLocation();
  const { getTotalItems } = useCartContext();
  const total = getTotalItems();

  // Mostrar carrito solo en /perfumes y subrutas (/perfumes/...)
  const showCart =
    location.pathname === "/perfumes" ||
    location.pathname.startsWith("/perfumes/");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-dark fixed-top auruma-navbar">
      <div className="container-fluid">

        {/* Brand + (cart solo en /perfumes) + hamburguesa */}
        <div className="d-flex align-items-center gap-3">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src="/images/logo.jpg" alt="logo" className="logo" />
            <span className="brand-text">AURUMA</span>
          </Link>

          {showCart && (
            <Link to="/carrito" className={`cart-link ${total > 0 ? "cart-animate" : ""}`}>
              <i className="bi bi-cart3"></i>
              {total > 0 && <span className="cart-count">{total}</span>}
            </Link>
          )}

          <button
            className="navbar-toggler ms-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Links derecha */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/perfumes">Perfumes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};
