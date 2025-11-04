function saudacao(msg) {
  return function(nome) {
    return `${msg}, ${nome}!`;
  };
}

const oi = saudacao("Olá");
console.log(oi("Adrian"));
 // Saudação("Olá") retorna uma função
 // Essa função lembra do msg -> isso é closure

 // ex 2
 function criarContador() {
    let contador = 0;

    function aumenta() {
        return contador++;
    }

    return aumenta;
}
const contador1 = criarContador();

console.log(contador1());
console.log(contador1());
console.log(contador1());

// ex 3
function contadorDuplo(valorInicial = 0) {
  let cont = valorInicial;

  return {
    aumentar() {
      cont += 2
      return cont;
    },
    diminuir() {
      cont -= 2
      return cont;
    },
    mostrar() {
      return cont;
    },
    resetar() {
      cont = valorInicial;
      return cont;
    }
  };
}
const c = contadorDuplo(10);

console.log(c.mostrar());
console.log(c.aumentar());
console.log(c.aumentar());
console.log(c.diminuir());
console.log(c.resetar());