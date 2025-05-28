const fs = require('fs');
//const { ask } = require('../helpers/input');

async function main() {
  //const palabra = await ask("ingresa una palabra: ");
  const palabra = fs.readFileSync(0, 'utf8').trim();
    let vocales = "aeiouAEIOU";
    let reemplazado = "";

    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];
        if (vocales.includes(letra)) {
            letra = "*";
        }
        reemplazado += letra;
    }

    console.log(reemplazado)
}

main();