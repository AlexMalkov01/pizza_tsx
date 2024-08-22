import { IInput } from "./input.type"

const inputsLogo:IInput[] = [
    {   type: "text",
        labelTxt:"Ваш email",
        placeholder: "Email",
        labelId:"inputEmail",
        labelFlex: "flex"
    },
    {   
        type: "password",
        labelTxt:"Ваш пароль",
        placeholder: "Пароль",
        labelId:"inputPassword",
        labelFlex: "flex",
        img:"src/assets/Iconsmind-Outline-Eye-2.16.png"
    }
    ]

export default inputsLogo