const { ask } = require('../helpers/input');

async function main() {

    const persona = {
        nombre: "Rodrigo",
        edad: 36,
        profesion: "Desarrollador",
        hobbies: ["programar", "leer", "futbol"],
        birthday: "1987-01-01",
        saludar: function() {
            console.log(`Hola soy ${this.nombre}`);
        }

    }

    const alumno = {
        nombre: "Rodrigo",
        edad: 17,        
        curso: "JavaScript",
        calificacion: 9,
        mostrarInfo: function() {
            console.log("Nombre: ", this.nombre);
            console.log("Edad: ", this.edad);
            console.log("Curso: ", this.curso);
            console.log("Calificacion: ", this.calificacion);
            if (this.edad < 18) {
                console.log(`No puede votar`);
            } else {
                console.log(`Puede votar`);
            }
        }
    }

    alumno.mostrarInfo();

}

main();