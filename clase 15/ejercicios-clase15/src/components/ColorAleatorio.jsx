import { useState } from "react";

const ColorAleatorio = () => {
  const colores = ["red", "blue", "green", "yellow", "purple", "orange"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

  const [color, setColor] = useState(colorAleatorio);
  return (
    <>
      <h2>Ejercicio 1 - Colores random</h2>
      <div
        style={{
          backgroundColor: color,
          height: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setColor(colorAleatorio)}
          style={{
            background: color,
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Cambiar Color
        </button>
      </div>
    </>
  );
};

export default ColorAleatorio;
