//Definição de lista
let lista = ["Victor", "Sabrina", "Maria", "Olivia", 150];

//Percorre todos os elementos
lista.forEach(item => {
    console.log(item);
}); 
//Encontrar o index de um elemento
let indexOf150 = lista.indexOf("Olivia");
console.log("\n");

lista[indexOf150] = "Olivia Rodrigo";
//Elimina o ultimo elemento
lista.pop();
//Adiciona um novo elemento ao inicio da lista
lista.unshift("Antonia");
//Elimina o primeiro elemento de uma lista
lista.shift();
lista.forEach(item => {
    console.log(item);
}); 


//Altera o sepador da lista de ',' para '/'
console.log(lista.join("/"));