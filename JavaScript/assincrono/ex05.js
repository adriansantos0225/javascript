function buscarUsuario() {
    return new Promise(res => {
        setTimeout(() => res({ nome: "Adrian" }), 2000);
    });
}

function buscarPedidos() {
    return new Promise(res => {
        setTimeout(() => res(["Mouse", "Teclado", "Headset"]), 2000);
    });
}

function buscarEndereco() {
    return new Promise(res => {
        setTimeout(() => res({cidade: "São Paulo", bairro: "Centro"}), 2000);
    });
}

async function carregarTudo() {
    try {
        const [usuario, pedidos, endereco] = await Promise.all([
            buscarUsuario(),
            buscarPedidos(),
            buscarEndereco()
        ]);
        
        console.log("Usuário:", usuario.nome);
        console.log("Pedidos:", pedidos.join(", "));
        console.log("Bairro:", endereco.bairro);
    } catch(erro) {
        console.log(erro);
    }
}
carregarTudo();