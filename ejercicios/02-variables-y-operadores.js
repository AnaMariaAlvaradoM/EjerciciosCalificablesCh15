
function calcularPrecioConIva(precio) {
  const iva = 0.19;
  const precioConIva = precio + (precio * iva);
  return Math.round(precioConIva);
}


module.exports = { calcularPrecioConIva };
