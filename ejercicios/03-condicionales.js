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
  if (subtotal>=100000){
    operacion10 = subtotal * 0.10
    descuento10 = Math.round(operacion10)
    return descuento10
  }else if (subtotal>=50000){
    operacion5 = subtotal * 0.05
    descuento5= Math.round(operacion5)
    return descuento5
  }else
    return 0
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { calcularDescuento };
