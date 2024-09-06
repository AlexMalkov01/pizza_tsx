import style from "./loader.module.css"
import cn from "classnames"

function Loader (){
    return (
        <div className={cn(style.loader)}></div>
    )
}

export default Loader