const carrinho = [
    { nome: "Camisa", preco: 50, quantidade: 2 },
    { nome: "Calça", preco: 120, quantidade: 1 },
    { nome: "Tênis", preco: 200, quantidade: 1 },
    { nome: "Boné", preco: 80, quantidade: 3 }
];

const totalCarrinhoFiltrado = (itens) =>
    itens.filter(item => item.preco > 100).map(item => item.preco * item.quantidade).
        reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(totalCarrinhoFiltrado(carrinho));