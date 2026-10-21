// ============================================================
// Ejercicio 03 · Condicionales (if / else)
// ============================================================
// Café Origen quiere premiar las compras grandes con descuento.
//
// Crea la función calcularDescuento(subtotal) que retorne
// CUÁNTOS PESOS se descuentan (no el total a pagar):
//   - subtotal de 100.000 o más → 10% del subtotal
//   - subtotal de 50.000 o más  → 5% del subtotal
//   - menos de 50.000           → 0
// Redondea el resultado con Math.round()
//
// Ejemplos:
//   calcularDescuento(120000) → 12000
//   calcularDescuento(60000)  → 3000
//   calcularDescuento(30000)  → 0
// ============================================================

function calcularDescuento(subtotal) {
  let descuento = 0;
  if (subtotal >=100000) {
    descuento = subtotal * 0.10;
  } else if (subtotal >= 50000) {
    descuento = subtotal * 0.05;
  } else {
    descuento = 0;
  }

  return Math.round(descuento);
}

// --- LÍNEAS PARA PROBAR EN TU TERMINAL ---
console.log("Prueba 1 (120000):", calcularDescuento(120000)); // Debe dar: 12000
console.log("Prueba 2 (60000):",  calcularDescuento(60000));  // Debe dar: 3000
console.log("Prueba 3 (30000):",  calcularDescuento(30000));  // Debe dar: 0

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { calcularDescuento };
