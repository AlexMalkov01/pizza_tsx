import style from "./layout.module.css"
import { Outlet , NavLink, useNavigate } from "react-router-dom";
import cn from "classnames"
import Button from "../button/button"; 
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { IUserProfile, userActions } from "../../store/slice/user";
import { RootStore } from "../../store/store";
import { regActions } from "../../store/slice/regist";
import { cartActions } from "../../store/slice/cart";

function Layout () {
    const loginLink = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((store:RootStore)=> store.cart.items)
    
    const getCaunt = useCallback(()=>{
       return cart.reduce((acc, i)=> acc+= i.count,0)
    },[cart])
    
    const { email, name, surname } = useSelector((state: RootState) => {
        
        const hasProfileData = (profile: IUserProfile): boolean => !!(profile.email || profile.name || profile.surname);
        const profile = hasProfileData(state.register.profile) ? state.register.profile : state.user.profile;
        return profile;
      });

     
    const jwtReg = useSelector((state:RootStore)=> state.register.jwt)
    const jwtLog = useSelector((state:RootStore)=> state.user.jwt)

    useEffect(()=>{
        if (jwtLog) {
            dispatch(userActions.parseToken())
        }
        if(jwtReg) {
            dispatch(regActions.parseToken()) 
        }
    },[jwtLog, jwtReg, dispatch])

    const clearProfile = () =>{ 
        dispatch(userActions.clearToken())
        dispatch(regActions.clearToken())
        dispatch(userActions.logaut())
        dispatch(regActions.logout())
        dispatch(cartActions.logaut())
    }

    return (
        <>
        <div className={cn(style.appMain)}> 
            <div className={style.userPanel}>
                <div className={cn(style.userInfo)}>
                    <img className={style.img} src="/src/assets/user_icon.svg" alt="user_icon" title="User-img"/>
                    <span className={cn(style.userName)}>{name} {surname}</span>
                    <span className={cn(style.userMail)}>{email}</span>
                </div>
                <div className={style.navbar}>
                    <NavLink to={"/"} className={({ isActive }) => cn(style.link,{
                         [style.active]: isActive ,
                         })}>
                        Меню
                    </NavLink>
                    <NavLink to={"/cont"} className={({ isActive }) => cn(style.link ,{ [style.active]: isActive})}>
                        Корзина 
                       {!!getCaunt() && <div className={cn(style.cauntCard)}>{getCaunt()}</div>}  
                    </NavLink>
                </div>
                <Button onClick={()=>{ 
                clearProfile()
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