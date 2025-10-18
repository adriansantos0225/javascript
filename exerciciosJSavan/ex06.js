class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    static criarPromocao(nome, preco) {
        const precoDesconto = preco * 0.9;
        return new Produto(nome, precoDesconto);
    }

    static criarPremium (nome, preco) {
        const precoAcrescimo = preco * 1.2;
        return new Produto(nome, precoAcrescimo);
    }
}

const produtoPromo = Produto.criarPromocao('Camisa', 100);
const produtoPremium = Produto.criarPremium('Tênis', 200);

console.log(produtoPromo);
console.log(produtoPremium);