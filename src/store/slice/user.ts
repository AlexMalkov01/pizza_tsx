import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "../storege";
import axios, { AxiosError } from "axios";
import { STOREGE_KEYS } from "../../enams/storege.enam";
import { API_PRODUCT } from "../../helpers/helper";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

export interface IUser {
    jwt: string | null
} 

const initialState:IUser = {
    jwt: loadState<{ jwt:string }>(STOREGE_KEYS.JWT)?.jwt ?? null
}


export const login = createAsyncThunk("user/login", async (params:{email:string , password:string})=>{
    try {
        const { email , password } = params 
        const {data} = await axios.post(`${API_PRODUCT}/users/login`,{email , password})
        return data
    } catch (e) {
        if (e instanceof AxiosError) {
           throw new Error(e.response?.data?.message || e.message) 
        }}
    
    
})

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        logaut: (stete) => {
            stete.jwt = null
            localStorage.removeItem(STOREGE_KEYS.JWT)
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(login.fulfilled, (stete , action:PayloadAction<{token:string}>)=> {
            stete.jwt = action.payload.token  
            Swal.fire({
                icon: 'success',
                title: 'Успех',
                text: 'Добро пожаловать !',
                allowOutsideClick: false,
                allowEscapeKey: false   
            });

            
        })

        builder.addCase(login.rejected, (stete , action)=>{
            Swal.fire({
                icon: 'error',
                title: 'Ошибка',
                text: action.error.message,
                allowOutsideClick: false,
                allowEscapeKey: false  
            })
        })
        
    }
});


export default userSlice.reducer 
export const userActions = userSlice.actions
