class Conta {
    static totalContas = 0;

    constructor (titular, saldoInicial) {
        this.titular = titular;
        this.saldoInicial = saldoInicial;
        Conta.totalContas++;
    }

    static mostrarTotalContas() {
        console.log(`Total de contas criadas: ${Conta.totalContas}`);
    }

    depositar(valor) {
        return this.saldoInicial += valor;
    }

    sacar(valor) {
        return this.saldoInicial -= valor;
    }

    mostrarSaldo() {
        console.log(`Saldo de ${this.titular} : R$ ${this.saldoInicial.toFixed(2)}`);
    }
}