import { ButtonHTMLAttributes, ReactNode } from "react";

interface ISecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
children?: ReactNode,
color: string,
size?: string
}

export type {ISecondaryButtonProps}