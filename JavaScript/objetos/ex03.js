// ex 1
const numeros = new Set([5, 8, 5, 9, 8, 10]);
numeros.add(11);
console.log(numeros.has(9));
console.log(numeros);

// ex 2
const produto = new Map();
produto.set("nome", "Camiseta");
produto.set("preco", 50);
produto.set("cor", "Azul");
console.log(produto);

console.log(produto.get("preco"));
console.log(produto.delete("cor"));
produto.forEach((valor, chave) => {
    console.log(`${chave} ${valor}`);
});

// ex 3
const nomes = new Set(["Ana", "Pedro", "Ana", "Lucas", "Maria", "Pedro"]);
console.log(nomes);

// ex 4
const estoque = new Map();

estoque.set("Camiseta", 10);
estoque.set("Calça", 5);
estoque.set("Boné", 3);

console.log(estoque.get("Calça"));
estoque.set("Boné", 1);
console.log(estoque);

// ex 5
const precos = new Map();

precos.set("Arroz", 20);
precos.set("Feijão", 12);
precos.set("Carne", 45);

console.log(precos.get("Feijão"));
precos.set("Carne", 50);
precos.forEach((valor, chave) => {
    console.log(`Produto: ${chave} - Preço: ${valor}`);
});