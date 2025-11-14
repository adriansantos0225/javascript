const obj = {nome: "Adrian", idade: 24};

const convertido = JSON.stringify(obj);
console.log(convertido);

// ex 2
const json = `{"nome": "Adrian", "idade": 24}`;
const converter = JSON.parse(json);
console.log(converter);