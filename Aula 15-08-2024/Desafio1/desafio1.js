// 1 - crie um programa que sorteei numeros da loteria, aleatoria, 
//conforme o jogo escolhido. Não podem ter o mesmo numero, sem repeticao.

//id jogo para acrescentar os jogos criados
let jogo = document.getElementById("jogo");

//Limpa o html
function limpar(){
    jogo.innerHTML = "";
}

function escolherLoteria(){
    //alert("Entrei!");
    var opcoes = document.getElementById("opcoesLoteria");
    //O texto do jogo selecionado (mega sena; quina; lotofacil)
    var text = opcoes.value.options[e.selectedIndex].text;
    let listaJogo = [];
    if(text != null && text != ""){
        switch (text) {
            case "Mega Sena":{
                // //console.log("Entrei")
                let count = 0;
                let maxNumbers = 6;
                
                while(count < maxNumbers){
                    let numberRandom = Math.floor(Math.random() * 100);;
                    // console.log(numberRandom);
                    // console.log(listaJogo.indexOf(numberRandom));
                    if(listaJogo.indexOf(numberRandom) == -1 && numberRandom > 0 && numberRandom < 61){
                        // console.log("entrei");
                        listaJogo.push(numberRandom);
                        count++;
                    }
                    // console.log(count);
                }
                break;
            }
            case "Quina":{
                let count = 0;
                let maxNumbers = 5;
                
                while(count < maxNumbers){
                    let numberRandom = Math.floor(Math.random() * 100);;
                    // console.log(numberRandom);
                    // console.log(listaJogo.indexOf(numberRandom));
                    if(listaJogo.indexOf(numberRandom) == -1 && numberRandom > 0 && numberRandom < 81){
                        // console.log("entrei");
                        listaJogo.push(numberRandom);
                        count++;
                    }
                    // console.log(count);
                }
                break;
            }   
            case "Lotofácil":{
                // console.log("Entrei")
                let count = 0;
                let maxNumbers = 15;
                
                while(count < maxNumbers){
                    let numberRandom = Math.floor(Math.random() * 100);;
                    // console.log(numberRandom);
                    // console.log(listaJogo.indexOf(numberRandom));
                    if(listaJogo.indexOf(numberRandom) == -1 && numberRandom > 0 && numberRandom < 26){
                        // console.log("entrei");
                        listaJogo.push(numberRandom);
                        count++;
                    }
                    // console.log(count);
                }
                break;
            }    
            default:
                alert("Opção invalida");
                break;
        }
        let h1 = document.createElement("h1");
        h1.innerText = text;
        jogo.appendChild(h1);
        let concatNumeros = "";
        let p = document.createElement("p");
        listaJogo.forEach(item => {
            //document.write();
            p.innerText += `${item} - `;
        });
        // console.log(concatNumeros);
        jogo.appendChild(p);
    }
}