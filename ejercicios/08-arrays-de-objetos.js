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
const productos = [
    {nombre: "Café americano", precio: 4500, stock: 30},
    {nombre: "Capuchino", precio: 7000, stock: 0}
]


function resumenInventario(productos) {
    let totalProductos = 0;
    let unidadesTotales = 0;
    let valorInventario = 0;
    const agotados = [];

    for(let i = 0; i < productos.length; i++){
        totalProductos += 1;
        unidadesTotales = unidadesTotales + productos[i].stock;
        if(productos[i].stock > 0){
            valorInventario = valorInventario + (productos[i].precio * productos[i].stock);
        }else{
            agotados.push(productos[i].nombre);
        }
        
    }
    return {totalProductos, unidadesTotales, valorInventario, agotados};

}
console.log(resumenInventario(productos));
// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { resumenInventario };
