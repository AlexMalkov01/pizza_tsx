import { useState } from 'react'
import './App.css'
import Input from './components/input/input'
import { IInput } from './components/input/input.type'
import useSetPassword from './hooks/useSetPassword'
import { Link, Outlet } from 'react-router-dom'


function App() {

  const [inputs , setPassword] = useSetPassword()
  return (
    <>
    <div className='conteiner'>
    <h1>Регистрация</h1>
    <form onSubmit={(e)=>{e.preventDefault()}} className='login-fo' action=""> 
      { inputs.map(( input:IInput , idx:number )=> <Input  isViewDetailBtn={input?.id ==="Password"} onClick={setPassword} {...input} key={idx}/>)} 
    </form>
    </div> 
    </> 
  )
}

export default App
