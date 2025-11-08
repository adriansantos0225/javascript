class ConversorTemperatura {

    static celsiusParaFahrenheit(c) {
        return (c * 1.8 + 32).toFixed(2);
    }
}
console.log(ConversorTemperatura.celsiusParaFahrenheit(30));

// ex 2
class Texto {

    static contarLetras(palavra) {
        return palavra.length;
    }
}
console.log(Texto.contarLetras("JavaScript"));

// ex 3
class Calculadora {

    static media(a, b, c) {
        return (a + b + c) / 3;
    }
}
console.log(Calculadora.media(10, 20, 30));

// ex 4
class Datautil {

    static hoje() {
        let date = new Date();
        let dia = date.getDate();
        let mes = date.getMonth() + 1;
        let ano = date.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }
}
console.log(Datautil.hoje());

// ex 5
class Moeda {

    static realParaDolar(reais, cotacao) {
        return (reais / cotacao).toFixed(2);
    }
}
console.log(Moeda.realParaDolar(100, 5.20));