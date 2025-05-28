const fs = require('fs');
//const { ask } = require('../helpers/input');

async function main() {
  //const repetir = await ask("Ingresa un numero y una palabra separados por espacio: ");
  const repetir = fs.readFileSync(0, 'utf8').trim();

    let comparar = repetir.split(" ");
    let veces = comparar[0];
    let palabra = comparar[1];
    

    for (let i = 0; i < veces; i++){
        console.log(palabra);
    }

    
}

main();