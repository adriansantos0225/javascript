// ex 01
const numeros = [3, 7, 10, 2, 15];
const numerosNovos = numeros.map(n => n + 1);
console.log(numerosNovos);

// ex 2
const palavras = ["carro", "Casa", "sol", "Cachorro", "azul"];
const apenasC = palavras.filter(p => p[0].toUpperCase() === "C");
console.log(apenasC);

// ex 3
const valores = [5, 10, 20];
const soma = valores.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma);
