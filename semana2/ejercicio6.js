const {ask} = require('../helpers/input');

    function obtenerPromedio(numeros){
        let suma = 0;
        for (let i = 0; i < numeros.length; i++) {
            suma += numeros[i];
        }
        const promedio = suma / numeros.length;
        return promedio;
    }

    function obtenerMayor(numeros){
        let mayor = numeros[0];
        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] > mayor) {
                mayor = numeros[i];
            }
        }
        return mayor;
    }

    function obtenerMenor(numeros) {
        let menor = numeros[0];
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] < menor) {
            menor = numeros[i];
            }
        }
        return menor;
    }

  function resumenEstadistico(numeros) {
    const promedio = obtenerPromedio(numeros);
    const mayor = obtenerMayor(numeros);
    const menor = obtenerMenor(numeros);

  return { menor, mayor, promedio }
}

async function main() {
    const edades = [20, 18, 25, 30, 22];
    const lista = [5, 20, 8, 99, 3];
    const datos = [70, 80, 90, 100, 85];
    const estadistica = resumenEstadistico(datos);

    console.log(`El promedio de edades de ${edades} es= ${obtenerPromedio(edades)}`);
    console.log(`El número mayor de ${lista} es = ${obtenerMayor(lista)}`);
    console.log(`El resumen estadístico de: ${datos}`);
    console.log(`El número menor es: ${estadistica.menor}`);
    console.log(`El número mayor es: ${estadistica.mayor}`);
    console.log(`El promedio es: ${estadistica.promedio}`);

}

main();