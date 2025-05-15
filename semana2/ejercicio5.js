const {ask} = require('../helpers/input');

async function main() {
    const palabraAlReves = await ask("Escribe una palabra: ");
    let resultado = "";

    for (let i = palabraAlReves.length - 1; i >= 0; i--) {
        resultado += palabraAlReves[i];
    }
    console.log(resultado);
}

main();