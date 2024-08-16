//3 - crie um programa para calcular a massa corporia de um individuo
    ////Entrada
        //-> Altura
        //-> peso
    ////Saida
        //->> IMC

function calcular(){
    let peso = Number(document.getElementById("peso").value);
    console.log(peso);
    let altura = Number(document.getElementById("altura").value) / 100;
    console.log(altura);

    let imc = (peso / Math.pow(altura, 2)).toFixed(2);

    let textoIMC = "";
    if(imc > 29.99){
        textoIMC = "Obesidade";
    }
    else if(imc >= 25 && imc < 30){
        textoIMC = "Acima do peso";
    }
    else if(imc < 25 && imc >= 18.5){
        textoIMC = "Peso normal";
    }
    else if(imc >= 17 && imc < 18.5){
        textoIMC = "Abaixo do peso";
    }
    else if(imc < 17){
        textoIMC = "Muito abaixo do peso";
    }

    document.write(`<h1>Seu imc é ${imc.toString()} - ${textoIMC}</h1>`);

}
// IMC = peso / altura * altura
