// Crea una aplicación que nos pida un número por prompt y con un método se lo 
// pasamos por parámetro para que nos indique si es o no un número primo, debe 
// devolver true si es primo sino false. Un número primo es aquel solo puede dividirse 
// entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin 
// embargo, 17 si es primo.

const EsPrimo = (A) => {
    if (A===0 || A===1){
        return false;
    }
    for (i = 2; i < A; i++) {
        if (A % i === 0) {
            return false;
        }
    }
    return true;
}
let numero = parseInt(prompt("Introduce un número"));
EsPrimo(numero);
if (EsPrimo(numero)){
    console.log(`El número ${numero} es primo`);
}
else{
    console.log(`El número ${numero} no es primo`);
}