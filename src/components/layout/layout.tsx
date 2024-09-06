import { Link, Outlet , NavLink } from "react-router-dom";
import style from "./layout.module.css"
import cn from "classnames"
import Button from "../button/button"; 

function Layout () {

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
                <Link to={"/auth/registr"} className={cn(style.link)}>
                <Button className={cn(style.reset)}>
                    <img className={cn(style.iconBtn)} src="/src/assets/power-button.svg" alt="power-button" />
                    Войти 
                </Button>
                </Link>
            </div>
            <div className={cn(style.content)}>
                <Outlet/> 
            </div>
        </div>
        </>
    )
}

export default Layout