const fs = require('fs');
//const { ask } = require('../helpers/input');

async function main() {
  //const texto = await ask("ingresa un texto: ");
  const texto = fs.readFileSync(0, 'utf8').trim();
  let mayusculas = "";
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toUpperCase();
        mayusculas += letra;
    }

    console.log(mayusculas);
}

main();