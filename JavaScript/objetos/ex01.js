// ex 1
const aluno = {
    nome: "Adrian",
    idade: 24,
    mostrarInfo() {
        return `O aluno ${this.nome} tem ${this.idade} anos.`
    }
};
console.log(aluno.mostrarInfo());

// ex 2
const conta = {
    saldo: 2000,
    depositar(valor) {
        return this.saldo += valor;
    },

    mostrarSaldo() {
        return `Saldo atual: R$ ${this.saldo}`;
    }
}
console.log(conta.depositar(250));
console.log(conta.mostrarSaldo());

// ex 3
const cachorro = {
    nome: "Mel",
    raca: "Vira-lata",
    latir() {
        return `A cachorra ${this.nome} está latindo!`;
    }
}
console.log(cachorro.latir());