import { Link, useNavigate } from "react-router-dom"
import React, { FormEvent, useEffect } from "react"
import { IInput } from "../../input/input.type"
import Input from "../../input/input"
import useSetPassword from "../../../hooks/useSetPassword"
import Button from "../../button/button" 
import cn from "classnames"
import style from "./registr.module.css"
import { formReg } from "../../input/constant/inputsRendr"
import { LoginForm } from "../login/login"
import { registration} from "../../../store/slice/regist"
import { useDispatch, useSelector } from "react-redux"
import { login, userSlice } from "../../../store/slice/user"
import { RootStore } from "../../../store/store"

function Regist () {
    const [inputs , setPassword] = useSetPassword(formReg);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const jwt = useSelector((state:RootStore)=> state.register.jwt)
    
    async function  postForm (e:FormEvent) {
        e.preventDefault() 
        const target = e.target as typeof e.target & LoginForm
        const {name,surname,password,email} = target ;
         dispatch(registration({name:name?.value,surname:surname?.value,email:email?.value,password:password?.value}))
    } 

    useEffect(()=>{
        if (jwt ) {
            navigate("/");
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
            <h1>Регистрация</h1>
            <form onSubmit={postForm} className={cn(style.authForm)} action=""> 
            { inputs.map(( input:IInput , idx:number )=> <Input  isViewDetailBtn={input?.id ==="Password"} onClick={setPassword} {...input} key={idx}/>)} 
            <Button className={cn(style.btn)}>Зарегестрироваться</Button>
            </form>
                <Link to={"/auth/login"} className={cn(style.link)}>Уже есть страница</Link>
            </div>
        
        </main>
        </>
    )
}

export default Regist