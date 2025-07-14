import { useState } from "react";
import "./ReparacionesInforme.css";

export default function ReparacionesInforme({
  reparaciones,
  setReparaciones,
  modoOscuro,
}) 
{
  // Estados para filtros
  const [filtroEstado, setFiltroEstado] = useState("");
  const [filtroImportancia, setFiltroImportancia] = useState("");

  //Estados para editar
  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({});

  // Se usa el metodo splice con el indice porque las repaciones no tiene un indice
  // Si lo tuvieran usaria metodo filter
  const handleEliminar = (index) => {
    const nuevas = [...reparaciones];
    nuevas.splice(index, 1);
    setReparaciones(nuevas)
    };


  const filtradas = reparaciones.filter((r) => {
    return (
      (filtroEstado ? r.estado === filtroEstado : true) &&
      (filtroImportancia ? r.importancia === filtroImportancia : true)
    );
  });

  return (
    <div
      className={`reparaciones-contenedor ${modoOscuro ? "modo-oscuro" : ""}`}
    >
      <h1 className="titulo">Informe de Reparaciones</h1>

      <div className="filtros">
        <select
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
          className="form-select"
        >
          <option value="">Filtrar por estado</option>
          <option value="pendiente">Pendiente</option>
          <option value="reparado">Reparado</option>
          <option value="no-reparado">No se puede reparar</option>
          <option value="entregado">Entregado</option>
        </select>

        <select
          value={filtroImportancia}
          onChange={(e) => setFiltroImportancia(e.target.value)}
          className="form-select"
        >
          <option value="">Filtrar por importancia</option>
          <option value="urgente">Urgente</option>
          <option value="no-urgente">No urgente</option>
        </select>
      </div>

      <div className="row">
        {filtradas.map((r, index) => (
          <div key={index} className="card reparacion-card">
            <div className="card-body">
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editForm.cliente}
                    onChange={(e) =>
                      setEditForm({ ...editForm, cliente: e.target.value })
                    }
                    className="form-input"
                  />
                  <input
                    type="text"
                    value={editForm.dispositivo}
                    onChange={(e) =>
                      setEditForm({ ...editForm, dispositivo: e.target.value })
                    }
                    className="form-input"
                  />
                  <input
                    type="date"
                    value={editForm.fecha}
                    onChange={(e) =>
                      setEditForm({ ...editForm, fecha: e.target.value })
                    }
                    className="form-input mb-2"
                  />
                  <textarea
                    value={editForm.problema}
                    onChange={(e) =>
                      setEditForm({ ...editForm, problema: e.target.value })
                    }
                    className="form-textarea mb-2"
                  />
                  <select
                    value={editForm.estado}
                    onChange={(e) =>
                      setEditForm({ ...editForm, estado: e.target.value })
                    }
                    className="form-select mb-2"
                  >
                    <option value="pendiente">Pendiente</option>
                    <option value="reparado">Reparado</option>
                    <option value="no-reparado">No se puede reparar</option>
                    <option value="entregado">Entregado</option>
                  </select>
                  <select
                    value={editForm.importancia}
                    onChange={(e) =>
                      setEditForm({ ...editForm, importancia: e.target.value })
                    }
                    className="form-select mb-2"
                  >
                    <option value="urgente">Urgente</option>
                    <option value="no-urgente">No urgente</option>
                  </select>
                  <input
                    type="number"
                    value={editForm.importe}
                    onChange={(e) =>
                      setEditForm({ ...editForm, importe: e.target.value })
                    }
                    className="form-input mb-2"
                  />
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => {
                      const nuevas = [...reparaciones];
                      nuevas[index] = editForm;
                      setReparaciones(nuevas);
                      setEditIndex(null);
                    }}
                  >
                    Guardar
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setEditIndex(null)}
                  >
                    Cancelar
                  </button>
                </>
              ) : (
                <>
                  <h5 className="card-title">
                    {r.cliente} - {r.dispositivo}
                  </h5>
                  <p className="card-text">
                    <strong>Fecha:</strong> {r.fecha} <br />
                    <strong>Problema:</strong> {r.problema} <br />
                    <strong>Estado:</strong> {r.estado} <br />
                    <strong>Importancia:</strong> {r.importancia} <br />
                    <strong>Importe:</strong> ${r.importe}
                  </p>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => {
                      setEditIndex(index);
                      setEditForm(r);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleEliminar(index)}
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

        {filtradas.length === 0 && <p>No hay reparaciones con esos filtros.</p>}
      </div>
    </div>
  );
}
