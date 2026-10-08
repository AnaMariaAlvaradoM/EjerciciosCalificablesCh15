


function diasDeInventario(stock, ventaDiaria) {
  if (ventaDiaria <= 0) {
    return -1;
  }

  let dias = 0;

  while (stock > 0) {
    stock = stock - ventaDiaria;
    dias++;
  }

  return dias;
}

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { diasDeInventario };
