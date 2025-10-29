import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Verificar si el producto ya existe en el carrito
  const exists = (id) => cart.some((p) => p.id === id);

  // Agregar producto (sumar cantidades si ya existe)
  const addItem = (item) => {
    const quantity = Number(item.quantity) || 1; // siempre asegura número válido

    if (exists(item.id)) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
      alert("Cantidad actualizada en el carrito");
    } else {
      setCart([...cart, { ...item, quantity }]);
      alert(`${item.name} agregado al carrito`);
    }
  };

  // Eliminar un producto del carrito
  const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
    alert("Producto eliminado");
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
    alert("Carrito vaciado");
  };

  // Calcular total de ítems (sumar cantidades)
  const getTotalItems = () => {
    return cart.reduce((total, p) => total + (p.quantity || 1), 0);
  };

  // Calcular total en dinero
  const total = () => {
    const total = cart.reduce(
      (acc, p) => acc + p.price * (p.quantity || 1),
      0
    );
    return Math.round(total * 100) / 100;
  };

  // Finalizar compra
  const checkout = () => {
    const ok = confirm("¿Seguro que quiere finalizar la compra?");
    if (ok) {
      alert("Compra realizada con éxito!");
      clearCart();
    }
  };

  // Valores compartidos en el contexto
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
