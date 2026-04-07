let nome = document.getElementById("nome");
let nome2 = document.getElementById("nome2");/*ele pega o paragráfo (p) do nome, html */

let email = document.getElementById("email");
let email2 = document.getElementById("email2");

let senha = document.getElementById("senha");
let senha2 = document.getElementById("senha2");


let telefone = document.getElementById("telefone");
let telefone2 = document.getElementById("telefone2");

let botaotelefone = document.querySelector('#novotelefone');
let tefelone = document.querySelector("#telefone2"); // Ajustado para usar o ID que já existe no seu HTML

let botao = document.querySelector("#botaoSenha");

let caracteresNome = /^[a-zA-ZÇç-ççáàâãéèêíïóôõöúçñÀÁÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]+$/; /*aceita somente letras e acentos*/
let caracteresTelefone = /^[0-9]{11}$/; /*aceita somente números e números até 10*/
let caracteres = /^[a-zA-Z0-9._]+@[a-zA-Z.]+$/; /*antes do @: aceita letras maiúsculas, minúsculas, números, ponto e underscore, obriga ter um @ e depois do @: aceita somente letras*/

nome.addEventListener("keyup", function () { //verificar em tempo real o que eu estou escrevendo
    if(!caracteresNome.test(nome.value)) {
        nome2.innerText = "Nome inválido. Verifique se digitou somente letras!"; //innertext para acessar ou modificar o conteúdo de texto "visível" de um elemento HTML
        nome2.classList.add("erradinho");
        nome2.style.color = "red" //bota a cor no que eu escrevi ali em cima no innerText
    } else {
        nome2.innerText = "Nome válido";
        nome2.classList.add("certinho");
        nome2.style.color = "green";
    }
});

email.addEventListener("keyup", function () {
    if (caracteres.test(email.value)) {
        email2.innerText = "Email válido";
        email2.classList.add("certinho");
        email2.style.color = "green";
    } else {
        email2.innerText = "Email inválido";
        email2.classList.add("erradinho");
        email2.style.color = "red";
    }
});

senha.addEventListener("keyup", function () { 
    if (senha.value.length < 6) { //verifica se a senha é menor que 6 e se for coloca que é fraca
        senha2.innerText = "Senha fraca";
        senha2.classList.add("erro");
        senha2.style.color = "red";
    } else if (senha.value.length >= 6 && senha.value.length < 10) { //verifica se a senha é maior ou igual a 6 e menor que 10, se for é uma senha aceitável
        senha2.innerText = "Senha aceitável";
        senha2.classList.add("aceitavel");
        senha2.style.color = "orange";
    } else {
        senha2.innerText = "Senha forte"; //verifica se a senha é maior que 10, se for ela é forte
        senha2.classList.add("ok");
        senha2.style.color = "green";
    }
});


botao.addEventListener("click", function(){
    if (senha.type === "password") {
            senha.setAttribute('type', 'text');
            botao.classList.replace("bi-eye-slash-fill", "bi-eye-fill"); //aqui é para aparecer o olhinho fechado 
    } else {
            senha.setAttribute('type', 'password');
            botao.classList.replace("bi-eye-fill", "bi-eye-slash-fill"); //aqui é quando voce aperta o olhinho ele aparece com um risco no zóio
    }
});

telefone.addEventListener("keyup", function () {
    if (!caracteresTelefone.test(telefone.value)) {
        telefone2.innerText = "Telefone inválido. Verifique se digitou somente números, e numeros com 11 dígitos!"; //ele ve la em cima onde eu coloquei as condições se voce digitou letra ou numeros maior ou menor que 11, ele vai dar um erro
        telefone2.classList.add("erro");
        telefone2.style.color = "red";

    } else {
        telefone2.innerText = "Telefone válido";
        telefone2.classList.add("certinho");    
        telefone2.style.color = "green";
    }
});

botaotelefone.addEventListener("click", function() { 
    const tele = document.createElement("input"); //o const é para colocar uma variável 
    const botaotele = document.createElement("button");

    botaotele.textContent = "remover"; //essa parte inteira é para quando apertar em remover, voce confirmar se é para remover e ao clicar sim ele remove. Se clicar nao ele cancela e nao remove o numero
    tefelone.appendChild(tele);
    tefelone.appendChild(botaotele);
    botaotele.addEventListener("click", function(){
        if(confirm("Quer mesmo remover isso, parça?")){
            tefelone.removeChild(tele);
            tefelone.removeChild(botaotele);
        }
    })
})
