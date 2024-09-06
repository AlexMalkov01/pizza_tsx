import React, { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    size?: string
} 

export type { IButton }