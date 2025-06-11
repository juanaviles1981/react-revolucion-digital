const frutas = ["manzana", "banana", "pera"]
console.log(frutas)
frutas.push("uva")
console.log(frutas)
frutas.pop()
console.log(frutas)

const numeros = [1, 2, 3, 4, 5]
console.log(`El array original es ${numeros}`)

const numerosDuplicados = numeros.map(numero=>{
    return numero * 2
})

console.log("el array modificado es " + numerosDuplicados)
