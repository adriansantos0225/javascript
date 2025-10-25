const aluno = {
    nome: 'Adrian', nota1: 70, nota2: 90, calcularMedia() {
        return (this.nota1 + this.nota2) / 2;
    }, mostrarInfo() {
        console.log(`O Aluno ${this.nome} tem média ${this.calcularMedia()}`);
    }
};

aluno.mostrarInfo();

