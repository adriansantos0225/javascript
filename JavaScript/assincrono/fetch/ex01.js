async function carregarPosts() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await resposta.json();
        const primeiros = posts.slice(0,5);
        console.log(primeiros);
    } catch(erro) {
        console.log("Erro ao carregar posts", erro);
    }
}
carregarPosts();