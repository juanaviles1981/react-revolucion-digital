import saludos from "../data/saludos";

export default function SelectorIdiomas({ changeMensaje }) {
  
    function modificarMensaje(e) {
    changeMensaje(e.target.value);
  }
  return (
    <select onChange={modificarMensaje}>
      {saludos.map((saludo) => (
        <option key={saludo.id} value={saludo.saludo}>{saludo.lenguaje}</option>
      ))}
    </select>
  );
}
