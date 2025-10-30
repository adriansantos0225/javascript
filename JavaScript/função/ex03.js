// ex 1
function digaOla() {
    console.log("Olá, mundo!");
}
digaOla();

// ex 2
function dobro(a) {
    return a * 2;
}
console.log(dobro(5));

// ex 3
function soma(a, b) {
    return a + b;
}
console.log(soma(8, 6));

// ex 4
function digaNome(nome) {
    return `Olá, ${nome}!`;
}
console.log(digaNome("Adrian"));

// ex 5
function parImpar(numero) {
    return numero % 2 === 0 ? "par" : "impar";
}
console.log(parImpar(4));
console.log(parImpar(7));

// ex 6
let numeros = [2, 9, 25];
let maior = numeros[0];

function numeroMaior() {
    for (let numero of numeros) {
        if (numero > maior) {
            maior = numero;
        }
    }
    return maior;
}
console.log(numeroMaior());

// ex 7
function quantasLetras(palavra) {
    return palavra.length;
}
console.log(quantasLetras("Adrian"));

// ex 8
function desconto(preco) {
    return (preco - (preco * 0.10)).toFixed(2);
}
console.log(desconto(120));

// ex 9
function maiuscula(palavra) {
    return palavra.toUpperCase();
}
console.log(maiuscula("Adrian"));

// ex 10
let num = [2, 8, 9, 40, 50];

function maiorDez() {
    let superior = num.filter(n => n > 10);
    return superior;
}
console.log(maiorDez());