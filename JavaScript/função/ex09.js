function calcular(a, b, operacao) {
    return operacao(a,b);
}

    function soma(x, y) {
        return x + y;
    }


console.log(calcular(8, 9, soma));

