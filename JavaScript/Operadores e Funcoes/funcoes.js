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

