function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) resolve({ nome: "Adrian", idade: 24 });
      else reject("Usuário não encontrado");
    }, 2000);
  });
}

async function mostrarUsuario() {
    try {
        const resposta = await buscarUsuario(2);
        console.log(resposta.nome);
    } catch (erro) {
        console.log(erro);
    }
}
mostrarUsuario();