// Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un 
// String con el numero convertido a binario. Para convertir un número decimal a 
// binario, debemos dividir entre 2 el número y el resultado de esa división se divide 
// entre 2 de nuevo hasta que no se pueda dividir más, el resto que obtengamos de 
// cada división formara el número binario, de abajo a arriba.

const Binario = (A) => {
    let array = [];
    let resto;
    while(A>=2){
        resto = Math.floor(A%2);
        console.log(resto);
        array.push(resto); 
        A=A/2;
    }
    array.unshift(Math.floor(A));
    return array;
}

let numero = parseInt(prompt("Introduce número para convertir a binario"));
console.log(`El número ${numero} en binario es ${Binario(numero)}`);