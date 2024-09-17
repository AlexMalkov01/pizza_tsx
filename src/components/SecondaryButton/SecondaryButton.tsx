import { ISecondaryButtonProps } from "./SecondaryButton.type"
import styles from "./SecondaryButton.module.css"
import cn from "classnames"

function SecondaryButton ({size, color, children, ...props}:ISecondaryButtonProps) {

    return (
        <button {...props} className={cn(styles.button , {
            [styles.whiteBtn]: color === "white",
            [styles.orangeBtn]: color === "orange",
            [styles.btnMin]: size === "min"
        })}>
            {children}
        </button>
    )
}

export default SecondaryButton