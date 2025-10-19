class Conversor {
    static paraDolar(valor) {
        return (valor / 5).toFixed(2);
    }

    static paraEuro(valor) {
        return (valor / 6).toFixed(2);
    }

    static converterParaTodas(valor) {
        return {
            dolar: this.paraDolar(valor),
            euro: this.paraEuro(valor)
        };
    }
}

console.log(Conversor.paraDolar(50));
console.log(Conversor.paraEuro(60));
console.log(Conversor.converterParaTodas(120));