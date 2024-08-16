//2 - crie um programa que leia uma dada temperatura e converta para a 
//temperatura escolhida pelo o usuario.

function calcular() {
    let opcoesTemperatura = document.getElementById("opcoesTemperatura");
    let text = opcoesTemperatura.options[opcoesTemperatura.selectedIndex].text;

    console.log(text);

    let valorTemperatura = document.getElementById("temperaturaInformada");
    let textTemperatura = valorTemperatura.value;

    console.log(textTemperatura);

    let opcoesTemperaturaTransformar = document.getElementById("opcoesTemperaturaTransformar");
    let textTransformar = opcoesTemperaturaTransformar.options[opcoesTemperaturaTransformar.selectedIndex].text;
    let temperaturaTransformada = Number();
    console.log(textTransformar);

    switch (text) {
        case "Celsius":{
            switch (textTransformar) {
                case "Fahrenheit":{
                    temperaturaTransformada = (Number(textTemperatura) * 1.8) + 32;
                    break;
                }
                case "Kelvin":{
                    temperaturaTransformada = (Number(textTemperatura) + 273.15);
                    break;
                }              
                default:
                    break;
            }
            break;
        }
        case "Fahrenheit":{
            switch (textTransformar) {
                case "Celsius":{
                    temperaturaTransformada = (Number(textTemperatura) - 32) / 1.8;
                    break;
                }
                case "Kelvin":{
                    temperaturaTransformada = (Number(textTemperatura) + 459.67) / 1.8;
                    break;
                }              
                default:
                    break;
            }
            break;
        }   
        case "Kelvin":{
            switch (textTransformar) {
                case "Celsius":{
                    temperaturaTransformada = (Number(textTemperatura) - 273.15);
                    break;
                }
                case "Fahrenheit":{
                    temperaturaTransformada = (Number(textTemperatura) * 1.8) - 459.67;
                    break;
                }              
                default:
                    break;
            }
            break;
        }   
        default:
            break;
    }

    document.write(`<h1>${textTemperatura} ${text} equivalem a ${temperaturaTransformada.toString()} ${textTransformar}</h1>`)
}