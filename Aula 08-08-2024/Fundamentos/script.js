//String

/* 
    var nome = prompt("Digite seu nome: ");
    var idade = prompt("E quantos anos você tem? ");

    alert(`Nome: ${nome}\nIdade: ${idade}`); 

*/

//Num

/*let num1 = Number(prompt("Digite o numero 1"));
let num2 = Number(prompt("Digite o numero 2"));

let soma = num1 + num2;
let sub = num1 - num2;
let div = num1 / num2;
let mult = num1 * num2; */

//Interagir com DOM

/*alert(`${num1} + ${num2} = ${soma}\n${num1} - ${num2} = ${sub}\n${num1} / ${num2} = ${div}\n${num1} * ${num2} = ${mult}\nMedia: ${soma/2}`);
let string = `${num1} + ${num2} = ${soma}<br>${num1} - ${num2} = ${sub}<br>${num1} / ${num2} = ${div}<br>${num1} * ${num2} = ${mult}<br>Media: ${soma/2}`;
let linkImagem = "https://th.bing.com/th/id/OIP.TTFQZO7O4oVT17QzHh1QmgHaE7?w=227&h=180&c=7&r=0&o=5&pid=1.7";
let image = `<img src="${linkImagem}"/>`
document.write(`<p>${string}</p><br>${image}`) */

var saudacao = document.getElementById('saudacao');

function logar()
{
    let userName = prompt("Digite seu usuario: ");
    //console.log(userName)
    if(userName === null || userName === '')
    {
        alert("Erro! Digite um usuário");
    }
    else{
        saudacao.innerHTML = `Bem-Vindo ${userName}`;

        let btnLogout = document.createElement('button');

        btnLogout.innerText = "Deslogar";
        btnLogout.onclick = deslogar;
        saudacao.appendChild(btnLogout);
    }
}

function deslogar()
{
    alert("Você se desconectou!");
    saudacao.innerHTML = "Até mais!";
}

