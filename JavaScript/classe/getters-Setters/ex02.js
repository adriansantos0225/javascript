class Temperatura {
    constructor(celsius) {
        this._celsius = celsius;
    }

    get fahrenheit() {
        return (this._celsius * 1.8 + 32).toFixed(2);
    }

    set fahrenheit(valor) {
        if (valor < -459.67) {
            console.log("Erro: Temperatura inválida! Abaixo do zero absoluto.");
            return;
        }
        this._celsius = (valor - 32) / 1.8;
    }

    get celsius() {
        return this._celsius.toFixed(2);
    }

    set celsius(valor) {
        if (valor < -273.15) {
            console.log("Erro: Temperatura inválida! Abaixo do zero absoluto");
            return;
        }
        this._celsius = valor;
    }
}

const t = new Temperatura(25);

console.log(t.fahrenheit); // 77.00

t.fahrenheit = 100;
console.log(t.celsius); // 37.78

t.celsius = -300;
// "Erro: Temperatura inválida! Abaixo do zero absoluto."

console.log(t.celsius); // Continua sendo 37.78 (não mudou)

