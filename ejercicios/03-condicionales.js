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
  let descuento=0;

  if(subtotal >= 100000){
    descuento=0.10;
  }else if(subtotal >= 50000){
    descuento=0.05;
  }else{
    descuento=0;
  }

  const descuentoFinal = subtotal * descuento;
  return Math.round(descuentoFinal);
}

console.log(calcularDescuento(120000));
console.log(calcularDescuento(60000));
console.log(calcularDescuento(30000));


// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { calcularDescuento };
