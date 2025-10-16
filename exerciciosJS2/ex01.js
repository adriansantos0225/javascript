function saudar(nome = 'Visitante') {
    console.log(`Olá, ${nome}`);
}

saudar('Ana');
saudar();

function calcularTotal(preco, quantidade = 1) {
    return preco * quantidade;
}
console.log(calcularTotal(50, 3));
console.log(calcularTotal(80));

function enviarMensagem(mensagem, destinatario = 'Usuário') {
    console.log(`Enviando ${mensagem} para ${destinatario}`);
}

enviarMensagem('Bem vindo!', 'João');
enviarMensagem('Olá!');