//const fs = require('fs');
const { ask } = require('../helpers/input');

async function main() {
  const contar = await ask("Ingresa una palabra y una letra separadas por un espacio: ");
  //const contar = fs.readFileSync(0, 'utf8').trim();
    let separados = contar.split(" ");
    let palabra = separados[0].toLowerCase();
    let letra = separados[1].toLowerCase();
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
            contador++;
        }
    }

    console.log(contador);
  

}

main();