// Objeto: aluno1, aluno2, aluno3
// Atributos: nome, idade, matricula e curso
// Métodos: aprender, estudar, apresentar

class Calopsita {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender() {
        console.log(`O produto ${this.nome} com o preço ${this.preco} foi vendido` );
    }

    repor() {
        console.log(`O produto ${this.nome} está sendo reposto no estoque ${this.estoque}`);
    }

    alterarPreco() {
        console.log(`O produto ${this.nome} teve o preço de  ${this.preco} alterado`);
    }
}

console.log("----------------------");

const calopsita1 = new Calopsita("Floquin", "R$ 100", "3");
console.log("Calopsita 1: ", calopsita1);

const calopsita2 = new Calopsita("Branquinha", "R$ 100", "2");
console.log("Calopsita 2: ", calopsita2);

console.log("----------------------");

console.log("atributos da calopsita 1:");
console.log("-", calopsita1.nome);  
console.log("-", calopsita1.preco);  
console.log("-", calopsita1.estoque);  
 
console.log("----------------------");

console.log("atributos da calopsita 2:");
console.log("+", calopsita2.nome);
console.log("+", calopsita2.preco);
console.log("+", calopsita2.estoque);

console.log("----------------------");

calopsita1.vender();
calopsita1.repor();
calopsita1.alterarPreco();

console.log("----------------------");

calopsita2.vender();
calopsita2.repor();
calopsita2.apresentar();
