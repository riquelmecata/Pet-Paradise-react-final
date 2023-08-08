import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState(["Productos"])

    const categoria = useParams().categoria

    useEffect(() => {
   
   const productosRef = collection( db, "productos");

   const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

   getDocs(q)
        .then((resp) => {
            setProducts(
                resp.docs.map((doc) => {
                    return {...doc.data(), id: doc.id }
                })
            )
        })

    }, [categoria])

    return (
    <div>
        <h1>{greeting}</h1>
        <ItemList products = {products}/>
    </div>
    );
}