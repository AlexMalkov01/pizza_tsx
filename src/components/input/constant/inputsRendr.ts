import { IInput } from "./input.type"

const inputsLogo:IInput[] = [
    {   type: "email",
        labelTxt:"Ваш email",
        placeholder: "Email",
        id:"Email",
        labelFlex: "flex",
        name:"email"
    },
    {   
        type: "password",
        labelTxt:"Ваш пароль",
        placeholder: "Пароль",
        id:"Password",
        labelFlex: "flex",
        autoComplete:"current-password",
        name:"password"
    }
    ]

export default inputsLogo