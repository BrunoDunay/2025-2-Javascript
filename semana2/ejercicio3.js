const {ask} = require('../helpers/input');

async function main() {
    const nombres = ["Ana", "Roberto", "Luis", "Mariana", "Sol"];

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].length > 4) {
            console.log(`${nombres[i]} tiene más de 4 letras.`);
        } else {
            console.log(`${nombres[i]} tiene solo ${nombres[i].length} letras.`);
        }
    }
}

main();