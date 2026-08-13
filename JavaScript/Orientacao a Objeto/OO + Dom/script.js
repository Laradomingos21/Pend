class Aluno {
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    estudar() {
        console.log(`${this.nome} está estudando...`);
    }

    apresentar() {
        console.log(`${this.nome} está fazendo uma ótima apresentação!`);
    }

    exibirTela() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        alunos.forEach(aluno => {

            resultado.innerHTML += `
            <div>        
                <p>Nome: ${aluno.nome} </p>
                <p>Idade: ${aluno.idade} </p>
                <p>Curso: ${aluno.curso} </p>
                <p>Matricula: ${aluno.matricula} </p>
            </div>`;
        });
    }
}

const alunos = [];
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const curso = document.querySelector("#curso");
const matricula = document.querySelector("#matricula")
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function() {
  
    const aluno = new Aluno(nome.value, idade.value, curso.value, matricula.value);

    alunos.push(aluno);
    console.log(alunos);

    aluno.estudar();
    aluno.apresentar();
    aluno.exibirTela();
});
// const aluno = new Aluno ("Lara", "17", "desenvolvimento de sistemas", "5203");
// console.log("Aluno: ", aluno);




