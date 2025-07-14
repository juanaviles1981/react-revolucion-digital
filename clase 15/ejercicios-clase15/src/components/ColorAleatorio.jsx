import { useState, useEffect } from "react";

const ColorAleatorio = () => {
  const colores = ["red", "blue", "green", "yellow", "purple", "orange"];
  const obtenerColorAleatorio = () => {
    return colores[Math.floor(Math.random() * colores.length)];
  };

  // Empezamos con un color fijo para evitar hydration mismatch
  const [color, setColor] = useState("red");

  // Solo después de que el componente se monte, generamos el color aleatorio
  useEffect(() => {
    setColor(obtenerColorAleatorio());
  }, []);

  const cambiarColor = () => {
    setColor(obtenerColorAleatorio());
  };

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
          onClick={() => setColor(cambiarColor)}
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
