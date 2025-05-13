const {ask} = require('../helpers/input.js');

function obtenermayor (num1, num2) {
    if (num1 > num2) {
        return 'El mayor es ' + num1;
    } else if (num2 > num1) {
        return 'El mayor es ' + num2;
    } else {
        return 'Los números son iguales';
    }
}

async function main() {
    const num1 = Number(await ask('¿Cuál es el primer número?'));
    const num2 = Number(await ask('¿Cuál es el segundo número?'));

    const resultado = obtenermayor(num1, num2);
    console.log(resultado);
}

main();