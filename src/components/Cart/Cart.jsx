import { useCartContext } from "../../context/CartContext/useCartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Cart.css";

export const Cart = () => {
  const { cart, deleteItem, clearCart, total } = useCartContext();
  const [modalOpen, setModalOpen] = useState(false);

  const generateWhatsAppMessage = (cart, total) => {
    let message = "";

    message += "AURUMA\n\n";
    message += "------------------------------\n";
    message += "Detalle del pedido\n";
    message += "------------------------------\n\n";
    message += "Producto               Cant   Subtotal\n";
    message += "--------------------------------------\n";

    cart.forEach((item) => {
      const subtotal = item.quantity * item.price;
      const namePadded = item.name.substring(0, 18).padEnd(20, " ");
      const qtyPadded = String(item.quantity).padEnd(6, " ");
      message += `${namePadded}${qtyPadded}$${subtotal.toLocaleString("es-AR")}\n`;
    });

    message += `\nTotal: $${total.toLocaleString("es-AR")}`;
    message += `\n\nGracias por elegir AURUMA.`;

    return message;
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty fade-in">
        <h2>Tu carrito está vacío</h2>
        <p>Agregá tus fragancias favoritas para continuar tu experiencia AURUMA.</p>
        <Link to="/perfumes" className="btn-volver">Ir a la tienda</Link>
      </div>
    );
  }

  return (
    <>
      <div className="cart-container fade-in">
        <h2 className="cart-title">Tu selección AURUMA</h2>

        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item slide-up">
              <div className="cart-item-image">
                <img src={item.imageUrl} alt={item.name} />
              </div>

              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                {item.size && <p className="cart-item-size">{item.size}</p>}
                <p className="cart-item-price">${Number(item.price).toLocaleString("es-AR")}</p>
                <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
                <p className="cart-item-subtotal">
                  Subtotal: ${(item.price * item.quantity).toLocaleString("es-AR")}
                </p>
              </div>

              <button
                className="btn-delete"
                onClick={() => deleteItem(item.id)}
                aria-label="Eliminar producto"
              >
                <i className="bi bi-trash3"></i>
              </button>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <p className="cart-total">Total: ${Number(total()).toLocaleString("es-AR")}</p>

          <div className="cart-buttons">
            <button className="btn-clear" onClick={clearCart}>Vaciar carrito</button>

            <button className="btn-checkout" onClick={() => setModalOpen(true)}>
              Finalizar compra
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="auruma-modal-overlay">
          <div className="auruma-modal-react">
            <img src="/images/logo1.png" alt="AURUMA Logo" className="auruma-logo-modal" />

            <h3 className="modal-title-auruma">Continuaremos por WhatsApp</h3>
            <p className="modal-desc">
              Coordinarás el pago y la entrega con nuestro equipo AURUMA.
            </p>

            <div className="modal-buttons">
              <button
                className="auruma-btn-dark w-100"
                onClick={() => {
                  const message = generateWhatsAppMessage(cart, total());
                  const url = `https://wa.me/541165134447?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank", "noopener,noreferrer");
                  setModalOpen(false);
                }}
              >
                Ir a WhatsApp
              </button>

              <Link
                to="/perfumes"
                className="auruma-btn-light w-100"
                onClick={() => setModalOpen(false)}
              >
                Volver al catálogo
              </Link>
            </div>

            <button className="auruma-close" onClick={() => setModalOpen(false)}>×</button>
          </div>
        </div>
      )}
    </>
  );
};

