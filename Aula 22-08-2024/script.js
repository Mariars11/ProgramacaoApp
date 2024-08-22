/* function imprimir(){
    document.write(`Contando<br>`);
} */

//Com base no intervalo executa uma função
    //setInterval(imprimir, 1000);

    //Anonimo
   /* setInterval(() => {
        document.write(`Contando<br>`);
    }, 1000) */

/* let contador = document.getElementById("contador");

var timer = setInterval(() =>{
    contador.innerHTML += `Hello! <br>`; 
}, 1000)

function stopTimer(){
    clearInterval(timer);
} */

//setTimeout(imprimir, 3000);

/* setTimeout(() => {
    //console.log("Tempo passado");
    //imprimir();
}, 2000) */

// criar um timer que para os segundos

var nome = "Maria";

//Var -> pode ser alterado em qualquer parte (dentro e fora) do escopo
if(nome === "Maria"){
    var profissao = "estudante";
    console.log(profissao);
}

// let -> não há acesso fora do escopo (apenas no bloco)

if(nome === "Maria"){
    let cargo = "Estagiario";
    console.log(cargo);
}

// const -> obrigatorio inicializar; não é possivel alterar o valor nem acessar fora do escopo

if(nome === "Maria"){
    const posicao = "14";
    console.log(posicao);
}
