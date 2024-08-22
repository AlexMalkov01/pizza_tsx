import { useState } from "react";
import inputsLogo from "../components/input/inputsRendr"; 
import { IInput } from "../components/input/input.type";

function useSetPassword () {
    const [inputs, setInput] = useState<IInput[]>(inputsLogo)

    function setPassword (e:React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault() 
      setInput(prev=> {
       return prev.map((el,idx)=> {
          if (el.type === "password" && idx === 1) {
            console.log("TEST");
            
            return {...el, type:"text"}
          } 
          if (el.type === "text" && idx === 1) {
            console.log("TEST2");
            
            return {...el, type:"password"}
          }  
  
          return el
        })
      }) 
    }
    return [inputs , setPassword ] 
}


export default useSetPassword