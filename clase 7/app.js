const inventario = [
    {nombre: "notebook", precio: 1000, cantidad: 10},
    {nombre: "celular",  precio: 500, cantidad: 20},
    {nombre:"tablet", precio: 300, cantidad: 4}

]

// Los productos que cuestan menos son

const menores1000 = inventario.filter(producto => producto.precio < 1000);

const nombresMenores1000 = menores1000.map(producto => producto.nombre);

console.log(nombresMenores1000)

const totalStock = inventario.reduce((acum, prod) => acum + prod.precio, 0)

console.log(totalStock)