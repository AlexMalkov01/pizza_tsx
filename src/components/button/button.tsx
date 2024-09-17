import classNames from "classnames"
import style from "./button.module.css"
import { IButton } from "./button.type"

function Button ({children , className ,size, ...props}:IButton) {

    return <button 
       {...props} className={classNames(style.buttonPrimary,className, {
        [style.bigBtn]: size === "bigBtn"
       })}> 
            {children}
            </button>
}


export default Button
