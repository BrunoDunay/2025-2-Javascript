const {ask} = require('../helpers/input.js');

async function main() {
    const dia = Number(await ask('¿Qué día de la semana es? (1-7)'));
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    if (dia >= 1 && dia <= 7) {
        console.log(diasSemana [dia - 1]);
    } else {
        console.log('La semana solo tiene 7 días');
    }
}

main();