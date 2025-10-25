class Aluno {
    constructor(nome, nota1, nota2) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    calcularMedia() {
        return (this.nota1 + this.nota2) / 2;
    }

    mostrarInfo() {
        console.log(`O aluno ${this.nome} tem média ${this.calcularMedia()}`)
    }
}

const aluno1 = new Aluno('Adrian', 60, 80);
const aluno2 = new Aluno('Aurora', 100, 80);

aluno1.mostrarInfo();
aluno2.mostrarInfo();