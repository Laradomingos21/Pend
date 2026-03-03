//exemplo 1- eventos
let botao = document.querySelector("#botao");
let texto = document.querySelector(".texto");

botao.addEventListener("click", function () {
    texto.textContent = "Texto alterado após o clique!";
});

//exemplo 2- evento de digitação(keyup)
let input = document.querySelector("#nome");
let resultado = document.querySelector("#resultado");

input.addEventListener("keyup", function () {
    resultado.textContent = input.value; //.value leitura do input de cima
});

//exemplo 3- 