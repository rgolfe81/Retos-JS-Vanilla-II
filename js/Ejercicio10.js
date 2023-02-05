// Crea un array de números de un tamaño pasado por prompt, el array contendrá
// números aleatorios primos entre los números deseados, por último, nos indicar cual 
// es el mayor de todos. Haz un método para comprobar que el número aleatorio es 
// primo, puedes hacer todos los métodos que necesites.


const CrearNumAleatorio = (A,B) => {
    let aleatorio;
    do {
        aleatorio = Math.floor(Math.random()*100);
    } while (aleatorio<A || aleatorio>B);
    return aleatorio;
}
const EsPrimo = (A) => {
    if (A===0 || A===1){
        return false;
    }
    for (let i = 2; i < A; i++) {
        if (A % i === 0) {
            return false;
        }
    }
    return true;
}
const CrearArrayPrimo = (tamaño) => {
    let numero;
    let array = [];
    for (let i=0; i<tamaño; i++){
        do{
            numero = CrearNumAleatorio (min,max);
        } while (!EsPrimo(numero))
    array.push(numero);
    }
    return array;
}

let tamañoArray = parseInt(prompt("Introduce el tamaño del array"));
let min = parseInt(prompt("Introduce el valor mínimo del array"));
let max = parseInt(prompt("Introduce el valor máximo del array"));

console.log(CrearArrayPrimo (tamañoArray));

