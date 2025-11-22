// string - valores de texto
let nome: string = "Adrian";

// number - números inteiros e valores de ponto flutuante
let idade: number = 24;

// boolean - valores verdadeiros (true) ou falsos (false)
let ativo: boolean = true;

// undefined (indefinido)
let bizarro: undefined = undefined;

// null (nulo)
let nada: null = null;

// TIPO EXPLÍCITO - Quando você atribui o tipo de dado na declaração
let sobrenome: string = "Santos";
// sobrenome = 30; // TypeScript aponta erro

// TIPO IMPLÍCITO - Quando o TypeScript irá "adivinhar" (inferir) o tipo, com base no valor atribuído
let profissao = "Programador";
// profissao = 100; // TypeScript aponta erro



/* TIPOS AVANÇADOS OU ESPECIAIS */

//  union type - quando um valor pode ser mais do que um único tipo
let myVariable: string | number;
myVariable = "hello";
myVariable = 42;
//myVariable = true; // erro

/* any (qualquer) - é um tipo que desabilita a verificação de tipos e permite efetivamente
que todos os tipos sejam usados. */
let teste: any = 100;
teste = "texto";

/* unknown (desconhecido) -  é uma alternativa semelhante ao any, só que mais segura
Esse tipo exige verificações ou conversões explícitas para garantir a segurança de tipo
durante as operações. */
let valor: unknown = 100;
valor = "Texto agora";

let converte = valor as string; // "as" significa 'agora é'.
console.log(converte.length); // 10

/* never (nunca) - lança um erro sempre que ele é definido.
never é raramente usado, seu uso primário é um Genéricos avançados. */
// let b: never = true;

/* array - TypeScript tem uma sintaxe específica para matrizes. */
const names: string[] = [];
names.push("Adrian"); // sem erro
// names.push(3); // Erro

/* A palavra-chave 'readonly' (somente leitura) impede que matrizes
sejam alteradas */
const nomes: readonly string[] = ["Adrian", "João"];
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
let nossaTupla: [number, boolean, string];
nossaTupla = [5, false, "Adrian"];

// EXEMPLO COM ERRO
//nossaTupla = [false, "Adrian", 5];

/* Uma boa prática é fazer sua tupla sempre readonly. Por que?
Por que as tuplas só tem tipos fortemente definidos para os valores iniciais */

// Tupla com os tipos de dados definidos
let ourTupla: [number, boolean, string];
// Inicializou correto
ourTupla = [5, false, "Adrian"];
// Agora se eu inserir mais coisas na tupla não vou ter controle
ourTupla.push('Outra coisa');

// Agora com READONLY
const tuplaReadonly: readonly [number, boolean, string] = [5, true, "Teste"];
// Erro lançado
//tuplaReadonly.push('outra coisa');