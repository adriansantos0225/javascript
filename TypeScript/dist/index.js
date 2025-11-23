"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string - valores de texto
let nome = "Adrian";
// number - números inteiros e valores de ponto flutuante
let idade = 24;
// boolean - valores verdadeiros (true) ou falsos (false)
let ativo = true;
// undefined (indefinido)
let bizarro = undefined;
// null (nulo)
let nada = null;
// TIPO EXPLÍCITO - Quando você atribui o tipo de dado na declaração
let sobrenome = "Santos";
// sobrenome = 30; // TypeScript aponta erro
// TIPO IMPLÍCITO - Quando o TypeScript irá "adivinhar" (inferir) o tipo, com base no valor atribuído
let profissao = "Programador";
// profissao = 100; // TypeScript aponta erro
/* TIPOS AVANÇADOS OU ESPECIAIS */
//  union type - quando um valor pode ser mais do que um único tipo
let myVariable;
myVariable = "hello";
myVariable = 42;
//myVariable = true; // erro
/* any (qualquer) - é um tipo que desabilita a verificação de tipos e permite efetivamente
que todos os tipos sejam usados. */
let teste = 100;
teste = "texto";
/* unknown (desconhecido) -  é uma alternativa semelhante ao any, só que mais segura
Esse tipo exige verificações ou conversões explícitas para garantir a segurança de tipo
durante as operações. */
let valor = 100;
valor = "Texto agora";
let converte = valor; // "as" significa 'agora é'.
console.log(converte.length); // 10
/* never (nunca) - lança um erro sempre que ele é definido.
never é raramente usado, seu uso primário é um Genéricos avançados. */
// let b: never = true;
/* array - TypeScript tem uma sintaxe específica para matrizes. */
const names = [];
names.push("Adrian"); // sem erro
// names.push(3); // Erro
/* A palavra-chave 'readonly' (somente leitura) impede que matrizes
sejam alteradas */
const nomes = ["Adrian", "João"];
// nomes.push("Jack"); // erro
/* Inferência de tipo
TypeScript pode inferir o tipo de uma matriz se ela tiver valores. */
const numbers = [1, 2, 3]; // infere tipo number[]
numbers.push(4); // sem erro
//numbers.push("2"); // erro
let y = numbers[0];
/* tuplas - Uma tupla é um array (matriz) tipada com um comprimento e tipos predefinidos
para cada índice. As tuplas são ótimas porque permitem que cada elemento na matriz seja um
tipo conhecido de valor */
let nossaTupla;
nossaTupla = [5, false, "Adrian"];
// EXEMPLO COM ERRO
//nossaTupla = [false, "Adrian", 5];
/* Uma boa prática é fazer sua tupla sempre readonly. Por que?
Por que as tuplas só tem tipos fortemente definidos para os valores iniciais */
// Tupla com os tipos de dados definidos
let ourTupla;
// Inicializou correto
ourTupla = [5, false, "Adrian"];
// Agora se eu inserir mais coisas na tupla não vou ter controle
ourTupla.push('Outra coisa');
// Agora com READONLY
const tuplaReadonly = [5, true, "Teste"];
// Erro lançado
//tuplaReadonly.push('outra coisa');
/* Objects (objetos) - Objetos são variáveis com muitos valores dentro */
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2009
};
/* O typescript pode inferir os tipos de propriedades com base em seus valores */
const car = {
    marca: "Toyota",
};
car.marca = "Ford"; // nenhum erro - ele entendeu que "marca" é string.
//car.marca = 2; // erro
/* No TypeScript um objeto pode ter Propriedades opcionais.
Propriedades opcionais são propriedades que não precisam ser definidas na
definição do objeto. Elas podem ser usadas depois ou não, são opcionais */
const carro2 = {
    modelo: "Uno"
};
carro2.motor = 1.0;
/* Assinaturas de índice - As assinaturas de índice podem ser usadas para objetos sem uma
lista definida de propriedades. */
const nomeIdade = {};
nomeIdade["Adrian"] = 31;
// EXEMPLO DE USO
const uno = 2001;
const gol = "Wolksvagen";
const TSI = "Up";
const laFerrari = {
    ano: 2002,
    marca: "Ferrari",
    modelo: "La Ferrari"
};
;
// EXEMPLO DE USO
const novoItem = {
    altura: 20,
    largura: 10
};
;
// USO
const outroItem = {
    altura: 20,
    largura: 10,
    cor: "Azul"
};
/* FUNÇÕES
TypeScript tem uma sintaxe específica para digitar parâmetros de função e valores de retorno.*/
// DEFININDO O TIPO DE RETORNO DA FUNÇÃO
function getTime() {
    return new Date().getTime();
}
// Void - QUANDO A FUNÇÃO NÃO TEM RETORNO
function printHello() {
    console.log("Hello");
}
// Tipos em parâmetros de função
function multiplicacao(a, b) {
    return a + b;
}
// Parâmetros opcionais
// o operador "?" aqui marca que o parâmetro 'c' é opcional
function add(a, b, c) {
    return a + b + (c || 0);
}
// Parâmetros com valores iniciais padrão
function saudacao(nome = 'Adrian') {
    console.log(`Olá, ${nome}!`);
}
saudacao(); // Olá, Adrian!
saudacao("Aurora"); // Olá, Aurora!
// Parâmetros nomeados( Named Parameters)
function hello({ nome, idade }) {
    console.log(`Hello, ${nome}! Você tem ${idade} anos.`);
}
hello({ nome: "Adrian", idade: 24 }); // saida: Hello, Adrian! Você tem 24 anos
/* GENERICS (Genéricos)
Pense nos generics como "caixas" flexíveis, onde você pode colocar
diferentes tipos de dados. É um coringa, que pode aceitar valor. */
function imprimirValor(valor) {
    console.log(valor);
}
imprimirValor(42); // Imprime 42
imprimirValor("Olá"); // Imprime "Olá"
imprimirValor(true); // Imprime true
//# sourceMappingURL=index.js.map