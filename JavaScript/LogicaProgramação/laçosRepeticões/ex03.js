let senhaCorreta = 1234;
let entrada;

do {
    entrada = "0000";
    console.log(`Tentativa: ${entrada}`);
} while (entrada === senhaCorreta);

console.log("Acesso permitido");