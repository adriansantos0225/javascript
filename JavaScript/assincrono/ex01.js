function esperar(ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
}

async function executar() {
    console.log("Esperando 2 segundos...");
    await esperar(2000);
    console.log("Pronto");
}
executar();