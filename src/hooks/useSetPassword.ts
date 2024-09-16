import { useState } from "react";
import inputsLogo from "../components/input/constant/inputsRendr"; 
import { IInput } from "../components/input/input.type";

function useSetPassword (stete) {
    const [inputs, setInput] = useState<IInput[]>(stete)

    function setPassword (e:React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault() 
      setInput(prev=> {
       return prev.map((input)=> {
          if (input.type === "password" && input.id ==="Password") return {...input, type:"text"}
          if (input.type === "text" && input.id ==="Password") return {...input, type:"password"}
          return input
        })
      }) 
    }
    return [inputs , setPassword ] 
}


export default useSetPassword