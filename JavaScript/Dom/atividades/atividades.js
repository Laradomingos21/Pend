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
let texto4 = document.getElementById("texto4");
let botao3 = document.getElementById("botao3");
let mensagem = document.getElementById("alerta");

botao3.addEventListener("click", function () {
    if (texto4.value === "") {
        mensagem.innerText = "o campo nome é obrigatório";
        mensagem.classList.add("vazio");
    } else {
        alerta.classList.toggle("preenchido");
        mensagem.innerText = "nome enviado com sucesso";
    }
})

//Atividade 7 e 8
let email = document.getElementById("email");
let senha = document.getElementById("senha");
let email2 = document.getElementById("email2");
let senha2 = document.getElementById("senha2");
let BotaoMandar = document.getElementById ("BotaoMandar");
let mandar = document.getElementById("mandar");

    mandar.addEventListener("click", function() {
    if (!email.value.includes("@") && !email.value.includes('.')) {
        email2.innerText = "é obrigátorio ter o @ e o .";
        email2.style.color = "red";
        email2.classList.add("erro");
    } else {
        email2.innerText = "e-mail válido";
        email2.style.color = "green";
        email2.classList.add("sucesso");
    }
})

        senha.addEventListener("keyup", function() { //verifica em tempo real dentro de uma variável que voce esta solicitando 
    if (senha.value.length < 6) { //length tamanho da senha
        senha2.innerText = "senha fraca";
        senha2.style.color = "red";
        senha2.classList.add("erro");

    } else if (senha.value.length >= 6 && senha.value.length < 10){
        senha2.innerText = "senha aceitável";
        senha2.style.color = "orange";
        senha2.classList.add("aceitavel");

    } else if (senha.value.length >= 10){
        senha2.innerText = "senha forte";
        senha2.classList.add("ok");
        senha2.style.color = "green";
    }
}) 

    
