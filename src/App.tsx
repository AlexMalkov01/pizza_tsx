import { useState } from 'react'
import './App.css'
// import Button from './components/button'
// import classNames from 'classnames'
import Input from './components/input/input'
// import inputsLogo  from './components/input/inputsRendr'
import { IInput } from './components/input/input.type'
import useSetPassword from './hooks/useSetPassword'

function App() {

  const [inputs , setPassword] = useSetPassword()
  return (
    <>
    <div className='conteiner'>
    <h1>Регистрация</h1>
    <form className='login-fo' action=""> 
      { inputs.map(( el:IInput , idx:number )=> <Input onClick={setPassword} {...el} key={idx}/>)}
    </form>
    </div>
    </>
  )
}

export default App
