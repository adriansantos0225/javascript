const produtos = [
    { nome: "Camisa", preco: 50 },
    { nome: "Tênis", preco: 200 },
    { nome: "Boné", preco: 80 },
    { nome: "Relógio", preco: 300 }
];

const totalProdutosCaros = (itens) =>
    itens.filter(item => item.preco > 100).reduce((acumulador, item) => acumulador + item.preco, 0);

console.log(totalProdutosCaros(produtos));
