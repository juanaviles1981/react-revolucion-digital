import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <h2>Ejercicio 5 - Contador</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Contador: {contador}</p>
        <button
          onClick={incrementar}
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Incrementar
        </button>
      </div>
    </>
  );
};

export default Contador;
