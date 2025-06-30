import { useState } from 'react'
import './App.css'
import { Apellido } from './components/Apellido'
import { Nombre } from './components/Nombre'
import { Email } from './components/Email'

function App() {

  const [form, setForm] = useState(
    {
      nombre: "", // propiedad inicial
      apellido: "", // propiedad inicial
      email: "" // propiedad inicial
    }
  )

  const handleChange = (propiedad, valor) => {
    setForm(propiedadesIniciales => ({
      ...propiedadesIniciales,
      [propiedad]: valor
    }))
  }

  const handleEnviar = () => {
    alert(`
      Nombre: ${form.nombre}
      Apellido: ${form.apellido}
      email: ${form.email}`
    )
  }

  return (
    <>
      <h1>Formulario</h1>
      <Nombre onChange={(valor) => handleChange("nombre", valor)} />

      <Apellido valor={form.apellido} onChange={(valor) => handleChange("apellido", valor)} />

      <Email valor={form.email} onChange={(valor) => handleChange("email", valor)} />

      <button onClick={handleEnviar}>Enviar datos</button>

    </>
  )
}

export default App