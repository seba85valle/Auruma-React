import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Cart.css";

export const Cart = () => {
  const { cart, deleteItem, clearCart, total, checkout } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="cart-empty fade-in">
        <h2>Tu carrito está vacío</h2>
        <p>Agregá tus fragancias favoritas para continuar tu experiencia AURUMA.</p>
      </div>
    );
  }

  return (
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
              <p className="cart-item-price">
                ${Number(item.price).toLocaleString("es-AR")}
              </p>
              <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
              <p className="cart-item-subtotal">
                Subtotal: $
                {(item.price * item.quantity).toLocaleString("es-AR")}
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
        <p className="cart-total">
          Total: ${Number(total()).toLocaleString("es-AR")}
        </p>
        <div className="cart-buttons">
          <button className="btn-clear" onClick={clearCart}>
            Vaciar carrito
          </button>
          <button className="btn-checkout" onClick={checkout}>
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
};

