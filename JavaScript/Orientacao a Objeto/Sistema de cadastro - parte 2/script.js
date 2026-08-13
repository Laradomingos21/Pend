class Cadastro {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        const ProdutoDesconto = preco * (1 - (desconto / 100));
    }

    exibir() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.cadastros.forEach(cadastro => {
            resultado.innerHTML += `
            <div>
                <p>Nome: ${cadastro.nome}</p>
                <p>Idade: ${cadastro.idade}</p>
                <p>Curso: ${cadastro.curso}</p>
                <p>Matricula: ${cadastro.matricula}</p>

                ----------------------
            </div>`;
            });
        }
    } 

// const cadastro = new Cadastro();
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function() {
  
    const aluno = new Cadastro(nome.value, preco.value, categoria.value, desconto.value);

    cadastro.aplicarDesconto(cadastro);
    cadastro.exibir();

});



