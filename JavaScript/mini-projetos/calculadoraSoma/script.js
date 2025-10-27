const inputsContainer = document.getElementById('inputs-container');
const adicionar = document.getElementById('adicionar');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

let contador = 1;

// Cria um input com label e validação animada
const criarInput = () => {
    const wrapper = document.createElement('div');

    const label = document.createElement('label');
    label.textContent = `Número ${contador}: `;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Digite um número';

    // Validação em tempo real
    input.addEventListener('input', () => {
        if (isNaN(Number(input.value)) && input.value !== '') {
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    });

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    inputsContainer.appendChild(wrapper);

    contador++;
    input.focus();
};

// Função de soma genérica
const somarInputs = (...inputs) => {
    const valores = inputs.map(input => Number(input.value));
    if (valores.some(isNaN)) return null;
    return valores.reduce((acc, curr) => acc + curr, 0);
};

// Adiciona primeiro input
criarInput();

// Eventos dos botões
adicionar.addEventListener('click', criarInput);

calcular.addEventListener('click', () => {
    const inputs = [...inputsContainer.querySelectorAll('input')];
    const soma = somarInputs(...inputs);

    if (soma === null) {
        resultado.textContent = 'Por favor, corrija os números inválidos!';
        resultado.style.color = '#f44336';
        return;
    }

    resultado.textContent = `Resultado: ${soma}`;
    resultado.style.color = '#4caf50';

    // Limpa inputs e foca no primeiro
    inputs.forEach(input => input.value = '');
    if (inputs[0]) inputs[0].focus();
});
