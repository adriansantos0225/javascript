// Funções puras e imutabilidade

// Função pura

/* 1º sempre retorna o mesmo resultado para os mesmos argumentos
    2º não altera nada fora dela (nenhum efeito colateral) */
function dobrar(n) {
    return n * 2;
}

console.log(dobrar(5)); // sempre 10

// Função impura (tem efeito colateral)
let x = 10;

function adicionar(a) {
    x += a;
    return x;
}

console.log(adicionar(5)); // altera x fora da função

// Imutabilidade

/* Imutabilidade significa não alterar os valores originais (arrays, objetos, variáveis)
    Evita bugs inesperados */

// ex imutável com array
const numeros = [1, 2, 3];
const novos = [...numeros, 4]; // cria novo array
console.log(numeros); // [1, 2, 3]  → original não foi alterado
console.log(novos);   // [1, 2, 3, 4]

// ex imutável com objetos
const pessoa = { nome: "Ana", idade: 25 };
const novaPessoa = { ...pessoa, idade: 26 }; // cria novo objeto
console.log(pessoa);      // { nome: "Ana", idade: 25 }
console.log(novaPessoa);  // { nome: "Ana", idade: 26 }
