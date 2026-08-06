//Classe
class Carro {

    // É como se fosse um formulário
    constructor (marca, modelo, ano, cor) {
    //atributo (propriedades da classe)
    //this significa "este objeto". Ele serve para dizer que aquele atributo pertence ao objeto que está sendo criado. Guarda os dados dentro do parâmetro.
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    }

    //método
    ligar() {
        console.log("Carro ligado");
    }

    acelerar() {
        console.log("Acelerando");
    }

    frear() {
        console.log(`${this.modelo} freiou.`);
    }
}

//Objeto - carro1
//console.log - print
const carro1 = new Carro("Volkswagen", "Gol", 2020, "Branco");
console.log("Carro 1:", carro1);

//
const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro 2:", carro2);

const carro3 = new Carro("Ford", "mustang", 2020, "chumbo");
console.log("Carro 3: ", carro3);

console.log("-------------------------------");
console.log("Atributos do Carro 1: ");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("-------------------------------");
console.log("Atributos do Carro 2: ");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("-------------------------------");
console.log("Atributos do Carro 3: ");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("-------------------------------");

//método
carro1.ligar();
carro1.acelerar();
carro1.frear();

carro2.ligar();
carro2.acelerar();
carro2.frear();

carro3.ligar();
carro3.acelerar();
carro3.frear();