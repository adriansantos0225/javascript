let listaAlunos = [{ nome: 'João', nota1: 8, nota2: 6, nota3: 10 }, { nome: 'Adrian', nota1: 10, nota2: 8, nota3: 7 },
{ nome: 'Suellen', nota1: 9, nota2: 7, nota3: 5 }
];

for (let i = 0; i < listaAlunos.length; i++) {
    let aluno = listaAlunos[i];
    let media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
    let situacao;

    if (media >= 7) {
        situacao = 'Aprovado';
    } else if (media >= 5) {
        situacao = 'Recuperação';
    } else {
        situacao = 'Reprovado';
    }

    console.log(`${aluno.nome} - Média: ${media.toFixed(2)} - Situação: ${situacao}`);
}