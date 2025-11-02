const frutas = ["Maçã", "Banana", "Uva"];

function adicionarFruta(frutas, novaFruta) {
    return [...frutas, novaFruta];
}
console.log(adicionarFruta(frutas, "Morango"));
console.log(frutas); // array original permanece inalterado