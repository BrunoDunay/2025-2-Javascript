const fs = require('fs');
//const { ask } = require('../helpers/input');

async function main() {
  //const numeros = await ask("Ingresa unos números separados por espacios: ");
  const numeros = fs.readFileSync(0, 'utf8').trim();

  const comparar = numeros.split(" ");
  let mayor = parseInt(comparar[0]);

        for (let i = 0; i < comparar.length; i++) {
            if (comparar[i] > parseInt(mayor)) {
                mayor = comparar[i];
            }
        }

  console.log(mayor);
}

main();