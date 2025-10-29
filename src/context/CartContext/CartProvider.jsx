import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Verifica si un producto ya existe en el carrito
  const exists = (id) => cart.some((p) => p.id === id);

  // Agregar producto (suma cantidad si ya existe)
  const addItem = (item) => {
    if (exists(item.id)) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + item.quantity }
          : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }
  };

  // Eliminar un producto por id
  const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
  };

  // Vaciar todo el carrito
  const clearCart = () => setCart([]);

  // Cantidad total de ítems (sumando cantidades)
  const getTotalItems = () =>
    cart.reduce((acc, p) => acc + (p.quantity || 0), 0);

  // Total monetario del carrito
  const total = () =>
    Math.round(
      cart.reduce((acc, p) => acc + p.price * (p.quantity || 0), 0) * 100
    ) / 100;

  // Finalizar compra 
  const checkout = () => {
    clearCart();
  };

  const values = {
    cart,
    addItem,
    deleteItem,
    clearCart,
    getTotalItems,
    total,
    checkout,
  };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};

