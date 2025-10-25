class Usuario {
    static total = 0;

    constructor() {
        Usuario.total++;
    }

    static mostrarTotal() {
        console.log(`Total de usuarios criados : ${Usuario.total}`);
    }
}

const usu1 = new Usuario();
const usu2 = new Usuario();

Usuario.mostrarTotal();