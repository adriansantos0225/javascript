// ex 1
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, me chamo ${this.nome} e tenho ${this.idade} anos.`);
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, materia) {
        super(nome, idade);
        this.materia = materia;
    }

    ensinar() {
        console.log(`O professor ${this.nome} ensina ${this.materia}.`);
    }
}

const pessoa1 = new Professor("Adrian", 24, "Matemática");
pessoa1.ensinar();
pessoa1.apresentar();

// ex 2
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    fazerSom() {
        return `O ${this.nome} fez um som!`;
    }
}

class Cachorro extends Animal {
    constructor(nome, idade) {
        super(nome, idade);
    }

    latir() {
        return `O cachorro chamado ${this.nome} de ${this.idade} anos está latindo`;
    }
}

const animal1 = new Cachorro("Thor", 3);
console.log(animal1.fazerSom());
console.log(animal1.latir());

// ex 3
class Veiculo {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}

class Moto extends Veiculo {
    constructor(marca, ano, velocidade) {
        super(marca, ano);
        this.velocidade = 0;
    }

    acelerar() {
        this.velocidade += 15;
        return this.velocidade;
    }

    mostrarVelocidade() {
        return this.velocidade;
    }
}

const veiculo1 = new Moto("Honda", 2016);
console.log(veiculo1.acelerar());
console.log(veiculo1.acelerar());
console.log(veiculo1.mostrarVelocidade());