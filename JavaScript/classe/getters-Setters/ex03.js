// ex 1
class ContaBancaria {
    constructor(saldo) {
        this._saldo = saldo;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        if (valor >= 0) {
            this._saldo = valor;
        } else {
            console.log("Erro: O saldo não pode ser menor que 0.");
        }
    }
}

const c1 = new ContaBancaria(2500);
c1.saldo = 2800;
c1.saldo = -100;
console.log(c1.saldo);

// ex 2
class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this._senha = senha;
    }
    get senha() {
        return "*".repeat(this._senha.length);
    }
    set senha(valor) {
        const temNumero = /[0-9]/.test(valor);
        const temLetra = /[a-zA-z]/.test(valor);

        if (valor.length >= 6 && temNumero && temLetra) {
            this._senha = valor;
        } else {
            console.log("A senha deve conter no mínimo 6 caracteres");
        }
    }

    autenticar(senhaDigitada) {
         senhaDigitada === this._senha;
    }
}

const user = new Usuario("Adrian", "Senha123");
console.log(user.senha); // ******
console.log(user.autenticar("Senha123")); // true
user.senha = "abc"; // senha inválida
user.senha = "Nova123"; // senha atualizada
console.log(user.autenticar("Nova123")); // true
