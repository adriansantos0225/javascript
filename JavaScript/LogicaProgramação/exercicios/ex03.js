let preco = 30;
let pago = 25;

let calculeTroco = pago - preco;


if (pago < preco) {
    console.log(`Valor insuficiente! Faltam R$ ${(preco - pago).toFixed(2)}`);
} else {
    console.log(`O troco é R$ ${calculeTroco.toFixed(2)}`);
}