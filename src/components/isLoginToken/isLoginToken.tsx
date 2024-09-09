import { Navigate } from "react-router-dom"
import React, { ReactNode } from "react"
import { IIsLogin } from "./isLoginToken.type"

function IsLoginToken ({children}:IIsLogin) {
    
    const authorization =  localStorage.getItem("jsx") ?? null as string | null
    if (!authorization ) {
        return <Navigate to={"/auth/login"}/> 
    }

    return (
        <>
        {children}
        </>
    ) 
}


export default IsLoginToken