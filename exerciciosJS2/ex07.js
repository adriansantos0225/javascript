class ContaBancaria {
    constructor() {
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(novoSaldo) {
        if (novoSaldo >= 0) {
            this._saldo = novoSaldo;
        }else {
            console.log('Erro: saldo não pode ser negativo!');
        }
    }
}

const conta = new ContaBancaria();
console.log(`Saldo inicial: ${conta.saldo}`)

conta.saldo = -100;
conta.saldo = 500;

console.log(`Saldo atual: ${conta.saldo}`);