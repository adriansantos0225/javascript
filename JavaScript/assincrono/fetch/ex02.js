async function carregarPosts() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!resposta.ok) {
            throw new Error (`Erro HTTP: ${resposta.status}`);
        }

        const dados =  await resposta.json();
        const titulos = dados.map(post => post.title);
        console.log(titulos);
    } catch (erro) {
        console.log("Algo deu errado", erro.message);
    }
}
carregarPosts();