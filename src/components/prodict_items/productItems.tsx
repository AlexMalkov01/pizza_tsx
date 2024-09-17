import style from "./productItems.module.css"
import {IProductProps} from "./productItems.ts"
import React from "react"
import SecondaryButton from "../SecondaryButton/SecondaryButton.tsx"
import cn from "classnames"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/slice/cart.ts"

function ProductItem ({id,name,image,price,caunt}:IProductProps) {

    const dispatch = useDispatch()


    function addCart (e:MouseEvent):void {
        e.preventDefault() 
        dispatch(cartActions.add(id))
    }

    function subtractionCart (e:MouseEvent) {
            e.preventDefault()
            dispatch(cartActions.subtraction(id))
    }

    function removeCart(e:MouseEvent) {
        e.preventDefault();
        dispatch(cartActions.remove(id))
    }

    return (
    <> 
    <div className={cn(style.card)}>   
        <div className={cn(style.wrappCard)}>
            <div className={cn(style.image)} style={{backgroundImage:`url(${image})`}} >
            
            </div>

            <div className={cn(style.wrapperTitle)}>
                <h1>
                    {name}
                </h1>
                <span className={cn(style.price)}>
                    {price} 
                    <span>
                    ₽
                    </span>
                </span>
            </div>
        </div>

        <div className={cn(style.wrapperCaunt)}>
    
            <SecondaryButton onClick={subtractionCart} size="min" color="white">
                -
            </SecondaryButton >
               <div className={cn(style.caunt)}>{caunt}</div> 
             <SecondaryButton size="min" onClick={addCart}  color="orange">
                +
             </SecondaryButton>
            
        </div> 

        <button onClick={removeCart} className={cn(style.btnRemove)}>
            Х        
        </button>
    </div>
        
    </>
    )
}

export default ProductItem