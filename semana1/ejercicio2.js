const {ask} = require('../helpers/input.js');

async function main() {
    const age = Number(await ask('¿Cuál es tu edad?'));
    const genre = await ask('¿Cuál es tu género? (hombre/mujer)');

    if ((age >= 1 && age < 18) && (genre === 'hombre')) {
        console.log('Eres un niño');
        
    } else  if ((age >= 18 && age < 65) && (genre === 'hombre')) {
        console.log('Eres un hombre adulto no pensionado');
        
    } else if ((age >= 1 && age < 18) && (genre === 'mujer')) {
        console.log('Eres una niña');

    } else if ((age >= 18 && age < 65) && (genre === 'mujer')) {
        console.log('Eres una mujer adulta no pensionada');
        
    } else if ((age >= 65) && (genre === 'hombre')) {
        console.log('Eres un hombre adulto pensionado');
        
    } else if ((age >= 65) && (genre === 'mujer')) {
        console.log('Eres una mujer adulta pensionada');
        
    } else {
        console.log('No se ha podido determinar tu edad o género');
    }
}

main();