class Cadastro {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        this.preco = this.preco - (this.preco *this.desconto / 100);

        return this.preco;
    }
}

class Gerente {
    constructor() {
        this.Gerente = [];
    }

    adicionarProduto(Cadastro) {
        this.Gerente.push(Cadastro);
    }

    exibir() {

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.Gerente.forEach(cadastro => {
            resultado.innerHTML += `
            <div>
                <p>Nome: ${cadastro.nome}</p>
                <p>Preço: ${cadastro.aplicarDesconto(cadastro)}</p>
                <p>Categoria: ${cadastro.categoria}</p>
                <p>Desconto: ${cadastro.desconto}%</p>

                ----------------------
            </div>`;
        });
    } 
}

const gerente = new Gerente();
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function() {
  
    const produto = new Cadastro(nome.value, preco.value, categoria.value, desconto.value);

    gerente.adicionarProduto(produto);
    gerente.exibir();
});
