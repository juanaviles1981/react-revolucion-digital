// Exportacion por defecto
function Titulos(){
return <h2>Hola desde Titulos por defecto</h2>
}

export default Titulos

//Exportacion nombrada
export const TituloSecundario = () =>{
  return <h2>hola desde TituloSecundario</h2>
}

export const TituloTerciario = function(){
  return <h2>Hola desde TituloTerciario</h2>
}