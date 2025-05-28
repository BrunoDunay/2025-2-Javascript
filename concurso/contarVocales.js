const fs = require('fs');
//const { ask } = require('../helpers/input');

async function main() {
  //const palabra = await ask("ingresa una palabra: ");
  const palabra = fs.readFileSync(0, 'utf8').trim();
    let vocales = "a , e , i , o , u";
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i].toLowerCase();
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    console.log(contador)
}

main();