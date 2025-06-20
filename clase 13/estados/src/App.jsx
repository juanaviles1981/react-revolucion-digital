import { CaptarTexto } from "./components/CaptarTexto";
import { Ejemplo1 } from "./components/Ejemplo1";
import { Ejemplo2 } from "./components/Ejemplo2";
import { HookState } from "./components/HookState";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Ejemplo1 />
      <br />
      <hr />
      <Ejemplo2 /> */}
      <HookState />
      <CaptarTexto/>
    </div>
  );
}

export default App;
