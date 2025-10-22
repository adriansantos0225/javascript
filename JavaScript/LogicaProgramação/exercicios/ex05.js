var soma = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        soma += i;
    }
}

console.log(`A soma de todos os números pares é ${soma}`);