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
        <div className="container text-center">
              <div class="row">
    <div class="col">
    <picture>
                <img src={imagen} alt={titulo} className="ItemImg2"/>
            </picture>
    </div>
    <div class="col">
    <header className="Header">
                <h2 className="ItemHeader2">
                    {titulo}
                </h2>
            </header>
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
                        <Link to='/cart' className="enviar">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
    </div>
  </div>
            
        </div>
    )
}