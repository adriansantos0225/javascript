async function removerComentario() {
   try {
     const resposta = await fetch("https://jsonplaceholder.typicode.com/comments/10", {
        method: "DELETE"
    });
    if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
    }
    
    console.log("Comentário removido com sucesso!");

   } catch(erro) {
    console.log("Erro ao deletar comentário", erro.message);
   }
}
removerComentario();