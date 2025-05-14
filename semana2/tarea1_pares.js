// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

function imprimirPares(valor) {
    for (let i = 1; i <= valor; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

async function main() {
    const valor = Number(await ask("Dame un número: "));
    imprimirPares(valor);
}

main();