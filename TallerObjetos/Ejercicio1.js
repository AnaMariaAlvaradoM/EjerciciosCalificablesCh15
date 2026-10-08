
function Computador(marca, procesador, ram, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;

    this.tot = function () {

        return `${this.marca} - ${this.procesador} - ${this.ram} - Precio: ${this.precio}`;
    };
}

const Pc1 = new Computador("Msi", "i5 de 12th", "16 GB RAM", 4000000);
const Pc2 = new Computador("Asus Tuf", "i5 de 12th", "8 GB RAM", 3500000);
const Pc3 = new Computador("Lenovo", "i5 de 11th", "8 GB RAM", 3000000);

console.log("El primer computador es: " + Pc1.tot());
console.log("El segundo computador es: " + Pc2.tot());
console.log("El tercer computador es: " + Pc3.tot());
