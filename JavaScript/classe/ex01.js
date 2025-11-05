class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    desconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
        return this.preco;
    }
}
const produto1 = new Produto("Camisa", 50);
console.log(produto1.desconto(10));

// ex 2
class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    descricao() {
        return `O livro ${this.titulo} foi escrito por ${this.autor} em ${this.ano}`;
    }
}

const livro1 = new Livro("Código Limpo", "Robert Martin", 2009);
console.log(livro1.descricao());

// ex 3
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    area() {
        return this.largura * this.altura;
    }
}

const retangulo1 = new Retangulo(4, 8);
console.log(retangulo1.area());

// ex 4
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const pessoa1 = new Pessoa("Adrian", 24);
const pessoa2 = new Pessoa("Suellen", 23);
console.log(pessoa1.apresentar());
console.log(pessoa2.apresentar());

// ex 5
class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
        return this.saldo;
    }
    sacar(valor) {
        if (this.saldo < valor) {
            console.log("Não possui saldo suficiente!");
        } else {
            this.saldo -= valor;
            return this.saldo;
        }
    }
    mostrarSaldo() {
        return this.saldo;
    }
}

const conta1 = new ContaBancaria(2000);
console.log(conta1.depositar(500));
console.log(conta1.sacar(200));
console.log(conta1.mostrarSaldo());

// ex 6
class Carro {
    constructor(marca, modelo, ano, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0;
    }
    acelerar() {
        this.velocidade += 10;
        return this.velocidade;
    }
    frear() {
        if (this.velocidade >= 5) {
            this.velocidade -= 5;
        } else {
            this.velocidade = 0;
        }
        return this.velocidade;
    }
    mostrarVelocidade() {
        return this.velocidade;
    }
}
const carro1 = new Carro("Hyndai", "HB20", 2014);
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.frear());
console.log(carro1.mostrarVelocidade());