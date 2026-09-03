function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const filas = document.querySelectorAll(".fila-1, .fila-2, .fila-3, .fila-4");
const carrinho = document.querySelector("#carrinho");

const comidas = Array.from(filas).map(function (fila) {
    return fila.querySelector(".carta-verso").textContent.trim();
});

// embaralha essa lista de comidas
const comidasEmbaralhadas = embaralhar(comidas);

// devolve os emojis embaralhados pras cartas, na nova ordem
filas.forEach(function (fila, index) {
    fila.querySelector(".carta-verso").textContent = comidasEmbaralhadas[index];
});

let cartasViradas = [];  // não posso virar mais de duas cartas
let travado = false; // só posso clicar em duas cartas, caso clique em mais ele nao permite

let elementoArrastado = null; // guarda a carta que está sendo arrastada

filas.forEach(function (fila) {
    fila.addEventListener("click", function () {
        if (travado) return;
        if (fila.classList.contains("virada")) return;
        if (fila.classList.contains("encontrada")) return;

        fila.classList.add("virada");
        cartasViradas.push(fila);

        if (cartasViradas.length === 2) {
            verificarPar();
        }
    });
});

function verificarPar() {
    travado = true;

    const [carta1, carta2] = cartasViradas;
    const comida1 = carta1.querySelector(".carta-verso").textContent.trim();
    const comida2 = carta2.querySelector(".carta-verso").textContent.trim();

    if (comida1 === comida2) {
        carta1.classList.add("encontrada");
        carta2.classList.add("encontrada");

        carta1.setAttribute("draggable", "true");
        carta2.setAttribute("draggable", "true");

        // guarda a referência de uma carta na outra
        // (assim, ao arrastar uma, sabemos qual é a parceira)
        carta1.parceira = carta2;
        carta2.parceira = carta1;

        cartasViradas = [];
        travado = false;
    } else {
        // se não deu par, espera o jogador ver, depois desvira as duas
        setTimeout(function () {
            carta1.classList.remove("virada");
            carta2.classList.remove("virada");
            cartasViradas = [];
            travado = false;
        }, 900);
    }
}

filas.forEach(function (fila) {
    fila.addEventListener("dragstart", function (event) {
        if (!fila.classList.contains("encontrada")) {
            event.preventDefault();
            return;
        }
        elementoArrastado = fila;
        fila.classList.add("arrastando");
    });

    fila.addEventListener("dragend", function () {
        fila.classList.remove("arrastando");
    });
});

carrinho.addEventListener("dragover", function (event) {
    event.preventDefault();
    carrinho.classList.add("dragover");
});

carrinho.addEventListener("dragleave", function () {
    carrinho.classList.remove("dragover");
});

carrinho.addEventListener("drop", function (event) {
    event.preventDefault();
    carrinho.classList.remove("dragover");

    if (!elementoArrastado) return;

    const parceira = elementoArrastado.parceira;

    carrinho.appendChild(elementoArrastado);
    if (parceira) {
        carrinho.appendChild(parceira);
    }

    elementoArrastado = null;
});
