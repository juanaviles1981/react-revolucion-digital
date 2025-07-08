import React from 'react'
import usuarios from '../data/usuarios'

export default function Usuarios({changeUsuario}) {
  
  function cambiarUsuario(e){
    changeUsuario(e.target.value)
  }
    return (
    // Seleccion nombre y muestra apodo
    <select onChange={cambiarUsuario}>
        {usuarios.map((usuario)=>(
            <option key={usuario.nombre} value={usuario.apodo}>{usuario.nombre}</option>
        ))}
    </select>
  )
}
