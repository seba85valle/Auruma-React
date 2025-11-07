import { useCartContext } from "../../context/CartContext/useCartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Cart.css";
import logoAuruma from "/images/logo1.png";

export const Cart = () => {
  const { cart, clearCart, removeItem } = useCartContext();
  const [showModal, setShowModal] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const generateTicket = () => {
    const header = `AURUMA

------------------------------
Detalle del pedido
------------------------------

Producto             Cant   Subtotal
--------------------------------------`;

    const lines = cart
      .map((item) => {
        const name = item.name.padEnd(20, " ").substring(0, 20);
        const qty = String(item.quantity).padEnd(5, " ");
        const sub = `$${(item.price * item.quantity).toLocaleString("es-AR")}`;
        return `${name}${qty}${sub}`;
      })
      .join("\n");

    const footer = `
Total: $${total.toLocaleString("es-AR")}

Gracias por elegir AURUMA.`;

    return `${header}\n${lines}\n${footer}`;
  };

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleSendWhatsApp = () => {
    const ticket = generateTicket();
    const encoded = encodeURIComponent(ticket);
    window.open(`https://wa.me/541165134448?text=${encoded}`, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <Link to="/perfumes" className="btn-volver">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Tu carrito</h2>

      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.imageUrl} alt={item.name} />
            </div>

            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              {item.size && <p className="cart-item-size">{item.size}</p>}
              <p className="cart-item-price">
                Precio: ${item.price.toLocaleString("es-AR")}
              </p>
              <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
              <p className="cart-item-subtotal">
                Subtotal: ${Number(item.price * item.quantity).toLocaleString("es-AR")}
              </p>
            </div>

            <button className="btn-delete" onClick={() => removeItem(item.id)}>
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <p className="cart-total">Total: ${total.toLocaleString("es-AR")}</p>

        <div className="cart-buttons">
          <button className="btn-clear" onClick={clearCart}>
            Vaciar carrito
          </button>

          <button className="btn-checkout" onClick={handleCheckout}>
            Continuar
          </button>
        </div>
      </div>

      {showModal && (
        <div className="auruma-modal-overlay">
          <div className="auruma-modal-react">
            <button className="auruma-close" onClick={() => setShowModal(false)}>
              ×
            </button>

            <img src={logoAuruma} className="auruma-logo-modal" />

            <h3 className="modal-title-auruma">Ticket de pedido</h3>

            <pre className="auruma-ticket">{generateTicket()}</pre>

            <div className="modal-buttons">
              <button className="auruma-btn-dark" onClick={handleSendWhatsApp}>
                Enviar por WhatsApp
              </button>

              <Link to="/perfumes" className="auruma-btn-light">
                Volver al catálogo
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

