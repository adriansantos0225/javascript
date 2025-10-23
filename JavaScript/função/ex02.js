// intermédiario

// exemplo 1
function calcularDesconto(preco, desconto = 10) {
    const valorDesconto = preco * (desconto / 100);
    const precoFinal = preco - valorDesconto;
    return precoFinal;
}
console.log(calcularDesconto(100));
console.log(calcularDesconto(200,20));

// exemplo 2

function media(...numeros) {
    let total = 0;
    for (let n of numeros) {
        total += n;
    }
    return total / numeros.length;
}

console.log(media(10, 8, 9));  // → 9
console.log(media(5, 5));      // → 5
console.log(media(6, 9, 10, 7)); // → 8
