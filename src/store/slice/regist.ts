import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STOREGE_KEYS } from "../../enams/storege.enam";
import axios, { AxiosError } from "axios";
import { API_PRODUCT } from "../../helpers/helper";
import { loadState, saveState } from "../storege";
import { jwtDecode } from "jwt-decode";
import { IUserProfile, login } from "./user";
import Swal from "sweetalert2";

export interface IRegister {
    jwt: string | null;
    profile?: {
      name: string,
      email: string,
      surname:string
    };
  }
  
  const initialState: IRegister = {
    jwt: loadState<{ jwt: string }>(STOREGE_KEYS.JWT)?.jwt ?? null,
    profile:{
        email:"",
        name:"",
        surname:""
    }
  };
  
  export const registration = createAsyncThunk(
    "user/registration",
    async (params: { name: string; surname: string; email: string; password: string }) => {
      try {
        const { name, surname, email, password } = params; 
        console.log({ name, surname, email, password });
        const { data } = await axios.post(`${API_PRODUCT}/users/registration`, { name, surname, email, password });
        const { data:loginData } = await axios.post(`${API_PRODUCT}/users/login`, { email, password })
        saveState({ jwt:loginData.token}, STOREGE_KEYS.JWT) 
        return loginData;
      } catch (e) {
        if (e instanceof AxiosError) {
          throw new Error(e.response?.data?.message || e.message);
        }
      }
    }
  );
  
  export const registSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
      logout: (state) => {
        state.jwt = null;
        localStorage.removeItem(STOREGE_KEYS.JWT);
      },
        parseToken: (stete) => {
            if (stete.jwt) {
                const parseJwt = jwtDecode<IUserProfile>(stete.jwt);
                const {email ,name,surname} = parseJwt;
                console.log(email,name);
                
                stete.profile = {
                    email,
                    name,
                    surname
                }
            }
        },
        clearToken:(state)=>{
            if(state.jwt){
                state.jwt = null    
                state.profile = {
                    email:"",
                    name:"",
                    surname:""
                }
            }
        } 
    },
    extraReducers: (builder) => {
      builder.addCase(registration.fulfilled, (state, action: PayloadAction<{ token: string }>) => {
        state.jwt = action.payload.token;
        Swal.fire({
          icon: 'success',
          title: 'Успех',
          text: "Вы успешно зарегестрировались",
          allowOutsideClick: false,
          allowEscapeKey: false
      })
      })

      builder.addCase(registration.rejected,(state, action)=>{
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


  export const regActions = registSlice.actions