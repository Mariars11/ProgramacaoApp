// 1 - crie um programa que sorteei numeros da loteria, aleatoria, 
//conforme o jogo escolhido. Não podem ter o mesmo numero, sem repeticao.


function escolherLoteria(){
    //alert("Entrei!");
    var e = document.getElementById("opcoesLoteria");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    let listaJogo = [];
    if(text != null && text != ""){
        switch (text) {
            case "Mega Sena":{
                //console.log("Entrei")
                let count = 0;
                let maxNumbers = 6;
                
                while(count < maxNumbers){
                    let numberRandom = Math.floor(Math.random() * 100);;
                    console.log(numberRandom);
                    console.log(listaJogo.indexOf(numberRandom));
                    if(listaJogo.indexOf(numberRandom) == -1 && numberRandom > 0 && numberRandom < 61){
                        console.log("entrei");
                        listaJogo.push(numberRandom);
                        count++;
                    }
                    console.log(count);
                }
                break;
            }
            case "Quina":{
                let count = 0;
                let maxNumbers = 5;
                
                while(count < maxNumbers){
                    let numberRandom = Math.floor(Math.random() * 100);;
                    console.log(numberRandom);
                    console.log(listaJogo.indexOf(numberRandom));
                    if(listaJogo.indexOf(numberRandom) == -1 && numberRandom > 0 && numberRandom < 81){
                        console.log("entrei");
                        listaJogo.push(numberRandom);
                        count++;
                    }
                    console.log(count);
                }
                break;
            }   
            case "Lotofácil":{
                console.log("Entrei")
                let count = 0;
                let maxNumbers = 15;
                
                while(count < maxNumbers){
                    let numberRandom = Math.floor(Math.random() * 100);;
                    console.log(numberRandom);
                    console.log(listaJogo.indexOf(numberRandom));
                    if(listaJogo.indexOf(numberRandom) == -1 && numberRandom > 0 && numberRandom < 26){
                        console.log("entrei");
                        listaJogo.push(numberRandom);
                        count++;
                    }
                    console.log(count);
                }
                break;
            }    
            default:
                alert("Opção invalida");
                break;
        }
        document.write(`<h1>${text}</h1>`)
        listaJogo.forEach(item => {
            document.write(`<p>${item} </p>`);
            
        });
    }
}