import { Link, Navigate, useNavigate } from "react-router-dom"
import React, { FormEvent, useEffect } from "react";
import style from "./login.module.css";
import cn from "classnames";
import { IInput } from "../../input/input.type";
import Input from "../../input/input";
import useSetPassword from "../../../hooks/useSetPassword";
import Button from "../../button/button";
import axios, { AxiosError } from "axios";
import { API_PRODUCT } from "../../../helpers/helper";
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from "react-redux";
import { login, userActions} from "../../../store/slice/user";
import { AppDispatch, RootStore, store } from "../../../store/store";
import { UseSelector } from "react-redux";
import inputsLogo from "../../input/constant/inputsRendr";

export type LoginForm = {
    email : { 
        value: string
    },
    password : { 
        value: string
    }
}

function Login () {
    const [inputs , setPassword] = useSetPassword(inputsLogo);
    const dispatch = useDispatch<AppDispatch>();
    const jwt = useSelector((stete:RootStore)=> stete.user.jwt)
    const mainPage = useNavigate()
    
    function submit (e:FormEvent) {
    e.preventDefault() 
    
    const target = e.target as typeof e.target & LoginForm
    const {password , email} = target ;
      dispatch(login({password: password?.value ,email: email?.value}));
    }; 

    useEffect(()=>{
        if (jwt) {
            mainPage("/")
        }
    },[jwt])

    return (
        <> 
        <main className={cn(style.loginWrapper)}>
            <div className={cn(style.logoWrapper)}>
                <Link to={"/"}>
                <img src="https://i.pinimg.com/736x/78/a6/d2/78a6d2be0013a1b8cc9dbd7cac23e040.jpg" alt="logo" />
                </Link>
            </div>
            <div className={style.authWrapper}>
            <h1> Войти </h1>
            <form onSubmit={submit} className={cn(style.authForm)} action=""> 
            { inputs.map(( input:IInput , idx:number )=> <Input  isViewDetailBtn={input?.id ==="Password"} onClick={setPassword} {...input} key={idx}/>)} 
            <Button className={cn(style.btn)}>Войти</Button>
            </form>
                <Link to={"/auth/registr"} className={cn(style.link)}>Регистрация</Link>
            </div>
        </main>
        </>
    )
}


export default Login