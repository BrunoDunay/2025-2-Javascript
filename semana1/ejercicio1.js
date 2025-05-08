const { ask } = require('../helpers/input');

async function main() {
  const name = await ask("¿Cómo te llamas? ");
  const age = Number(await ask("¿Cuántos años tienes? "));


  console.log("Hola " + name + ", tienes " + age + " años.");

}

main();