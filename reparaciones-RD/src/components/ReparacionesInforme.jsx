import { useState } from "react";
import "./ReparacionesInforme.css";

export default function ReparacionesInforme({
  reparaciones,
  setReparaciones,
  modoOscuro,
  setModoOscuro
}) {
  const [filtroEstado, setFiltroEstado] = useState("");
  const [filtroImportancia, setFiltroImportancia] = useState("");

  const handleEliminar = (index) => {
    const nuevas = [...reparaciones];
    nuevas.splice(index, 1);
    setReparaciones(nuevas);
  };

  const filtradas = reparaciones.filter((r) => {
    return (
      (filtroEstado ? r.estado === filtroEstado : true) &&
      (filtroImportancia ? r.importancia === filtroImportancia : true)
    );
  });

  return (
    <div className={`reparaciones-contenedor ${modoOscuro ? "modo-oscuro" : ""}`}>
      <div style={{ textAlign: "right", marginBottom: "1rem" }}>
        <button onClick={() => setModoOscuro(!modoOscuro)} className="boton">
          {modoOscuro ? "☀️" : "🌙"}
        </button>
      </div>

      <h1 className="titulo">Informe de Reparaciones</h1>

      <div className="filtros mb-3">
        <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)} className="form-select">
          <option value="">Filtrar por estado</option>
          <option value="pendiente">Pendiente</option>
          <option value="reparado">Reparado</option>
          <option value="no-reparado">No se puede reparar</option>
          <option value="entregado">Entregado</option>
        </select>

        <select value={filtroImportancia} onChange={(e) => setFiltroImportancia(e.target.value)} className="form-select mt-2">
          <option value="">Filtrar por importancia</option>
          <option value="urgente">Urgente</option>
          <option value="no-urgente">No urgente</option>
        </select>
      </div>

      <div className="row">
        {filtradas.map((r, index) => (
          <div key={index} className="card reparacion-card mb-3">
            <div className="card-body">
              <h5 className="card-title">{r.cliente} - {r.dispositivo}</h5>
              <p className="card-text">
                <strong>Fecha:</strong> {r.fecha} <br />
                <strong>Problema:</strong> {r.problema} <br />
                <strong>Estado:</strong> {r.estado} <br />
                <strong>Importancia:</strong> {r.importancia} <br />
                <strong>Importe:</strong> ${r.importe}
              </p>
              <button onClick={() => handleEliminar(index)} className="btn btn-danger btn-sm">
                Eliminar
              </button>
              {/* Aquí podrías incluir lógica para editar si querés */}
            </div>
          </div>
        ))}
        {filtradas.length === 0 && <p>No hay reparaciones con esos filtros.</p>}
      </div>
    </div>
  );
}
