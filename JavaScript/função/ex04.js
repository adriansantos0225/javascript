// ex 1
function triplo(n) {
    return n * 3;
}
console.log(triplo(4));

// ex 2
let nome = "Adrian";
let sobrenome = "Carvalho";

function nomeCompleto() {
    return `Seu nome completo é: ${nome} ${sobrenome}`;
}
console.log(nomeCompleto());

// ex 3
function negativoPositivo(n) {
    if (n < 0) {
        console.log("False");
    } else if (n > 0) {
        console.log("True");
    } else {
        console.log("Zero");
    }
}
negativoPositivo(-2);

// ex 4
let palavras = ["arroz", "feijão", "alface"];

function quantidadePalavras(palavras) {
    return palavras.length;
}
console.log(quantidadePalavras(palavras));

// ex 5
function semEspaco(frase) {
    return frase.split(" ").join(""); // separa por espaço e junta tudo sem espaço
}

console.log(semEspaco("olá mundo"));
console.log(semEspaco("aprendendo javascript"));

// ex 6
let numeros = [2, 5, 10, 3];
function somaNumeros(numeros) {
    return numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
}
console.log(somaNumeros(numeros));

// ex 7 
function inverterPalavra(palavra) {
    return palavra.split("").reverse().join("");
}
console.log(inverterPalavra("casa"));

// ex 8 
function checarNumero(numero) {
    if (numero > 100) {
        return "Maior que 100";
    } else {
        return "Menor ou igual á 100"
    }
}
console.log(checarNumero(150));
console.log(checarNumero(80));

// ex 9
let name = ["Ana", "Fernando", "Lucas", "Patrícia"]

function maisDeCinco(name) {
    let maiorCinco = name.filter(name => name.length > 5);
    return maiorCinco;
}
console.log(maisDeCinco(name));

// ex 10
let listaNumeros = [2, 5, 8, 9, 12];

function pares(numeros) {
    let apenasPares = numeros.filter(n => n % 2 === 0);
    return apenasPares.length;
}
console.log(pares(listaNumeros));