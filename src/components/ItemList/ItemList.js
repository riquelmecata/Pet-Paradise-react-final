import { Item } from "../Item/Item"

export const ItemList = ({ products }) => {
    return(
        <div className="container text-center overflow-hidden">
            <div className="row row-cols-3 gy-5">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        </div>
    )
}