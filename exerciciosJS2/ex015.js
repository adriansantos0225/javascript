class Calculadora {
    static somar(a, b) {
        return a + b;
    }

    static subtrair(a, b) {
        return a - b;
    }

    static multiplicar(a, b) {
        return a * b;
    }

    static dividir(a, b) {
        return a / b;
    }
}
console.log(Calculadora.somar(5, 10));
console.log(Calculadora.subtrair(5, 10));
console.log(Calculadora.multiplicar(5, 10));
console.log(Calculadora.dividir(5, 10));