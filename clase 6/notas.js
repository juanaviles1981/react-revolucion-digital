let nota1 = 0;
let nota2 = 0;
let nota3 = 0;

let calificacion;

if (
  nota1 < 0 ||
  nota1 > 10 ||
  nota2 < 0 ||
  nota2 > 10 ||
  nota3 < 0 ||
  nota3 > 10
) {
  console.log("Nota no válida: las notas deben estar entre 0 y 10.");
} else {
  let promedio = (nota1 + nota2 + nota3) / 3;

  switch (true) {
    case promedio >= 9:
      calificacion = "A";
      break;
    case promedio >= 8:
      calificacion = "B";
      break;
    case promedio >= 7:
      calificacion = "C";
      break;
    case promedio >= 6:
      calificacion = "D";
      break;
    default:
      calificacion = "F";
  }

  console.log(
    `Tu promedio es ${promedio} y tu calificación es ${calificacion}.`
  );
}
/* 
Declarar una función sumarNumeros que tome un array de números.
Usar el método reduce para sumar todos los números en el array.
Retornar la suma. */

function sumarNumeros(numeros) {
    return numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
  }

  
const numerosParaSumar = [5, 10, 15, 20, 25];

console.log(sumarNumeros(numerosParaSumar))