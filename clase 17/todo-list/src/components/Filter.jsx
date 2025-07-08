import React from 'react'
import './Filter.css'

function Filter({mostrarActivas, setMostrarActivas}) {
  return (
    <div className="filter-container">
        <label className="filter-label">
            <input 
                type="checkbox" 
                className="filter-checkbox"
                checked={mostrarActivas}
                onChange={()=>setMostrarActivas(!mostrarActivas)}
            />
            <span className="filter-text">
                Mostrar tareas pendientes
            </span>
        </label>
    </div>
  )
}

export default Filter