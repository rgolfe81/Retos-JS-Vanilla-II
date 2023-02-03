// Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo. 
// Pediremos al usuario que figura queremos calcular su área y según lo introducido 
// pedirá los valores necesarios para calcular el área. Para ello has de crear un método 
// por cada figura para calcular cada área, este devolverá un número real. Muestra el 
// resultado por consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado


const AreaCirculo = (A) => {
    const pi = 3.1415;
    return ((A^2)*pi);
}
const AreaTriangulo = (A, B) => {
    return (A*B)/2;
}
const AreaCuadrado = (A, B) => {
    return A*B;
}

let num1;
let num2;
let opcion = prompt("Introduce la figura para calcular el área. Circulo, triangulo o cuadrado").toLowerCase();
let resultado;

if (opcion==="circulo"){
    num1 = parseFloat(prompt("Introduce el valor del radio"));
} else{
    num1 = parseFloat(prompt("Introduce el primer número"));
    num2 = parseFloat(prompt("Introduce el segundo número"));
}

switch (opcion){
    case "circulo":
        resultado = AreaCirculo(num1);
    break;
    case "triangulo":
        resultado = AreaTriangulo(num1, num2);
    break;
    case "cuadrado":
        resultado = AreaCuadrado(num1, num2);
    break;
    default:
        console.log ("No has introducido una figura del listado.")
}
console.log (`El área del ${opcion} es = ${resultado}`);