const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, año, precio, kilometraje) {

    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.precio = precio;
    this.kilometraje = kilometraje;
    this.activado = false;

    this.presentar = function () {
        return `${this.marca} ${this.modelo} (${this.año}) - ${this.kilometraje} km - Precio: $${this.precio}`;
    };

    this.arrancar = function () {
        if (!this.activado) {
            this.activado = true;
            return `El ${this.marca} ${this.modelo} fue arrancado con éxito.`;
        }
        return `El ${this.marca} ${this.modelo} ya estaba en marcha.`;
    };
    
    this.recorrer = function (km) {
        this.kilometraje += km;
        return `El ${this.marca} ${this.modelo} recorrió ${km} km. Kilometraje total: ${this.kilometraje} km`;
    };
}

function pedirVehiculo(numero) {
    console.log(`Digite el carro a ingresar ${numero}`);
    const marca = prompt("Marca: ");
    const modelo = prompt("Modelo: ");
    const año = Number(prompt("Año: "));
    const precio = Number(prompt("Precio: "));
    const kilometraje = Number(prompt("Kilometraje: "));
    return new Vehiculo(marca, modelo, año, precio, kilometraje);
}

const c1 = pedirVehiculo(1);
const c2 = pedirVehiculo(2);
const c3 = pedirVehiculo(3);

console.log("----------CONCESIONARIO LA GUADALUPE------------");

console.log(c1.presentar());
console.log(c1.arrancar());
console.log(c1.arrancar());

console.log(c2.presentar());
console.log(c2.arrancar());
console.log(c2.recorrer(50));

console.log(c3.presentar());
console.log(c1.arrancar());
console.log(c3.recorrer(150));

