let contador = document.getElementById("timer");
let count = 0;
var timer = setInterval(() =>{
    count += 1; 
    contador.innerHTML = `${count} <br>`; 
}, 1000)

function stopTimer(){
    clearInterval(timer);
}