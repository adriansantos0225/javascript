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
    nome: "Camiseta",
    preco: 50,
    cor: "Azul"
};
const { nome, preco } = produto;
console.log(`A ${nome} custa R$ ${preco}`);

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