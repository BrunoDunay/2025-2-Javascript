const { ask } = require('../helpers/input');

function nombresConVocal(nombres) {
  const vocales = ["a", "e", "i", "o", "u"];
  const resultado = [];

  for (let i = 0; i < nombres.length; i++) {
    let primeraLetra = nombres[i][0].toLowerCase();
    if (vocales.includes(primeraLetra)) {
      resultado.push(nombres[i]);
    }
  }
  return resultado;
}



async function main() {
     const nombres = ["Ana", "Roberto", "Luis", "Mariana", "Sol", "Oscar", "Eduardo", "Isabel", "María"];

     console.log("Lista de nombres: ", nombres);
     console.log("Nombres que empiezan en vocal: ", nombresConVocal(nombres));
}

main();
