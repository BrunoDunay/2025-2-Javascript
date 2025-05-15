const {ask} = require('../helpers/input');

async function main() {
    const nombres = ["Ana", "Roberto", "Luis", "Mariana", "Sol", "Oscar", "Eduardo", "Isabel", "María"];
    const vocales = ["a", "e", "i", "o", "u"];

    for (let a = 0; a < nombres.length; a++) {
        const primeraLetra = nombres[a][0].toLowerCase();
        for (let b = 0; b < vocales.length; b++) {
            if (primeraLetra === vocales[b]){
                console.log (`${nombres[a]} empieza con la vocal ${vocales[b]}`);
            }
        }
    }
}

main();