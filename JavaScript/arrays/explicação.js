// exemplo de map
const numeros1 = [1, 2, 3];
const dobrados = numeros1.map(n => n * 2);

console.log(dobrados); // [2, 4, 6]
/* 1º Cria um novo array
    2ª Não modifica o array original
    3º Você retorna o novo valor para cada item*/

//  exemplo de filter
const idades = [12, 19, 15, 25, 30];
const maiores = idades.filter(idade => idade >= 18);

console.log(maiores); // [19, 25, 30]
/* 1º Também cria um novo array
    2º Mantém apenas os itens onde a condição é true(verdadeiro) */

// exemplo de reduce
const valores = [10, 20, 30];
const total = valores.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(total); // 60
/* Geralmente usado para somar, multiplicar, contar e etc */

// exemplo usando todos juntos
const numeros = [1, 2, 3, 4, 5, 6];

const resultado = numeros
  .filter(n => n % 2 === 0) // pega apenas pares
  .map(n => n * 2)          // dobra eles
  .reduce((soma, n) => soma + n, 0); // soma

console.log(resultado); // 24 (2+4+6 → dobrados → 4+8+12 → somados)
