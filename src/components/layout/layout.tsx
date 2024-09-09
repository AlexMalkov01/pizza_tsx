import { Link, Outlet , NavLink, Navigate, useNavigate } from "react-router-dom";
import style from "./layout.module.css"
import cn from "classnames"
import Button from "../button/button"; 

function Layout () {
    const loginLink = useNavigate()
    return (
        <>
        <div className={cn(style.appMain)}> 
            <div className={style.userPanel}>
                <div className={cn(style.userInfo)}>
                    <img src="/src/assets/user_icon.svg" alt="user_icon" title="User-img"/>
                    <span className={cn(style.userName)}>Alex Malkov</span>
                    <span className={cn(style.userMail)}>malkov_228369</span>
                </div>
                <div className={style.navbar}>
                    <NavLink to={"/"} className={({ isActive }) => cn(style.link,{ [style.active]: isActive })}>
                        Меню
                    </NavLink>
                    <NavLink to={"/cont"} className={({ isActive }) => cn(style.link,{ [style.active]: isActive })}>
                        Корзина
                    </NavLink>
                </div>
                <Button onClick={()=>{ 
                localStorage.removeItem("jsx"); 
                loginLink("/auth/login");
                }} className={cn(style.reset)}>
                    <img className={cn(style.iconBtn)} src="/src/assets/power-button.svg" alt="power-button" />
                    Выйти
                </Button>
            </div>
            <div className={cn(style.content)}>
                <Outlet/> 
            </div>
        </div>
        </>
    )
}

export default Layout