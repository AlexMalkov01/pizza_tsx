import { HTMLAttributes, HtmlHTMLAttributes } from "react";

interface IProductCard extends Omit<HTMLAttributes<HTMLDivElement>,"id"> {
    name:string,
    ingredients: string[],
    price: number,
    rating:number,
    id: number,
    image:string
}

export type {IProductCard}