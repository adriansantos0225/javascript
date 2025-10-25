class Conta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    static abrirComSaldoInicial(titular) {
        return new Conta(titular, 100);
    }
}

const conta1 = Conta.abrirComSaldoInicial('Adrian');
console.log(conta1);