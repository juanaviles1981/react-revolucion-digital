import { useState } from "react";
import "./ReparacionesForm.css";

export function ReparacionesForm() {
  const [reparaciones, setReparaciones] = useState([]);
  const [modoOscuro, setModoOscuro] = useState(false);

  const [formulario, setFormulario] = useState({
    fecha: "",
    cliente: "",
    dispositivo: "celular",
    problema: "",
    estado: "pendiente",
    importe: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReparaciones([...reparaciones, formulario]);
    setFormulario({
      fecha: "",
      cliente: "",
      dispositivo: "celular",
      problema: "",
      estado: "pendiente",
      importe: ""
    });
  };

  return (
    <div className={`reparaciones-contenedor ${modoOscuro ? "modo-oscuro" : ""}`}>
      <div style={{ textAlign: "right", marginBottom: "1rem" }}>
        <button onClick={() => setModoOscuro(!modoOscuro)} className="boton">
          {modoOscuro ? "☀️" : "🌙"}
        </button>
      </div>

      <h1 className="titulo">CRN Reparaciones</h1>
      <p className="subtitulo">Registro de reparaciones de dispositivos electrónicos.</p>

      <form onSubmit={handleSubmit} className="reparaciones-formulario">
        <input
          type="date"
          name="fecha"
          value={formulario.fecha}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="text"
          name="cliente"
          placeholder="Cliente"
          value={formulario.cliente}
          onChange={handleChange}
          required
          className="form-input"
        />
        <select
          name="dispositivo"
          value={formulario.dispositivo}
          onChange={handleChange}
          className="form-select"
        >
          <option value="celular">Celular</option>
          <option value="pc">PC</option>
          <option value="notebook">Notebook</option>
          <option value="tablet">Tablet</option>
        </select>
        <textarea
          name="problema"
          rows={1}
          value={formulario.problema}
          onChange={handleChange}
          placeholder="Descripción del problema"
          required
          className="form-textarea"
        ></textarea>
        <select
          name="estado"
          value={formulario.estado}
          onChange={handleChange}
          className="form-select"
        >
          <option value="pendiente">Pendiente</option>
          <option value="reparado">Reparado</option>
          <option value="no-reparado">No se puede reparar</option>
          <option value="entregado">Entregado</option>
        </select>
        <input
          type="number"
          name="importe"
          value={formulario.importe}
          onChange={handleChange}
          placeholder="Importe"
          className="form-input"
        />
        <button type="submit" className="boton">Cargar reparación</button>
      </form>

      <div className="lista-reparaciones">
        <h2 className="seccion-titulo">Reparaciones registradas</h2>
        <ul className="reparaciones-lista">
          {reparaciones.map((reparacion, index) => (
            <li key={index} className="reparacion-item">
              <p><strong>Cliente:</strong> {reparacion.cliente}</p>
              <p><strong>Dispositivo:</strong> {reparacion.dispositivo}</p>
              <p><strong>Estado:</strong> {reparacion.estado}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


