class ContaBancaria {
    constructor(titular, saldo) {
        this._saldo = saldo;
        this.titular = titular;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        } else {
            console.log('Erro ao depositar!');
        }
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
        } else {
            console.log('Saldo Insuficiente!');
        }
    }

    get saldo() {
        return `Saldo de ${this.titular} : R$ ${this._saldo.toFixed(2)}`;
    }

    set saldo(valor) {
        console.log("⚠️ Use os métodos depositar() ou sacar() para alterar o saldo.");
    }

}

class ContaPoupanca extends ContaBancaria {
    constructor(titular, saldo, juros) {
        super(titular, saldo);
        this._juros = juros;
    }

    renderJuros() {
        this._saldo += this._saldo * this._juros;
    }
}

const conta1 = new ContaBancaria("Adrian", 1000);
conta1.depositar(500);
conta1.sacar(200);
console.log(conta1.saldo);

const poupanca1 = new ContaPoupanca("Adrian", 1000, 0.05);
poupanca1.renderJuros();
console.log(poupanca1.saldo);