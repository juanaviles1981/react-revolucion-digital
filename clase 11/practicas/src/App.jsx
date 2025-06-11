import { Card } from './components/Card'
import datosUsuario from './data/datosUsuarios'

function App() {

  return (
    <>
     <Card nombre={datosUsuario.nombre} edad={datosUsuario.edad} email={datosUsuario.email} direccion ={datosUsuario.direccion} />

    </>
  )
}

export default App
