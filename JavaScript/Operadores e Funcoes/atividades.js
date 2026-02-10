//Atividades
//1. Hora Atual
function mostrarHora(){
    let data = new Date();
    console.log (data.getHours());
}

//2. Uma função que receba dois números e mostre: soma e média
let numero_1 = Number(prompt("Digite um número:"));
let numero_2 = Number(prompt("Digite outro número:"));

function numero(numero_1, numero_2){
    console.log((numero_1 + numero_2)/2); 
    console.log(numero_1 + numero_2);
}
numero(numero_1, numero_2);

//3. Uma função que receba um nome e mostre: quantidade de letras e nome em maiúsculo
let palavra = prompt("Digite uma palavra:");
function analisarTexto(texto){
    console.log("Tamanho:", texto.length);
    console.log("Maiúsculo:", texto.toUpperCase());
}
analisarTexto(palavra);

//4. Uma função que receba uma frase e verifica se contém a palavra "HTML"
let frase = prompt("Digite uma Frase:")
function VerificaFrase(frase){
    console.log(frase.includes("HTML"));
}
VerificaFrase(frase);
