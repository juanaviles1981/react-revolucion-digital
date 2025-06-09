const numeros = [4, 7, 10, 3, 8];
let cantidadPares = 0;

numeros.forEach(num=>num % 2 === 0 && cantidadPares++);
console.log("Cantidad de números pares:", cantidadPares);
 
let contador = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        contador ++;
        
    }

}
console.log(contador)

// Un array es un objeto

const numeros2 = [4, 7, 10, 3, 8];

let mayores = numeros2.filter(num => num > 5);
console.log(mayores)