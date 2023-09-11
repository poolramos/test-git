import React from 'react';
import Header from './components/Header';
import Info from './components/Info';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';
import './App.css';

const App = () => {
  return (
    <section className='App'>
      <div className='column1'>
        <Header />
        <Info />
      </div>
      <div className='column2'>
        <Experiencia />
        <Educacion />
      </div>
    </section>
  );
}

export default App;

