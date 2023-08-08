import { Link } from "react-router-dom"

export const Item = ({id, titulo, imagen, categoria, stock, precio}) => {

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
    )
}