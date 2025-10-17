class ContaCorrente {
    constructor(saldo) {
        this._saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            return this._saldo += valor;
        } else {
            console.log('Erro ao depositar!');
        }
    }

    sacar(valor) {
        if (valor < this._saldo) {
            this._saldo -= valor;
        } else {
            console.log('Saldo insuficiente!')
        }
    }

    get saldo() {
        return `Saldo atual: ${this._saldo.toFixed(2)}`;
    }

    set saldo(valor) {
        console.log("Atribuição direta não permitida. Use depositar() ou sacar()");
    }
}

const conta1 = new ContaCorrente(1000);
conta1.depositar(500);
conta1.sacar(200);
conta1.sacar(2000);
console.log(conta1.salario);
conta1.saldo = 9999;