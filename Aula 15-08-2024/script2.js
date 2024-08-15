let meses = ["Janeiro", "Fevereiro", "Março", "Abril"];

let i = 0;

while(i < meses.length){
    document.write(`<p>${meses[i]}</p>`);
    i++;
}

for(var count = 0; count < meses.length; count++){
    document.write(`<h4>${meses[count]}</h4>`);
}

function escolher(){
    
}

function option(){
    var e = document.getElementById("selectFood");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;

    if(text != null && text != ""){
        alert(text);
    }
}

