let botao = document.querySelector("#cadastrar");
let mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", function () {
    mensagem.textContent = "Cadastrado!";

});

let Caracteres = /^[$*@. a-z A-z 0-9]$/;
let nome = document.getElementById("nome");

nome.addEventListener("keyup", function (){ //verifica em tempo real dentro de uma variável que voce esta solicitando 
    if (Caracteres.test(nome.value)) {
         Caracteres.textContent = "Nome inválido"
    } 
});