class Conversor {
    static kmParaMilha(km) {
        return km * 0.621371;
    }
}

console.log(Conversor.kmParaMilha(5));

// ex 2
class Matematica {

    static dobro(n) {
        return n * 2;
    }
}
console.log(Matematica.dobro(8));

// ex 3
class IMC {

    static calcular(peso, altura) {
        return (peso / (altura * altura)).toFixed(2);
    }
}
console.log(IMC.calcular(70,1.75));

// ex 4
class Mensagem {

    static boasVindas(nome) {
        return `Bem-vindo, ${nome}`;
    }
}
console.log(Mensagem.boasVindas("Adrian"));