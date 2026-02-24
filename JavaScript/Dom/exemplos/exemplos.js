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