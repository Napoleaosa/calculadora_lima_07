var formula = " ";
var numero = " ";
var numeros = [];
var operadores = [];





function printa(dado){
    if( dado == '+' || dado == '-' || dado == '/' || dado == 'x' || dado =='e' ){
   
        numeros.push(Number(numero));
        operadores.push(dado);
        numero = ' ';
    }else{
        numero = numero + dado;
    }
    formula = formula + dado; // formula += dado;
    document.getElementById("formula").innerText = formula;
}

function calcula() {

    printa ('e');
    let resultado;

    for (let i=0 ; i< numeros.length; i++){
        resultado = 0;
        switch(operadores[i]){
            case "+":
                resultado = numeros[i] + numeros [i=1];
                console.log('somar');
                break;
            case "-":
                console.log('subtrair');
                resultado = numeros[i] - numeros [i=1];
                break;
            case "/":
                console.log('dividir');
                resultado = numeros[i] / numeros [i=1];
                break;
            case "x":
                console.log('multiplicar');
                resultado = numeros[i] * numeros [i=1];
                break;
            case "e":
                break;
                default:
                    alert('Operador não encontrado');
                break;

                numeros[i + 1] = resultado;
        }
        console.log(numeros[i]);
        console.log(operadores[i]);

    }
    document.getElementById('resultado').innerText = resultado;
    console.log(numeros);
    console.log(operadores);

}


function apaga (){
 //   formula = '';
    formula = formula.substring(0, formula.length - 1);
    document.getElementById("formula").innerText = formula;
}