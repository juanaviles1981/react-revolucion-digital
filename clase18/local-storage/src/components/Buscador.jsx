import React from "react";

export default function Buscador() {
  let auto = {
    duenio: "Juan",
    puertas: 4,
    patente: "ABC123",
    dueniosAnteriores: ["Pedro", "Jose"],
  };
  console.log("Objeto normal: ", auto);

  //let jsonAuto = JSON.stringify(auto);

  //console.log("JSON stringify", jsonAuto);

  //console.log("JSON parse", JSON.parse(jsonAuto));


//   var textoTmp = "Revolucion Digital"

//   localStorage.setItem("Nombre llave",textoTmp);


  let jsonAuto = JSON.stringify(auto)

  localStorage.setItem("objetoAuto", jsonAuto)

  
  console.log(localStorage.getItem("objetoAuto")) //Devuelve el JSON del objeto
  
  let autoLocalStorage = localStorage.getItem("objetoAuto")
  console.log(JSON.parse(autoLocalStorage)) //Se parsea a Objeto
  

  // Usos
  // Inicio de sesion 
  // Carrito de compras
  // Modo oscuro / claro
  return <div>Buscador</div>;
}
