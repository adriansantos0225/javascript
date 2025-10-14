const contarLetras = (palavras) =>
     palavras.reduce((acumulador, palavra) => acumulador + palavra.length, 0);

console.log(contarLetras(['casa', 'sol']));