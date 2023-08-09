import { Link } from "react-router-dom"

export const Item = ({id, titulo, imagen, categoria, stock, precio}) => {

    return (
        <div className="col">
        <article className="CardItem">
            <div className="ItemImage">
            <picture>
                <img src={imagen} alt={titulo} className="ItemImg"/>
            </picture>
            </div>
                <p className="ItemHeader">
                    {titulo}
                </p>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer>
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
        </div>
    )
}