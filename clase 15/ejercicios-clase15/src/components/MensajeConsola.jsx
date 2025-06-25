import { mensajes } from "../mocks/mensajes";
import { useState } from "react";

const MensajeConsola = () => {
  const [mensaje, setMensaje] = useState("");

  function equipoAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * mensajes.length);
    setMensaje(mensajes[indiceAleatorio].mensaje);
  }

  return (
    <div>
      <h2>Ejercicio 2 - Mensaje Mejor Equipo</h2>
      <div>El mejor equipo de Argentina es {mensaje}</div>
      <button onClick={equipoAleatorio}>Elegir Equipo Random</button>
    </div>
  );
};

export default MensajeConsola;
