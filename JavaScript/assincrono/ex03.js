function buscarPreco(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (id === 10) res({ nome: "Mouse Gamer", preco: 150 });
      else rej("Produto não encontrado!");
    }, 1500);
  });
}

async function mostrarPreco() {
  try {
    const resposta = await buscarPreco(10);
    console.log(`Produto: ${resposta.nome}`);
    console.log(`Preço: R$${resposta.preco}`);
  } catch (erro) {
    console.log(erro);
  }
}

mostrarPreco();