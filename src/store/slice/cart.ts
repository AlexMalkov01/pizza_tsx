import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../storege";
import { STOREGE_KEYS } from "../../enams/storege.enam";
import { jwtDecode } from "jwt-decode";
import { IUserProfile } from "./user";

export interface ICartItems  {
    id:number,
    count:number
}

export interface IItems {
    items:ICartItems[]

}


const initialState:IItems = {
    items: loadState<IItems>(STOREGE_KEYS.cart)?.items 
}


export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        add: (state , action)=> {
            const unicId = state.items.find((i)=> i.id === action.payload) 
            if (!unicId) {
                state.items.push({id:action.payload , count:1})
            } else {
                state.items.map((i)=>{
                    if (i.id === action.payload) {
                        i.count++
                    } 
                    return i
                })
            }
        } ,

        subtraction: (state , action) =>{
            const unicId = state.items.find((i)=> i.id === action.payload) 
            if (unicId) {
                state.items.map((i)=>{
                    if (i.id === action.payload ) {
                        if(i.count > 1) {
                            i.count--
                        }
                    }
                    return i
                })
            }
        },

        remove:(state , action)=> {
            const unicId = state.items.find((i)=> i.id === action.payload) 
            if (unicId) {
              state.items = state.items.filter(i=> i.id !== action.payload)
            }
        },
        logaut: (state) => {
            state.items = [] 
            localStorage.removeItem(STOREGE_KEYS.cart)
        }
    }
}) 


export default cartSlice.reducer 
export  const cartActions = cartSlice.actions