import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


export const Cart = () => {

    const { cart, clearCart, precioTotal} = useContext(CartContext);

    const handleVaciar = () => {
        clearCart();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            cart.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.quantity}</p>
                    <p>Cant: {prod.quantity}</p>
                    <br />
                </div>
            ))
        }

        {  
            cart.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <Link to="/checkout" className="Option">Finalizar compra</Link>
            </> :
            <h2>El carrito está vacío :(</h2>
        }
        
    </div>
  )
}