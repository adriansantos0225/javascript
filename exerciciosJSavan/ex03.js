class Aluno {
    static totalAlunos = 0;

    constructor() {
        Aluno.totalAlunos++;
    }

    static mostrarTotal() {
        console.log(`Total de alunos registrados: ${Aluno.totalAlunos}`);
    }
}

const aluno1 = new Aluno();
const aluno2 = new Aluno();
const aluno3 = new Aluno();

Aluno.mostrarTotal();