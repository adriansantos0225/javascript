class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, eu sou o(a) ${this.nome} e tenho ${this.idade} anos`);
    }
}
class Aluno extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    estudar() {
        console.log(`O aluno ${this.nome} está estudando ${this.curso}.`);
    }
}

const aluno1 = new Aluno('Adrian', 24, 'Javascript');
aluno1.apresentar();
aluno1.estudar();