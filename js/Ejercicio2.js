// Crea una aplicación que nos genere una cantidad de números enteros aleatorios 
// pasados por el usuario (prompt). Crea un método donde pasamos como parámetros 
// entre que números queremos que los genere, podemos pedirlas al usuario antes de 
// generar los números. Este método devolverá un número entero aleatorio. Muestra 
// estos números por consola.

let cantidadNumeros = parseFloat(prompt("Introduce cuántos números quieres generar"));
let minimo = parseFloat(prompt("Introduce mínimo del intervalo"));
let maximo = parseFloat(prompt("Introduce máximo del intervalo"));

const RandomMinMax = (A, B) => {
    let aleatorio;
    do{
        aleatorio = Math.floor(Math.random()*100);
    } while (aleatorio<A || aleatorio>B)
    return aleatorio;
}

for (let i=0; i<cantidadNumeros; i++){
    console.log (RandomMinMax(minimo, maximo));
}