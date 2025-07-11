import "./Navbar.css";

export function Navbar({ setVista, modoOscuro, setModoOscuro }) {
  return (
    <nav className={`navbar-crn ${modoOscuro ? "modo-oscuro" : ""}`}>
      <div className="navbar-buttons">
        <button className="boton" onClick={() => setVista("form")}>
          Cargar Reparación
        </button>
        <button className="boton" onClick={() => setVista("informe")}>
          Ver Informe
        </button>
      </div>
      <div>
        <button
          onClick={() => setModoOscuro(!modoOscuro)}
          className="boton boton-modo"
        >
          {modoOscuro ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
