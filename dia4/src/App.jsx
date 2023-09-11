/* App.jsx */

import { useState } from 'react'
import './App.css'

function App() {
  const [estado, setEstado] = useState('hola');
  const [visible, setVisible] = useState(true);
  const [txtvalue, setTxtValue] = useState('');

  const [miLista,setMiLista] = useState([1,2,3,4]);
  const cambiarNombre = () => {
    setEstado('hola desde los estados');
  }
  function ocultar () {
    setVisible(!visible);
  }
  function añadir () {
    setMiLista([...miLista,5])
  }

  return (
    <>
    { visible ?

    <div id='lista'>
      {
        miLista
      }
    </div> : <></>
    }
    <input type="text" onChange={(e)=>{setTxtValue(e.target.value)}}></input>
    {txtValue}
    <button onClick={añadir}>Añadir</button>
    <button onClick={ocultar}>Esconder lista</button>
    </>
  )
}

export default App
