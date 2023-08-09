import { useState } from "react"

export const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div>
        <div className="Contador">
                <button onClick={decrement}>-</button>
                <p>{quantity}</p>
                <button onClick={increment}>+</button>
                </div>
                <button className="agregar-al-carrito" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
                </div>
  
    )
}