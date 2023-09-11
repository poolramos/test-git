import { useState } from 'react';
import './App.css'

function App() {
  const experiencia = [
  { id: 1, fecha: "01/09/2023", titulo: "web developer" }, 
  { id: 2, fecha: "30/08/2023", titulo: "fronted developer" },
  { id: 1, fecha: "31/08/2023", titulo: "backend developer" }];

  const [data, setData] = useState(experiencia);

  const handleSubmit = (event) => {
    event.preveventDefault();
    
    const fecha = e.target[0].value;
    const titulo = e.target[1].value;

    const obj = {id:data.length + 1, fecha: fecha, titulo: titulo};
    setData([...data. obj]);
  };

  const handleClick = (event) => {
    event.preveventDefault();
  };
  return (
    <>
    <h2>Ingresar un empleo</h2>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="fecha">Ingresa la fecha</label>
        <input type="date" id="fecha" />
        <br />
        <label htmlFor="titulo">Ingresa el titulo:</label>
        <input type="text" id="titulo" />
        <br />
        <button type="submit">Guardar</button>
      </form>

      <hr />

      <button onClick={handleClick}>Desplegar informacion</button>

      <section className={active ? "active" : "no.active"}>
      {data.map((obj) => (
        <div key={obj.id}>
          <h2>{obj.titulo}</h2>
          <p>Fecha:{obj.fecha}</p>
        </div>
        ))}
      </section>
    </>
  )
}

export default App
