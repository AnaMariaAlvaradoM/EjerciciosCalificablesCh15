
function calcularDescuento(subtotal) {
  if (subtotal >= 100000){
    return Math.round(subtotal*0.10);
  }
  else if (subtotal >= 50000){
    return Math.round(subtotal*0.05);
  }
  else {
    return 0;
  }
}

module.exports = { calcularDescuento };
