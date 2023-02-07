// Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos
// estará rellenado con números aleatorios y el otro apuntará al array anterior, reasigna
// los valores del segundo array con valores aleatorios. Después, crea un método que
// tenga como parámetros, los dos arrays y devuelva uno nuevo con la multiplicación
// de la posición 0 del array1 con el del array2 y así sucesivamente. Por último, muestra
// el contenido de cada array.

const NewArray = (size) => {
    let array1 = [];
    let number;
    for (let i=0; i<size; i++){
        number = Math.floor(Math.random()*100);
        array1.push(number);
    }
    return array1;
}
const EditArray = (array) => {
    let number;
    for (let i=0; i<array.length; i++){
        number = Math.floor(Math.random()*100);
        array.unshift(number);
        array.pop();
    }
    return array;
}
const ProductArray = (array1,array2) => {
    let number;
    for (let i=0; i<sizeArray; i++){
        number = array1[i]*array2[i];
        array3.push(number);
    }
    return array3;
}



let sizeArray = parseInt(prompt("Introduce el tamaño del array"));
let array1 = [];
let array2 = [];
let array3 = [];

array1 = NewArray (sizeArray);
array2 = array1.slice();
array2 = EditArray(array2);
array3 = ProductArray(array1,array2);
console.log (array1,array2,array3);



