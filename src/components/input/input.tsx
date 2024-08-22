import { IInput } from "./input.type";
import style from "./input.module.css" 
import classNames from "classnames";
import Button from "../button/button";

function Input ( { button ,img,labelFlex,labelTxt, labelId , children ,...props}:IInput) {
    console.log(img)
    
    return (
        <>
        <label className={classNames(null , {
           [style.RegLabel]: labelFlex === "flex"
        })} htmlFor={labelId}>
        {labelTxt}
        <input className={style.inpetLogo} id={labelId}
        {...props} 
        /> 
        {!!img && <button onClick={button} className={style.inputBtn}> <img src={img}></img></button>}
        </label>
        </>
    )
}

export default Input