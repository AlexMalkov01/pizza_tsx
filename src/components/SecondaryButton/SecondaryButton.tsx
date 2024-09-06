import { ISecondaryButtonProps } from "./SecondaryButton.type"
import styles from "./SecondaryButton.module.css"
import cn from "classnames"

function SecondaryButton ({color, children,...props}:ISecondaryButtonProps) {

    return (
        <button className={cn(styles.button , {
            [styles.whiteBtn]: color === "white",
            [styles.orangeBtn]: color === "orange"
        })}>
            {children}
        </button>
    )
}

export default SecondaryButton