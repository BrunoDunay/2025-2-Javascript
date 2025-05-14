const { ask } = require('../helpers/input');

function diffDays(actualDate, birthDate) {
  const diff = actualDate - birthDate;
  const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const edadEnMeses = Math.floor(edadEnDias / 30);
  const edadEnAños = Math.floor(edadEnDias / 365);

  return edadEnDias, edadEnMeses, edadEnAños;
}

async function main() {
  const actualDate = new Date();

  const birthDateDay = await ask("¿Cuál es el día de tu fecha de nacimiento?");
  const birthDateMonth = await ask("¿Cuál es el mes de tu fecha de nacimiento?");
  const birthDateYear = await ask("¿Cuál es el año de tu fecha de nacimiento?");
  //const birthDate = await ask("¿Cuál es tu fecha de nacimiento? (formato YYYY-MM-DD)");
  const birthDate = new Date(`${birthDateYear}-${birthDateMonth}-${birthDateDay}`);

  console.log("Has vivido aproximadamente: ");


}

main();