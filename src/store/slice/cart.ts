import { createSlice } from "@reduxjs/toolkit";

export interface ICartItems  {
    id:number,
    count:number
}

export interface IItems {
    items:ICartItems[]
}

const initialState:IItems = {
    items:[]
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
        }
    }
}) 


export default cartSlice.reducer 
export  const cartActions = cartSlice.actions