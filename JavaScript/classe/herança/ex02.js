class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, setor) {
        super(nome, salario);
        this.setor = setor;
    }

    detalhe() {
        return `O ${this.nome} tem o salário de R$ ${this.salario} e trabalha no setor de ${this.setor}`;
    }
}
const funcionario1 = new Gerente("Adrian", 2500, "Tecnologia");
console.log(funcionario1.detalhe());

// ex 2
class Dispositivo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Smartphone extends Dispositivo {
    constructor(marca, modelo, armazenamento) {
        super(marca, modelo);
        this.armazenamento = armazenamento;
    }

    info() {
        return `O smartphone da marca ${this.marca}, modelo ${this.modelo}, possui ${this.armazenamento} GB de armazenamento`;
    }
}
const dispositivo1 = new Smartphone("Xiomi", "PocoX", 256);
console.log(dispositivo1.info());

// ex 3
class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        return this.saldo;
    }

    mostrarSaldo() {
        return this.saldo;
    }
}

class ContaPremium extends Conta {
    constructor(saldo) {
        super(saldo);
    }

    bonus() {
        this.saldo = this.saldo + (this.saldo * 0.10);
        return this.saldo;
    }
}

const conta1 = new ContaPremium(3000);
console.log(conta1.depositar(200));
console.log(conta1.mostrarSaldo());
console.log(conta1.bonus());