import { InputHTMLAttributes , ReactNode } from "react";


interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode,
    labelTxt?: string,
    labelFlex?:"flex"
    onClick?:(e:React.MouseEvent<HTMLButtonElement>)=>void,
    isViewDetailBtn?: boolean ,
} 


export type {IInput}