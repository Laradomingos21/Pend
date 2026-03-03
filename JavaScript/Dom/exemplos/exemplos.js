 // manipulação de elementos
 // //exemplo 1- .innerHTML
document.getElementById("conteudo").innerHTML = "<p>Olá, mundo Dom! (código HTML = inner.HTML)</p>";

//exemplo 2- .textContent
document.getElementById("mensagem").textContent = "Texto simples, sem HTML. (textContent)";

//exemplo 3- elementAttribute(name,value):
document.getElementById("foto") .setAttribute("src", "https://static.vecteezy.com/ti/fotos-gratis/t2/22967094-a-azul-embaixo-da-agua-mar-com-ai-gerado-gratis-foto.jpg");

//exemplo 4- elementAttribute(name)
let url = document.getElementById("link").getAttribute("href");
console.log(url);

//exemplo 5- style.property
document.getElementById("caixa").style.backgroundColor = "lightblue";

//exemplo 6- element.classList.add(className)
document.getElementById("alerta").classList.add("destaque");

//exemplo 7- element.classList.remove(className): remove uma classe CSS de um elemento
document.getElementById("alert").classList.remove("oculto")

//exemplo 8- document.createElement(tagName): cria um novo elemento HTMl dinamicamente atráves do JavaScript
let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este elemento foi criado pelo JavaScript";
document.getElementById("container").appendChild(novoParagrafo);

//exemplo 9- element.appendChild(child): adiciona um novo elemento como filho de um elemento existente
let novoItem = document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("list").appendChild(novoItem);

//exemplo 10- element.removeChild(child): remove um elemento filho de um elemento existente
let item = document.getElementById("item1");
document.getElementById("lista").removeChild(item);