const clientes = [
  { nome: "Ana", idade: 30 },
  { nome: "Pedro", idade: 25 },
  { nome: "Carla", idade: 22 }
];

clientes.forEach(({nome, idade}) => {
    console.log(`Nome: ${nome} - Idade: ${idade}`);
});