class Carro {
    constructor(modelo) {
        this.modelo = modelo;
        this._velocidade = 0;
    }

    get velocidade() {
        return this._velocidade;
    }

    set velocidade(valor) {
        if (valor >= 0 && valor <= 200) {
            this._velocidade = valor;
        } else {
            console.log('Velocidade inválida! Deve estar entre 0 e 200km/h');
        }
    }

    acelerar(valor) {
        this.velocidade = this._velocidade + valor;
    }

    frear(valor) {
        this.velocidade = this._velocidade - valor;
    }
}

const carro1 = new Carro("Mustang");
console.log(`Velocidade inicial: ${carro1.velocidade} km/h`);

carro1.acelerar(100);
console.log(`Acelerou para ${carro1.velocidade} km/h`);

carro1.acelerar(150);
carro1.frear(50);
console.log(`Após frear: ${carro1.velocidade} km/h`);

carro1.velocidade = -10;