import { useState } from "react";
import { HeroSection } from "./components/Hero";
import { ReparacionesForm } from "./components/ReparacionesForm";
import ReparacionesInforme  from "./components/ReparacionesInforme";
import { Navbar } from "./components/Navbar";

function App() {
  const [showHero, setShowHero] = useState(true);
  const [vista, setVista] = useState("form"); // 'form' o 'informe'
  const [reparaciones, setReparaciones] = useState([]);
  const [modoOscuro, setModoOscuro] = useState(false);

  const handleEnter = () => {
    setShowHero(false);
  };

  return (
    <>
      {showHero ? (
        <HeroSection onEnter={handleEnter} />
      ) : (
        <div className={modoOscuro ? "modo-oscuro" : ""}>
          <Navbar
            setVista={setVista}
            modoOscuro={modoOscuro}
            setModoOscuro={setModoOscuro}
          />

          {vista === "form" && (
            <ReparacionesForm
              reparaciones={reparaciones}
              setReparaciones={setReparaciones}
              modoOscuro={modoOscuro}
              setModoOscuro={setModoOscuro}
            />
          )}

          {vista === "informe" && (
            <ReparacionesInforme
              reparaciones={reparaciones}
              setReparaciones={setReparaciones}
              modoOscuro={modoOscuro}
              setModoOscuro={setModoOscuro}
            />
          )}
        </div>
      )}
    </>
  );
}

export default App;
