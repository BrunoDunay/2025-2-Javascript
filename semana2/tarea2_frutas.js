const {ask} = require('../helpers/input');

async function main() {
        let opcion = "";
        let frutas = [];

        while (opcion !== '4'){
            opcion = await ask("\n1. Agregar fruta\n2. Quitar fruta\n3. Ver frutas\n4. Salir\n ");

            if (opcion === '1') {
                const frutaNueva = await ask("¿Qué fruta quieres agregar? ");
                frutas.push(frutaNueva);
                console.log(`Fruta ${frutaNueva} agregada.`);
                console.log(`Frutas: ${frutas}`);       
            } else if (opcion === '2'){
                if (frutas.length === 0) {
                    console.log("No hay frutas para quitar.");
                    continue
                } else {
                    let frutaQuitar = await ask("¿Qué fruta quieres quitar? ");
                    let index = frutas.indexOf(frutaQuitar);

                    if (index !== -1) {
                        frutas.splice(index, 1);
                        console.log(`Fruta ${frutaQuitar} Eliminada.`);
                    }
                    
                    console.log(`Frutas: ${frutas}`);
                } 
            } else if (opcion === '3') {
                for (let i = 0; i < frutas.length; i++) {
                    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
                }
            } else if (opcion === '4') {
                console.log("Saliendo...");
                console.log(`Tus frutas fueron: ${frutas}`);
            } else {
                console.log("Opción no válida. Intenta de nuevo.");
            }   
        } 
}

main();