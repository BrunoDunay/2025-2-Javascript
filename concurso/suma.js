const fs = require('fs');
//const { ask } = require('../helpers/input');

async function main() {
  const numero = fs.readFileSync(0, 'utf8').trim();
  //const numero = await ask("Ingresa un número ");
  let suma = 0;  

    for (let i = 0; i < numero.length; i++){
        suma = suma + parseInt(numero[i])
    }
    



    console.log(suma);
        

}

main();