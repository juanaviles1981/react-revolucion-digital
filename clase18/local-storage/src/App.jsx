import { useState } from "react";
import "./App.css";
import SelectorIdiomas from "./components/SelectorIdiomas";
import Usuarios from "./components/Usuarios";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [usuario, setUsuario] = useState("");
  return (
    <>
      <SelectorIdiomas changeMensaje={(e) => setMensaje(e)} />
      <h2>{mensaje}</h2>

      <Usuarios changeUsuario={(e) => setUsuario(e)} />
      <h2>{usuario}</h2>
    </>
  );
}

export default App;
