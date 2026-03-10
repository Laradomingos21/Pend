//Atividade 1
let textoo = document.querySelector(".textoo");
let bota0 = document.querySelector("#bota0");
let botao = document.querySelector("#botao");

bota0.addEventListener("click", function () {
    textoo.style.color = "blue";
});

botao.addEventListener("click", function () {
    textoo.style.color = "red";
});

//Atividade 2
function clique() {
    let p = document.getElementById("kkkkkkkk");
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
};

//Atividade 3
function contar() {
    let texto = document.getElementById("texto").value;
    let quantidade = texto.length;
    document.getElementById("contador").innerText = "Caracteres: " + quantidade;
}

//Atividade 4
let contador = 0;
function contarCliques() {
    contador++;
    document.getElementById("resultado").innerText = "Contador de Cliques: " + contador;
}

//Atividade 5
function Palavra() {
    let Palavra = document.getElementById("Palavra").value;// Ela permite tanto ler o que está escrito dentro de uma tag quanto alterar esse valor.
    let li = document.createElement("li");
    li.innerText = Palavra;
    document.getElementById("lista").appendChild(li);
}

//Atividade 5.1
let inserir2 = document.getElementById("inserir2");
let botao2 = document.getElementById("botao2");
let adicionar2 = document.getElementById("adicionar2");

botao2.addEventListener("click", function () {
    let novoItem2 = document.createElement("li");
    novoItem2.textContent = inserir2.value;
    adicionar2.appendChild(novoItem2);

//Atividade 6 e o extra
    novoItem2.addEventListener("click", function () {
       if (confirm ("voce quer mesmo remover o item da lista?")){
          adicionar2.removeChild(novoItem2);
       }
    });
});

//Hard
let nome = document.getElementById("nome");
let enviar = document.getElementById("enviar");
let mensagem = document.getElementById("mensagem");

enviar.addEventListener("click", function (){
    

});