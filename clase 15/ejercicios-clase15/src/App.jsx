import "./App.css";
import CapturarTexto from "./components/CapturarTexto";
import ColorAleatorio from "./components/ColorAleatorio";
import MensajeConsola from "./components/MensajeConsola";
import SelectColor from "./components/SelectColor";
import Contador from "./components/Contador";

function App() {
  return (
    <>
      <h1>Ejercicios - Clase 15 - Revolución Digital</h1>
      <ColorAleatorio />
      <hr />
      <MensajeConsola />
      <hr />
      <CapturarTexto />
      <hr />
      <SelectColor />
      <hr />
      <Contador />
      <hr />
      <div>Alumno Juan Aviles</div>
    </>
  );
}

export default App;
