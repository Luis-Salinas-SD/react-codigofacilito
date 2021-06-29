import React from 'react';
import { render } from 'react-dom';

//Component Saludo - Exp. Javascript

const Saludo = () => {
  const name = 'Luis';
  return <p> Mi nombre es: {name}</p>;
};

//component App en el cual se manda a llamar el componente Saludo
const App = () => {
  return (
    <h1>
      Componente App: <NombresComponent />
    </h1>
  );
};

// Condiciones en JSX

function SaludoIdioma({ idioma }) {
  /* if (idioma === 'es') {
    return <span> Hola </span>;
  } else {
    return <span> hello </span>;
  } */
  return (
    <div>
      {idioma === 'es' && <span> Hola </span>}
      {idioma === 'en' && <span> Hello </span>}
    </div>
  );
}

// Ciclos
//arreglo
const nombres = ['luis', 'simba', 'dany', 'tuli', 'nena'];

/* function getNombres() {
  const elementosLista = [];
  for (var i = 0; i < nombres.length; i++) {
    elementosLista.push(<li>{nombres[i]} </li>);
  }
  return elementosLista;
} */
//componente
const NombresComponent = () => {
  return (
    <ul>
      {nombres.map(element => (
        <li> {element} </li>
      ))}
    </ul>
  );
};

render(<App />, document.getElementById('react-app'));
