import classNames from "classnames"
import style from "./button.module.css"
import { IButton } from "./button.type"

function Button ({children , className , ...props}:IButton) {

    return <button 
       {...props} className={classNames(style.buttonPrimary,className)}> 
            {children}
            </button>
}


export default Button
