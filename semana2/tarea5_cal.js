//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

function analizarCalificaciones(calificaciones) {
    let aprobados = 0;
    let reprobados = 0;
    let total = 0;
    let calAlta = calificaciones[0];
    let calBaja = calificaciones[0];

    for (let i = 0; i < calificaciones.length; i++) {
        if (calificaciones[i] >= 70) {
            aprobados++;
        }
        if (calificaciones[i] < 70) {
            reprobados++;
        }
        if (calificaciones[i] > calAlta) {
                calAlta = calificaciones[i];
        }
        if (calificaciones[i] < calBaja) {
                calBaja = calificaciones[i];
        }   
        total += calificaciones[i];     
    }
    let promedio = total / calificaciones.length;
    return {
        aprobados,
        reprobados,
        promedio,
        calAlta,
        calBaja
    };
}

async function main() {
    
    const calificaciones = [85, 92, 78, 65, 88, 74, 90, 56, 99, 73];

    console.log("Lista de calificaciones: ", calificaciones);
    console.log("Los alumnos aprobados son: ", analizarCalificaciones(calificaciones).aprobados);
    console.log("Los alumnos reprobados son: ", analizarCalificaciones(calificaciones).reprobados);
    console.log("El promedio de calificaciones es: ", analizarCalificaciones(calificaciones).promedio);
    console.log("La calificación más alta es: ", analizarCalificaciones(calificaciones).calAlta);
    console.log("La calificación más baja es: ", analizarCalificaciones(calificaciones).calBaja);

}

main();