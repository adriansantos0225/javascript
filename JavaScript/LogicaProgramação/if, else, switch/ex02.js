let idade = 10;

if ((idade >= 16 && idade <= 18) || idade >= 70) {
    console.log("Voto opcional");
} else if (idade > 18 && idade < 70) {
    console.log("Voto obrigátorio");
} else {
    console.log("Não pode votar");
}

