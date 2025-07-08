import { useState } from "react";

function Buscador() {
  let [tareas, setTareas] = useState([
    "Aprender React",
    "Hacer Ejercicios",
    "Leer un libro",
    "salir a caminar",
    "Salir de joda",
  ]);

  let [busqueda, setBusqueda] = useState("");

  let tareasFiltradas = tareas.filter((tarea) => {
    return tarea.toLowerCase().includes(busqueda.toLowerCase());
  });

  function modificarBusqueda(input) {
    setBusqueda(input.target.value);
  }

  return (
    <>
      <input type="text" onChange={modificarBusqueda} value={busqueda} />
      <ul>
        {tareasFiltradas.length > 0 ? (
          tareasFiltradas.map((tareaFiltrada) => (
            <li key={tareaFiltrada}>{tareaFiltrada}</li>
          ))
        ) : (
          <li>No se encontraron resultados</li>
        )}
      </ul>
    </>
  );
}
export default Buscador;
