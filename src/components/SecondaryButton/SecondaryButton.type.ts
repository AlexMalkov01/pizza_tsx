import { ButtonHTMLAttributes, ReactNode } from "react";

interface ISecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
children: ReactNode,
color: string
}

export type {ISecondaryButtonProps}