
import { useState } from "react";

const MensajeConsola = () => {
  const [mensaje, setMensaje] = useState("");
const mensajes = [{
    id: 1,
    mensaje: "Boca"
},
{
    id: 2,
    mensaje: "River"
},
{
    id: 3,
    mensaje: "Racing"
},
{
    id: 4,
    mensaje: "Independiente"
}]
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
