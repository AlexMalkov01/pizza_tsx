import { InputHTMLAttributes , ReactNode } from "react";


interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode,
    labelId?: string,
    labelTxt?: string,
    labelFlex?:"flex"
    img?: string,
    onClick?:(e:React.MouseEvent<HTMLButtonElement>)=>void
} 


export type {IInput}