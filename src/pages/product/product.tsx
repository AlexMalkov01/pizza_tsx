import style from "./product.module.css"
import { useLoaderData } from "react-router-dom"
import { IProductCard } from "../../components/product-card/productCard.type"

function ProductPage () {
    const  data  = useLoaderData() as IProductCard[]
    
    return (
        <>
        <h1>
            Пицца: {data[0]?.name}
        </h1>

        </>
    )
}


export default ProductPage