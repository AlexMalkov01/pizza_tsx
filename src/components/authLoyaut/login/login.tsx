import { Link } from "react-router-dom"
import React from "react"
import style from "./login.module.css"
import cn from "classnames"
import { IInput } from "../../input/input.type"
import Input from "../../input/input"
import useSetPassword from "../../../hooks/useSetPassword"
import Button from "../../button/button"

function Login () {
    const [inputs , setPassword] = useSetPassword();

    return (
        <> 
        <main className={cn(style.loginWrapper)}>
            <div className={cn(style.logoWrapper)}>
                <Link to={"/"}>
                <img src="https://i.pinimg.com/736x/78/a6/d2/78a6d2be0013a1b8cc9dbd7cac23e040.jpg" alt="logo" />
                </Link>
            </div>
            <div className={style.authWrapper}>
            <h1>Войти</h1>
            <form onSubmit={(e)=>{e.preventDefault()}} className={cn(style.authForm)} action=""> 
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