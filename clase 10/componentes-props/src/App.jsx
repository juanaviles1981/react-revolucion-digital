import Saludo from "./components/Saludo";
import { TituloSecundario, TituloTerciario } from "./components/Titulos";
import Titulos from "./components/Titulos";

function App() {
  
  let edad = 18;
  
  return <>
    <h1>Hola</h1>
    <Titulos/>
    <TituloSecundario />
    {/* <TituloTerciario /> */}
    <Saludo nombre="Juan" />
    {edad >= 18 ? <h2>Eres mayor de edad</h2> : <h2>No eres mayor de edad</h2>}
  </>;
}

export default App;
