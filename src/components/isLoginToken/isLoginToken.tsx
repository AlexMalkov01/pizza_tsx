import { Navigate } from "react-router-dom"
import React, { ReactNode } from "react"
import { IIsLogin } from "./isLoginToken.type"
import { useSelector } from "react-redux"
import { RootStore } from "../../store/store"

function IsLoginToken ({children}:IIsLogin) {

    const authorization =  useSelector((store:RootStore)=> store.user.jwt ) 
    const authorizationReg =  useSelector((store:RootStore)=> store.register.jwt)
   
    if (!authorization && !authorizationReg) {
        return <Navigate to={"/auth/login"}/> 
    }

    return (
        <>
        {children}
        </>
    ) 
}


export default IsLoginToken