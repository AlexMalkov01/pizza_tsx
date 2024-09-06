import { IInput } from "./input.type";
import style from "./input.module.css" 
import classNames from "classnames";
import Button from "../button/button";
import { ForwardedRef, forwardRef } from "react";
import { ISearch } from "../search/search.type";

const viewDetailImg = "/src/assets/Iconsmind-Outline-Eye-2.16.png" 

const Input = forwardRef<HTMLInputElement,IInput>(( { onClick ,labelFlex,labelTxt, id , isViewDetailBtn, ...props }, ref:ForwardedRef)  =>
    
    (
        <>
        <label className={classNames(null , {
           [style.RegLabel]: labelFlex === "flex"
        })} htmlFor={id}>
        {labelTxt}
        <input className={style.inpetLogo} id={id}
        ref={ref}
        {...props} 
        /> 
        {isViewDetailBtn && <button onClick={onClick} className={style.inputBtn}> <img src={viewDetailImg}></img></button>}
        </label>
        </>
    ))


export default Input