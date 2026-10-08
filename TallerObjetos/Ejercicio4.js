

function Libro(nombre, año, autor, paginas) {
    this.nombre = nombre;
    this.año = año;
    this.autor = autor;
    this.paginas = paginas;

    this.prestado = false;

    this.prestar = function () {
        if (!this.prestado) {
            this.prestado = true;
             console.log("----------------------------------------------------");
            console.log(`${this.nombre} fue prestado correctamente.`);
        } else {
             console.log("----------------------------------------------------");
            console.log(`EYYYYY: ${this.nombre} ya está prestado.`);
        }
    };

    this.devolver = function () {
        if (this.prestado) {
            this.prestado = false;
             console.log("----------------------------------------------------");
            console.log(`${this.nombre} fue devuelto correctamente.`);
        } else {
             console.log("----------------------------------------------------");
            console.log(`EYYYY: ${this.nombre} no estaba prestado`);
        }
    };
}

const libro1 = new Libro("1984", 1949, "George Orwell", 352);
const libro2 = new Libro("La Odisea", -725, "Homero", 528);

libro1.prestar(); 
libro1.prestar();     
libro1.devolver();  
libro1.devolver();  
libro2.prestar();   
libro1.prestar();  