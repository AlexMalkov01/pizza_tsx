import { HTMLAttributes, ReactNode } from "react";

interface IHader extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode
}

export type {IHader}