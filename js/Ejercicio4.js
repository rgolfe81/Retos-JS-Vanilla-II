// Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// realizara mediante un método al que le pasamos el número como parámetro. Para 
// calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por 
// ejemplo, si introducimos un 5, realizara esta operación 5*4*3*2*1=120.

const Factorial = (A) => {
    let vF=1;
    for (i=A; i>=1; i--){
        vF = i*vF;
    }
    return vF;
}

let numero = parseInt(prompt("Introduce un numero par calcular su factorial"));

console.log (`El factorial del número ${numero} es ${Factorial(numero)}`);