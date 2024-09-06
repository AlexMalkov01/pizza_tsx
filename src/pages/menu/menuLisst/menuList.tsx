import { IMenuLisst } from "./menuLisst"
import { IProductCard } from "../../../components/product-card/productCard.type"
import ProductCard from "../../../components/product-card/productCard"

function MenuList ({product}:IMenuLisst) {

    return (
        <>
        {
                product?.map((product:IProductCard)=><ProductCard 
                key={product?.id}
                name={product?.name}
                image={product?.image}
                id={product?.id}
                price={product?.price}
                rating={product?.rating}
                ingredients={product?.ingredients}
                />)
        }
        </>
    )
}

export default MenuList