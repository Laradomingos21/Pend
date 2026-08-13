// Objeto: aluno1, aluno2, aluno3
// Atributos: nome, idade, matricula e curso
// Métodos: aprender, estudar, apresentar

class Aluno {
    constructor(nome, idade, matricula, curso) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
        this.curso = curso;
    }

    aprender() {
        console.log(`A aluna ${this.nome} está aprendendo sobre o curso ${this.curso}`);
    }

    estudar() {
        console.log(`A aluna ${this.nome} está estudando sobre o ${this.curso}`);
    }

    apresentar() {
        console.log(`A aluna ${this.nome} está apresentando o trabalho do ${this.curso}`);
    }
}

console.log("----------------------");

const aluno1 = new Aluno("Lara", "17 anos", "5203", "Desenvolvimento de Sistemas");
console.log("Aluno 1: ", aluno1);

const aluno2 = new Aluno("Anna", "17 anos", "5184", "Arquitetura");
console.log("Aluno 2: ", aluno2);

const aluno3 = new Aluno("Gabriela", "17 anos", "4658", "Pedágogia");
console.log("Aluno 3: ", aluno3);


console.log("----------------------");

console.log("atributos do aluno 1:");
console.log("-", aluno1.nome);  
console.log("-", aluno1.idade);  
console.log("-", aluno1.matricula);  
console.log("-", aluno1.curso);  
 

console.log("----------------------");

console.log("atributos do aluno 2:");
console.log("+", aluno2.nome);
console.log("+", aluno2.idade);
console.log("+", aluno2.matricula);
console.log("+", aluno2.curso);

console.log("----------------------");

console.log("atributos da casa 3:");
console.log("+", aluno3.nome);
console.log("+", aluno3.idade);
console.log("+", aluno3.matricula);
console.log("+", aluno3.curso);

console.log("----------------------");

aluno1.aprender();
aluno1.estudar();
aluno1.apresentar();

console.log("----------------------");

aluno2.aprender();
aluno2.estudar();
aluno2.apresentar();

console.log("----------------------");

aluno3.aprender();
aluno3.estudar();
aluno3.apresentar();
