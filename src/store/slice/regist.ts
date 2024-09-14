import { createSlice } from "@reduxjs/toolkit";

export interface IRegister {
    jwt:string|null,
    config:{
        login:string,
        email:string
    }
} 

const initialState:IRegister = {
    jwt:null,
    config:{
        login: "",
        email: ""
    }
}

export const registSlice = createSlice({
    name:"register" ,
    initialState,
    reducers: {

    }
})