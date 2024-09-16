import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/user";
import { saveState } from "./storege";
import { STOREGE_KEYS } from "../enams/storege.enam";
import { registSlice } from "./slice/regist";
import { cartSlice } from "./slice/cart";

export const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        register: registSlice.reducer,
        cart: cartSlice.reducer
    }
}) 

store.subscribe(()=> {
    const stete:RootStore = store.getState();
    const jwt = stete.user.jwt 
    if (jwt) {
        saveState({ jwt },STOREGE_KEYS.JWT)
    }
})


export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch