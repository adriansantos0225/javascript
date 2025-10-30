// ex 1
function verificar(numero) {
    if (numero > 0) {
        return "Número positivo";
    } else if (numero < 0) {
        return "Número negativo";
    } else {
        return "Número igual a zero";
    }
}
console.log(verificar(-2));

// ex 2
function maiorMenor(a, b) {
    if (a > b) {
        return `${a} maior que ${b}`;
    } else if (b > a) {
        return `${b} maior que ${a}`;
    } else {
        return "Os dois números são iguais";
    }
}
console.log(maiorMenor(10, 9));

// ex 3
function vogais(palavra) {
    let letra = palavra.split("");
    let contador = 0;

    for (let vogal of letra) {
        if ("aeiouAEIOU".includes(vogal)) {
            contador++;
        }
    }
    return contador;
}
console.log(vogais("Adrian"));

// ex 4
let numeros = [2, 5, 8, 9];

function menorNumero() {
    let menor = numeros[0];
    for (let n of numeros) {
        if (n < menor) {
            menor = n;
        }
    }
    return menor;
}
console.log(menorNumero());

// ex 5
let listaPalavras = ["Abacate", "banana", "Ameixa", "uva", "abacaxi"];

function comecaA(listaPalavras) {
    let palavrasA = listaPalavras.filter(palavra =>
        palavra[0] === "A" || palavra[0] === "a"
    );

    return palavrasA;
}

console.log(comecaA(listaPalavras));

// ex 6
let ns = [2, 5, 8, 9, 12];

function impares(ns) {
    let apenasImpares = ns.filter(n => n % 2 !== 0);
    return apenasImpares;
}
console.log(impares(ns));

// ex 7
function inverterPalavra(palavra) {
    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }
    return invertida;
}
console.log(inverterPalavra("casa"));