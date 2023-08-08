import { createContext, useState } from "react";

export const CartContext = createContext ()

const carritoInicial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(carritoInicial);

    console.log(cart)
    
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = ( itemId ) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const cantidadEnCarrito = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);
    }


    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, precioTotal, cantidadEnCarrito}}>
            { children }
        </CartContext.Provider>
    )
}