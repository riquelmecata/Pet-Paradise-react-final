import { useContext, useSyncExternalStore } from "react"
import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import { useState } from "react"
import { CartContext } from "../../context/CartContext"

export const ItemDetail = ({ id, titulo, imagen, categoria, stock, precio, descripcion }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, titulo, precio
        }

        addItem(item, quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {titulo}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={titulo} className="ItemImg"/>
            </picture>
            <section>
            <p className="Info">
                    Categoria: {categoria}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                <p className="Info">
                    {descripcion}
                </p>
            </section>
            <footer>
                { 
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="Option">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}