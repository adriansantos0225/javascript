// ex 1
let idades = [12, 18, 25, 14, 30, 40];
const maiorIdade = (idade) => idade >= 18;
console.log(idades.filter(maiorIdade));

// ex 2
let num = [1, 2, 3, 4];
let dobro = num.map(n => n * 2);
console.log(dobro);

// ex 3
const produto = {
    nome1: "Camiseta",
    preco: 50,
    cor: "Azul"
};
const { nome1, preco } = produto;
console.log(`A ${nome1} custa R$ ${preco}`);

// ex 4
const cores = ["Vermelho", "Azul", "Verde", "Amarelo"];
const [a, b] = cores;
console.log(`Primeira cor: ${a}, Segunda cor: ${b}`);

// ex 5
function listaFrutas(...frutas) {
    let quantidade = frutas.length;
    return `Você listou ${quantidade} frutas: ${frutas.join(",")}`;
}
console.log(listaFrutas("Maçã", "Banana", "Uva"));

// ex 6
const palavras = ["Mesa", "casa", "Milho", "carro", "Macaco", "Pato"];
function palavrasComM(lista) {
    return lista.filter(palavra => {
        return palavra[0] === "M" || palavra[0] === "m";
    })
}
console.log(palavrasComM(palavras));

// ex 7
const usuario = {
    nome: "Adrian",
    idade: 24,
    cidade: "Anápolis"
};
const { nome, cidade } = usuario;

function apresentar() {
    return `${nome} mora em ${cidade}`;
}
console.log(apresentar());

// ex 8
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const todos = [...a1, ...a2];

function mostrarLista(lista) {
    return `A lista completa é: ${lista.join(",")}`;
}
console.log(mostrarLista(todos));

// ex 9
function media(...numeros) {
    let total = 0;
    for (let num of numeros) {
        total += num;
    }
    return `A média dos números é: ${total / numeros.length}`;
}
console.log(media(10, 5, 8, 7));

// ex 10
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};
const { marca, modelo } = carro;

function descricaoCarro() {
    return `O carro é um ${marca} ${modelo}`;
}
console.log(descricaoCarro());