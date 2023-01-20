import React from 'react';
import './App.css';
import Contador from './components/Contador';

// Dois contadores, cada um com seu estado independente.
// https://facebook.github.io/create-react-app/docs/adding-typescript 

function App() {
  return (
    <div className="App">
      <Contador valorInicial={0} /> 
      <Contador />
    </div>
  );
}

export default App;


