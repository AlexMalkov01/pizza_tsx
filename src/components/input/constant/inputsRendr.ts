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

        {   type: "text",
            labelTxt:"Ваше имя",
            placeholder: "Имя",
            id:"name",
            labelFlex: "flex",
            name:"name"
        },
        {   
            type: "text",
            labelTxt:"Ваша фамилия",
            placeholder: "Фамилия",
            id:"surname",
            labelFlex: "flex",
            autoComplete:"current-password",
            name:"surname"
        },
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