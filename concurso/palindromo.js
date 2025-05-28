const fs = require('fs');
//const { ask } = require('../helpers/input');

async function main() {
  const numero = fs.readFileSync(0, 'utf8').trim();
  //const numero = await ask("Ingresa un número ");
  let invertir = "";  
  for (let i = numero.length - 1; i >= 0; i--) {
    let digito = "";
    digito = numero[i];
    invertir += digito;
  }

  if (numero === invertir){
    console.log("SI")
  } else {
    console.log("NO")
  }

}

main();