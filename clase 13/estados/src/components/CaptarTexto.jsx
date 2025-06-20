import { useState } from "react";

export const CaptarTexto = () => {
  const [texto, setTexto] = useState("");

  function manejarCambios(e) {
    setTexto(e.target.value);
  }

  return (
    <div>
      <h2>Escribe algo aquí</h2>
      <form>
        <input
          type="text"
          placeholder="Escribe algo aquí"
          onChange={manejarCambios}
        />
      </form>
      <p style={{ fontSize: "24px" }}>
        {"Texto ingresado por usuario: " + texto}
      </p>
    </div>
  );
};
