class Conversor {
    

    static paraDolar(valorEmReais) {
        return (valorEmReais / 5.50).toFixed(2);
    }

    static paraEuro(valorEmReais) {
        return (valorEmReais / 6.00).toFixed(2);
    }
}

console.log(Conversor.paraDolar(55));
console.log(Conversor.paraEuro(60));

// exercicio de temperatura

class Temperatura {
    static celsiusParaFahrenheit(celsius) {
        return ((celsius * 9/5) + 32).toFixed(2);
    }

    static fahrenheitParaCelsius(fahrenheit) {
        return ((fahrenheit -32) * 5/9).toFixed(2);
    }

    static celsiusParaKelvin(celsius) {
        return (celsius + 273.15).toFixed(2);
    }
}

console.log(Temperatura.celsiusParaFahrenheit(25));
console.log(Temperatura.fahrenheitParaCelsius(77));
console.log(Temperatura.celsiusParaKelvin(0));