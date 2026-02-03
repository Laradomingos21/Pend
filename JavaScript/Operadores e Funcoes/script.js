console.log("Olá, JavaScript!");

let a = 10;
let b = 3;
console.log("adição: +", a+b);
console.log("subtração: -", a-b);
console.log("multiplicação: *", a*b);
console.log("divisão: /", a/b);
console.log("resto da divisão: %", a%b);
console.log("exponenciação: **", a**b);

let contador = 3;
contador ++;
console.log("incremento: ++", contador);

let kkkk = 9;
kkkk --;
console.log("decrememto: --", kkkk);


//1.media
let c = 3;
let d = 6;
let e = 8;
console.log((c + d + e)/3);

//2.resto da divisão
console.log(c%d);



//3.maior de idade
let anos = 17;
if (anos >= 18){
    console.log("é maior de idade");
}
else{
    console.log("é menor de idade");
}



//4.Comparar dois números e mostrar qual é maior
let numero_um = 100;
let numero_dois = 98;
if (numero_um > numero_dois){
    console.log("numero um é maior que o dois");
}
else if (numero_um < numero_dois){
    console.log("numero dois é maior");
}
else{ 
    console.log("os numeros são iguais");
}



//5. verificar se um aluno foi aprovado (nota >=7 e frequencia >=75%)
let nota = 5;
let frequencia = 85;
if(nota >= 7 && frequencia >= 75){
    console.log("aluno aprovado");
}else {
    console.log("aluno reprovado");
}



//6. Verificar acesso com login OU token
let login = false;
let token = true;
if(login == true || token == true){
    console.log("login ou token verdadeiro")
}else {
    console.log("login ou token incorreto")
}



//exemplo1
let x = 10;
let y = "10";
console.log("igual(valor): ==", x == y);
console.log("igual(valor e tipo): ===", x === y); 
console.log("diferente(valor): !=", x != y); 
console.log("diferente(valor e tipo): !==",x !== y); 
console.log("operadores lógicos");

//exemplo2
let idade = 20;
let temCarteira = true;

console.log(idade >= 18 && temCarteira); //  e/and (basta ter um falso que ele vai dar falso)

let chovendo = false;
let guardaChuva = true;

console.log(chovendo || guardaChuva);//  ou/or (não precisa os dois ser verdadeiro para dar true)

let ligado = false;
console.log(!ligado); //true (inverso/not)
