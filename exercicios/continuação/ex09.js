class Retangulo {
    constructor(largura, altura) {
        this._largura = largura;
        this._altura = altura;
    }

    get largura() {
        return this._largura;
    }

    set largura(valor) {
        if (valor > 0) {
            this._largura = valor;
        } else {
            console.log('A largura deve ser maior que 0');
        }
    }

    get altura() {
        return this._altura;
    }

    set altura(valor) {
        if (valor > 0) {
            this._altura = valor;
        } else {
            console.log('A altura deve ser maior que 0');
        }
    }

    get area() {
        return this._largura * this._altura;
    }
}

const r1 = new Retangulo(5, 10);
console.log(`Àrea inicial : ${r1.area}`);

r1.largura = 8;
console.log(`Nova área: ${r1.area}`);

r1.altura = -3;