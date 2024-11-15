import React from 'react';
import Calculator from './components/Calculator'; // Importa el componente Calculator
import './App.css'; // Opcional: Si tienes un archivo de estilos globales

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Calculator />
    </div>
  );
}

export default App;
