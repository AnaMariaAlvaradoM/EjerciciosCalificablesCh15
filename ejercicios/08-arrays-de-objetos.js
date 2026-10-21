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
  // 1. Inicializar las variables que acumularán los datos
  let unidadesTotales = 0;
  let valorInventario = 0;
  const agotados = [];

  // 2. Recorrer el array de productos
  for (let i = 0; i < productos.length; i++) {
    const prod = productos[i];

    // Sumar el stock al total de unidades
    unidadesTotales += prod.stock;

    // Calcular el valor de este producto (precio * stock) y sumarlo al total
    valorInventario += prod.precio * prod.stock;

    // Si el stock es 0, guardar solo el NOMBRE en el array de agotados
    if (prod.stock === 0) {
      agotados.push(prod.nombre);
    }
  }

  // 3. Retornar el objeto final con las 4 propiedades requeridas
  return {
    totalProductos: productos.length,
    unidadesTotales: unidadesTotales,
    valorInventario: valorInventario,
    agotados: agotados
  };
}

// === PRUEBA EN LA CONSOLA ===
const miInventarioDePrueba = [
  { nombre: "Café americano", precio: 4500, stock: 30 }, 
  { nombre: "Capuchino", precio: 7000, stock: 0 },       
  { nombre: "Pandebono", precio: 2500, stock: 10 },       
  { nombre: "Buñuelo", precio: 2000, stock: 0 }          
];

const resultado = resumenInventario(miInventarioDePrueba);

console.log("=== RESULTADO DEL INVENTARIO ===");
console.log(resultado);

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { resumenInventario };
