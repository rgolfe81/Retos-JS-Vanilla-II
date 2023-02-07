// Crea un array de números de un tamaño pasado por prompt, el array contendrá
// números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un
// dígito que nosotros le indiquemos por prompt (debes controlar que se introduce un
// número correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un
// array de 10 posiciones le indicamos mostrar los números acabados en 5, podría salir
// 155, 25, etc.

const NewArray = (size) => {
    let array1 = [];
    let number;
    for (let i=0; i<size; i++){
        number = Math.floor(Math.random()*300);
        array1.push(number);
    }
    return array1;
}
const SelectArrayNumber = (array, digito) => {
    let newArray = [];
    for (let i=0; i<array.length; i++){
        if (array[i]%10 == digito){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let sizeArray = parseInt(prompt("Introduce el tamaño del array"));
let array1 = NewArray(sizeArray);
let selectNumber = prompt("Introduce un número para crear nuevo array con numeros terminados en este dígito");
let array2 = SelectArrayNumber (array1, selectNumber);
console.log(array1,array2);
