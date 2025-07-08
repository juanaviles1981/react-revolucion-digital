import "./App.css";
import { useState } from "react";
import LocalStorage from "./components/LocalStorage";
import SelectorIdiomas from "./components/SelectorIdiomas";
import Usuarios from "./components/Usuarios";
import Buscador from "./components/Buscador";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [usuario, setUsuario] = useState("");
  return (
    <>

      <LocalStorage />
      
      <SelectorIdiomas changeMensaje={(e) => setMensaje(e)} />
      <h2>{mensaje}</h2>

      <Usuarios changeUsuario={(e) => setUsuario(e)} />
      <h2>{usuario}</h2>

      <Buscador />
      
    </>
  );
}

export default App;
