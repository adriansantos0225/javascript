let transacoes = [
    { descricao: "Salário", valor: 3000 },
    { descricao: "Aluguel", valor: -1200 },
    { descricao: "Supermercado", valor: -400 }
];
let totalReceitas = 0;
let totalDespesas = 0;

for ( let transacao of transacoes) {
    console.log(`${transacao.descricao} - R$ ${transacao.valor}`);

    if(transacao.valor > 0) {
        totalReceitas += transacao.valor;
    } else {
        totalDespesas -= transacao.valor;
    }
}

let saldo = totalReceitas - totalDespesas;

console.log(`Total de receitas: ${totalReceitas}`);
console.log(`Total de despesas: ${totalDespesas}`);
console.log(`Saldo final: R$ ${saldo}`);