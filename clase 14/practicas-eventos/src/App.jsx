import { useState } from "react";
import "./App.css";
import { Hijo } from "./components/Hijo";
import { Todos } from "./components/Todos";

function App() {
  const [color, setColor] = useState("green");

  return (
    <div style={{ backgroundColor: color }}>
      <h2>Color actual: {color}</h2>
      <Hijo setColor={setColor} />

      {/* <Todos /> */}
    </div>
  );
}

export default App;
