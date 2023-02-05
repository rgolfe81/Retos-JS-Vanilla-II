// Crea un array de números donde le indicamos por prompt el tamaño del array,
// rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola
// el valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un 
// método para rellenar el array(que tenga como parámetros los números entre los que 
// tenga que generar) y otro para mostrar el contenido y la suma del array.

const RellenaArrayMinMax = (A, B) => {
let valorArray;
let tamañoArray = parseInt(prompt("Introduce el tamaño del array"));
    for(let i=0; i<tamañoArray; i++){
        do{
        valorArray = Math.floor(Math.random()*10);
        }while(valorArray<A || valorArray>B); 
    array.push(valorArray);
    }
    return array;
}
const MuestraArraySuma = (array) => {
    let suma = 0;
    for(i=0; i<array.length; i++){
        console.log (array[i]);
        suma += array[i];
    }
    return console.log (`La suma de los elementos del array es ${suma}`);
}


let valorMinimoArray = parseInt(prompt("Introduce el valor mínimo del array entre 0 y 9"));
let valorMaximoArray = parseInt(prompt("Introduce el valor máximo del array entre 0 y 9"));
let array = [];

RellenaArrayMinMax (valorMinimoArray, valorMaximoArray);
MuestraArraySuma (array);