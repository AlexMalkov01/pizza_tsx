import { Link } from "react-router-dom"
import { IProductCard } from "./productCard.type"
import styles from "./productCard.module.css"
import cn from "classnames"
import classNames from "classnames"
import SecondaryButton from "../SecondaryButton/SecondaryButton"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/slice/cart"

const cardBtnIconUrl = "/src/assets/market.png"

function ProductCard ({
    ingredients,
    name,
    price,
    image,
    id,
    rating ,
    className,
    ...props
}:IProductCard) 
{
    const dispatch = useDispatch() 

    function addCart (e:MouseEvent):void {
    e.preventDefault() 
    dispatch(cartActions.add(id))
    }

    return (
        <Link  className={cn(styles.wrapper)}
        to={`product/${id}`}>
            <div 
            {...props}
            className={cn(styles.card, className )}
            >
                <div className={cn(styles.head)} style={{backgroundImage:`url(${image})`}}>
                    <div className={cn(styles.price)}>
                        {price} <span className={cn(styles.rub)}>₽</span>
                    </div>
                    <SecondaryButton onClick={addCart} color="orange">
                        <img  className={cn(styles.icon)} src={cardBtnIconUrl} alt="корзина" />
                    </SecondaryButton> 

                    <div className={cn(styles.rating)}>
                        {rating} 
                        <img src="/src/assets/stars.svg" alt="" className={cn(styles.stars)} />
                    </div>
                </div>
                <div className={cn(styles.footer)}>
                    <span className={styles.title}>
                        {name}
                    </span>
                    <span className={cn(styles.desc)}>
                        {ingredients.join(", ")}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard