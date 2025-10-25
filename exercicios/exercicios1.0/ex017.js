const produtos = [
  { nome: "Camisa", preco: 50, estoque: 10 },
  { nome: "Calça", preco: 120, estoque: 5 },
  { nome: "Boné", preco: 80, estoque: 0 },
  { nome: "Tênis", preco: 300, estoque: 2 }
];

const semEstoque = produtos.find(item => item.estoque === 0);
console.log(semEstoque);

const acimaTrinta = produtos.every(item => item.preco > 30);
console.log(acimaTrinta);

const produtoCaro = produtos.some(item => item.preco > 250);
console.log(produtoCaro);