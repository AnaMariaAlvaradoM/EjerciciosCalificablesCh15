

function esPrecioValido(valor) {
  if (typeof valor === "number" && !Number.isNaN(valor) && valor > 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = { esPrecioValido };
