// ex 1
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

// ex 2
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const todos = [...a1, ...a2];
function mostrarLista() {
    return `A lista completa é: ${todos.join(", ")}`;
}
console.log(mostrarLista());

// ex 3
function media(...numeros) {
    let total = 0;
    for (n of numeros) {
        total += n;
    }
    return `A média dos números é: ${total / numeros.length}`;
}
console.log(media(10, 5, 8, 7));

// ex 3 usando reduce
function media(...numeros) {
    const total = numeros.reduce((acumulador, n) => acumulador + n, 0);
    return `A média dos números é: ${total / numeros.length}`;
}

console.log(media(10, 5, 8, 7));
