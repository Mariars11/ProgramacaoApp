//String

/* 
    var nome = prompt("Digite seu nome: ");
    var idade = prompt("E quantos anos você tem? ");

    alert(`Nome: ${nome}\nIdade: ${idade}`); 

*/

//Num

let num1 = Number(prompt("Digite o numero 1"));
let num2 = Number(prompt("Digite o numero 2"));

let soma = num1 + num2;
let sub = num1 - num2;
let div = num1 / num2;
let mult = num1 * num2;


//alert(`${num1} + ${num2} = ${soma}\n${num1} - ${num2} = ${sub}\n${num1} / ${num2} = ${div}\n${num1} * ${num2} = ${mult}\nMedia: ${soma/2}`);
let string = `${num1} + ${num2} = ${soma}<br>${num1} - ${num2} = ${sub}<br>${num1} / ${num2} = ${div}<br>${num1} * ${num2} = ${mult}<br>Media: ${soma/2}`;

document.write(`<p>${string}</p>`)

