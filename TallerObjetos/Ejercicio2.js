

function Mascota(nombre, especie, edad, peso) {

    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function () {

        return `Hola, soy ${this.nombre} - Mi especie es: ${this.especie} - Tengo: ${this.edad} años - Y peso: ${this.peso} kg`;
    };
}

const m1 = new Mascota("Skady", "Perro", 3, 11);
const m2 = new Mascota("Mimi", "Gato", 8, 6);
const m3 = new Mascota("Piolin", "Pato", 2, 9);

console.log(m1.presentarse());
console.log(m2.presentarse());
console.log(m3.presentarse());

