const fs = require('fs');
//const { ask } = require('../helpers/input');

async function main() {
  //const palabra = await ask("ingresa una palabra: ");
  const palabra = fs.readFileSync(0, 'utf8').trim();   

    let longitud = palabra.length;

    console.log(longitud)
}

main();