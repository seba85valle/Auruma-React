import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider=({children})=>{
const [cart,setCart]=useState([])

const exists=(id)=>{
    const exist=cart.some((p)=>p.id===id);
    return exist;
}

// agregar al carrito
const addItem=(item)=>{
                if (exists(item.id)){
                    alert("El producto ya existe en el carrito")
                    return
                }
                setCart([...cart,item])
                alert (`${item.name} agregado al carrito`)
    }

// vaciar carrito
const clearCart=()=>{setCart([])}

// mostrar total de items en el carrito
const getTotalItems=()=>{
    if (cart.length){
        return cart.length
    } 
};

const values={cart,addItem,clearCart,getTotalItems};
  
  return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}   