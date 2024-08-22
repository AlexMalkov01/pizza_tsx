import { IButton } from "./button.type"

function Button ({children}:IButton) {

    return <button>
            {children}
         </button>
}


export default Button
