let pessoa = {
    nome: "Maria",
    idade: 22,
    cargo: "Back-end"
}
let users = [
    {
        nome: "Maria",
        idade: 23,
        cargo: "Front"
    },
    {
        nome: "Gabriel",
        idade: 21,
        cargo: "Segurança"
    }
]

//console.log(users)

// users.forEach(user => {
//     console.log(`Nome: ${user.nome}\nIdade: ${user.idade}\nCargo: ${user.cargo}\n`);
// });

//Desconstruir um objeto
let {nome, cargo} = pessoa;

console.log(nome);

nome = "Vitoria";

console.log(nome);



let numerosPares = [2 ,4 ,6,8,10];

//spreed operator
let numerosParesImpares = [...numerosPares, 3, 5, 7, 9, 11];

console.log(numerosParesImpares);


function user(info){
    let data = {
        ...info,
        status: "OK",
        data: "2024-08-22"
    }
    console.log(data);
}

let user1 = {
    nome: "Maria",
    idade: 22,
    cargo: "backend"
}
user(user1);

function nomes(...nomes){
    console.log(nomes);
}

nomes("maria", "gabriel", "victor", "luiza");
//Escolhe numero aleatoriamente 
function escolhaNumeros(...numeros) {
    var index = Math.floor(Math.random() * numeros.length);
    return numeros[index];
}

console.log(escolhaNumeros(1 ,2 ,3 ,4 ,5 ,6));