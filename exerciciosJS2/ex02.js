const carro = {marca: 'Ford', modelo: 'Mustang', ano: 2020};

function detalhesCarro ({marca, modelo, ano}) {
    console.log(`O carro é um ${marca} ${modelo}, ano ${ano}`);
}

detalhesCarro(carro);