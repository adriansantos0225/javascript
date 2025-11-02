const pessoa = { nome: "João", idade: 30 };

function atualizarIdade(pessoa, novaIdade) {
    const novaPessoa = {...pessoa, idade: novaIdade};
    return novaPessoa;
}
console.log(atualizarIdade(pessoa, 40));
console.log(pessoa); // objeto original continua inalterado