class Livro {
    constructor(titulo, autor, ano, emprestado) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this._emprestado = false;
    }

    emprestar() {
        if (this._emprestado === false) {
            this._emprestado = true;
            console.log("Livro emprestado com sucesso!")
        } else {
            console.log("Este livro já está emprestado.");
        }
    }

    devolver() {
        if (this._emprestado === true) {
            this._emprestado = false;
            console.log("Livro devolvido com sucesso!");
        } else {
            console.log("Este livro não está emprestado.");
        }
    }

    status() {
        return this._emprestado ? "Emprestado" : "Disponivel";
    }
}

class BibliotecaUtil {

    static compararAno(livro1, livro2) {
        if (livro1.ano > livro2.ano) {
            return `${livro1.titulo} é mais recente`;
        } else if (livro2.ano > livro1.ano) {
            return `${livro2.titulo} é mais recente`;
        } else {
            return "Os dois livros foram lançados no mesmo ano.";
        }
    }
}

const l1 = new Livro("Clean Code", "Robert Martin", 2008);
const l2 = new Livro("Refactoring", "Martin Fowler", 1999);

l1.emprestar();
console.log(l1.status());
l1.devolver();
console.log(l1.status());

console.log(BibliotecaUtil.compararAno(l1, l2));