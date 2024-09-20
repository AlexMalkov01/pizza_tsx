import style from "./product.module.css"
import cn from "classnames"
import { useLoaderData, useNavigate } from "react-router-dom"
import { IProductCard } from "../../components/product-card/productCard.type"
import Header from "../../components/header/header"
import Button from "../../components/button/button"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/slice/cart"

function ProductPage () {
    const  data  = useLoaderData() as IProductCard[]
    const product = data[0]
    const navMain = useNavigate()
    const dispatch = useDispatch()   
    const image = product.image

    const addItems = () => {
        dispatch(cartActions.add(product.id))
    }
    return (
        <>
        <header className={cn(style.header)}>
        <div className={cn(style.wrapperNav)}>
            <button onClick={()=>navMain("/")} className={cn(style.navBtn)}>
                <img style={{width:"15px",height:"20px"}} src="/src/assets/left-icon.svg" alt="left-icon" />
            </button>
            <Header>Пицца: {product?.name}</Header>
        </div>
            <Button onClick={addItems} className={style.btn} size="bigBtn">
                <img className={style.img} src="/src/assets/market.png" alt="" />
                В корзину
                </Button>
        </header>
        <main className={cn(style.main)}>
            <img className={cn(style.imgProduct)} src={image} alt="Кортинка тавара" />
            <div className={cn(style.wrapperProductInfo)}>
                <div className={cn(style.productPrice)}>
                    <span>Цена</span>
                    <span>{product.price}</span>
                </div>
                <div className={cn(style.productReiting)}>
                <span>Рейтинг</span>
                <span>{product.rating}</span>
                </div>
                <div>
                    Состав
                </div>
            </div>
        </main>
        
        </>
    )
}


export default ProductPage