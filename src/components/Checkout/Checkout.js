import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext"
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config"

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const { cart, clearCart, precioTotal} = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: precioTotal()
        }
        console.log(pedido)

        const pedidosRef = collection (db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                clearCart();
            })
    }
    if (pedidoId) {
        return (
            <div className="container">
                <h1>Muchas gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <h1>Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresa tu teléfono" {...register("telefono")} />

                <button className="enviar" type="submit">Comprar</button>

            </form>
        </div>
    )
}

export default Checkout