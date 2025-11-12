async function atualizarProduto() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/5", {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title: "Produto atualizado",
                body: "Descrição atualizado do produto",
                userId: 1
            })
        });

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const dados = await resposta.json();
        console.log("PUT", dados);
    } catch (erro) {
        console.log("Falha ao atualizar o produto:", erro.message);
    }
}

atualizarProduto();