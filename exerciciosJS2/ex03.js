function detalhePessoa({nome = 'Anônimo', idade = 0 , cidade = 'Desconhecida'}) {
    console.log(`Nome: ${nome}, idade: ${idade}, cidade: ${cidade}`);
}

detalhePessoa({nome : 'Adrian', idade: 24, cidade: 'Anápolis'});
detalhePessoa({nome: 'Adrian'});
detalhePessoa({});