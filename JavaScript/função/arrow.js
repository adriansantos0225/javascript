// função básica
function date() {
    return new Date();
}

// escrito em arrow function
const date2 = () => new Date();
/* declara uma variavel e depois dos parametros escreve a arrow: =>
    Se a função tiver somente um retorno, então não precisa da palavra ' return, e não precisa das {}*/

// função básica com parametro
function isZero(number) {
    return number === 0;
}

// escrito em arrow function
const isZero2 = number => number === 0;
/* Se tiver somente um parametro, então não precisa dos () */

// função básica
function soma(a, b) {
    console.log("Calculando a soma");
    return a + b;
}

// escrito em arrow function
const soma2 = (a, b) => {
    console.log("Calculando a soma");
    return a + b;
}
// Como tem mais de um parametro e faz mais de uma coisa, não pode tirar () e {}

// usando arrow em evento
document.addEventListener('click', () => console.log("Clicou"));

