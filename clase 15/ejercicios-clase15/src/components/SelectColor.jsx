import { useState } from "react";

const SelectColor = () => {
  const [color, setColor] = useState("#FFFFFF");
  const cambiarColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <h2>Ejercicio 4 - Seleccion color de fondo</h2>
      <div
        style={{
          backgroundColor: color,
          height: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <select onChange={cambiarColor}>
          <option value="#FFFFFF">Blanco</option>
          <option value="#74ACDF">Celeste</option>
          <option value="#FF0000">Rojo</option>
          <option value="#28A745">Verde</option>
        </select>
      </div>
    </>
  );
};

export default SelectColor;
