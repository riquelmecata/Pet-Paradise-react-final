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
        <div className="Contador">
            <div className="Controles">
                <button className="button" onClick={decrement}>-</button>
                <p className="number">{quantity}</p>
                <button className="button" onClick={increment}>+</button>
                <button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}