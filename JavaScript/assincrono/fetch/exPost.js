async function enviarComentario() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/comments" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Adrian",
                email: "adrian@gmail.com",
                body: "Gostei muito desse post!"
            })
        });
        const resultado = await resposta.json();
        console.log("Comentário criado:", resultado);
    } catch (erro) {
        console.log("Erro ao criar comentário", erro);
    }
}
enviarComentario();