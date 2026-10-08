
function sumarVentas(ventas) {
  let suma = 0;

  if (ventas.length === 0) {
    return 0;
  }

  for (let i = 0; i < ventas.length; i++) {
    suma = suma + ventas[i];
  }

  return suma;
}

module.exports = { sumarVentas };
