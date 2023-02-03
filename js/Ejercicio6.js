// Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, 
// pasando el número por parámetro devolverá el número de cifras.

let numero = prompt("Introduce un número para calcular cuantas cifras tiene");

const CalculaNumCifras = (A) => {
    let longitud = A.length;
    return longitud;
}
if (numero > 0){
    console.log (`El número ${numero} tiene ${CalculaNumCifras(numero)} cifras`);
}
else{
    console.log (`El número ${numero} no es un número entero positivo.`)
}