// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.

const { ask } = require('../helpers/input');


function analizarAlumnos(alumnos) {
    let aprobados = 0;
    let total = 0;
    let calAlta = alumnos[0].calificacion;
    let calBaja = alumnos[0].calificacion;
    let puedenVotar = 0;

    for (let i = 0; i < alumnos.length; i++) {
        const edad = alumnos[i].edad;
        const calificacion = alumnos[i].calificacion;

        if (calificacion >= 7) {
            aprobados++;
        }
        if (edad >= 18) {
            puedenVotar++;
        }
        if (calificacion > calAlta) {
            calAlta = calificacion;
        }
        if (calificacion < calBaja) {
            calBaja = calificacion;
        }
        total += calificacion;
    }

    let promedio = total / alumnos.length;

    return {
        aprobados,
        puedenVotar,
        promedio,
        calAlta,
        calBaja
    };
}

async function main() {

    const alumnos = [];
    let opcion = '';

    while (opcion !== '2'){
        opcion = await ask("\n1. Agregar alumno\n2. Salir\n ");
        if (opcion === '1') {
            const nombre = await ask("¿Cuál es el nombre del alumno? ");
            const edad = Number (await ask("¿Cuál es la edad del alumno? "));
            const calificacion = Number(await ask("¿Cuál es la calificación del alumno? "));

            alumnos.push({ nombre, edad, calificacion });
            console.log(`Alumno ${nombre} agregado.`);
        } else if (opcion === '2') {
            console.log("Saliendo...");
            console.log("Cantidad de alumnos aprobados: ", analizarAlumnos(alumnos).aprobados);
            console.log("Cantidad de alumnos que pueden votar: ", analizarAlumnos(alumnos).puedenVotar);
            console.log("Promedio de calificaciones: ", analizarAlumnos(alumnos).promedio);
            console.log("Calificación más alta: ", analizarAlumnos(alumnos).calAlta);
            console.log("Calificación más baja: ", analizarAlumnos(alumnos).calBaja);      
            break;
        } else {
            console.log("Opción no válida. Intenta de nuevo.");
        }
    }

}

main();