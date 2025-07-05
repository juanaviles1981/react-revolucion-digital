function LocalStorage() {
  let auto = {
    duenio: "Juan",
    puertas: 4,
    patente: "ABC123",
    dueniosAnteriores: ["Pedro", "Jose"],
  };

  console.log("Objeto normal: ", auto);

  let jsonAuto = JSON.stringify(auto);

  localStorage.setItem("objetoAuto", jsonAuto);

  console.log(localStorage.getItem("objetoAuto")); //Devuelve el JSON del objeto

  let autoLocalStorage = localStorage.getItem("objetoAuto");
  console.log(JSON.parse(autoLocalStorage)); //Se parsea a Objeto

  // Usos
  // Inicio de sesion
  // Carrito de compras
  // Modo oscuro / claro

  return <div>localStorage-ver consola</div>;
}

export default LocalStorage;
