let idade = 80;

let votar = () => {
    if (idade <= 16) {
        console.log('Não pode votar');
    }else if (idade >= 70) {
        console.log('Voto facultativo');
    }else {
        console.log('Voto obrigatório');
    }
}

votar();