const carrinho = [
    { nome: "Camisa", preco: 50, quantidade: 2 },
    { nome: "Calça", preco: 120, quantidade: 1 },
    { nome: "Boné", preco: 80, quantidade: 3 },
    { nome: "Tênis", preco: 300, quantidade: 1 },
    { nome: "Meias", preco: 20, quantidade: 5 }
];

const precoCem = carrinho.filter(item => item.preco > 100);
console.log(precoCem);

const valorTotal = carrinho
    .map(item => item.preco * item.quantidade)
    .reduce((acumulador, valor) => acumulador + valor, 0);
console.log(valorTotal);

const todosComEstoque = carrinho.every(item => item.quantidade > 0);
console.log(todosComEstoque);

const produtoBarato = carrinho.some(item => item.preco < 30);
console.log(produtoBarato);

const produtoAcima = carrinho.find(item => item.preco > 250);
console.log(produtoAcima);

const ordemCarrinho = carrinho.sort((a, b) => b.preco - a.preco);
console.log(ordemCarrinho);