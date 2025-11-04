// ex 1
const produto = { nome: "Camiseta", preco: 50, cor: "Azul" };
console.log(Object.keys(produto)); // Pega somente as chaves : nome, preço e cor
console.log(Object.values(produto)); // Pega somente os valores dentro de keys: camiseta, 50, azul
console.log(Object.entries(produto)); // pega um par de chave e valor e coloca em arrays separados

// ex 2
Object.entries(produto).forEach(([chave, valor]) => {
    console.log(`${chave} ${valor}`);
});
