const {ask} = require('../helpers/input.js');

async function main() {
    const number = Number(await ask('¿Cuál es tu número?'));
    const multiplo3 = number % 3 === 0;
    const multiplo5 = number % 5 === 0;
    const multiplo3y5 = multiplo3 && multiplo5;

    if (multiplo3){
        console.log('El número es múltiplo de 3 y 5');
    } else if (multiplo5){
        console.log('El número es múltiplo de 5');
    } else if (multiplo3y5){
        console.log('El número es múltiplo de 3');
    } else {
        console.log('El número no es múltiplo de 3 ni de 5');
    }
}

main();