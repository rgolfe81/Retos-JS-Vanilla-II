// Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra 
// por consola el índice y el valor al que corresponde. Haz dos métodos, uno para 
// rellenar valores y otro para mostrar.

const MostrarValores = (array) => {
    for (i=0; i<array.length; i++){
        return console.log(array[i]);
    }
}
let array = [];
let numero;
for(let i=0; i<10; i++){
    numero = parseFloat(prompt("Introduce un numero"));
    console.log(numero);
    array.push(numero);
}
MostrarValores(array);
