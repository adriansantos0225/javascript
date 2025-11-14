const carro = {marca: "VW", modelo: "Fox", ano: 2006};
const convertido = JSON.stringify(carro);
console.log(convertido);

// ex 2
const json = `{"produto": "Camiseta", "preco": 59.90}`;
const converter = JSON.parse(json);
console.log(converter);

// ex 3
const dados = `{"nome": "Ana", "idade": 21}`;
const c = JSON.parse(dados);
console.log(c);

// ex 4
const usuario = {
  nome: "Carlos",
  hobbies: ["ler", "programar", "treinar"]
};
const con = JSON.stringify(usuario);
console.log(con);

// ex 5
const json2 = `{"id": 10, "nome": "Teclado Mecânico", "estoque": 15}`;
const jsonNome = JSON.parse(json2);
console.log(jsonNome.nome);

// ex 6
const json3 = `{
  "nome": "Marcos",
  "endereco": {
    "cidade": "Rio de Janeiro",
    "cep": "12345-000"
  }
}`;
const jsonJson = JSON.parse(json3);
console.log(jsonJson);

// ex 7
const lista = ["banana", "uva", "maçã"];
const conver = JSON.stringify(lista);
console.log(conver);

// ex 8
const json4 = `{ "a": 10, "b": 20, "c": "texto" }`;
const corrigir = JSON.parse(json4);
console.log(corrigir);

// ex 9
const json5 = `{"usuario": "Admin", "senha": "123456"}`;
const obj = JSON.parse(json5);
delete obj.senha;
console.log(obj);

// ex 10
const produto = {
  nome: "Notebook",
  preco: 3500
};
const cnt = JSON.stringify(produto, null, 2);
console.log(cnt);