import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Header.css";

export const Header = () => {
  const { getTotalItems } = useCartContext();
  const total = getTotalItems();

  return (
    <header className="header">
      <h2 className="header-title">AURUMA</h2>

      <div className="header-cart">
        <Link to="/carrito" className="cart-link">
          <i className={`bi bi-cart3 ${total > 0 ? "cart-animate" : ""}`}></i>
          {total > 0 && <span className="cart-count">{total}</span>}
        </Link>
      </div>
    </header>
  );
};




