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
  let totalUnidades = 0;
  let valorTotal = 0;
  let listaAgotados = [];

  for (let i = 0; i < productos.length; i++) {
    let productoActual = productos[i];

    totalUnidades = totalUnidades + productoActual.stock;

    valorTotal = valorTotal + (productoActual.precio * productoActual.stock);

    if (productoActual.stock === 0) {
      listaAgotados.push(productoActual.nombre);
    }
  }
  return {
    totalProductos: productos.length,
    unidadesTotales: totalUnidades,
    valorInventario: valorTotal,
    agotados: listaAgotados
  };
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { resumenInventario };
