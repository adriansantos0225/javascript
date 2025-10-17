class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this._preco = preco;
    }

    get preco() {
        return `R$ ${this._preco.toFixed(2)}`;
    }

    set preco(novoPreco) {
        if (novoPreco >= 0) {
            this._preco = novoPreco;
        }else {
            console.log('Erro: o preço não pode ser negativo');
        }
    }
}

const produto1 = new Produto('Camisa' , 50);
console.log(produto1.preco);

produto1.preco = 80;
console.log(produto1.preco);

produto1.preco = -20;
console.log(produto1.preco);
