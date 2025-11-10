function buscarUsuario(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (id === 1) res({ id: 1, nome: "Adrian" });
            else rej("Usuário não encontrado");
        }, 1500);
    });
}

function buscarPedidos(idUsuario) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (idUsuario === 1) res(["Mouse Gamer", "Teclado Mecânico", "Headset"]);
            else rej("Nenhum pedido encontrado");
        }, 1500);
    });
}

async function mostrarPedidoDoUsuario() {
    try {
        const usuario = await buscarUsuario(1);
        console.log(usuario.nome);

        const pedidos = await buscarPedidos(usuario.id);
        console.log("Pedidos:", pedidos.join(", "));
    } catch(erro) {
        console.log(erro);
    }
}

mostrarPedidoDoUsuario();