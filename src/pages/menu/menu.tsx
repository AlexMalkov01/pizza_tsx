import React, { useEffect, useState } from "react"
import Header from "./../../components/header/header"
import Search from "./../../components/search/search"
import style from "./menu.module.css"
import cn from "classnames"
import axios, { AxiosError } from "axios"
import { API_PRODUCT, TOKEN } from "../../helpers/helper"
import { IProductCard } from "../../components/product-card/productCard.type"
import Loader from "../../helpers/loader/loader"
import ProductCard from "../../components/product-card/productCard"
import MenuList from "./menuLisst/menuList"
import { STOREGE_KEYS } from "../../enams/storege.enam"
import { loadState } from "../../store/storege"

function Menu () { 

    const [products , setProducts] = useState<IProductCard[]>([]);
    const [loader , setLoaeder] = useState<boolean>(false);
    const [error , setError] = useState<string|null>();
    const TOKEN =  loadState<{ jwt:string }>(STOREGE_KEYS.JWT)?.jwt 
 
    const search = (value:string) => { 
        const string = value.toUpperCase().trim()        
        const filterProducts = products.filter((product)=> product.name.toUpperCase().trim().includes(string));
        if (!string) getApiProducts()
            
        setProducts(filterProducts)
    }

    useEffect(()=>{
        setLoaeder(true)
        getApiProducts()
    },[])

    useEffect (()=>{

    },[error])

    const getApiProducts = async () => { 
        try {
            const { data } = await axios<IProductCard[]>(`${API_PRODUCT}/products/` , {
                headers: {
                  Authorization : `Bearer ${TOKEN}`
                }
            }) 
            setProducts(data)
            setLoaeder(false)
            setError(null)
        } catch(e) {
            if (e instanceof AxiosError) {
                setError( e?.response?.data?.message || e.message)
                setLoaeder(false)
            }
        }
    }

    return ( 
    <React.Fragment>
        <header className={cn(style.header)}>
            <Header>
                 Меню
            </Header>
            <Search onChange={(e)=> search(e.target.value)} placeholder="Введите блюдо или состав"/>
        </header> 
        <main className={cn(style.main)}> 
            { loader && <Loader/> }
            { error && <h1> {error} </h1> }
            {!!products && <MenuList product={products}/>}
        </main>
    </React.Fragment> )
}

export default Menu