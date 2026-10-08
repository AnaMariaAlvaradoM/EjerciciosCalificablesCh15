
function Estudiante(nombre, id, grado, nota) {

    this.nombre = nombre;
    this.id = id;
    this.grado = grado;
    this.nota = nota;

    this.aprobado = nota >= 3.0;

    this.mostrarResultado = function () {

        if (this.aprobado) {
            console.log("----------------------------------------------------");
            return `${this.nombre} ID: ${this.id}, grado ${this.grado} aprobo el curso con una nota de ${this.nota}.`;

        } else {
            console.log("----------------------------------------------------");
            return `${this.nombre} ID: ${this.id}, grado ${this.grado} reprobo el curso con una nota de ${this.nota}.`;
        }
    };
}

const e1 = new Estudiante("Pedro", 1234, 11, 4.0);
const e2 = new Estudiante("Desgracio", 4321, 10, 2.0);
const e3 = new Estudiante("Anastacia", 456, 11, 5.0);
const e4 = new Estudiante("Carlos", 789, 10, 2.4);

console.log(e1.mostrarResultado());
console.log(e2.mostrarResultado());
console.log(e3.mostrarResultado());
console.log(e4.mostrarResultado());

