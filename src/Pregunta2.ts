//*****************************************PREGUNTA 2**********************************************
interface tip {
    propinas: Array<number>;
    totales: Array<number>;
}
const tip = {
    propinas: new Array(),
    totales: new Array(),
}
/*var facturas: Array<number>;
facturas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log (facturas);*/
var i : number = 0;
let k : number;
let totales : number;
calcTip(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
function calcTip (...facturas: Array<number>){
    while (i < facturas.length){
        k =  ((facturas [i] >= 50  && facturas [i] < 300)) ? (facturas [i] * 15 / 100) :  (facturas [i] * 20 / 100) ;
        totales = facturas [i] + k;
        tip.propinas.push (k);
        tip.totales.push (totales);
        console.log ('La factura fue', facturas [i], ',', 'la propina fue', tip.propinas [i], 'y el valor total' , tip.totales [i], '.');
        i++;
    }
}