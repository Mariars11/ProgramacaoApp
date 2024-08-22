let nomes = ["Sabrina", "Mateus", "Victor", "Maria"];

nomes.map((item, index) => {
    console.log(`${index} - ${item}`);
})

//função anonima
let soma = ((b, c) => {
    let total = b + c;
    console.log(total);
})

soma(10 ,20)