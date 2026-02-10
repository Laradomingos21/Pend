//funções

//exemplo1 - blocos de códigos reutilizáveis
function saudacao() {
    console.log("Olá, javaScript!");
}

saudacao();


//exemplo2 - função com retorno e parametro
function somar(a, b){
    return a + b;
}
console.log(somar(5,3));


//exemplo3 - Função sem retorno e com parametro (é sem retorno pq nao tem o return)
function saudacao_pessoa(nome) {
    console.log("Olá, " + nome);
}

saudacao_pessoa("Lara");

//7.Criar função que calcula o IMC
function imc(peso, altura){
    return peso/altura;
}
let peso = 51;
let altura = 1.61;
console.log("O imc é: ", imc (peso, altura));

//8. Criar função que verifica se o número é par ou ímpar
function imparPar(number){
    if(number % 2 == 0){
        console.log("o numero ", number, "é par");
    } else{
        console.log("o numero ", number, "é ímpar");
    }
} 
console.log(imparPar(6))

//exemplo 4 - Funções Nativas
let agora = new Date();
console.log(agora);

function mostrarDataHora(){
    let data = new Date();

    console.log("Dia: ", data.getDate());
    console.log("Mês: ", data.getMonth());
    console.log("Ano: ", data.getFullYear());
    console.log("Hora: ", data.getHours());
    console.log("Minutos: ", data.getMinutes());
}

mostrarDataHora();

//Desafio
function mostrarDataHora(){
    let data = new Date();

    console.log (data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()+ "_" + data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear());
}

//exemplo 5 
console.log("funções matemáticas", Math.PI);

function calcularOperacoes(numero){
    console.log("Raiz:", Math.sqrt(numero));
    console.log("Arredondamento:", Math.round(numero));
    console.log("Para cima:", Math.ceil(numero));
    console.log("Para baixo:", Math.floor(numero));
//Desafio 2
    console.log("Quadrado:", Math.pow(numero, 2));
    console.log("Valor absoluto:", Math.abs(numero));
}

calcularOperacoes(7.8);


//exemplo 6 - Funções de string
function analisarTexto(texto){
    console.log("Tamanho:", texto.length);
    console.log("Maiúsculo:", texto.toUpperCase());
    console.log("Minúsculo:", texto.toLowerCase());
}

analisarTexto("JavaScript");

//6.2 Verifica se contém a frase JavaScript
function VerificaFrase(frase){
    console.log(frase.includes("JavaScript"));
}
VerificaFrase("Eu estudo Javascript");

//6.3 Essa função recebe dois parâmetros (nome e curso), monta uma string formatada com eles e devolve essa string. Junta String/Concatena
function AlunoDs(nome,curso) {
    return "Aluno: " + nome + " | Curso: " + curso;
}
console.log(AlunoDs("Lara Domingos", "Front-End"));

