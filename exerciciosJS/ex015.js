const numeros = [7, 3, 9, 1, 5];

numeros.sort((a, b) => a - b);
console.log(numeros);

const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 120 },
  { nome: "Boné", preco: 80 }
];

produtos.sort((a,b) => b.preco - a.preco);
console.log(produtos);