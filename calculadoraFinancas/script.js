const inputDescricao = document.getElementById('descricao');
const inputValor = document.getElementById('valor');
const btnReceita = document.getElementById('addReceita');
const btnDespesa = document.getElementById('addDespesa');
const listaTransacoes = document.getElementById('listaTransacoes');


class Transacao {
    constructor(descricao, valor, tipo) {
        this.descricao = descricao;
        this.valor = valor;
        this.tipo = tipo;
    }
}

class ControleFinanceiro {
    constructor() {
        const dadosSalvos = JSON.parse(localStorage.getItem('transações')) || [];
        this.transacoes = dadosSalvos;
        this.atualizarSaldo();
        this.atualizarLista();
    }

    adicionarTransacao(descricao, valor, tipo) {
        const novaTransacao = new Transacao(descricao, valor, tipo);
        this.transacoes.push(novaTransacao);
        this.atualizarSaldo();
        this.atualizarLista();
        localStorage.setItem('transações', JSON.stringify(this.transacoes));
    }

    atualizarSaldo() {
        let total = this.transacoes.reduce((acumulador, transacao) => {
            return transacao.tipo === 'receita'
                ? acumulador + transacao.valor
                : acumulador - transacao.valor;
        }, 0);
        document.getElementById('saldo').textContent = `Saldo total: R$ ${total.toFixed(2)}`;
    }

    atualizarLista() {
        listaTransacoes.innerHTML = '';

        this.transacoes.forEach((t) => {
            const li = document.createElement('li');
            li.textContent = `${t.descricao} - R$ ${t.valor.toFixed(2)} (${t.tipo})`;

            li.style.color = t.tipo === 'receita' ? 'green' : 'red';

            listaTransacoes.appendChild(li);
        })
    }
}

const controle = new ControleFinanceiro();

btnReceita.addEventListener('click', () => {
    const descricao = inputDescricao.value;
    const valor = Number(inputValor.value);
    controle.adicionarTransacao(descricao, valor, 'receita');
});

btnDespesa.addEventListener('click', () => {
    const descricao = inputDescricao.value;
    const valor = Number(inputValor.value);
    controle.adicionarTransacao(descricao, valor, 'despesa');
});

const btnLimpar = document.getElementById('limpar');
btnLimpar.addEventListener('click', () => {
    localStorage.removeItem('transações');
    controle.transacoes = [];
    controle.atualizarSaldo();
    controle.atualizarLista();
})