import style from "./snake.module.css"
import React, { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import Header from "../components/header/header"
import axios from "axios"
import { API_PRODUCT, TOKEN } from "../helpers/helper"
import { useSelector } from "react-redux"
import { RootStore } from "../store/store"
import { IProductCard } from "../components/product-card/productCard.type"
import ProductItem from "../components/prodict_items/productItems.tsx"
import cn from "classnames"
import { ICartItems } from "../store/slice/cart"
import Loader from "../helpers/loader/loader.tsx"
import Button from "../components/button/button.tsx"
import { STOREGE_KEYS } from "../enams/storege.enam.ts"
import { loadState } from "../store/storege.ts"
function Cont () {

   const [products ,setProdictItem] = useState<IProductCard[]>([])
   const productItems = useSelector((state:RootStore)=> state.cart.items)
   const TOKEN = loadState<{ jwt:string }>(STOREGE_KEYS.JWT)?.jwt 

   
   const getProduct = async (id:number)=> {
      const {data} = await axios(`${API_PRODUCT}/products/${id}`, {
         headers: {
            Authorization : `Bearer ${TOKEN}`
          }
      })
      return data[0]
   } 
   
   const getProductsCart = async () =>{
      const res = await Promise.all(productItems.map((i)=> getProduct(i.id))) 
      setProdictItem(res)
      
   }


   const sumPrice = () => {
     return productItems.reduce((acc,item)=> {
      const product = products.find(i=> i.id === item.id)
      if (product) {
        acc+= product.price * item.count
        return acc
      }
      return acc
     } ,0)
   }

  

   useEffect(()=>{
      getProductsCart()
   },[])
   
    return (
    <>
       <Header>
         Корзина
       </Header> 
       <main className={cn(style.cardMain)}>
         {!products.length && !!productItems.length && <Loader/> } 
         {!productItems.length && <h2>Корзина пуста</h2>}
         <div className={cn(style.wrapperCard)}>
         { !!products.length &&
            productItems.map((item)=>{
               const product = products.find((i)=> i.id === item.id)
               if (product) {
                  return {
                     ...product, 
                     count: item.count
                  }
               }
               return item
            }).map((props)=> <ProductItem key={props.id} caunt={props.count} {...props}/>)
         }
         </div> 



         <div className={cn(style.wrapperPrice)}>
            <div className={cn(style.price)}>
               <span>Итог</span>
               <span className={cn(style.priceItems)}> {sumPrice()} 
                  <span className={cn(style.rub)}>
                     ₽
                  </span>
                  </span>
            </div>
            <div className={cn(style.price)}>
               <span>Доставка</span>
               <span className={cn(style.priceItems)}>
                  169 
                  <span className={cn(style.rub)}>
                     ₽
                  </span> 
                  </span>
            </div>
            <div className={cn(style.price)}>
               <span className={cn(style.priceItems)}>Итог 
                  <span className={cn(style.priceTotal)}>
                     (2)
                  </span>
               </span>
               <span className={cn(style.priceItems)}>
                  {sumPrice()+ 169} 
                  <span className={cn(style.rub)}>₽</span>
               </span>
            </div>

            <Button className={cn(style.postBtn)} size="bigBtn">
               Оформить
            </Button>
         </div>
       </main>
       </>
       ) 
    
}

export default Cont

