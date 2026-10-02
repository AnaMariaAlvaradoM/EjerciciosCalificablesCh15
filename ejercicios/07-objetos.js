// ============================================================
// Ejercicio 07 · Objetos
// ============================================================
// Cada producto del menú se va a guardar como un objeto.
//
// Crea la función crearProducto(nombre, precio, stock) que retorne
// un objeto con exactamente estas 4 propiedades:
//   - nombre
//   - precio
//   - stock
//   - disponible → true si stock es mayor que 0, si no false
//
// Ejemplo:
//   crearProducto("Pandebono", 2500, 40)
//   → { nombre: "Pandebono", precio: 2500, stock: 40, disponible: true }
// ============================================================

function crearProducto(nombre, precio, stock) {
  let dispo = false;
  if(stock > 0){
    dispo = true;
  }
  const objeto = {
    nombre : nombre,
    precio : precio,
    stock : stock,
    disponible : dispo
  }

  return objeto;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { crearProducto };
