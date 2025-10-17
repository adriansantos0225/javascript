class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this._salario = salario;
    }

    get salario() {
        return `Salário de ${this.nome} : R$ ${this._salario.toFixed(2)}`;
    }

    set salario(novoValor) {
        if (novoValor >= 1320) {
            this._salario = novoValor;
        } else {
            console.log(`Sálario abaixo do permitido!`)
        }
    }
}

const funcionario1 = new Funcionario("Ana", 2500);
console.log(funcionario1.salario);

funcionario1.salario = 1000;
console.log(funcionario1.salario);