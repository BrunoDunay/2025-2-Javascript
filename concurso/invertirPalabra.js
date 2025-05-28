const fs = require('fs');
//const { ask } = require('../helpers/input');

async function main() {
  const palabra = fs.readFileSync(0, 'utf8').trim();
  //const palabra = await ask("Ingresa una palabra ");
  let invertir = "";  
  for (let i = palabra.length - 1; i >= 0; i--) {
    let letra = "";
    letra = palabra[i].toLowerCase();
    invertir += letra;
  }

  console.log(invertir);
}

main();