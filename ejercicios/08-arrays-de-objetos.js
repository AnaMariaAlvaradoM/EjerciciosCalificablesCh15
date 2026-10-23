// ============================================================
// Ejercicio 08 · Arrays de objetos (integrador)
// ============================================================
// El dueño quiere un resumen de todo el inventario en un solo objeto.
// Recibes un array de productos como los que creaste en el ejercicio 07.
//
// Crea la función resumenInventario(productos) que retorne:
//   - totalProductos  → cuántos productos hay en el array
//   - unidadesTotales → la suma del stock de todos
//   - valorInventario → la suma de (precio * stock) de cada producto
//   - agotados        → array con los NOMBRES de los productos con stock 0
//
// Ejemplo:
//   resumenInventario([
//     { nombre: "Café americano", precio: 4500, stock: 30 },
//     { nombre: "Capuchino", precio: 7000, stock: 0 },
//   ])
//   → { totalProductos: 2, unidadesTotales: 30,
//       valorInventario: 135000, agotados: ["Capuchino"] }
// ============================================================

function resumenInventario(productos) {
const totalProductos = productos.map(nombre=>nombre.nombre)
const stock = productos.map(stock=>stock.stock)
const valor = productos.map(precio=>precio.precio*precio.stock)
let totalStock = 0
let valorStock = 0
for(const sumaStock of stock){
  totalStock += sumaStock
}
for(const sumaInventario of valor){
  valorStock += sumaInventario
}
const filtroProductos = productos.filter(n=>n.stock === 0)
const agotados = filtroProductos.map(n=>n.nombre)

  resumen= {
  totalProductos: totalProductos.length,
  unidadesTotales: totalStock,
  valorInventario: valorStock,
  agotados: agotados,
}
return resumen
}

console.log(resumenInventario)
// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { resumenInventario };
