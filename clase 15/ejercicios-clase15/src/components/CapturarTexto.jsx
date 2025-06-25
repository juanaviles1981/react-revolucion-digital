import React, { useState } from "react";

const CapturarTexto = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Ejercicio 3 - Input controlado</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Escribe algo..."
      />
      <p>Texto capturado: {inputValue}</p>
    </div>
  );
};

export default CapturarTexto;
