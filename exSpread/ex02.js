function multiplicar(...numeros) {
    return numeros.reduce((total, n) => total * n, 1);

}
console.log(multiplicar(2, 3));
console.log(multiplicar(2, 3, 4));

const numeros = [5, 10, 15, 20];
const [primeiro, ...resto] = numeros;
console.log(primeiro);
console.log(resto);

const pessoa = { nome: "João", idade: 30, cidade: "São Paulo", profissao: "Dev" };
const {nome, ...informacoes} = pessoa;
console.log(nome);
console.log(informacoes);