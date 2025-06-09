// const h1El = document.querySelector("h1");
// const h2El = document.querySelector("h2");

// h1El.addEventListener("click", () => {
//   // alert("no se puede copiar el contenido")
//   h1El.style.color = "blue";
//   h1El.textContent = "texto cambiado";
// });

// const usuario = " Juan";
// h2El.addEventListener("click", () => {
//   h2El.innerText += `${usuario}`;
// });

// const inputEl = document.getElementById("nombre");
// const btnEl = document.getElementById("mostrarBtn");
// const resultadoEl = document.getElementById("resultado");

// console.log(inputEl, btnEl, resultadoEl);

// btnEl.addEventListener("click", ()=>{
//    const nombre = inputEl.value;
// //    resultadoEl.style.marginTop = "10px";
//    resultadoEl.textContent = `Hola ${nombre}`;
// })

const btnEl = document.getElementById("crearCardBtn");
console.log(btnEl);
const contenedorEl = document.getElementById("contenedorCard");
console.log(contenedorEl);

btnEl.addEventListener("click", () => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <h3>Hola card</h3>
        <p>Esta es una card creada con JS</p>
    `;
contenedorEl.appendChild(card);

});
