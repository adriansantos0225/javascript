const numeros = [10, 20, 30, 40];

const numerosCopia = [...numeros];
console.log(numerosCopia);


const frutas = ["maçã", "banana"];
const legumes = ["cenoura", "batata"];

const todos = [...frutas, ...legumes];
console.log(todos);

const pessoa = { nome: "Lucas", idade: 28 };
const endereco = { cidade: "São Paulo", pais: "Brasil" };

const pessoaCompleta = {...pessoa, ...endereco};
console.log(pessoaCompleta);

