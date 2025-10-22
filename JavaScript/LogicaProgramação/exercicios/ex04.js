let nota1 = 8;
let nota2 = 6;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;
console.log(`Média: ${media.toFixed(2)}`);

if(media >= 7 ) {
    console.log("Situação: Aprovado");
} else if (media >= 5 && media <= 6.9) {
    console.log("Situação: De recuperação");
} else {
    console.log("Situação: Reprovado");
}
