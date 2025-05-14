const {ask} = require('../helpers/input');

function saludar (personas) {
    console.log("Hola " + personas);
}

async function main() {
    const personas = [
        "Juan",
        "Pedro",
        "Maria",
        "Jose",
        "Ana",
        "Luis",
        "Laura",
        "Carlos",
    ]
    for (let i = 0; i < personas.length; i++) {
        saludar(personas[i]);
    }
}

main();