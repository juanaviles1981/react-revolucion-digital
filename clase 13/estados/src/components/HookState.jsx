import { useState } from "react";
import "./HookState.css";

export const HookState = () => {
  const [contador, setContador] = useState(0);

  function handleSuma() {
    setContador(contador + 1);
  }
  function handleResta() {
    setContador(contador - 1);
  }

  function handleReset() {
    setContador(0);
  }

  return (
    <div className="hookState">
      <h2>Contador de clicks: {contador}</h2>
      <button onClick={handleSuma}>Aumentar</button>
      <button onClick={handleResta}>Disminuir</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
};

// Que es el estado en React
// Es una forma de almacenar y gestionar datos que pueden cambiar a lo largo del tiempo de un componente

// Click
// Usuario escribe input

// Crea una variable con memoria
