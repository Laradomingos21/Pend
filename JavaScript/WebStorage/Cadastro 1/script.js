class Cadastro {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }
 
    aplicarDesconto() {
        this.preco = this.preco * (1 - (this.desconto / 100));
    }
}
 
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");
const resultado = document.querySelector("#resultado");
 
// Array que guarda todos os produtos cadastrados
let produtos = [];
 
// Recupera os produtos do localStorage (se existirem) automaticamente ao abrir a página
function carregarProdutos() {
    const dados = localStorage.getItem("produtos");
    if (dados) {
        produtos = JSON.parse(dados);
    }
}
 
// Salva o array atual de produtos no localStorage
function salvarProdutos() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}
 
// Exibe todos os produtos na tela, cada um com um botão de excluir
function exibirProdutos() {
    resultado.innerHTML = "";
 
    produtos.forEach(function (produto, _cadastro) {
        resultado.innerHTML += `
            <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
                <p>Nome: ${produto.nome}</p>
                <p>Preço: ${Number(produto.preco).toFixed(2)}</p>
                <p>Categoria: ${produto.categoria}</p>
                <p>Desconto: ${produto.desconto}%</p>
                <button onclick="excluirProduto(${_cadastro})">Excluir</button>
            </div>`;
    });
}
 
// Exclui um produto pelo índice, atualiza o array, o localStorage e a tela
function excluirProduto(_cadastro) {
    produtos.splice(_cadastro, 1);
    salvarProdutos();
    exibirProdutos();
}
 
botaoCadastrar.addEventListener("click", function () {
 
    const produto = new Cadastro(nome.value, preco.value, categoria.value, desconto.value);
    produto.aplicarDesconto();
 
    produtos.push(produto);
    salvarProdutos();
    exibirProdutos();
 
    nome.value = "";
    preco.value = "";
    categoria.value = "";
    desconto.value = "";
});
 
// Ao abrir a página, recupera e exibe automaticamente os produtos salvos
carregarProdutos();
exibirProdutos();
 