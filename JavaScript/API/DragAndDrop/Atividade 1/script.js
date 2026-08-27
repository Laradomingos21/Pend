const cartas = document.querySelectorAll(".carta");
const carrinho = document.querySelector("#carrinho");

cartas.forEach(function (carta) {

    carta.addEventListener("dragstart", function (event) {
        // guardamos o EMOJI (conteúdo de texto), já que não temos mais id
        event.dataTransfer.setData("text", event.target.textContent);

        // feedback visual: carta fica meio transparente enquanto é arrastada
        event.target.classList.add("arrastando");
    });

    carta.addEventListener("dragend", function (event) {
        event.target.classList.remove("arrastando");
    });

});

// mudar o padrão para permitir soltar
carrinho.addEventListener("dragover", function (event) {
    event.preventDefault();
    carrinho.classList.add("dragover"); // feedback visual na área de soltar
});

// carrinho.addEventListener("dragleave", function () {
//     carrinho.classList.remove("dragover");
// });

// soltar
carrinho.addEventListener("drop", function (event) {
    event.preventDefault();
    carrinho.classList.remove("dragover");

    const emoji = event.dataTransfer.getData("text");

    const item = document.createElement("span");
    item.textContent = emoji;
    item.style.fontSize = "2rem";
    carrinho.appendChild(item);
});
