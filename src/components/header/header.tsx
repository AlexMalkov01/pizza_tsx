import { IHader } from "./header.type"
import style from "./header.module.css"
import cn from "classnames"
function Header ({children, className, ...props}:IHader) {

    return (
        <h1 
        className={cn(style.h1 , className)}>
            {children}
        </h1>
    )
}


export default Header