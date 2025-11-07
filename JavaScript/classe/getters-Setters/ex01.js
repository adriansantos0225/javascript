/* Em uma classe, Getter é usado para pegar (acessar) um valor.
    Setter é usado para alterar um valor com controle
    Eles servem para proteger os dados do objeto */

// ex 1
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this._preco = preco; // _ indica variavel protegida
    }

    get preco() {
        return this._preco;
    }

    set preco(valor) {
        if (valor <= 0) {
            console.log("Preço inválido! Deve ser maior que zero.");
            return;

        }
        this._preco = valor;
    }
}

const p1 = new Produto("Camiseta", 50);
console.log(p1.preco); // usa o getter

p1.preco = -10;
p1.preco = 80;
console.log(p1.preco);

// ex 2
class Aluno {
    constructor(nome, notas = []) {
        this.nome = nome;
        this._notas = notas;
    }

    get media() {
        if (this._notas.length === 0) return 0;
        const soma = this._notas.reduce((acc, nota) => acc + nota, 0);
        return (soma / this._notas.length).toFixed(2);
    }

    set adicionarNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this._notas.push(nota);
        } else {
            console.log("Nota inválida! Digite um valor entre 0 e 10.");
        }
    }
}

const aluno1 = new Aluno("Adrian");
aluno1.adicionarNota = 8;
aluno1.adicionarNota = 10;
aluno1.adicionarNota = -3;

console.log(aluno1.media);

// ex 3
class ProdutoLoja {
    constructor(nome, estoque) {
        this.nome = nome;
        this._estoque = estoque;
    }

    get estoque() {
        return this._estoque;
    }

    set estoque(valor) {
        if (valor >= 0 && Number.isInteger(valor)) {
            this._estoque = valor;
        } else {
            console.log("Valor de estoque inválido. Deve ser um número inteiro ou maior igual a 0.");
        }
    }
}

const produto1 = new ProdutoLoja("Camisa", 10);

console.log(produto1.estoque); // 10
produto1.estoque = 20;
console.log(produto1.estoque); // 20

produto1.estoque = -5; // Valor inválido
