class Carro {
    constructor(modelo, ano, precoBase) {
        this.modelo = modelo;
        this.ano = ano;
        this.precoBase = precoBase;
    }

    static criarCarroLuxo(modelo, ano, precoBase) {
        const precoAcrescimo = precoBase * 1.5;
        return new Carro(modelo, ano, precoAcrescimo);
    }

    static criarCarroPopular (modelo, ano, precoBase) {
        const precoDesconto = precoBase * 0.8;
        return new Carro(modelo, ano, precoDesconto);
    }
}

const carroLuxo = Carro.criarCarroLuxo('Mustang', 2020, 70000);
const carroPopular = Carro.criarCarroPopular('Fox', 2006, 20000);

console.log(carroLuxo);
console.log(carroPopular);