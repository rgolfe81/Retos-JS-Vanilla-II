// Crea una aplicación que nos convierta una cantidad de euros introducida por prompt
// a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como 
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no 
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €

const ConversorMoneda = (A, B) => {
        switch (B){
            case "libras":
                return console.log(`${A} euros, son ${A*0.86} ${B}`);
            break;
            case "dolares":
                return console.log(`${A} euros, son ${A*1.26611} ${B}`);
            break;
            case "yenes":
                return console.log(`${A} euros, son ${A*129.852} ${B}`);
            break;
            default:
                return console.log("El tipo de moneda no es correcto en esta aplicación");
        }
}

let euros = parseFloat(prompt("Introduce cantidad de euros a convertir"));
if (euros<0){
    console.log ("Error. Has introducido un número negativo");
}
else{
    let moneda = prompt("Moneda a convertir. Dólares, Yenes o Libras").toLowerCase();
    ConversorMoneda(euros, moneda);
}