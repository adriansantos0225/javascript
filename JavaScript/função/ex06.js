// ex de arrow
const dobro = (n) => n * 2;
console.log(dobro(8));

const olaNome = (nome) => `Olá, ${nome}`;
console.log(olaNome("Adrian"));

// ex de template literals
let nome1 = "Adrian";
let idade1 = 24;
console.log(`Meu nome é ${nome1} e tenho ${idade1} anos.`);

function cidadeEstado(cidade, estado) {
    return `Moro em ${cidade} que fica no estado de ${estado}`;
}
console.log(cidadeEstado("Anápolis", "Goias"));

// ex de spread
const nums1 = [2, 4, 8];
const nums2 = [5, 10, 6];
const juntos = [...nums1, ...nums2];
console.log(juntos);

const nums = [8, 9, 74];
const numsCopia = [...nums];
console.log(numsCopia);

// ex de rest
const numeros = [8, 5, 4, 1];
function somarNumeros(...numeros) {
    let total = 0;
    for (const numero of numeros) {
        total += numero;
    }
    return total;
}
console.log(somarNumeros(...numeros));

function variosNomes(...nomes) {
    return nomes.length;
}
console.log(variosNomes("Adrian", "Suellen", "Danilo"));

// ex de desestruturação
const pessoa = { nome: "João", idade: 58 };
const { nome, idade } = pessoa;

const array = [2, 5, 7];
const [a, b] = array;