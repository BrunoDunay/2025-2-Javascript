const { ask } = require('../helpers/input.js');

async function main() {
  const num1 = Number(await ask('¿Cuál es primer número?'));
  const num2 = Number(await ask('¿Cuál es segundo número?'));

const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;
const division = num1 / num2;

console.log(`La suma de ${num1} y ${num2} es: ${suma}`);
console.log(`La resta de ${num1} y ${num2} es: ${resta}`);
console.log(`La multiplicación de ${num1} y ${num2} es: ${multiplicacion}`);
console.log(`La división de ${num1} y ${num2} es: ${division}`);

}

main();