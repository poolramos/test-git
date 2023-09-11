import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Field from './components/Field'

function App() {
  const lista = ['usuario','fechaNacimiento','contraseña','email'];

  return (
    <>
    <h1>Mi pagina de twitter</h1>
    <Field lista={lista}></Field>
    </>
  )
}

export default App
