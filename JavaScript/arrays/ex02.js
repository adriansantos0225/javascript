// ex 1
const numeros = [2, 4, 7, 9, 12];
const novosNumeros = numeros
    .filter(n => n % 2 === 0)
    .map(n => n * 3);
console.log(novosNumeros);

// ex 2
const compras = [20, 35, 10, 5];
const totalCompras = compras.reduce((acc, total) => acc + total, 0);
console.log(`O total de compras é: ${totalCompras}`);

// ex 3
const lista = ["Mesa", "carro", "Milho", "uva", "Macaco"];

function apenasM(lista) {
    return lista.filter(p => p[0].toUpperCase() === "M");
}
console.log(apenasM(lista));