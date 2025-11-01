// ex 1
const triplo = (n) => n * 3;

// ex 2
const bemVindo = (nome) => `Bem-vindo ${nome}`;
console.log(bemVindo("Adrian"));

// ex 3
let data = new Date();
let dia = data.getDate();
let mes = data.getMonth() + 1;
let ano = data.getFullYear();
console.log(`Hoje é ${dia}/${mes}/${ano}`);

// ex 4
let lista = [10, 20, 30];
let adicionar = [...lista, 100];
console.log(adicionar);

// ex 5
function media(...numeros) {
    let total =0;
    for (const numero of numeros) {
        total += numero;
    }
    return total / numeros.length;
}
console.log(media(2,8,5,6));