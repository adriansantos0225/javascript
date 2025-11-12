async function atualizarTitulo() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/3", {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                title: "Titulo alterado"
            })
        });

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }
        const dados = await resposta.json();
        console.log("PATCH", dados);

    } catch (erro) {
        console.log("Erro ao alterar titulo", erro.message);
    }
}
atualizarTitulo();