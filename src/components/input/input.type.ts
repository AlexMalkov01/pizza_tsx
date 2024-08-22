import { InputHTMLAttributes , ReactNode } from "react";


interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode,
    labelId?: string,
    labelTxt?: string,
    labelFlex?:"flex"
    img?: string,
    button?:(e:React.MouseEvent<HTMLButtonElement>)=>void
} 


export type {IInput}