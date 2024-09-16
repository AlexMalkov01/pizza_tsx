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



    export const formReg = [

        {   type: "email",
            labelTxt:"Ваш email:",
            placeholder: "Введите email",
            id:"Email",
            labelFlex: "flex",
            name:"email"
        },
        {   
            type: "password",
            labelTxt:"Ваш пароль:",
            placeholder: "Введите пароль",
            id:"Password",
            labelFlex: "flex",
            autoComplete:"current-password",
            name:"password"
        },
        {   type: "text",
            labelTxt:"Ваше имя:",
            placeholder: "Введите ваше имя",
            id:"name",
            labelFlex: "flex",
            name:"name"
        },
        {   
            type: "text",
            labelTxt:"Ваша фамилия:",
            placeholder: "Введите вашу фамилию",
            id:"surname",
            labelFlex: "flex",
            autoComplete:"current-password",
            name:"surname"
        }
    ]

export default inputsLogo