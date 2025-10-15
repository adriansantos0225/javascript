const numeros = [10, 25, 60, 40, 70];

const encontrado = numeros.find(n => n > 50);
console.log(encontrado);


const idades = [22, 19, 25, 30];

const idadeMaior = idades.every(idade => idade >= 18);
console.log(idadeMaior);


const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 120 },
  { nome: "Boné", preco: 80 }
];

const produtoCaro = produtos.some(item => item.preco > 100);
console.log(produtoCaro);
